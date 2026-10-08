import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'PROJECTS', value: '20+' },
  { label: 'CLIENTS', value: '08+' },
  { label: 'DIGITAL PRODUCTS', value: '15+' },
  { label: 'TECHNOLOGIES', value: '12+' },
];

export const Statistics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-value', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} style={{ padding: '10vh 4rem', borderTop: '1px solid var(--accent-shade)', borderBottom: '1px solid var(--accent-shade)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="stat-value" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--accent-yellow)', lineHeight: 1 }}>
              {stat.value}
            </div>
            <div className="mono-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
