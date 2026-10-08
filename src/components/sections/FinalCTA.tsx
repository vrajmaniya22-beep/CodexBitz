import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FinalCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-word', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
      });
      
      gsap.to('.cta-word', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="contact"
      ref={containerRef}
      style={{
        padding: '20vh 4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '80vh'
      }}
    >
      <h2 
        className="h1-hero"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          color: 'var(--text-white)',
          marginBottom: '4rem'
        }}
      >
        <div style={{ overflow: 'hidden' }}><span className="cta-word" style={{ display: 'block' }}>HAVE AN IDEA?</span></div>
        <div style={{ overflow: 'hidden' }}><span className="cta-word" style={{ display: 'block' }}>LET'S BUILD IT.</span></div>
      </h2>
      
      <button 
        data-cursor="cta"
        style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          color: 'var(--accent-yellow)',
          padding: '2rem 4rem',
          border: '1px solid var(--accent-yellow)',
          borderRadius: '100px',
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--accent-yellow)';
          e.currentTarget.style.color = 'var(--bg-primary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'var(--accent-yellow)';
        }}
      >
        START A PROJECT <span>&rarr;</span>
      </button>
    </section>
  );
};
