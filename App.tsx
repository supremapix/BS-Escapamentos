import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import StoreShowcase from './components/StoreShowcase';
import AnalyticsTracker from './components/AnalyticsTracker';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import MaintenanceHub from './pages/MaintenanceHub';
import Areas from './pages/Areas';
import Contact from './pages/Contact';
import LocationPage from './pages/LocationPage';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isNotFoundPage = location.pathname !== '/' && 
    !['/manutencao-automotiva-curitiba', '/servicos', '/sobre', '/areas', '/contato'].includes(location.pathname) &&
    !location.pathname.startsWith('/servicos/') &&
    !location.pathname.startsWith('/local/') &&
    !location.pathname.startsWith('/blog/');

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-900">
      <ScrollToTop />
      <AnalyticsTracker />
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manutencao-automotiva-curitiba" element={<MaintenanceHub />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/servicos/:slug" element={<ServiceDetail />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/local/:slug" element={<LocationPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Destaque das fotos e estrutura da loja em todas as páginas */}
      {!isNotFoundPage && <StoreShowcase />}

      <FloatingActions />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
