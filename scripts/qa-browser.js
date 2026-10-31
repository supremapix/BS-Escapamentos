import { chromium } from '@playwright/test';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { preview } from 'vite';
const server = await preview({preview:{host:'127.0.0.1',port:4175,strictPort:true}});
fs.mkdirSync('qa',{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try {
 const consoleErrors=[];
 for(const size of [{width:1440,height:1000},{width:768,height:1024},{width:390,height:844},{width:320,height:740}]){
  const page=await browser.newPage({viewport:size});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')consoleErrors.push({width:size.width,text:m.text()});});
  const localFailures=[];
  page.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:4175/')&&r.status()>=400)localFailures.push({url:r.url(),status:r.status()});});
  await page.goto('http://127.0.0.1:4175/servicos',{waitUntil:'networkidle'});
  await page.locator('#buscar-servico').fill('oleo');
  await page.getByRole('status').filter({hasText:'2 serviços encontrados'}).waitFor();
  await page.locator('#buscar-servico').fill('zzzzzz');
  await page.getByRole('button',{name:'Limpar busca e ver todos'}).click();
  if(size.width<1200){
   await page.getByRole('button',{name:'Menu',exact:true}).click();
   await page.locator('#menu-principal').getByRole('link',{name:'Escapamentos',exact:true}).click();
   assert.equal(await page.getByRole('button',{name:'Menu',exact:true}).getAttribute('aria-expanded'),'false');
   await page.getByRole('button',{name:'Menu',exact:true}).click();
   await page.keyboard.press('Escape');
   assert.equal(await page.getByRole('button',{name:'Menu',exact:true}).getAttribute('aria-expanded'),'false');
   await page.goto('http://127.0.0.1:4175/servicos');
  }
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow');
  await page.screenshot({path:`qa/services-${size.width}.png`,fullPage:false});
  await page.goto('http://127.0.0.1:4175/');
  await page.locator('.hero-photo img').evaluate(img=>img.decode());
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'home horizontal overflow');
  assert.ok(await page.locator('.hero-copy h1').evaluate(el=>el.getBoundingClientRect().top>=80),'hero hidden by header');
  assert.equal(await page.locator('.hero-secondary').getAttribute('href'),'/servicos');
  assert.ok((await page.locator('.hero-primary').getAttribute('href')).includes('phone=5541998434800'));
  await page.keyboard.press('Tab');
  assert.equal(await page.locator(':focus').getAttribute('class'),'skip-link');
  await page.keyboard.press('Enter');
  assert.equal(await page.locator(':focus').getAttribute('id'),'conteudo');
  await page.locator('#conteudo').evaluate(el=>el.blur());
  await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
  await page.screenshot({path:`qa/home-${size.width}.png`,fullPage:false});
  await page.locator('#home').screenshot({path:`qa/hero-${size.width}.png`});
  assert.deepEqual(errors,[]);
  assert.deepEqual(localFailures,[]);
  await page.close();
 }
 const page=await browser.newPage({javaScriptEnabled:false});
 await page.goto('http://127.0.0.1:4175/servicos/freios');
 console.log('No-JS response:', page.url(), await page.locator('h1').allTextContents());
 await page.getByRole('heading',{level:1,name:'Freios em Curitiba'}).waitFor();
 await page.close();
 fs.writeFileSync('qa/console-errors.json',JSON.stringify(consoleErrors,null,2));
 console.log('Console error messages:',consoleErrors.length);
 assert.deepEqual(consoleErrors,[]);
 console.log('PASS: desktop/mobile search, menu, Escape, overflow, browser errors and JavaScript-disabled service content.');
} finally {await browser.close(); await new Promise(resolve=>server.httpServer.close(resolve));}


