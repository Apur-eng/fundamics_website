import React, { useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
  structuredData?: object | object[];
}

export const SeoHead: React.FC<SeoProps> = ({
  title,
  description,
  canonicalPath = '',
  breadcrumbs,
  structuredData,
}) => {
  const siteUrl = 'https://fundemicstutorials.in';
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const logoUrl = `${siteUrl}/assets/LOGO.png`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to update or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', siteConfig.legalName);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', logoUrl);

    // 4. Twitter Cards
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', logoUrl);

    // 5. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Structured Data Script
    const scriptId = 'fundemics-page-jsonld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    // Compose schema graph
    const schemaGraph: any[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        '@id': `${siteUrl}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteUrl,
        logo: logoUrl,
        description: siteConfig.tagline,
        foundingDate: siteConfig.sinceYear,
        email: siteConfig.email,
        telephone: '+917617018888',
        sameAs: [
          siteConfig.social.youtube,
          siteConfig.social.facebook,
          siteConfig.social.instagram,
        ].filter(Boolean),
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Adarsh Puram, Triveni Nagar - III, Sitapur Road',
          addressLocality: 'Lucknow',
          addressRegion: 'Uttar Pradesh',
          postalCode: '226220',
          addressCountry: 'IN',
        },
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaGraph.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: b.name,
          item: `${siteUrl}${b.path}`,
        })),
      });
    }

    if (structuredData) {
      if (Array.isArray(structuredData)) {
        schemaGraph.push(...structuredData);
      } else {
        schemaGraph.push(structuredData);
      }
    }

    scriptElement.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemaGraph,
    });
  }, [title, description, canonicalPath, breadcrumbs, structuredData, canonicalUrl, logoUrl]);

  return null;
};
