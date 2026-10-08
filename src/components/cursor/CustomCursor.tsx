import React, { useEffect, useRef, useState } from 'react';
import './cursor.css';
import { useSpotlightEffect } from './useSpotlightEffect';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>('');
  
  // Spotlight
  const spotlightRef = useSpotlightEffect({ glowColor: "242, 223, 41", radius: 200 });

  useEffect(() => {
    // Media query to disable on mobile
    const matchMedia = window.matchMedia('(pointer: fine)');
    if (!matchMedia.matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let frameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update data attributes based on hover targets
      const target = e.target as HTMLElement;
      
      // Bubble up to find nearest data-cursor
      const cursorTarget = target.closest('[data-cursor]');
      const cursorState = cursorTarget ? cursorTarget.getAttribute('data-cursor') : 'default';
      
      if (cursorState !== document.body.getAttribute('data-cursor-state')) {
        document.body.setAttribute('data-cursor-state', cursorState || 'default');
      }

      // Handle label
      if (cursorState === 'cta') setLabel('START →');
      else if (cursorState === 'view') setLabel('VIEW');
      else setLabel('');
    };

    const loop = () => {
      // Lerp for smooth physical lag
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        cursorRef.current.parentElement?.classList.add('cursor-active');
      }

      frameId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    frameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div className="cursor-wrapper">
        <div className="cursor-dot" ref={cursorRef}>
          <span className="cursor-label">{label}</span>
        </div>
      </div>
      
      {/* Spotlight Canvas */}
      <canvas 
        ref={spotlightRef} 
        className="spotlight"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 1, // Ensure it's behind the cursor but above the background
        }}
      />
    </>
  );
};
