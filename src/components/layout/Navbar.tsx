'use client';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => setIsOpen(false), 0);
  }, [pathname, locale]);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-200/50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex min-h-11 items-center gap-2" aria-label="Eldorado Tech">
              <Image src="/logo.png" alt="Eldorado Tech" width={44} height={44} className="h-11 w-11 object-contain" priority />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">{t('about')}</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">{t('services')}</Link>
              <Link href="/#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">{t('portfolio')}</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Blog</Link>
              <Link href="/admin/index.html" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                CMS
              </Link>
              <Link href="/#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300">{t('contact')}</Link>
              <LanguageSwitcher />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex h-11 w-11 items-center justify-center text-gray-700 hover:text-blue-600">
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-[1000] bg-black/20 pointer-events-auto touch-manipulation" onClick={closeMenu}>
          <div className="bg-white border-b border-gray-200 shadow-xl w-full pointer-events-auto" onClick={e => e.stopPropagation()}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href={`/${locale}#about`} onClick={closeMenu} className="flex min-h-11 w-full items-center text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium">{t('about')}</a>
              <a href={`/${locale}#services`} onClick={closeMenu} className="flex min-h-11 w-full items-center text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium">{t('services')}</a>
              <a href={`/${locale}#portfolio`} onClick={closeMenu} className="flex min-h-11 w-full items-center text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium">{t('portfolio')}</a>
              <a href={`/${locale}/blog`} onClick={closeMenu} className="flex min-h-11 items-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium">Blog</a>
              <button type="button" onClick={() => { closeMenu(); window.location.assign('/admin/index.html'); }} className="flex min-h-11 w-full items-center text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                CMS Admin
              </button>
              <a href={`/${locale}#contact`} onClick={closeMenu} className="flex min-h-11 w-full items-center justify-center text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md font-medium mt-4 text-center">{t('contact')}</a>
              <div className="pt-6 pb-4 border-t border-gray-200 mt-4 px-3 flex flex-col gap-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {locale === 'id' ? 'Ganti Bahasa' : 'Change Language'}
                </p>
                <LanguageSwitcher onNavigate={() => setIsOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
