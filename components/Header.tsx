import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  MapPin, 
  ChevronDown, 
  ChevronRight, 
  Home, 
  Wrench, 
  Clock, 
  Info, 
  ShieldCheck, 
  Navigation,
  ZoomIn
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO, SERVICES } from '../data/constants';
import ActionTicker from './ActionTicker';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLargeFont, setIsLargeFont] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setServicesDropdown(false);
    setMobileServicesOpen(false);
    document.body.style.overflow = 'unset';
  };

  const isActive = (path: string) => location.pathname === path;
  const showDarkHeader = true;

  return (
    <>
      {/* Top Fixed Wrapper: Animated Ticker on top of Header */}
      <div className="fixed w-full top-0 z-50">
        {/* Task: Letreiro Animado em Cima do Header */}
        <ActionTicker />

        <header 
          className="w-full bg-primary-dark/95 backdrop-blur-md py-2 md:py-2.5 shadow-lg border-b border-white/10 transition-all duration-300"
        >
          <div className="container mx-auto px-4 flex justify-between items-center h-14 md:h-auto">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 z-50 group" onClick={closeMenu}>
            <div className={`relative flex items-center justify-center transition-all duration-300 ${showDarkHeader ? 'w-9 h-6 sm:w-10 sm:h-7' : 'w-10 h-7 sm:w-12 sm:h-8 md:w-14 md:h-9'} bg-primary-blue border-2 border-primary-yellow rounded-[50%] shadow-md shrink-0`}>
              <span className="text-primary-yellow font-black italic tracking-tighter text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                BS
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-heading font-black leading-tight tracking-wide text-white group-hover:text-primary-yellow transition-colors text-xs sm:text-sm md:text-base">
                BS CAR CENTER
              </span>
              <span className="text-primary-yellow font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase text-[8px] sm:text-[9px] md:text-[10px]">
                MANUTENÇÃO E ESCAPAMENTOS
              </span>
            </div>
          </Link>

          {/* Desktop Nav (Item 10) */}
          <nav className="hidden xl:flex items-center space-x-7">
            <Link
              to="/"
              className={`font-medium text-xs uppercase tracking-wider transition-colors py-2 ${
                isActive('/') ? 'text-primary-yellow font-bold' : 'text-gray-200 hover:text-primary-yellow'
              }`}
            >
              Início
            </Link>

            <Link
              to="/manutencao-automotiva-curitiba"
              className={`font-medium text-xs uppercase tracking-wider transition-colors py-2 ${
                isActive('/manutencao-automotiva-curitiba') ? 'text-primary-yellow font-bold' : 'text-gray-200 hover:text-primary-yellow'
              }`}
            >
              Manutenção Automotiva
            </Link>

            {/* Dropdown Serviços */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                to="/servicos"
                className={`font-medium text-xs uppercase tracking-wider transition-colors py-2 inline-flex items-center gap-1 ${
                  location.pathname.startsWith('/servicos') ? 'text-primary-yellow font-bold' : 'text-gray-200 hover:text-primary-yellow'
                }`}
              >
                <span>Serviços</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 bg-primary-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 mt-1 z-50">
                  <Link
                    to="/servicos"
                    onClick={() => setServicesDropdown(false)}
                    className="block px-4 py-2 text-xs font-bold text-primary-yellow hover:bg-white/10 border-b border-white/10"
                  >
                    Todos os Serviços
                  </Link>
                  {SERVICES.filter(s => s.slug !== 'manutencao-automotiva').map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/servicos/${srv.slug}`}
                      onClick={() => setServicesDropdown(false)}
                      className="block px-4 py-2 text-xs text-gray-200 hover:text-white hover:bg-primary-blue/40 transition-colors"
                    >
                      {srv.shortTitle || srv.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/sobre"
              className={`font-medium text-xs uppercase tracking-wider transition-colors py-2 ${
                isActive('/sobre') ? 'text-primary-yellow font-bold' : 'text-gray-200 hover:text-primary-yellow'
              }`}
            >
              Sobre
            </Link>

            <Link
              to="/areas"
              className={`font-medium text-xs uppercase tracking-wider transition-colors py-2 ${
                isActive('/areas') ? 'text-primary-yellow font-bold' : 'text-gray-200 hover:text-primary-yellow'
              }`}
            >
              Áreas
            </Link>

            <Link
              to="/contato"
              className={`font-medium text-xs uppercase tracking-wider transition-colors py-2 ${
                isActive('/contato') ? 'text-primary-yellow font-bold' : 'text-gray-200 hover:text-primary-yellow'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button (Clean, uncluttered header) */}
          <div className="flex xl:hidden items-center z-50">
            <button
              onClick={toggleMenu}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs transition-all border shadow-sm ${
                isOpen
                  ? 'bg-primary-yellow text-primary-dark border-primary-yellow'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20 active:scale-95'
              }`}
              aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <>
                  <X size={18} />
                  <span>FECHAR</span>
                </>
              ) : (
                <>
                  <Menu size={18} className="text-primary-yellow" />
                  <span className="tracking-wider">MENU</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>
    </div>

      {/* Senior-Friendly Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/85 backdrop-blur-md" 
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Drawer Sheet */}
        <div 
          className={`absolute top-0 right-0 h-full w-[92%] sm:w-[85%] max-w-md bg-slate-950 text-white border-l border-white/15 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal de navegação"
        >
          {/* Drawer Top Header: Close Button & Senior Font Scale */}
          <div className="pt-4 pb-3 px-5 border-b border-white/10 bg-primary-dark flex items-center justify-between gap-2 shrink-0">
            <div>
              <span className="text-primary-yellow font-black text-base sm:text-lg block tracking-wide">
                BS CAR CENTER
              </span>
              <span className="text-gray-300 text-xs block">
                Novo Mundo, Curitiba
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Senior Accessibility Toggle: Font Size A- / A+ */}
              <button
                type="button"
                onClick={() => setIsLargeFont(!isLargeFont)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border transition-colors ${
                  isLargeFont 
                    ? 'bg-primary-yellow text-primary-dark border-primary-yellow' 
                    : 'bg-white/10 text-gray-200 border-white/20 hover:bg-white/20'
                }`}
                title="Aumentar o tamanho do texto para facilitar a leitura"
                aria-label="Alternar tamanho da letra"
              >
                <ZoomIn size={14} />
                <span>{isLargeFont ? 'Letra Maior ✓' : 'A+ Maior'}</span>
              </button>

              {/* Big High-Contrast Close Button */}
              <button
                onClick={closeMenu}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-xl transition-colors flex items-center justify-center shadow"
                aria-label="Fechar o menu agora"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            
            {/* PRIORITY ACTION CARDS FOR SENIORS (Easy, Large Tap Targets) */}
            <div className="space-y-2.5">
              <p className="text-[11px] uppercase tracking-wider text-primary-yellow font-bold px-1">
                Atendimento Rápido e Direto:
              </p>

              {/* Direct Call Button (Large Amber Card) */}
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black shadow-lg transition-transform active:scale-[0.98] border border-amber-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 text-primary-yellow flex items-center justify-center shrink-0 shadow">
                    <Phone size={24} className="fill-primary-yellow" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-extrabold text-slate-900 opacity-90">
                      Ligar para a Recepção:
                    </span>
                    <span className="block text-base sm:text-lg font-black tracking-tight text-slate-950">
                      {COMPANY_INFO.phone}
                    </span>
                    <span className="text-[11px] font-bold text-slate-900">
                      Toque para discar agora
                    </span>
                  </div>
                </div>
                <ChevronRight size={22} className="text-slate-950 shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* WhatsApp Button (Large Green Card) */}
              <a 
                href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pelo site da BS CAR CENTER e gostaria de tirar uma dúvida ou agendar uma revisão.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-black shadow-lg transition-transform active:scale-[0.98] border border-emerald-400/40 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow">
                    <MessageCircle size={26} className="fill-emerald-600" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider font-extrabold text-emerald-100">
                      Mensagem no WhatsApp:
                    </span>
                    <span className="block text-base sm:text-lg font-black tracking-tight text-white">
                      {COMPANY_INFO.whatsappDisplay}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-100">
                      Tire dúvidas e envie fotos do carro
                    </span>
                  </div>
                </div>
                <ChevronRight size={22} className="text-white shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* GPS Route Card */}
              <a
                href={COMPANY_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-gray-200 border border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Navigation size={18} className="text-primary-yellow shrink-0" />
                  <div className="text-left">
                    <span className="block text-xs font-bold text-white">
                      Como Chegar na Oficina (GPS)
                    </span>
                    <span className="block text-[11px] text-gray-300">
                      Rua Pedro Gusso, 2340 - Novo Mundo
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-primary-yellow font-bold uppercase tracking-wider shrink-0">
                  Abrir Mapa
                </span>
              </a>
            </div>

            {/* NAVIGATION LINKS (Senior Readable & Clear) */}
            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold px-1 mb-2">
                Páginas do Site:
              </p>

              <nav className="space-y-1.5">
                {/* Home */}
                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors border ${
                    isActive('/') 
                      ? 'bg-primary-blue text-primary-yellow border-primary-yellow/40 font-bold' 
                      : 'bg-slate-900/60 hover:bg-slate-800 text-gray-100 border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Home size={isLargeFont ? 24 : 20} className="text-primary-yellow shrink-0" />
                    <div>
                      <span className={`block font-bold leading-tight ${isLargeFont ? 'text-lg' : 'text-base'}`}>
                        Página Inicial
                      </span>
                      <span className="text-[11px] text-gray-400">
                        Voltar para a página principal
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </Link>

                {/* Manutenção Hub */}
                <Link
                  to="/manutencao-automotiva-curitiba"
                  onClick={closeMenu}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors border ${
                    isActive('/manutencao-automotiva-curitiba') 
                      ? 'bg-primary-blue text-primary-yellow border-primary-yellow/40 font-bold' 
                      : 'bg-slate-900/60 hover:bg-slate-800 text-gray-100 border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={isLargeFont ? 24 : 20} className="text-emerald-400 shrink-0" />
                    <div>
                      <span className={`block font-bold leading-tight ${isLargeFont ? 'text-lg' : 'text-base'}`}>
                        Manutenção Automotiva
                      </span>
                      <span className="text-[11px] text-gray-400">
                        Revisão geral, garantia e diagnóstico
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </Link>

                {/* Serviços Accordion */}
                <div className="rounded-xl border border-white/5 bg-slate-900/60 overflow-hidden">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-slate-800"
                    aria-expanded={mobileServicesOpen}
                  >
                    <div className="flex items-center gap-3">
                      <Wrench size={isLargeFont ? 24 : 20} className="text-primary-yellow shrink-0" />
                      <div>
                        <span className={`block font-bold leading-tight text-gray-100 ${isLargeFont ? 'text-lg' : 'text-base'}`}>
                          Nossos Serviços Mecânicos
                        </span>
                        <span className="text-[11px] text-gray-400">
                          Freios, suspensão, óleo, injeção, escapamentos
                        </span>
                      </div>
                    </div>
                    <ChevronDown size={20} className={`text-primary-yellow transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-white/10 bg-slate-950/70">
                      <Link
                        to="/servicos"
                        onClick={closeMenu}
                        className="block px-3 py-2 rounded-lg text-xs font-bold text-primary-yellow bg-primary-blue/30 border border-primary-yellow/20"
                      >
                        → Ver Todos os Serviços Mecânicos
                      </Link>

                      {SERVICES.filter(s => s.slug !== 'manutencao-automotiva').map((srv) => (
                        <Link
                          key={srv.id}
                          to={`/servicos/${srv.slug}`}
                          onClick={closeMenu}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          • {srv.shortTitle || srv.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sobre */}
                <Link
                  to="/sobre"
                  onClick={closeMenu}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors border ${
                    isActive('/sobre') 
                      ? 'bg-primary-blue text-primary-yellow border-primary-yellow/40 font-bold' 
                      : 'bg-slate-900/60 hover:bg-slate-800 text-gray-100 border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Info size={isLargeFont ? 24 : 20} className="text-primary-yellow shrink-0" />
                    <div>
                      <span className={`block font-bold leading-tight ${isLargeFont ? 'text-lg' : 'text-base'}`}>
                        Sobre a BS CAR CENTER
                      </span>
                      <span className="text-[11px] text-gray-400">
                        Nossa história e fotos da oficina
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </Link>

                {/* Áreas */}
                <Link
                  to="/areas"
                  onClick={closeMenu}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors border ${
                    isActive('/areas') 
                      ? 'bg-primary-blue text-primary-yellow border-primary-yellow/40 font-bold' 
                      : 'bg-slate-900/60 hover:bg-slate-800 text-gray-100 border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={isLargeFont ? 24 : 20} className="text-primary-yellow shrink-0" />
                    <div>
                      <span className={`block font-bold leading-tight ${isLargeFont ? 'text-lg' : 'text-base'}`}>
                        Bairros Atendidos
                      </span>
                      <span className="text-[11px] text-gray-400">
                        Novo Mundo, CIC, Portão, Pinheirinho...
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </Link>

                {/* Contato */}
                <Link
                  to="/contato"
                  onClick={closeMenu}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors border ${
                    isActive('/contato') 
                      ? 'bg-primary-blue text-primary-yellow border-primary-yellow/40 font-bold' 
                      : 'bg-slate-900/60 hover:bg-slate-800 text-gray-100 border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Phone size={isLargeFont ? 24 : 20} className="text-emerald-400 shrink-0" />
                    <div>
                      <span className={`block font-bold leading-tight ${isLargeFont ? 'text-lg' : 'text-base'}`}>
                        Contato e Localização
                      </span>
                      <span className="text-[11px] text-gray-400">
                        Telefones, horários e endereço completo
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </Link>
              </nav>
            </div>

            {/* HELPFUL STORE DETAILS FOR SENIORS */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-2 text-gray-300">
              <div className="flex items-start gap-2">
                <Clock size={16} className="text-primary-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Horário de Atendimento:</span>
                  <span>Segunda a Sexta: 08:00 às 18:00</span>
                  <br />
                  <span>Sábado: 08:00 às 12:00</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-slate-800">
                <MapPin size={16} className="text-primary-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Endereço da Loja:</span>
                  <span>Rua Pedro Gusso, 2340 e 2324</span>
                  <br />
                  <span className="text-gray-400">Novo Mundo, Curitiba - PR</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 pt-1 border-t border-slate-800 italic">
                Atendimento atencioso e honesto para você e sua família. Sala de espera climatizada com café cortesia.
              </p>
            </div>

          </div>

          {/* Drawer Bottom Close Button */}
          <div className="p-3 border-t border-white/10 bg-slate-900/90 shrink-0">
            <button
              onClick={closeMenu}
              className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
            >
              <X size={18} />
              <span>Fechar Este Menu</span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
