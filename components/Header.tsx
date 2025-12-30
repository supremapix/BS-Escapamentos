import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to determine if link is active
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Áreas de Atendimento', path: '/areas' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-primary-blue/95 backdrop-blur-sm shadow-lg border-b border-blue-900 transition-all duration-300">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 z-50 group">
          {/* Real BS Logo Emulation - Blue Oval, Yellow Text */}
          <div className="relative flex items-center justify-center w-16 h-10 md:w-20 md:h-12 bg-primary-blue border-2 border-primary-yellow rounded-[50%] shadow-lg transform group-hover:scale-105 transition-all duration-300">
             <span className="text-primary-yellow font-black text-xl md:text-2xl italic tracking-tighter" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>BS</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-white font-heading font-bold text-lg md:text-xl leading-tight tracking-wide group-hover:text-primary-yellow transition-colors">
              ESCAPAMENTOS
            </span>
            <span className="text-primary-yellow text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
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
              className={`relative font-medium text-sm uppercase tracking-wide group py-2 ${isActive(link.path) ? 'text-primary-yellow' : 'text-gray-200 hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-yellow transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          <a
            href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary-green hover:bg-green-500 text-white px-6 py-2.5 rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] active:scale-95 border border-white/20"
          >
            <Phone size={18} className="animate-bounce" />
            <span className="font-semibold">WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none z-50 hover:text-primary-yellow transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-primary-blue/98 backdrop-blur-xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center space-y-8 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className={`text-2xl font-heading font-semibold transition-colors hover:scale-110 transform duration-200 ${isActive(link.path) ? 'text-primary-yellow' : 'text-white hover:text-primary-yellow'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
            className="flex items-center gap-2 bg-primary-green text-white px-8 py-4 rounded-full text-xl shadow-xl hover:bg-green-500 transition-colors"
            onClick={toggleMenu}
          >
            <Phone size={24} />
            Agendar Agora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;