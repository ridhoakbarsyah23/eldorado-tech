import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 selection:text-white pt-24">
      <Navbar />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
        <header className="mb-10 text-center">
          <div className="text-blue-400 font-medium mb-4">{post.date} &bull; {post.author}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{post.title}</h1>
        </header>
        
        <div 
          className="prose prose-invert prose-blue max-w-none prose-img:rounded-xl prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
      <Footer />
    </main>
  );
}
