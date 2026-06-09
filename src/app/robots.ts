import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/request-form/thanks'],
    },
    sitemap: 'https://trailerpartmasters.vercel.app/sitemap.xml',
    host: 'https://trailerpartmasters.vercel.app',
  };
}
