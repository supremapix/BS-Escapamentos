import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Phone, X, Headset, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/constants';

const FloatingActions: React.FC = () => {
  const [showTop, setShowTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Base classes for sub-buttons
  const subBtnClass = "flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white transition-all duration-300 hover:scale-110";
  const labelClass = "absolute right-14 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      {/* Container for interactive elements (re-enabling pointer events) */}
      <div className="flex flex-col items-end gap-3 pointer-events-auto">

        {/* --- Sub-Menu Options --- */}
        <div className={`flex flex-col items-end gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          
          {/* Option: Email */}
          <div className="relative group flex items-center">
            <span className={labelClass}>Enviar Email</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className={`${subBtnClass} bg-orange-500 hover:bg-orange-600`}
              aria-label="Enviar Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Option: Form (Router Link) */}
          <div className="relative group flex items-center">
            <span className={labelClass}>Orçamento Online</span>
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className={`${subBtnClass} bg-gray-700 hover:bg-gray-600`}
              aria-label="Enviar Mensagem pelo Formulário"
            >
              <FileText size={20} />
            </Link>
          </div>

          {/* Option: Phone */}
          <div className="relative group flex items-center">
            <span className={labelClass}>Ligar Agora</span>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className={`${subBtnClass} bg-blue-600 hover:bg-blue-700`}
              aria-label="Ligar Agora"
            >
              <Phone size={20} />
            </a>
          </div>

          {/* Option: WhatsApp */}
          <div className="relative group flex items-center">
            <span className={labelClass}>WhatsApp</span>
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${subBtnClass} bg-primary-green hover:bg-green-600`}
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle size={22} />
            </a>
          </div>
        </div>

        {/* --- Main Toggle Button --- */}
        <button
          onClick={toggleMenu}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 ${isOpen ? 'bg-gray-600 rotate-90' : 'bg-primary-blue hover:bg-blue-800'}`}
          aria-label={isOpen ? "Fechar menu" : "Opções de contato"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <>
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20 animate-ping"></span>
              <Headset size={28} className="text-white relative z-10" />
            </>
          )}
        </button>

        {/* --- Back to Top Button --- */}
        <div className={`transition-all duration-500 ease-in-out ${showTop ? 'opacity-100 max-h-16 translate-y-0' : 'opacity-0 max-h-0 translate-y-8 overflow-hidden'}`}>
           <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-gray-400/80 hover:bg-gray-600 backdrop-blur-sm text-white rounded-full shadow-md transition-all hover:-translate-y-1"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default FloatingActions;