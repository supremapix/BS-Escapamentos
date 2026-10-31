import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { AppContent } from './App';
import { SERVICES, LOCATIONS, BLOG_POSTS } from './data/constants';
export const routes=['/','/servicos','/sobre','/contato','/areas','/blog','/manutencao-automotiva-curitiba','/escapamentos-curitiba',...SERVICES.filter(s=>s.slug!=='manutencao-automotiva').map(s=>'/servicos/'+s.slug),...LOCATIONS.map(l=>'/local/'+l.slug),...BLOG_POSTS.map(p=>'/blog/'+p.slug)];
export function render(url:string){
 const context:any={};
 const html=renderToString(<HelmetProvider context={context}><StaticRouter location={url}><AppContent/></StaticRouter></HelmetProvider>);
 const {helmet}=context;
 return {html,head:helmet.title.toString()+helmet.meta.toString()+helmet.link.toString()+helmet.script.toString()};
}
