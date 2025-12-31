import { ServiceItem, LocationData } from '../types';

export const COMPANY_INFO = {
  name: "BS Escapamentos",
  phone: "(41) 3268-3473",
  whatsapp: "5541998434800",
  whatsappDisplay: "(41) 99843-4800",
  email: "contato@bsescapamentos.com.br",
  address: "R. Pedro Gusso, 2340, Novo Mundo (Próx. Neo Ville/CIC) - Curitiba/PR, 81900-080",
  mapsLink: "https://goo.gl/maps/CoMsLJtk8HhBRx5PA",
  facebook: "https://www.facebook.com/BSescapamentosautocenter/",
  siteUrl: "https://www.bsescapamentos.com.br"
};

// Imagens de Alta Resolução e Confiabilidade
// Usando Placehold.co para garantir que nunca quebrem, ou Unsplash com IDs estáveis
export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1486262715619-72a6075f1ed8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", 
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", 
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", 
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
];

export const PAGE_IMAGES = {
  trust: "https://placehold.co/800x600/1e3a8a/FFFFFF?text=BS+Equipe+Técnica",
  exhaust: "https://placehold.co/800x600/1e3a8a/FFFFFF?text=Escapamentos+Premium",
  workshop: "https://placehold.co/800x600/1e3a8a/FFFFFF?text=Nossa+Oficina+CIC"
};

export const SERVICES: ServiceItem[] = [
  { 
    id: '1', 
    title: 'Escapamentos Esportivos', 
    description: 'Instalação de sistemas de alto desempenho (difusores, ponteiras, downpipes). Personalização de ronco e performance para entusiastas do CIC e Curitiba.', 
    iconName: 'Flame' 
  },
  { 
    id: '2', 
    title: 'Catalisadores', 
    description: 'Substituição e limpeza de catalisadores com peças homologadas pelo PROCONVE. Adequação às normas de emissão de poluentes.', 
    iconName: 'Wind' 
  },
  { 
    id: '3', 
    title: 'Silenciadores', 
    description: 'Eliminação de ruídos excessivos e vibrações. Troca de silenciosos traseiros e intermediários com garantia de fábrica.', 
    iconName: 'VolumeX' 
  },
  { 
    id: '4', 
    title: 'Freios ABS', 
    description: 'Manutenção completa: troca de pastilhas, discos, fluido e sensores ABS. Segurança máxima para sua família nas ruas do Neo Ville.', 
    iconName: 'Disc' 
  },
  { 
    id: '5', 
    title: 'Suspensão Completa', 
    description: 'Troca de amortecedores, molas, pivôs e buchas. Diagnóstico de barulhos e instabilidade para maior conforto ao dirigir.', 
    iconName: 'Activity' 
  },
  { 
    id: '6', 
    title: 'Troca de Óleo', 
    description: 'Lubrificantes sintéticos e minerais de alta performance. Troca de filtros de óleo, ar e combustível.', 
    iconName: 'Droplet' 
  },
  { 
    id: '7', 
    title: 'Alinhamento 3D', 
    description: 'Tecnologia de ponta para ajuste geométrico das rodas. Evite desgaste irregular de pneus e economize combustível.', 
    iconName: 'MoveHorizontal' 
  },
  { 
    id: '8', 
    title: 'Mecânica Geral', 
    description: 'Revisão de motores, correia dentada, embreagem e sistema de arrefecimento. Diagnóstico computadorizado avançado.', 
    iconName: 'Wrench' 
  },
];

// URLs atualizadas para placeholders confiáveis para evitar imagens quebradas
export const BLOG_POSTS = [
  {
    id: 1,
    title: "Nova Legislação de Ruído 2024",
    excerpt: "Saiba como evitar multas em Curitiba com as novas regras para escapamentos esportivos.",
    date: "12 Mar 2024",
    image: "https://placehold.co/600x400/1e3a8a/FFFFFF?text=Legislação+de+Ruído"
  },
  {
    id: 2,
    title: "5 Sinais do Catalisador Ruim",
    excerpt: "Perda de potência e aumento de consumo? Veja se é hora de trocar seu catalisador.",
    date: "05 Abr 2024",
    image: "https://placehold.co/600x400/1e3a8a/FFFFFF?text=Catalisador+Problemas"
  },
  {
    id: 3,
    title: "Revisão de Férias: Checklist",
    excerpt: "Vai viajar saindo do CIC? Confira os itens essenciais para revisar antes da estrada.",
    date: "20 Mai 2024",
    image: "https://placehold.co/600x400/1e3a8a/FFFFFF?text=Revisão+de+Férias"
  },
  {
    id: 4,
    title: "Escapamento Inox vs Aço Carbono",
    excerpt: "Entenda as diferenças de durabilidade e performance para o seu projeto automotivo.",
    date: "15 Jun 2024",
    image: "https://placehold.co/600x400/1e3a8a/FFFFFF?text=Inox+vs+Carbono"
  }
];

