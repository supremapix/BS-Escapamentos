import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';
const links = [['/servicos','Serviços'],['/escapamentos-curitiba','Escapamentos'],['/manutencao-automotiva-curitiba','Manutenção'],['/sobre','A oficina'],['/blog','Dicas'],['/contato','Contato']];
export default function Header() {
 const [open,setOpen] = useState(false);
 const toggle = useRef<HTMLButtonElement>(null);
 const location = useLocation();
 useEffect(() => setOpen(false), [location.pathname]);
 return <header className="site-header" onKeyDown={e => { if(e.key==='Escape'){setOpen(false);toggle.current?.focus();} }}>
 <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
 <div className="header-row">
 <Link to="/" className="brand" aria-label="BS CAR CENTER — início"><span className="brand-badge" aria-hidden="true">BS</span><span><strong>BS CAR CENTER</strong><small>Manutenção e escapamentos</small></span></Link>
 <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="menu-principal" onClick={()=>setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>} {open ? 'Fechar' : 'Menu'}</button>
 <nav id="menu-principal" className={'main-nav '+(open?'is-open':'')} aria-label="Navegação principal">
 {links.map(([to,label])=><NavLink key={to} to={to}>{label}</NavLink>)}
 <a className="nav-phone" href={'tel:+55'+COMPANY_INFO.phone.replace(/\D/g,'')}><Phone size={16}/>{COMPANY_INFO.phone}</a>
 </nav></div></header>;
}
