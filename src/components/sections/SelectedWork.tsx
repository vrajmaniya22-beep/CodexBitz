import React from 'react';

const projects = [
  {
    num: '01',
    title: 'LOCAL OFFERS PLATFORM',
    category: 'WEB PLATFORM',
    tech: 'REACT / NODE / MONGODB',
    desc: 'A high-performance marketplace connecting local businesses with consumers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3'
  },
  {
    num: '02',
    title: 'STITCH CHAI ORDERING',
    category: 'SaaS APPLICATION',
    tech: 'NEXT.JS / POSTGRES / STRIPE',
    desc: 'Scalable B2B ordering system designed for streamlined partner operations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3'
  }
];

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" style={{ padding: '10vh 4rem' }}>
      <h2 className="h2-section" style={{ marginBottom: '4rem' }}>SELECTED WORK</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        {projects.map((project) => (
          <div key={project.num} style={{ position: 'relative' }}>
            
            <div 
              data-cursor="view"
              style={{
                width: '100%',
                height: '60vh',
                backgroundColor: 'var(--accent-shade)',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '2rem'
              }}
            >
              {/* Replace with actual project images */}
              <img 
                src={project.image} 
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.6,
                  transition: 'transform 0.6s ease, opacity 0.6s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.opacity = '0.6';
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div className="mono-label" style={{ marginBottom: '1rem' }}>{project.num}</div>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, margin: 0 }}>
                  {project.title}
                </h3>
              </div>
              <div style={{ textAlign: 'right', maxWidth: '300px' }}>
                <div className="mono-label" style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{project.category}</div>
                <div className="mono-label" style={{ marginBottom: '1rem' }}>{project.tech}</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {project.desc}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
