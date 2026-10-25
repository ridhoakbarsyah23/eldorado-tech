'use client';

import { useTranslations } from 'next-intl';

const icons = [
  <svg key="code" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></svg>,
  <svg key="cloud" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 8.7 4.7 4.7 0 0 0 7 18Z" /></svg>,
  <svg key="design" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3a9 9 0 1 0 0 18h1.4a1.6 1.6 0 0 0 0-3.2h-1a1.8 1.8 0 0 1 0-3.6H15A6 6 0 0 0 15 3h-3Z" /><path d="M7.5 10h.01M9 6.5h.01M14 6.5h.01" /></svg>,
];

export default function ServicesSection() {
  const t = useTranslations('Services');
  const services = [
    [t('s1Title'), t('s1Desc')],
    [t('s2Title'), t('s2Desc')],
    [t('s3Title'), t('s3Desc')],
  ];

  return (
    <section id="services" className="bg-[#f8fafc] py-20 sm:py-28">
      <div className="site-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">Capabilities</p>
          <h2 className="font-display mt-4 text-balance text-4xl tracking-tight text-slate-950 sm:text-6xl">{t('title')}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{t('subtitle')}</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map(([title, description], index) => (
            <article key={title} className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.1)] sm:p-8 ${index === 0 ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-200 bg-white text-slate-950'}`}>
              <div className={`grid h-14 w-14 place-items-center rounded-2xl [&>svg]:h-7 [&>svg]:w-7 ${index === 0 ? 'bg-white/14 text-white' : 'bg-blue-50 text-blue-700'}`}>{icons[index]}</div>
              <p className={`mt-10 font-mono text-xs font-bold tracking-[0.16em] ${index === 0 ? 'text-blue-200' : 'text-slate-400'}`}>0{index + 1}</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{title}</h3>
              <p className={`mt-4 leading-7 ${index === 0 ? 'text-blue-100' : 'text-slate-600'}`}>{description}</p>
              <div className={`mt-8 h-px transition-all duration-300 group-hover:w-full ${index === 0 ? 'w-16 bg-orange-400' : 'w-10 bg-blue-600'}`} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
