'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
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
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t('p2Title'),
      category: t('p2Cat'),
      description: t('p2Desc'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: t('p3Title'),
      category: t('p3Cat'),
      description: t('p3Desc'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    }
  ];

  useEffect(() => {
    let controller: any = null;
    let scene: any = null;

    import('scrollmagic').then((ScrollMagicModule) => {
      const ScrollMagic = ScrollMagicModule.default || ScrollMagicModule;
      controller = new ScrollMagic.Controller();
      
      if (titleRef.current) gsap.set(titleRef.current, { y: 30, opacity: 0 });
      cardsRef.current.forEach(card => {
        if(card) gsap.set(card, { y: 50, opacity: 0 });
      });

      scene = new ScrollMagic.Scene({
        triggerElement: sectionRef.current,
        triggerHook: 0.8,
        reverse: false
      })
      .on("enter", () => {
         if (titleRef.current) gsap.to(titleRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
         const validCards = cardsRef.current.filter(Boolean);
         if (validCards.length > 0) gsap.to(validCards, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)", delay: 0.2 });
      })
      .addTo(controller);
    });

    return () => {
      if (scene) scene.destroy(true);
      if (controller) controller.destroy(true);
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-white relative border-t border-gray-200">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {portfolios.map((item, index) => (
            <div 
              key={index} 
              ref={el => { cardsRef.current[index] = el; }} 
              className="opacity-0 group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-3 border border-blue-200">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
