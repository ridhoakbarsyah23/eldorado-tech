import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eldoradotech.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/id/crm/', '/en/crm/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
