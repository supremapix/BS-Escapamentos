import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Phone, 
  Navigation, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  Gauge, 
  Sparkles,
  Coffee
} from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

interface TickerItem {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  type: 'external' | 'internal' | 'tel';
  href: string;
  badgeStyle: string;
  iconStyle: string;
  textStyle: string;
}

const TICKER_ITEMS: TickerItem[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp Oficial',
    sublabel: COMPANY_INFO.whatsappDisplay,
    icon: <MessageCircle size={16} className="fill-emerald-400 shrink-0" />,
    type: 'external',
    href: `https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pelo site da BS CAR CENTER e gostaria de agendar uma avaliação.`,
    badgeStyle: 'bg-emerald-950/80 hover:bg-emerald-900 border-emerald-500/50 hover:border-emerald-400 text-emerald-200',
    iconStyle: 'text-emerald-400',
    textStyle: 'text-emerald-300 font-extrabold',
  },
  {
    id: 'phone',
    label: 'Ligar na Oficina',
    sublabel: COMPANY_INFO.phone,
    icon: <Phone size={15} className="fill-amber-400 shrink-0" />,
    type: 'tel',
    href: `tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`,
    badgeStyle: 'bg-amber-950/80 hover:bg-amber-900 border-amber-500/50 hover:border-amber-400 text-amber-200',
    iconStyle: 'text-amber-400',
    textStyle: 'text-amber-300 font-extrabold',
  },
  {
    id: 'gps',
    label: 'Como Chegar (GPS)',
    sublabel: 'R. Pedro Gusso, 2340 - Novo Mundo',
    icon: <Navigation size={15} className="text-sky-400 shrink-0" />,
    type: 'external',
    href: COMPANY_INFO.mapsLink,
    badgeStyle: 'bg-sky-950/80 hover:bg-sky-900 border-sky-500/50 hover:border-sky-400 text-sky-200',
    iconStyle: 'text-sky-400',
    textStyle: 'text-sky-300 font-bold',
  },
  {
    id: 'services',
    label: 'Ver Serviços Mecânicos',
    sublabel: 'Freios, Suspensão, Óleo & Motor',
    icon: <Wrench size={15} className="text-primary-yellow shrink-0" />,
    type: 'internal',
    href: '/servicos',
    badgeStyle: 'bg-slate-900 hover:bg-slate-800 border-primary-yellow/50 hover:border-primary-yellow text-gray-200',
    iconStyle: 'text-primary-yellow',
    textStyle: 'text-white font-bold',
  },
  {
    id: 'hours',
    label: 'Horário de Atendimento',
    sublabel: 'Seg a Sex 08h-18h | Sáb 08h-12h',
    icon: <Clock size={15} className="text-yellow-400 shrink-0" />,
    type: 'internal',
    href: '/contato',
    badgeStyle: 'bg-slate-900 hover:bg-slate-800 border-slate-700 hover:border-slate-500 text-gray-200',
    iconStyle: 'text-yellow-400',
    textStyle: 'text-gray-100 font-medium',
  },
  {
    id: 'warranty',
    label: 'Garantia de 90 Dias',
    sublabel: 'Peças de Procedência & CDC',
    icon: <ShieldCheck size={15} className="text-emerald-400 shrink-0" />,
    type: 'internal',
    href: '/sobre',
    badgeStyle: 'bg-slate-900 hover:bg-slate-800 border-emerald-500/40 hover:border-emerald-400 text-emerald-200',
    iconStyle: 'text-emerald-400',
    textStyle: 'text-emerald-300 font-bold',
  },
  {
    id: 'payment',
    label: 'Pagamento Facilitado',
    sublabel: 'Cartões em até 12x • Pix • Débito',
    icon: <CreditCard size={15} className="text-amber-400 shrink-0" />,
    type: 'internal',
    href: '/contato',
    badgeStyle: 'bg-slate-900 hover:bg-slate-800 border-amber-500/40 hover:border-amber-400 text-amber-200',
    iconStyle: 'text-amber-400',
    textStyle: 'text-amber-300 font-bold',
  },
  {
    id: 'scanner',
    label: 'Scanner Computadorizado',
    sublabel: 'Diagnóstico Eletrônico Preciso',
    icon: <Gauge size={15} className="text-cyan-400 shrink-0" />,
    type: 'internal',
    href: '/servicos/injecao-eletronica-diagnostico',
    badgeStyle: 'bg-slate-900 hover:bg-slate-800 border-cyan-500/40 hover:border-cyan-400 text-cyan-200',
    iconStyle: 'text-cyan-400',
    textStyle: 'text-cyan-300 font-bold',
  },
  {
    id: 'lounge',
    label: 'Estrutura & Conforto',
    sublabel: 'Sala Climatizada com Café Cortesia',
    icon: <Coffee size={15} className="text-rose-400 shrink-0" />,
    type: 'internal',
    href: '/sobre',
    badgeStyle: 'bg-slate-900 hover:bg-slate-800 border-rose-500/40 hover:border-rose-400 text-rose-200',
    iconStyle: 'text-rose-400',
    textStyle: 'text-rose-200 font-medium',
  }
];

