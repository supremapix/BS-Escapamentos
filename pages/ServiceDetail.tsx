import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { SERVICES, COMPANY_INFO } from '../data/constants';
import * as Icons from 'lucide-react';
import { LucideIcon, ArrowRight, CheckCircle2, MessageCircle, MapPin, ChevronRight, Plus, Minus, Clock, Phone } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (slug === 'manutencao-automotiva') {
    return <Navigate to="/manutencao-automotiva-curitiba" replace />;
  }

  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const IconComponent = (Icons as any)[service.iconName] as LucideIcon;
  const relatedServices = SERVICES.filter(s => s.slug !== service.slug && s.slug !== 'manutencao-automotiva').slice(0, 3);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <EnhancedSEO 
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/servicos/${service.slug}`}
        keywords={`${service.title.toLowerCase()}, ${service.shortTitle?.toLowerCase() || ''} curitiba, oficina novo mundo, auto center cic curitiba`}
        serviceData={{
          name: service.title,
          description: service.description
        }}
      />

      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4 mb-6">
          <nav className="text-sm text-gray-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary-blue">Início</Link>
            <span>/</span>
            <Link to="/manutencao-automotiva-curitiba" className="hover:text-primary-blue">Manutenção Automotiva</Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-primary-blue">Serviços</Link>
            <span>/</span>
            <span className="text-gray-800 font-semibold">{service.shortTitle || service.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="bg-primary-dark py-14 text-white relative overflow-hidden mb-12 border-b-4 border-primary-yellow">
          <div className="absolute inset-0 bg-primary-blue/20"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-primary-yellow uppercase tracking-wider mb-3">
              <span>BS CAR CENTER</span>
              <span>•</span>
              <span>Novo Mundo, Curitiba</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">
              {service.h1}
            </h1>

            {/* Answer-First AIO Block (50-80 words) */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-gray-100 text-base md:text-lg leading-relaxed shadow-lg mb-8">
              <p>{service.answerFirst}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Gostaria de consultar sobre ${service.title} na BS CAR CENTER.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-green hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageCircle size={20} /> Agendar Atendimento
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="bg-white/10 hover:bg-white hover:text-primary-dark text-white font-bold py-3.5 px-8 rounded-full border border-white/30 transition-all flex items-center gap-2"
              >
                <Phone size={20} /> Ligar: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Technical Details Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary-blue/10 text-primary-blue rounded-2xl flex items-center justify-center">
                    {IconComponent && <IconComponent size={28} />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-primary-dark">
                      O Que Está Incluído no Procedimento
                    </h2>
                    <p className="text-gray-500 text-sm">Inspeção técnica e aplicação conforme especificações de fábrica</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 size={20} className="text-primary-green shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-primary-dark mb-2">Procedimento de Atendimento</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Todo veículo que ingressa na oficina é submetido a uma avaliação inicial. Os diagnósticos e orçamentos são previamente explicados ao proprietário com total transparência antes do início dos serviços mecânicos.
                  </p>
                </div>
              </div>

              {/* Service FAQ */}
              {service.faq && service.faq.length > 0 && (
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-heading font-bold text-primary-dark mb-6">
                    Dúvidas Frequentes sobre {service.shortTitle || service.title}
                  </h2>
                  <div className="space-y-4">
                    {service.faq.map((item, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-white transition-colors text-left font-bold text-gray-800 text-sm md:text-base"
                        >
                          <span>{item.question}</span>
                          {openFaq === idx ? <Minus size={18} className="text-primary-blue shrink-0" /> : <Plus size={18} className="text-gray-400 shrink-0" />}
                        </button>
                        {openFaq === idx && (
                          <div className="p-5 pt-0 bg-white border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-6">
                  Outros Serviços de Manutenção Automotiva
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/servicos/${rel.slug}`}
                      className="p-4 rounded-xl border border-gray-200 hover:border-primary-blue hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-primary-dark text-sm group-hover:text-primary-blue transition-colors mb-1">
                          {rel.shortTitle || rel.title}
                        </h4>
                        <p className="text-gray-500 text-xs line-clamp-2">{rel.description}</p>
                      </div>
                      <span className="text-primary-blue text-xs font-semibold mt-3 inline-flex items-center gap-1">
                        Saiba mais <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <Link
                    to="/manutencao-automotiva-curitiba"
                    className="text-sm font-bold text-primary-blue hover:underline"
                  >
                    ← Ver Visão Geral da Manutenção Automotiva em Curitiba
                  </Link>
                </div>
              </div>

            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28 space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Agendar Avaliação</h3>
                  <p className="text-gray-500 text-xs">Atendimento no bairro Novo Mundo, Curitiba</p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Gostaria de agendar o serviço de ${service.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary-green hover:bg-green-600 text-white font-bold py-3.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <MessageCircle size={18} /> Chamar no WhatsApp
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="w-full border border-gray-300 hover:border-primary-blue text-gray-800 font-bold py-3 px-4 rounded-xl text-center flex items-center justify-center gap-2 transition-all text-sm"
                  >
                    <Phone size={16} /> Ligar: {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-3 text-xs text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-primary-blue shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-800">Endereço</strong>
                      <span>{COMPANY_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock size={16} className="text-primary-blue shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-800">Horário</strong>
                      <span>Seg. a Sex. das 08h às 18h | Sáb. das 08h às 12h</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span className="block font-bold text-primary-dark text-xs mb-1">Garantia nos Serviços</span>
                  <p className="text-gray-600 text-[11px] leading-relaxed">
                    Garantia legal de 90 dias para mão de obra (Art. 26 do CDC) e garantia dos fabricantes para componentes substituídos.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default ServiceDetail;
