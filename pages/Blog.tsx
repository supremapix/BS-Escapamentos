import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  Wrench, 
  Flame, 
  ShieldCheck, 
  BookOpen, 
  Phone, 
  MessageCircle, 
  Filter,
  CheckCircle2
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { COMPANY_INFO } from '../data/constants';
import EnhancedSEO from '../components/EnhancedSEO';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'escapamentos' | 'manutencao'>('all');

  const categories = [
    { id: 'all', label: `Todos os Artigos (${BLOG_POSTS.length})` },
    { 
      id: 'escapamentos', 
      label: `Escapamentos & Catalisadores (${BLOG_POSTS.filter(p => p.category === 'Escapamentos' || p.slug.includes('escapamento') || p.slug.includes('silencioso') || p.slug.includes('catalisador')).length})` 
    },
    { 
      id: 'manutencao', 
      label: `Manutenção Mecânica & Suspensão (${BLOG_POSTS.filter(p => p.category !== 'Escapamentos' && !p.slug.includes('escapamento') && !p.slug.includes('silencioso') && !p.slug.includes('catalisador')).length})` 
    }
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const isEscapamento = post.category === 'Escapamentos' || 
        post.slug.includes('escapamento') || 
        post.slug.includes('silencioso') || 
        post.slug.includes('catalisador');

      // Category filter
      if (selectedCategory === 'escapamentos' && !isEscapamento) return false;
      if (selectedCategory === 'manutencao' && isEscapamento) return false;

      // Search term filter
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchesTitle = post.title.toLowerCase().includes(term);
        const matchesExcerpt = post.excerpt.toLowerCase().includes(term);
        const matchesKeywords = post.keywords?.some(k => k.toLowerCase().includes(term));
        return matchesTitle || matchesExcerpt || Boolean(matchesKeywords);
      }

      return true;
    });
  }, [searchTerm, selectedCategory]);

  // Featured post (latest strategic post)
  const featuredPost = BLOG_POSTS.find(p => p.slug === 'escapamento-automotivo-em-curitiba-sinais-e-manutencao') || BLOG_POSTS[0];

  return (
    <>
      <EnhancedSEO
        title="Blog & Guias Automotivos em Curitiba | BS CAR CENTER"
        description="Artigos técnicos, diagnósticos e orientações sobre escapamentos, catalisadores, suspensão, freios e manutenção automotiva em Curitiba com a equipe da BS CAR CENTER."
        canonicalPath="/blog"
        schemaType="WebPage"
        keywords={[
          'blog automotivo curitiba',
          'dicas de escapamento curitiba',
          'catalisador curitiba',
          'silencioso automotivo curitiba',
          'manutencao preventiva curitiba',
          'bs car center blog'
        ]}
      />

      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        {/* Top Hero Section */}
        <section className="bg-primary-dark text-white py-12 md:py-16 border-b-4 border-primary-yellow">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 bg-primary-yellow text-primary-dark text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                <BookOpen size={13} />
                <span>Central de Conhecimento Automotivo</span>
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black leading-tight text-white mb-4">
                Blog & Orientações Técnicas em Curitiba
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Guias práticos elaborados pela equipe da <strong>BS CAR CENTER</strong> (Novo Mundo / CIC) para motoristas de Curitiba. Tire dúvidas sobre escapamentos, ruídos, catalisadores, suspensão e manutenção preventiva sem segredos.
              </p>

              {/* Quick links banner */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300 pt-2 border-t border-white/10">
                <span className="text-primary-yellow font-bold">Acesso rápido:</span>
                <Link to="/escapamentos-curitiba" className="hover:text-primary-yellow underline">
                  Página de Escapamentos
                </Link>
                <span>•</span>
                <Link to="/manutencao-automotiva-curitiba" className="hover:text-primary-yellow underline">
                  Manutenção Geral
                </Link>
                <span>•</span>
                <Link to="/contato" className="hover:text-primary-yellow underline">
                  Contato e Localização
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl mt-8 md:mt-12">
          {/* Featured Post Hero Card */}
          {featuredPost && !searchTerm && selectedCategory === 'all' && (
            <div className="mb-12">
              <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-yellow text-primary-dark text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                        Artigo em Destaque
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="font-bold text-primary-blue bg-blue-50 px-2.5 py-0.5 rounded-full">
                          {featuredPost.category || 'Escapamentos'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} />
                          {featuredPost.date}
                        </span>
                        {featuredPost.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock size={13} />
                            {featuredPost.readTime}
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-heading font-black text-gray-900 leading-snug mb-3 hover:text-primary-blue transition-colors">
                        <Link to={`/blog/${featuredPost.slug}`}>
                          {featuredPost.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 bg-primary-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all self-start shadow-sm"
                    >
                      <span>Ler Guia Completo</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search and Category Filter Bar */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as any)}
                    className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-primary-blue text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative min-w-[240px] md:w-72">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artigo ou sintoma..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Result Count */}
          <div className="flex items-center justify-between mb-6 px-1">
            <span className="text-xs text-gray-500 font-medium">
              Mostrando <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'artigo' : 'artigos'}
              {searchTerm && ` para "${searchTerm}"`}
            </span>
            {selectedCategory === 'escapamentos' && (
              <span className="text-xs text-primary-blue font-bold flex items-center gap-1">
                <Flame size={14} /> 8 matérias completas de escapamento
              </span>
            )}
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 my-8">
              <Search size={40} className="mx-auto text-gray-300 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Nenhum artigo encontrado</h3>
              <p className="text-xs text-gray-500 mb-4">
                Não encontramos resultados para sua busca. Tente buscar por outros termos como "escapamento", "catalisador" ou "suspensão".
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="bg-primary-blue text-white text-xs font-bold py-2 px-4 rounded-xl hover:bg-blue-800 transition-colors"
              >
                Limpar filtros de busca
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const isEscapamento = post.category === 'Escapamentos' || 
                  post.slug.includes('escapamento') || 
                  post.slug.includes('silencioso') || 
                  post.slug.includes('catalisador');

                return (
                  <article 
                    key={post.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="h-48 overflow-hidden relative bg-gray-100">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 flex gap-1.5">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${
                            isEscapamento
                              ? 'bg-amber-400 text-slate-950'
                              : 'bg-primary-blue text-white'
                          }`}>
                            {post.category || (isEscapamento ? 'Escapamentos' : 'Manutenção')}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-2.5">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} className="text-primary-blue" />
                            {post.date}
                          </span>
                          {post.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock size={12} className="text-gray-400" />
                              {post.readTime}
                            </span>
                          )}
                        </div>

                        <h3 className="font-heading font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-primary-blue transition-colors line-clamp-2">
                          <Link to={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Link */}
                    <div className="p-5 pt-0 border-t border-gray-50 mt-auto">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-primary-blue font-bold text-xs inline-flex items-center gap-1.5 hover:text-primary-dark group-hover:translate-x-1 transition-all"
                      >
                        <span>Ler orientações completas</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Bottom Diagnostic & Booking CTA */}
          <section className="mt-16 bg-gradient-to-r from-primary-dark via-slate-900 to-primary-dark rounded-3xl p-8 sm:p-10 text-white border-t-4 border-primary-yellow shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary-yellow text-xs font-black uppercase tracking-wider block mb-2">
                Atendimento Técnico no Novo Mundo e CIC
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black mb-3 text-white">
                Seu carro apresentou algum destes sintomas?
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Não arrisque rodar com ruídos no escapamento, catalisador obstruído ou instabilidade na suspensão. Traga seu veículo para um diagnóstico presencial na R. Pedro Gusso, 2340 e 2324 em Curitiba.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3.5">
                <a
                  href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Estava lendo os artigos no site da BS CAR CENTER e gostaria de agendar uma avaliação.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-green hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 active:scale-95"
                >
                  <MessageCircle size={16} />
                  <span>Chamar no WhatsApp</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-primary-yellow hover:bg-yellow-400 text-primary-dark font-black py-3 px-6 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 active:scale-95"
                >
                  <Phone size={16} />
                  <span>Ligar para a Loja: {COMPANY_INFO.phone}</span>
                </a>
                <Link
                  to="/escapamentos-curitiba"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all border border-white/20 flex items-center gap-2"
                >
                  <span>Página de Escapamentos</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blog;
