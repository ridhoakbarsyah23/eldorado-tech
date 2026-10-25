'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/crm', icon: <path key="dashboard" d="M4 13h6V4H4v9Zm0 7h6v-4H4v4Zm10 0h6v-9h-6v9Zm0-16v4h6V4h-6Z" /> },
  { name: 'Leads', href: '/crm/leads', icon: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3" /></> },
  { name: 'Clients', href: '/crm/clients', icon: <><path d="M4 20v-9h16v9M7 11V6h10v5M8 15h2M14 15h2" /></> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-slate-800 bg-slate-950 text-white lg:flex">
        <div className="flex h-24 items-center gap-3 border-b border-white/10 px-7"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-xs font-black tracking-[-0.08em]">ET</span><div><p className="text-sm font-extrabold tracking-[0.12em]">ELDORADO</p><p className="text-xs font-bold tracking-[0.18em] text-blue-400">CRM</p></div></div>
        <nav className="flex-1 space-y-2 p-5" aria-label="CRM navigation">
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Workspace</p>
          {navItems.map((item) => {
            const href = `/${locale}${item.href}`;
            const isActive = item.href === '/crm' ? pathname === href : pathname.startsWith(href);
            return <Link key={item.name} href={href} aria-current={isActive ? 'page' : undefined} className={`flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition-colors ${isActive ? 'bg-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.26)]' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}><svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill={item.name === 'Dashboard' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8">{item.icon}</svg>{item.name}</Link>;
          })}
        </nav>
        <div className="border-t border-white/10 p-5"><Link href={`/${locale}`} className="flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-semibold text-slate-400 transition-colors hover:bg-white/5 hover:text-white"><svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m3 11 9-8 9 8M5 10v10h14V10M9 20v-6h6v6" /></svg>Back to website</Link></div>
      </aside>

      <nav className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-40 grid grid-cols-3 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-[0_16px_45px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:hidden" aria-label="CRM mobile navigation">
        {navItems.map((item) => {
          const href = `/${locale}${item.href}`;
          const isActive = item.href === '/crm' ? pathname === href : pathname.startsWith(href);
          return <Link key={item.name} href={href} aria-current={isActive ? 'page' : undefined} className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-bold ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-500'}`}><svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill={item.name === 'Dashboard' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8">{item.icon}</svg>{item.name}</Link>;
        })}
      </nav>
    </>
  );
}
