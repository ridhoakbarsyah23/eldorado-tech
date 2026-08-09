'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

export default function TestimonialSection() {
  const t = useTranslations('Testimonial');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials = [
    { name: "Budi Santoso", role: t('role1'), content: t('content1'), avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Siti Rahma", role: t('role2'), content: t('content2'), avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Andi Wijaya", role: t('role3'), content: t('content3'), avatar: "https://randomuser.me/api/portraits/men/67.jpg" }
  ];

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 bg-[#030712] relative border-t border-white/5 overflow-hidden">
      
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-20 ">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold text-white tracking-tight mb-4">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              ref={el => { cardsRef.current[index] = el; }} 
              className="group bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] p-10 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -right-4 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors duration-500">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-gray-300 mb-10 leading-relaxed font-light relative z-10">&quot;{testimonial.content}&quot;</p>
              
              <div className="flex items-center relative z-10 border-t border-white/5 pt-6">
                <div className="relative mr-4">
                  <div className="absolute inset-0 bg-cyan-500 rounded-full blur-[10px] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full border border-white/20 object-cover relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-cyan-400 transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
