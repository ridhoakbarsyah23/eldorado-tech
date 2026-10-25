import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return (await getAllPosts()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: { id: `/id/blog/${slug}`, en: `/en/blog/${slug}` },
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date || undefined,
      url: `/${locale}/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <article>
        <header className="border-b border-slate-200 bg-[#f8fafc] pb-12 pt-28 sm:pb-20 sm:pt-40 lg:pt-44">
          <div className="mx-auto max-w-4xl px-4 sm:px-6"><Link href="/blog" className="inline-flex min-h-11 items-center text-sm font-bold text-blue-700 hover:text-blue-900"><span aria-hidden="true" className="mr-2">←</span> Blog</Link><p className="responsive-copy mt-6 font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-500 sm:mt-8 sm:tracking-[0.14em]">{post.date} · {post.author}</p><h1 className="font-display mt-5 text-balance text-3xl leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{post.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:mt-6 sm:text-xl">{post.description}</p></div>
        </header>
        <div className="prose prose-slate prose-lg mx-auto max-w-3xl px-4 py-14 prose-headings:font-display prose-headings:tracking-tight prose-headings:text-slate-950 prose-a:text-blue-700 prose-a:decoration-blue-300 prose-img:rounded-2xl sm:px-6 sm:py-20" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
      <Footer />
    </main>
  );
}
