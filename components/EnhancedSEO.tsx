import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/constants';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'AutoRepair' | 'LocalBusiness' | 'Article';
  keywords?: string;
  image?: string;
  noindex?: boolean;
  serviceData?: {
    name: string;
    description: string;
  };
  areaServed?: {
    name: string;
    type: 'City' | 'Neighborhood' | 'AdministrativeArea';
  }[];
  articleData?: {
    headline: string;
    datePublished?: string;
    dateModified?: string;
    authorName?: string;
    category?: string;
  };
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  canonicalPath = '',
  schemaType = 'AutoRepair',
  keywords = 'auto center curitiba, manutenção automotiva curitiba, oficina mecanica novo mundo, freios curitiba, suspensão curitiba, geometria e balanceamento curitiba, scanner automotivo, troca de oleo, escapamentos curitiba',
  image = `${COMPANY_INFO.siteUrl}/og-image.png`,
  noindex = false,
  serviceData,
  areaServed,
  articleData
}) => {
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const fullUrl = `${COMPANY_INFO.siteUrl}${cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '')}`;

  // Format title without duplicating brand
  const displayTitle = title.includes('|') ? title : `${title} | BS CAR CENTER`;

  const defaultAreaServed = [
    { "@type": "City", "name": "Curitiba" },
    { "@type": "Neighborhood", "name": "Novo Mundo" },
    { "@type": "Neighborhood", "name": "Cidade Industrial de Curitiba" },
    { "@type": "AdministrativeArea", "name": "Região Metropolitana de Curitiba" }
  ];

  const schemaAreaServed = areaServed
    ? areaServed.map(area => ({ "@type": area.type, "name": area.name }))
    : defaultAreaServed;

  // Single source of truth for the local business entity
  const businessSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${COMPANY_INFO.siteUrl}/#business`,
    "name": COMPANY_INFO.name,
    "alternateName": COMPANY_INFO.historicalName,
    "image": image,
    "url": COMPANY_INFO.siteUrl,
    "telephone": COMPANY_INFO.whatsappDisplay,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.streetAddress,
      "addressLocality": COMPANY_INFO.city,
      "addressRegion": COMPANY_INFO.state,
      "postalCode": COMPANY_INFO.zip,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.5098,
      "longitude": -49.2935
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Dinheiro", "Cartão de Crédito", "Cartão de Débito", "Pix"],
    "currenciesAccepted": "BRL",
    "areaServed": schemaAreaServed,
    "sameAs": [
      COMPANY_INFO.facebook,
      COMPANY_INFO.instagram,
      COMPANY_INFO.mapsLink
    ]
  };

  const schemas: any[] = [businessSchema];

  // If page is a specific service, add Service schema
  if (serviceData) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceData.name,
      "description": serviceData.description,
      "provider": {
        "@id": `${COMPANY_INFO.siteUrl}/#business`
      },
      "areaServed": schemaAreaServed,
      "url": fullUrl
    });
  }

  // If page is an article / blog post, add BlogPosting & BreadcrumbList schema
  if (schemaType === 'Article' || articleData) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      },
      "headline": articleData?.headline || title,
      "description": description,
      "image": [image],
      "datePublished": articleData?.datePublished,
      "dateModified": articleData?.dateModified || articleData?.datePublished,
      "author": {
        "@type": "Organization",
        "name": articleData?.authorName || COMPANY_INFO.name,
        "url": COMPANY_INFO.siteUrl
      },
      "publisher": {
        "@type": "Organization",
        "name": COMPANY_INFO.name,
        "logo": {
          "@type": "ImageObject",
          "url": `${COMPANY_INFO.siteUrl}/og-image.png`
        }
      },
      "articleSection": articleData?.category || "Escapamentos e Mecânica",
      "inLanguage": "pt-BR"
    });

    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": COMPANY_INFO.siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Artigos",
          "item": `${COMPANY_INFO.siteUrl}/#dicas`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": articleData?.headline || title,
          "item": fullUrl
        }
      ]
    });
  }

  return (
    <Helmet>
      {/* Basic Tags */}
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      {!noindex && <link rel="canonical" href={fullUrl} />}
      <meta name="theme-color" content="#1e3a8a" />

      {/* Geolocation Meta Tags */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba, Novo Mundo" />
      <meta name="geo.position" content="-25.5098;-49.2935" />
      <meta name="ICBM" content="-25.5098, -49.2935" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={schemaType === 'Article' ? 'article' : 'website'} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {schemas.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default EnhancedSEO;
