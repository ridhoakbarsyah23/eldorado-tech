'use client';

import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center gap-1 bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-xl border border-gray-200 shadow-inner w-fit relative z-[9999]">
      {[
        { code: 'id', label: 'ID', flag: 'https://flagcdn.com/w40/id.png' },
        { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/us.png' }
      ].map((lang) => {
        const isActive = locale === lang.code;
        return (
          <Link
            key={lang.code}
            href={pathname || '/'}
            locale={lang.code}
            className={`flex items-center justify-center px-4 py-2 rounded-lg transition-colors duration-300 select-none ${isActive
                ? 'bg-white shadow-sm ring-1 ring-gray-900/5 cursor-default pointer-events-none'
                : 'active:bg-gray-200 cursor-pointer opacity-80 hover:opacity-100'
              }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lang.flag}
              alt={lang.label}
              className={`w-7 h-auto rounded-sm object-cover border border-gray-200/50 transition-transform duration-300 ${isActive ? 'scale-110' : 'grayscale-[40%]'}`}
            />
          </Link>
        );
      })}
    </div>
  );
}
