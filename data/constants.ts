import { ServiceItem, LocationData } from '../types';

export const COMPANY_INFO = {
  name: "BS CAR CENTER",
  legalName: "BS Escapamentos",
  shortName: "BS CAR CENTER",
  historicalName: "BS Escapamentos",
  descriptor: "Manutenção Automotiva e Escapamentos",
  phone: "(41) 3268-3473",
  whatsapp: "5541998434800",
  whatsappDisplay: "(41) 99843-4800",
  email: "contato@bsescapamentos.com.br",
  address: "R. Pedro Gusso, 2340 - Novo Mundo, Curitiba - PR, 81900-080",
  streetAddress: "R. Pedro Gusso, 2340",
  neighborhood: "Novo Mundo",
  city: "Curitiba",
  state: "PR",
  zip: "81900-080",
  mapsLink: "https://goo.gl/maps/CoMsLJtk8HhBRx5PA",
  facebook: "https://www.facebook.com/BSescapamentosautocenter/",
  instagram: "https://www.instagram.com/bs_car_center_/",
  siteUrl: "https://www.bsescapamentos.com.br"
};

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
];

export const PAGE_IMAGES = {
  trust: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  exhaust: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  workshop: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

// Hierarchy of confirmed services
export const SERVICES: ServiceItem[] = [
  {
    id: 'manutencao-automotiva',
    slug: 'manutencao-automotiva',
    title: 'Manutenção Automotiva Completa',
    shortTitle: 'Manutenção Automotiva',
    metaTitle: 'Manutenção Automotiva em Curitiba | BS CAR CENTER',
    metaDescription: 'Manutenção automotiva preventiva e corretiva em Curitiba. Freios, suspensão, injeção, óleo, scanner e mecânica geral no Novo Mundo com a BS CAR CENTER.',
    h1: 'Manutenção Automotiva em Curitiba',
    description: 'Serviços de diagnóstico preventivo e reparos mecânicos completos para manter o seu veículo seguro e com bom desempenho nas ruas de Curitiba.',
    answerFirst: 'A BS CAR CENTER realiza manutenção automotiva em Curitiba, com serviços preventivos e corretivos em freios, suspensão, geometria, injeção eletrônica, diagnóstico por scanner, troca de fluidos, motores e escapamentos. A oficina fica no bairro Novo Mundo, com fácil acesso ao CIC e região.',
    details: [
      'Revisão preventiva periódica para identificação antecipada de desgastes.',
      'Diagnósticos estruturados para sistemas mecânicos, elétricos básicos e hidráulicos.',
      'Checklist completo de componentes antes de viagens e uso severo.',
      'Orientações técnicas claras e orçamentos detalhados antes de cada intervenção.'
    ],
    faq: [
      {
        question: 'Qual a diferença entre manutenção preventiva e corretiva?',
        answer: 'A manutenção preventiva avalia e substitui peças antes que elas falhem, evitando paradas repentinas e despesas maiores. A corretiva repara componentes que já apresentaram defeito ou desgaste acentuado.'
      },
      {
        question: 'Com que frequência devo fazer a revisão geral do carro?',
        answer: 'Recomenda-se realizar uma avaliação preventiva a cada 10.000 km ou a cada 6 a 12 meses, conforme as recomendações do manual do fabricante e as condições de uso do veículo.'
      }
    ],
    iconName: 'Wrench',
    priority: 1
  },
  {
    id: 'freios',
    slug: 'freios',
    title: 'Manutenção de Freios',
    shortTitle: 'Freios',
    metaTitle: 'Freios em Curitiba | BS CAR CENTER',
    metaDescription: 'Avaliação e manutenção de freios em Curitiba. Pastilhas, discos, fluido de freio e verificação do sistema ABS no Novo Mundo com a BS CAR CENTER.',
    h1: 'Freios em Curitiba',
    description: 'Avaliação detalhada e substituição de pastilhas, discos, tambores, sapatas, cilindros e fluido de freio com aferição técnica.',
    answerFirst: 'A BS CAR CENTER realiza manutenção de freios em Curitiba, com avaliação de componentes como pastilhas, discos, fluido e itens relacionados, conforme o sistema e a necessidade identificada no veículo.',
    details: [
      'Inspeção da espessura de pastilhas e discos de freio.',
      'Teste do ponto de ebulição e estado do fluido de freio.',
      'Avaliação de flexíveis, pinças e cilindros de roda.',
      'Diagnóstico de trepidações no pedal e ruídos durante as frenagens.'
    ],
    faq: [
      {
        question: 'Quando devo trocar as pastilhas de freio?',
        answer: 'As pastilhas devem ser avaliadas periodicamente e substituídas quando atingirem a espessura mínima indicada pelo fabricante ou caso apresentem ruídos metálicos e perda de resposta no pedal.'
      },
      {
        question: 'Por que é importante trocar o fluido de freio?',
        answer: 'O fluido de freio absorve umidade com o tempo, o que reduz seu ponto de ebulição e pode comprometer a eficiência da frenagem em situações de uso contínuo, como descidas de serra.'
      }
    ],
    iconName: 'Disc',
    priority: 2
  },
  {
    id: 'suspensao',
    slug: 'suspensao',
    title: 'Suspensão Automotiva',
    shortTitle: 'Suspensão',
    metaTitle: 'Suspensão Automotiva em Curitiba | BS CAR CENTER',
    metaDescription: 'Diagnóstico e manutenção de suspensão automotiva em Curitiba. Amortecedores, molas, buchas, pivôs e estabilidade no Novo Mundo com a BS CAR CENTER.',
    h1: 'Suspensão Automotiva em Curitiba',
    description: 'Revisão criteriosa de amortecedores, molas, bandejas, buchas, pivôs e bieletas para restabelecer o conforto e o controle da direção.',
    answerFirst: 'A BS CAR CENTER realiza diagnóstico e reparo de suspensão em Curitiba, inspecionando amortecedores, molas, buchas, batentes e pivôs. O objetivo é identificar desgastes mecânicos que geram ruídos, instabilidade e desconforto ao dirigir.',
    details: [
      'Avaliação de amortecedores quanto a vazamentos, ação e folgas.',
      'Checagem de pivôs, terminais de direção e barras axiais.',
      'Inspeção de buchas de bandeja, coxins e suportes de borracha.',
      'Diagnóstico de barulhos ao trafegar por irregularidades e lombadas.'
    ],
    faq: [
      {
        question: 'Quais sinais indicam que a suspensão precisa de avaliação?',
        answer: 'Ruídos secos ao passar por desníveis, sensação de instabilidade em curvas, volante desalinhado e oscilação excessiva da carroceria são sinais comuns de que a suspensão deve ser inspecionada.'
      },
      {
        question: 'A suspensão gasta desgasta mais os pneus?',
        answer: 'Sim. Folgas em buchas, pivôs ou amortecedores sem pressão alteram os ângulos das rodas durante o movimento, acelerando o desgaste irregular da banda de rodagem.'
      }
    ],
    iconName: 'Activity',
    priority: 3
  },
  {
    id: 'geometria-balanceamento',
    slug: 'geometria-balanceamento',
    title: 'Geometria e Balanceamento',
    shortTitle: 'Geometria e Balanceamento',
    metaTitle: 'Geometria e Balanceamento em Curitiba | BS CAR CENTER',
    metaDescription: 'Ajuste de geometria veicular e balanceamento de rodas em Curitiba. Estabilidade e prevenção contra desgaste irregular no Novo Mundo com a BS CAR CENTER.',
    h1: 'Geometria e Balanceamento em Curitiba',
    description: 'Ajuste dos ângulos de cambagem, cáster e convergência, além do balanceamento do conjunto roda-pneu para condução suave e precisa.',
    answerFirst: 'A BS CAR CENTER realiza serviços de geometria e balanceamento em Curitiba. O alinhamento correto dos ângulos das rodas e o equilíbrio do conjunto pneumático proporcionam estabilidade ao veículo e previnem o desgaste prematuro dos pneus.',
    details: [
      'Alinhamento e ajuste dos ângulos de convergência e divergência.',
      'Aferição geométrica conforme especificações técnicas do modelo.',
      'Balanceamento estático e dinâmico de rodas de aço e liga leve.',
      'Prevenção contra vibrações no volante e tendência do carro puxar para os lados.'
    ],
    faq: [
      {
        question: 'Qual a diferença entre geometria (alinhamento) e balanceamento?',
        answer: 'A geometria ajusta os ângulos de apoio das rodas em relação ao solo e à direção do veículo. O balanceamento distribui uniformemente o peso no conjunto pneu-roda para evitar vibrações.'
      },
      {
        question: 'Quando devo realizar a geometria e o balanceamento?',
        answer: 'Recomenda-se aferir a cada 10.000 km, ao trocar pneus, após impactos fortes contra buracos ou guias, ou se o volante vibrar e o veículo puxar para um dos lados.'
      }
    ],
    iconName: 'MoveHorizontal',
    priority: 4
  },
  {
    id: 'scanner-automotivo',
    slug: 'scanner-automotivo',
    title: 'Scanner Automotivo e Diagnóstico Eletrônico',
    shortTitle: 'Scanner Automotivo',
    metaTitle: 'Scanner Automotivo em Curitiba | BS CAR CENTER',
    metaDescription: 'Diagnóstico computadorizado com scanner automotivo em Curitiba. Leitura de códigos de falha e parâmetros no Novo Mundo com a BS CAR CENTER.',
    h1: 'Scanner Automotivo em Curitiba',
    description: 'Leitura de dados em tempo real, verificação de códigos DTC na central do veículo e testes de atuadores e sensores automotivos.',
    answerFirst: 'O scanner automotivo auxilia na leitura de códigos e parâmetros eletrônicos do veículo, contribuindo para o diagnóstico de falhas em sistemas compatíveis. Na BS CAR CENTER no Novo Mundo, os dados obtidos pelo aparelho são confrontados com testes práticos para orientar o conserto correto.',
    details: [
      'Identificação de códigos de avaria registrados na ECU.',
      'Monitoramento de parâmetros ao vivo (temperatura, pressão, tempos de injeção).',
      'Diagnóstico para luz de injeção, freios e controle de estabilidade.',
      'Consulte compatibilidade para diagnóstico e reprogramação de módulos automotivos específicos.'
    ],
    faq: [
      {
        question: 'O scanner automotivo resolve o problema sozinho?',
        answer: 'Não. O scanner aponta o circuito ou sensor onde foi registrada a anomalia. Cabe ao mecânico capacitado testar a fiação, o componente físico e a alimentação elétrica para diagnosticar a causa real.'
      },
      {
        question: 'Vocês realizam reprogramação de módulos?',
        answer: 'Sim, realizamos reprogramação de alguns módulos automotivos compatíveis. É necessário consultar previamente o modelo e o ano do veículo para confirmar a compatibilidade técnica.'
      }
    ],
    iconName: 'Zap',
    priority: 5
  },
  {
    id: 'injecao-eletronica',
    slug: 'injecao-eletronica',
    title: 'Injeção Eletrônica',
    shortTitle: 'Injeção Eletrônica',
    metaTitle: 'Injeção Eletrônica em Curitiba | BS CAR CENTER',
    metaDescription: 'Manutenção de injeção eletrônica em Curitiba. Limpeza técnica de bicos, sensores, TBI e diagnóstico de falhas no Novo Mundo com a BS CAR CENTER.',
    h1: 'Injeção Eletrônica em Curitiba',
    description: 'Limpeza e equalização de eletroinjetores, inspeção de corpo de borboleta (TBI), velas de ignição, cabos, bobinas e sonda lambda.',
    answerFirst: 'A BS CAR CENTER executa diagnóstico e manutenção de injeção eletrônica em Curitiba. O serviço inclui verificação de velas, cabos, bobinas, bicos injetores e sensores de mistura, restabelecendo o funcionamento regular do motor e o equilíbrio de consumo.',
    details: [
      'Avaliação da vazão, estanqueidade e leque dos bicos injetores.',
      'Descarbonização e limpeza do corpo de borboleta motorizado (TBI).',
      'Checagem do sistema de ignição: velas, cabos e bobinas de alta tensão.',
      'Inspeção da sonda lambda e sensores de temperatura e pressão.'
    ],
    faq: [
      {
        question: 'Quais sintomas indicam problemas na injeção eletrônica?',
        answer: 'Dificuldade na partida, falhas em aceleração, marcha lenta irregular, aumento repentino de consumo e luz de advertência acesa no painel indicam necessidade de inspeção.'
      },
      {
        question: 'É necessário limpar bicos injetores preventivamente?',
        answer: 'A limpeza é indicada quando os testes no scanner ou na bancada de ensaio apontam desbalanço de vazão ou perda de estanqueidade nos injetores.'
      }
    ],
    iconName: 'Cpu',
    priority: 6
  },
  {
    id: 'troca-de-oleo',
    slug: 'troca-de-oleo',
    title: 'Troca de Óleo e Filtros',
    shortTitle: 'Troca de Óleo',
    metaTitle: 'Troca de Óleo em Curitiba | BS CAR CENTER',
    metaDescription: 'Troca de óleo de motor e filtros em Curitiba. Lubrificantes específicos no Novo Mundo com a BS CAR CENTER.',
    h1: 'Troca de Óleo em Curitiba',
    description: 'Substituição rápida e técnica de óleo de motor e filtros de óleo, ar do motor, combustível e ar-condicionado de acordo com a recomendação da montadora.',
    answerFirst: 'A BS CAR CENTER realiza a troca de óleo e filtros em Curitiba, trabalhando com lubrificantes que atendem às viscosidades e especificações API/ACEA recomendadas por cada fabricante automotivo para garantir a proteção e a durabilidade do motor.',
    details: [
      'Drenagem completa do óleo usado e descarte ambientalmente responsável.',
      'Substituição do filtro de óleo a cada troca para evitar contaminação do lubrificante novo.',
      'Checagem dos filtros de ar do motor e de combustível.',
      'Registro da quilometragem e prazo recomendado para a próxima troca.'
    ],
    faq: [
      {
        question: 'Posso trocar apenas o óleo e deixar o filtro antigo?',
        answer: 'Não é recomendado. O filtro retém impurezas da circulação anterior. Manter o filtro velho contamina imediatamente o óleo novo, reduzindo sua vida útil e capacidade lubrificante.'
      },
      {
        question: 'Como escolher a viscosidade correta do óleo?',
        answer: 'A viscosidade e a norma técnica devem seguir rigorosamente o manual do proprietário do veículo, considerando o projeto do motor e a recomendação do fabricante.'
      }
    ],
    iconName: 'Droplet',
    priority: 7
  },
  {
    id: 'cambio-automatico',
    slug: 'cambio-automatico',
    title: 'Troca de Óleo de Câmbio Automático',
    shortTitle: 'Câmbio Automático',
    metaTitle: 'Troca de Óleo de Câmbio Automático em Curitiba | BS CAR CENTER',
    metaDescription: 'Substituição preventiva do fluido de transmissão automática em Curitiba com a BS CAR CENTER no Novo Mundo.',
    h1: 'Troca de Óleo de Câmbio Automático em Curitiba',
    description: 'Procedimento preventivo de substituição de fluido de transmissão automática e filtros internos/externos para veículos compatíveis.',
    answerFirst: 'A BS CAR CENTER realiza a troca de óleo de câmbio automático em Curitiba, efetuando a substituição técnica do fluido de transmissão em caixas compatíveis. O serviço preventivo preserva as embreagens internas, solenoides e o conversor de torque da transmissão.',
    details: [
      'Avaliação da coloração, odor e nível do fluido atual.',
      'Utilização de fluido conforme a norma e especificação exata do câmbio.',
      'Troca de filtros do cárter e juntas quando aplicável ao modelo.',
      'Verificação do funcionamento das trocas de marchas após o procedimento.'
    ],
    faq: [
      {
        question: 'O óleo do câmbio automático realmente precisa ser trocado?',
        answer: 'Sim. Embora alguns manuais citem "fluido vitalício", o uso severo (trânsito urbano, variações térmicas) degrada os aditivos do fluido. A substituição preventiva evita desgastes caros na transmissão.'
      },
      {
        question: 'Quais cuidados devem ser tomados antes de trocar o fluido do câmbio?',
        answer: 'É indispensável realizar uma avaliação prévia do comportamento das marchas e do estado do fluido existente para certificar que o câmbio está apto a receber a troca preventiva.'
      }
    ],
    iconName: 'Settings',
    priority: 8
  },
  {
    id: 'motores',
    slug: 'motores',
    title: 'Serviços e Reparos em Motores',
    shortTitle: 'Motores',
    metaTitle: 'Serviços em Motores em Curitiba | BS CAR CENTER',
    metaDescription: 'Avaliação técnica e manutenção de motores automotivos em Curitiba. Cabeçote, correias, vazamentos e arrefecimento no Novo Mundo com a BS CAR CENTER.',
    h1: 'Serviços e Reparos em Motores em Curitiba',
    description: 'Diagnóstico e reparos em componentes do motor, incluindo substituição de correia dentada, bomba d’água, juntas, vedadores e sistema de arrefecimento.',
    answerFirst: 'A BS CAR CENTER executa serviços e reparos em motores automotivos em Curitiba. Nossa equipe avalia ruídos mecânicos, vazamentos de óleo e água, falhas de sincronismo e perda de rendimento, realizando os reparos necessários com critério e transparência.',
    details: [
      'Substituição preventiva e corretiva do kit de correia dentada ou verificação de corrente.',
      'Manutenção do sistema de arrefecimento: bomba d’água, válvula termostática e radiador.',
      'Eliminação de vazamentos em tampa de válvulas, cárter e retentores.',
      'Avaliação de compressão de cilindros e diagnóstico de superaquecimento.'
    ],
    faq: [
      {
        question: 'Quando trocar a correia dentada do motor?',
        answer: 'A troca deve ser feita pelo intervalo de quilometragem ou tempo previsto no manual (geralmente entre 40.000 e 60.000 km, ou 3 a 5 anos), já que o rompimento pode danificar válvulas e pistões.'
      },
      {
        question: 'O que fazer ao notar fumaça ou vazamento de óleo no motor?',
        answer: 'Desligue o motor se houver alerta de pressão no painel e leve o veículo para diagnóstico. Vazamentos devem ser reparados antes de atingir componentes elétricos ou reduzir o nível seguro do óleo.'
      }
    ],
    iconName: 'Gauge',
    priority: 9
  },
  {
    id: 'escapamentos',
    slug: 'escapamentos',
    title: 'Escapamentos, Catalisadores e Silenciosos',
    shortTitle: 'Escapamentos',
    metaTitle: 'Escapamentos em Curitiba | BS CAR CENTER',
    metaDescription: 'Especialista histórico em escapamentos em Curitiba. Troca de silenciosos, catalisadores homologados e projetos esportivos no Novo Mundo com a BS CAR CENTER.',
    h1: 'Escapamentos em Curitiba',
    description: 'Tradição e expertise técnica em sistemas de exaustão: catalisadores homologados, silenciosos intermediários e traseiros, tubulações e escapamentos esportivos.',
    answerFirst: 'A BS CAR CENTER mantém sua reconhecida tradição em sistemas de exaustão em Curitiba (construída sob o nome histórico BS Escapamentos). Executamos reparos, substituição de catalisadores homologados, troca de silenciosos furados, ponteiras e projetos esportivos dimensionados para cada aplicação veicular.',
    details: [
      'Substituição de catalisadores homologados com foco nas normas ambientais de emissões.',
      'Troca de silenciosos intermediários e traseiros para eliminação de ruídos e ressonâncias.',
      'Instalação de ponteiras, abafadores esportivos e difusores para entusiastas.',
      'Reparo de coxins, abraçadeiras, tubos furados e soldas técnicas de exaustão.'
    ],
    faq: [
      {
        question: 'Como saber se o catalisador ou silencioso está furado?',
        answer: 'Ruídos metálicos sob o assoalho, som de sopro alto na aceleração, cheiro forte de gases e vibrações anormais são indícios típicos de danos no sistema de exaustão.'
      },
      {
        question: 'Vocês ainda realizam projetos de escapamento esportivo?',
        answer: 'Sim! Os escapamentos continuam sendo uma de nossas especialidades históricas. Realizamos instalações de difusores, ponteiras e abafadores esportivos dentro das especificações técnicas.'
      }
    ],
    iconName: 'Flame',
    priority: 10
  }
];

export const DIFFERENTIALS = [
  {
    title: "Atendimento no Novo Mundo",
    desc: "Fácil acesso para o CIC, região do Neo Ville e bairros vizinhos",
    icon: "MapPin"
  },
  {
    title: "Diagnóstico Computadorizado",
    desc: "Scanners e equipamentos para leitura precisa de parâmetros",
    icon: "Cpu"
  },
  {
    title: "Garantia nos Serviços",
    desc: "Garantia legal de 90 dias (CDC) e garantia de fábrica para peças",
    icon: "ShieldCheck"
  },
  {
    title: "Orçamento Transparente",
    desc: "Explicação clara das intervenções antes de iniciar o serviço",
    icon: "FileText"
  }
];

// Repositioned FAQs for Home (item 33)
export const HOME_FAQS = [
  {
    question: "Quais serviços a BS CAR CENTER realiza?",
    answer: "A BS CAR CENTER realiza manutenção automotiva preventiva e corretiva, incluindo freios, suspensão, geometria, balanceamento, diagnóstico por scanner, injeção eletrônica, troca de óleo, troca de fluido de câmbio automático, serviços em motores e sistemas de escapamentos."
  },
  {
    question: "Vocês fazem manutenção automotiva em Curitiba?",
    answer: "Sim. A BS CAR CENTER está localizada no bairro Novo Mundo, em Curitiba (R. Pedro Gusso, 2340), atendendo motoristas de toda a cidade, especialmente da região sul, CIC e bairros próximos."
  },
  {
    question: "Fazem geometria e balanceamento?",
    answer: "Sim. Realizamos aferição e ajuste de geometria das rodas (alinhamento) e balanceamento de conjuntos pneumáticos para garantir estabilidade e evitar desgaste irregular de pneus."
  },
  {
    question: "Trabalham com suspensão e freios?",
    answer: "Sim. Inspecionamos e substituímos pastilhas, discos, fluido de freio, amortecedores, molas, pivôs, buchas e componentes estruturais de suspensão e direção."
  },
  {
    question: "Fazem diagnóstico com scanner?",
    answer: "Sim. Utilizamos scanners automotivos para leitura de falhas gravadas na central eletrônica, monitoramento de sensores e apoio ao diagnóstico de luzes de alerta no painel."
  },
  {
    question: "Fazem manutenção de injeção eletrônica?",
    answer: "Sim. Realizamos limpeza e teste de bicos injetores, descarbonização de TBI, diagnóstico de sensores, cabos, velas e bobinas de ignição."
  },
  {
    question: "Fazem troca de óleo de câmbio automático?",
    answer: "Sim. Executamos a substituição preventiva do fluido de transmissão automática para veículos compatíveis, seguindo as especificações técnicas recomendadas."
  },
  {
    question: "Trabalham com motores?",
    answer: "Sim. Fazemos diagnósticos mecânicos e reparos em componentes de motores, como troca de correia dentada, bomba d'água, sistema de arrefecimento e correção de vazamentos."
  },
  {
    question: "Ainda trabalham com escapamentos?",
    answer: "Com certeza. Os escapamentos são uma especialidade histórica da empresa (anteriormente conhecida como BS Escapamentos). Continuamos oferecendo catalisadores homologados, silenciosos, tubulações e escapamentos esportivos."
  },
  {
    question: "Como agendar atendimento?",
    answer: "Você pode agendar seu atendimento ou tirar dúvidas diretamente pelo nosso WhatsApp no número (41) 99843-4800 ou pelo telefone fixo (41) 3268-3473."
  }
];

// Audited, factual customer feedback (no fake 5-star Google review claim)
export const CLIENT_FEEDBACK = [
  {
    name: "Carlos M.",
    location: "Novo Mundo / CIC",
    text: "Atendimento transparente e diagnóstico ágil. Fizeram a revisão de suspensão e freios com orçamento detalhado antes de mexer no carro."
  },
  {
    name: "Fernanda O.",
    location: "Região do Neo Ville",
    text: "Moro próxima ao Novo Mundo e levo meu carro para troca de óleo e revisão preventiva. Equipe atenciosa e serviço entregue no prazo combinado."
  },
  {
    name: "Ricardo S.",
    location: "Curitiba",
    text: "Fiz a geometria, balanceamento e a troca de pastilhas de freio. O carro ficou firme na estrada e sem ruídos."
  },
  {
    name: "Roberto A.",
    location: "Capão Raso",
    text: "Sou cliente antigo de escapamento e recentemente fiz a revisão da injeção e scanner. Excelente trabalho e seriedade na oficina."
  }
];

// Repositioned Blog Posts with maintenance focus (item 35)
export const BLOG_POSTS = [
  {
    id: 1,
    slug: "como-saber-se-a-suspensao-precisa-de-avaliacao",
    title: "Como saber se a suspensão precisa de avaliação?",
    excerpt: "Barulhos ao passar em desníveis ou sensação de instabilidade? Entenda os indícios de desgaste em amortecedores, buchas e pivôs.",
    date: "15 Jan 2026",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Identificando sinais de desgaste na suspensão do veículo</h2>
      <p>O sistema de suspensão é responsável por manter os pneus em contato constante com o solo e absorver os impactos das vias de Curitiba. Com o tempo de uso, componentes de borracha e amortecedores sofrem desgaste natural.</p>
      
      <h3>Sinais mais comuns observados pelos motoristas</h3>
      <ul>
        <li><strong>Ruídos metálicos ou batidas secas:</strong> frequentemente associados a folgas em bieletas, buchas de barra estabilizadora ou pivôs.</li>
        <li><strong>Instabilidade em curvas ou ventos laterais:</strong> amortecedores com perda de carga reduzem a aderência das rodas ao piso.</li>
        <li><strong>Desgaste irregular dos pneus:</strong> folgas na suspensão alteram o alinhamento da direção durante o rodar.</li>
      </ul>
      <p>Uma inspeção visual no elevador automotivo permite checar vazamentos de óleo nos amortecedores e folgas com alavanca técnica, evitando a troca desnecessária de peças boas.</p>
    `
  },
  {
    id: 2,
    slug: "quando-fazer-geometria-e-balanceamento",
    title: "Quando fazer geometria e balanceamento?",
    excerpt: "Descubra a frequência recomendada e as situações em que o alinhamento veicular é necessário para poupar pneus e combustível.",
    date: "20 Jan 2026",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Geometria e balanceamento: segurança e durabilidade</h2>
      <p>A geometria das rodas consiste na calibração dos ângulos de convergência/divergência, cambagem e cáster. Já o balanceamento equaliza a massa do pneu e da roda para evitar oscilações.</p>
      
      <h3>Quando agendar o serviço?</h3>
      <p>Geralmente recomenda-se a verificação a cada 10.000 km, mas deve ser antecipada caso:</p>
      <ul>
        <li>O volante vibre em velocidades de rodovia (indicativo de desbalanceamento).</li>
        <li>O veículo puxe para a direita ou esquerda em retas planas (indicativo de desalinhamento).</li>
        <li>Ocorra impacto forte contra guias, buracos ou reformas no asfalto.</li>
        <li>Peças de suspensão ou direção tenham sido substituídas.</li>
      </ul>
    `
  },
  {
    id: 3,
    slug: "sinais-de-desgaste-nos-freios",
    title: "Sinais de desgaste nos freios: o que observar",
    excerpt: "Pedal esponjoso, chiados ao frear ou trepidação? Saiba quando levar seu veículo para inspecionar pastilhas e discos.",
    date: "05 Fev 2026",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Segurança nas frenagens: o que avaliar no sistema de freios</h2>
      <p>O sistema de freios é o item de segurança ativa mais exigido no trânsito urbano. Pastilhas e discos sofrem desgaste por atrito e necessitam de acompanhamento regular.</p>
      
      <h3>Sintomas que exigem checagem</h3>
      <ol>
        <li><strong>Ruído agudo ou atrito ferro com ferro:</strong> alerta de que a pastilha atingiu o limite de material de atrito.</li>
        <li><strong>Pedal de freio baixo ou elástico:</strong> pode indicar ar no sistema hidráulico ou degradação do fluido de freio por umidade.</li>
        <li><strong>Vibração no pedal ao frear:</strong> costuma indicar empenamento ou espessura irregular nas pistas dos discos de freio.</li>
      </ol>
      <p>Recomenda-se aferir visualmente as pastilhas e testar o fluido de freio em toda revisão periódica.</p>
    `
  },
  {
    id: 4,
    slug: "o-que-o-scanner-automotivo-consegue-identificar",
    title: "O que o scanner automotivo consegue identificar?",
    excerpt: "Entenda o papel do diagnóstico eletrônico, o significado dos códigos de falha e por que a avaliação mecânica continua essencial.",
    date: "12 Fev 2026",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Diagnóstico eletrônico com scanner automotivo</h2>
      <p>Os veículos modernos possuem módulos eletrônicos (ECU, ABS, Airbag, BCM) interligados por redes de comunicação. O scanner automotivo é a ferramenta que estabelece conexão com esses sistemas.</p>
      
      <h3>O que a ferramenta analisa</h3>
      <p>O aparelho lê os códigos de anomalia (DTC) gerados quando um sensor envia sinal fora da faixa esperada. Além disso, monitora grandezas em tempo real, como temperatura da água, avanço de ignição, tensão da bateria e pressão no coletor.</p>
      <p><strong>Importante:</strong> o scanner indica o circuito que reportou o erro, mas a confirmação da peça defeituosa requer teste técnico com multímetro, manômetro ou osciloscópio.</p>
    `
  },
  {
    id: 5,
    slug: "troca-de-oleo-de-cambio-automatico-quando-avaliar",
    title: "Troca de óleo de câmbio automático: quando avaliar?",
    excerpt: "Saiba por que o fluido de transmissão automática precisa de verificação preventiva para garantir trocas suaves de marcha.",
    date: "18 Fev 2026",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Manutenção preventiva do câmbio automático</h2>
      <p>Diferente de uma transmissão mecânica, o câmbio automático depende do fluido hidráulico não apenas para lubrificação, mas também para transmissão de força no conversor de torque e acionamento eletro-hidráulico das válvulas solenoides.</p>
      
      <h3>Sinais de alerta no câmbio</h3>
      <ul>
        <li>Trancos nas trocas de marcha ou retenção prolongada em marcha lenta.</li>
        <li>Odor de queimado no óleo verificado na vareta ou bujão de checagem.</li>
        <li>Fluido escurecido ou com partículas visíveis.</li>
      </ul>
      <p>A troca preventiva do fluido de transmissão dentro do prazo técnico do modelo preserva o conjunto e previne despesas elevadas com reparações internas.</p>
    `
  },
  {
    id: 6,
    slug: "escapamento-fazendo-barulho-o-que-observar",
    title: "Escapamento fazendo barulho: o que observar?",
    excerpt: "Ruídos de sopro, batidas sob o assoalho ou cheiro de gases? Veja como diagnosticar problemas no sistema de exaustão.",
    date: "25 Fev 2026",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Ruídos no escapamento: silenciosos, catalisador e fixações</h2>
      <p>O escapamento direciona os gases quentes e tóxicos da combustão para fora do habitáculo, ao mesmo tempo em que reduz ruídos e controla emissões de poluentes.</p>
      
      <h3>Causas comuns de barulho</h3>
      <p>Em cidades com clima úmido como Curitiba, a condensação interna na tubulação pode acelerar a corrosão de silenciosos não protegidos. Furos na chapa geram ruídos de sopro intenso, enquanto borrachas de sustentação ressecadas provocam batidas da tubulação contra a lataria.</p>
      <p>Caso a cerâmica interna do catalisador quebre, ouve-se um chocalho característico em acelerações. A inspeção rápida no elevador identifica com clareza o ponto exato da avaria.</p>
    `
  }
];

// Highlighted focus areas on Home (10-15 locations as requested in item 29)
export const HOME_PRIMARY_AREAS = [
  { name: "Novo Mundo", slug: "novo-mundo", type: "neighborhood" as const },
  { name: "Cidade Industrial (CIC)", slug: "cidade-industrial-de-curitiba", type: "neighborhood" as const },
  { name: "Região do Neo Ville", slug: "neo-ville", type: "neighborhood" as const },
  { name: "Capão Raso", slug: "capao-raso", type: "neighborhood" as const },
  { name: "Pinheirinho", slug: "pinheirinho", type: "neighborhood" as const },
  { name: "Portão", slug: "portao", type: "neighborhood" as const },
  { name: "Fazendinha", slug: "fazendinha", type: "neighborhood" as const },
  { name: "Xaxim", slug: "xaxim", type: "neighborhood" as const },
  { name: "Hauer", slug: "hauer", type: "neighborhood" as const },
  { name: "Água Verde", slug: "agua-verde", type: "neighborhood" as const },
  { name: "Boqueirão", slug: "boqueirao", type: "neighborhood" as const },
  { name: "Sítio Cercado", slug: "sitio-cercado", type: "neighborhood" as const }
];

// Real confirmed Curitiba neighborhoods and close RMC cities
const CONFIRMED_NEIGHBORHOODS = [
  "Novo Mundo", "Cidade Industrial de Curitiba", "Neo Ville", "Capão Raso", "Pinheirinho", "Portão",
  "Fazendinha", "Xaxim", "Hauer", "Água Verde", "Boqueirão", "Sítio Cercado",
  "Santa Quitéria", "Vila Izabel", "Seminário", "Batel", "Bigorrilho", "Campina do Siqueira",
  "Campo Comprido", "Fanny", "Guaíra", "Lindóia", "Parolin", "Prado Velho", "Rebouças",
  "Centro", "Centro Cívico", "Alto da XV", "Cristo Rei", "Jardim Botânico", "Cajuru",
  "Uberaba", "Guabirotuba", "Tatuquara", "Umbará", "Ganchinho", "Caximba", "Campo de Santana"
];

const CONFIRMED_CITIES = [
  "Curitiba", "São José dos Pinhais", "Pinhais", "Colombo", "Araucária", "Fazenda Rio Grande", "Campo Largo", "Almirante Tamandaré"
];

const generateSlug = (text: string) => {
  return text.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
};

export const LOCATIONS: LocationData[] = [
  ...CONFIRMED_CITIES.map(name => ({
    name,
    slug: generateSlug(name),
    type: 'city' as const
  })),
  ...CONFIRMED_NEIGHBORHOODS.map(name => ({
    name,
    slug: generateSlug(name),
    type: 'neighborhood' as const
  }))
];
