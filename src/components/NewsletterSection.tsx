'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function NewsletterSection() {
  const t = useTranslations('Newsletter');
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Ganti dengan endpoint Formspree Anda, contoh: https://formspree.io/f/xabcdefg
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_ENDPOINT_HERE'; 

  useEffect(() => {
    let controller: any = null;
    let scene: any = null;

    import('scrollmagic').then((ScrollMagicModule) => {
      const ScrollMagic = ScrollMagicModule.default || ScrollMagicModule;
      controller = new ScrollMagic.Controller();
      
      gsap.set(containerRef.current, { y: 40, opacity: 0, scale: 0.95 });

      scene = new ScrollMagic.Scene({
        triggerElement: sectionRef.current,
        triggerHook: 0.9,
        reverse: false
      })
      .on("enter", () => {
         gsap.to(containerRef.current, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" });
      })
      .addTo(controller);
    });

    return () => {
      if (scene) scene.destroy(true);
      if (controller) controller.destroy(true);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <section ref={sectionRef} className="py-12 bg-white relative px-4 sm:px-6 lg:px-8">
      <div ref={containerRef} className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 shadow-lg rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[80px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left md:max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{t('title')}</h3>
            <p className="text-blue-800">{t('subtitle')}</p>
          </div>
          
          <div className="w-full md:max-w-md">
            {formState === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-center text-green-700">
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('success')}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder={t('placeholder')} 
                  className="flex-1 bg-white border border-blue-200 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-400"
                />
                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all active:scale-95 whitespace-nowrap disabled:opacity-70 flex justify-center items-center"
                >
                  {formState === 'submitting' ? t('btnSubmitting') : t('btnSubmit')}
                </button>
              </form>
            )}
            {formState === 'error' && (
              <p className="text-red-400 text-sm mt-3 text-center md:text-left">{t('error')}</p>
            )}
            {formState !== 'error' && (
              <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
                {t('spam')}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
