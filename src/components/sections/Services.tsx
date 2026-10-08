import React from 'react';
import './Services.css';

const services = [
  { num: '01', title: 'FULL-STACK DEVELOPMENT', desc: 'End-to-end robust web platforms.' },
  { num: '02', title: 'WEB APPLICATIONS', desc: 'Scalable and interactive applications.' },
  { num: '03', title: 'CUSTOM SOFTWARE', desc: 'Tailored solutions for complex problems.' },
  { num: '04', title: 'SAAS PRODUCTS', desc: 'High-performance cloud products.' },
  { num: '05', title: 'UI / UX IMPLEMENTATION', desc: 'Pixel-perfect, engaging interfaces.' },
  { num: '06', title: 'BACKEND / API SYSTEMS', desc: 'Secure, fast, and reliable architecture.' },
  { num: '07', title: 'MAINTENANCE & EVOLUTION', desc: 'Continuous improvement & scaling.' },
];

export const Services: React.FC = () => {
  return (
    <section id="services" style={{ padding: '10vh 0' }}>
      <div style={{ padding: '0 4rem', marginBottom: '4rem' }}>
        <h3 className="mono-label">SERVICES & EXPERTISE</h3>
      </div>
      
      <div className="services-container">
        {services.map((service) => (
          <div 
            key={service.num} 
            className="service-row"
            data-cursor="view"
          >
            <div className="service-number mono-label">{service.num}</div>
            <div className="service-title">{service.title}</div>
            <div className="service-desc">{service.desc}</div>
            <div className="service-arrow">&rarr;</div>
            <div className="service-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
