import Sidebar from '@/components/crm/Sidebar';
import Topbar from '@/components/crm/Topbar';

export const metadata = {
  title: 'CRM Dashboard | Eldorado Tech',
  description: 'Internal CRM for Eldorado Tech',
};

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
          {children}
        </main>
      </div>
    </div>
  );
}
