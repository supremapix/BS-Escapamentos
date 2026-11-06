import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { render, routes } from '../.prerender/entry-server.js';
const review=JSON.parse(fs.readFileSync('review/localities-99.json','utf8'));
const config=JSON.parse(fs.readFileSync('vercel.json','utf8'));
const baseline=JSON.parse(execFileSync('git',['show',review.baseCommit+':vercel.json'],{encoding:'utf8'}));
assert.equal(new Set(review.rows.map(r=>r.path)).size,99);
for(const redirect of baseline.redirects)assert.ok(config.redirects.some(r=>JSON.stringify(r)===JSON.stringify(redirect)),'Published redirect changed');
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');
const areas=fs.readFileSync('dist/areas.html','utf8');
for(const row of review.rows){
 if(row.decision==='restore'){
  assert.ok(routes.includes(row.path),row.path);
  const html=fs.readFileSync('dist'+row.path+'.html','utf8');
  assert.ok(html.includes(row.name),row.path+' missing locality');
  assert.ok(html.includes('R. Pedro Gusso, 2340'),row.path+' missing actual store address');
  assert.ok(sitemap.includes('https://www.bsescapamentos.com.br'+row.path+'</loc>'));
  assert.ok(areas.includes('href="'+row.path+'"'));
 } else if(row.decision==='alias'){
  assert.ok(config.redirects.some(r=>r.source===row.path&&r.destination===row.destination&&r.permanent));
  assert.ok(routes.includes(row.destination));
  assert.ok(!routes.includes(row.path));
  assert.ok(!sitemap.includes(row.path+'</loc>'));
 } else {
  assert.ok(!routes.includes(row.path),'Unapproved restoration '+row.path);
  assert.ok(!config.redirects.some(r=>r.source===row.path),'Unapproved redirect '+row.path);
  assert.match(render(row.path).head,/noindex/);
 }
}
assert.equal(routes.length,117);
for(const path of ['/local/inexistente-qa','/blog/inexistente-qa','/servicos/inexistente-qa','/inexistente-qa'])assert.match(render(path).head,/noindex/);
console.log('PASS: 40 restored historical routes, one evidenced alias, 58 held routes, original redirects and unknown-route noindex.');
