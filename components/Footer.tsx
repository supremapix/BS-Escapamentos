import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Wrench, 
  Heart, 
  MessageCircle, 
  CreditCard, 
  ShieldCheck, 
  Coffee, 
  Truck,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, HOME_PRIMARY_AREAS, SERVICES } from '../data/constants';
import { Link } from 'react-router-dom';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-800/50 flex justify-center items-center">
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        <p className="text-slate-200 hover:text-white transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span> 
          
          {/* Coração pulsante com efeito de sombra */}
          <Heart 
            size={14} 
            className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]" 
          /> 
          
          <span className="opacity-90">por</span>
          
          {/* Link para o site da Suprema */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300"
          >
            Suprema Sites Express
            
            {/* Logotipo oficial com efeito de iluminação */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-primary-dark text-white pt-14 pb-8 border-t-4 border-primary-yellow overflow-hidden">
      {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://img.supremasite.com.br/bs/bs-loja.webp"
          className="w-full h-full object-cover opacity-25 filter saturate-150"
        >
          <source src="https://img.supremasite.com.br/bs/bs.mp4" type="video/mp4" />
          <source src="/bs.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/90 to-black/95"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* --- DESTAQUE DE CONTATOS (Cards no Topo do Rodapé) --- */}
        <div className="mb-12">
          <div className="text-center md:text-left mb-6">
            <span className="text-primary-yellow text-xs font-black uppercase tracking-[0.2em] block mb-1">
              Central de Atendimento e Localização
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
              Fale com a BS CAR CENTER no Novo Mundo
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Telefone Fixo */}
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 hover:border-amber-400 p-5 rounded-2xl shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-primary-yellow flex items-center justify-center">
                    <Phone size={20} className="fill-primary-yellow" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-400/20">
                    Telefone Fixo
                  </span>
                </div>
                <span className="text-xs text-gray-400 block font-medium">Recepção e Mecânicos:</span>
                <span className="text-lg font-black text-white tracking-tight group-hover:text-primary-yellow transition-colors block">
                  {COMPANY_INFO.phone}
                </span>
                <p className="text-[11px] text-gray-400 mt-1 leading-snug">
                  Atendimento direto para tirar dúvidas ou orçamentos.
                </p>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="mt-4 w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl text-center shadow transition-all flex items-center justify-center gap-1.5"
              >
                <Phone size={14} />
                <span>Ligar Agora</span>
              </a>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 hover:border-emerald-400 p-5 rounded-2xl shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageCircle size={20} className="fill-emerald-400" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
                    WhatsApp
                  </span>
                </div>
                <span className="text-xs text-gray-400 block font-medium">Agendamento & Mensagens:</span>
                <span className="text-lg font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors block">
                  {COMPANY_INFO.whatsappDisplay}
                </span>
                <p className="text-[11px] text-gray-400 mt-1 leading-snug">
                  Envie fotos, vídeos de barulhos e receba resposta rápida.
                </p>
              </div>
              <a
                href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pelo site da BS CAR CENTER e gostaria de informações sobre serviços.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 bg-primary-green hover:bg-green-500 text-white font-black text-xs rounded-xl text-center shadow transition-all flex items-center justify-center gap-1.5"
              >
                <MessageCircle size={14} />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

            {/* Card 3: Endereço & GPS */}
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 hover:border-primary-yellow p-5 rounded-2xl shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-blue/30 text-primary-yellow flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-400/20">
                    2 Unidades
                  </span>
                </div>
                <span className="text-xs text-gray-400 block font-medium">Oficina e Boxes:</span>
                <span className="text-sm font-bold text-white block">
                  R. Pedro Gusso, 2340 & 2324
                </span>
                <p className="text-[11px] text-gray-400 mt-1 leading-snug">
                  Novo Mundo - Curitiba/PR (Fácil acesso ao CIC e Linha Verde).
                </p>
              </div>
              <a
                href={COMPANY_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 bg-primary-blue hover:bg-blue-600 text-white font-bold text-xs rounded-xl text-center shadow transition-all flex items-center justify-center gap-1.5"
              >
                <Navigation size={14} />
                <span>Traçar Rota GPS</span>
              </a>
            </div>

            {/* Card 4: Horários */}
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 p-5 rounded-2xl shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/20 text-primary-yellow flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-300 border border-yellow-400/20">
                    Funcionamento
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span className="text-gray-400">Seg a Sex:</span>
                    <span className="font-bold text-white">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1">
                    <span className="text-gray-400">Sábado:</span>
                    <span className="font-bold text-white">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Domingo:</span>
                    <span className="text-gray-500">Fechado</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-primary-yellow font-bold text-center">
                ✓ Atendimento sem fechar para almoço
              </div>
            </div>
          </div>
        </div>

        {/* --- INFORMAÇÕES ÚTEIS EM DESTAQUE (Garantia, Pagamento, Comodidades) --- */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-12 backdrop-blur-md">
          <div className="mb-6">
            <span className="text-primary-yellow text-xs font-black uppercase tracking-wider block mb-1">
              Tranquilidade e Garantia para o Cliente
            </span>
            <h4 className="text-xl sm:text-2xl font-heading font-black text-white">
              Informações Úteis sobre Nossos Serviços
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Informação 1: Pagamento */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary-yellow font-bold text-sm">
                <CreditCard size={18} />
                <span>Formas de Pagamento</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Parcelamos serviços e peças no cartão de crédito em até <strong>12x</strong>. Aceitamos Débito, Pix imediato, dinheiro e convênio/faturamento para empresas e frotas.
              </p>
            </div>

            {/* Informação 2: Garantia */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck size={18} />
                <span>Garantia de 90 Dias</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Todos os serviços executados possuem garantia de 90 dias conforme o Código de Defesa do Consumidor (CDC), com emissão de nota fiscal e peças de primeira linha.
              </p>
            </div>

            {/* Informação 3: Comodidades */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Coffee size={18} />
                <span>Sala de Espera e Conforto</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Espaço climatizado para aguardar com café cortesia, água gelada, Wi-Fi liberado e ambiente confortável para clientes e familiares.
              </p>
            </div>

            {/* Informação 4: Apoio e Guincho */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <Truck size={18} />
                <span>Socorro e Avaliação</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Carro não liga ou travou? Indicamos serviço de guincho parceiro para a região do Novo Mundo, CIC e Portão. Orçamento prévio claro e sem surpresas.
              </p>
            </div>
          </div>
        </div>

        {/* --- NAVEGAÇÃO SECUNDÁRIA E SERVIÇOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 pb-8 border-b border-slate-800">
          
          {/* Coluna 1: Sobre a Loja */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-10 h-7 bg-primary-blue border border-primary-yellow rounded-[50%] shadow-md">
                <span className="text-primary-yellow font-black text-sm italic" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
                  BS
                </span>
              </div>
              <span className="text-lg font-heading font-black tracking-wide text-white">
                BS CAR CENTER
              </span>
            </div>
            
            <p className="text-gray-300 text-xs leading-relaxed">
              Auto Center em Curitiba especializado em manutenção mecânica preventiva e corretiva, suspensão, freios, injeção eletrônica, escapamentos e catalisadores.
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed italic">
              Tradição automotiva em Curitiba (anteriormente BS Escapamentos).
            </p>
            <div className="pt-2 text-xs text-gray-300 space-y-1">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-primary-yellow shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </p>
              <p className="text-[11px] text-gray-400">
                CNPJ & Razão Social: {COMPANY_INFO.legalName}
              </p>
            </div>
          </div>

          {/* Coluna 2: Serviços Mecânicos */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary-yellow uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Wrench size={16} /> Principais Serviços
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link to="/manutencao-automotiva-curitiba" className="hover:text-primary-yellow transition-colors font-bold text-white flex items-center gap-1">
                  <span>• Manutenção Automotiva Completa</span>
                </Link>
              </li>
              {SERVICES.filter(s => s.slug !== 'manutencao-automotiva').slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link to={`/servicos/${srv.slug}`} className="hover:text-primary-yellow transition-colors flex items-center gap-1">
                    <span>• {srv.shortTitle || srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/servicos" className="text-primary-yellow hover:underline text-[11px] font-bold block pt-1">
                  Ver todos os serviços automotivos &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Regiões de Atendimento */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary-yellow uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <MapPin size={16} /> Bairros Atendidos
            </h4>
            <p className="text-gray-300 text-xs leading-relaxed mb-3">
              Oficina estabelecida no <strong>Novo Mundo</strong>, atendendo motoristas de:
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {HOME_PRIMARY_AREAS.slice(0, 8).map((area) => (
                <Link
                  key={area.slug}
                  to={`/local/${area.slug}`}
                  className="text-[10px] bg-white/10 hover:bg-primary-blue hover:text-white px-2 py-1 rounded text-gray-300 transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <Link
              to="/areas"
              className="text-xs text-primary-yellow hover:underline font-semibold block"
            >
              Ver todas as áreas atendidas &rarr;
            </Link>
          </div>

          {/* Coluna 4: Links Rápidos & Redes Sociais */}
          <div>
            <h4 className="text-sm font-heading font-bold text-primary-yellow uppercase tracking-wider mb-4">
              Acesso Rápido
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 mb-4">
              <li>
                <Link to="/" className="hover:text-primary-yellow transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-primary-yellow transition-colors">
                  Quem Somos & Fotos da Oficina
                </Link>
              </li>
              <li>
                <Link to="/areas" className="hover:text-primary-yellow transition-colors">
                  Localização e Bairros
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary-yellow transition-colors">
                  Fale Conosco e Enviar Mensagem
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-gray-400 block mb-2 font-medium">Siga a BS CAR CENTER:</span>
              <div className="flex gap-2">
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1"
                >
                  Instagram
                </a>
                <a
                  href={COMPANY_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados. {COMPANY_INFO.streetAddress}, {COMPANY_INFO.neighborhood} - {COMPANY_INFO.city}/{COMPANY_INFO.state}.</p>
          <div className="flex items-center gap-4 text-gray-400 text-xs">
            <Link to="/manutencao-automotiva-curitiba" className="hover:text-white">Manutenção</Link>
            <span>•</span>
            <Link to="/servicos" className="hover:text-white">Serviços</Link>
            <span>•</span>
            <Link to="/contato" className="hover:text-white">Contato</Link>
          </div>
        </div>

        {/* Suprema Sites Express Developer Credit */}
        <SupremaCredit />

      </div>
    </footer>
  );
};

export default Footer;
