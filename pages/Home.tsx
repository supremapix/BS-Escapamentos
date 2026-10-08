import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ActionTicker from '../components/ActionTicker';
import { 
  SERVICES, 
  COMPANY_INFO, 
  HOME_PRIMARY_AREAS, 
  BLOG_POSTS, 
  HOME_FAQS, 
  CLIENT_FEEDBACK, 
  DIFFERENTIALS 
} from '../data/constants';
import * as Icons from 'lucide-react';
import { LucideIcon, MapPin, ChevronRight, Plus, Minus, Calendar, Quote, MessageCircle, Phone, ArrowRight, Wrench, Navigation } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { trackFormSubmit } from '../lib/analytics';
import EnhancedSEO from '../components/EnhancedSEO';
import InstagramSection from '../components/InstagramSection';

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const onSubmit = (data: any) => {
    const message = `Olá! Vim pelo site da BS CAR CENTER.%0A%0A` +
                   `Nome: ${data.nome}%0A` +
                   `Telefone: ${data.telefone}%0A` +
                   `Email: ${data.email || 'Não informado'}%0A` +
                   `Serviço: ${data.servico}%0A` +
                   `Mensagem: ${data.mensagem}`;
    
    const url = `https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=${message}`;
    // GA4: só chega aqui após validação do react-hook-form. Nenhum campo digitado é enviado.
    trackFormSubmit('home_orcamento');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <EnhancedSEO 
        title="BS CAR CENTER | Manutenção Automotiva em Curitiba" 
        description="Auto Center em Curitiba com manutenção automotiva, freios, suspensão, geometria, balanceamento, scanner, injeção, troca de óleo, câmbio automático, motores e escapamentos na BS CAR CENTER." 
        canonicalPath="/"
        schemaType="AutoRepair"
        keywords="bs car center, auto center curitiba, manutenção automotiva curitiba, oficina mecanica curitiba, mecanica automotiva curitiba, auto center novo mundo, oficina cic curitiba, freios curitiba, suspensao curitiba, escapamentos curitiba"
      />
      
      {/* Task Letreiro de Ações Rápidas (Logo após o Header) */}
      <div className="pt-14 md:pt-[65px] bg-slate-950">
        <ActionTicker />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* AIO Answer-First Block (Item 9: 50-80 words) */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-50/70 border-l-4 border-primary-blue p-6 rounded-r-2xl shadow-sm">
            <span className="text-primary-blue text-xs font-bold uppercase tracking-wider block mb-2">
              Sobre a Oficina no Novo Mundo
            </span>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              A <strong>BS CAR CENTER</strong> realiza manutenção automotiva em Curitiba, com serviços de freios, suspensão, geometria, balanceamento, diagnóstico com scanner, sistema de injeção, troca de óleo, manutenção relacionada ao câmbio automático, motores e escapamentos. A oficina está localizada no Novo Mundo, com acesso às regiões do CIC, região do Neo Ville e bairros próximos.
            </p>
          </div>
        </div>
      </section>

      {/* Differentials Section (Audited claims) */}
      <section className="py-12 bg-primary-dark border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIALS.map((diff, index) => {
              const Icon = (Icons as any)[diff.icon] as LucideIcon;
              return (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary-yellow/40 transition-colors">
                  <div className="p-3 rounded-lg bg-primary-blue/30 text-primary-yellow shrink-0">
                    {Icon && <Icon size={22} />}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">{diff.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section (Item 23: Auto Center hierarchy & cards) */}
      <section id="servicos" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          <div className="text-center mb-14">
            <span className="text-primary-blue font-bold uppercase tracking-wider text-xs md:text-sm mb-2 block">
              Auto Center Completo em Curitiba
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-primary-dark">
              Serviços de Manutenção Automotiva
            </h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
              Atendimento técnico estruturado para inspeção, diagnóstico preventivo e reparações mecânicas em veículos nacionais e importados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const IconComponent = (Icons as any)[service.iconName] as LucideIcon;
              const isHub = service.slug === 'manutencao-automotiva';
              const targetUrl = isHub ? '/manutencao-automotiva-curitiba' : `/servicos/${service.slug}`;
              
              return (
                <div 
                  key={service.id} 
                  className={`bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border ${
                    isHub ? 'border-primary-blue bg-gradient-to-b from-blue-50/50 to-white' : 'border-gray-100 hover:border-primary-blue/40'
                  } flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary-blue/10 text-primary-blue flex items-center justify-center group-hover:bg-primary-blue group-hover:text-primary-yellow transition-colors">
                        {IconComponent && <IconComponent size={24} />}
                      </div>
                      {isHub && (
                        <span className="text-[10px] font-black uppercase tracking-wider bg-primary-yellow text-primary-dark px-2.5 py-1 rounded-full">
                          Principal
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary-blue transition-colors">
                      {service.shortTitle || service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link 
                      to={targetUrl}
                      className="text-primary-blue font-bold text-xs md:text-sm hover:text-primary-dark inline-flex items-center gap-1 group/btn"
                    >
                      <span>Ver detalhes</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <a 
                      href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Gostaria de consultar sobre ${service.shortTitle || service.title} no BS Auto Center.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-green hover:underline text-xs font-semibold"
                    >
                      Consultar
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/manutencao-automotiva-curitiba" 
              className="inline-flex items-center gap-2 bg-primary-blue hover:bg-blue-900 text-white font-bold py-3.5 px-8 rounded-full shadow-md transition-all text-sm"
            >
              <Wrench size={18} />
              Conheça Nossa Visão de Manutenção Automotiva
            </Link>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section id="sobre" className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Oficina Mecânica BS CAR CENTER Curitiba" 
                  className="rounded-2xl shadow-xl w-full object-cover h-[360px]"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary-blue text-white p-4 rounded-xl shadow-lg text-xs font-bold">
                  <span>R. Pedro Gusso, 2340</span>
                  <p className="text-primary-yellow text-[11px] font-normal">Novo Mundo - Curitiba/PR</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-primary-blue font-bold uppercase tracking-wider text-xs mb-2 block">
                História e Reposicionamento
              </span>
              <h2 className="text-3xl font-heading font-black text-primary-dark mb-4">
                Da Especialidade em Escapamentos ao Auto Center Completo
              </h2>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                A <strong>BS CAR CENTER</strong> (anteriormente conhecida como BS Escapamentos) iniciou sua trajetória com forte atuação e tradição em sistemas de exaustão, catalisadores e silenciosos. Ao longo dos anos, para atender às necessidades reais dos motoristas de Curitiba, expandiu sua estrutura operacional para a <strong>manutenção automotiva completa</strong>.
              </p>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Hoje, como <strong>BS CAR CENTER</strong>, realizamos desde aferição geométrica e diagnóstico computadorizado por scanner até reparos em suspensão, freios, injeção, óleo de câmbio automático e motores, mantendo os escapamentos como uma valiosa especialidade histórica.
              </p>
              
              <Link 
                to="/sobre" 
                className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-dark font-bold text-sm"
              >
                Conheça nossa estrutura <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback (Audited, item 25) */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-primary-blue text-xs font-bold uppercase tracking-wider block mb-1">
              Transparência e Confiança
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark">
              O Que Nossos Clientes Valorizam
            </h2>
            <p className="text-gray-600 text-xs md:text-sm mt-2">
              Atendimento transparente com explicações técnicas antes de cada conserto no Novo Mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_FEEDBACK.map((fb, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                <div>
                  <Quote className="text-primary-blue/20 w-8 h-8 mb-2" />
                  <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                    "{fb.text}"
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-xs">{fb.name}</span>
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <MapPin size={11} className="text-primary-blue" /> {fb.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Articles (Item 35) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-primary-blue font-bold uppercase tracking-wider text-xs block mb-1">
                Orientações Automotivas
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark">
                Dicas de Manutenção e Diagnóstico
              </h2>
            </div>
            <Link to="/blog/como-saber-se-a-suspensao-precisa-de-avaliacao" className="text-primary-blue font-bold text-xs hover:underline inline-flex items-center gap-1">
              Ver artigos <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-2">
                    <Calendar size={12} className="text-primary-blue" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug hover:text-primary-blue transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="text-primary-blue font-bold text-xs inline-flex items-center gap-1 hover:text-primary-dark mt-auto"
                  >
                    Ler orientações <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Community Section */}
      <InstagramSection />

      {/* FAQs (Item 33: Priority home questions) */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-primary-blue font-bold uppercase tracking-wider text-xs block mb-1">
              Dúvidas Frequentes
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark">
              Perguntas Frequentes sobre o BS Auto Center
            </h2>
          </div>

          <div className="space-y-3">
            {HOME_FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-bold text-gray-800 text-sm md:text-base pr-4">{faq.question}</span>
                  {openFaq === index ? <Minus size={18} className="text-primary-blue shrink-0" /> : <Plus size={18} className="text-gray-400 shrink-0" />}
                </button>
                {openFaq === index && (
                  <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas (Item 29: Only 10-15 main focus areas on Home) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-primary-blue font-bold uppercase tracking-wider text-xs block mb-1">
              Localização e Proximidade
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark mb-2">
              Bairros e Regiões Atendidas
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Nossa oficina está situada no <strong>Novo Mundo</strong>, com fácil deslocamento pelas vias rápidas e fácil acesso aos bairros vizinhos.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {HOME_PRIMARY_AREAS.map((loc) => (
              <Link 
                key={loc.slug} 
                to={`/local/${loc.slug}`}
                className="p-3 bg-gray-50 hover:bg-primary-blue hover:text-white rounded-xl border border-gray-200 text-gray-700 font-semibold text-xs text-center transition-all flex items-center justify-center gap-1.5"
              >
                <MapPin size={12} className="shrink-0 text-primary-yellow" />
                <span>{loc.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/areas"
              className="inline-flex items-center gap-2 border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-bold py-2.5 px-6 rounded-full text-xs transition-colors"
            >
              VER TODAS AS ÁREAS ATENDIDAS <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section (Item 41: Standardized CTAs) with Video Background */}
      <section className="py-20 bg-primary-dark text-center relative overflow-hidden text-white border-y-2 border-primary-yellow/30">
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-blue/85 to-primary-dark/95 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-3">
            Agende a Manutenção do Seu Veículo
          </h2>
          <p className="text-base text-gray-100 mb-8 max-w-xl mx-auto">
            Fale com nossa equipe técnica para tirar dúvidas, relatar barulhos ou agendar um horário sem compromisso.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
             {/* WhatsApp Button */}
             <a 
               href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pelo site da BS CAR CENTER e gostaria de agendar uma avaliação.`}
               target="_blank"
               rel="noreferrer"
               className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black p-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-3.5 border border-emerald-300"
             >
               <div className="w-10 h-10 rounded-xl bg-slate-950 text-emerald-400 flex items-center justify-center shrink-0">
                 <MessageCircle size={22} className="fill-emerald-400" />
               </div>
               <div className="text-left">
                 <span className="block text-sm sm:text-base font-black tracking-wide leading-tight">
                   AGENDAR NO WHATSAPP
                 </span>
                 <span className="block text-[11px] font-bold text-slate-900 opacity-90">
                   {COMPANY_INFO.whatsappDisplay} • Rápido
                 </span>
               </div>
             </a>

             {/* Phone Button */}
             <a 
               href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
               className="bg-slate-900/90 hover:bg-slate-800 border-2 border-primary-yellow text-white font-black p-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] flex items-center justify-center gap-3.5"
             >
               <div className="w-10 h-10 rounded-xl bg-primary-yellow text-slate-950 flex items-center justify-center shrink-0">
                 <Phone size={20} className="fill-slate-950" />
               </div>
               <div className="text-left">
                 <span className="block text-sm sm:text-base font-black tracking-wide text-primary-yellow leading-tight">
                   LIGAR NA RECEPÇÃO
                 </span>
                 <span className="block text-[11px] font-bold text-gray-300">
                   {COMPANY_INFO.phone} • Direto
                 </span>
               </div>
             </a>

             {/* GPS Route Button */}
             <a 
               href={COMPANY_INFO.mapsLink}
               target="_blank"
               rel="noreferrer"
               className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold p-4 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 sm:col-span-2 lg:col-span-1 flex items-center justify-center gap-3.5"
             >
               <div className="w-10 h-10 rounded-xl bg-primary-blue text-white flex items-center justify-center shrink-0">
                 <Navigation size={20} />
               </div>
               <div className="text-left">
                 <span className="block text-sm sm:text-base font-bold leading-tight">
                   COMO CHEGAR (GPS)
                 </span>
                 <span className="block text-[11px] text-gray-300">
                   R. Pedro Gusso, 2340
                 </span>
               </div>
             </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
            
            {/* Info Side */}
            <div className="bg-primary-dark text-white p-8 md:w-5/12 flex flex-col justify-between">
              <div>
                <span className="text-primary-yellow text-xs font-bold uppercase tracking-wider block mb-1">
                  Atendimento Local
                </span>
                <h3 className="text-2xl font-bold font-heading mb-6">BS CAR CENTER</h3>
                
                <div className="space-y-5 text-xs text-gray-300">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary-yellow shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">Endereço</strong>
                      <span>{COMPANY_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-primary-yellow shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">Telefone</strong>
                      <span>{COMPANY_INFO.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle size={18} className="text-primary-yellow shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">WhatsApp</strong>
                      <span>{COMPANY_INFO.whatsappDisplay}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 text-[11px] text-gray-400">
                Horário: Seg. a Sex. das 08:00 às 18:00 | Sábado das 08:00 às 12:00
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8 md:w-7/12">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Solicitar Orçamento</h3>
              <p className="text-gray-500 text-xs mb-5">Preencha os dados para envio direto ao nosso WhatsApp.</p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-1 text-xs">Nome Completo</label>
                  <input 
                    {...register("nome", { required: true })}
                    type="text" 
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-blue text-sm outline-none" 
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-bold mb-1 text-xs">Telefone / WhatsApp</label>
                    <input 
                      {...register("telefone", { required: true })}
                      type="tel" 
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-blue text-sm outline-none" 
                      placeholder="(41) 9..."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-1 text-xs">Serviço Desejado</label>
                    <select 
                      {...register("servico")}
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-blue text-sm outline-none"
                    >
                      <option value="Manutenção Geral">Manutenção Geral</option>
                      {SERVICES.map(s => <option key={s.id} value={s.shortTitle || s.title}>{s.shortTitle || s.title}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-1 text-xs">Mensagem ou Sintoma do Veículo</label>
                  <textarea 
                    {...register("mensagem")}
                    rows={3} 
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary-blue text-sm outline-none" 
                    placeholder="Descreva o que o carro está apresentando..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary-green hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <MessageCircle size={18} />
                  SOLICITAR ORÇAMENTO PELO WHATSAPP
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
