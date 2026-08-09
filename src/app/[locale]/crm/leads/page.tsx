'use client';

import { useState } from 'react';

const mockLeads = [
  { id: 1, name: 'PT Maju Bersama', contact: 'Budi Santoso', email: 'budi@majubersama.co.id', phone: '+62 812-3456-7890', service: 'E-Commerce App', value: 'Rp 150M', status: 'Negotiation', date: '2026-07-13' },
  { id: 2, name: 'CV Tech Jaya', contact: 'Andi Wijaya', email: 'andi@techjaya.com', phone: '+62 856-7890-1234', service: 'Company Profile', value: 'Rp 25M', status: 'New', date: '2026-07-12' },
  { id: 3, name: 'Global Finance', contact: 'Sarah Smith', email: 'sarah@globalfinance.id', phone: '+62 811-2233-4455', service: 'AI Chatbot', value: 'Rp 85M', status: 'Proposal Sent', date: '2026-07-11' },
  { id: 4, name: 'Sentosa Store', contact: 'Rudi Hartono', email: 'rudi@sentosastore.com', phone: '+62 813-5566-7788', service: 'POS System', value: 'Rp 45M', status: 'Closed Won', date: '2026-07-10' },
  { id: 5, name: 'Klinik Sehat', contact: 'Dr. Anita', email: 'anita@kliniksehat.id', phone: '+62 812-9988-7766', service: 'Clinic Management App', value: 'Rp 120M', status: 'Meeting Scheduled', date: '2026-07-09' },
];

export default function LeadsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredLeads = mockLeads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Leads Management</h1>
          <p className="text-sm text-gray-500 mt-1">Track and manage all your potential clients</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <input 
              type="text" 
              placeholder="Search leads..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md shadow-blue-500/20 transition-all whitespace-nowrap">
            + New Lead
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-gray-50/50">
              <tr className="border-b border-gray-100 text-sm text-gray-500">
                <th className="px-6 py-4 font-medium">Company / Contact</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Est. Value</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date added</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{lead.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{lead.contact} • {lead.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{lead.service}</td>
                  <td className="px-6 py-4 font-medium text-gray-700 text-sm">{lead.value}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                      lead.status === 'Negotiation' ? 'bg-orange-100 text-orange-700' :
                      lead.status === 'Proposal Sent' ? 'bg-purple-100 text-purple-700' :
                      lead.status === 'Meeting Scheduled' ? 'bg-indigo-100 text-indigo-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{lead.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredLeads.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No leads found matching your search.
            </div>
          )}
        </div>
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <div>Showing 1 to {filteredLeads.length} of {mockLeads.length} entries</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
