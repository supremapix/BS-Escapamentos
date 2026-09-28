import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare, ShieldCheck, Clock, Award, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

interface StoreShowcaseProps {
  className?: string;
}

export const StoreShowcase: React.FC<StoreShowcaseProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-t border-gray-200/80 relative overflow-hidden ${className}`}>
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin size={14} className="text-primary-blue" />
            <span>Nossa Estrutura Física em Curitiba</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-primary-dark tracking-tight mb-4">
            Conheça Nossa Oficina e Instalações no <span className="text-primary-blue">Novo Mundo</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Oficina própria com ampla área de atendimento, boxes de manutenção equipados, elevadores automotivos, alinhamento computadorizado e fácil acesso pela Rua Pedro Gusso, próximo ao CIC e região sul de Curitiba.
          </p>
        </div>

        {/* 2 Main Store Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Photo 1: Unidade 2340 - Fachada Principal */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src="https://img.supremasite.com.br/bs/bs-loja.webp"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/bs-loja.webp'; }}
                alt="Fachada Oficial BS CAR CENTER na Rua Pedro Gusso, 2340 - Novo Mundo, Curitiba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-primary-dark/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                <MapPin size={13} className="text-primary-yellow" />
                <span>Rua Pedro Gusso, 2340</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-primary-yellow text-primary-dark text-xs font-black px-3 py-1 rounded-full shadow">
                Fachada Principal
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors">
                  Fachada Oficial & Recepção de Clientes
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Ponto de referência com mais de 28 anos de tradição. Atendimento para diagnósticos, orçamentos transparentes e recepção com profissionais qualificados.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1 text-primary-dark font-bold">
                  <Phone size={14} className="text-primary-blue" />
                  (41) 3268-3473
                </span>
                <span className="flex items-center gap-1 text-green-700 font-bold">
                  <MessageSquare size={14} className="text-green-600" />
                  (41) 99843-4800
                </span>
              </div>
            </div>
          </div>

          {/* Photo 2: Unidade 2324 - Pátio e Boxes de Manutenção */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img
                src="https://img.supremasite.com.br/bs/bs-loja-cic.webp"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/bs-loja-cic.webp'; }}
                alt="Pátio e Boxes de Manutenção Automotiva BS CAR CENTER - R. Pedro Gusso, 2324 - CIC e Novo Mundo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-primary-dark/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                <MapPin size={13} className="text-primary-yellow" />
                <span>Rua Pedro Gusso, 2324</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Pátio & Boxes de Serviço
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors">
                  Pátio Amplo & Boxes Operacionais
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Amplo espaço para circulação e manobra, elevadores automotivos de alta capacidade, alinhador 3D e infraestrutura ágil para veículos leves, SUVs e utilitários.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1 text-primary-dark font-bold">
                  <Wrench size={14} className="text-primary-blue" />
                  Mecânica Geral & Escapamentos
                </span>
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  Estacionamento Próprio
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Highlights and Action Bar with Video Background */}
        <div className="relative overflow-hidden bg-primary-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://img.supremasite.com.br/bs/bs-loja.webp"
            className="absolute inset-0 w-full h-full object-cover opacity-20 filter saturate-150 pointer-events-none"
          >
            <source src="https://img.supremasite.com.br/bs/bs.mp4" type="video/mp4" />
            <source src="/bs.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary-blue/80 pointer-events-none" />

          <div className="relative z-10 space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-primary-yellow text-xs font-bold tracking-wider uppercase">
              <Award size={16} />
              <span>Tradição, Procedência e Tecnologia</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Venha tomar um café e fazer uma avaliação preventiva do seu carro
            </h4>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-primary-yellow" />
                Seg a Sex: 08h às 18h | Sáb: 08h às 12h
              </span>
              <span className="hidden sm:inline text-gray-500">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-primary-yellow" />
                R. Pedro Gusso, 2340 / 2324 - Novo Mundo, Curitiba
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href={COMPANY_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-yellow hover:bg-yellow-400 text-slate-950 font-black py-3.5 px-6 rounded-2xl transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm text-center transform hover:-translate-y-0.5 active:scale-95"
            >
              <Navigation size={18} />
              <span>Abrir Rota no GPS</span>
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=${encodeURIComponent('Olá! Gostaria de agendar uma visita na oficina BS CAR CENTER na Rua Pedro Gusso.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-green hover:bg-green-500 text-white font-black py-3.5 px-6 rounded-2xl transition-all shadow-lg inline-flex items-center justify-center gap-2 text-sm text-center transform hover:-translate-y-0.5 active:scale-95"
            >
              <MessageSquare size={18} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreShowcase;
