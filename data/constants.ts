
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
export const HERO_IMAGES = [
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

export const BLOG_POSTS = [
  {
    id: 101,
    slug: "dicas-manutencao-automotiva-2025",
    title: "Guia 2025: O Que Muda na Manutenção do Seu Carro",
    excerpt: "Novas tecnologias exigem novos cuidados. Confira as dicas essenciais para manter seu veículo valorizado em 2025.",
    date: "10 Jan 2025",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Manutenção Automotiva em 2025: A Era da Eletrônica</h2>
      <p>O ano de 2025 chegou consolidando uma tendência irreversível: a integração total entre mecânica e eletrônica. Quem mora no <strong>CIC e Neo Ville</strong> já percebeu que até os carros populares estão repletos de sensores. Mas o que isso muda na sua rotina de manutenção?</p>

      <h3>1. Diagnóstico por Scanner é Obrigatório</h3>
      <p>Esqueça o "achismo". Em 2025, tentar adivinhar o problema do carro pode custar caro. Sistemas de injeção direta e sensores de oxigênio (sonda lambda) de banda larga exigem equipamentos de ponta.</p>
      <ul>
        <li><strong>Dica BS:</strong> Nossa oficina no Novo Mundo atualizou todos os softwares de scanner para os protocolos 2025.</li>
      </ul>

      <h3>2. Óleos de Baixa Viscosidade (0W-20 e 0W-16)</h3>
      <p>Para cumprir as normas de emissões, os motores estão trabalhando com folgas menores. O uso de óleos finos é crucial. Usar um óleo 15W-40 num motor projetado para 0W-20 pode fundir o motor em poucos meses.</p>

      <h3>3. Catalisadores de Alta Eficiência</h3>
      <p>Com a fiscalização ambiental mais rígida em Curitiba, o catalisador se tornou peça de ouro. Roubos aumentaram e a troca por peças paralelas baratas está reprovando carros em vistorias. Invista em peças homologadas.</p>

      <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-primary-blue my-6">
        <h4 class="font-bold text-primary-dark mb-2">Checklist Rápido 2025:</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          <li>Verificar atualização de software da ECU.</li>
          <li>Checar saúde da bateria (Start-Stop exige muito mais).</li>
          <li>Alinhamento 3D a cada 10.000km devido aos buracos das chuvas recentes.</li>
        </ul>
      </div>
    `
  },
  {
    id: 102,
    slug: "previsoes-automotivas-2026",
    title: "Futuro 2026: Previsões para o Setor Automotivo",
    excerpt: "Híbridos populares, fim dos carros manuais e novas leis de ruído. Saiba o que esperar para 2026.",
    date: "15 Jan 2025",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>O Que Nos Espera em 2026?</h2>
      <p>Olhando para o horizonte de 2026, o mercado automotivo brasileiro e, especificamente, a realidade de Curitiba, passarão por transformações profundas. Baseado em dados da indústria e tendências legislativas, preparamos este dossiê.</p>

      <h3>1. O "Boom" dos Híbridos Usados</h3>
      <p>Prevemos que em 2026, a manutenção de híbridos deixará de ser nicho. Oficinas como a <strong>BS Escapamentos</strong> já estão se equipando para lidar com sistemas de alta voltagem e manutenção de sistemas de freios regenerativos.</p>

      <h3>2. Leis de Ruído Mais Rígidas (Lei do Silêncio 2.0)</h3>
      <p>A tendência é que radares acústicos (já em teste na Europa) cheguem às grandes capitais brasileiras. Isso impacta diretamente quem gosta de escapamentos esportivos.</p>
      <p><strong>A Solução:</strong> O uso de <em>Difusores Eletrônicos</em> de alta qualidade. Eles permitem fechar a válvula via controle remoto ou aplicativo, tornando o carro silencioso em áreas residenciais (como o Neo Ville) e esportivo na estrada.</p>

      <h3>3. O Fim do Câmbio Manual?</h3>
      <p>As montadoras estão descontinuando caixas manuais até em modelos de entrada. Isso significa que a manutenção de embreagem tradicional diminuirá, dando lugar à troca de fluido de câmbio automático e DSG.</p>

      <blockquote class="border-l-4 border-primary-yellow pl-4 italic text-gray-600 my-6">
        "Quem não se adaptar à eletrônica embarcada e à gestão térmica dos motores modernos ficará para trás. 2026 será o ano da oficina tecnológica."
      </blockquote>

      <h3>Prepare-se Hoje</h3>
      <p>Não espere 2026 chegar para cuidar do seu carro. A valorização do veículo na revenda dependerá de um histórico de manutenção impecável e digitalizado.</p>
    `
  },
  {
    id: 1,
    slug: "legislacao-ruido-escapamento-curitiba-2024",
    title: "Nova Legislação de Ruído 2024",
    excerpt: "Saiba como evitar multas em Curitiba com as novas regras para escapamentos esportivos.",
    date: "12 Mar 2024",
    image: "https://placehold.co/600x400/1e3a8a/FFFFFF?text=Legislação+de+Ruído",
    content: `
      <h2>Fique atento às normas de ruído em Curitiba e Região do CIC</h2>
      <p>Com o aumento da fiscalização em Curitiba, especialmente em bairros como <strong>CIC, Neo Ville e Novo Mundo</strong>, muitos motoristas estão sendo surpreendidos com multas relacionadas ao ruído excessivo do escapamento. A legislação de 2024 trouxe critérios mais rígidos baseados na resolução do CONTRAN.</p>
      
      <h3>O que diz a lei?</h3>
      <p>A alteração no sistema de escapamento é permitida, desde que não ultrapasse os limites de decibéis estipulados no manual do fabricante do veículo. Em Curitiba, a Polícia Militar e a Guarda Municipal têm intensificado blitz com decibelímetros.</p>
      
      <h3>Escapamento Esportivo é Proibido?</h3>
      <p>Não necessariamente. O uso de abafadores esportivos e ponteiras é legal, contanto que o nível de ruído se mantenha dentro da tolerância. Na <strong>BS Escapamentos</strong>, realizamos a instalação de difusores e sistemas esportivos que permitem controlar o ruído, garantindo a diversão na pista e o silêncio necessário em áreas residenciais como o Neo Ville.</p>
      
      <h3>Dicas para não ser multado:</h3>
      <ul>
        <li>Mantenha o catalisador original ou use um esportivo de alta performance.</li>
        <li>Evite remover totalmente os abafadores (diretão) para uso urbano.</li>
        <li>Faça um teste de ruído conosco antes de sair rodando.</li>
      </ul>
      
      <p>Se você mora no CIC ou região e quer customizar seu carro dentro da lei, venha conversar com nossos especialistas.</p>
    `
  },
  {
    id: 2,
    slug: "sinais-catalisador-ruim",
    title: "5 Sinais do Catalisador Ruim",
    excerpt: "Perda de potência e aumento de consumo? Veja se é hora de trocar seu catalisador.",
    date: "05 Abr 2024",
    image: "https://placehold.co/600x400/1e3a8a/FFFFFF?text=Catalisador+Problemas",
    content: `
      <h2>Seu carro está bebendo muito? Pode ser o catalisador.</h2>
      <p>O catalisador é uma peça fundamental para o controle de emissões e para o bom funcionamento do motor. Moradores do <strong>CIC e Curitiba</strong> enfrentam trânsito pesado, o que pode acelerar o desgaste dessa peça.</p>
      
      <h3>Sinais de alerta:</h3>
      <ol>
        <li><strong>Luz da Injeção Acesa:</strong> O sinal mais comum no painel.</li>
        <li><strong>Aumento no Consumo:</strong> O carro precisa injetar mais combustível para tentar compensar leituras erradas dos sensores.</li>
        <li><strong>Perda de Potência:</strong> O carro "amarra" em subidas, comum nas ladeiras do Novo Mundo e Portão.</li>
        <li><strong>Cheiro Forte:</strong> Odor de "ovo podre" saindo do escapamento.</li>
        <li><strong>Barulho de Peças Soltas:</strong> Se ouvir algo chacoalhando embaixo do carro, a cerâmica interna pode ter quebrado.</li>
      </ol>
      
      <h3>Onde trocar no Neo Ville?</h3>
      <p>Nunca remova o catalisador sem colocar outro no lugar. Além de ser crime ambiental, desregula todo o sistema eletrônico do carro. Na <strong>BS Escapamentos</strong>, trabalhamos com catalisadores universais e originais homologados pelo INMETRO, com o melhor preço da região do CIC.</p>
    `
  },
  {
    id: 3,
    slug: "revisao-ferias-checklist",
    title: "Revisão de Férias: Checklist",
    excerpt: "Vai viajar saindo do CIC? Confira os itens essenciais para revisar antes da estrada.",
    date: "20 Mai 2024",
    image: "https://placehold.co/600x400/1e3a8a/FFFFFF?text=Revisão+de+Férias",
    content: `
      <h2>Vai pegar a BR-376 ou BR-277? Revise antes!</h2>
      <p>As férias estão chegando e quem mora em Curitiba sabe: a descida para a serra ou a ida para o interior exige freios e suspensão em dia. Sair do <strong>CIC</strong> sem revisar o carro é um risco para sua família.</p>
      
      <h3>Checklist Essencial BS Escapamentos:</h3>
      <ul>
        <li><strong>Freios:</strong> Verificação da espessura das pastilhas e condição dos discos. Em serras, o freio é vital.</li>
        <li><strong>Pneus e Alinhamento:</strong> O asfalto irregular de Curitiba desalinha o carro facilmente. Faça o alinhamento 3D para evitar desgaste prematuro na viagem.</li>
        <li><strong>Óleo e Fluidos:</strong> Verifique o nível do óleo, fluido de freio e, principalmente, a água do radiador.</li>
        <li><strong>Escapamento:</strong> Um escapamento furado pode jogar gases tóxicos para dentro da cabine durante viagens longas com vidros fechados.</li>
      </ul>
      
      <p>Não deixe para a última hora. Nossa oficina no Novo Mundo (próximo ao Neo Ville) oferece revisão expressa para você viajar tranquilo.</p>
    `
  },
  {
    id: 4,
    slug: "escapamento-inox-aco-carbono",
    title: "Escapamento Inox vs Aço Carbono",
    excerpt: "Entenda as diferenças de durabilidade e performance para o seu projeto automotivo.",
    date: "15 Jun 2024",
    image: "https://placehold.co/600x400/1e3a8a/FFFFFF?text=Inox+vs+Carbono",
    content: `
      <h2>Qual o melhor material para o clima de Curitiba?</h2>
      <p>Curitiba é conhecida por seu clima úmido e frio. Isso é um inimigo natural dos metais. Quem vive no <strong>CIC</strong> ou qualquer bairro da capital paranaense sabe que a ferrugem ataca rápido.</p>
      
      <h3>Aço Carbono (Galvanizado)</h3>
      <p>É o material original da maioria dos carros. É mais barato, mas tem menor durabilidade. Em Curitiba, um escapamento de aço carbono dura em média 2 a 3 anos devido à umidade.</p>
      
      <h3>Aço Inoxidável (Inox)</h3>
      <p>O sonho de consumo dos entusiastas. O Inox 304 não enferruja, mantém o brilho e dissipa melhor o calor.
      <br><strong>Vantagens:</strong>
      <br>- Durabilidade vitalícia (praticamente eterno).
      <br>- Ronco mais encorpado e metálico.
      <br>- Estética superior (ponteiras azuis, polidas, etc).</p>
      
      <h3>Veredito BS Escapamentos</h3>
      <p>Se você planeja ficar muito tempo com o carro ou quer performance, invista no Inox. Aqui na BS, fabricamos downpipes e catbacks em Inox sob medida para clientes exigentes do Neo Ville e toda Curitiba.</p>
    `
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
    text: "Rápido e preço justo. Fiz a revisão de freios e troca de óleo. O carro ficou ótimo e me entregaram no prazo combinado. Atendimento nota 10.",
    stars: 5
  },
  {
    name: "Roberto Almeida",
    location: "Capão Raso",
    text: "A melhor oficina de escapamentos da região sul de Curitiba. Instalaram um difusor no meu carro e o acabamento ficou impecável. Nota 10!",
    stars: 5
  },
  {
    name: "Juliana Costa",
    location: "Pinheirinho",
    text: "Levei meu carro fazendo um barulho horrível. Diagnosticaram que era só uma borracha solta e resolveram na hora. Honestidade rara hoje em dia.",
    stars: 5
  },
  {
    name: "Marcos Vinicius",
    location: "Fazendinha",
    text: "Preço bom e peças de qualidade. Fiz toda a suspensão e alinhamento 3D. O carro parece zero km novamente. Valeu a pena vir até o Novo Mundo.",
    stars: 5
  },
  {
    name: "Eduardo Silva",
    location: "Neo Ville",
    text: "Moro aqui no Neo Ville e sempre tive dificuldade de achar mecânico de confiança. A BS me surpreendeu. Serviço limpo e transparente.",
    stars: 5
  },
  {
    name: "Beatriz Ferreira",
    location: "Cidade Industrial (CIC)",
    text: "Fui indicada por um amigo do trabalho no CIC. Troquei o catalisador e a luz da injeção apagou na hora. Preço bem melhor que na concessionária.",
    stars: 5
  },
  {
    name: "Jorge Mathias",
    location: "Xaxim",
    text: "Instalei um Catback em inox. O ronco ficou animal! A solda Tig deles é uma obra de arte. Recomendo pra quem curte carro preparado.",
    stars: 5
  },
  {
    name: "Ana Paula",
    location: "Condomínio Neo Ville",
    text: "Atendimento diferenciado. Explicaram tudo o que precisava ser feito no meu carro sem 'empurrar' serviços extras. Ganharam minha confiança.",
    stars: 5
  },
  {
    name: "Felipe Rodrigues",
    location: "Portão",
    text: "Fica pertinho do CIC, acesso super fácil. Fiz revisão de férias e fui para a praia tranquilo. O carro não deu um pio.",
    stars: 5
  },
  {
    name: "Sérgio Gomes",
    location: "Cidade Industrial",
    text: "Oficina top! Equipamentos novos e equipe que entende do assunto. Resolveram um barulho na suspensão que ninguém achava.",
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
