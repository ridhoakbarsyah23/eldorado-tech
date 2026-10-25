'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative isolate overflow-hidden bg-[#f8fafc] pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="editorial-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div className="absolute -right-40 top-12 -z-10 h-[34rem] w-[34rem] rounded-full bg-blue-200/50 blur-3xl" aria-hidden="true" />
      <div className="site-shell grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-blue-800 shadow-sm sm:text-xs sm:tracking-[0.14em]">
            <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
            Digital product studio · Purwokerto
          </div>
          <h1 className="font-display text-balance text-[2.8rem] leading-[0.96] tracking-[-0.045em] text-slate-950 sm:text-[clamp(3.25rem,8vw,6.8rem)] sm:leading-[0.94]">
            {t('title1')} <span className="text-blue-700">{t('title2')}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {t('subtitle')}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="group inline-flex min-h-13 items-center justify-center rounded-xl bg-orange-600 px-6 font-bold text-white shadow-[0_12px_30px_rgba(234,88,12,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-700">
              {t('cta_primary')}
              <svg aria-hidden="true" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <Link href="/#services" className="inline-flex min-h-13 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 font-bold text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700">
              {t('cta_secondary')}
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            {[t('feature1'), t('feature2'), t('feature3')].map((feature) => (
              <span key={feature} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-blue-100 text-blue-700" aria-hidden="true">✓</span>{feature}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="absolute -inset-5 -z-10 rotate-3 rounded-[2.5rem] bg-blue-700" aria-hidden="true" />
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.24)] sm:p-7">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-orange-500" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Built for growth</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 sm:row-span-2">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">01 · Strategy</span>
                <div className="mt-12 space-y-3" aria-hidden="true"><div className="h-2 w-4/5 rounded bg-slate-200" /><div className="h-2 rounded bg-slate-100" /><div className="h-2 w-3/5 rounded bg-slate-100" /></div>
                <div className="mt-8 flex items-end gap-2" aria-hidden="true">{[38, 58, 45, 78, 92].map((height, index) => <span key={height} className={`${index === 4 ? 'bg-orange-500' : 'bg-blue-200'} flex-1 rounded-t-md`} style={{ height }} />)}</div>
              </div>
              <div className="rounded-2xl bg-blue-700 p-5 text-white">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-100">02 · Design</span>
                <div className="mt-8 grid grid-cols-3 gap-2" aria-hidden="true"><span className="aspect-square rounded-lg bg-white/90" /><span className="aspect-square rounded-full bg-orange-400" /><span className="aspect-square rounded-lg border border-white/30" /></div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">03 · Build</span>
                <p className="mt-4 font-mono text-xs leading-6 text-slate-400"><span className="text-orange-400">const</span> idea = <span className="text-blue-300">&quot;impact&quot;</span>;<br />ship(idea);</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
