'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // setTimeout to avoid synchronous setState
    setTimeout(() => setHasMounted(true), 0);
    
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isClickable = hoveredElement?.closest('a, button, input, select, textarea, [role="button"]');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Check hover state frequently
    const hoverInterval = setInterval(updateHoverState, 100);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearInterval(hoverInterval);
    };
  }, [position.x, position.y]);

  if (!hasMounted) return null;
  
  // Don't render cursor on mobile
  if (typeof window !== 'undefined' && window.matchMedia("(hover: none)").matches) return null;

  return (
    <>
      {/* Outer Ring */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-600 rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out hidden md:block"
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0.5 : 1,
        }}
      />
      {/* Inner Dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ 
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
}
