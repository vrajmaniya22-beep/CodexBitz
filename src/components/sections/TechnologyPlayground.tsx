import React, { useEffect, useRef } from 'react';
import './TechnologyPlayground.css';

const techList = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB',
  'PostgreSQL', 'TypeScript', 'WebGL', 'GSAP', 'Tailwind',
  'AWS', 'Docker', 'GraphQL', 'REST API', 'Framer Motion'
];

export const TechnologyPlayground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.tech-item');
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      elements.forEach((el: any) => {
        const itemRect = el.getBoundingClientRect();
        const itemX = itemRect.left - rect.left + itemRect.width / 2;
        const itemY = itemRect.top - rect.top + itemRect.height / 2;
        
        const distX = mouseX - itemX;
        const distY = mouseY - itemY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 200) {
          const pushX = (distX / distance) * -20;
          const pushY = (distY / distance) * -20;
          el.style.transform = `translate3d(${pushX}px, ${pushY}px, 0) scale(1.1)`;
          el.style.color = 'var(--accent-yellow)';
        } else {
          el.style.transform = 'translate3d(0, 0, 0) scale(1)';
          el.style.color = 'var(--text-muted)';
        }
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', () => {
        const elements = container.querySelectorAll('.tech-item');
        elements.forEach((el: any) => {
          el.style.transform = 'translate3d(0, 0, 0) scale(1)';
          el.style.color = 'var(--text-muted)';
        });
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section style={{ padding: '15vh 4rem', overflow: 'hidden' }}>
      <h2 className="mono-label" style={{ marginBottom: '4rem' }}>TECHNOLOGY PLAYGROUND</h2>
      <div 
        ref={containerRef}
        className="tech-playground"
        data-cursor="text"
      >
        {techList.map((tech) => (
          <div key={tech} className="tech-item">{tech}</div>
        ))}
      </div>
    </section>
  );
};
