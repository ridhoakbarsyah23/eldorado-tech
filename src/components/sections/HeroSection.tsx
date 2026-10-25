'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative isolate overflow-hidden bg-[#f8fafc] pb-16 pt-28 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
      <div className="editorial-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div className="absolute -right-52 top-12 -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-200/50 blur-3xl sm:-right-40 sm:h-[34rem] sm:w-[34rem]" aria-hidden="true" />
      <div className="site-shell grid items-center gap-12 sm:gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <div className="min-w-0 max-w-3xl">
          <div data-motion-hero-item className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-blue-800 shadow-sm sm:text-xs sm:tracking-[0.14em]">
            <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true" />
            Digital product studio · Purwokerto
          </div>
          <h1 data-motion-hero-item className="font-display text-balance text-[clamp(2.35rem,11.5vw,3.25rem)] leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-[clamp(3.25rem,8vw,6.8rem)] sm:leading-[0.94] sm:tracking-[-0.045em]">
            {t('title1')} <span className="text-blue-700">{t('title2')}</span>
          </h1>
          <p data-motion-hero-item className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-xl sm:leading-8">
            {t('subtitle')}
          </p>
          <div data-motion-hero-item className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="group inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-orange-600 px-5 text-center font-bold text-white shadow-[0_12px_30px_rgba(234,88,12,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-700 sm:w-auto sm:px-6">
              {t('cta_primary')}
              <svg aria-hidden="true" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <Link href="/#services" className="inline-flex min-h-13 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-center font-bold text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 sm:w-auto sm:px-6">
              {t('cta_secondary')}
            </Link>
          </div>
          <div data-motion-hero-item className="mt-8 grid gap-3 text-sm font-semibold text-slate-600 min-[480px]:grid-cols-2 sm:mt-10 lg:flex lg:flex-wrap lg:gap-x-6">
            {[t('feature1'), t('feature2'), t('feature3')].map((feature) => (
              <span key={feature} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-blue-100 text-blue-700" aria-hidden="true">✓</span>{feature}</span>
            ))}
          </div>
        </div>

        <div data-motion-hero-item className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="absolute -inset-2 -z-10 rotate-2 rounded-[1.75rem] bg-blue-700 sm:-inset-5 sm:rotate-3 sm:rounded-[2.5rem]" aria-hidden="true" />

          {/* Product screenshot mockup — browser window with a realistic CRM dashboard */}
          <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.24)] sm:rounded-[2rem]" aria-hidden="true">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>
              <span className="mx-auto truncate rounded-md bg-white px-2.5 py-1 font-mono text-[9px] font-medium text-slate-500 ring-1 ring-slate-200 sm:text-[10px]">app.eldoradotech.com</span>
              <span className="h-2.5 w-8 shrink-0" />
            </div>

            <div className="flex gap-2.5 bg-[#f8fafc] p-2.5 sm:gap-3 sm:p-4">
              {/* App nav rail */}
              <div className="flex w-8 shrink-0 flex-col items-center gap-2 rounded-xl bg-slate-950 py-2.5 sm:w-10 sm:py-3">
                <span className="grid h-5 w-5 place-items-center rounded-md bg-blue-600 text-[7px] font-black text-white sm:h-6 sm:w-6 sm:text-[8px]">ET</span>
                <span className="mt-1 grid h-6 w-6 place-items-center rounded-md bg-blue-600/25 sm:h-7 sm:w-7"><span className="h-3 w-3 rounded-sm bg-blue-400" /></span>
                <span className="grid h-6 w-6 place-items-center rounded-md sm:h-7 sm:w-7"><span className="h-3 w-3 rounded-sm bg-white/15" /></span>
                <span className="grid h-6 w-6 place-items-center rounded-md sm:h-7 sm:w-7"><span className="h-3 w-3 rounded-sm bg-white/15" /></span>
                <span className="grid h-6 w-6 place-items-center rounded-md sm:h-7 sm:w-7"><span className="h-3 w-3 rounded-sm bg-white/15" /></span>
              </div>

              {/* App main panel */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-extrabold tracking-tight text-slate-950 sm:text-sm">Dashboard Overview</p>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[9px]">Eldorado CRM · Q4 2026</p>
                  </div>
                  <span className="flex h-6 items-center gap-1.5 rounded-full bg-white px-2.5 ring-1 ring-slate-200 max-[400px]:hidden">
                    <svg className="h-2.5 w-2.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
                    <span className="text-[8px] font-medium text-slate-400">Search</span>
                  </span>
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-950 text-[8px] font-black text-white">AD</span>
                </div>

                <div className="mt-2.5 grid grid-cols-3 gap-1.5 sm:gap-2">
                  <div className="rounded-lg border border-slate-200 bg-white p-2 sm:p-2.5">
                    <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[8px]">Revenue</p>
                    <p className="mt-1 text-[11px] font-extrabold tracking-tight text-slate-950 sm:text-sm">Rp 450 jt</p>
                    <p className="mt-0.5 text-[7px] font-bold text-emerald-600 sm:text-[8px]">↗ 12%</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-2 sm:p-2.5">
                    <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[8px]">Projects</p>
                    <p className="mt-1 text-[11px] font-extrabold tracking-tight text-slate-950 sm:text-sm">12</p>
                    <p className="mt-0.5 text-[7px] font-bold text-emerald-600 sm:text-[8px]">↗ 2</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-2 sm:p-2.5">
                    <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[8px]">New leads</p>
                    <p className="mt-1 text-[11px] font-extrabold tracking-tight text-slate-950 sm:text-sm">48</p>
                    <p className="mt-0.5 text-[7px] font-bold text-emerald-600 sm:text-[8px]">↗ 18%</p>
                  </div>
                </div>

                <div className="mt-1.5 rounded-xl border border-slate-200 bg-white p-2.5 sm:mt-2 sm:p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-extrabold text-slate-900 sm:text-[10px]">Revenue growth</p>
                    <p className="text-[7px] font-semibold uppercase tracking-[0.1em] text-slate-400 sm:text-[8px]">Jan – Jun</p>
                  </div>
                  <svg viewBox="0 0 280 88" className="mt-1.5 h-16 w-full sm:h-20" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="hero-chart-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" x2="280" y1="22" y2="22" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" x2="280" y1="44" y2="44" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" x2="280" y1="66" y2="66" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M0 74 C14 71 26 68 40 66 C54 64 66 62 80 60 C94 58 106 56 120 52 C134 48 146 47 160 44 C174 41 186 39 200 36 C214 33 226 30 240 26 C252 23 264 20 272 17 L280 17 L280 88 L0 88 Z" fill="url(#hero-chart-fill)" />
                    <path d="M0 74 C14 71 26 68 40 66 C54 64 66 62 80 60 C94 58 106 56 120 52 C134 48 146 47 160 44 C174 41 186 39 200 36 C214 33 226 30 240 26 C252 23 264 20 272 17" fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="272" cy="17" r="4" fill="#ea580c" stroke="#fff" strokeWidth="2" />
                  </svg>
                  <div className="mt-1 flex justify-between text-[7px] font-semibold text-slate-400 sm:text-[8px]">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => <span key={month}>{month}</span>)}
                  </div>
                </div>

                <div className="mt-1.5 rounded-xl border border-slate-200 bg-white sm:mt-2">
                  <div className="flex items-center justify-between px-2.5 pt-2 sm:px-3 sm:pt-2.5">
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[9px]">Recent leads</p>
                    <p className="text-[9px] font-bold text-blue-700">View all</p>
                  </div>
                  <ul className="mt-0.5 divide-y divide-slate-100">
                    <li className="flex items-center gap-2 p-2.5 sm:p-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-blue-50 text-[8px] font-black text-blue-700 sm:h-7 sm:w-7 sm:text-[9px]">BS</span>
                      <span className="min-w-0 flex-1"><span className="block truncate text-[10px] font-bold text-slate-900 sm:text-xs">Budi Santoso</span><span className="block truncate text-[8px] text-slate-500 sm:text-[9px]">E-Commerce App</span></span>
                      <span className="shrink-0 rounded-full bg-orange-50 px-2 py-0.5 text-[7px] font-bold text-orange-700 sm:text-[8px]">Negotiation</span>
                    </li>
                    <li className="flex items-center gap-2 p-2.5 sm:p-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet-50 text-[8px] font-black text-violet-700 sm:h-7 sm:w-7 sm:text-[9px]">SS</span>
                      <span className="min-w-0 flex-1"><span className="block truncate text-[10px] font-bold text-slate-900 sm:text-xs">Sarah Smith</span><span className="block truncate text-[8px] text-slate-500 sm:text-[9px]">AI Chatbot</span></span>
                      <span className="shrink-0 rounded-full bg-violet-50 px-2 py-0.5 text-[7px] font-bold text-violet-700 sm:text-[8px]">Proposal Sent</span>
                    </li>
                    <li className="flex items-center gap-2 p-2.5 sm:gap-2.5 sm:p-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-[8px] font-black text-emerald-700 sm:h-7 sm:w-7 sm:text-[9px]">RH</span>
                      <span className="min-w-0 flex-1"><span className="block truncate text-[10px] font-bold text-slate-900 sm:text-xs">Rudi Hartono</span><span className="block truncate text-[8px] text-slate-500 sm:text-[9px]">POS System</span></span>
                      <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[7px] font-bold text-emerald-700 sm:text-[8px]">Closed Won</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-3 right-4 flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.35)] ring-1 ring-white/10" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[9px] font-bold text-white sm:text-[10px]">Deployed · 2 min ago</span>
          </div>
        </div>
      </div>
    </section>
  );
}
