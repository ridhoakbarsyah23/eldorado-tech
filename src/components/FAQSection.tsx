'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function FAQSection() {
  const t = useTranslations('FAQ');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') }
  ];

  useEffect(() => {
    let controller: any = null;
    let scene: any = null;

    import('scrollmagic').then((ScrollMagicModule) => {
      const ScrollMagic = ScrollMagicModule.default || ScrollMagicModule;
      controller = new ScrollMagic.Controller();
      
      gsap.set(titleRef.current, { y: 30, opacity: 0 });
      gsap.set(faqRef.current, { y: 40, opacity: 0 });

      scene = new ScrollMagic.Scene({
        triggerElement: sectionRef.current,
        triggerHook: 0.8,
        reverse: false
      })
      .on("enter", () => {
         gsap.to(titleRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
         gsap.to(faqRef.current, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 });
      })
      .addTo(controller);
    });

    return () => {
      if (scene) scene.destroy(true);
      if (controller) controller.destroy(true);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-gray-50/80 relative border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>
        
        <div ref={faqRef} className="space-y-4 opacity-0">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 shadow-sm ${openIndex === index ? 'border-blue-500 bg-blue-50/50' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                <span className={`text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-200">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
