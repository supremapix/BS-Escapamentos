import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Wrench, Heart } from 'lucide-react';
import { COMPANY_INFO, HOME_PRIMARY_AREAS, SERVICES } from '../data/constants';
import { Link } from 'react-router-dom';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-800/50 flex justify-center items-center">
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        <p className="text-slate-200 hover:text-white transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span> 
          
          {/* Coração pulsante com efeito de sombra */}
          <Heart 
            size={14} 
            className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]" 
          /> 
          
          <span className="opacity-90">por</span>
          
          {/* Link para o site da Suprema */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300"
          >
            Suprema Sites Express
            
            {/* Logotipo oficial com efeito de iluminação */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-primary-dark text-white pt-14 pb-8 border-t-4 border-primary-yellow overflow-hidden">
      {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://img.supremasite.com.br/bs/bs-loja.webp"
          className="w-full h-full object-cover opacity-25 filter saturate-150"
        >
          <source src="https://img.supremasite.com.br/bs/bs.mp4" type="video/mp4" />
          <source src="/bs.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/90 to-black/95"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
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

        {/* Suprema Sites Express Developer Credit */}
        <SupremaCredit />

      </div>
    </footer>
  );
};

export default Footer;
