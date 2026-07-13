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
    if (titleRef.current) 
    return () => {};
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-white/50 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 ">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              ref={el => { cardsRef.current[index] = el; }} 
              className=" bg-white border border-gray-200 shadow-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="text-blue-500 mb-6">
                <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-8 italic">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-blue-500/30 mr-4 object-cover"
                />
                <div>
                  <h4 className="text-gray-900 font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
