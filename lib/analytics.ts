/**
 * Google Analytics 4 — BS CAR CENTER
 * ---------------------------------------------------------------------------
 * Implementação única via gtag.js (o projeto não tinha GA, GTM nem dataLayer).
 *
 * Measurement ID: variável de ambiente VITE_GA4_MEASUREMENT_ID (ex.: G-XXXXXXXXXX),
 * definida em `.env.local` (dev) ou em Vercel → Project → Settings → Environment
 * Variables (produção). Sem o ID, toda a camada vira no-op: nada é carregado.
 *
 * Regras:
 * - page_view é enviado SOMENTE por trackPageView() (send_page_view: false).
 * - Cliques comerciais são capturados por UM único listener global
 *   (delegação no document), sem listeners específicos nos componentes.
 * - Formulários chamam trackFormSubmit() apenas após validação bem-sucedida.
 * - Proteção contra duplicidade de ~1.500 ms por evento/destino.
 * - Nenhum dado digitado pelo usuário é enviado (nome, telefone, e-mail,
 *   mensagem, placa, CPF etc.). URLs do WhatsApp são enviadas sem o
 *   parâmetro `text`.
 *
 * Consentimento: o site não possui banner/CMP. Quando existir, integre em
 * `applyConsentDefaults()` (Consent Mode v2: gtag('consent','default',...) antes
 * do config e gtag('consent','update',...) quando o usuário aceitar).
 */

import { SERVICES } from '../data/constants';

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Measurement ID é público (aparece no HTML de qualquer site com GA). A env var tem
// prioridade; o fallback garante funcionamento no preview do AI Studio, onde
// import.meta.env pode não existir.
const DEFAULT_MEASUREMENT_ID = 'G-6HCDNNYJ1C';
const ENV = ((import.meta as unknown as { env?: Record<string, string | undefined> }).env) || {};
const RAW_ID = (ENV.VITE_GA4_MEASUREMENT_ID || DEFAULT_MEASUREMENT_ID).trim();
export const GA_MEASUREMENT_ID = /^G-[A-Z0-9]{4,}$/i.test(RAW_ID) ? RAW_ID.toUpperCase() : '';
const DEBUG_MODE = String(ENV.VITE_GA4_DEBUG ?? '').toLowerCase() === 'true';
const DEDUPE_MS = 1500;

let initialized = false;
let clickListenerAttached = false;
let lastPageViewKey: string | null = null;
let lastPageLocation: string | null = null;
const recentEvents = new Map<string, number>();

export const isAnalyticsEnabled = (): boolean =>
  typeof window !== 'undefined' && GA_MEASUREMENT_ID !== '';

/** Ponto único para integrar um mecanismo de consentimento no futuro. */
function applyConsentDefaults(): void {
  // Sem banner de consentimento no projeto hoje — nada é bloqueado.
  // Exemplo futuro (Consent Mode v2):
  // window.gtag?.('consent', 'default', {
  //   ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  //   analytics_storage: 'denied', wait_for_update: 500,
  // });
}

export function initAnalytics(): void {
  if (initialized || !isAnalyticsEnabled()) return;
  // Evita segunda instalação caso outro gtag/GTM seja adicionado no futuro.
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
    initialized = true;
  }

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      // gtag.js exige o objeto `arguments`, não um array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
  }

  if (!initialized) {
    applyConsentDefaults();
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false,
      ...(DEBUG_MODE ? { debug_mode: true } : {}),
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    initialized = true;
  }

  attachClickListener();
}

function isDuplicate(key: string): boolean {
  const now = Date.now();
  const last = recentEvents.get(key);
  recentEvents.set(key, now);
  if (recentEvents.size > 50) {
    for (const [k, t] of recentEvents) if (now - t > DEDUPE_MS) recentEvents.delete(k);
  }
  return last !== undefined && now - last < DEDUPE_MS;
}

function send(eventName: string, params: GtagParams): void {
  if (!isAnalyticsEnabled() || !window.gtag) return;
  const clean: GtagParams = {};
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== '') clean[k] = v;
  window.gtag('event', eventName, clean);
}

/** Envia exatamente um page_view por navegação (chave = location.key do React Router). */
export function trackPageView(navigationKey: string): void {
  if (!isAnalyticsEnabled()) return;
  const pageLocation = window.location.href;
  const dedupeKey = `${navigationKey}|${window.location.pathname}${window.location.search}`;
  if (lastPageViewKey === dedupeKey) return;
  lastPageViewKey = dedupeKey;

  send('page_view', {
    page_location: pageLocation,
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
    page_referrer: lastPageLocation ?? document.referrer,
  });
  lastPageLocation = pageLocation;
}

// ---------------------------------------------------------------------------
// Eventos comerciais
// ---------------------------------------------------------------------------

type LeadSource = 'whatsapp' | 'telefone' | 'formulario';

function pageContext(): GtagParams {
  return { page_location: window.location.href, page_title: document.title };
}

function sendLead(source: LeadSource, extra: GtagParams = {}): void {
  send('generate_lead', { lead_source: source, ...pageContext(), ...extra });
}

/** Chamar SOMENTE após o envio válido do formulário. Não envia campos digitados. */
export function trackFormSubmit(formId: string): void {
  if (!isAnalyticsEnabled()) return;
  if (isDuplicate(`envio_formulario|${formId}`)) return;
  send('envio_formulario', { form_id: formId, ...pageContext() });
  sendLead('formulario', { form_id: formId });
}

const SERVICE_NAMES: Record<string, string> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s.title])
);

