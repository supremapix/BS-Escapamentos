import React from 'react';
import SEO from '../components/SEO';
import { ShieldCheck, Award, Users, Wrench, Target, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO, HERO_IMAGES } from '../data/constants';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="Sobre Nós" 
        description="Conheça a BS Escapamentos, sua oficina mecânica de confiança em Curitiba. Mais de 12 anos de experiência em escapamentos, suspensão e freios." 
        canonicalPath="/sobre"
      />
      
      <div className="pt-24 pb-16 bg-white">
        
        {/* Header Section */}
        <div className="bg-primary-dark py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/90 to-primary-dark/90"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Nossa História</h1>
             <p className="text-xl text-gray-200 max-w-2xl mx-auto">
               Tradição, honestidade e excelência técnica no cuidado com o seu veículo.
             </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
           <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
              <div className="w-full md:w-1/2">
                <div className="relative p-2 bg-white rounded-2xl shadow-xl transform rotate-1">
                   <img src={HERO_IMAGES[2]} alt="Equipe BS Escapamentos" className="rounded-xl w-full" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                 <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Quem Somos</h2>
                 <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                   A <strong>BS Escapamentos</strong> nasceu com um propósito claro: oferecer serviços automotivos com transparência e qualidade técnica superior em Curitiba.
                 </p>
                 <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                   Localizada estrategicamente no bairro Novo Mundo, nossa oficina começou especializada em escapamentos e catalisadores. Com a crescente demanda de nossos clientes fiéis, expandimos nossa expertise para nos tornarmos um Auto Center completo.
                 </p>
                 <p className="text-gray-600 leading-relaxed text-lg">
                   Hoje, somos referência em manutenção preventiva e corretiva, atendendo desde veículos de passeio até utilitários, sempre com o compromisso de entregar o carro em perfeitas condições de segurança.
                 </p>
              </div>
           </div>

           {/* Mission Vision Values */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-primary-yellow shadow-sm hover:shadow-md transition-shadow">
                 <Target className="text-primary-blue w-12 h-12 mb-4" />
                 <h3 className="text-xl font-bold text-primary-dark mb-3">Missão</h3>
                 <p className="text-gray-600">Proporcionar segurança e conforto aos motoristas através de serviços automotivos de excelência, com atendimento ágil e honesto.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-primary-blue shadow-sm hover:shadow-md transition-shadow">
                 <Users className="text-primary-blue w-12 h-12 mb-4" />
                 <h3 className="text-xl font-bold text-primary-dark mb-3">Visão</h3>
                 <p className="text-gray-600">Ser reconhecida como a oficina mecânica de maior confiança em Curitiba e Região Metropolitana.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border-t-4 border-primary-green shadow-sm hover:shadow-md transition-shadow">
                 <ShieldCheck className="text-primary-blue w-12 h-12 mb-4" />
                 <h3 className="text-xl font-bold text-primary-dark mb-3">Valores</h3>
                 <p className="text-gray-600">Transparência no diagnóstico, qualidade nas peças, respeito ao cliente e responsabilidade ambiental.</p>
              </div>
           </div>

           {/* Why Choose Us */}
           <div className="mb-20">
             <h2 className="text-3xl font-heading font-bold text-primary-dark text-center mb-12">Nossa Estrutura</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Wrench, title: "Equipamentos Modernos", text: "Scanners de última geração para diagnóstico preciso." },
                  { icon: Award, title: "Peças Originais", text: "Parceria com os melhores fornecedores do mercado." },
                  { icon: Clock, title: "Agilidade", text: "Respeito ao seu tempo com prazos cumpridos." },
                  { icon: MapPin, title: "Fácil Acesso", text: "Localização privilegiada no Novo Mundo." }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="bg-primary-blue/10 p-4 rounded-full mb-4 text-primary-blue">
                      <item.icon size={32} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-500">{item.text}</p>
                  </div>
                ))}
             </div>
           </div>

           {/* CTA */}
           <div className="bg-primary-blue text-white rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-4">Venha nos conhecer!</h2>
                 <p className="mb-8 text-xl opacity-90">Traga seu veículo para uma avaliação sem compromisso e tome um café conosco.</p>
                 <a 
                   href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-block bg-primary-yellow text-primary-blue font-black py-4 px-10 rounded-full hover:bg-white transition-colors"
                 >
                   Agendar Visita
                 </a>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default About;