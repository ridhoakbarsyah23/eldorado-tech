'use client';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useState, useEffect, useTransition } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, locale]);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-200/50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Eldorado Tech" width={150} height={40} className="object-contain h-10 w-auto" style={{ width: 'auto' }} priority />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">{t('about')}</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">{t('services')}</Link>
              <Link href="/#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">{t('portfolio')}</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Blog</Link>
              <a href="/admin/index.html" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                CMS
              </a>
              <Link href="/#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300">{t('contact')}</Link>
              <LanguageSwitcher />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 p-2">
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
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium">{t('about')}</Link>
            <Link href="/#services" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium">{t('services')}</Link>
            <Link href="/#portfolio" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium">{t('portfolio')}</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium">Blog</Link>
            <a href="/admin/index.html" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              CMS Admin
            </a>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="block text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md font-medium mt-4 text-center">{t('contact')}</Link>
            <div className="pt-6 pb-4 border-t border-gray-200 mt-4 px-3 flex flex-col gap-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {locale === 'id' ? 'Ganti Bahasa' : 'Change Language'}
              </p>
              <LanguageSwitcher />
            </div>
          </div>

        </div>
      )}
    </nav>
  );
}