const ActionTicker: React.FC = () => {
  const renderItem = (item: TickerItem, idx: number) => {
    const content = (
      <div className="flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-black/40 shrink-0 shadow-inner">
          {item.icon}
        </div>
        <div className="text-left leading-tight">
          <span className={`block text-xs uppercase tracking-wider ${item.textStyle}`}>
            {item.label}
          </span>
          {item.sublabel && (
            <span className="block text-[11px] text-gray-300 opacity-90 font-normal">
              {item.sublabel}
            </span>
          )}
        </div>
      </div>
    );

    const baseClass = `inline-flex items-center px-3 py-1 rounded-xl border transition-all duration-200 transform hover:scale-[1.02] active:scale-95 shadow-sm mx-1.5 whitespace-nowrap cursor-pointer ${item.badgeStyle}`;

    if (item.type === 'internal') {
      return (
        <Link key={`${item.id}-${idx}`} to={item.href} className={baseClass}>
          {content}
        </Link>
      );
    }

    return (
      <a
        key={`${item.id}-${idx}`}
        href={item.href}
        target={item.type === 'external' ? '_blank' : undefined}
        rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
        className={baseClass}
      >
        {content}
      </a>
    );
  };

  return (
    <section 
      aria-label="Letreiro de Ações Rápidas da BS CAR CENTER" 
      className="relative w-full bg-slate-950 border-b border-primary-yellow/40 shadow-sm py-1 sm:py-1.5 overflow-hidden z-20"
    >
      {/* Side Vignettes for smooth edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-950 to-transparent z-10" />

      <div className="flex items-center">
        {/* Left Indicator Label */}
        <div className="hidden lg:flex items-center gap-2 pl-4 pr-3 py-1 bg-slate-900 border-r border-white/10 shrink-0 z-20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-[10px] uppercase font-black tracking-widest text-primary-yellow">
            AÇÕES RÁPIDAS
          </span>
        </div>

        {/* Continuous Running Ticker Track */}
        <div className="flex overflow-hidden w-full group select-none">
          {/* Track 1 */}
          <div className="flex items-center shrink-0 animate-scroll-left group-hover:[animation-play-state:paused] [animation-duration:18s]">
            {TICKER_ITEMS.map((item, idx) => renderItem(item, idx))}
          </div>
          {/* Track 2 (Duplicate for Seamless Loop) */}
          <div className="flex items-center shrink-0 animate-scroll-left group-hover:[animation-play-state:paused] [animation-duration:18s]" aria-hidden="true">
            {TICKER_ITEMS.map((item, idx) => renderItem(item, idx + 100))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionTicker;
