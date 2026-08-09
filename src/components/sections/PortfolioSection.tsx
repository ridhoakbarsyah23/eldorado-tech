'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function PortfolioSection() {
  const t = useTranslations('Portfolio');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const portfolios = [
    {
      title: t('p1Title'),
      category: t('p1Cat'),
      description: t('p1Desc'),
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: t('p2Title'),
      category: t('p2Cat'),
      description: t('p2Desc'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: t('p3Title'),
      category: t('p3Cat'),
      description: t('p3Desc'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      className: "md:col-span-1 md:row-span-1",
    }
  ];

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 bg-[#0a0a0a] relative border-t border-white/5">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white tracking-tight mb-4">{t('title')}</h2>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
              {t('subtitle')}
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group">
            See all projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          {portfolios.map((item, index) => (
            <div 
              key={index} 
              ref={el => { cardsRef.current[index] = el; }} 
              className={`group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 min-h-[400px] ${item.className}`}
            >
              <div className="absolute inset-0 w-full h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-md text-cyan-400 border border-white/10 text-xs font-semibold rounded-full mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base font-light opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
