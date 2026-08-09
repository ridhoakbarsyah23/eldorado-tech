'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('About');
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial state
    gsap.set(textRef.current, { x: -40, opacity: 0 });
    gsap.set(graphicRef.current, { x: 40, opacity: 0, scale: 0.95 });
    
    gsap.to(textRef.current, { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });
    gsap.to(graphicRef.current, { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.4 });
    return () => {};
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-[#030712] border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          <div ref={textRef} className="">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              {t('whoWeAre')}
            </div>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white mb-6 leading-tight">
              {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('titleHighlight')}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed font-light">
              {t('desc1')}
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 font-light">
              {t('desc2')}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l border-white/10 pl-5 group">
                <p className="text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{t('stat1Value')}</p>
                <p className="text-sm text-gray-500 mt-2 font-medium tracking-wide uppercase">{t('stat1Label')}</p>
              </div>
              <div className="border-l border-white/10 pl-5 group">
                <p className="text-4xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">{t('stat2Value')}</p>
                <p className="text-sm text-gray-500 mt-2 font-medium tracking-wide uppercase">{t('stat2Label')}</p>
              </div>
            </div>
          </div>
          
          <div ref={graphicRef} className="mt-16 lg:mt-0 relative">
            <div className="aspect-square rounded-[2rem] bg-white/[0.02] border border-white/10 p-4 overflow-hidden shadow-2xl backdrop-blur-xl flex items-center justify-center relative group hover:border-white/20 transition-colors duration-500">
                {/* Background glow for the graphic */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Abstract shape representing technology/building */}
                <div className="grid grid-cols-2 gap-6 h-[250px] sm:h-[350px] w-[70%] opacity-90 relative z-10 group-hover:scale-105 transition-transform duration-700">
                   <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-tl-3xl rounded-br-3xl shadow-[0_0_40px_rgba(59,130,246,0.3)]"></div>
                   <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-tr-3xl rounded-bl-3xl shadow-[0_0_40px_rgba(34,211,238,0.3)] mt-12"></div>
                   <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-tr-3xl rounded-bl-3xl shadow-[0_0_40px_rgba(99,102,241,0.3)] mb-12"></div>
                   <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-tl-3xl rounded-br-3xl shadow-[0_0_40px_rgba(96,165,250,0.3)]"></div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
