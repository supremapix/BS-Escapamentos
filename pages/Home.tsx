import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { SERVICES, COMPANY_INFO, LOCATIONS, BLOG_POSTS, FAQS, TESTIMONIALS, DIFFERENTIALS } from '../data/constants';
import * as Icons from 'lucide-react';
import { LucideIcon, MapPin, ChevronDown, ChevronRight, Star, Plus, Minus, Calendar, User, Quote } from 'lucide-react';
import { useForm } from 'react-hook-form';
import EnhancedSEO from '../components/EnhancedSEO';

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Group locations for better display
  const cities = useMemo(() => LOCATIONS.filter(l => l.type === 'city'), []);
  const neighborhoods = useMemo(() => LOCATIONS.filter(l => l.type === 'neighborhood'), []);

  const visibleCities = cities.slice(0, 12);
  const visibleNeighborhoods = neighborhoods.slice(0, 24);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x400/1e3a8a/FFFFFF?text=BS+Escapamentos";
    e.currentTarget.alt = "Imagem Indisponível";
  };

  const onSubmit = (data: any) => {
    const message = `Olá! Vim pelo site.%0A%0A` +
                   `Nome: ${data.nome}%0A` +
                   `Telefone: ${data.telefone}%0A` +
                   `Email: ${data.email}%0A` +
                   `Serviço: ${data.servico}%0A` +
                   `Mensagem: ${data.mensagem}`;
    
    const url = `https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <EnhancedSEO 
        title="BS Escapamentos - Especialistas no CIC e Neo Ville Curitiba" 
        description="Oficina mecânica referência no CIC e Neo Ville. Especialistas em escapamentos esportivos, catalisadores, suspensão e freios. Atendimento premium e garantia." 
        canonicalPath="/"
        schemaType="AutoRepair"
        keywords="escapamentos cic, oficina neo ville, mecanica curitiba, catalisador cic, escapamento esportivo"
      />
      
      <Hero />

      {/* Differentials Section */}
      <section className="py-12 bg-primary-dark border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIALS.map((diff, index) => {
              const Icon = (Icons as any)[diff.icon] as LucideIcon;
              return (
                <div key={index} className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary-yellow/50 transition-colors group">
                  <div className="p-3 rounded-full bg-primary-blue text-primary-yellow group-hover:scale-110 transition-transform">
                    {Icon && <Icon size={24} />}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{diff.title}</h3>
                    <p className="text-gray-400 text-sm">{diff.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-yellow rounded-tl-[3rem] z-0 opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Oficina Mecânica BS Escapamentos no Neo Ville" 
                  className="relative z-10 rounded-2xl shadow-2xl w-full border-b-8 border-primary-blue transform transition-transform duration-500 hover:scale-[1.01]"
                  onError={handleImageError}
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-blue rounded-br-[3rem] z-0 group-hover:rotate-12 transition-transform duration-700"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-primary-blue font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-3">
                <span className="w-12 h-1 bg-primary-yellow"></span> Sobre Nós
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-primary-dark mb-8 leading-tight">
                Referência Automotiva no <br/>Neo Ville e CIC
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                A <span className="font-bold text-primary-blue">BS Escapamentos</span> é mais que uma oficina; é o seu centro de confiança automotiva na região sul de Curitiba. 
                Localizados estrategicamente próximos ao Neo Ville, oferecemos uma estrutura moderna para diagnósticos precisos.
              </p>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Nossa equipe é especializada em sistemas de exaustão, suspensão e freios, 
                garantindo que você rode com segurança pelas ruas do CIC e rodovias de todo o Brasil.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 shadow-sm">
                   <div className="bg-blue-100 p-3 rounded-full text-primary-blue"><Icons.Award size={28} /></div>
                   <div>
                     <span className="block font-bold text-gray-800 text-lg">Garantia Estendida</span>
                     <span className="text-sm text-gray-500">Em todos os serviços</span>
                   </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 shadow-sm">
                   <div className="bg-blue-100 p-3 rounded-full text-primary-blue"><Icons.ShieldCheck size={28} /></div>
                   <div>
                     <span className="block font-bold text-gray-800 text-lg">Peças Originais</span>
                     <span className="text-sm text-gray-500">Qualidade certificada</span>
                   </div>
                </div>
              </div>

              <Link to="/sobre" className="inline-flex items-center text-primary-blue font-bold hover:text-primary-yellow transition-colors group">
                 Conheça nossa história <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-primary-blue font-bold uppercase tracking-wider text-sm mb-3">Nossa Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark">Soluções Completas</h3>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary-blue via-primary-yellow to-primary-blue mx-auto mt-6 rounded-full opacity-80"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 8).map((service) => {
              const IconComponent = (Icons as any)[service.iconName] as LucideIcon;
              
              return (
                <div key={service.id} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-primary-yellow group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-blue/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                  
                  <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-blue transition-all duration-300 shadow-inner group-hover:rotate-6">
                    {IconComponent && <IconComponent className="text-primary-blue group-hover:text-primary-yellow transition-colors" size={36} strokeWidth={1.5} />}
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary-blue transition-colors">{service.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <Link to="/servicos" className="inline-block text-primary-blue font-semibold text-sm border-b-2 border-transparent group-hover:border-primary-yellow transition-colors">Saiba mais &rarr;</Link>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/servicos" className="inline-block bg-white border border-gray-200 text-primary-dark font-bold py-3 px-8 rounded-full hover:bg-primary-blue hover:text-white transition-colors">
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary-blue font-bold uppercase tracking-wider text-sm mb-3">Dicas Automotivas</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark">Notícias BS Escapamentos</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/0 transition-colors"></div>
                  <div className="absolute top-4 left-4 bg-primary-yellow text-primary-dark text-xs font-bold px-3 py-1 rounded-full shadow-md">
                     Dica
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar size={14} /> {post.date}
                  </div>
                  <h4 className="text-lg font-bold text-primary-dark mb-3 leading-tight group-hover:text-primary-blue transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.slug || '#'}`} 
                    className="text-primary-blue font-bold text-sm hover:text-primary-yellow transition-colors inline-flex items-center gap-1 mt-auto"
                  >
                    Ler artigo <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-blue/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-yellow/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
           <div className="text-center mb-16">
             <h2 className="text-primary-yellow font-bold uppercase tracking-wider text-sm mb-3">Depoimentos</h2>
             <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">O que dizem nossos clientes</h3>
             <p className="text-gray-300 mt-4 max-w-2xl mx-auto">A satisfação de quem confia na BS Escapamentos.</p>
           </div>
           
           {/* Masonry-like Grid with "Fade In Up" Staggered Animation */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t, i) => (
               <div 
                 key={i} 
                 className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-primary-yellow/50 transition-all hover:-translate-y-2 duration-300 animate-fade-in-up flex flex-col h-full relative group"
                 style={{ animationDelay: `${i * 150}ms` }}
               >
                 <Quote className="absolute top-6 right-6 text-white/10 group-hover:text-primary-yellow/20 transition-colors w-10 h-10" />
                 
                 <div className="flex gap-1 mb-4">
                   {[...Array(t.stars)].map((_, idx) => (
                     <Star key={idx} size={16} className="text-primary-yellow fill-current" />
                   ))}
                 </div>
                 
                 <p className="text-gray-200 mb-6 italic text-sm md:text-base flex-grow leading-relaxed">"{t.text}"</p>
                 
                 <div className="flex items-center gap-3 mt-auto border-t border-white/10 pt-4">
                   <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold shrink-0 shadow-lg">
                     {t.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="text-white font-bold text-sm">{t.name}</h4>
                     <span className="text-gray-400 text-xs flex items-center gap-1">
                       <MapPin size={10} /> {t.location}
                     </span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-primary-blue font-bold uppercase tracking-wider text-sm mb-3">Dúvidas Comuns</h2>
               <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark">Perguntas Frequentes</h3>
            </div>
            
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-white transition-colors text-left"
                  >
                    <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                    {openFaq === index ? <Minus className="text-primary-blue" /> : <Plus className="text-gray-400" />}
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 p-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed bg-white border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas de Atendimento Section */}
      <section id="areas" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary-blue font-bold uppercase tracking-wider text-sm mb-3">Cobertura Total</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">Onde Atendemos</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Seja em Curitiba, <strong>CIC, Neo Ville</strong> ou na Região Metropolitana, a BS Escapamentos é a sua oficina de confiança. 
              Clique na sua localização para ver serviços exclusivos.
            </p>
          </div>

          {/* Cities Section */}
          <div className="mb-12">
            <h4 className="flex items-center gap-2 text-xl font-bold text-primary-dark mb-6 pb-2 border-b border-gray-200">
              <MapPin className="text-primary-yellow" /> Cidades da Região Metropolitana
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {visibleCities.map((loc) => (
                <Link 
                  key={loc.slug} 
                  to={`/local/${loc.slug}`}
                  className="flex items-center justify-center px-4 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-primary-blue hover:text-white hover:border-primary-blue hover:shadow-lg transition-all duration-200 text-center"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Neighborhoods Section */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold text-primary-dark mb-6 pb-2 border-b border-gray-200">
              <Icons.Home className="text-primary-yellow" /> Bairros de Curitiba
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {visibleNeighborhoods.map((loc) => (
                <Link 
                  key={loc.slug} 
                  to={`/local/${loc.slug}`}
                  className="flex items-center justify-center px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-600 font-medium text-xs md:text-sm hover:bg-primary-blue hover:text-white hover:border-primary-blue hover:shadow-md transition-all duration-200 text-center truncate"
                  title={loc.name}
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/areas"
              className="group inline-flex items-center gap-2 bg-white border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-900/20"
            >
              Ver Todas as Localidades ({LOCATIONS.length}) <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary-blue text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Seu Carro Merece o Melhor do CIC</h2>
          <p className="text-xl text-primary-yellow mb-10 font-bold max-w-2xl mx-auto">
            Não arrisque a segurança da sua família. Traga seu veículo para quem entende de verdade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a 
               href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
               target="_blank"
               rel="noreferrer"
               className="bg-primary-yellow text-primary-dark font-black py-4 px-10 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(253,185,19,0.5)] flex items-center justify-center gap-2"
             >
               <Icons.MessageCircle size={24} /> Agendar via WhatsApp
             </a>
             <a 
               href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
               className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-primary-blue transition-all flex items-center justify-center gap-2"
             >
               <Icons.Phone size={24} /> Ligar Agora
             </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary-blue font-bold uppercase tracking-wider text-sm mb-2">Fale Conosco</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark">Solicite um Orçamento</h3>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
             <div className="bg-primary-dark p-12 md:w-5/12 flex flex-col justify-between text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-primary-blue/20"></div>
               {/* Pattern */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               
               <div className="relative z-10">
                 <h4 className="text-3xl font-bold mb-8 text-primary-yellow font-heading">Canais de Atendimento</h4>
                 <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-white/10 rounded-lg group-hover:bg-primary-yellow group-hover:text-primary-dark transition-colors">
                        <Icons.MapPin className="shrink-0" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase text-gray-400 font-bold tracking-wider mb-1">Endereço</span>
                        <p className="text-sm font-medium leading-relaxed opacity-90">{COMPANY_INFO.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-white/10 rounded-lg group-hover:bg-primary-yellow group-hover:text-primary-dark transition-colors">
                        <Icons.Phone className="shrink-0" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase text-gray-400 font-bold tracking-wider mb-1">Telefone/WhatsApp</span>
                        <p className="text-lg font-bold opacity-100">{COMPANY_INFO.whatsappDisplay}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-white/10 rounded-lg group-hover:bg-primary-yellow group-hover:text-primary-dark transition-colors">
                        <Icons.Mail className="shrink-0" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase text-gray-400 font-bold tracking-wider mb-1">Email</span>
                        <p className="text-sm font-medium opacity-90">{COMPANY_INFO.email}</p>
                      </div>
                    </div>
                 </div>
               </div>
               
               <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                 <p className="text-sm text-gray-400">Atendemos de Seg. a Sex. das 08h às 18h</p>
               </div>
             </div>

             <div className="p-12 md:w-7/12 bg-white">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Envie uma mensagem</h4>
                  <p className="text-gray-600">Preencha o formulário e nossa equipe técnica entrará em contato via WhatsApp com o seu orçamento.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2 text-sm">Nome Completo</label>
                      <input 
                        {...register("nome", { required: true })}
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-blue focus:ring-4 focus:ring-blue-50 transition-all outline-none" 
                        placeholder="Digite seu nome"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                        <label className="block text-gray-700 font-bold mb-2 text-sm">Telefone</label>
                        <input 
                            {...register("telefone", { required: true })}
                            type="tel" 
                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-blue focus:ring-4 focus:ring-blue-50 transition-all outline-none" 
                            placeholder="(41) 9..."
                        />
                        </div>
                        <div>
                        <label className="block text-gray-700 font-bold mb-2 text-sm">Serviço</label>
                        <select 
                            {...register("servico")}
                            className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-blue focus:ring-4 focus:ring-blue-50 transition-all outline-none"
                        >
                            <option value="Orçamento">Selecione...</option>
                            {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                        </select>
                        </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2 text-sm">Mensagem</label>
                    <textarea 
                      {...register("mensagem")}
                      rows={3} 
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-blue focus:ring-4 focus:ring-blue-50 transition-all outline-none" 
                      placeholder="Descreva o problema ou peça..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-primary-green hover:bg-green-600 text-white font-bold py-5 rounded-xl shadow-xl hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg group"
                  >
                    <Icons.MessageCircle className="group-hover:animate-bounce" size={24} />
                    Enviar Orçamento via WhatsApp
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