export const FAQS = [
  {
    question: "Qual o prazo médio para instalação de um escapamento?",
    answer: "A maioria das instalações de escapamentos originais ou esportivos simples é realizada no mesmo dia, geralmente entre 1 a 3 horas. Projetos personalizados podem levar mais tempo."
  },
  {
    question: "Vocês atendem clientes do Neo Ville e CIC?",
    answer: "Sim! Estamos estrategicamente localizados no Novo Mundo, a poucos minutos do Neo Ville e CIC, sendo a oficina de referência para toda essa região."
  },
  {
    question: "O escapamento esportivo aumenta o consumo?",
    answer: "Depende do projeto. Um sistema bem dimensionado pode até melhorar a eficiência do motor. Projetos incorretos podem aumentar o consumo. Nossa equipe calcula o fluxo ideal para seu carro."
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Aceitamos cartões de crédito (com parcelamento), débito e PIX com desconto especial. Oferecemos condições facilitadas para orçamentos maiores."
  },
  {
    question: "Como funciona a garantia dos serviços?",
    answer: "Oferecemos garantia de 90 dias para mão de obra e garantia do fabricante para as peças (que pode variar de 6 meses a 1 ano, dependendo da marca)."
  },
  {
    question: "É necessário agendar horário?",
    answer: "Para diagnósticos rápidos, você pode vir direto. Para serviços mais complexos ou para garantir atendimento sem espera, recomendamos agendar pelo WhatsApp."
  }
];

export const TESTIMONIALS = [
  {
    name: "Carlos Mendes",
    location: "Morador do Neo Ville",
    text: "Excelente atendimento! Troquei o escapamento do meu Honda Civic e ficou perfeito. O ronco esportivo na medida certa, sem incomodar. Recomendo muito para quem é do CIC.",
    stars: 5
  },
  {
    name: "Fernanda Oliveira",
    location: "Cliente do CIC",
    text: "Profissionais honestos. Fui em outra oficina que condenou minha suspensão inteira. Na BS, trocaram apenas as buchas necessárias. Ganharam uma cliente fiel.",
    stars: 5
  },
  {
    name: "Ricardo Santos",
    location: "Novo Mundo",
    text: "Rápido e preço justo. Fiz a revisão de freios e troca de óleo. O carro ficou ótimo e me entregaram no prazo combinado.",
    stars: 5
  }
];

export const DIFFERENTIALS = [
  { title: "Localização Estratégica", desc: "Fácil acesso para CIC e Neo Ville", icon: "MapPin" },
  { title: "Pagamento Facilitado", desc: "Parcele em até 12x no cartão", icon: "CreditCard" },
  { title: "Garantia Total", desc: "Serviços com nota e garantia", icon: "ShieldCheck" },
  { title: "Peças Originais", desc: "Marcas líderes de mercado", icon: "Award" }
];

// Comprehensive list of Neighborhoods
const NEIGHBORHOODS_LIST = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", "Boqueirão de Cima", "Tanguá", 
  "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", 
  "Vila Fanny", "Vila Hauer", "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", 
  "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da XV", 
  "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", 
  "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", 
  "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", "Cidade Industrial de Curitiba", 
  "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", 
  "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", 
  "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", 
  "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", "São Miguel", 
  "Vila Pantanal", "Seminário", "Sítio Cercado", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", 
  "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", "Uberaba de Cima", "Uberaba de Baixo", 
  "São Braz Velho", "Cidade Industrial", "Vila Verde", "Vila Barigui", "Caiuá", "Xaxim Velho", 
  "Fazendinha-Portão", "Campo Comprido Velho", "Bacacheri Velho", "Capão da Imbuia Velho", "Pinheirinho Velho", 
  "Vila São Pedro", "Vila Osternack", "Neo Ville", "Vila Formosa", "Vila Sandra", "Conjunto Caiuá", 
  "Conjunto Parigot de Souza", "Vila Reno", "Vila Audi"
];

// Comprehensive list of Cities
const CITIES_LIST = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", "Bocaiúva do Sul", 
  "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", 
  "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", 
  "Pinhais", "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", 
  "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

const generateSlug = (text: string) => {
  return text.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
};

// Sort lists alphabetically for better UX
const SORTED_NEIGHBORHOODS = [...new Set(NEIGHBORHOODS_LIST)].sort((a, b) => a.localeCompare(b));
const SORTED_CITIES = [...new Set(CITIES_LIST)].sort((a, b) => a.localeCompare(b));

export const LOCATIONS: LocationData[] = [
  ...SORTED_CITIES.map(name => ({
    name,
    slug: generateSlug(name),
    type: 'city' as const
  })),
  ...SORTED_NEIGHBORHOODS.map(name => ({
    name,
    slug: generateSlug(name),
    type: 'neighborhood' as const
  }))
];