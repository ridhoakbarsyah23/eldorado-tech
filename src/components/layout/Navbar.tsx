'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-[100] transition-all duration-200 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav aria-label="Main navigation" className="site-shell">
        <div className={`flex h-16 items-center justify-between rounded-2xl border px-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors sm:px-4 ${scrolled ? 'border-slate-200/90 bg-white/95' : 'border-white/80 bg-white/80'}`}>
          <Link
            href="/"
            className="group flex min-h-11 items-center gap-3 rounded-xl px-2"
            aria-label="Eldorado Tech home"
          >
            <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-xl bg-blue-700 text-xs font-black tracking-[-0.08em] text-white shadow-[0_8px_20px_rgba(29,78,216,0.25)] transition-transform duration-200 group-hover:-rotate-3">ET</span>
            <span className="hidden text-sm font-extrabold tracking-[0.12em] text-slate-950 sm:block">ELDORADO <span className="text-blue-700">TECH</span></span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {[
              ['about', '/#about'],
              ['services', '/#services'],
              ['portfolio', '/#portfolio'],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700">
                {t(label)}
              </Link>
            ))}
            <Link href="/blog" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700">Blog</Link>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block"><LanguageSwitcher /></div>
            <Link href="/#contact" className="hidden min-h-11 items-center justify-center rounded-xl bg-orange-600 px-5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(234,88,12,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-700 sm:inline-flex">
              {t('contact')}
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 transition-colors hover:bg-slate-50 lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            >
              {isOpen ? (
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
              ) : (
                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="mt-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.14)] lg:hidden">
            <div className="grid gap-1">
              <Link href="/#about" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">{t('about')}</Link>
              <Link href="/#services" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">{t('services')}</Link>
              <Link href="/#portfolio" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">{t('portfolio')}</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">Blog</Link>
              <div className="mt-2 flex items-center justify-between gap-3 border-t border-slate-100 pt-3 sm:hidden">
                <LanguageSwitcher />
                <Link href="/#contact" onClick={() => setIsOpen(false)} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-orange-600 px-4 text-sm font-bold text-white">{t('contact')}</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
