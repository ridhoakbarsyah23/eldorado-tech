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
    if (titleRef.current) 
    return () => {};
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-gray-50/50 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 ">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              ref={el => { cardsRef.current[index] = el; }} 
              className=" group text-center"
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md  group-hover:opacity-40 transition-opacity duration-500"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover relative z-10 border-4 border-white shadow-lg group-hover:border-blue-100 transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 text-sm mb-4">{member.role}</p>
              <div className="flex justify-center space-x-3  group-hover:opacity-100 transition-opacity duration-300">
                <a href={member.social} className="text-gray-400 hover:text-blue-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
