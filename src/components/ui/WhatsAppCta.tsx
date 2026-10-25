'use client';

import { useLocale, useTranslations } from 'next-intl';

export default function WhatsAppCta() {
  const locale = useLocale();
  const t = useTranslations('Contact');
  const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '').replace(/\D/g, '');

  if (!number) return null;

  const message = locale === 'en'
    ? 'Hello Eldorado Tech, I would like to discuss a digital project.'
    : 'Halo Eldorado Tech, saya ingin berdiskusi tentang proyek digital.';
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={t('whatsappAria')}
      data-cta="whatsapp-floating"
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[90] inline-flex min-h-12 items-center gap-2 rounded-full bg-emerald-600 px-4 font-bold text-white shadow-[0_16px_40px_rgba(5,150,105,0.28)] transition-colors duration-200 hover:bg-emerald-700 sm:bottom-6 sm:right-6 sm:min-h-14 sm:px-5"
    >
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 11.5a8 8 0 0 1-11.9 7L4 19.5l1.1-3.9A8 8 0 1 1 20 11.5Z" />
        <path d="M9 8.5c.4 2.8 2 4.4 4.8 5" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
      <span aria-hidden="true" className="grid h-5 w-5 place-items-center transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
    </a>
  );
}
