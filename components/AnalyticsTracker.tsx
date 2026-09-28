import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView, isAnalyticsEnabled } from '../lib/analytics';

// Tempo para o react-helmet-async aplicar o <title> da nova rota antes do page_view.
const TITLE_SETTLE_MS = 150;

/**
 * Único responsável pelo page_view (primeira abertura + cada mudança de rota).
 * - Timer cancelado no cleanup: StrictMode (dev) e redirecionamentos imediatos
 *   (<Navigate>) não geram page_view duplicado nem da rota intermediária.
 * - trackPageView() também ignora uma segunda chamada para o mesmo location.key.
 */
const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;
    let raf = 0;
    const timer = window.setTimeout(() => {
      raf = window.requestAnimationFrame(() => trackPageView(location.key));
    }, TITLE_SETTLE_MS);
    return () => {
      window.clearTimeout(timer);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [location.key, location.pathname, location.search]);

  return null;
};

export default AnalyticsTracker;
