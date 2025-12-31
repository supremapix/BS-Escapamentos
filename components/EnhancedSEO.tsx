import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/constants';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'AutoRepair' | 'LocalBusiness' | 'AutomotiveBusiness';
  keywords?: string;
  image?: string;
  noindex?: boolean;
  areaServed?: {
    name: string;
    type: 'City' | 'Neighborhood' | 'AdministrativeArea';
  }[];
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ 
  title, 
  description, 
  canonicalPath = '', 
  schemaType = 'AutoRepair',
  keywords = 'escapamentos, oficina mecânica, curitiba, suspensão, freios, troca de óleo, auto center, revisão automotiva',
  image = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  noindex = false,
  areaServed
}) => {
  const fullUrl = `${COMPANY_INFO.siteUrl}${canonicalPath}`;
  const displayTitle = title.includes('|') ? title : `${title} | BS Escapamentos`;

  // Default areas served if not specified
  const defaultAreaServed = [
    { "@type": "City", "name": "Curitiba" },
    { "@type": "AdministrativeArea", "name": "Região Metropolitana de Curitiba" }
  ];

  const schemaAreaServed = areaServed 
    ? areaServed.map(area => ({ "@type": area.type, "name": area.name }))
    : defaultAreaServed;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": COMPANY_INFO.name,
    "image": image,
    "url": fullUrl,
    "telephone": COMPANY_INFO.whatsappDisplay,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Pedro Gusso, 2340",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "81900-080",
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
        "https://www.instagram.com/bsescapamentos"
    ]
  };

  return (
    <Helmet>
      {/* Basic Tags */}
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullUrl} />
      <meta name="author" content="Suprema Mídia" />
      <meta name="theme-color" content="#1e3a8a" />

      {/* Geolocation Meta Tags */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.5098;-49.2935" />
      <meta name="ICBM" content="-25.5098, -49.2935" />

      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://api.whatsapp.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
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
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;