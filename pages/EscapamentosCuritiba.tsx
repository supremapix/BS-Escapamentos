import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Wrench, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronDown, 
  Navigation, 
  Calendar, 
  ArrowRight,
  Car,
  HelpCircle,
  Info
} from 'lucide-react';
import { COMPANY_INFO } from '../data/constants';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Onde trocar escapamento em Curitiba?",
    answer: "A BS CAR CENTER realiza diagnóstico, conserto e troca de escapamentos em Curitiba na Rua Pedro Gusso, 2340, no bairro Novo Mundo, com fácil acesso ao CIC, Neo Ville, Capão Raso, Portão e Pinheirinho."
  },
  {
    question: "Vocês fazem diagnóstico de escapamento?",
    answer: "Sim. Realizamos avaliação técnica completa do sistema de exaustão, verificando fixações, borrachas de sustentação, flexíveis, tubulações, silenciosos e catalisador antes de qualquer indicação de serviço ou orçamento."
  },
  {
    question: "Vocês trocam catalisador?",
    answer: "Sim. Realizamos a substituição de catalisadores automotivos com componentes homologados e adequados aos parâmetros originais do veículo, garantindo conformidade com os níveis de emissão e funcionamento correto da sonda lambda."
  },
  {
    question: "Quanto tempo leva a troca de um escapamento?",
    answer: "O tempo varia conforme o componente e o modelo do veículo. Trocas de silenciosos intermediários ou traseiros geralmente são realizadas no mesmo dia após a avaliação prévia. Projetos ou substituições mais complexas têm prazo informado no diagnóstico."
  },
  {
    question: "Atendem veículos nacionais e importados?",
    answer: "Sim. Atendemos veículos leves e utilitários nacionais e importados de diversas marcas, respeitando os padrões de fixação e exaustão especificados pelas montadoras."
  },
  {
    question: "Atendem clientes do CIC e do Neo Ville?",
    answer: "Sim. Pela localização estratégica da oficina na Rua Pedro Gusso, atendemos diariamente condutores da Cidade Industrial de Curitiba (CIC), conjunto Neo Ville e bairros vizinhos como Capão Raso, Pinheirinho e Fazendinha."
  },
  {
    question: "É necessário agendar?",
    answer: "Recomendamos o agendamento prévio pelo WhatsApp ou telefone para organizar a entrada do veículo no elevador e agilizar o diagnóstico técnico, mas também recebemos motoristas com situações emergenciais de ruído ou escapamento solto."
  },
  {
    question: "Como solicitar orçamento?",
    answer: "O orçamento técnico é definido após a inspeção visual e física no elevador, pois é fundamental verificar se o caso exige apenas solda, troca de abraçadeiras, substituição de flexível ou troca de silencioso/catalisador. Você pode entrar em contato pelo WhatsApp (41) 99843-4800 ou telefone (41) 3268-3473 para agendar sua avaliação."
  }
];

const SERVICES_LIST = [
  {
    title: "Diagnóstico do sistema de escapamento",
    description: "Inspeção visual e teste em elevador para localizar pontos de corrosão, trincas, vazamentos e rompimento de suportes."
  },
  {
    title: "Troca de silencioso",
    description: "Substituição de silenciosos intermediários e traseiros danificados para restabelecer a atenuação acústica e o fluxo de exaustão."
  },
  {
    title: "Troca de catalisador",
    description: "Instalação de catalisadores automotivos homologados que cumprem as normas ambientais e preservam o consumo de combustível."
  },
  {
    title: "Reparo ou substituição de tubulações",
    description: "Correção de tubos de exaustão perfurados, amassados ou rompidos, restabelecendo a continuidade da linha de escape."
  },
  {
    title: "Flexíveis",
    description: "Substituição da malha flexível de escapamento para absorver as vibrações do motor e evitar trincas no coletor."
  },
  {
    title: "Ponteiras",
    description: "Instalação e alinhamento de ponteiras de exaustão com acabamento adequado ao para-choque do veículo."
  },
  {
    title: "Escapamentos esportivos",
    description: "Configuração de abafadores e ponteiras dimensionadas para condutores que buscam sonoridade personalizada dentro dos limites legais."
  },
  {
    title: "Avaliação de ruídos e vibrações",
    description: "Identificação da causa raiz de ressonâncias, batidas metálicas e zumbidos transmitidos para o assoalho do automóvel."
  },
  {
    title: "Inspeção de suportes e fixações",
    description: "Checagem de coxins de borracha, abraçadeiras e ganchos de fixação que evitam a queda ou deslocamento do conjunto."
  },
  {
    title: "Adequação e manutenção do sistema de exaustão",
    description: "Revisão geral para manter a estanqueidade dos gases, protegendo o habitáculo e o meio ambiente."
  }
];

