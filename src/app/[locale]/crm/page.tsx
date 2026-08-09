export default function CRMOverview() {
  const stats = [
    { title: 'Total Revenue', value: 'Rp 450.000.000', change: '+12%', isPositive: true },
    { title: 'Active Projects', value: '12', change: '+2', isPositive: true },
    { title: 'New Leads', value: '48', change: '+18%', isPositive: true },
    { title: 'Closing Rate', value: '24%', change: '-2%', isPositive: false },
  ];

  const recentLeads = [
    { name: 'PT Maju Bersama', service: 'E-Commerce App', status: 'Negotiation', date: 'Today' },
    { name: 'CV Tech Jaya', service: 'Company Profile', status: 'New', date: 'Yesterday' },
    { name: 'Global Finance', service: 'AI Chatbot', status: 'Proposal Sent', date: '2 days ago' },
    { name: 'Sentosa Store', service: 'POS System', status: 'Closed Won', date: '3 days ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md shadow-blue-500/20 transition-all">
          + Add New Lead
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
            </div>
            <div className={`mt-2 text-sm font-medium flex items-center gap-1 ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <span>{stat.isPositive ? '↑' : '↓'}</span>
              <span>{stat.change} from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Leads</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-sm text-gray-500">
                  <th className="pb-3 font-medium">Company</th>
                  <th className="pb-3 font-medium">Service</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead, index) => (
                  <tr key={index} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 font-medium text-gray-900">{lead.name}</td>
                    <td className="py-4 text-gray-600">{lead.service}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                        lead.status === 'Negotiation' ? 'bg-orange-100 text-orange-700' :
                        lead.status === 'Proposal Sent' ? 'bg-purple-100 text-purple-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 text-gray-500 text-sm">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Tasks for Today</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Follow up with PT Maju Bersama</p>
                <p className="text-xs text-gray-500 mt-1">Due at 14:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-900">Send Proposal to Global Finance</p>
                <p className="text-xs text-gray-500 mt-1">Due at 16:30 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-400 line-through">Team Sync Meeting</p>
                <p className="text-xs text-gray-400 line-through mt-1">Done at 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
