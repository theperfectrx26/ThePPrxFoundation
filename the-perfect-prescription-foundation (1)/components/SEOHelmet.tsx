import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
  ogType?: 'website' | 'article' | 'profile';
}

const SEOHelmet: React.FC<SEOProps> = ({ title, description, schema, ogType = 'website' }) => {
  const location = useLocation();
  const baseUrl = "https://theperfectrx.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update Document Title
    document.title = `${title} | The Perfect Prescription Foundation`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Open Graph Tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:url': fullUrl,
      'og:type': ogType,
      'og:site_name': 'The Perfect Prescription Foundation',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Handle JSON-LD Schema
    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (script) {
      script.remove();
    }

    if (schema) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        ...schema
      });
      document.head.appendChild(script);
    }
  }, [title, description, schema, fullUrl, ogType]);

  return null;
};

export default SEOHelmet;