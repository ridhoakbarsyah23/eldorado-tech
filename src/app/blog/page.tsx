import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900 selection:bg-blue-500/30 selection:text-blue-900 pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Blog & Wawasan</h1>
        <p className="text-gray-600 text-lg mb-12">Berita terbaru dan pemikiran dari tim Eldorado Tech.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="bg-white/80 backdrop-blur-md border border-blue-500/20 shadow-lg rounded-2xl p-6 h-full hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-sm text-blue-600 mb-2">{post.date} &bull; {post.author}</div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed line-clamp-3">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
