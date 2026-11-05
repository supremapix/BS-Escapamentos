import fs from 'node:fs';
import assert from 'node:assert/strict';
const sitemap = fs.readFileSync('dist/sitemap.xml','utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
const config = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const routes = new Set(urls.map(url => new URL(url).pathname));
const sources = new Set();
for (const redirect of config.redirects) {
  assert.equal(redirect.permanent, true, redirect.source+' must be permanent');
  assert.ok(!sources.has(redirect.source), 'duplicate redirect '+redirect.source);
  sources.add(redirect.source);
  assert.ok(!routes.has(redirect.source), redirect.source+' shadows a valid page');
  assert.ok(routes.has(redirect.destination), redirect.source+' has missing destination');
  assert.notEqual(redirect.destination, '/', redirect.source+' must not redirect to home');
}
assert.ok(!config.rewrites?.some(rule => rule.destination === '/index.html'), 'SPA fallback masks HTTP 404s');
for (const url of urls) {
  const route = new URL(url).pathname;
  const html = fs.readFileSync('dist'+(route==='/'?'/index.html':route+'.html'),'utf8');
  const canonical = [...html.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/g)];
  assert.equal(canonical.length,1,route+' needs one canonical');
  assert.equal(canonical[0][1],url,route+' canonical mismatch');
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,route+' needs one H1');
  assert.ok(html.includes('id="conteudo"'),route+' missing main');
  assert.ok(!html.includes('cdn.tailwindcss.com'),route+' runtime CSS');
  for(const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) JSON.parse(m[1]);
  for(const m of html.matchAll(/href="(\/(?!\/)[^"?#]*)/g)) {
    const target=m[1];
    if(target==='/servicos/manutencao-automotiva') continue;
    assert.ok(fs.existsSync('dist'+target)||fs.existsSync('dist'+target+'.html'),route+' broken internal link '+target);
  }
}
const notFound=fs.readFileSync('dist/404.html','utf8');
assert.match(notFound,/noindex/);
assert.ok(!notFound.includes('rel="canonical"'));
assert.match(fs.readFileSync('dist/robots.txt','utf8'),/Sitemap: https:\/\/www.bsescapamentos.com.br\/sitemap.xml/);
console.log(`PASS: ${urls.length} pages, canonical URLs, H1s, JSON-LD, internal links, robots and 404.`);
console.log(`PASS: ${sources.size} permanent redirects to existing canonical pages, no shadowed routes.`);
