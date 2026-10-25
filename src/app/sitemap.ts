import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const locales = ['id', 'en'] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eldoradotech.com';
  const posts = await getAllPosts();
  const routes = ['', '/blog'];

  const staticEntries: MetadataRoute.Sitemap = routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/blog' ? 'weekly' as const : 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          id: `${baseUrl}/id${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    })),
  );

  const postEntries: MetadataRoute.Sitemap = posts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: post.date || undefined,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          id: `${baseUrl}/id/blog/${post.slug}`,
          en: `${baseUrl}/en/blog/${post.slug}`,
        },
      },
    })),
  );

  return [...staticEntries, ...postEntries];
}
