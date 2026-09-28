import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO, SERVICES } from '../data/constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    setIsOpen(!isOpen);
    if (!isOpen) {
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
  const showDarkHeader = !isHome || scrolled;

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
          showDarkHeader
            ? 'bg-primary-dark/95 backdrop-blur-md py-2 md:py-2.5 shadow-lg border-white/10' 
            : 'bg-primary-dark/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-2 md:py-4 border-white/10 md:border-transparent shadow-md md:shadow-none'
        }`}
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

            {/* CTA Button */}
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pelo site da BS CAR CENTER e gostaria de agendar um atendimento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-green hover:bg-green-600 text-white px-5 py-2 rounded-full transition-all text-xs font-bold shadow-md hover:scale-105"
            >
              <MessageCircle size={15} />
              <span>AGENDAR</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-3 z-50">
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-green text-white p-2 rounded-full shadow"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors ${showDarkHeader ? 'text-white hover:bg-white/10' : 'text-white hover:bg-black/20'}`}
              aria-label="Menu de Navegação"
            >
              {isOpen ? <X size={26} className="text-primary-yellow" /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Clean, no giant dropdown overflow) */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
          onClick={closeMenu}
        />

        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-primary-dark border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="pt-16 pb-4 px-6 border-b border-white/10 bg-primary-blue/20">
            <span className="text-primary-yellow font-black text-lg block">BS CAR CENTER</span>
            <span className="text-gray-300 text-xs">Novo Mundo, Curitiba - PR</span>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/') ? 'bg-primary-blue text-primary-yellow' : 'text-gray-200 hover:bg-white/5'
              }`}
            >
              Início
            </Link>

            <Link
              to="/manutencao-automotiva-curitiba"
              onClick={closeMenu}
              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/manutencao-automotiva-curitiba') ? 'bg-primary-blue text-primary-yellow' : 'text-gray-200 hover:bg-white/5'
              }`}
            >
              Manutenção Automotiva
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-200 hover:bg-white/5"
              >
                <span>Serviços</span>
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180 text-primary-yellow' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-black/20 rounded-lg my-1">
                  <Link
                    to="/servicos"
                    onClick={closeMenu}
                    className="block px-3 py-1.5 text-xs font-bold text-primary-yellow hover:underline"
                  >
                    Ver Todos os Serviços
                  </Link>
                  {SERVICES.filter(s => s.slug !== 'manutencao-automotiva').map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/servicos/${srv.slug}`}
                      onClick={closeMenu}
                      className="block px-3 py-1.5 text-xs text-gray-300 hover:text-white"
                    >
                      {srv.shortTitle || srv.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/sobre"
              onClick={closeMenu}
              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/sobre') ? 'bg-primary-blue text-primary-yellow' : 'text-gray-200 hover:bg-white/5'
              }`}
            >
              Sobre
            </Link>

            <Link
              to="/areas"
              onClick={closeMenu}
              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/areas') ? 'bg-primary-blue text-primary-yellow' : 'text-gray-200 hover:bg-white/5'
              }`}
            >
              Áreas Atendidas
            </Link>

            <Link
              to="/contato"
              onClick={closeMenu}
              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/contato') ? 'bg-primary-blue text-primary-yellow' : 'text-gray-200 hover:bg-white/5'
              }`}
            >
              Contato
            </Link>
          </div>

          {/* Drawer Footer CTA */}
          <div className="p-4 border-t border-white/10 bg-black/30 space-y-2">
            <a 
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pelo site da BS CAR CENTER.`}
              className="flex items-center justify-center gap-2 bg-primary-green p-3 rounded-xl text-white font-bold text-sm shadow"
            >
              <MessageCircle size={18} />
              <span>Agendar no WhatsApp</span>
            </a>
            
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center justify-center gap-2 bg-white/10 p-2.5 rounded-xl text-white font-semibold text-xs"
            >
              <Phone size={15} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
