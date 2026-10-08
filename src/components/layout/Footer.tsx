import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '4rem', borderTop: '1px solid var(--accent-shade)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-white)', marginBottom: '2rem' }}>
          CODXBITZ
        </div>
        <div className="mono-label" style={{ color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} CODXBITZ STUDIO. ALL RIGHTS RESERVED.
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="mono-label" style={{ color: 'var(--text-white)' }}>SOCIALS</div>
          <a href="#" data-cursor="link" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>X (TWITTER)</a>
          <a href="#" data-cursor="link" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>LINKEDIN</a>
          <a href="#" data-cursor="link" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>INSTAGRAM</a>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="mono-label" style={{ color: 'var(--text-white)' }}>CONTACT</div>
          <a href="mailto:hello@codxbitz.com" data-cursor="link" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>HELLO@CODXBITZ.COM</a>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>INDIA</div>
        </div>
      </div>
    </footer>
  );
};
