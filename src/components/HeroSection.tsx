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
    // Initial fade in (GSAP)
    gsap.fromTo(
      [titleRef.current, descRef.current, btnsRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
    );

    // Parallax effect on scroll (ScrollMagic)
    let controller: any = null;
    let scene: any = null;

    import('scrollmagic').then((ScrollMagicModule) => {
      const ScrollMagic = ScrollMagicModule.default || ScrollMagicModule;
      controller = new ScrollMagic.Controller();
      
      scene = new ScrollMagic.Scene({
        triggerElement: sectionRef.current,
        duration: "100%", // Parallax during the whole section height
        triggerHook: 0 // Start when top of section hits top of viewport
      })
      .on("progress", (e: any) => {
         // Move title down and fade out slightly as we scroll down
         if (titleRef.current) {
            gsap.to(titleRef.current, { y: e.progress * 150, opacity: 1 - (e.progress * 1.5), duration: 0.1 });
         }
      })
      .addTo(controller);
    });

    return () => {
      if (scene) scene.destroy(true);
      if (controller) controller.destroy(true);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/40 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 opacity-0">
          <span className="block text-gray-900 mb-2">{t('title1')}</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 pb-2">{t('title2')}</span>
        </h1>
        <p ref={descRef} className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0">
          {t('subtitle')}
        </p>
        <div ref={btnsRef} className="flex flex-col sm:flex-row justify-center gap-4 opacity-0">
          <Link href="/#contact" className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            {t('cta_primary')}
          </Link>
          <Link href="/#services" className="px-8 py-3.5 rounded-full bg-white/80 text-blue-600 font-semibold hover:bg-white transition-all backdrop-blur-sm border border-blue-200 shadow-sm">
            {t('cta_secondary')}
          </Link>
        </div>
      </div>
    </div>
  );
}
