'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function ServicesSection() {
  const t = useTranslations('Services');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: t('s1Title'),
      description: t('s1Desc'),
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      className: "lg:col-span-2",
      gradient: "from-cyan-500/10 to-blue-500/10",
      borderGlow: "group-hover:border-cyan-500/50"
    },
    {
      title: t('s2Title'),
      description: t('s2Desc'),
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      className: "lg:col-span-1 lg:row-span-2",
      gradient: "from-indigo-500/10 to-purple-500/10",
      borderGlow: "group-hover:border-indigo-500/50"
    },
    {
      title: t('s3Title'),
      description: t('s3Desc'),
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      className: "lg:col-span-2",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderGlow: "group-hover:border-blue-500/50"
    }
  ];

  useEffect(() => {
    // Basic GSAP animation for elements if needed
    return () => {};
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-[#030712] relative border-t border-white/10 overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-96 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-96 bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white tracking-tight mb-6">
            {t('title')}
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => { cardsRef.current[index] = el; }} 
              className={`group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:bg-white/[0.04] overflow-hidden ${service.className} ${service.borderGlow}`}
            >
              {/* Background Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="bg-white/5 border border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>
                
                {/* Minimalist arrow at bottom */}
                <div className="mt-auto pt-8 flex justify-end opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
