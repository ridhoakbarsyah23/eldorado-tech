'use client';

import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MarketingMotion() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-marketing-page]');

    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const heroItems = Array.from(
        root.querySelectorAll<HTMLElement>('[data-motion-hero-item]'),
      );

      gsap.from(heroItems, {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.09,
        ease: 'power3.out',
        clearProps: 'opacity,visibility,transform',
      });

      root.querySelectorAll<HTMLElement>('[data-motion-section]').forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>('[data-motion-item]');

        if (items.length === 0) return;

        gsap.from(items, {
          autoAlpha: 0,
          y: 24,
          scale: 0.985,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'opacity,visibility,transform',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        });
      });
    });

    return () => media.revert();
  }, []);

  return null;
}
