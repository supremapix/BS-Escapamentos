import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, Navigation } from 'lucide-react';
import { COMPANY_INFO, LOCATIONS } from '../data/constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t-8 border-primary-yellow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
                <div className="relative flex items-center justify-center w-14 h-9 bg-primary-blue border border-primary-yellow rounded-[50%] shadow-md">
                    <span className="text-primary-yellow font-black text-lg italic tracking-tighter" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>BS</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">BS Escapamentos</h3>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Há anos oferecendo serviços automotivos de excelência em Curitiba. 
              Referência em escapamentos, suspensão e freios.
            </p>
            <div className="flex items-start gap-3 text-gray-300 mb-3 hover:text-primary-yellow transition-colors group cursor-pointer" onClick={() => window.open(COMPANY_INFO.mapsLink, '_blank')}>
              <div className="bg-primary-blue/20 p-2 rounded-full group-hover:bg-primary-yellow group-hover:text-primary-dark transition-colors">
                <MapPin className="shrink-0" size={20} />
              </div>
              <div>
                 <p className="font-bold text-white">R. Pedro Gusso, 2340</p>
                 <p className="text-sm">Novo Mundo - Curitiba/PR</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-300 mb-3 hover:text-primary-yellow transition-colors">
              <Phone className="shrink-0 text-primary-yellow" size={20} />
              <p>{COMPANY_INFO.phone} | {COMPANY_INFO.whatsappDisplay}</p>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-primary-yellow transition-colors">
              <Mail className="shrink-0 text-primary-yellow" size={20} />
              <p>{COMPANY_INFO.email}</p>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 text-primary-yellow flex items-center gap-2">
                <Clock size={24}/> Funcionamento
            </h3>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Segunda a Sexta</span>
                    <span className="font-bold text-white text-lg">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-500 rounded-full"></div> Sábado</span>
                    <span className="font-bold text-white text-lg">08:00 - 12:00</span>
                </li>
                <li className="flex justify-between items-center text-gray-500">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Domingo</span>
                    <span>Fechado</span>
                </li>
                </ul>
            </div>
            <a 
              href={COMPANY_INFO.mapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-primary-blue hover:bg-blue-600 text-white py-3 rounded-lg transition-colors font-bold shadow-lg"
            >
              <Navigation size={18} /> Traçar Rota Agora
            </a>
          </div>

          {/* Column 3: Quick Map */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 text-primary-yellow">Onde Estamos</h3>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden shadow-lg border-2 border-gray-700 hover:border-primary-yellow transition-colors relative group">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.8797967272847!2d-49.29568902375841!3d-25.47570497753308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce32d2b5f5471%3A0x6b8f72200259f972!2sR.%20Pedro%20Gusso%2C%202340%20-%20Novo%20Mundo%2C%20Curitiba%20-%20PR%2C%2081900-080!5e0!3m2!1spt-BR!2sbr!4v1683123456789!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Mapa BS Escapamentos"
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              ></iframe>
              <div className="absolute bottom-2 right-2 bg-white text-black text-xs font-bold px-2 py-1 rounded shadow pointer-events-none">
                 Novo Mundo
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
                Fácil acesso pela Via Rápida | Próximo ao Terminal Capão Raso
            </p>
          </div>
        </div>
        
        {/* Sitemap Links - Animated Marquee "Window" Style */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <h4 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wider">Áreas de Atendimento em Curitiba e Região</h4>
          
          <div className="relative h-40 overflow-hidden bg-gray-900/50 rounded-xl border border-gray-700 shadow-inner group">
            {/* Top Fade Gradient */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-primary-dark/80 to-transparent z-10 pointer-events-none"></div>
            
            {/* Animated Container */}
            <div className="animate-scroll-up hover-pause p-4">
               {/* Original List */}
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs mb-3">
                 {LOCATIONS.map(loc => (
                   <Link 
                     key={loc.slug} 
                     to={`/local/${loc.slug}`}
                     className="text-gray-400 hover:text-primary-yellow truncate transition-colors block py-1 hover:underline decoration-primary-yellow decoration-1 underline-offset-4"
                     title={loc.name}
                   >
                     {loc.name}
                   </Link>
                 ))}
               </div>
               
               {/* Duplicate List (for seamless scrolling) */}
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs">
                 {LOCATIONS.map(loc => (
                   <Link 
                     key={`${loc.slug}-duplicate`} 
                     to={`/local/${loc.slug}`}
                     className="text-gray-400 hover:text-primary-yellow truncate transition-colors block py-1 hover:underline decoration-primary-yellow decoration-1 underline-offset-4"
                     title={loc.name}
                   >
                     {loc.name}
                   </Link>
                 ))}
               </div>
            </div>

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-primary-dark/80 to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="border-t border-gray-800 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-2 mt-4 md:mt-0 bg-black/40 px-4 py-2 rounded-full border border-gray-800 hover:border-primary-blue transition-colors group">
            <span>Desenvolvido</span>
            <Heart size={24} className="text-red-500 animate-[heartbeat_1.5s_ease-in-out_infinite] fill-red-500" />
            <span>por</span>
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white font-bold group-hover:text-primary-yellow transition-colors"
            >
              Suprema Mídia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;