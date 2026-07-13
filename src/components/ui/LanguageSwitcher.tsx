'use client';

import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';

type LanguageSwitcherProps = {
  onNavigate?: () => void;
};

export default function LanguageSwitcher({ onNavigate }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();

  const changeLanguage = (nextLocale: string) => {
    onNavigate?.();

    if (nextLocale === locale) return;

    const cleanPathname = pathname && pathname !== '/' ? pathname : '';
    const hash = window.location.hash || '';
    window.location.assign(`/${nextLocale}${cleanPathname}${hash}`);
  };

  return (
    <div className="flex flex-row items-center gap-1 bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-xl border border-gray-200 shadow-inner w-fit relative z-[9999]">
      {[
        { code: 'id', label: 'ID', flag: 'https://flagcdn.com/w40/id.png' },
        { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/us.png' }
      ].map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            type="button"
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex min-h-11 min-w-14 items-center justify-center px-4 py-2 rounded-lg transition-colors duration-300 select-none ${isActive
                ? 'bg-white shadow-sm ring-1 ring-gray-900/5'
                : 'active:bg-gray-200 cursor-pointer opacity-80 hover:opacity-100'
              }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lang.flag}
              alt={lang.label}
              className={`w-7 h-auto rounded-sm object-cover border border-gray-200/50 transition-transform duration-300 ${isActive ? 'scale-110' : 'grayscale-[40%]'}`}
            />
          </button>
        );
      })}
    </div>
  );
}
