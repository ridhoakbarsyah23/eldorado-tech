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
    return () => {};
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
    <section ref={sectionRef} className="py-20 bg-[#030712] relative px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div ref={containerRef} className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-cyan-500/20 shadow-[0_0_50px_rgba(34,211,238,0.1)] rounded-[2rem] p-8 md:p-14 relative overflow-hidden backdrop-blur-xl">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left md:max-w-md">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">{t('title')}</h3>
            <p className="text-cyan-100/70 font-light text-lg">{t('subtitle')}</p>
          </div>
          
          <div className="w-full md:max-w-md">
            {formState === 'success' ? (
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 flex items-center justify-center text-cyan-400">
                <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('success')}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder={t('placeholder')} 
                  className="flex-1 bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-gray-500"
                />
                <button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="bg-cyan-500 hover:bg-cyan-400 text-[#030712] font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95 whitespace-nowrap disabled:opacity-70 flex justify-center items-center"
                >
                  {formState === 'submitting' ? t('btnSubmitting') : t('btnSubmit')}
                </button>
              </form>
            )}
            {formState === 'error' && (
              <p className="text-red-400 text-sm mt-4 text-center md:text-left">{t('error')}</p>
            )}
            {formState !== 'error' && (
              <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
                {t('spam')}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
