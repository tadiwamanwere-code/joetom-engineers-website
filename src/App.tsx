import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Owner from './components/Owner';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll helper
  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Scroll listener to update active navigation item based on current viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'owner', 'services', 'projects', 'process', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-gray-900 font-sans selection:bg-orange-500 selection:text-white antialiased">
      {/* Sticky Top Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Primary Layout Sections */}
      <main id="primary-content-scroller">
        {/* Full-screen Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Company About & Values (Bone/Ivory White Background) */}
        <About />

        {/* Meet the Owner (Bone/Ivory White Background) */}
        <Owner />

        {/* Capabilities Accordion (Charcoal Industrial Background) */}
        <Services />

        {/* Portfolio & Case Studies (Bone/Ivory White Background) */}
        <Projects />

        {/* Engineering Process Steps (Charcoal Industrial Background) */}
        <Process />

        {/* Custom Form, Location Map, and Phone Inquiries (Charcoal Industrial Background) */}
        <Contact />
      </main>

      {/* Elegant Architectural Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating AI Assistant Chatbot */}
      <Chatbot />
    </div>
  );
}