const WHATSAPP_HOSTS = ['api.whatsapp.com', 'wa.me', 'web.whatsapp.com', 'whatsapp.com'];
const MAPS_RE = /(^|\.)(waze\.com)$|^maps\.app\.goo\.gl$|^goo\.gl$|^maps\.google\./i;
const ROUTE_TEXT_RE = /como chegar|tra[çc]ar rota|ver rota|abrir (no )?(google )?maps?|ver no mapa/i;
const QUOTE_TEXT_RE = /or[çc]amento/i;

function textOf(el: Element): string {
  const text = (el as HTMLElement).innerText || el.textContent || '';
  const label = el.getAttribute('aria-label') || '';
  return (text.replace(/\s+/g, ' ').trim() || label.trim()).slice(0, 100);
}

function contextOf(el: Element): string | undefined {
  const explicit = el.closest('[data-ga-context]')?.getAttribute('data-ga-context');
  if (explicit) return explicit;
  if (el.closest('header')) return 'header';
  if (el.closest('footer')) return 'footer';
  if (el.closest('main')) return 'conteudo';
  return undefined;
}

/** Remove texto pré-preenchido/qualquer query do link de WhatsApp (só mantém phone). */
function sanitizeWhatsAppUrl(url: URL): string {
  if (url.hostname === 'wa.me') return `${url.origin}${url.pathname}`;
  const phone = url.searchParams.get('phone');
  return phone ? `${url.origin}${url.pathname}?phone=${phone}` : `${url.origin}${url.pathname}`;
}

function isGoogleMaps(url: URL): boolean {
  if (url.hostname === 'goo.gl') return url.pathname.startsWith('/maps');
  if (/(^|\.)google\.[a-z.]+$/i.test(url.hostname)) return url.pathname.startsWith('/maps');
  return MAPS_RE.test(url.hostname);
}

function handleClick(event: MouseEvent): void {
  const target = event.target as Element | null;
  if (!target || typeof target.closest !== 'function') return;
  const el = target.closest('a[href], button, [data-ga-event]');
  if (!el) return;

  const text = textOf(el);
  const forced = el.getAttribute('data-ga-event');
  const href = el.getAttribute('href') || '';
  let url: URL | null = null;
  try {
    url = href ? new URL(href, window.location.href) : null;
  } catch {
    url = null;
  }

  // 1) WhatsApp (somente links com o número da empresa — links de "compartilhar" são ignorados)
  if (url && WHATSAPP_HOSTS.includes(url.hostname)) {
    const hasPhone = url.hostname === 'wa.me' ? url.pathname.length > 1 : !!url.searchParams.get('phone');
    if (!hasPhone) return;
    const linkUrl = sanitizeWhatsAppUrl(url);
    if (isDuplicate(`clique_whatsapp|${linkUrl}`)) return;
    send('clique_whatsapp', { link_url: linkUrl, link_text: text, location_context: contextOf(el), ...pageContext() });
    sendLead('whatsapp', { link_url: linkUrl });
    return;
  }

  // 2) Telefone
  if (url && url.protocol === 'tel:') {
    const linkUrl = `tel:${url.pathname.replace(/[^0-9+]/g, '')}`;
    if (isDuplicate(`clique_telefone|${linkUrl}`)) return;
    send('clique_telefone', { link_url: linkUrl, link_text: text, location_context: contextOf(el), ...pageContext() });
    sendLead('telefone', { link_url: linkUrl });
    return;
  }

  // 3) Como chegar (Google Maps, Waze, botões "Como chegar") — NUNCA gera generate_lead
  const isMapLink = !!url && /^https?:$/.test(url.protocol) && isGoogleMaps(url);
  if (forced === 'como_chegar' || isMapLink || ROUTE_TEXT_RE.test(text)) {
    const linkUrl = url ? url.href : '';
    const destination = url && /waze\.com$/i.test(url.hostname) ? 'waze' : isMapLink ? 'google_maps' : 'pagina_contato';
    if (isDuplicate(`clique_como_chegar|${linkUrl}|${text}`)) return;
    send('clique_como_chegar', { link_url: linkUrl, link_text: text, destination, location_context: contextOf(el), ...pageContext() });
    return;
  }

  // 4) Serviço (links internos /servicos/:slug)
  const serviceMatch = url && url.origin === window.location.origin ? url.pathname.match(/^\/servicos\/([^/?#]+)\/?$/) : null;
  if (serviceMatch) {
    const slug = serviceMatch[1];
    const serviceName = SERVICE_NAMES[slug] || slug;
    if (isDuplicate(`clique_servico|${slug}`)) return;
    send('clique_servico', { service_name: serviceName, service_slug: slug, location_context: contextOf(el), ...pageContext() });
    return;
  }

  // 5) Orçamento (que não seja WhatsApp nem telefone — esses já retornaram acima)
  if (forced === 'orcamento' || QUOTE_TEXT_RE.test(text) || QUOTE_TEXT_RE.test(el.getAttribute('aria-label') || '')) {
    // Botões submit de formulário são medidos por envio_formulario.
    if (el instanceof HTMLButtonElement && el.type === 'submit') return;
    const linkUrl = url ? (url.origin === window.location.origin ? url.pathname : url.href) : '';
    if (isDuplicate(`clique_orcamento|${linkUrl}|${text}`)) return;
    send('clique_orcamento', { link_url: linkUrl, link_text: text, location_context: contextOf(el), ...pageContext() });
  }
}

function attachClickListener(): void {
  if (clickListenerAttached) return;
  // Fase de captura: funciona mesmo se algum componente chamar stopPropagation.
  document.addEventListener('click', handleClick, { capture: true });
  clickListenerAttached = true;
}
