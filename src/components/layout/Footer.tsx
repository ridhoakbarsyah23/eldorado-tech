import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navigation');
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 inline-block tracking-tight">
              ELDORADO TECH
            </Link>
            <p className="text-gray-400 max-w-md mt-4 leading-relaxed font-light">
              {t('desc')}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">{t('quickLinks')}</h4>
            <ul className="space-y-4">
              <li><Link href="/#about" className="text-gray-400 hover:text-cyan-400 transition-colors">{tNav('about')}</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-cyan-400 transition-colors">{tNav('services')}</Link></li>
              <li><Link href="/#portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors">{tNav('portfolio')}</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div id="contact">
            <h4 className="text-white font-semibold mb-6 tracking-wide">{t('contact')}</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">hello@eldoradotech.com</li>
              <li>{t('address')}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} {t('rights')}
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            {/* Social Icons */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <span className="sr-only">Twitter</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
