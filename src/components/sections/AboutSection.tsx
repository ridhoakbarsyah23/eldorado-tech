'use client';

import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('About');
  return (
    <section id="about" className="border-y border-slate-200 bg-white py-20 sm:py-28">
      <div className="site-shell grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">{t('whoWeAre')}</p>
          <h2 className="font-display mt-4 text-balance text-4xl leading-tight tracking-tight text-slate-950 sm:text-5xl">{t('title')} <span className="text-blue-700">{t('titleHighlight')}</span></h2>
        </div>
        <div>
          <p className="text-xl leading-9 text-slate-700 sm:text-2xl">{t('desc1')}</p>
          <p className="mt-6 max-w-3xl leading-8 text-slate-600">{t('desc2')}</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {[[t('stat1Value'), t('stat1Label')], [t('stat2Value'), t('stat2Label')]].map(([value, label]) => (
              <div key={label} className="bg-slate-50 p-6 sm:p-8"><p className="font-display text-4xl text-blue-700">{value}</p><p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
