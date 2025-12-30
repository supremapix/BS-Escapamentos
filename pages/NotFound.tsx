import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO 
        title="Página Não Encontrada" 
        description="A página que você está procurando não existe ou foi movida." 
      />
      
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 pt-24 pb-12 px-4">
        <div className="text-center max-w-lg mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <div className="bg-red-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={48} className="text-primary-red" />
            </div>
            
            <h1 className="text-6xl font-heading font-black text-primary-dark mb-2">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Página não encontrada</h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ops! Parece que você tentou acessar uma rota que não existe. 
              O link pode estar quebrado ou a página pode ter sido removida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-primary-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:-translate-y-1"
              >
                <Home size={20} />
                Ir para o Início
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-primary-blue text-gray-700 hover:text-primary-blue font-bold py-3 px-8 rounded-full transition-all"
              >
                <ArrowLeft size={20} />
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;