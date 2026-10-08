import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem 4rem',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      mixBlendMode: 'difference'
    }}>
      <div 
        style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-white)' }}
        data-cursor="link"
      >
        CODXBITZ
      </div>
      
      <div style={{ display: 'flex', gap: '3rem', fontSize: '0.85rem', fontWeight: 500 }}>
        {['WORK', 'SERVICES', 'ABOUT', 'PROCESS', 'CONTACT'].map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item} data-cursor="link" style={{ position: 'relative', overflow: 'hidden' }} className="nav-link">
            {item}
          </a>
        ))}
      </div>
      
      <button 
        data-cursor="cta"
        style={{ 
          fontSize: '0.85rem', 
          fontWeight: 600, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          color: 'var(--accent-yellow)'
        }}
      >
        START A PROJECT <span>&rarr;</span>
      </button>
    </nav>
  );
};
