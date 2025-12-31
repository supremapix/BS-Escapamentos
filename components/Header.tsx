import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Helper to determine if link is active
  const isActive = (path: string) => location.pathname === path;

  // Determine header appearance
  // Always dark if not home, or if home and scrolled
  const showDarkHeader = !isHome || scrolled;

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Áreas', path: '/areas' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
          showDarkHeader
            ? 'bg-primary-dark/95 backdrop-blur-md py-2 shadow-lg border-white/10' 
            : 'bg-transparent py-4 border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 z-50 group" onClick={closeMenu}>
            <div className={`relative flex items-center justify-center transition-all duration-300 ${showDarkHeader ? 'w-12 h-8' : 'w-16 h-10 md:w-20 md:h-12'} bg-primary-blue border-2 border-primary-yellow rounded-[50%] shadow-lg shadow-black/50`}>
               <span className="text-primary-yellow font-black italic tracking-tighter" style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: showDarkHeader ? '1rem' : '1.5rem' }}>BS</span>
            </div>
            
            <div className="flex flex-col">
              <span className={`font-heading font-bold leading-tight tracking-wide transition-colors drop-shadow-md ${showDarkHeader ? 'text-white group-hover:text-primary-yellow' : 'text-white group-hover:text-primary-yellow text-shadow-lg'}`} style={{ fontSize: showDarkHeader ? '1rem' : '1.25rem' }}>
                ESCAPAMENTOS
              </span>
              <span className="text-primary-yellow font-medium tracking-[0.2em] uppercase text-[10px] drop-shadow-sm">
                Auto Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium text-sm uppercase tracking-wide group py-2 transition-colors ${
                  isActive(link.path) 
                    ? 'text-primary-yellow' 
                    : showDarkHeader ? 'text-gray-300 hover:text-white' : 'text-gray-100 hover:text-white text-shadow'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-yellow transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-green hover:bg-green-500 text-white px-6 py-2.5 rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] active:scale-95 border border-white/20 group"
            >
              <MessageCircle size={18} className="group-hover:animate-bounce" />
              <span className="font-semibold text-sm">WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden focus:outline-none z-50 p-2 rounded-full transition-colors ${showDarkHeader ? 'text-white hover:bg-white/10' : 'text-white hover:bg-black/20'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} className="text-primary-yellow" /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay (Sophisticated Drawer) */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={closeMenu}
        />

        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-primary-dark/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="flex flex-col items-center justify-center pt-20 pb-6 border-b border-white/10 bg-gradient-to-b from-primary-blue/20 to-transparent">
             <div className="w-16 h-10 bg-primary-blue border-2 border-primary-yellow rounded-[50%] flex items-center justify-center shadow-lg mb-3">
               <span className="text-primary-yellow font-black text-xl italic">BS</span>
             </div>
             <p className="text-gray-300 text-xs uppercase tracking-widest">Menu Principal</p>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-4">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block text-xl font-heading font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-transparent ${
                  isActive(link.path) 
                    ? 'bg-primary-blue/30 text-primary-yellow border-primary-blue/50 translate-x-2' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white hover:translate-x-2'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 bg-black/20">
             <div className="grid grid-cols-2 gap-4 mb-6">
                <a 
                  href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
                  className="flex flex-col items-center justify-center bg-primary-green p-3 rounded-xl text-white hover:bg-green-600 transition-colors shadow-lg active:scale-95"
                >
                   <MessageCircle size={24} className="mb-1" />
                   <span className="text-xs font-bold">WhatsApp</span>
                </a>
                <a 
                   href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                   className="flex flex-col items-center justify-center bg-primary-blue p-3 rounded-xl text-white hover:bg-blue-800 transition-colors shadow-lg active:scale-95"
                >
                   <Phone size={24} className="mb-1" />
                   <span className="text-xs font-bold">Ligar</span>
                </a>
             </div>
             
             <div className="flex justify-between items-center text-gray-400 text-sm">
                <div className="flex gap-4">
                   <a href={COMPANY_INFO.facebook} target="_blank" rel="noreferrer" className="hover:text-primary-yellow p-2 -m-2"><Facebook size={20}/></a>
                   <a href="#" className="hover:text-primary-yellow p-2 -m-2"><Instagram size={20}/></a>
                </div>
                <a href={COMPANY_INFO.mapsLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-primary-yellow p-2 -m-2">
                   <MapPin size={16} /> Como chegar
                </a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;