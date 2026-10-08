import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { VectorWordmark } from './VectorWordmark';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cinematic Hero Load Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Ensure elements start hidden/scaled
      gsap.set(wordmarkRef.current, { opacity: 0, scale: 1.05, filter: 'blur(10px)' });
      gsap.set(labelsRef.current, { opacity: 0, y: 20 });
      gsap.set('.hero-cta', { opacity: 0, y: 20 });

      tl.to(wordmarkRef.current, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        delay: 0.2
      })
      .to(labelsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1
      }, "-=1")
      .to('.hero-cta', {
        opacity: 1,
        y: 0,
        duration: 1
      }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 4rem',
        overflow: 'hidden'
      }}
    >
      {/* Micro labels */}
      <div 
        ref={labelsRef}
        style={{
          position: 'absolute',
          top: '20vh',
          left: '4rem',
          right: '4rem',
          display: 'flex',
          justifyContent: 'space-between',
          zIndex: 10
        }}
        className="mono-label"
      >
        <span>DIGITAL PRODUCT STUDIO<br/>BASED IN INDIA</span>
        <span style={{ textAlign: 'right' }}>CODXBITZ&reg;<br/>EST. 2026</span>
      </div>

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: '10vh',
      }}>
        {/* Vector Wordmark (Centered & Massive) */}
        <div 
          ref={wordmarkRef}
          data-cursor="wordmark"
          style={{
            position: 'absolute',
            left: '50%', 
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1400px', // Big actual size
            height: '800px',
            zIndex: 1,
            pointerEvents: 'auto'
          }}
        >
          <VectorWordmark />
        </div>
      </div>

      {/* CTAs */}
      <div 
        className="hero-cta"
        style={{
          position: 'absolute',
          bottom: '4rem',
          left: '4rem',
          right: '4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 10
        }}
      >
        <button 
          data-cursor="cta"
          style={{ 
            fontSize: '1.25rem', 
            fontWeight: 600,
            color: 'var(--text-white)'
          }}
        >
          START A PROJECT <span style={{ color: 'var(--accent-yellow)' }}>&rarr;</span>
        </button>

        <a 
          href="#work"
          data-cursor="link"
          className="mono-label"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          EXPLORE OUR WORK &darr;
        </a>
      </div>
    </section>
  );
};
