import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function NewsletterSection() {
  const t = useTranslations('Newsletter');

  return (
    <section data-motion-section className="border-b border-slate-800 bg-slate-950 py-14 text-white sm:py-20">
      <div className="site-shell grid gap-7 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div data-motion-item>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">Eldorado Notes</p>
          <h2 className="font-display mt-3 text-balance text-2xl tracking-tight sm:text-4xl">{t('title')}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-400">{t('subtitle')}</p>
        </div>
        <Link data-motion-item href="/blog" className="group inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-white px-6 text-center font-bold text-slate-950 transition-colors hover:bg-blue-50 lg:w-auto">
          {t('btnSubmit')}
          <svg aria-hidden="true" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </div>
    </section>
  );
}
