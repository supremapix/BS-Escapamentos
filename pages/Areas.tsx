import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import { LOCATIONS, COMPANY_INFO } from '../data/constants';
import { MapPin, Navigation } from 'lucide-react';

const Areas: React.FC = () => {
  const cities = LOCATIONS.filter(l => l.type === 'city');
  const neighborhoods = LOCATIONS.filter(l => l.type === 'neighborhood');

  return (
    <>
      <EnhancedSEO 
        title="Áreas Atendidas em Curitiba | BS CAR CENTER" 
        description="Bairros e regiões de Curitiba com fácil acesso à BS CAR CENTER no Novo Mundo. Serviços de manutenção automotiva, suspensão, freios e exaustão." 
        canonicalPath="/areas"
        keywords="oficina curitiba, auto center novo mundo, mecanica cic, bairros atendidos curitiba"
      />
      
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        
        {/* Banner */}
        <div className="bg-primary-dark py-16 mb-10 relative overflow-hidden text-center text-white border-b-4 border-primary-yellow">
          <div className="absolute inset-0 bg-primary-blue/20"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
             <span className="text-primary-yellow text-xs font-bold uppercase tracking-wider block mb-2">
               Cobertura Operacional no Novo Mundo
             </span>
             <h1 className="text-3xl md:text-5xl font-heading font-black mb-3">
               Áreas e Bairros Atendidos
             </h1>
             <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
               Nossa oficina física está localizada na <strong>R. Pedro Gusso, 2340 - Novo Mundo</strong>, com fácil acesso para moradores e frotas de diversas regiões de Curitiba e municípios vizinhos.
             </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Proximity note */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Localização Central na Região Sul</h2>
              <p className="text-gray-600 text-xs">
                Acesso rápido pela Via Rápida Centro-Sul e vias de ligação do CIC, Capão Raso, Portão e Pinheirinho.
              </p>
            </div>
            <a 
              href={COMPANY_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-primary-blue hover:bg-blue-900 text-white font-bold py-2.5 px-5 rounded-xl text-xs inline-flex items-center gap-1.5 shadow"
            >
              <Navigation size={14} /> Abrir no Google Maps
            </a>
          </div>

          {/* Curitiba Neighborhoods */}
          <div className="mb-12">
            <h2 className="flex items-center gap-2 text-xl font-heading font-bold text-primary-dark mb-4 border-b border-gray-200 pb-2">
              <MapPin className="text-primary-yellow" size={20} />
              Bairros e Regiões de Curitiba
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {neighborhoods.map((hood) => (
                <Link 
                  key={hood.slug} 
                  to={`/local/${hood.slug}`}
                  className="p-3 bg-white rounded-xl border border-gray-200 text-gray-700 hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-colors text-xs font-semibold text-center shadow-sm"
                >
                  {hood.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Main RMC Cities */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-heading font-bold text-primary-dark mb-4 border-b border-gray-200 pb-2">
              <MapPin className="text-primary-yellow" size={20} />
              Cidades Próximas da Região Metropolitana
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {cities.map((city) => (
                <Link 
                  key={city.slug} 
                  to={`/local/${city.slug}`}
                  className="p-3 bg-white rounded-xl border border-gray-200 text-gray-700 hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-colors text-xs font-semibold text-center shadow-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Areas;
