import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS, COMPANY_INFO } from '../data/constants';
import EnhancedSEO from '../components/EnhancedSEO';
import { Calendar, ChevronLeft, Share2, MessageCircle, Copy, Check, ArrowRight } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const currentUrl = window.location.href;
  const shareText = `Confira este artigo da BS CAR CENTER: ${post.title}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const isEscapamento = post.category === 'Escapamentos' || post.slug.includes('escapamento') || post.slug.includes('silencioso') || post.slug.includes('catalisador');
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id && (isEscapamento ? (p.category === 'Escapamentos' || p.slug.includes('escapamento') || p.slug.includes('catalisador')) : true)).slice(0, 4);

  return (
    <>
      <EnhancedSEO 
        title={post.metaTitle || `${post.title} | BS CAR CENTER`}
        description={post.metaDescription || post.excerpt} 
        canonicalPath={`/blog/${post.slug}`}
        image={post.image}
        schemaType="Article" 
        keywords={post.keywords ? post.keywords.join(', ') : `escapamentos curitiba, ${post.title.toLowerCase()}, auto center novo mundo`}
        articleData={{
          headline: post.title,
          datePublished: post.datePublished || "2026-03-01",
          dateModified: post.dateModified || post.datePublished || "2026-03-01",
          category: post.category || (isEscapamento ? "Escapamentos" : "Manutenção Automotiva"),
          authorName: "BS CAR CENTER"
        }}
      />
      
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Back link and breadcrumbs */}
          <div className="mb-6 flex items-center justify-between">
            <Link to="/" className="inline-flex items-center text-xs text-gray-500 hover:text-primary-blue font-semibold">
              <ChevronLeft size={16} /> Voltar para o Início
            </Link>
            {isEscapamento && (
              <Link to="/escapamentos-curitiba" className="text-xs text-primary-blue hover:underline font-semibold">
                Ver Oficina de Escapamentos em Curitiba →
              </Link>
            )}
          </div>

          <article className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden mb-12">
            
            {/* Header Image */}
            <div className="relative h-64 md:h-80 w-full">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-white">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold bg-primary-yellow text-primary-dark px-3 py-1 rounded-full">
                    <Calendar size={13} />
                    <span>{post.date}</span>
                  </div>
                  {post.category && (
                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  )}
                  {post.readingTime && (
                    <span className="text-xs text-gray-300">
                      • {post.readingTime} de leitura
                    </span>
                  )}
                </div>
                <h1 className="text-2xl md:text-4xl font-heading font-black leading-tight text-white drop-shadow">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-10">
              <div 
                className="prose max-w-none text-gray-700 leading-relaxed text-sm md:text-base space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }} 
              />
              
              {/* Share & WhatsApp CTA */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                    <Share2 size={14} /> Compartilhar:
                  </span>
                  
                  <a 
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                    title="WhatsApp"
                  >
                    <MessageCircle size={15} />
                  </a>

                  <button 
                    onClick={handleCopyLink}
                    className={`p-2 rounded-full transition text-xs flex items-center gap-1 ${copied ? 'bg-primary-green text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    title="Copiar Link"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                </div>

                <a 
                  href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Li o artigo "${post.title}" no site e gostaria de agendar um atendimento.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary-green hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded-full inline-flex items-center gap-2 text-xs shadow"
                >
                  <MessageCircle size={16} /> Falar com Nossa Equipe
                </a>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-xl font-heading font-bold text-primary-dark mb-4">
                Outras Orientações Automotivas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/blog/${rel.slug}`}
                    className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-primary-blue hover:shadow-sm transition-all flex gap-4 items-center group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary-blue transition-colors line-clamp-2">
                        {rel.title}
                      </h3>
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <Calendar size={10} /> {rel.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default BlogPost;
