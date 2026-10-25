import Sidebar from '@/components/crm/Sidebar';
import Topbar from '@/components/crm/Topbar';

export const metadata = { title: 'CRM Dashboard | Eldorado Tech', description: 'Internal CRM for Eldorado Tech' };

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1 lg:pl-72">
        <Topbar />
        <main className="mx-auto w-full max-w-[100rem] px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-10 lg:pt-8">{children}</main>
      </div>
    </div>
  );
}