const SYMPTOMS_LIST = [
  {
    title: "Barulho metálico",
    description: "Ruídos de peças soltas ou batidas de chapa sob o assoalho ao acelerar ou passar em desníveis."
  },
  {
    title: "Vibração no assoalho",
    description: "Sensação de tremor no piso do veículo causada pelo contato direto do tubo de escape com a carroceria."
  },
  {
    title: "Cheiro de gases",
    description: "Odor forte de combustão perceptível próximo às janelas ou entrando na cabine, sinalizando vazamento grave."
  },
  {
    title: "Perda de desempenho",
    description: "Dificuldade do motor em responder em retomadas, que pode ser ocasionada por catalisador desintegrado ou obstruído."
  },
  {
    title: "Aumento de ruído",
    description: "Som grave e estrondoso ao acelerar, típico de silencioso intermediário ou traseiro furado por corrosão."
  },
  {
    title: "Luz de injeção acesa",
    description: "Alerta no painel decorrente de falha na eficiência catalítica monitorada pelas sondas lambda antes e pós-catalisador."
  },
  {
    title: "Escapamento solto ou furado",
    description: "Canal de exaustão arrastando no chão, desalinhado ou com orifícios visíveis por ação de ferrugem ou impacto."
  }
];

const REGIONS_LIST = [
  "Novo Mundo",
  "Cidade Industrial de Curitiba (CIC)",
  "Neo Ville",
  "Capão Raso",
  "Pinheirinho",
  "Portão",
  "Fazendinha",
  "Xaxim",
  "Hauer",
  "Água Verde",
  "Boqueirão",
  "Sítio Cercado",
  "Demais regiões de Curitiba conforme deslocamento real"
];

