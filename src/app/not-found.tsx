import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-blue-500/30">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(800px,130vw)] w-[min(800px,130vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"></div>
      
      {/* Animated Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-cyan-500/20 rotate-45 animate-[pulse_4s_ease-in-out_infinite]"></div>

      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-7xl font-extrabold tracking-tighter text-transparent drop-shadow-lg sm:text-9xl">
          404
        </h1>
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-400 mb-10 max-w-md mx-auto text-lg">
          Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-full text-white font-semibold transition-all duration-300 group"
        >
          <svg className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
