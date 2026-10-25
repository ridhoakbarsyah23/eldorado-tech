'use client';

import { useState } from 'react';

const leads = [
  { id: 1, name: 'PT Maju Bersama', contact: 'Budi Santoso', phone: '+62 812-3456-7890', service: 'E-Commerce App', value: 'Rp 150M', status: 'Negotiation', date: '2026-07-13' },
  { id: 2, name: 'CV Tech Jaya', contact: 'Andi Wijaya', phone: '+62 856-7890-1234', service: 'Company Profile', value: 'Rp 25M', status: 'New', date: '2026-07-12' },
  { id: 3, name: 'Global Finance', contact: 'Sarah Smith', phone: '+62 811-2233-4455', service: 'AI Chatbot', value: 'Rp 85M', status: 'Proposal Sent', date: '2026-07-11' },
  { id: 4, name: 'Sentosa Store', contact: 'Rudi Hartono', phone: '+62 813-5566-7788', service: 'POS System', value: 'Rp 45M', status: 'Closed Won', date: '2026-07-10' },
  { id: 5, name: 'Klinik Sehat', contact: 'Dr. Anita', phone: '+62 812-9988-7766', service: 'Clinic Management App', value: 'Rp 120M', status: 'Meeting Scheduled', date: '2026-07-09' },
];

const statusClass: Record<string, string> = { New: 'bg-blue-50 text-blue-700', Negotiation: 'bg-orange-50 text-orange-700', 'Proposal Sent': 'bg-violet-50 text-violet-700', 'Meeting Scheduled': 'bg-indigo-50 text-indigo-700', 'Closed Won': 'bg-emerald-50 text-emerald-700' };

export default function LeadsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = leads.filter((lead) => `${lead.name} ${lead.contact}`.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between"><div><h2 className="text-3xl font-extrabold tracking-tight text-slate-950">Leads management</h2><p className="mt-2 text-sm text-slate-600">Track every opportunity from first contact to close.</p></div><div className="flex flex-col gap-3 sm:flex-row"><label className="relative"><span className="sr-only">Search leads</span><svg aria-hidden="true" className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg><input type="search" placeholder="Search leads" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:w-64" /></label><button type="button" className="min-h-12 rounded-xl bg-orange-600 px-5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(234,88,12,0.18)] hover:bg-orange-700">+ New lead</button></div></div>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.04)]"><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left"><thead><tr className="bg-slate-50 text-xs font-bold uppercase tracking-[0.09em] text-slate-500"><th className="px-6 py-4">Company / contact</th><th className="px-6 py-4">Service</th><th className="px-6 py-4">Est. value</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Added</th><th className="px-6 py-4 text-right">Action</th></tr></thead><tbody>{filtered.map((lead) => <tr key={lead.id} className="border-t border-slate-100 text-sm transition-colors hover:bg-slate-50"><td className="px-6 py-4"><p className="font-bold text-slate-950">{lead.name}</p><p className="mt-1 text-xs text-slate-500">{lead.contact} · {lead.phone}</p></td><td className="px-6 py-4 text-slate-600">{lead.service}</td><td className="px-6 py-4 font-bold text-slate-800">{lead.value}</td><td className="px-6 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${statusClass[lead.status]}`}>{lead.status}</span></td><td className="px-6 py-4 text-slate-500">{lead.date}</td><td className="px-6 py-4 text-right"><button className="min-h-10 rounded-lg px-3 text-sm font-bold text-blue-700 hover:bg-blue-50">Edit</button></td></tr>)}</tbody></table></div>{filtered.length === 0 && <div className="border-t border-slate-100 px-6 py-14 text-center"><p className="font-bold text-slate-800">No leads found</p><p className="mt-1 text-sm text-slate-500">Try another company or contact name.</p></div>}<div className="flex flex-col gap-3 border-t border-slate-100 px-6 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>Showing {filtered.length} of {leads.length} entries</p><div className="flex gap-2"><button disabled className="min-h-10 rounded-lg border border-slate-200 px-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50">Previous</button><button disabled className="min-h-10 rounded-lg border border-slate-200 px-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50">Next</button></div></div></section>
    </div>
  );
}
