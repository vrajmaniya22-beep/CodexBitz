import { useEffect } from 'react';
import { CustomCursor } from './components/cursor/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { Manifesto } from './components/sections/Manifesto';
import { Services } from './components/sections/Services';
import { SelectedWork } from './components/sections/SelectedWork';
import { Statistics } from './components/sections/Statistics';
import { Process } from './components/sections/Process';
import { TechnologyPlayground } from './components/sections/TechnologyPlayground';
import { Founders } from './components/sections/Founders';
import { Testimonials } from './components/sections/Testimonials';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Lenis smooth scroll or similar could be initialized here if needed
    // For now we rely on CSS smooth scroll and GSAP
    
    // Prevent horizontal overflow
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <SelectedWork />
        <Statistics />
        <Process />
        <TechnologyPlayground />
        <Founders />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
