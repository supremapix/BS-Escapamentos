import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, ArrowRight, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

interface InstagramSectionProps {
  instagramUrl?: string;
  handle?: string;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({
  instagramUrl = 'https://www.instagram.com/bs_car_center_/',
  handle = '@bs_car_center_'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  // Instagram official gradient class
  const instaGradient = "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]";

  return (
    <section 
      ref={containerRef}
      id="instagram"
      className="relative bg-gray-50/50 border-y border-gray-200 py-16 px-4 overflow-hidden"
    >
      {/* 1. Soft Glow Background Lights */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-80 md:w-96 h-80 md:h-96 bg-gradient-to-tr from-pink-500/15 via-purple-500/15 to-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-80 md:w-96 h-80 md:h-96 bg-gradient-to-bl from-amber-400/15 via-rose-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        
        {/* 2. Header Section */}
        <motion.div 
          className="text-center flex flex-col items-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Rounded Badge with official Instagram gradient */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-sm text-white mb-4 shadow-pink-500/20">
            <span className={`${instaGradient} flex items-center gap-2 px-3 py-1 rounded-full text-white text-[11px] md:text-xs font-mono font-bold tracking-wider uppercase`}>
              <Instagram size={14} className="shrink-0" />
              <span>Social Real {handle}</span>
            </span>
          </div>

          {/* Main Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black uppercase text-gray-950 tracking-tight mb-3">
            Siga-nos no Instagram • <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600">{handle}</span>
          </h3>

          {/* Clean Description */}
          <p className="text-gray-600 font-medium text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Acompanhe nossos stories com diagnósticos em tempo real, bastidores dos serviços automotivos, novidades e o dia a dia da oficina no Novo Mundo.
          </p>
        </motion.div>

        {/* 3. Embedded Feed Card */}
        <motion.div 
          className="max-w-md mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bg-white rounded-3xl p-3 sm:p-4 border border-gray-200/90 shadow-xl shadow-gray-200/60 hover:scale-[1.01] transition-transform duration-300 relative group overflow-hidden">
            
            {/* Top Bar inside card */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 mb-2">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-full p-[2px] ${instaGradient} flex items-center justify-center`}>
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <Instagram size={14} className="text-rose-600" />
                  </div>
                </div>
                <div>
                  <span className="font-heading font-bold text-xs text-gray-900 block leading-none">
                    bs_car_center_
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono">Curitiba / Novo Mundo</span>
                </div>
              </div>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-primary-blue hover:text-rose-600 transition-colors inline-flex items-center gap-1"
              >
                <span>Ver perfil</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Responsive Embed Container */}
            <div className="w-full relative rounded-2xl overflow-hidden bg-white border border-gray-100">
              <iframe
                src={`${instagramUrl.replace(/\/$/, '')}/embed`}
                title="Instagram Feed BS Car Center"
                className="w-full h-[175px] sm:h-[205px] border-0 block"
                loading="lazy"
                scrolling="no"
                allow="encrypted-media"
              />
            </div>

            {/* Sub-caption bar */}
            <div className="px-3 pt-3 pb-1 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <Sparkles size={12} className="text-amber-500" />
                Stories & publicações diárias
              </span>
              <span className="text-[10px] text-gray-400">@bs_car_center_</span>
            </div>
          </div>
        </motion.div>

        {/* 4. Action Buttons (CTA) & Value Seals */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main Instagram CTA Button */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative ${instaGradient} hover:brightness-110 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-pink-500/25 transition-all duration-300 flex items-center justify-center gap-3 text-sm md:text-base active:scale-95`}
          >
            <Instagram size={20} className="shrink-0 transition-transform group-hover:scale-110" />
            <span>Seguir no Instagram Oficial</span>
            <ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Floating Value Seal of Authority */}
          <div className="bg-white border border-gray-200 rounded-2xl py-3.5 px-5 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold text-gray-800 tracking-tight">
                Comunidade 100% Organizada de Curitiba
              </span>
              <span className="text-[10px] text-gray-500">Atualizações reais do dia a dia</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramSection;
