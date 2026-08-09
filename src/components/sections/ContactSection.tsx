'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('Contact');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Ganti dengan endpoint Formspree Anda, contoh: https://formspree.io/f/xabcdefg
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdnrpvl';

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
    <section id="contact" ref={sectionRef} className="py-32 bg-[#030712] relative border-t border-white/5 overflow-hidden">
      {/* Decorative blurred lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white tracking-tight mb-4">
            {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div ref={infoRef} className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">{t('infoTitle')}</h3>
              <p className="text-gray-400 font-light mb-12">
                {t('infoDesc')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-cyan-400 mr-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{t('emailTitle')}</h4>
                  <p className="text-gray-400 mt-1 font-light">hello@eldoradotech.com</p>
                  <p className="text-gray-500 text-sm mt-1">{t('emailDesc')}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-blue-400 mr-6 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{t('officeTitle')}</h4>
                  <p className="text-gray-400 mt-1 font-light">{t('officeAddress')}</p>
                  <p className="text-gray-500 text-sm mt-1">{t('officeRegion')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            {/* Form Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>

            {formState === 'success' && (
              <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/30">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('formSuccessTitle')}</h3>
                <p className="text-gray-400 font-light">{t('formSuccessDesc')}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t('formName')}</label>
                  <input type="text" id="name" name="name" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all" placeholder={t('formNamePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t('formEmail')}</label>
                  <input type="email" id="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all" placeholder={t('formEmailPlaceholder')} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">{t('formService')}</label>
                <div className="relative">
                  <select id="subject" name="subject" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all appearance-none [&>option]:bg-gray-900">
                    <option value="">{t('formServicePlaceholder')}</option>
                    <option value="web">{t('serviceWeb')}</option>
                    <option value="mobile">{t('serviceMobile')}</option>
                    <option value="uiux">{t('serviceUiUx')}</option>
                    <option value="cloud">{t('serviceCloud')}</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{t('formMessage')}</label>
                <textarea id="message" name="message" rows={4} required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none" placeholder={t('formMessagePlaceholder')}></textarea>
              </div>

              {formState === 'error' && (
                <div className="text-red-400 text-sm bg-red-900/20 p-4 rounded-xl border border-red-500/30">
                  {t('formErrorMsg')}
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                {formState === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{t('formSending')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('formSubmit')}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
