import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'DISCOVER' },
  { num: '02', title: 'DEFINE' },
  { num: '03', title: 'DESIGN' },
  { num: '04', title: 'BUILD' },
  { num: '05', title: 'LAUNCH' },
  { num: '06', title: 'EVOLVE' },
];

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const processSteps = gsap.utils.toArray('.process-step');
      
      processSteps.forEach((step: any) => {
        ScrollTrigger.create({
          trigger: step,
          start: 'top center',
          end: 'bottom center',
          toggleClass: 'active',
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} style={{ padding: '15vh 4rem' }}>
      <h2 className="h2-section" style={{ marginBottom: '6rem' }}>PROCESS</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map((step) => (
          <div key={step.num} className="process-step">
            <div className="process-num mono-label">{step.num}</div>
            <div className="process-title">{step.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
