import fs from 'node:fs';
import path from 'node:path';
import { render,routes } from '../.prerender/entry-server.js';
const template=fs.readFileSync('dist/index.html','utf8');
for(const route of [...new Set(routes),'/404']){
 const {html,head}=render(route);
 const target=path.join('dist',route==='/'?'index.html':route.slice(1)+'.html');
 const directory=path.dirname(target);
 fs.mkdirSync(directory,{recursive:true});
 fs.writeFileSync(target,template.replace('</head>',head+'</head>').replace('<div id="root"></div>','<div id="root">'+html+'</div>'));
}
fs.writeFileSync('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[...new Set(routes)].map(r=>'\n<url><loc>https://www.bsescapamentos.com.br'+r+'</loc></url>').join('')+'\n</urlset>\n');
console.log('Prerendered '+new Set(routes).size+' existing routes and 404; generated sitemap.');
