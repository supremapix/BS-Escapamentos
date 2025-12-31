import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS, COMPANY_INFO } from '../data/constants';
import EnhancedSEO from '../components/EnhancedSEO';
import { Calendar, ChevronLeft, Share2, MessageCircle } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/800x400/1e3a8a/FFFFFF?text=BS+Escapamentos";
    e.currentTarget.alt = "Imagem do artigo";
  };

  return (
    <>
      <EnhancedSEO 
        title={post.title} 
        description={post.excerpt} 
        canonicalPath={`/blog/${post.slug}`}
        image={post.image}
        schemaType="Article" // Customizing schema for articles if EnhancedSEO supported it fully, but generic is fine
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
                 className="prose prose-lg max-w-none text-gray-700 prose-headings:text-primary-dark prose-headings:font-heading prose-a:text-primary-blue"
                 dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }} 
               />
               
               {/* Share / CTA Footer */}
               <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                     <span className="font-bold text-gray-500 flex items-center gap-2"><Share2 size={18} /> Compartilhar:</span>
                     <div className="flex gap-2">
                        {/* Fake Share Buttons for visual */}
                        <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"><Share2 size={16} /></button>
                     </div>
                  </div>
                  
                  <a 
                    href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Li o artigo sobre "${post.title}" e gostaria de agendar um serviço.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1"
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
                   <Link key={p.id} to={`/blog/${p.slug}`} className="bg-white rounded-xl shadow-md p-4 flex gap-4 hover:shadow-lg transition-shadow border border-gray-100 items-center">
                      <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                         <img src={p.image} alt={p.title} className="w-full h-full object-cover" onError={handleImageError} />
                      </div>
                      <div>
                         <h4 className="font-bold text-primary-dark mb-1 line-clamp-2">{p.title}</h4>
                         <p className="text-xs text-gray-500">{p.date}</p>
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