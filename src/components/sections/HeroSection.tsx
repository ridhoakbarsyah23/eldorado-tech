'use client';
import { Link } from '@/i18n/routing';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animations
      gsap.fromTo(
        textRef.current!.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // Visual side animations
      gsap.fromTo(
        visualRef.current,
        { scale: 0.9, opacity: 0, x: 40 },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.4,
        }
      );

      // Floating animation for the orbs
      gsap.to('.hero-orb', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-10, 10)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.5,
          from: "random"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-[100svh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#030712]">
      {/* Dynamic Background Noise & Global Glow */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left: Text Content */}
          <div ref={textRef} className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight mb-6 leading-[1.1]">
              <span className="block text-white mb-2">{t('title1')}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 pb-2 drop-shadow-sm">
                {t('title2')}
              </span>
            </h1>

            <p className="mt-4 text-base md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/#contact" className="group relative inline-flex items-center justify-center min-h-[3.25rem] px-8 rounded-full bg-white text-gray-950 font-bold hover:bg-gray-100 transition-all duration-300">
                {t('cta_primary')}
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/#services" className="inline-flex items-center justify-center min-h-[3.25rem] px-8 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-md border border-white/10 hover:border-white/20">
                {t('cta_secondary')}
              </Link>
            </div>
          </div>

          {/* Right: Visual Abstract */}
          <div ref={visualRef} className="relative hidden lg:flex h-[600px] w-full items-center justify-center">
            {/* Orbs */}
            <div className="hero-orb absolute top-[10%] left-[20%] w-64 h-64 bg-cyan-500/30 rounded-full blur-[80px]"></div>
            <div className="hero-orb absolute bottom-[20%] right-[10%] w-80 h-80 bg-indigo-600/30 rounded-full blur-[90px]"></div>
            <div className="hero-orb absolute top-[40%] right-[30%] w-48 h-48 bg-blue-500/20 rounded-full blur-[60px]"></div>

            {/* Glass Card 1 */}
            <div className="absolute top-[20%] right-[15%] w-64 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
              <div className="flex gap-4 items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="h-2.5 w-24 bg-white/20 rounded-full mb-2"></div>
                  <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/10 rounded-full"></div>
                <div className="h-2 w-4/5 bg-white/10 rounded-full"></div>
                <div className="h-2 w-full bg-white/10 rounded-full"></div>
              </div>
            </div>

            {/* Glass Card 2 */}
            <div className="absolute bottom-[25%] left-[10%] w-72 p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer">
              <div className="flex items-end gap-3 h-24 mb-4 border-b border-white/10 pb-4">
                <div className="w-1/4 h-[40%] bg-blue-500/50 rounded-t-sm"></div>
                <div className="w-1/4 h-[70%] bg-indigo-500/50 rounded-t-sm"></div>
                <div className="w-1/4 h-[100%] bg-cyan-400/80 rounded-t-sm relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full blur-[10px]"></div>
                </div>
                <div className="w-1/4 h-[60%] bg-blue-400/50 rounded-t-sm"></div>
              </div>
              <div>
                <div className="h-3 w-32 bg-white/20 rounded-full mb-2"></div>
                <div className="h-2 w-20 bg-white/10 rounded-full"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-gray-500">
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </div>
    </div>
  );
}
