'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (nextLocale: string) => {
    if (nextLocale === locale) return;
    const href = `${pathname || '/'}${window.location.hash || ''}`;
    router.replace(href, { locale: nextLocale });
  };

  return (
    <div className="flex rounded-xl border border-slate-200 bg-slate-100 p-1" aria-label="Language selector">
      {['id', 'en'].map((code) => (
        <button
          type="button"
          key={code}
          onClick={() => changeLanguage(code)}
          aria-pressed={locale === code}
          className={`min-h-9 min-w-10 rounded-lg px-2 text-xs font-bold uppercase transition-all duration-200 ${locale === code ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
