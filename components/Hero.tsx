import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/constants';
import { ChevronRight, ShieldCheck, Wrench, MessageCircle, MapPin, Gauge, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const MESSAGES = [
  "MANUTENÇÃO AUTOMOTIVA EM CURITIBA",
  "AUTO CENTER NO NOVO MUNDO",
  "FREIOS E SUSPENSÃO",
  "GEOMETRIA E BALANCEAMENTO",
  "DIAGNÓSTICO ELETRÔNICO COM SCANNER",
  "TROCA DE ÓLEO E REVISÕES",
  "ESCAPAMENTOS E CATALISADORES"
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [scrollY, setScrollY] = useState(0);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter logic
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleType = () => {
      const i = loopNum % MESSAGES.length;
      const fullText = MESSAGES[i];

      const nextText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(nextText);

      let nextSpeed = 100;
      if (isDeleting) {
        nextSpeed = 30;
      } else {
        nextSpeed = 50 + Math.random() * 80;
      }

      if (!isDeleting && nextText === fullText) {
        nextSpeed = 2200; 
        setIsDeleting(true);
      } else if (isDeleting && nextText === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        nextSpeed = 400;
      }

      setTypingSpeed(nextSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="home" className="relative min-h-[100dvh] md:h-screen flex items-center justify-center bg-primary-dark text-white overflow-hidden py-24 sm:py-28 md:py-0">
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://img.supremasite.com.br/bs/bs-loja.webp"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://img.supremasite.com.br/bs/bs.mp4" type="video/mp4" />
        <source src="/bs.mp4" type="video/mp4" />
      </video>

      {/* Overlays for high contrast & legibility */}
      <div className="absolute inset-0 bg-gray-950/75 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-transparent to-primary-dark/95 z-0"></div>
      
      {/* Main Hero Container */}
      <div 
        className="container mx-auto px-4 z-10 text-center relative flex flex-col items-center justify-center pt-4 sm:pt-8 md:pt-16 pb-8 md:pb-0 max-w-4xl"
      >
        
        {/* Geographic & Positioning Tag */}
        <div className="mb-2 sm:mb-3 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-wider text-primary-yellow shadow-md">
            <MapPin size={13} className="text-primary-yellow" />
            <span>Novo Mundo | Curitiba - PR</span>
          </div>
        </div>

        {/* Brand identity: BS CAR CENTER */}
        <div className="mb-2 text-center animate-fade-in-up">
          <span className="text-xs md:text-sm font-black tracking-[0.25em] uppercase text-primary-yellow block mb-1">
            BS CAR CENTER
          </span>
        </div>

        {/* Clear H1 reflecting the primary commercial intention (Item 7) */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-3 sm:mb-4 tracking-tight leading-tight text-white drop-shadow-xl max-w-4xl">
          Auto Center e Manutenção Automotiva em Curitiba
        </h1>
        
        {/* Typewriter Banner */}
        <div className="w-full flex items-center justify-center animate-fade-in-up mb-4 sm:mb-5 px-2">
          <div className="bg-black/60 backdrop-blur-md border-x-2 md:border-x-4 border-primary-yellow px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg w-full max-w-2xl min-h-[46px] sm:min-h-[50px] md:min-h-[58px] flex items-center justify-center shadow-lg">
            <span className="text-xs sm:text-sm md:text-lg font-mono font-bold text-white tracking-wide block text-center">
              {text}
              <span className="ml-1 inline-block text-primary-yellow font-black animate-pulse">_</span>
            </span>
          </div>
        </div>

        {/* Factual Subtitle (Item 4) */}
        <p className="max-w-2xl mx-auto text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed animate-fade-in-up font-normal mb-6 sm:mb-8 drop-shadow-md px-2">
          Manutenção Automotiva Completa em Curitiba: freios, suspensão, geometria, balanceamento, scanner, injeção eletrônica, troca de óleo, câmbio automático, motores e escapamentos no Novo Mundo, com fácil acesso ao CIC e região.
        </p>

        {/* Primary and Secondary CTA (Item 8) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-lg mx-auto animate-fade-in-up px-2 sm:px-4 mb-2">
          <a 
            href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pelo site da BS CAR CENTER e gostaria de agendar um atendimento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group bg-primary-yellow hover:bg-yellow-400 text-slate-950 font-black py-4 px-6 rounded-2xl transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2.5 text-sm sm:text-base border border-primary-yellow shadow-xl active:scale-95"
          >
            <MessageCircle size={20} className="fill-slate-950 shrink-0" />
            <span>AGENDAR ATENDIMENTO</span>
          </a>
          
          <Link 
            to="/servicos"
            className="flex-1 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-6 rounded-2xl transition-all hover:bg-white hover:text-slate-950 hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95"
          >
            <Wrench size={18} className="shrink-0" />
            <span>VER SERVIÇOS</span>
          </Link>
        </div>

        {/* Quick Phone Call option for mobile and seniors */}
        <div className="animate-fade-in-up text-center mb-4 sm:mb-6">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-200 hover:text-primary-yellow transition-colors font-medium bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10"
          >
            <Phone size={14} className="text-primary-yellow shrink-0 fill-primary-yellow" />
            <span>Prefere ligar direto? <strong className="text-primary-yellow underline font-bold">{COMPANY_INFO.phone}</strong></span>
          </a>
        </div>

        {/* Factual Badges (Item 24 & 52: Audited and truthful) */}
        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap gap-4 sm:gap-6 md:gap-10 justify-center text-gray-300 text-[11px] sm:text-xs font-semibold animate-fade-in-up opacity-90">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-primary-green" />
            <span>Garantia de 90 dias (CDC)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge size={16} className="text-primary-yellow" />
            <span>Diagnóstico Computadorizado</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Desktop only to prevent mobile overlap */}
      <div 
        className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center gap-1 opacity-70 cursor-pointer" 
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth'})}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-300">Conheça nossos serviços</span>
        <ChevronRight size={18} className="rotate-90 text-primary-yellow animate-bounce" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
