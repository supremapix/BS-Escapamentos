import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('[prerender] dist/index.html não encontrado. Execute vite build primeiro.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

// Dados da Landing Page SEO /escapamentos-curitiba
const pageData = {
  url: 'https://www.bsescapamentos.com.br/escapamentos-curitiba',
  title: 'Escapamentos em Curitiba | Troca e Conserto no Novo Mundo',
  description: 'A BS CAR CENTER realiza diagnóstico, troca e manutenção de escapamentos em Curitiba, no bairro Novo Mundo, com fácil acesso ao CIC e regiões próximas.',
  image: 'https://www.bsescapamentos.com.br/og-image.png',
  phone: '(41) 3268-3473',
  phoneRaw: '4132683473',
  whatsapp: '5541998434800',
  whatsappDisplay: '(41) 99843-4800',
  address: 'Rua Pedro Gusso, 2340',
  city: 'Curitiba',
  state: 'PR',
  zip: '81310-900',
  hours: 'Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 12:00'
};

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
      "item": pageData.url
    }
  ]
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://www.bsescapamentos.com.br/#business",
  "name": "BS CAR CENTER",
  "alternateName": "BS Escapamentos",
  "image": pageData.image,
  "url": pageData.url,
  "telephone": "+55 41 3268-3473",
  "email": "contato@bsescapamentos.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": pageData.address,
    "addressLocality": pageData.city,
    "addressRegion": pageData.state,
    "postalCode": pageData.zip,
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
    "https://www.facebook.com/BSescapamentosautocenter/",
    "https://www.instagram.com/bscarcenter/",
    "https://maps.app.goo.gl/uX73xQ8ZqLzW7YwM7"
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
  "url": pageData.url
};

