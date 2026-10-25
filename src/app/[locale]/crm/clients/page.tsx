'use client';

import { useState } from 'react';

const clients = [
  { id: 1, name: 'PT Sejahtera Abadi', contact: 'Dina Mulia', email: 'dina@sejahtera.co.id', activeProjects: 2, totalValue: 'Rp 450M', status: 'Active', lastContact: '2026-07-10' },
  { id: 2, name: 'Koperasi Nusantara', contact: 'Bambang', email: 'bambang@koperasi.id', activeProjects: 1, totalValue: 'Rp 120M', status: 'Active', lastContact: '2026-07-05' },
  { id: 3, name: 'Toko Berkah', contact: 'Haji Lulung', email: 'info@tokoberkah.com', activeProjects: 0, totalValue: 'Rp 45M', status: 'Inactive', lastContact: '2025-11-20' },
  { id: 4, name: 'EduTech Indonesia', contact: 'Rina', email: 'rina@edutech.id', activeProjects: 3, totalValue: 'Rp 850M', status: 'VIP', lastContact: '2026-07-12' },
];

export default function ClientsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = clients.filter((client) => `${client.name} ${client.contact}`.toLowerCase().includes(searchTerm.toLowerCase()));
  const summaries = [['Total clients', '42', 'text-blue-700 bg-blue-50'], ['Active clients', '18', 'text-emerald-700 bg-emerald-50'], ['VIP clients', '4', 'text-violet-700 bg-violet-50']];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between"><div><h2 className="text-3xl font-extrabold tracking-tight text-slate-950">Clients management</h2><p className="mt-2 text-sm text-slate-600">A clear view of active relationships and account value.</p></div><div className="flex flex-col gap-3 sm:flex-row"><label className="relative"><span className="sr-only">Search clients</span><svg aria-hidden="true" className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg><input type="search" placeholder="Search clients" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:w-64" /></label><button type="button" className="min-h-12 rounded-xl bg-orange-600 px-5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(234,88,12,0.18)] hover:bg-orange-700">+ Add client</button></div></div>

      <section aria-label="Client summary" className="grid gap-4 sm:grid-cols-3">{summaries.map(([label, value, color]) => <article key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,0.04)]"><span className={`grid h-12 w-12 place-items-center rounded-xl ${color}`}><svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 20v-9h16v9M7 11V6h10v5M8 15h2M14 15h2" /></svg></span><div><p className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">{label}</p><p className="mt-1 text-2xl font-extrabold text-slate-950">{value}</p></div></article>)}</section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.04)]"><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left"><thead><tr className="bg-slate-50 text-xs font-bold uppercase tracking-[0.09em] text-slate-500"><th className="px-6 py-4">Client info</th><th className="px-6 py-4">Projects</th><th className="px-6 py-4">Lifetime value</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Last contact</th><th className="px-6 py-4 text-right">Action</th></tr></thead><tbody>{filtered.map((client) => <tr key={client.id} className="border-t border-slate-100 text-sm transition-colors hover:bg-slate-50"><td className="px-6 py-4"><p className="font-bold text-slate-950">{client.name}</p><p className="mt-1 text-xs text-slate-500">{client.contact} · {client.email}</p></td><td className="px-6 py-4"><span className="inline-grid h-8 min-w-8 place-items-center rounded-lg bg-slate-100 px-2 font-bold text-slate-700">{client.activeProjects}</span></td><td className="px-6 py-4 font-bold text-slate-800">{client.totalValue}</td><td className="px-6 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${client.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : client.status === 'VIP' ? 'bg-violet-50 text-violet-700' : 'bg-slate-100 text-slate-600'}`}>{client.status}</span></td><td className="px-6 py-4 text-slate-500">{client.lastContact}</td><td className="px-6 py-4 text-right"><button className="min-h-10 rounded-lg px-3 text-sm font-bold text-blue-700 hover:bg-blue-50">View details</button></td></tr>)}</tbody></table></div>{filtered.length === 0 && <div className="border-t border-slate-100 px-6 py-14 text-center"><p className="font-bold text-slate-800">No clients found</p><p className="mt-1 text-sm text-slate-500">Try another company or contact name.</p></div>}</section>
    </div>
  );
}
