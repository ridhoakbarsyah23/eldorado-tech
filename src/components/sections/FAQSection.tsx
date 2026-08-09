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
    return () => {};
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-32 bg-[#0a0a0a] relative border-t border-white/5 overflow-hidden">
      
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16 ">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white tracking-tight mb-4">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-400 font-light">
            {t('subtitle')}
          </p>
        </div>
        
        <div ref={faqRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-500 backdrop-blur-sm ${openIndex === index ? 'border-cyan-500/30 bg-cyan-900/10 shadow-[0_0_30px_rgba(34,211,238,0.05)]' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
              >
                <span className={`font-semibold text-lg md:text-xl transition-colors duration-300 ${openIndex === index ? 'text-cyan-400' : 'text-gray-200 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-500 ${openIndex === index ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-400 rotate-180' : 'border-white/10 bg-white/5 text-gray-400 group-hover:border-white/30 group-hover:text-white'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400 leading-relaxed font-light pt-4 border-t border-white/5">
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
