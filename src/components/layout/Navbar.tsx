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
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsOpen(false), 0);
  }, [pathname, locale]);

  return (
    <>
      <nav className={`fixed z-[100] transition-all duration-300 left-1/2 -translate-x-1/2 ${scrolled ? 'top-4 w-[calc(100%-2rem)] md:w-auto md:min-w-[700px]' : 'top-6 w-[calc(100%-2rem)] md:w-[800px]'} border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl rounded-full`}>
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/" 
                className="flex items-center gap-2" 
                aria-label="Eldorado Tech"
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <Image src="/logo.png" alt="Eldorado Tech" width={36} height={36} className="h-9 w-9 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" priority />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 ml-auto">
              <Link href="/#about" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-300">{t('about')}</Link>
              <Link href="/#services" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-300">{t('services')}</Link>
              <Link href="/#portfolio" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-300">{t('portfolio')}</Link>
              <Link href="/blog" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-300">Blog</Link>
              
              <div className="h-4 w-px bg-white/20 mx-2"></div>
              
              <LanguageSwitcher />
              
              <Link href="/#contact" className="ml-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
                {t('contact')}
              </Link>
            </div>
            
            <div className="flex md:hidden items-center gap-4">
              <LanguageSwitcher />
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center text-gray-300 hover:text-cyan-400 p-1">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu full screen overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm pointer-events-auto transition-opacity" onClick={closeMenu}>
          <div className="fixed inset-x-4 top-24 bottom-auto max-h-[80vh] overflow-y-auto bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl pointer-events-auto" onClick={e => e.stopPropagation()}>
            <div className="px-5 py-6 space-y-3">
              <Link href="/#about" onClick={closeMenu} className="flex w-full items-center text-left text-gray-300 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">{t('about')}</Link>
              <Link href="/#services" onClick={closeMenu} className="flex w-full items-center text-left text-gray-300 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">{t('services')}</Link>
              <Link href="/#portfolio" onClick={closeMenu} className="flex w-full items-center text-left text-gray-300 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">{t('portfolio')}</Link>
              <Link href="/blog" onClick={closeMenu} className="flex w-full items-center text-left text-gray-300 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors">Blog</Link>
              <Link href="/admin/index.html" onClick={closeMenu} className="flex w-full items-center text-left text-gray-400 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors gap-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                CMS Admin
              </Link>
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link href="/#contact" onClick={closeMenu} className="flex w-full items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 py-3.5 rounded-xl font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)]">{t('contact')}</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
