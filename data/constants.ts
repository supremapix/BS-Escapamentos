import { ServiceItem, LocationData } from '../types';

export const COMPANY_INFO = {
  name: "BS Escapamentos",
  phone: "(41) 3268-3473",
  whatsapp: "5541998434800",
  whatsappDisplay: "(41) 99843-4800",
  email: "contato@bsescapamentos.com.br",
  address: "R. Pedro Gusso, 2340, Novo Mundo - Curitiba/PR, 81900-080",
  mapsLink: "https://goo.gl/maps/CoMsLJtk8HhBRx5PA",
  facebook: "https://www.facebook.com/BSescapamentosautocenter/",
  siteUrl: "https://www.bsescapamentos.com.br"
};

// Imagens de Alta Resolução e Confiabilidade (Unsplash) - NOVOS LINKS
export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // 0: Elevador/Oficina
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // 1: Carro Esportivo
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // 2: Mecânico Soldando
  "https://images.unsplash.com/photo-1486262715619-72a6075f1ed8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"  // 3: Ferramentas/Geral
];

// Imagens específicas para as páginas internas (Garantia de carregamento) - NOVOS LINKS
export const PAGE_IMAGES = {
  trust: "https://images.unsplash.com/photo-1605218427360-6dd24bfa9e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Mecânico confiável
  exhaust: "https://images.unsplash.com/photo-1504222490245-4876363b5771?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Escapamento/Chassis
  workshop: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Oficina Geral
};

export const SERVICES: ServiceItem[] = [
  { id: '1', title: 'Escapamentos', description: 'Manutenção, solda e troca completa de sistemas de exaustão e catalisadores.', iconName: 'Wind' },
  { id: '2', title: 'Freios', description: 'Troca de pastilhas, discos, fluido e manutenção de ABS.', iconName: 'Disc' },
  { id: '3', title: 'Embreagens', description: 'Diagnóstico de patinação e substituição de kits de embreagem.', iconName: 'CircleDot' },
  { id: '4', title: 'Troca de Óleo', description: 'Lubrificantes sintéticos e minerais de alta performance com troca de filtros.', iconName: 'Droplet' },
  { id: '5', title: 'Suspensão', description: 'Amortecedores, molas, pivôs e buchas para conforto e estabilidade.', iconName: 'Activity' },
  { id: '6', title: 'Alinhamento 3D', description: 'Ajuste preciso dos ângulos das rodas para evitar desgaste de pneus.', iconName: 'MoveHorizontal' },
  { id: '7', title: 'Balanceamento', description: 'Equilíbrio do conjunto pneu e roda para evitar vibrações.', iconName: 'Circle' },
  { id: '8', title: 'Cambagem', description: 'Ajuste técnico da inclinação vertical das rodas.', iconName: 'Maximize2' },
  { id: '9', title: 'Caster', description: 'Ajuste do ângulo de inclinação do pino mestre da suspensão.', iconName: 'GitCommit' },
  { id: '10', title: 'Correia Dentada', description: 'Substituição preventiva rigorosa para evitar danos graves ao motor.', iconName: 'Settings' },
  { id: '11', title: 'Revisão Geral', description: 'Check-up completo de mais de 30 itens para viagens seguras.', iconName: 'ClipboardCheck' },
  { id: '12', title: 'Escap. Esportivos', description: 'Performance, difusores e ronco diferenciado para seu projeto.', iconName: 'Flame' },
];

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
  "São Braz Velho", "Cidade Industrial", "Vila Verde", "Vila Barigui", "Augusta", "São Miguel", "Caiuá", "Xaxim Velho", 
  "Fazendinha-Portão", "Campo Comprido Velho", "Bacacheri Velho", "Capão da Imbuia Velho", "Pinheirinho Velho", 
  "Vila São Pedro", "Vila Osternack", "Neo Ville", "Vila Formosa", "Vila Sandra", "Conjunto Caiuá", 
  "Conjunto Parigot de Souza", "Vila Reno", "Vila Audi"
];

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
const SORTED_NEIGHBORHOODS = [...NEIGHBORHOODS_LIST].sort((a, b) => a.localeCompare(b));
const SORTED_CITIES = [...CITIES_LIST].sort((a, b) => a.localeCompare(b));

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