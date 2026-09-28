import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Wrench } from 'lucide-react';
import { COMPANY_INFO, HOME_PRIMARY_AREAS, SERVICES } from '../data/constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white pt-14 pb-8 border-t-4 border-primary-yellow">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Info (Item 40) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-10 h-7 bg-primary-blue border border-primary-yellow rounded-[50%] shadow-md">
                <span className="text-primary-yellow font-black text-sm italic" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                  BS
                </span>
              </div>
              <span className="text-lg font-heading font-black tracking-wide text-white">
                BS CAR CENTER
              </span>
            </div>
            
            {/* Repositioned text (Item 6) */}
            <p className="text-gray-300 text-xs leading-relaxed">
              Auto Center em Curitiba com serviços de manutenção automotiva, freios, suspensão, geometria, diagnóstico, troca de óleo, motores e escapamentos.
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed italic">
              Anteriormente conhecida como BS Escapamentos.
            </p>

            <div className="space-y-2 text-xs text-gray-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="shrink-0 text-primary-yellow mt-0.5" size={15} />
                <div>
                  <p className="font-semibold text-white">R. Pedro Gusso, 2340</p>
                  <p className="text-gray-400">Novo Mundo - Curitiba/PR (CEP 81900-080)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="shrink-0 text-primary-yellow" size={15} />
                <p>{COMPANY_INFO.phone} | {COMPANY_INFO.whatsappDisplay}</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="shrink-0 text-primary-yellow" size={15} />
                <p>{COMPANY_INFO.email}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation & Services */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary-yellow uppercase tracking-wider mb-4">
              Serviços Automotivos
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link to="/manutencao-automotiva-curitiba" className="hover:text-primary-yellow transition-colors font-bold text-white flex items-center gap-1">
                  <Wrench size={12} className="text-primary-yellow" /> Manutenção Automotiva (Hub)
                </Link>
              </li>
              {SERVICES.filter(s => s.slug !== 'manutencao-automotiva').slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link to={`/servicos/${srv.slug}`} className="hover:text-primary-yellow transition-colors">
                    {srv.shortTitle || srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/servicos" className="text-primary-yellow hover:underline text-[11px] font-semibold block pt-1">
                  Ver todos os 10 serviços &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Map Route */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary-yellow uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Clock size={16} /> Horário de Atendimento
            </h4>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs space-y-2 text-gray-300 mb-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
                <span>Segunda a Sexta</span>
                <span className="font-bold text-white">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
                <span>Sábado</span>
                <span className="font-bold text-white">08:00 - 12:00</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Domingo</span>
                <span>Fechado</span>
              </div>
            </div>

            <a 
              href={COMPANY_INFO.mapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 bg-primary-blue hover:bg-blue-800 text-white py-2.5 rounded-lg transition-colors font-bold text-xs shadow"
            >
              <Navigation size={14} /> Traçar Rota no Google Maps
            </a>
          </div>

          {/* Column 4: Local Coverage (Item 29: No huge 100+ cities marquee) */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary-yellow uppercase tracking-wider mb-4">
              Atendimento Regional
            </h4>
            <p className="text-gray-300 text-xs leading-relaxed mb-3">
              Oficina estabelecida no <strong>Novo Mundo</strong>, com fácil acesso para condutores de:
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {HOME_PRIMARY_AREAS.slice(0, 8).map((area) => (
                <Link
                  key={area.slug}
                  to={`/local/${area.slug}`}
                  className="text-[10px] bg-white/10 hover:bg-primary-blue hover:text-white px-2 py-1 rounded text-gray-300 transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <Link
              to="/areas"
              className="text-xs text-primary-yellow hover:underline font-semibold block"
            >
              Ver todas as áreas atendidas &rarr;
            </Link>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. CNPJ e endereço: {COMPANY_INFO.address}.</p>
          <div className="flex items-center gap-4 text-gray-400 text-xs">
            <Link to="/manutencao-automotiva-curitiba" className="hover:text-white">Manutenção Automotiva</Link>
            <span>•</span>
            <Link to="/servicos" className="hover:text-white">Serviços</Link>
            <span>•</span>
            <Link to="/contato" className="hover:text-white">Contato</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
