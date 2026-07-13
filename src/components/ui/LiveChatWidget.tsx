'use client';
import { useState, useEffect } from 'react';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isLauncherVisible, setIsLauncherVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setHasMounted(true), 0);
  }, []);

  useEffect(() => {
    const updateLauncherVisibility = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      setIsLauncherVisible(!isMobile || window.scrollY > window.innerHeight * 0.65 || isOpen);
    };

    updateLauncherVisibility();
    window.addEventListener('scroll', updateLauncherVisibility, { passive: true });
    window.addEventListener('resize', updateLauncherVisibility);

    return () => {
      window.removeEventListener('scroll', updateLauncherVisibility);
      window.removeEventListener('resize', updateLauncherVisibility);
    };
  }, [isOpen]);

  if (!hasMounted) return null;
  if (!isLauncherVisible) return null;

  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] left-3 md:left-auto md:bottom-6 md:right-6 z-50 flex flex-col items-start md:items-end">
      {/* Chat Box */}
      <div 
        className={`mb-3 w-[calc(100vw-1.5rem)] sm:w-[350px] bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-left md:origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 mr-3">
                ET
              </div>
              <div className="absolute bottom-0 right-3 w-3 h-3 bg-green-500 border-2 border-blue-600 rounded-full"></div>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Tim Support Eldorado</h4>
              <p className="text-blue-100 text-xs">Membalas dengan cepat</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="h-80 bg-gray-50 p-4 overflow-y-auto flex flex-col gap-4">
          <div className="flex flex-col items-center justify-center mb-4 text-center">
            <span className="text-xs text-gray-500 mb-2">Hari ini</span>
          </div>
          
          <div className="flex items-start max-w-[85%]">
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl rounded-tl-sm p-3 text-sm text-gray-700">
              Halo! 👋 Ada yang bisa kami bantu dengan proyek teknologi Anda hari ini?
            </div>
          </div>
        </div>

        <div className="p-3 bg-white border-t border-gray-200">
          <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Ketik pesan..." 
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-900 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-400"
            />
            <button 
              type="submit"
              className="w-11 h-11 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4 translate-x-[-1px] translate-y-[1px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-900/50 transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? (
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
