'use client';

import { useState } from 'react';

const mockClients = [
  { id: 1, name: 'PT Sejahtera Abadi', contact: 'Dina Mulia', email: 'dina@sejahtera.co.id', phone: '+62 811-1111-2222', activeProjects: 2, totalValue: 'Rp 450M', status: 'Active', lastContact: '2026-07-10' },
  { id: 2, name: 'Koperasi Nusantara', contact: 'Bambang', email: 'bambang@koperasi.id', phone: '+62 855-3333-4444', activeProjects: 1, totalValue: 'Rp 120M', status: 'Active', lastContact: '2026-07-05' },
  { id: 3, name: 'Toko Berkah', contact: 'Haji Lulung', email: 'info@tokoberkah.com', phone: '+62 813-5555-6666', activeProjects: 0, totalValue: 'Rp 45M', status: 'Inactive', lastContact: '2025-11-20' },
  { id: 4, name: 'EduTech Indonesia', contact: 'Rina', email: 'rina@edutech.id', phone: '+62 812-7777-8888', activeProjects: 3, totalValue: 'Rp 850M', status: 'VIP', lastContact: '2026-07-12' },
];

export default function ClientsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredClients = mockClients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    client.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Clients Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your active and past clients</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <input 
              type="text" 
              placeholder="Search clients..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md shadow-blue-500/20 transition-all whitespace-nowrap">
            + Add Client
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">🏢</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Clients</p>
            <p className="text-2xl font-bold text-gray-900">42</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">🟢</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Active Clients</p>
            <p className="text-2xl font-bold text-gray-900">18</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl">⭐</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">VIP Clients</p>
            <p className="text-2xl font-bold text-gray-900">4</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-gray-50/50">
              <tr className="border-b border-gray-100 text-sm text-gray-500">
                <th className="px-6 py-4 font-medium">Client Info</th>
                <th className="px-6 py-4 font-medium">Active Projects</th>
                <th className="px-6 py-4 font-medium">Total Lifetime Value</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Last Contact</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{client.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{client.contact} • {client.email}</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-2 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                      {client.activeProjects}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-700 text-sm">{client.totalValue}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      client.status === 'Active' ? 'bg-green-100 text-green-700' :
                      client.status === 'VIP' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{client.lastContact}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredClients.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No clients found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
