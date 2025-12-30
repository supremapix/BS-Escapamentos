import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { LOCATIONS, SERVICES, COMPANY_INFO, PAGE_IMAGES } from '../data/constants';
import SEO from '../components/SEO';
import { CheckCircle2, MapPin, Wrench, Phone, ShieldCheck, Star, Navigation, Clock, AlertTriangle } from 'lucide-react';

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find(l => l.slug === slug);
  const [isOpen, setIsOpen] = useState(false);

  // Fallback image if the main one fails to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/800x600/1e3a8a/ffffff?text=BS+Escapamentos";
    e.currentTarget.alt = "Imagem não disponível - BS Escapamentos";
  };

  // Logic to check if shop is open (Mon-Fri 8-18, Sat 8-12)
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0=Sun, 6=Sat
      const hour = now.getHours();
      
      let open = false;
      if (day >= 1 && day <= 5) { // Mon-Fri
        open = hour >= 8 && hour < 18;
      } else if (day === 6) { // Sat
        open = hour >= 8 && hour < 12;
      }
      setIsOpen(open);
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  // Helper variables for dynamic text
  const locName = location.name;
  const isCity = location.type === 'city';
  const typeText = isCity ? "na cidade de" : "no bairro";
  const preposition = isCity ? "em" : "no"; 
  
  const title = `Oficina Mecânica ${typeText} ${locName} - BS Escapamentos`;
  const description = `Procurando oficina mecânica ${typeText} ${locName}? Fácil acesso pela R. Pedro Gusso. Especialista em escapamentos, suspensão e freios.`;

  return (
    <>
      <SEO 
        title={title} 
        description={description} 
        canonicalPath={`/local/${slug}`}
        keywords={`oficina ${locName}, mecanica ${locName}, escapamentos ${locName}, freios ${locName}, rota para bs escapamentos`}
      />
      
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link to="/" className="hover:text-primary-blue font-medium">Home</Link>
            <span className="text-gray-300">/</span>
            <Link to="/areas" className="hover:text-primary-blue font-medium">Áreas</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-semibold">{locName}</span>
          </nav>

          {/* Header Block with Premium Gradient */}
          <div className="relative bg-gradient-to-r from-gray-900 to-primary-blue rounded-3xl shadow-2xl overflow-hidden mb-12 text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-yellow text-primary-dark text-xs font-black uppercase tracking-wider">
                        Referência em Curitiba
                    </span>
                    {/* Live Status Indicator */}
                    <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                        <span className={`relative flex h-3 w-3`}>
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}></span>
                          <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wide">
                            {isOpen ? 'Aberto Agora - Venha Conferir!' : 'Fechado Agora - Agende Online'}
                        </span>
                    </div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-heading font-black mb-6 leading-tight text-white drop-shadow-lg">
                  Oficina Mecânica Especializada <br/>
                  <span className="text-primary-yellow">{typeText} {locName}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                  Acesso rápido e fácil para quem está {preposition} <strong>{locName}</strong>. 
                  Traga seu carro para a <strong>Rua Pedro Gusso, 2340</strong> e resolva tudo em um só lugar.
                </p>
              </div>
              
              {/* Header CTA */}
              <div className="shrink-0 text-center md:text-right">
                 <a 
                   href={`https://www.google.com/maps/dir/?api=1&destination=BS+Escapamentos+Curitiba`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 bg-primary-yellow text-primary-dark font-black py-4 px-8 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:scale-105 transition-transform text-lg group"
                 >
                   <Navigation className="group-hover:rotate-12 transition-transform" />
                   Traçar Rota Agora
                 </a>
                 <p className="mt-3 text-sm text-gray-300 flex items-center justify-center md:justify-end gap-1">
                   <MapPin size={14} /> Fácil acesso via Novo Mundo
                 </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* TEXT BLOCK 1: Accessibility & Trust */}
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                    <div className="w-full md:w-1/2 relative group">
                        <div className="absolute inset-0 bg-primary-blue rounded-xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                        <img 
                          src={PAGE_IMAGES.workshop} 
                          alt={`Oficina de fácil acesso para ${locName}`} 
                          className="relative z-10 rounded-xl shadow-lg w-full h-64 object-cover" 
                          loading="lazy"
                          onError={handleImageError}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-heading font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <MapPin className="text-primary-red" />
                        Vale a pena vir de {locName}?
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4 font-medium">
                            Com certeza! Estamos localizados em um ponto estratégico do <strong>Novo Mundo (R. Pedro Gusso, 2340)</strong>, 
                            uma via rápida que conecta diversos pontos da cidade.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Muitos clientes de <strong>{locName}</strong> optam pela BS Escapamentos pela <span className="text-primary-green font-bold">transparência técnica</span> e preço justo. 
                            Não arrisque seu carro em oficinas desconhecidas. Venha para onde você tem garantia total.
                        </p>
                    </div>
                </div>
              </section>

              {/* TEXT BLOCK 2: Urgent Services */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="text-primary-yellow" size={32} />
                    <h2 className="text-2xl font-heading font-bold text-gray-800">
                    Sinais de que você precisa nos visitar hoje
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-shadow">
                        <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2"><Clock size={18}/> Barulhos no Escapamento</h3>
                        <p className="text-sm text-gray-700">Evite multas! Se o carro está fazendo barulho alto ao rodar por {locName}, o catalisador ou silencioso pode estar furado.</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 hover:shadow-lg transition-shadow">
                        <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2"><ShieldCheck size={18}/> Freio Trepidando</h3>
                        <p className="text-sm text-gray-700">Segurança não se adia. Se o pedal vibra ou faz ruído metálico, venha imediatamente para nossa loja no Novo Mundo.</p>
                    </div>
                </div>
              </section>

              {/* GPS Map Embed - High Relevance */}
              <section className="bg-white p-2 rounded-2xl shadow-lg border border-gray-200">
                 <div className="bg-gray-100 p-4 rounded-t-xl flex justify-between items-center flex-wrap gap-4">
                    <div>
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                            <Navigation className="text-primary-blue"/> R. Pedro Gusso, 2340 - Novo Mundo
                        </h3>
                        <p className="text-sm text-gray-500">A poucos minutos de {locName}</p>
                    </div>
                    <a 
                        href={`https://www.google.com/maps/dir/?api=1&destination=BS+Escapamentos+Curitiba`}
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-primary-green hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors flex items-center gap-2"
                    >
                        Abrir no GPS
                    </a>
                 </div>
                 <div className="h-80 w-full rounded-b-xl overflow-hidden relative">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.8797967272847!2d-49.29568902375841!3d-25.47570497753308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce32d2b5f5471%3A0x6b8f72200259f972!2sR.%20Pedro%20Gusso%2C%202340%20-%20Novo%20Mundo%2C%20Curitiba%20-%20PR%2C%2081900-080!5e0!3m2!1spt-BR!2sbr!4v1683123456789!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        title={`Mapa BS Escapamentos para clientes de ${locName}`}
                    ></iframe>
                 </div>
              </section>

              {/* TEXT BLOCK 3: Services Summary */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6 border-l-4 border-primary-yellow pl-4">
                  Soluções Completas para seu Carro
                </h2>
                <div className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES.slice(0,6).map(s => (
                        <div key={s.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                            <CheckCircle2 className="text-primary-blue shrink-0 mt-1" size={18} />
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm">{s.title}</h4>
                                <p className="text-xs text-gray-500">{s.description.substring(0, 60)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
              </section>

              {/* Final CTA */}
              <div className="bg-primary-dark rounded-2xl p-8 md:p-12 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl group-hover:bg-primary-yellow/20 transition-colors"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-3xl font-heading font-bold text-white mb-4">Saia de {locName} e venha resolver!</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                            Não deixe para depois. Atendimento rápido, peças originais e garantia de serviço bem feito.
                        </p>
                        <a 
                        href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá, sou de ${locName} e preciso de um orçamento.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-primary-green hover:bg-green-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-green-500/50 transition-all transform hover:-translate-y-1 animate-pulse-fast"
                        >
                        <Phone size={24} />
                        Chamar no WhatsApp
                        </a>
                    </div>
                </div>

            </div>

            {/* Sidebar (Sticky & Enhanced) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-primary-blue sticky top-28">
                
                {/* Dynamic Status Box */}
                <div className={`mb-6 p-4 rounded-xl border ${isOpen ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} text-center`}>
                    <h3 className={`font-bold text-lg mb-1 ${isOpen ? 'text-green-800' : 'text-red-800'}`}>
                        {isOpen ? 'Estamos Abertos!' : 'Fechado Agora'}
                    </h3>
                    <div className="flex justify-center items-center gap-2 text-sm text-gray-600 mb-3">
                        <Clock size={16} />
                        {isOpen ? 'Pode vir direto!' : 'Abrimos às 08:00'}
                    </div>
                    {/* Visual Schedule */}
                    <div className="text-xs text-left space-y-1 bg-white/50 p-2 rounded-lg">
                        <div className={`flex justify-between ${new Date().getDay() >= 1 && new Date().getDay() <= 5 ? 'font-bold text-gray-900' : 'text-gray-500'}`}>
                            <span>Seg-Sex:</span> <span>08:00 - 18:00</span>
                        </div>
                        <div className={`flex justify-between ${new Date().getDay() === 6 ? 'font-bold text-gray-900' : 'text-gray-500'}`}>
                            <span>Sábado:</span> <span>08:00 - 12:00</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <div className="bg-primary-yellow/20 p-2 rounded-lg text-primary-dark">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <span className="text-xs uppercase font-bold text-gray-400">Destino</span>
                        <h3 className="font-bold text-gray-800 text-sm">R. Pedro Gusso, 2340</h3>
                        <p className="text-xs text-gray-500">Novo Mundo - Curitiba</p>
                    </div>
                </div>

                <div className="space-y-4 mb-6">
                   <p className="text-sm text-gray-600 font-medium">
                     Nossa equipe está pronta para atender clientes de {locName} com prioridade.
                   </p>
                   <ul className="space-y-2">
                     <li className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50 p-2 rounded">
                        <CheckCircle2 size={14} className="text-primary-green"/> 5 min do Terminal Capão Raso
                     </li>
                     <li className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-gray-50 p-2 rounded">
                        <CheckCircle2 size={14} className="text-primary-green"/> Fácil acesso pela Via Rápida
                     </li>
                   </ul>
                </div>
                
                <div className="space-y-3">
                  <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-black text-white font-bold py-3 rounded-xl transition-colors shadow-lg">
                    <Phone size={18} />
                    (41) 3268-3473
                  </a>
                  <a 
                    href={COMPANY_INFO.mapsLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center gap-2 w-full bg-primary-blue text-white hover:bg-blue-700 font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30"
                  >
                    <Navigation size={18} />
                    Ver Rota no Mapa
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                   <h4 className="font-bold text-xs mb-3 text-gray-400 uppercase tracking-wide">Veja também</h4>
                   <div className="flex flex-wrap gap-2">
                      {LOCATIONS.filter(l => l.slug !== slug).slice(0, 8).map(loc => (
                        <Link 
                          key={loc.slug} 
                          to={`/local/${loc.slug}`} 
                          className="text-[10px] font-bold bg-white text-gray-600 hover:bg-primary-yellow hover:text-primary-dark border border-gray-200 px-2 py-1 rounded transition-all"
                        >
                          {loc.name}
                        </Link>
                      ))}
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default LocationPage;