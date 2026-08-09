'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Dashboard', href: '/crm', icon: '📊' },
  { name: 'Leads', href: '/crm/leads', icon: '🎯' },
  { name: 'Clients', href: '/crm/clients', icon: '🏢' },
  { name: 'Projects', href: '/crm/projects', icon: '📁' },
  { name: 'Finance', href: '/crm/finance', icon: '💰' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Extract locale from pathname (e.g. /en/crm -> en, /id/crm -> id)
  const segments = pathname.split('/');
  const locale = segments[1];

  return (
    <aside className={`bg-gray-900 text-white transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} flex flex-col min-h-screen border-r border-gray-800`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-800">
        {!isCollapsed && <span className="font-bold text-xl tracking-tight text-blue-400">Eldorado CRM</span>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          {isCollapsed ? '▶' : '◀'}
        </button>
      </div>

      <nav className="flex-1 py-6 flex flex-col gap-2 px-3">
        {navItems.map((item) => {
          // Construct localized href
          const localizedHref = `/${locale}${item.href}`;
          const isActive = pathname === localizedHref || pathname.startsWith(`${localizedHref}/`);

          return (
            <Link 
              key={item.name} 
              href={localizedHref}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-100'
              }`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              {!isCollapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <Link 
          href={`/${locale}`}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:bg-gray-800 transition-colors"
        >
          <span>🏠</span>
          {!isCollapsed && <span>Back to Site</span>}
        </Link>
      </div>
    </aside>
  );
}
