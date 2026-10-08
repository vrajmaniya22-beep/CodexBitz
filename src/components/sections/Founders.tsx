import React from 'react';

export const Founders: React.FC = () => {
  return (
    <section id="about" style={{ padding: '15vh 4rem', backgroundColor: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '800px', marginBottom: '10rem' }}>
        <h2 className="mono-label" style={{ marginBottom: '2rem' }}>ABOUT CODXBITZ</h2>
        <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, lineHeight: 1.4, color: 'var(--text-primary)' }}>
          A software and digital product development studio focused on transforming ideas into reliable, scalable and visually strong digital products.
        </p>
      </div>

      <h2 className="mono-label" style={{ marginBottom: '4rem' }}>THE PEOPLE BEHIND CODXBITZ</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem' }}>
        {/* FOUNDER 01 */}
        <div>
          <div 
            style={{ 
              width: '100%', 
              aspectRatio: '3/4', 
              backgroundColor: 'var(--accent-shade)', 
              marginBottom: '2rem',
              overflow: 'hidden'
            }}
            data-cursor="view"
          >
            {/* Placeholder for Founder 1 Image */}
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              [IMAGE PLACEHOLDER]
            </div>
          </div>
          <div className="mono-label" style={{ marginBottom: '0.5rem' }}>FOUNDER 01</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>[NAME]</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>[ROLE]</p>
        </div>

        {/* FOUNDER 02 */}
        <div>
          <div 
            style={{ 
              width: '100%', 
              aspectRatio: '3/4', 
              backgroundColor: 'var(--accent-shade)', 
              marginBottom: '2rem',
              overflow: 'hidden'
            }}
            data-cursor="view"
          >
            {/* Placeholder for Founder 2 Image */}
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              [IMAGE PLACEHOLDER]
            </div>
          </div>
          <div className="mono-label" style={{ marginBottom: '0.5rem' }}>FOUNDER 02</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>[NAME]</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>[ROLE]</p>
        </div>
      </div>
    </section>
  );
};
