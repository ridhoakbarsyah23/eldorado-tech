import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Thank You',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ThankYouPage() {
  const t = await getTranslations('ThankYou');

  return (
    <main className="flex min-h-screen flex-col bg-[#f8fafc] text-slate-900">
      <Navbar />
      <section className="relative flex flex-1 items-center overflow-hidden px-4 pb-20 pt-36 sm:pt-44">
        <div className="editorial-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:p-12">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-emerald-100 text-emerald-700">
            <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25"><path d="m5 12 4 4L19 6" /></svg>
          </span>
          <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-blue-700">{t('eyebrow')}</p>
          <h1 className="font-display mt-4 text-balance text-4xl tracking-tight text-slate-950 sm:text-6xl">{t('title')}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">{t('description')}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-700 px-6 font-bold text-white transition-colors duration-200 hover:bg-blue-800">
              {t('backHome')}
            </Link>
            <Link href="/blog" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 font-bold text-slate-700 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
              {t('readBlog')}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