const EscapamentosCuritiba: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageTitle = "Escapamentos em Curitiba | Troca e Conserto no Novo Mundo";
  const pageDescription = "A BS CAR CENTER realiza diagnóstico, troca e manutenção de escapamentos em Curitiba, no bairro Novo Mundo, com fácil acesso ao CIC e regiões próximas.";
  const canonicalUrl = "https://www.bsescapamentos.com.br/escapamentos-curitiba";
  const ogImage = "https://www.bsescapamentos.com.br/og-image.png";

  // Structured Data (JSON-LD)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.bsescapamentos.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Escapamentos em Curitiba",
        "item": canonicalUrl
      }
    ]
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://www.bsescapamentos.com.br/#business",
    "name": "BS CAR CENTER",
    "alternateName": "BS Escapamentos",
    "image": ogImage,
    "url": canonicalUrl,
    "telephone": "+55 41 3268-3473",
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.streetAddress,
      "addressLocality": COMPANY_INFO.city,
      "addressRegion": COMPANY_INFO.state,
      "postalCode": COMPANY_INFO.zip,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.5098,
      "longitude": -49.2935
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Dinheiro", "Cartão de Crédito", "Cartão de Débito", "Pix"],
    "currenciesAccepted": "BRL",
    "sameAs": [
      COMPANY_INFO.facebook,
      COMPANY_INFO.instagram,
      COMPANY_INFO.mapsLink
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Serviços de Escapamentos em Curitiba",
    "serviceType": "Escapamentos automotivos",
    "description": "Diagnóstico, troca de silenciosos, substituição de catalisadores homologados, reparo de tubulações, flexíveis e escapamentos esportivos em Curitiba.",
    "provider": {
      "@id": "https://www.bsescapamentos.com.br/#business"
    },
    "areaServed": [
      { "@type": "City", "name": "Curitiba" },
      { "@type": "Neighborhood", "name": "Novo Mundo" },
      { "@type": "Neighborhood", "name": "Cidade Industrial de Curitiba" },
      { "@type": "Neighborhood", "name": "Neo Ville" },
      { "@type": "Neighborhood", "name": "Capão Raso" },
      { "@type": "Neighborhood", "name": "Pinheirinho" },
      { "@type": "Neighborhood", "name": "Portão" }
    ],
    "url": canonicalUrl
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="escapamentos em curitiba, escapamento curitiba, loja de escapamentos em curitiba, troca de escapamento curitiba, conserto de escapamento curitiba, escapamento automotivo curitiba, catalisador curitiba, silencioso automotivo curitiba, escapamento esportivo curitiba, oficina de escapamentos no novo mundo, escapamentos no cic" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="BS CAR CENTER" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Geolocation */}
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Curitiba, Novo Mundo" />
        <meta name="geo.position" content="-25.5098;-49.2935" />
        <meta name="ICBM" content="-25.5098, -49.2935" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 pt-24 pb-4">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav aria-label="Navegação Estruturada" className="text-xs text-gray-500 flex items-center gap-2">
            <Link to="/" className="hover:text-primary-blue transition-colors">Início</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold" aria-current="page">Escapamentos em Curitiba</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <header className="bg-primary-dark text-white py-12 md:py-16 border-b-4 border-primary-yellow relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary-yellow mb-4 border border-white/10">
            <MapPin size={14} className="text-primary-yellow shrink-0" />
            <span>NOVO MUNDO • CURITIBA / PR</span>
          </div>

          {/* Exatamente um H1 na página */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">
            Escapamentos em Curitiba
          </h1>

          {/* Introdução clara conforme especificação */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8">
            A BS CAR CENTER, anteriormente conhecida pela especialidade em BS Escapamentos, realiza diagnóstico, manutenção, troca e instalação de sistemas de escapamento em Curitiba, no bairro Novo Mundo, com acesso ao CIC, Neo Ville, Capão Raso, Pinheirinho, Portão e bairros próximos.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pela página de escapamentos em Curitiba da BS CAR CENTER e gostaria de solicitar um agendamento para avaliação.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-green hover:bg-green-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg flex items-center gap-2 text-sm sm:text-base active:scale-95"
            >
              <MessageCircle size={18} />
              <span>Agendar Avaliação no WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm sm:text-base active:scale-95"
            >
              <Phone size={18} className="text-primary-yellow" />
              <span>Ligar: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Bloco Resumido de Informações Rápidas (Texto HTML Real para SEO / GEO / AIO) */}
      <section className="bg-primary-blue/5 border-b border-primary-blue/15 py-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-primary-blue">
              <Info size={20} className="shrink-0" />
              <h2 className="text-base sm:text-lg font-heading font-bold text-gray-900">
                Informações Rápidas da Oficina
              </h2>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-700">
              <div className="border-l-2 border-primary-blue pl-3">
                <dt className="text-gray-500 font-semibold uppercase text-[11px]">Empresa</dt>
                <dd className="font-bold text-gray-900 mt-0.5">BS CAR CENTER</dd>
              </div>
              <div className="border-l-2 border-primary-yellow pl-3">
                <dt className="text-gray-500 font-semibold uppercase text-[11px]">Especialidade</dt>
                <dd className="font-medium text-gray-900 mt-0.5">Escapamentos e manutenção automotiva</dd>
              </div>
              <div className="border-l-2 border-primary-green pl-3">
                <dt className="text-gray-500 font-semibold uppercase text-[11px]">Localização</dt>
                <dd className="font-medium text-gray-900 mt-0.5">Novo Mundo, Curitiba/PR</dd>
              </div>
              <div className="border-l-2 border-primary-blue pl-3">
                <dt className="text-gray-500 font-semibold uppercase text-[11px]">Atendimento</dt>
                <dd className="font-medium text-gray-900 mt-0.5">Curitiba, CIC, Neo Ville e regiões próximas</dd>
              </div>
              <div className="border-l-2 border-primary-yellow pl-3">
                <dt className="text-gray-500 font-semibold uppercase text-[11px]">WhatsApp</dt>
                <dd className="font-bold text-primary-dark mt-0.5">{COMPANY_INFO.whatsappDisplay}</dd>
              </div>
              <div className="border-l-2 border-primary-green pl-3">
                <dt className="text-gray-500 font-semibold uppercase text-[11px]">Endereço</dt>
                <dd className="font-medium text-gray-900 mt-0.5">{COMPANY_INFO.address}</dd>
              </div>
              <div className="sm:col-span-2 lg:col-span-3 border-l-2 border-gray-300 pl-3">
                <dt className="text-gray-500 font-semibold uppercase text-[11px]">Horário</dt>
                <dd className="font-medium text-gray-900 mt-0.5">Segunda a Sexta das 08h às 18h | Sábado das 08h às 12h</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 max-w-5xl py-12 space-y-16">
        
        {/* Seção 1: Escapamentos em Curitiba no Novo Mundo */}
        <section aria-labelledby="section-localizacao" className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-primary-blue">
            <MapPin size={26} className="text-primary-blue shrink-0" />
            <h2 id="section-localizacao" className="text-2xl sm:text-3xl font-heading font-black text-gray-900">
              1. Escapamentos em Curitiba no Novo Mundo
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              A <strong>BS CAR CENTER</strong> está estrategicamente situada na <strong>Rua Pedro Gusso, 2340</strong>, uma das principais vias arteriais do bairro Novo Mundo em Curitiba. O local conta com acesso rápido para condutores vindos da Cidade Industrial de Curitiba (CIC), conjunto residencial Neo Ville, Capão Raso, Pinheirinho, Portão e bairros adjacentes.
            </p>
            <p>
              Com tradição consolidada ao longo de anos sob a denominação histórica <strong>BS Escapamentos</strong>, a oficina mantém estrutura completa de elevadores automotivos, ferramental especializado para curvatura, corte, solda de tubos e bancada de inspeção. O perfil do nosso atendimento prioriza a clareza técnica: o veículo é posicionado no elevador e examinado na presença do condutor sempre que possível, identificando com exatidão a peça com falha.
            </p>
            <p>
              Além de cuidar de sistemas de exaustão originais e esportivos, a oficina realiza serviços complementares de <Link to="/manutencao-automotiva-curitiba" className="text-primary-blue font-semibold hover:underline">manutenção automotiva completa</Link>, incluindo <Link to="/servicos/freios" className="text-primary-blue font-semibold hover:underline">revisão de freios</Link> e <Link to="/servicos/suspensao" className="text-primary-blue font-semibold hover:underline">reparos na suspensão</Link>, garantindo que o automóvel saia seguro em todos os seus componentes mecânicos.
            </p>
          </div>
        </section>

        {/* Seção 2: Serviços de escapamento */}
        <section aria-labelledby="section-servicos" className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-primary-blue">
            <Wrench size={26} className="text-primary-blue shrink-0" />
            <h2 id="section-servicos" className="text-2xl sm:text-3xl font-heading font-black text-gray-900">
              2. Serviços de escapamento
            </h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed text-sm sm:text-base">
            Apresentamos a seguir exclusivamente os serviços de exaustão efetivamente prestados em nossa oficina, executados com peças que atendem aos padrões técnicos e de segurança veicular:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES_LIST.map((srv, idx) => (
              <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-primary-blue/30 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary-green shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                      {srv.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-gray-500">
              Conheça também nossa grade de <Link to="/servicos" className="text-primary-blue font-bold hover:underline">todos os serviços automotivos</Link> prestados na unidade.
            </span>
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Gostaria de consultar a disponibilidade para troca ou conserto de escapamento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary-green hover:underline"
            >
              <MessageCircle size={16} />
              <span>Consultar serviço no WhatsApp</span>
            </a>
          </div>
        </section>

        {/* Seção 3: Quando procurar uma oficina de escapamentos */}
        <section aria-labelledby="section-sintomas" className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-primary-yellow">
            <AlertTriangle size={26} className="text-amber-500 shrink-0" />
            <h2 id="section-sintomas" className="text-2xl sm:text-3xl font-heading font-black text-gray-900">
              3. Quando procurar uma oficina de escapamentos
            </h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed text-sm sm:text-base">
            O escapamento opera sob calor extremo, variações térmicas contínuas e agressões químicas dos gases de combustão e da umidade. Procure avaliação especializada caso perceba qualquer um dos sinais abaixo:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SYMPTOMS_LIST.map((sym, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
                <span className="inline-block text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded mb-2">
                  Sinal {idx + 1}
                </span>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{sym.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{sym.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção 4: Diagnóstico antes do orçamento */}
        <section aria-labelledby="section-diagnostico" className="bg-blue-50/60 rounded-3xl p-6 sm:p-8 md:p-10 border border-blue-200/70 shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-primary-blue">
            <ShieldCheck size={26} className="text-primary-blue shrink-0" />
            <h2 id="section-diagnostico" className="text-2xl sm:text-3xl font-heading font-black text-gray-900">
              4. Diagnóstico antes do orçamento
            </h2>
          </div>
          <div className="space-y-4 text-gray-800 leading-relaxed text-sm sm:text-base">
            <p>
              Na BS CAR CENTER, <strong>todo orçamento técnico é precedido pela avaliação presencial do automóvel</strong>. O sistema de escape é composto por múltiplos segmentos interligados (coletor, flexível, catalisador, silencioso intermediário, silencioso traseiro, tubulações intermediárias, anéis de vedação e suportes de fixação).
            </p>
            <p>
              Muitas vezes, um barulho metálico que aparenta exigir a troca de todo o escapamento decorre unicamente de uma abraçadeira frouxa, de uma borracha de sustentação rompida ou de uma chapa de proteção térmica vibrando. Por outro lado, furos causados por condensação interna de água e ácidos exigem a substituição pontual da peça correta.
            </p>
            <p className="font-semibold text-gray-900 bg-white/70 p-4 rounded-xl border border-blue-100">
              Por respeito ao condutor e para evitar trocas desnecessárias de peças, não informamos valores definitivos sem inspeção física prévia. A avaliação no elevador confirma se é viável reparar, soldar ou se há necessidade de substituição por um componente novo.
            </p>
          </div>
        </section>

        {/* Seção 5: Regiões atendidas */}
        <section aria-labelledby="section-regioes" className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-primary-blue">
            <Navigation size={26} className="text-primary-blue shrink-0" />
            <h2 id="section-regioes" className="text-2xl sm:text-3xl font-heading font-black text-gray-900">
              5. Regiões atendidas
            </h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
            Pela proximidade geográfica de nossa oficina na Rua Pedro Gusso com vias de ligação rápida como a Linha Verde, Avenida República Argentina, Rua João Bettega e Contorno Sul, recebemos condutores das seguintes regiões de Curitiba:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs sm:text-sm">
            {REGIONS_LIST.map((region, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-blue shrink-0" />
                <span className="font-medium">{region}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-gray-500">
            Consulte mais detalhes sobre a cobertura de bairros em nossa página de <Link to="/areas" className="text-primary-blue font-bold hover:underline">regiões e bairros atendidos em Curitiba</Link>.
          </div>
        </section>

        {/* Seção 6: Informações da oficina */}
        <section aria-labelledby="section-contato" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-800">
          <div className="flex items-center gap-3 mb-6 text-primary-yellow">
            <MapPin size={26} className="text-primary-yellow shrink-0" />
            <h2 id="section-contato" className="text-2xl sm:text-3xl font-heading font-black text-white">
              6. Informações da oficina
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-sm sm:text-base text-gray-300">
              <div>
                <span className="block text-xs uppercase font-bold text-primary-yellow mb-1">Endereço Oficial</span>
                <p className="text-white font-medium">{COMPANY_INFO.address}</p>
                <p className="text-xs text-gray-400 mt-0.5">Novo Mundo, Curitiba/PR - CEP: {COMPANY_INFO.zip}</p>
              </div>

              <div>
                <span className="block text-xs uppercase font-bold text-primary-yellow mb-1">Telefone Fixo</span>
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-white hover:text-primary-yellow transition-colors font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase font-bold text-primary-yellow mb-1">WhatsApp de Atendimento</span>
                <a 
                  href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pelo site da BS CAR CENTER e gostaria de falar sobre escapamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-green hover:underline font-bold text-base"
                >
                  {COMPANY_INFO.whatsappDisplay}
                </a>
              </div>

              <div>
                <span className="block text-xs uppercase font-bold text-primary-yellow mb-1">Horário de Atendimento</span>
                <p className="text-white">Segunda a Sexta: 08:00 às 18:00</p>
                <p className="text-white">Sábado: 08:00 às 12:00</p>
                <p className="text-xs text-gray-400">Domingos e feriados: Fechado</p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={COMPANY_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-blue hover:bg-blue-800 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-colors"
                >
                  <Navigation size={14} />
                  <span>Traçar Rota no Google Maps</span>
                </a>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-colors border border-white/20"
                >
                  <span>Página de Contato</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Mapa Incorporado */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.8797967272847!2d-49.29568902375841!3d-25.47570497753308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce32d2b5f5471%3A0x6b8f72200259f972!2sR.%20Pedro%20Gusso%2C%202340%20-%20Novo%20Mundo%2C%20Curitiba%20-%20PR%2C%2081900-080!5e0!3m2!1spt-BR!2sbr!4v1683123456789!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Localização BS CAR CENTER - Rua Pedro Gusso, 2340"
              />
            </div>
          </div>
        </section>

        {/* Seção 7: Perguntas frequentes */}
        <section aria-labelledby="section-faq" className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 text-primary-blue">
            <HelpCircle size={26} className="text-primary-blue shrink-0" />
            <h2 id="section-faq" className="text-2xl sm:text-3xl font-heading font-black text-gray-900">
              7. Perguntas frequentes
            </h2>
          </div>
          <p className="text-gray-700 mb-8 text-sm sm:text-base leading-relaxed">
            Esclareça as principais dúvidas sobre diagnóstico, manutenção, troca de escapamento e catalisadores em nossa oficina em Curitiba:
          </p>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-gray-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-primary-blue transition-colors text-sm sm:text-base"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary-blue' : ''}`}
                    />
                  </button>
                  <div 
                    className={`px-4 sm:px-5 pb-5 text-gray-600 text-xs sm:text-sm leading-relaxed ${isOpen ? 'block' : 'hidden'}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-primary-dark via-blue-900 to-primary-dark text-white rounded-3xl p-8 sm:p-10 text-center border-t-4 border-primary-yellow shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-black mb-3 text-white">
            Precisa revisar o escapamento do seu carro em Curitiba?
          </h2>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Traga seu veículo para uma avaliação no Novo Mundo. Identificamos com precisão ruídos, vazamentos e trocas de catalisadores e silenciosos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Gostaria de agendar um horário para avaliar o escapamento do meu veículo na BS CAR CENTER.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-green hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg flex items-center gap-2 text-sm sm:text-base active:scale-95"
            >
              <MessageCircle size={18} />
              <span>Chamar no WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="bg-primary-yellow hover:bg-yellow-400 text-primary-dark font-black py-3.5 px-8 rounded-xl transition-all shadow-lg flex items-center gap-2 text-sm sm:text-base active:scale-95"
            >
              <Phone size={18} />
              <span>Ligar Agora</span>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
};

export default EscapamentosCuritiba;
