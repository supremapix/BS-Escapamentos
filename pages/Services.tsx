import React from 'react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { SERVICES, COMPANY_INFO } from '../data/constants';
import * as Icons from 'lucide-react';
import { LucideIcon, ArrowRight, CheckCircle2, MessageCircle, Phone, MapPin, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <>
      <EnhancedSEO 
        title="Serviços de Manutenção Automotiva em Curitiba | BS CAR CENTER" 
        description="Conheça os serviços da BS CAR CENTER em Curitiba: freios, suspensão, geometria, balanceamento, injeção eletrônica, scanner, troca de óleo e escapamentos." 
        canonicalPath="/servicos"
        keywords="serviços automotivos curitiba, oficina mecanica novo mundo, bs car center curitiba, freios curitiba, suspensão curitiba, troca de oleo curitiba"
        serviceData={{
          name: "Serviços Automotivos BS CAR CENTER",
          description: "Catálogo completo de serviços de mecânica, diagnósticos e manutenção preventiva em Curitiba pela BS CAR CENTER."
        }}
      />
      
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        
        {/* Header Banner with Video Background */}
        <div className="bg-primary-dark py-16 text-center text-white mb-12 relative overflow-hidden border-b-4 border-primary-yellow">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://img.supremasite.com.br/bs/bs-loja.webp"
            className="absolute inset-0 w-full h-full object-cover opacity-25 filter saturate-150 pointer-events-none"
          >
            <source src="https://img.supremasite.com.br/bs/bs.mp4" type="video/mp4" />
            <source src="/bs.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/85 to-primary-dark/95"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <span className="text-primary-yellow font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">
              BS CAR CENTER | Novo Mundo - Curitiba
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-black mb-4">
              Serviços de Manutenção Automotiva em Curitiba
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Estrutura para diagnósticos precisos e manutenções preventivas e corretivas em sistemas mecânicos, elétricos e de exaustão.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Answer-first Hub highlight */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-primary-blue text-xs font-bold uppercase tracking-wider block mb-1">
                Visão Integrada
              </span>
              <h2 className="text-2xl font-heading font-bold text-primary-dark mb-2">
                Manutenção Preventiva e Diagnóstico Geral
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reunimos serviços mecânicos estruturados para veículos de passeio e utilitários leves no Novo Mundo, com fácil acesso ao CIC e região do Neo Ville. Conheça nossa visão completa de manutenção preventiva.
              </p>
            </div>
            <Link
              to="/manutencao-automotiva-curitiba"
              className="shrink-0 bg-primary-blue hover:bg-blue-900 text-white font-bold py-3.5 px-6 rounded-xl transition-all inline-flex items-center gap-2 shadow-md"
            >
              <Wrench size={18} /> Ver Hub de Manutenção
            </Link>
          </div>

          {/* Grid of confirmed services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service) => {
              const IconComponent = (Icons as any)[service.iconName] as LucideIcon;
              
              return (
                <div 
                  key={service.id} 
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-blue/30 flex flex-col justify-between group"
                >
                  <div>
                    <div className="bg-primary-blue/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-primary-blue group-hover:bg-primary-blue group-hover:text-primary-yellow transition-colors shrink-0">
                      {IconComponent && <IconComponent size={28} />}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-blue transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={service.slug === 'manutencao-automotiva' ? '/manutencao-automotiva-curitiba' : `/servicos/${service.slug}`}
                      className="text-primary-blue font-bold text-sm hover:text-primary-yellow transition-colors inline-flex items-center gap-1.5"
                    >
                      Detalhes técnicos <ArrowRight size={15} />
                    </Link>

                    <a 
                      href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Gostaria de consultar orçamento para ${service.title}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary-green hover:underline"
                    >
                      Orçamento
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Guidance & Modules note */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 mb-16">
             <div className="max-w-3xl mx-auto text-center">
               <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                 Dúvidas sobre compatibilidade ou outro reparo?
               </h2>
               <p className="text-gray-600 text-base mb-6 leading-relaxed">
                 Consulte compatibilidade para diagnóstico e reprogramação de módulos automotivos específicos, bem como manutenções personalizadas para o seu veículo. Nossa equipe atende com transparência e clareza.
               </p>
               <div className="flex flex-wrap justify-center gap-4">
                 <a 
                   href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-primary-green hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md inline-flex items-center gap-2"
                 >
                   <MessageCircle size={18} /> Falar pelo WhatsApp
                 </a>
                 <a 
                   href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                   className="border border-gray-300 hover:border-primary-blue text-gray-800 font-bold py-3.5 px-8 rounded-full transition-all inline-flex items-center gap-2"
                 >
                   <Phone size={18} /> Ligar {COMPANY_INFO.phone}
                 </a>
               </div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Services;
