import { Link } from '@/i18n/routing';
import { getAllPosts } from '@/lib/blog';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEnglish = locale === 'en';

  return {
    title: isEnglish ? 'Blog & Insights' : 'Blog & Wawasan',
    description: isEnglish
      ? 'Practical perspectives on software development, digital products, and technology.'
      : 'Perspektif praktis tentang pengembangan perangkat lunak, produk digital, dan teknologi.',
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { id: '/id/blog', en: '/en/blog' },
    },
  };
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />
      <header className="relative overflow-hidden border-b border-slate-200 bg-white pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className="editorial-grid absolute inset-0" aria-hidden="true" />
        <div className="site-shell relative"><p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">Ideas & perspective</p><h1 className="font-display mt-4 max-w-3xl text-balance text-5xl tracking-tight text-slate-950 sm:text-7xl">Blog & Wawasan</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Berita terbaru dan pemikiran dari tim Eldorado Tech.</p></div>
      </header>

      <section className="site-shell py-14 sm:py-20">
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 lg:grid-cols-[.75fr_1.25fr]">
            <div className="flex min-h-64 items-end bg-blue-700 p-7 text-white sm:p-10"><p className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">Fresh thinking for ambitious digital products.</p></div>
            <article className="flex flex-col justify-center p-7 sm:p-10 lg:p-14"><p className="font-mono text-xs font-bold uppercase tracking-[0.13em] text-blue-700">Featured · {featured.date}</p><h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-slate-950 transition-colors group-hover:text-blue-700 sm:text-4xl">{featured.title}</h2><p className="mt-4 max-w-xl leading-7 text-slate-600">{featured.description}</p><span className="mt-8 inline-flex items-center font-bold text-orange-700">Read article <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span></span></article>
          </Link>
        )}

        {rest.length > 0 && <div className="mt-8 grid gap-5 md:grid-cols-2">{rest.map((post, index) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)] sm:p-9"><div className="flex items-center justify-between gap-4"><span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-blue-700">Article 0{index + 2}</span><span className="text-xs font-semibold text-slate-500">{post.date}</span></div><h2 className="mt-10 text-balance text-2xl font-extrabold tracking-tight text-slate-950 transition-colors group-hover:text-blue-700">{post.title}</h2><p className="mt-4 line-clamp-3 leading-7 text-slate-600">{post.description}</p><p className="mt-7 text-sm font-bold text-slate-500">{post.author}</p></Link>
        ))}</div>}
      </section>
      <Footer />
    </main>
  );
}
