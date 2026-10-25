'use client';

import { usePathname } from 'next/navigation';

export default function Topbar() {
  const pathname = usePathname();
  const title = pathname.endsWith('/leads') ? 'Leads' : pathname.endsWith('/clients') ? 'Clients' : 'Overview';
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-[#f4f7fb]/90 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div><div className="flex items-center gap-2"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">Eldorado CRM</p><span className="rounded-full bg-orange-100 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.1em] text-orange-800">Demo</span></div><h1 className="mt-1 text-xl font-extrabold tracking-tight text-slate-950">{title}</h1></div>
        <div className="flex items-center gap-2 sm:gap-4">
          <label className="relative hidden sm:block"><span className="sr-only">Search CRM</span><svg aria-hidden="true" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg><input type="search" placeholder="Search workspace" className="h-11 w-56 rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 xl:w-72" /></label>
          <button type="button" aria-label="Notifications" className="relative grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm hover:text-blue-700"><svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 8h18c0-1-3-1-3-8ZM10 21h4" /></svg><span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white" /></button>
          <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-950 text-xs font-black text-white">AD</span><div className="hidden xl:block"><p className="text-sm font-bold text-slate-800">Admin User</p><p className="text-xs text-slate-500">Superadmin</p></div></div>
        </div>
      </div>
    </header>
  );
}
