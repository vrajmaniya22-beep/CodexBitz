import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-line', {
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
      
      // Make the polygon animate correctly for reveal
      gsap.to('.manifesto-line', {
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
      ref={containerRef}
      style={{
        padding: '15vh 4rem',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <h2 
        className="h2-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <div style={{ overflow: 'hidden' }}><span className="manifesto-line" style={{ display: 'block', color: 'var(--text-muted)' }}>WE DON'T JUST</span></div>
        <div style={{ overflow: 'hidden' }}><span className="manifesto-line" style={{ display: 'block', color: 'var(--text-muted)' }}>BUILD WEBSITES.</span></div>
        <div style={{ height: '2rem' }}></div>
        <div style={{ overflow: 'hidden' }}><span className="manifesto-line" style={{ display: 'block' }}>WE BUILD</span></div>
        <div style={{ overflow: 'hidden' }}><span className="manifesto-line" style={{ display: 'block' }}>DIGITAL PRODUCTS</span></div>
        <div style={{ overflow: 'hidden' }}><span className="manifesto-line" style={{ display: 'block' }}><span style={{ color: 'var(--accent-yellow)' }}>PEOPLE REMEMBER.</span></span></div>
      </h2>
    </section>
  );
};
