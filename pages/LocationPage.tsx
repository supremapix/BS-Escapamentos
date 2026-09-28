import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { LOCATIONS, SERVICES, COMPANY_INFO, PAGE_IMAGES } from '../data/constants';
import EnhancedSEO from '../components/EnhancedSEO';
import { CheckCircle2, MapPin, Phone, MessageCircle, Navigation, Clock, Wrench, ArrowRight } from 'lucide-react';

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find(l => l.slug === slug);
  const [isOpen, setIsOpen] = useState(false);

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

  if (!location) {
    return <Navigate to="/areas" replace />;
  }

  const locName = location.name === "Neo Ville" ? "Região do Neo Ville" : location.name;
  const isCity = location.type === 'city';
  const preposition = isCity ? "em" : "no";
  const displayLocation = `${preposition} ${locName}`;

  const pageTitle = `Auto Center e Manutenção Automotiva ${displayLocation} | BS CAR CENTER`;
  const pageDesc = `Auto Center com fácil acesso para ${locName}. Manutenção automotiva, freios, suspensão, geometria, injeção, troca de óleo e escapamentos no Novo Mundo.`;
  const canonicalPath = `/local/${slug}`;

  return (
    <>
      <EnhancedSEO 
        title={pageTitle} 
        description={pageDesc} 
        canonicalPath={canonicalPath}
        keywords={`oficina ${locName}, auto center ${locName}, manutenção automotiva ${locName}, freios ${locName}, suspensão ${locName}, escapamentos ${locName}`}
        schemaType="AutoRepair"
        areaServed={[{ name: location.name, type: isCity ? 'City' : 'Neighborhood' }]}
      />
      
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-6 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary-blue">Início</Link>
            <span>/</span>
            <Link to="/areas" className="hover:text-primary-blue">Áreas Atendidas</Link>
            <span>/</span>
            <span className="text-gray-800 font-bold">{locName}</span>
          </nav>

          {/* Banner with Video Background */}
          <div className="bg-primary-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-10 border-b-4 border-primary-yellow">
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary-blue/80 pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-primary-yellow text-primary-dark text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  Atendimento Regional
                </span>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  Oficina no Novo Mundo | Curitiba
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-heading font-black mb-4 leading-tight">
                Auto Center e Manutenção Automotiva para {locName}
              </h1>

              {/* Answer-first block */}
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-gray-200 text-sm md:text-base leading-relaxed mb-6">
                <p>
                  Moradores e frotas de <strong>{locName}</strong> contam com a estrutura da <strong>BS CAR CENTER</strong> para serviços de manutenção automotiva preventiva e corretiva. Localizada no Novo Mundo (R. Pedro Gusso, 2340), nossa oficina oferece diagnósticos com scanner, freios, suspensão, geometria, injeção eletrônica, troca de óleo e escapamentos com transparência técnica.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Sou de ${locName} e gostaria de agendar um atendimento na BS CAR CENTER.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-green hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center gap-2 text-sm shadow-md"
                >
                  <MessageCircle size={18} /> Agendar Atendimento
                </a>
                <a
                  href={COMPANY_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white hover:text-primary-dark text-white font-bold py-3 px-6 rounded-full border border-white/20 inline-flex items-center gap-2 text-sm"
                >
                  <Navigation size={18} /> Rota no Maps
                </a>
              </div>
            </div>
          </div>

          {/* Main Services Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-primary-blue/10 text-primary-blue rounded-xl flex items-center justify-center mb-3">
                <Wrench size={20} />
              </div>
              <h2 className="font-bold text-gray-900 text-base mb-2">Manutenção Preventiva</h2>
              <p className="text-gray-600 text-xs leading-relaxed">
                Revisão completa para condutores de {locName}: pastilhas de freio, amortecedores, fluidos, filtros e correias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-primary-blue/10 text-primary-blue rounded-xl flex items-center justify-center mb-3">
                <CheckCircle2 size={20} />
              </div>
              <h2 className="font-bold text-gray-900 text-base mb-2">Diagnóstico com Scanner</h2>
              <p className="text-gray-600 text-xs leading-relaxed">
                Leitura de falhas na injeção eletrônica e parâmetros ao vivo para identificar anomalias sem trocas desnecessárias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-10 h-10 bg-primary-blue/10 text-primary-blue rounded-xl flex items-center justify-center mb-3">
                <Clock size={20} />
              </div>
              <h2 className="font-bold text-gray-900 text-base mb-2">Acesso Rápido</h2>
              <p className="text-gray-600 text-xs leading-relaxed">
                Fácil deslocamento pelas vias rápidas de Curitiba com destino à R. Pedro Gusso, 2340 no Novo Mundo.
              </p>
            </div>
          </div>

          {/* Service Links for Local SEO */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 mb-12 shadow-sm">
            <h2 className="text-xl font-heading font-bold text-primary-dark mb-4">
              Serviços Automotivos Disponíveis para Veículos de {locName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((srv) => (
                <Link
                  key={srv.id}
                  to={srv.slug === 'manutencao-automotiva' ? '/manutencao-automotiva-curitiba' : `/servicos/${srv.slug}`}
                  className="p-3.5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-primary-blue hover:text-white transition-all text-xs font-semibold flex items-center justify-between group"
                >
                  <span>{srv.shortTitle || srv.title}</span>
                  <ArrowRight size={14} className="text-primary-blue group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Map and Directions */}
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm mb-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                  <MapPin className="text-primary-yellow" /> R. Pedro Gusso, 2340 - Novo Mundo, Curitiba/PR
                </h3>
                <p className="text-gray-500 text-xs">Rota de fácil acesso para condutores de {locName}</p>
              </div>
              <a
                href={COMPANY_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-blue hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl text-xs inline-flex items-center gap-1.5"
              >
                <Navigation size={14} /> Abrir GPS
              </a>
            </div>

            <div className="h-64 w-full rounded-2xl overflow-hidden bg-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.8797967272847!2d-49.29568902375841!3d-25.47570497753308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce32d2b5f5471%3A0x6b8f72200259f972!2sR.%20Pedro%20Gusso%2C%202340%20-%20Novo%20Mundo%2C%20Curitiba%20-%20PR%2C%2081900-080!5e0!3m2!1spt-BR!2sbr!4v1683123456789!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title={`Mapa BS CAR CENTER para condutores de ${locName}`}
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LocationPage;
