import React, { useState, useEffect } from 'react';
import { HERO_IMAGES, COMPANY_INFO } from '../data/constants';
import { ChevronRight, ShieldCheck, Wrench, MessageCircle, MapPin, Gauge } from 'lucide-react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slide rotation
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); 
    return () => clearInterval(slideInterval);
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
    <section id="home" className="relative h-screen min-h-[640px] flex items-center justify-center bg-primary-dark text-white overflow-hidden">
      
      {/* Dynamic Background Slides */}
      {HERO_IMAGES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
          }`}
        >
          <img 
            src={slide} 
            alt="Oficina Mecânica e Auto Center em Curitiba Novo Mundo" 
            className="w-full h-full object-cover transform will-change-transform scale-105"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      
      {/* Overlays for high contrast & legibility */}
      <div className="absolute inset-0 bg-gray-950/70 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-transparent to-primary-dark/95 z-0"></div>
      
      {/* Main Hero Container */}
      <div 
        className="container mx-auto px-4 z-10 text-center relative flex flex-col items-center justify-center h-full pt-20 md:pt-12"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        
        {/* Geographic & Positioning Tag */}
        <div className="mb-3 animate-fade-in-up">
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
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black mb-4 tracking-tight leading-tight text-white drop-shadow-xl max-w-4xl">
          Auto Center e Manutenção Automotiva em Curitiba
        </h1>
        
        {/* Typewriter Banner */}
        <div className="w-full flex items-center justify-center animate-fade-in-up mb-5 px-2">
          <div className="bg-black/60 backdrop-blur-md border-x-2 md:border-x-4 border-primary-yellow px-4 py-2.5 rounded-lg w-full max-w-2xl min-h-[50px] md:min-h-[58px] flex items-center justify-center shadow-lg">
            <span className="text-xs sm:text-sm md:text-lg font-mono font-bold text-white tracking-wide block text-center">
              {text}
              <span className="ml-1 inline-block text-primary-yellow font-black animate-pulse">_</span>
            </span>
          </div>
        </div>

        {/* Factual Subtitle (Item 4) */}
        <p className="max-w-2xl mx-auto text-gray-200 text-sm md:text-base leading-relaxed animate-fade-in-up font-normal mb-8 drop-shadow-md px-2">
          Manutenção Automotiva Completa em Curitiba: freios, suspensão, geometria, balanceamento, scanner, injeção eletrônica, troca de óleo, câmbio automático, motores e escapamentos no Novo Mundo, com fácil acesso ao CIC e região.
        </p>

        {/* Primary and Secondary CTA (Item 8) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto animate-fade-in-up px-4">
          <a 
            href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pelo site da BS CAR CENTER e gostaria de agendar um atendimento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group bg-primary-yellow hover:bg-yellow-400 text-primary-dark font-black py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2.5 text-base border border-primary-yellow"
          >
            <MessageCircle size={20} className="fill-primary-dark" />
            <span>AGENDAR ATENDIMENTO</span>
          </a>
          
          <Link 
            to="/servicos"
            className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-6 rounded-xl transition-all hover:bg-white hover:text-primary-dark hover:shadow-lg flex items-center justify-center gap-2 text-base"
          >
            <Wrench size={18} />
            <span>VER SERVIÇOS</span>
          </Link>
        </div>

        {/* Factual Badges (Item 24 & 52: Audited and truthful) */}
        <div className="mt-8 md:mt-10 flex gap-6 md:gap-10 justify-center text-gray-300 text-xs font-semibold animate-fade-in-up opacity-90">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={18} className="text-primary-green" />
            <span>Garantia de 90 dias (CDC)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge size={18} className="text-primary-yellow" />
            <span>Diagnóstico Computadorizado</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-70 cursor-pointer" 
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth'})}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-300">Conheça nossos serviços</span>
        <ChevronRight size={18} className="rotate-90 text-primary-yellow animate-bounce" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
