import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function BlogPage() {
  const t = useTranslations('Navigation');
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-gray-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Blog & Articles</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Halaman ini sedang dalam tahap pengembangan (Coming Soon). Kami akan segera hadir dengan konten-konten menarik seputar dunia teknologi!
        </p>
        <Link href="/" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-500/30">
          Kembali ke Beranda
        </Link>
      </main>
      <Footer />
    </>
  );
}
