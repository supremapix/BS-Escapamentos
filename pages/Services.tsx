import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { SERVICES, COMPANY_INFO } from '../data/constants';
import * as Icons from 'lucide-react';
import { LucideIcon, ArrowRight, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <>
      <EnhancedSEO 
        title="Serviços Automotivos no CIC e Curitiba - BS Escapamentos" 
        description="Confira a lista completa de serviços da BS Escapamentos. Escapamentos esportivos, freios ABS, suspensão e troca de óleo no CIC e Neo Ville." 
        canonicalPath="/servicos"
        keywords="serviços automotivos cic, escapamentos esportivos curitiba, freios abs neo ville, troca de oleo cic"
      />
      
      <div className="pt-24 pb-16 bg-gray-50">
        
        {/* Header */}
        <div className="bg-primary-blue py-20 text-center text-white mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <span className="text-primary-yellow font-bold tracking-widest uppercase text-sm mb-2 block">Soluções Automotivas</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Cuidamos de cada detalhe do seu carro com a expertise de quem entende de mecânica de verdade.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service) => {
              const IconComponent = (Icons as any)[service.iconName] as LucideIcon;
              
              return (
                <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
                  <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary-blue group-hover:bg-primary-blue group-hover:text-primary-yellow transition-colors shrink-0">
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle2 size={16} className="text-green-500" /> Diagnóstico Preciso
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle2 size={16} className="text-green-500" /> Garantia de Serviço
                        </li>
                    </ul>
                    <a 
                        href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Gostaria de saber mais sobre o serviço de ${service.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-blue font-bold hover:text-primary-yellow transition-colors w-full justify-between border-t border-gray-100 pt-4"
                    >
                        Solicitar Orçamento <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200">
             <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-3xl font-heading font-bold text-gray-800 mb-6">Não encontrou o que procurava?</h2>
               <p className="text-lg text-gray-600 mb-8">
                 Além dos serviços listados, realizamos diversos outros procedimentos de mecânica geral, elétrica básica e instalação de acessórios. 
                 Se o seu carro apresenta algum problema não listado aqui, entre em contato!
               </p>
               <a 
                 href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
                 className="inline-block bg-primary-green hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg transform hover:-translate-y-1"
               >
                 Falar com um Especialista
               </a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;