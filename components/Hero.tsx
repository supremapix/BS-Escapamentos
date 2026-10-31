import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

const shortcuts = [
  ['/escapamentos-curitiba', 'Escapamentos'],
  ['/servicos/freios', 'Freios'],
  ['/servicos/suspensao', 'Suspensão'],
  ['/servicos/troca-de-oleo', 'Troca de óleo'],
];

export default function Hero() {
  const whatsapp = `https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação para meu veículo.')}`;
  return (
    <section id="home" className="home-hero" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span aria-hidden="true" /> BS ESCAPAMENTOS · AUTO CENTER</p>
          <h1 id="hero-title">Escapamentos e mecânica <span>em Curitiba.</span></h1>
          <p className="hero-description">Do diagnóstico à manutenção, encontre o cuidado que seu carro precisa. Conheça os serviços da nossa oficina no Novo Mundo e converse com a equipe.</p>
          <div className="hero-actions">
            <a className="hero-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} aria-hidden="true" /> Pedir uma avaliação <ArrowRight size={18} aria-hidden="true" /></a>
            <Link className="hero-secondary" to="/servicos">Explorar serviços <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <a className="hero-location" href={COMPANY_INFO.mapsLink} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" /> Novo Mundo, Curitiba <span>Como chegar <ArrowRight size={15} aria-hidden="true" /></span></a>
        </div>
        <figure className="hero-photo">
          <img src="/bs-loja.webp" width="680" height="510" alt="Fachada da BS Escapamentos e entrada da oficina em Curitiba" loading="eager" decoding="async" />
          <figcaption><span className="hero-photo-label">NOSSA OFICINA</span><strong>Conheça nossa estrutura no Novo Mundo.</strong><Link to="/contato">Contato e localização <Navigation size={16} aria-hidden="true" /></Link></figcaption>
        </figure>
      </div>
      <nav className="hero-services" aria-label="Serviços em destaque">
        <span>O que seu carro precisa?</span>
        <div>{shortcuts.map(([to,label]) => <Link key={to} to={to}>{label}<ArrowRight size={16} aria-hidden="true" /></Link>)}</div>
      </nav>
    </section>
  );
}
