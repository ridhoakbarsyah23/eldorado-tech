'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function TeamSection() {
  const t = useTranslations('Team');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const team = [
    { name: "Arif Kurniawan", role: t('role1'), image: "https://randomuser.me/api/portraits/men/41.jpg", social: "#" },
    { name: "Diana Lestari", role: t('role2'), image: "https://randomuser.me/api/portraits/women/65.jpg", social: "#" },
    { name: "Reza Mahendra", role: t('role3'), image: "https://randomuser.me/api/portraits/men/22.jpg", social: "#" },
    { name: "Putri Amanda", role: t('role4'), image: "https://randomuser.me/api/portraits/women/17.jpg", social: "#" }
  ];

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-32 bg-[#0a0a0a] relative border-t border-white/5 overflow-hidden">
      
      {/* Decorative gradient blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-20 ">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white tracking-tight mb-4">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              ref={el => { cardsRef.current[index] = el; }} 
              className="group text-center bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] p-8 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-colors duration-500"></div>

              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-[20px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover relative z-10 border border-white/10 shadow-2xl group-hover:border-cyan-400/50 transition-colors duration-500 filter grayscale group-hover:grayscale-0"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">{member.name}</h3>
              <p className="text-gray-400 text-sm mb-6 font-light">{member.role}</p>
              
              <div className="flex justify-center space-x-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                <a href={member.social} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
