import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/constants';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'AutoRepair' | 'LocalBusiness';
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalPath = '', 
  schemaType = 'AutoRepair',
  keywords = 'escapamentos, oficina mecânica, curitiba, suspensão, freios'
}) => {
  const fullUrl = `${COMPANY_INFO.siteUrl}${canonicalPath}`;
  const displayTitle = `${title} | BS Escapamentos`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": COMPANY_INFO.name,
    "image": "https://picsum.photos/1200/630",
    "url": COMPANY_INFO.siteUrl,
    "telephone": COMPANY_INFO.whatsappDisplay,
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
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://picsum.photos/1200/630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={displayTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://picsum.photos/1200/630" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;