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
    <section id="contact" ref={sectionRef} className="py-24 bg-white relative border-t border-gray-200 overflow-hidden">
      {/* Decorative blurred lights */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16 ">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('title')} <span className="text-blue-600">{t('titleHighlight')}</span></h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div ref={infoRef} className=" space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>

            <div className="flex items-start">
              <div className="bg-blue-500/20 p-4 rounded-xl text-blue-600 mr-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{t('emailTitle')}</h4>
                <p className="text-gray-600 mt-1">hello@eldoradotech.com</p>
                <p className="text-gray-500 text-sm mt-1">Kami membalas dalam 1x24 jam.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-500/20 p-4 rounded-xl text-blue-600 mr-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{t('phoneTitle')}</h4>
                <p className="text-gray-600 mt-1">+62 813 13 9027 7240</p>
                <p className="text-gray-500 text-sm mt-1">Senin - Jumat, 08:00 - 17:00 WIB</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-500/20 p-4 rounded-xl text-blue-600 mr-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{t('officeTitle')}</h4>
                <p className="text-gray-600 mt-1">{t('officeAddress')}</p>
                <p className="text-gray-500 text-sm mt-1">{t('officeRegion')}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className=" bg-white border border-gray-200 shadow-xl rounded-2xl p-8 relative overflow-hidden">
            {formState === 'success' && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('formSuccessTitle')}</h3>
                <p className="text-gray-600">{t('formSuccessDesc')}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('formName')}</label>
                  <input type="text" id="name" name="name" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder={t('formNamePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('formEmail')}</label>
                  <input type="email" id="email" name="email" required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder={t('formEmailPlaceholder')} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{t('formService')}</label>
                <select id="subject" name="subject" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none [&>option]:bg-white">
                  <option value="">{t('formServicePlaceholder')}</option>
                  <option value="web">Pengembangan Web</option>
                  <option value="mobile">Aplikasi Mobile</option>
                  <option value="uiux">Desain UI/UX</option>
                  <option value="cloud">Layanan Cloud</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('formMessage')}</label>
                <textarea id="message" name="message" rows={4} required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none" placeholder={t('formMessagePlaceholder')}></textarea>
              </div>

              {formState === 'error' && (
                <div className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
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
