import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;