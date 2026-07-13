'use client';
import { Link } from '@/i18n/routing';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, descRef.current, btnsRef.current],
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.1,
          clearProps: "transform,opacity",
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-40 md:pt-16 md:pb-0 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/40 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 ref={titleRef} className="text-[clamp(2.25rem,12vw,3.25rem)] md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05]">
          <span className="block text-gray-900 mb-2">{t('title1')}</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 pb-2">{t('title2')}</span>
        </h1>
        <p ref={descRef} className="mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed ">
          {t('subtitle')}
        </p>
        <div ref={btnsRef} className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            {t('cta_primary')}
          </Link>
          <Link href="/#services" className="inline-flex min-h-12 items-center justify-center px-8 py-3.5 rounded-full bg-white/80 text-blue-600 font-semibold hover:bg-white transition-all backdrop-blur-sm border border-blue-200 shadow-sm">
            {t('cta_secondary')}
          </Link>
        </div>
      </div>
    </div>
  );
}
