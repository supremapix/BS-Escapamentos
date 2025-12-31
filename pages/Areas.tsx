import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import { LOCATIONS } from '../data/constants';
import { MapPin } from 'lucide-react';

const Areas: React.FC = () => {
  const cities = LOCATIONS.filter(l => l.type === 'city');
  const neighborhoods = LOCATIONS.filter(l => l.type === 'neighborhood');

  return (
    <>
      <EnhancedSEO 
        title="Áreas de Atendimento - Oficina em Curitiba e Região" 
        description="Confira todas as cidades e bairros atendidos pela BS Escapamentos. Oficina mecânica de referência em Curitiba, São José dos Pinhais, Colombo e região." 
        canonicalPath="/areas"
        keywords="oficina curitiba, oficina região metropolitana, atendimento automotivo parana, bairros atendidos"
      />
      
      <div className="pt-24 pb-16 bg-white">
        <div className="bg-primary-dark py-16 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-blue/20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
             <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Áreas de Atendimento</h1>
             <p className="text-gray-300 text-lg">Levando qualidade e confiança para toda a Grande Curitiba.</p>
          </div>
        </div>

        <div className="container mx-auto px-4">
           {/* Cities */}
           <div className="mb-16">
             <h2 className="flex items-center gap-3 text-2xl font-heading font-bold text-primary-dark mb-8 border-b-2 border-primary-yellow/50 pb-4 inline-block pr-12">
               <MapPin className="text-primary-yellow fill-current" /> Cidades da Região Metropolitana
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
               {cities.map(city => (
                 <Link 
                   key={city.slug} 
                   to={`/local/${city.slug}`}
                   className="block p-4 bg-white rounded-lg shadow-sm border border-gray-200 text-primary-blue font-bold hover:bg-primary-blue hover:text-white hover:shadow-md hover:border-primary-blue transition-all text-center"
                 >
                   {city.name}
                 </Link>
               ))}
             </div>
           </div>

           {/* Neighborhoods */}
           <div>
             <h2 className="flex items-center gap-3 text-2xl font-heading font-bold text-primary-dark mb-8 border-b-2 border-primary-yellow/50 pb-4 inline-block pr-12">
               <MapPin className="text-primary-yellow fill-current" /> Bairros de Curitiba
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
               {neighborhoods.map(hood => (
                 <Link 
                   key={hood.slug} 
                   to={`/local/${hood.slug}`}
                   className="block p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700 font-semibold hover:bg-primary-blue hover:text-white hover:border-primary-blue hover:shadow-md transition-all text-center text-sm md:text-base"
                 >
                   {hood.name}
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