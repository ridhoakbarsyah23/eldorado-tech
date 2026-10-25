const stats = [
  { title: 'Total Revenue', value: 'Rp 450.000.000', change: '+12%', positive: true },
  { title: 'Active Projects', value: '12', change: '+2', positive: true },
  { title: 'New Leads', value: '48', change: '+18%', positive: true },
  { title: 'Closing Rate', value: '24%', change: '-2%', positive: false },
];

const recentLeads = [
  { name: 'PT Maju Bersama', service: 'E-Commerce App', status: 'Negotiation', date: 'Today' },
  { name: 'CV Tech Jaya', service: 'Company Profile', status: 'New', date: 'Yesterday' },
  { name: 'Global Finance', service: 'AI Chatbot', status: 'Proposal Sent', date: '2 days ago' },
  { name: 'Sentosa Store', service: 'POS System', status: 'Closed Won', date: '3 days ago' },
];

const statusClass: Record<string, string> = { New: 'bg-blue-50 text-blue-700', Negotiation: 'bg-orange-50 text-orange-700', 'Proposal Sent': 'bg-violet-50 text-violet-700', 'Closed Won': 'bg-emerald-50 text-emerald-700' };

export default function CRMOverview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-sm font-semibold text-slate-500">Saturday, 24 October</p><h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-950">Good afternoon, Admin.</h2><p className="mt-2 text-sm text-slate-600">Here is what is happening across your pipeline.</p></div>
        <button type="button" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-orange-600 px-5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(234,88,12,0.2)] transition-colors hover:bg-orange-700 sm:w-auto"><span aria-hidden="true" className="mr-2 text-lg">+</span>Add new lead</button>
      </div>

      <section aria-label="Performance summary" className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <article key={stat.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between"><p className="truncate text-sm font-semibold text-slate-500">{stat.title}</p><span className="font-mono text-[10px] font-bold text-slate-300">0{index + 1}</span></div>
            <p className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950">{stat.value}</p>
            <p className={`mt-3 flex items-center gap-1 text-xs font-bold ${stat.positive ? 'text-emerald-700' : 'text-red-700'}`}><span aria-hidden="true">{stat.positive ? '↗' : '↘'}</span>{stat.change} <span className="font-medium text-slate-400">from last month</span></p>
          </article>
        ))}
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
            <div><h2 className="font-extrabold text-slate-950">Recent leads</h2><p className="mt-1 text-xs text-slate-500">Latest movement in your sales pipeline</p></div>
            <button className="min-h-10 text-sm font-bold text-blue-700 hover:text-blue-900">View all</button>
          </div>

          {/* Mobile: card list */}
          <div className="space-y-3 p-4 md:hidden">
            {recentLeads.map((lead) => (
              <article key={lead.name} className="rounded-xl border border-slate-100 p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="min-w-0 truncate font-bold text-slate-900">{lead.name}</p>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${statusClass[lead.status]}`}>{lead.status}</span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 text-sm">
                  <span className="min-w-0 truncate text-slate-600">{lead.service}</span>
                  <span className="shrink-0 text-xs text-slate-500">{lead.date}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[620px] text-left">
              <thead><tr className="bg-slate-50 text-xs font-bold uppercase tracking-[0.1em] text-slate-500"><th className="px-6 py-3">Company</th><th className="px-6 py-3">Service</th><th className="px-6 py-3">Status</th><th className="px-6 py-3">Updated</th></tr></thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead.name} className="border-t border-slate-100 text-sm hover:bg-slate-50">
                    <td className="px-6 py-4 font-bold text-slate-900">{lead.name}</td>
                    <td className="px-6 py-4 text-slate-600">{lead.service}</td>
                    <td className="px-6 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${statusClass[lead.status]}`}>{lead.status}</span></td>
                    <td className="px-6 py-4 text-slate-500">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,0.04)] sm:p-6">
          <h2 className="font-extrabold text-slate-950">Today&apos;s focus</h2><p className="mt-1 text-xs text-slate-500">3 tasks · 1 complete</p>
          <div className="mt-6 space-y-3">
            {[['Follow up with PT Maju Bersama', '14:00'], ['Send proposal to Global Finance', '16:30'], ['Team sync meeting', '10:00']].map(([task, time], index) => (
              <label key={task} className="flex min-h-16 items-start gap-3 rounded-xl border border-slate-100 p-3 transition-colors hover:bg-slate-50">
                <input type="checkbox" defaultChecked={index === 2} className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 accent-blue-700" />
                <span className="min-w-0"><span className={`block text-sm font-bold ${index === 2 ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{task}</span><span className="mt-1 block text-xs text-slate-500">{index === 2 ? 'Completed' : 'Due'} at {time}</span></span>
              </label>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
