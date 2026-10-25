'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function PortfolioSection() {
  const t = useTranslations('Portfolio');
  const projects = [
    [t('p1Title'), t('p1Cat'), t('p1Desc'), 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1400&q=85'],
    [t('p2Title'), t('p2Cat'), t('p2Desc'), 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85'],
    [t('p3Title'), t('p3Cat'), t('p3Desc'), 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85'],
  ];

  return (
    <section id="portfolio" className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="site-shell">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-orange-400">Selected work</p><h2 className="font-display mt-4 text-balance text-4xl tracking-tight sm:text-6xl">{t('title')}</h2></div>
          <p className="max-w-xl text-lg leading-8 text-slate-400 lg:justify-self-end">{t('subtitle')}</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map(([title, category, description, image], index) => (
            <article key={title} className={`group relative isolate min-h-[26rem] overflow-hidden rounded-3xl border border-white/10 bg-slate-900 ${index === 0 ? 'lg:row-span-2 lg:min-h-[52rem]' : ''}`}>
              <Image src={image} alt="" fill sizes={index === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 50vw, 100vw'} className="-z-20 object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/5" />
              <div className="flex h-full min-h-[inherit] flex-col justify-end p-6 sm:p-9">
                <span className="mb-4 w-fit rounded-full border border-white/20 bg-slate-950/50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-200 backdrop-blur-md">{t('conceptLabel')} · {category}</span>
                <h3 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-slate-300">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
