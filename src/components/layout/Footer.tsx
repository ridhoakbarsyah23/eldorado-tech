import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Navigation');
  return (
    <footer className="bg-slate-950 py-10 text-white sm:py-12">
      <div className="site-shell">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div><Link href="/" className="inline-flex items-center gap-3 text-sm font-extrabold tracking-[0.14em]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-xs tracking-[-0.08em]">ET</span>ELDORADO TECH</Link><p className="mt-5 max-w-md leading-7 text-slate-400">{t('desc')}</p></div>
          <div><h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{t('quickLinks')}</h2><ul className="mt-5 space-y-3 text-slate-300"><li><Link className="hover:text-white" href="/#about">{nav('about')}</Link></li><li><Link className="hover:text-white" href="/#services">{nav('services')}</Link></li><li><Link className="hover:text-white" href="/#portfolio">{nav('portfolio')}</Link></li><li><Link className="hover:text-white" href="/blog">Blog</Link></li></ul></div>
          <div className="min-w-0"><h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">{t('contact')}</h2><address className="responsive-copy mt-5 space-y-3 not-italic text-slate-300"><a className="block hover:text-white" href="mailto:hello@eldoradotech.com">hello@eldoradotech.com</a><p>{t('address')}</p></address></div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {t('rights')}</p><p className="font-mono text-[11px] uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.12em]">Innovate · Build · Elevate</p></div>
      </div>
    </footer>
  );
}
