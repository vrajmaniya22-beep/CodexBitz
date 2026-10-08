import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section style={{ padding: '15vh 4rem', borderTop: '1px solid var(--accent-shade)' }}>
      <h2 className="mono-label" style={{ marginBottom: '6rem' }}>CLIENT TESTIMONIALS</h2>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h3 
          style={{ 
            fontSize: 'clamp(2rem, 5vw, 4rem)', 
            fontWeight: 700, 
            lineHeight: 1.2, 
            marginBottom: '4rem',
            color: 'var(--text-white)' 
          }}
        >
          "Client testimonial will be added here. This placeholder represents the scale and editorial layout of the final testimonial."
        </h3>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--accent-shade)' }}></div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.25rem' }}>[CLIENT NAME]</div>
            <div className="mono-label" style={{ marginTop: '0.25rem' }}>[ROLE], [COMPANY]</div>
          </div>
        </div>
      </div>
    </section>
  );
};
