'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FAQSection() {
  const t = useTranslations('FAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [1, 2, 3, 4].map((number) => ({ question: t(`q${number}`), answer: t(`a${number}`) }));

  return (
    <section id="faq" data-motion-section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="site-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div data-motion-item className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">FAQ</p>
          <h2 className="font-display mt-4 text-balance text-3xl tracking-tight text-slate-950 sm:text-5xl">{t('title')}</h2>
          <p className="mt-5 leading-7 text-slate-600">{t('subtitle')}</p>
        </div>
        <div data-motion-item className="border-t border-slate-300">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-slate-300">
                <h3>
                  <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} className="flex min-h-20 w-full items-center justify-between gap-3 py-5 text-left text-base font-bold text-slate-900 transition-colors hover:text-blue-700 sm:gap-6 sm:text-lg">
                    <span className="min-w-0"><span className="mr-3 font-mono text-xs text-slate-400 sm:mr-4">0{index + 1}</span>{faq.question}</span>
                    <span aria-hidden="true" className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-300 text-xl transition-transform duration-200 ${isOpen ? 'rotate-45 bg-blue-700 text-white' : 'bg-white text-slate-700'}`}>+</span>
                  </button>
                </h3>
                <div id={`faq-panel-${index}`} className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}><div className="overflow-hidden"><p className="pb-7 leading-7 text-slate-600 sm:pl-10 sm:pr-16">{faq.answer}</p></div></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