const faqItems = [
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

const schemasHtml = `
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(businessSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(serviceSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
`;

// HTML real da página para renderização sem JavaScript
const prerenderedBody = `
<div class="bg-gray-50 min-h-screen">
  <div class="bg-white border-b border-gray-200 pt-24 pb-4">
    <div class="container mx-auto px-4 max-w-5xl">
      <nav aria-label="Navegação Estruturada" class="text-xs text-gray-500 flex items-center gap-2">
        <a href="/" class="hover:text-primary-blue transition-colors">Início</a>
        <span>/</span>
        <span class="text-gray-900 font-semibold" aria-current="page">Escapamentos em Curitiba</span>
      </nav>
    </div>
  </div>

  <header class="bg-primary-dark text-white py-12 md:py-16 border-b-4 border-primary-yellow relative overflow-hidden">
    <div class="container mx-auto px-4 max-w-5xl relative z-10">
      <div class="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary-yellow mb-4 border border-white/10">
        <span>NOVO MUNDO • CURITIBA / PR</span>
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">Escapamentos em Curitiba</h1>
      <p class="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8">
        A BS CAR CENTER, anteriormente conhecida pela especialidade em BS Escapamentos, realiza diagnóstico, manutenção, troca e instalação de sistemas de escapamento em Curitiba, no bairro Novo Mundo, com acesso ao CIC, Neo Ville, Capão Raso, Pinheirinho, Portão e bairros próximos.
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="https://api.whatsapp.com/send?phone=${pageData.whatsapp}&text=Olá! Vim pela página de escapamentos em Curitiba da BS CAR CENTER e gostaria de solicitar um agendamento para avaliação." target="_blank" rel="noopener noreferrer" class="bg-primary-green hover:bg-green-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg flex items-center gap-2 text-sm sm:text-base">
          <span>Agendar Avaliação no WhatsApp</span>
        </a>
        <a href="tel:${pageData.phoneRaw}" class="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm sm:text-base">
          <span>Ligar: ${pageData.phone}</span>
        </a>
      </div>
    </div>
  </header>

  <section class="bg-primary-blue/5 border-b border-primary-blue/15 py-6">
    <div class="container mx-auto px-4 max-w-5xl">
      <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h2 class="text-base sm:text-lg font-heading font-bold text-gray-900 mb-4">Informações Rápidas da Oficina</h2>
        <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-gray-700">
          <div class="border-l-2 border-primary-blue pl-3">
            <dt class="text-gray-500 font-semibold uppercase text-[11px]">Empresa</dt>
            <dd class="font-bold text-gray-900 mt-0.5">BS CAR CENTER</dd>
          </div>
          <div class="border-l-2 border-primary-yellow pl-3">
            <dt class="text-gray-500 font-semibold uppercase text-[11px]">Especialidade</dt>
            <dd class="font-medium text-gray-900 mt-0.5">Escapamentos e manutenção automotiva</dd>
          </div>
          <div class="border-l-2 border-primary-green pl-3">
            <dt class="text-gray-500 font-semibold uppercase text-[11px]">Localização</dt>
            <dd class="font-medium text-gray-900 mt-0.5">Novo Mundo, Curitiba/PR</dd>
          </div>
          <div class="border-l-2 border-primary-blue pl-3">
            <dt class="text-gray-500 font-semibold uppercase text-[11px]">Atendimento</dt>
            <dd class="font-medium text-gray-900 mt-0.5">Curitiba, CIC, Neo Ville e regiões próximas</dd>
          </div>
          <div class="border-l-2 border-primary-yellow pl-3">
            <dt class="text-gray-500 font-semibold uppercase text-[11px]">WhatsApp</dt>
            <dd class="font-bold text-primary-dark mt-0.5">${pageData.whatsappDisplay}</dd>
          </div>
          <div class="border-l-2 border-primary-green pl-3">
            <dt class="text-gray-500 font-semibold uppercase text-[11px]">Endereço</dt>
            <dd class="font-medium text-gray-900 mt-0.5">${pageData.address} - Novo Mundo, Curitiba/PR</dd>
          </div>
          <div class="sm:col-span-2 lg:col-span-3 border-l-2 border-gray-300 pl-3">
            <dt class="text-gray-500 font-semibold uppercase text-[11px]">Horário</dt>
            <dd class="font-medium text-gray-900 mt-0.5">${pageData.hours}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <main class="container mx-auto px-4 max-w-5xl py-12 space-y-16">
    <section class="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
      <h2 class="text-2xl sm:text-3xl font-heading font-black text-gray-900 mb-6">1. Escapamentos em Curitiba no Novo Mundo</h2>
      <div class="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
        <p>A <strong>BS CAR CENTER</strong> está estrategicamente situada na <strong>Rua Pedro Gusso, 2340</strong>, uma das principais vias arteriais do bairro Novo Mundo em Curitiba. O local conta com acesso rápido para condutores vindos da Cidade Industrial de Curitiba (CIC), conjunto residencial Neo Ville, Capão Raso, Pinheirinho, Portão e bairros adjacentes.</p>
        <p>Com tradição consolidada ao longo de anos sob a denominação histórica <strong>BS Escapamentos</strong>, a oficina mantém estrutura completa de elevadores automotivos, ferramental especializado para curvatura, corte, solda de tubos e bancada de inspeção. O perfil do nosso atendimento prioriza a clareza técnica: o veículo é posicionado no elevador e examinado na presença do condutor sempre que possível, identificando com exatidão a peça com falha.</p>
        <p>Além de cuidar de sistemas de exaustão originais e esportivos, a oficina realiza serviços complementares de <a href="/manutencao-automotiva-curitiba" class="text-primary-blue font-semibold hover:underline">manutenção automotiva completa</a>, incluindo <a href="/servicos/freios" class="text-primary-blue font-semibold hover:underline">revisão de freios</a> e <a href="/servicos/suspensao" class="text-primary-blue font-semibold hover:underline">reparos na suspensão</a>, garantindo que o automóvel saia seguro em todos os seus componentes mecânicos.</p>
      </div>
    </section>

    <section class="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
      <h2 class="text-2xl sm:text-3xl font-heading font-black text-gray-900 mb-6">2. Serviços de escapamento</h2>
      <p class="text-gray-700 mb-8 leading-relaxed text-sm sm:text-base">Apresentamos a seguir exclusivamente os serviços de exaustão efetivamente prestados em nossa oficina, executados com peças que atendem aos padrões técnicos e de segurança veicular:</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Diagnóstico do sistema de escapamento</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Inspeção visual e teste em elevador para localizar pontos de corrosão, trincas, vazamentos e rompimento de suportes.</p>
        </div>
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Troca de silencioso</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Substituição de silenciosos intermediários e traseiros danificados para restabelecer a atenuação acústica e o fluxo de exaustão.</p>
        </div>
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Troca de catalisador</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Instalação de catalisadores automotivos homologados que cumprem as normas ambientais e preservam o consumo de combustível.</p>
        </div>
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Reparo ou substituição de tubulações</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Correção de tubos de exaustão perfurados, amassados ou rompidos, restabelecendo a continuidade da linha de escape.</p>
        </div>
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Flexíveis</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Substituição da malha flexível de escapamento para absorver as vibrações do motor e evitar trincas no coletor.</p>
        </div>
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Ponteiras</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Instalação e alinhamento de ponteiras de exaustão com acabamento adequado ao para-choque do veículo.</p>
        </div>
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Escapamentos esportivos</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Configuração de abafadores e ponteiras dimensionadas para condutores que buscam sonoridade personalizada dentro dos limites legais.</p>
        </div>
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Avaliação de ruídos e vibrações</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Identificação da causa raiz de ressonâncias, batidas metálicas e zumbidos transmitidos para o assoalho do automóvel.</p>
        </div>
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Inspeção de suportes e fixações</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Checagem de coxins de borracha, abraçadeiras e ganchos de fixação que evitam a queda ou deslocamento do conjunto.</p>
        </div>
        <div class="bg-gray-50 p-5 rounded-2xl border border-gray-100">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-1">Adequação e manutenção do sistema de exaustão</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">Revisão geral para manter a estanqueidade dos gases, protegendo o habitáculo e o meio ambiente.</p>
        </div>
      </div>
      <div class="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
        <span class="text-xs text-gray-500">Conheça também nossa grade de <a href="/servicos" class="text-primary-blue font-bold hover:underline">todos os serviços automotivos</a> prestados na unidade.</span>
        <a href="https://api.whatsapp.com/send?phone=${pageData.whatsapp}&text=Olá! Gostaria de consultar a disponibilidade para troca ou conserto de escapamento." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary-green hover:underline">
          <span>Consultar serviço no WhatsApp</span>
        </a>
      </div>
    </section>

    <section class="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
      <h2 class="text-2xl sm:text-3xl font-heading font-black text-gray-900 mb-6">3. Quando procurar uma oficina de escapamentos</h2>
      <p class="text-gray-700 mb-8 leading-relaxed text-sm sm:text-base">O escapamento opera sob calor extremo, variações térmicas contínuas e agressões químicas dos gases de combustão e da umidade. Procure avaliação especializada caso perceba qualquer um dos sinais abaixo:</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
          <h3 class="font-bold text-gray-900 text-sm mb-1.5">Barulho metálico</h3>
          <p class="text-gray-600 text-xs leading-relaxed">Ruídos de peças soltas ou batidas de chapa sob o assoalho ao acelerar ou passar em desníveis.</p>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
          <h3 class="font-bold text-gray-900 text-sm mb-1.5">Vibração no assoalho</h3>
          <p class="text-gray-600 text-xs leading-relaxed">Sensação de tremor no piso do veículo causada pelo contato direto do tubo de escape com a carroceria.</p>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
          <h3 class="font-bold text-gray-900 text-sm mb-1.5">Cheiro de gases</h3>
          <p class="text-gray-600 text-xs leading-relaxed">Odor forte de combustão perceptível próximo às janelas ou entrando na cabine, sinalizando vazamento grave.</p>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
          <h3 class="font-bold text-gray-900 text-sm mb-1.5">Perda de desempenho</h3>
          <p class="text-gray-600 text-xs leading-relaxed">Dificuldade do motor em responder em retomadas, que pode ser ocasionada por catalisador desintegrado ou obstruído.</p>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
          <h3 class="font-bold text-gray-900 text-sm mb-1.5">Aumento de ruído</h3>
          <p class="text-gray-600 text-xs leading-relaxed">Som grave e estrondoso ao acelerar, típico de silencioso intermediário ou traseiro furado por corrosão.</p>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
          <h3 class="font-bold text-gray-900 text-sm mb-1.5">Luz de injeção acesa</h3>
          <p class="text-gray-600 text-xs leading-relaxed">Alerta no painel decorrente de falha na eficiência catalítica monitorada pelas sondas lambda antes e pós-catalisador.</p>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60">
          <h3 class="font-bold text-gray-900 text-sm mb-1.5">Escapamento solto ou furado</h3>
          <p class="text-gray-600 text-xs leading-relaxed">Canal de exaustão arrastando no chão, desalinhado ou com orifícios visíveis por ação de ferrugem ou impacto.</p>
        </div>
      </div>
    </section>

    <section class="bg-blue-50/60 rounded-3xl p-6 sm:p-8 md:p-10 border border-blue-200/70 shadow-sm">
      <h2 class="text-2xl sm:text-3xl font-heading font-black text-gray-900 mb-6">4. Diagnóstico antes do orçamento</h2>
      <div class="space-y-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        <p>Na BS CAR CENTER, <strong>todo orçamento técnico é precedido pela avaliação presencial do automóvel</strong>. O sistema de escape é composto por múltiplos segmentos interligados (coletor, flexível, catalisador, silencioso intermediário, silencioso traseiro, tubulações intermediárias, anéis de vedação e suportes de fixação).</p>
        <p>Muitas vezes, um barulho metálico que aparenta exigir a troca de todo o escapamento decorre unicamente de uma abraçadeira frouxa, de uma borracha de sustentação rompida ou de uma chapa de proteção térmica vibrando. Por outro lado, furos causados por condensação interna de água e ácidos exigem a substituição pontual da peça correta.</p>
        <p class="font-semibold text-gray-900 bg-white/70 p-4 rounded-xl border border-blue-100">Por respeito ao condutor e para evitar trocas desnecessárias de peças, não informamos valores definitivos sem inspeção física prévia. A avaliação no elevador confirma se é viável reparar, soldar ou se há necessidade de substituição por um componente novo.</p>
      </div>
    </section>

    <section class="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
      <h2 class="text-2xl sm:text-3xl font-heading font-black text-gray-900 mb-6">5. Regiões atendidas</h2>
      <p class="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">Pela proximidade geográfica de nossa oficina na Rua Pedro Gusso com vias de ligação rápida como a Linha Verde, Avenida República Argentina, Rua João Bettega e Contorno Sul, recebemos condutores das seguintes regiões de Curitiba:</p>
      <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs sm:text-sm">
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Novo Mundo</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Cidade Industrial de Curitiba (CIC)</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Neo Ville</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Capão Raso</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Pinheirinho</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Portão</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Fazendinha</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Xaxim</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Hauer</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Água Verde</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Boqueirão</li>
        <li class="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Sítio Cercado</li>
        <li class="sm:col-span-2 md:col-span-4 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 font-medium">Demais regiões de Curitiba conforme atendimento real</li>
      </ul>
      <div class="mt-6 text-xs text-gray-500">
        Consulte mais detalhes sobre a cobertura de bairros em nossa página de <a href="/areas" class="text-primary-blue font-bold hover:underline">regiões e bairros atendidos em Curitiba</a>.
      </div>
    </section>

    <section class="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-800">
      <h2 class="text-2xl sm:text-3xl font-heading font-black text-white mb-6">6. Informações da oficina</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div class="space-y-4 text-sm sm:text-base text-gray-300">
          <div>
            <span class="block text-xs uppercase font-bold text-primary-yellow mb-1">Endereço Oficial</span>
            <p class="text-white font-medium">${pageData.address}</p>
            <p class="text-xs text-gray-400 mt-0.5">Novo Mundo, Curitiba/PR - CEP: ${pageData.zip}</p>
          </div>
          <div>
            <span class="block text-xs uppercase font-bold text-primary-yellow mb-1">Telefone Fixo</span>
            <a href="tel:${pageData.phoneRaw}" class="text-white hover:text-primary-yellow transition-colors font-bold">${pageData.phone}</a>
          </div>
          <div>
            <span class="block text-xs uppercase font-bold text-primary-yellow mb-1">WhatsApp de Atendimento</span>
            <a href="https://api.whatsapp.com/send?phone=${pageData.whatsapp}&text=Olá! Vim pelo site da BS CAR CENTER e gostaria de falar sobre escapamento." target="_blank" rel="noopener noreferrer" class="text-primary-green hover:underline font-bold text-base">${pageData.whatsappDisplay}</a>
          </div>
          <div>
            <span class="block text-xs uppercase font-bold text-primary-yellow mb-1">Horário de Atendimento</span>
            <p class="text-white">${pageData.hours}</p>
          </div>
          <div class="pt-2 flex flex-wrap gap-3">
            <a href="https://maps.app.goo.gl/uX73xQ8ZqLzW7YwM7" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-primary-blue hover:bg-blue-800 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-colors">
              <span>Traçar Rota no Google Maps</span>
            </a>
            <a href="/contato" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-colors border border-white/20">
              <span>Página de Contato</span>
            </a>
          </div>
        </div>
        <div class="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.8797967272847!2d-49.29568902375841!3d-25.47570497753308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce32d2b5f5471%3A0x6b8f72200259f972!2sR.%20Pedro%20Gusso%2C%202340%20-%20Novo%20Mundo%2C%20Curitiba%20-%20PR%2C%2081900-080!5e0!3m2!1spt-BR!2sbr!4v1683123456789!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border: 0;" allowfullscreen="" loading="lazy" title="Localização BS CAR CENTER - Rua Pedro Gusso, 2340"></iframe>
        </div>
      </div>
    </section>

    <section class="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
      <h2 class="text-2xl sm:text-3xl font-heading font-black text-gray-900 mb-6">7. Perguntas frequentes</h2>
      <p class="text-gray-700 mb-8 text-sm sm:text-base leading-relaxed">Esclareça as principais dúvidas sobre diagnóstico, manutenção, troca de escapamento e catalisadores em nossa oficina em Curitiba:</p>
      <div class="space-y-4">
        ${faqItems.map((faq, idx) => `
        <article class="border border-gray-200 rounded-2xl p-5">
          <h3 class="font-bold text-gray-900 text-sm sm:text-base mb-2">${faq.question}</h3>
          <p class="text-gray-600 text-xs sm:text-sm leading-relaxed">${faq.answer}</p>
        </article>
        `).join('')}
      </div>
    </section>
  </main>
</div>
`;

// Gerar o HTML pré-renderizado completo
let html = template;

// 1. Substituir <title>
html = html.replace(/<title>.*?<\/title>/s, `<title>${pageData.title}</title>`);

// 2. Substituir meta description
html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/i, `<meta name="description" content="${pageData.description}" />`);

// 3. Substituir canonical
html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i, `<link rel="canonical" href="${pageData.url}" />`);

// 4. Substituir Open Graph & Twitter
html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i, `<meta property="og:url" content="${pageData.url}" />`);
html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i, `<meta property="og:title" content="${pageData.title}" />`);
html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i, `<meta property="og:description" content="${pageData.description}" />`);
html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${pageData.title}" />`);
html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${pageData.description}" />`);

// 5. Inserir Schemas JSON-LD antes de </head>
html = html.replace('</head>', `${schemasHtml}\n  </head>`);

// 6. Inserir corpo pré-renderizado dentro de <div id="root">
html = html.replace('<div id="root"></div>', `<div id="root" class="prerendered">${prerenderedBody}</div>`);

// Escrever arquivo estático em dist/escapamentos-curitiba/index.html
const targetDir = path.join(distDir, 'escapamentos-curitiba');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
console.log(`[prerender] Página pré-renderizada gerada com sucesso em: dist/escapamentos-curitiba/index.html`);
