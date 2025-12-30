import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../data/constants';
import { ChevronRight, ShieldCheck, Zap, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const messages = [
    "ESCAPAMENTOS ESPECIAIS",
    "SUSPENSÃO DE ALTA PERFORMANCE",
    "FREIOS E SEGURANÇA",
    "MECÂNICA PREMIUM",
    "DIAGNÓSTICO COMPUTADORIZADO"
  ];

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
      const i = loopNum % messages.length;
      const fullText = messages[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 80);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, messages]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-primary-dark text-white overflow-hidden">
      {/* Dynamic Background Slideshow with Cross-fade and Zoom */}
      {HERO_IMAGES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
          }`}
        >
          {/* Image with Ken Burns Effect */}
          <img 
            src={slide} 
            alt="Oficina Mecânica BS Escapamentos" 
            className={`w-full h-full object-cover transform will-change-transform ${
              index === currentSlide ? 'animate-[zoom-in_8s_ease-out_forwards]' : 'scale-100'
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}
      
      {/* Dramatic Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/50 z-0 pointer-events-none"></div>
      
      {/* Content Container with Parallax Parallax */}
      <div 
        className="container mx-auto px-4 z-10 text-center relative"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        
        {/* Floating Badge */}
        <div className="mb-8 flex justify-center animate-fade-in-up">
             <div className="bg-primary-blue/80 backdrop-blur-md border border-primary-yellow text-primary-yellow px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-3 shadow-[0_0_20px_rgba(250,204,21,0.3)] animate-float">
                <ShieldCheck size={16} className="text-primary-yellow" />
                Referência em Curitiba e Região
                <ShieldCheck size={16} className="text-primary-yellow" />
             </div>
        </div>

        {/* Main Headings */}
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black mb-2 tracking-tighter animate-fade-in-up text-shadow-xl" style={{ animationDelay: '0.1s' }}>
          BS <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl">ESCAPAMENTOS</span>
        </h2>
        
        <div className="h-24 md:h-32 flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg md:text-2xl text-gray-300 font-medium mb-1 tracking-wide uppercase text-shadow-lg">Somos especialistas em</p>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-yellow drop-shadow-[0_0_25px_rgba(250,204,21,0.5)]">
            {text}
            <span className="cursor-blink text-white font-light ml-1">|</span>
          </h1>
        </div>

        <p className="mt-8 text-gray-100 max-w-3xl mx-auto text-base md:text-xl leading-relaxed animate-fade-in-up font-light text-shadow-lg bg-black/30 p-4 rounded-xl backdrop-blur-sm border border-white/10" style={{ animationDelay: '0.5s' }}>
          Tecnologia automotiva avançada e atendimento premium. <br className="hidden md:block"/>
          Transformamos a performance e segurança do seu veículo com peças originais e garantia total.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <Link 
            to="/contato"
            className="w-full md:w-auto group relative bg-primary-yellow text-primary-blue font-black py-4 px-12 rounded-full overflow-hidden transition-all transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] flex items-center justify-center gap-3 text-lg border-2 border-primary-yellow"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 via-white/50 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Zap size={24} className="relative z-10 fill-current animate-pulse" />
            <span className="relative z-10">SOLICITAR ORÇAMENTO</span>
            <ChevronRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="/areas"
            className="w-full md:w-auto group bg-transparent backdrop-blur-md border-2 border-white text-white font-bold py-4 px-12 rounded-full transition-all hover:bg-white hover:text-primary-blue hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 text-lg"
          >
            <Wrench size={20} />
            Ver Áreas de Atendimento
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {HERO_IMAGES.map((_, index) => (
            <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === currentSlide ? 'bg-primary-yellow w-12 shadow-[0_0_10px_rgba(250,204,21,0.8)]' : 'bg-white/40 w-4 hover:bg-white/80'
                }`}
                aria-label={`Slide ${index + 1}`}
            />
        ))}
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20 opacity-70">
        <ChevronRight size={32} className="rotate-90 text-white" />
      </div>
    </section>
  );
};

export default Hero;