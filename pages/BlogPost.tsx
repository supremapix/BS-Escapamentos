
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS, COMPANY_INFO } from '../data/constants';
import EnhancedSEO from '../components/EnhancedSEO';
import { Calendar, ChevronLeft, Share2, MessageCircle, Facebook, Copy, Check } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const [copied, setCopied] = React.useState(false);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/800x400/1e3a8a/FFFFFF?text=BS+Escapamentos";
    e.currentTarget.alt = "Imagem do artigo";
  };

  const currentUrl = window.location.href;
  const shareText = `Confira este artigo da BS Escapamentos: ${post.title}`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: currentUrl,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <EnhancedSEO 
        title={post.title} 
        description={post.excerpt} 
        canonicalPath={`/blog/${post.slug}`}
        image={post.image}
        schemaType="Article" 
        keywords={`blog automotivo, ${post.title.toLowerCase()}, oficina cic, dicas automotivas curitiba`}
      />
      
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          
          {/* Breadcrumb / Back */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary-blue transition-colors font-medium">
              <ChevronLeft size={20} /> Voltar para o Início
            </Link>
          </div>

          <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header Image */}
            <div className="relative h-64 md:h-96 w-full">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full text-white">
                 <div className="flex items-center gap-2 text-sm font-bold bg-primary-yellow text-primary-dark px-3 py-1 rounded-full inline-block mb-3 w-fit">
                    <Calendar size={14} /> {post.date}
                 </div>
                 <h1 className="text-3xl md:text-5xl font-heading font-black leading-tight text-shadow-lg">
                    {post.title}
                 </h1>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
               <div 
                 className="prose prose-lg max-w-none text-gray-700 prose-headings:text-primary-dark prose-headings:font-heading prose-a:text-primary-blue prose-blockquote:border-primary-yellow"
                 dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }} 
               />
               
               {/* Share / CTA Footer */}
               <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col xl:flex-row items-center justify-between gap-8">
                  
                  {/* Functional Share Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
                     <span className="font-bold text-gray-500 flex items-center gap-2 uppercase tracking-wide text-sm">
                        <Share2 size={16} /> Compartilhar:
                     </span>
                     <div className="flex gap-2">
                        {/* Native/Mobile Share */}
                        <button 
                          onClick={handleNativeShare}
                          className="md:hidden bg-primary-blue text-white p-3 rounded-full hover:bg-blue-800 transition shadow-md"
                          title="Compartilhar"
                        >
                          <Share2 size={18} />
                        </button>

                        {/* WhatsApp (Desktop/Fallback) */}
                        <a 
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden md:flex bg-[#25D366] text-white p-3 rounded-full hover:bg-green-600 transition shadow-md items-center justify-center"
                          title="Compartilhar no WhatsApp"
                        >
                           <MessageCircle size={18} />
                        </a>

                        {/* Facebook (Desktop/Fallback) */}
                        <a 
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden md:flex bg-[#1877F2] text-white p-3 rounded-full hover:bg-blue-700 transition shadow-md items-center justify-center"
                          title="Compartilhar no Facebook"
                        >
                           <Facebook size={18} />
                        </a>

                         {/* Copy Link */}
                         <button 
                          onClick={handleCopyLink}
                          className={`hidden md:flex ${copied ? 'bg-green-500' : 'bg-gray-200'} ${copied ? 'text-white' : 'text-gray-700'} p-3 rounded-full hover:bg-gray-300 transition shadow-md items-center justify-center`}
                          title="Copiar Link"
                        >
                           {copied ? <Check size={18} /> : <Copy size={18} />}
                        </button>
                     </div>
                  </div>
                  
                  <a 
                    href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Li o artigo sobre "${post.title}" e gostaria de agendar um serviço.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full xl:w-auto text-center inline-flex items-center justify-center gap-2 bg-primary-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1 animate-pulse"
                  >
                    <MessageCircle size={20} /> Agendar Revisão Agora
                  </a>
               </div>
            </div>
          </article>

          {/* Related/More Posts */}
          <div className="max-w-4xl mx-auto mt-16">
             <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-primary-yellow pl-4">Veja também</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                   <Link key={p.id} to={`/blog/${p.slug}`} className="bg-white rounded-xl shadow-md p-4 flex gap-4 hover:shadow-lg transition-shadow border border-gray-100 items-center group">
                      <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden relative">
                         <img src={p.image} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" onError={handleImageError} />
                      </div>
                      <div>
                         <h4 className="font-bold text-primary-dark mb-1 line-clamp-2 group-hover:text-primary-blue transition-colors">{p.title}</h4>
                         <p className="text-xs text-gray-500 flex items-center gap-1"><Calendar size={10} /> {p.date}</p>
                      </div>
                   </Link>
                ))}
             </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BlogPost;
