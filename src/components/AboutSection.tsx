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
    let controller: any = null;
    let scene: any = null;

    import('scrollmagic').then((ScrollMagicModule) => {
      const ScrollMagic = ScrollMagicModule.default || ScrollMagicModule;
      controller = new ScrollMagic.Controller();
      
      // Initial state
      gsap.set(textRef.current, { x: -50, opacity: 0 });
      gsap.set(graphicRef.current, { x: 50, opacity: 0, scale: 0.9 });

      scene = new ScrollMagic.Scene({
        triggerElement: sectionRef.current,
        triggerHook: 0.7, // Trigger when section is 70% down the viewport
        reverse: false // Only animate once when scrolling down
      })
      .on("enter", () => {
         gsap.to(textRef.current, { x: 0, opacity: 1, duration: 1, ease: "power3.out" });
         gsap.to(graphicRef.current, { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.2 });
      })
      .addTo(controller);
    });

    return () => {
      if (scene) scene.destroy(true);
      if (controller) controller.destroy(true);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white/50 border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div ref={textRef} className="opacity-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              {t('title')} <span className="text-blue-600">{t('titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('desc1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('desc2')}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-3xl font-bold text-gray-900">{t('stat1Value')}</p>
                <p className="text-sm text-gray-500 mt-1">{t('stat1Label')}</p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-4">
                <p className="text-3xl font-bold text-gray-900">{t('stat2Value')}</p>
                <p className="text-sm text-gray-500 mt-1">{t('stat2Label')}</p>
              </div>
            </div>
          </div>
          <div ref={graphicRef} className="mt-12 lg:mt-0 relative opacity-0">
            <div className="aspect-square rounded-2xl bg-white border border-gray-200 p-2 overflow-hidden shadow-xl backdrop-blur-sm flex items-center justify-center">
                {/* Abstract shape representing technology/building */}
                <div className="grid grid-cols-2 gap-4 h-[300px] sm:h-[400px] w-2/3 opacity-80">
                   <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-tl-3xl rounded-br-3xl shadow-[0_0_30px_rgba(59,130,246,0.4)]"></div>
                   <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-tr-3xl rounded-bl-3xl shadow-[0_0_30px_rgba(34,211,238,0.4)] mt-8"></div>
                   <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-tr-3xl rounded-bl-3xl shadow-[0_0_30px_rgba(99,102,241,0.4)] mb-8"></div>
                   <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-tl-3xl rounded-br-3xl shadow-[0_0_30px_rgba(96,165,250,0.4)]"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
