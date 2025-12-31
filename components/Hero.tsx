import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../data/constants';
import { ChevronRight, ShieldCheck, Zap, Wrench, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MESSAGES = [
  "REFERÊNCIA EM ESCAPAMENTOS",
  "SUSPENSÃO E FREIOS PREMIUM",
  "DIAGNÓSTICO COMPUTADORIZADO",
  "PEÇAS ORIGINAIS E GARANTIA",
  "ORÇAMENTO JUSTO E TRANSPARENTE",
  "MECÂNICA GERAL ESPECIALIZADA"
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Parallax Effect Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slider Logic with "Ken Burns" effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); 
    return () => clearInterval(slideInterval);
  }, []);

  // Typewriter Logic
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % MESSAGES.length;
      const fullText = MESSAGES[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Typing is slightly faster (60ms), Deleting is fast (30ms)
      setTypingSpeed(isDeleting ? 30 : 60);

      if (!isDeleting && text === fullText) {
        // Pause at the end of the sentence
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const i = loopNum % MESSAGES.length;
    const fullText = MESSAGES[i];
    
    let timer: ReturnType<typeof setTimeout>;
    
    if (text === fullText && !isDeleting) {
        // Paused handled by setTimeout above, but we need to ensure this doesn't conflict
    } else {
        timer = setTimeout(handleType, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary-dark text-white overflow-hidden">
      
      {/* --- Dynamic Background --- */}
      {HERO_IMAGES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
          }`}
        >
          <img 
            src={slide} 
            alt="Oficina Mecânica BS Escapamentos" 
            className={`w-full h-full object-cover transform will-change-transform ${
              index === currentSlide ? 'animate-[zoom-in_8s_ease-out_forwards]' : 'scale-105'
            }`}
          />
        </div>
      ))}
      
      {/* --- Overlay Layers for Readability & Style --- */}
      {/* 1. Base Darkening */}
      <div className="absolute inset-0 bg-gray-900/60 z-0"></div>
      
      {/* 2. Texture (Carbon Fiber / Dot Pattern) */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
      
      {/* 3. Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-transparent to-primary-dark/90 z-0"></div>
      
      
      {/* --- Main Content --- */}
      <div 
        className="container mx-auto px-4 z-10 text-center relative flex flex-col items-center justify-center h-full pt-20 md:pt-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        
        {/* Trust Badge */}
        <div className="mb-4 md:mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 md:px-4 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-widest text-white shadow-lg">
                <Star size={12} className="text-primary-yellow fill-current" />
                <span>Auto Center Premium</span>
                <Star size={12} className="text-primary-yellow fill-current" />
             </div>
        </div>

        {/* Brand Name - High Impact & Responsive */}
        <h1 className="relative w-full font-heading font-black mb-4 tracking-tighter animate-fade-in-up leading-none drop-shadow-2xl flex flex-col items-center justify-center" style={{ animationDelay: '0.2s' }}>
          <span className="block text-white text-shadow-xl text-7xl sm:text-8xl md:text-9xl mb-1 md:mb-2">BS</span>
          {/* Using fluid text size (vw) for mobile to ensure "ESCAPAMENTOS" never overflows */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-primary-yellow via-yellow-400 to-yellow-600 drop-shadow-sm pb-2 text-[11vw] sm:text-6xl md:text-8xl lg:text-9xl whitespace-nowrap px-2">
            ESCAPAMENTOS
          </span>
        </h1>
        
        {/* Typewriter Subheading */}
        <div className="h-14 md:h-20 flex items-center justify-center animate-fade-in-up mb-8" style={{ animationDelay: '0.4s' }}>
          <div className="bg-black/40 backdrop-blur-sm border-x-2 md:border-x-4 border-primary-yellow px-4 py-3 md:px-6 rounded-lg max-w-[95vw]">
            <span className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-mono font-bold text-white tracking-wide block truncate">
              {text}
              <span className="animate-pulse text-primary-yellow ml-1">_</span>
            </span>
          </div>
        </div>

        {/* Value Proposition */}
        <p className="max-w-3xl mx-auto text-gray-200 text-sm md:text-lg leading-relaxed animate-fade-in-up font-light mb-8 md:mb-10 drop-shadow-md px-4" style={{ animationDelay: '0.6s' }}>
          A excelência que seu veículo merece. <strong className="text-white">Peças originais</strong>, <strong className="text-white">garantia estendida</strong> e a equipe mais qualificada de Curitiba.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: '0.8s' }}>
          <Link 
            to="/contato"
            className="flex-1 group relative bg-primary-yellow hover:bg-yellow-400 text-primary-dark font-black py-3.5 px-6 rounded-xl overflow-hidden transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] flex items-center justify-center gap-3 text-base md:text-lg border-2 border-primary-yellow"
          >
            <Zap size={20} className="fill-primary-dark group-hover:scale-110 transition-transform" />
            <span>ORÇAMENTO RÁPIDO</span>
          </Link>
          
          <Link 
            to="/servicos"
            className="flex-1 group bg-white/5 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-3.5 px-6 rounded-xl transition-all hover:bg-white hover:text-primary-blue hover:border-white hover:shadow-lg flex items-center justify-center gap-2 text-base md:text-lg"
          >
            <Wrench size={18} className="group-hover:rotate-12 transition-transform" />
            <span>Nossos Serviços</span>
          </Link>
        </div>

        {/* Bottom Badges */}
        <div className="mt-10 md:mt-16 flex gap-4 md:gap-12 justify-center opacity-70 animate-fade-in-up scale-90 md:scale-100" style={{ animationDelay: '1s' }}>
           <div className="flex flex-col items-center gap-1">
             <ShieldCheck size={24} className="text-green-400" />
             <span className="text-[10px] uppercase font-bold tracking-widest">Garantia</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <CheckCircle size={24} className="text-blue-400" />
             <span className="text-[10px] uppercase font-bold tracking-widest">Certificado</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <Star size={24} className="text-yellow-400 fill-current" />
             <span className="text-[10px] uppercase font-bold tracking-widest">Avaliado 5/5</span>
           </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-80 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth'})}>
        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Descubra Mais</span>
        <ChevronRight size={24} className="rotate-90 text-primary-yellow" />
      </div>

      {/* Decorative Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;