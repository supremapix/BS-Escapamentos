import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { LOCATIONS, SERVICES, COMPANY_INFO, PAGE_IMAGES } from '../data/constants';
import EnhancedSEO from '../components/EnhancedSEO';
import { CheckCircle2, MapPin, Phone, ShieldCheck, Navigation, Clock, AlertTriangle, Car, Wrench, Zap } from 'lucide-react';

// Function to generate SEO rich content blocks dynamically
const generateContent = (locName: string, isCity: boolean) => {
  const placeType = isCity ? "cidade" : "bairro";
  const placePreposition = isCity ? "na" : "no";
  const locationTerm = isCity ? `cidade de ${locName}` : `bairro ${locName}`;

  return [
    {
      title: `Referência em Auto Center ${placePreposition} ${locName}`,
      text: `Se você mora ou trabalha ${placePreposition} ${locName} e busca uma oficina mecânica de confiança, a BS Escapamentos é a sua melhor escolha. Embora localizados no Novo Mundo, somos referência para clientes de ${locName} que não abrem mão de qualidade técnica. Nossa estrutura completa atende todas as marcas e modelos com equipamentos de última geração.`
    },
    {
      title: `Especialista em Escapamentos para Moradores de ${locName}`,
      text: `O sistema de exaustão é vital para o desempenho e economia do seu carro. Para os motoristas de ${locName}, oferecemos diagnóstico completo de catalisadores, silenciosos e tubulações. Resolvemos ruídos, falhas e garantimos que seu veículo esteja dentro das normas de emissão de poluentes exigidas em Curitiba e região.`
    },
    {
      title: `Suspensão e Amortecedores: Conforto nas Ruas de ${locName}`,
      text: `As ruas de ${locName} podem apresentar desafios para a suspensão do seu carro. Na BS Escapamentos, realizamos a troca de amortecedores, molas, buchas e pivôs. Se você sente o carro instável ou barulhos ao passar por buracos em ${locName}, venha fazer uma revisão gratuita de suspensão conosco.`
    },
    {
      title: `Freios Seguros para sua Família em ${locName}`,
      text: `Não brinque com a segurança. Moradores de ${locName} confiam na BS Escapamentos para manutenção de freios ABS, troca de pastilhas e discos. Utilizamos peças originais e fluidos de alta performance para garantir frenagens precisas, seja no trânsito urbano de ${locName} ou em viagens longas.`
    },
    {
      title: `Troca de Óleo e Filtros Rápida`,
      text: `A manutenção preventiva é o segredo da longevidade do motor. Clientes vindo de ${locName} têm atendimento prioritário para troca de óleo e filtros. Trabalhamos com lubrificantes sintéticos e minerais das melhores marcas, garantindo a proteção ideal para o motor do seu carro.`
    },
    {
      title: `Mecânica Geral para Veículos de ${locName}`,
      text: `Do cabeçote ao escapamento, nossa equipe domina a mecânica automotiva. Se seu carro parou em ${locName} ou precisa de uma revisão completa, temos guincho parceiro e facilidade no agendamento. Realizamos reparos em correia dentada, embreagem, injeção eletrônica e sistema de arrefecimento.`
    },
    {
      title: `Alinhamento e Balanceamento 3D`,
      text: `Pneus desgastando irregularmente ao rodar por ${locName}? Nosso alinhamento 3D garante a geometria perfeita para seu veículo. Economize pneus e combustível mantendo o carro alinhado. Atendemos toda a frota de veículos leves e utilitários da região de ${locName}.`
    },
    {
      title: `Baterias e Parte Elétrica`,
      text: `O carro não liga em ${locName}? Pode ser bateria. Testamos e trocamos sua bateria na hora com as melhores marcas do mercado (Moura, Heliar, etc). Também revisamos alternador e motor de arranque para que você não fique na mão nas ruas de ${locName}.`
    },
    {
      title: `Revisão de Férias para Clientes de ${locName}`,
      text: `Vai viajar saindo de ${locName}? Passe na BS Escapamentos antes. Nossa revisão de férias verifica mais de 30 itens de segurança, incluindo luzes, freios, pneus e fluidos. Viaje tranquilo com sua família sabendo que seu carro foi cuidado por especialistas.`
    },
    {
      title: `Escapamentos Esportivos e Projetos Especiais`,
      text: `Para os entusiastas automotivos de ${locName}, desenvolvemos projetos de escapamento esportivo, difusores e ponteiras personalizadas. Dê um ronco único e ganhe performance no seu veículo com nossos serviços de customização de exaustão.`
    },
    {
      title: `Atendimento Corporativo e Frotas em ${locName}`,
      text: `Empresas de ${locName} contam com condições especiais para manutenção de frotas na BS Escapamentos. Agilidade no serviço para que seus veículos não fiquem parados. Emitimos nota fiscal e oferecemos faturamento para CNPJ.`
    },
    {
      title: `Diagnóstico Computadorizado`,
      text: `Luz da injeção acesa no painel enquanto dirigia por ${locName}? Utilizamos scanners avançados para identificar a falha exata no sistema eletrônico do seu carro. Evite trocas de peças desnecessárias com nosso diagnóstico preciso e transparente.`
    },
    {
      title: `Limpeza de Bicos e Injeção Eletrônica`,
      text: `Melhore o consumo e o desempenho do seu carro. Motoristas de ${locName} relatam economia de combustível após nossa limpeza de bicos e TBI. Otimizamos a queima de combustível para que seu carro renda mais no trânsito de Curitiba.`
    },
    {
      title: `Troca de Embreagem`,
      text: `Pedal duro ou marchas arranhando em ${locName}? Realizamos a substituição do kit de embreagem (platô, disco e rolamento) com rapidez. Recuperamos o conforto e a facilidade de dirigir o seu veículo no dia a dia.`
    },
    {
      title: `Higienização de Ar Condicionado`,
      text: `Respire ar puro dentro do seu carro em ${locName}. Nossa higienização elimina fungos, bactérias e odores desagradáveis do sistema de ventilação. Também realizamos a troca do filtro de cabine para garantir a saúde da sua família.`
    },
    {
      title: `Serviço Leva e Traz (Consultar)`,
      text: `Sabemos que a rotina em ${locName} é corrida. Consulte a disponibilidade do nosso serviço de leva e traz ou carona amiga. Deixamos você em casa ou no trabalho enquanto cuidamos do seu carro com todo carinho e profissionalismo.`
    },
    {
      title: `Pagamento Facilitado para ${locName}`,
      text: `Na BS Escapamentos, o orçamento cabe no seu bolso. Parcelamos serviços e peças no cartão de crédito. Oferecemos o melhor custo-benefício para quem vem de ${locName}, cobrindo orçamentos com a garantia de serviço bem feito.`
    },
    {
      title: `Agende sua Visita vindo de ${locName}`,
      text: `Não espere o problema agravar. Se você está em ${locName}, entre em contato agora pelo WhatsApp. Nossa equipe está pronta para tirar suas dúvidas e agendar um horário. Venha tomar um café conosco e conhecer a melhor oficina da região.`
    }
  ];
};

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find(l => l.slug === slug);
  const [isOpen, setIsOpen] = useState(false);

  // Fallback image
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/800x600/1e3a8a/ffffff?text=BS+Escapamentos";
    e.currentTarget.alt = "Imagem não disponível - BS Escapamentos";
  };

  // Status Check Logic
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      let open = false;
      if (day >= 1 && day <= 5) open = hour >= 8 && hour < 18;
      else if (day === 6) open = hour >= 8 && hour < 12;
      setIsOpen(open);
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  // SEO Content Generation
  const contentSections = useMemo(() => {
    if (!location) return [];
    return generateContent(location.name, location.type === 'city');
  }, [location]);

  if (!location) return <Navigate to="/" replace />;

  const locName = location.name;
  const isCity = location.type === 'city';
  const typeText = isCity ? "na cidade de" : "no bairro";
  const preposition = isCity ? "em" : "no";
  
  const pageTitle = `Oficina Mecânica ${typeText} ${locName} - BS Escapamentos`;
  const pageDesc = `Procurando oficina mecânica ${typeText} ${locName}? Acesso fácil R. Pedro Gusso. Especialista em escapamentos, suspensão, freios e revisão geral.`;
  const keywords = `oficina ${locName}, mecanica ${locName}, escapamentos ${locName}, freios ${locName}, suspensão ${locName}, auto center ${locName}, troca de oleo ${locName}`;

  return (
    <>
      <EnhancedSEO 
        title={pageTitle} 
        description={pageDesc} 
        canonicalPath={`/local/${slug}`}
        keywords={keywords}
        schemaType="AutoRepair"
      />
      
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary-blue font-medium">Home</Link>
            <span className="text-gray-300">/</span>
            <Link to="/areas" className="hover:text-primary-blue font-medium">Áreas</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-semibold">{locName}</span>
          </nav>

          {/* Hero Banner */}
          <div className="relative bg-gradient-to-r from-gray-900 to-primary-blue rounded-3xl shadow-2xl overflow-hidden mb-12 text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-yellow text-primary-dark text-xs font-black uppercase tracking-wider">
                        Atendendo {locName}
                    </span>
                    <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                        <span className={`relative flex h-3 w-3`}>
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}></span>
                          <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wide">
                            {isOpen ? 'Aberto Agora' : 'Fechado Agora'}
                        </span>
                    </div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-heading font-black mb-6 leading-tight text-white drop-shadow-lg">
                  Oficina Mecânica para <br/>
                  <span className="text-primary-yellow">{locName}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                  Qualidade e confiança a poucos minutos de você. Traga seu carro para a <strong>BS Escapamentos</strong> e garanta o melhor serviço da região.
                </p>
              </div>
              
              <div className="shrink-0 text-center md:text-right">
                 <a 
                   href={`https://www.google.com/maps/dir/?api=1&destination=BS+Escapamentos+Curitiba`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 bg-primary-yellow text-primary-dark font-black py-4 px-8 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:scale-105 transition-transform text-lg group"
                 >
                   <Navigation className="group-hover:rotate-12 transition-transform" />
                   Como Chegar
                 </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content - Generated SEO Text */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Intro Block */}
              <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 relative group">
                        <div className="absolute inset-0 bg-primary-blue rounded-xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                        <img 
                          src={PAGE_IMAGES.workshop} 
                          alt={`Oficina atendendo ${locName}`} 
                          className="relative z-10 rounded-xl shadow-lg w-full h-56 object-cover" 
                          loading="lazy"
                          onError={handleImageError}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-heading font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <MapPin className="text-primary-red" />
                            Por que sair de {locName}?
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Porque vale a pena! A BS Escapamentos oferece uma estrutura que dificilmente você encontra em oficinas de bairro comuns. 
                            Estamos na <strong>R. Pedro Gusso, 2340 - Novo Mundo</strong>, uma via de acesso rápido para quem vem de {locName}.
                        </p>
                    </div>
                </div>
              </section>

              {/* Dynamic 18 Texts Grid */}
              <section>
                 <h2 className="text-3xl font-heading font-bold text-gray-800 mb-8 text-center">
                   Serviços Automotivos para {locName}
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contentSections.map((section, idx) => (
                      <article key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                         <h3 className="text-lg font-bold text-primary-blue mb-3 flex items-start gap-2">
                           <CheckCircle2 className="shrink-0 mt-1 text-primary-yellow" size={18} />
                           {section.title}
                         </h3>
                         <p className="text-gray-600 text-sm leading-relaxed text-justify">
                           {section.text}
                         </p>
                      </article>
                    ))}
                 </div>
              </section>

              {/* Map Section */}
              <section className="bg-white p-2 rounded-2xl shadow-lg border border-gray-200">
                 <div className="bg-gray-100 p-4 rounded-t-xl flex justify-between items-center flex-wrap gap-4">
                    <div>
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                            <Navigation className="text-primary-blue"/> R. Pedro Gusso, 2340 - Novo Mundo
                        </h3>
                        <p className="text-sm text-gray-500">A melhor opção para quem vem de {locName}</p>
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
                 <div className="h-80 w-full rounded-b-xl overflow-hidden">
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

              {/* CTA Final */}
              <div className="bg-primary-dark rounded-2xl p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary-blue/20"></div>
                  <div className="relative z-10">
                      <h3 className="text-2xl font-heading font-bold text-white mb-4">Mora em {locName}?</h3>
                      <p className="text-gray-300 mb-6">Venha conhecer a oficina que trata seu carro com o respeito que ele merece.</p>
                      <a 
                        href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá, sou de ${locName} e vi o site da BS Escapamentos.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary-green text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-500 transition-colors animate-pulse"
                      >
                        <Phone size={20} /> Agendar Revisão
                      </a>
                  </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-primary-blue sticky top-28">
                <div className="text-center mb-6">
                   <h3 className="font-bold text-gray-800 text-lg mb-2">Horário de Atendimento</h3>
                   <div className="space-y-2 text-sm">
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span>Seg - Sex</span>
                        <span className="font-bold text-primary-blue">08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-1">
                        <span>Sábado</span>
                        <span className="font-bold text-primary-blue">08:00 - 12:00</span>
                      </div>
                   </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl mb-6 text-center border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase font-bold mb-2">Central de Agendamento</p>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="block text-xl font-black text-gray-800 mb-1 hover:text-primary-blue transition-colors">
                        {COMPANY_INFO.phone}
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`} className="inline-flex items-center gap-1 text-sm font-bold text-primary-green hover:underline">
                        <Phone size={14} /> WhatsApp Direto
                    </a>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-gray-800 text-sm">Serviços Rápidos</h4>
                  <ul className="space-y-2">
                    {SERVICES.slice(0, 5).map(s => (
                        <li key={s.id} className="flex items-center gap-2 text-xs text-gray-600 border-b border-gray-50 pb-1">
                            <Wrench size={12} className="text-primary-yellow" /> {s.title}
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                   <h4 className="font-bold text-xs mb-3 text-gray-400 uppercase tracking-wide">Outras Localidades</h4>
                   <div className="flex flex-wrap gap-2">
                      {LOCATIONS.filter(l => l.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 10).map(loc => (
                        <Link 
                          key={loc.slug} 
                          to={`/local/${loc.slug}`} 
                          className="text-[10px] font-bold bg-white text-gray-500 hover:bg-primary-blue hover:text-white border border-gray-200 px-2 py-1 rounded transition-all"
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