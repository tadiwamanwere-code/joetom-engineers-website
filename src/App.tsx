import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
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
      const sections = ['home', 'about', 'services', 'projects', 'gallery', 'process', 'contact'];
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
    <div className="bg-[#F4F7FA] min-h-screen text-gray-900 font-sans selection:bg-orange-500 selection:text-white antialiased">
      {/* Sticky Top Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Primary Layout Sections */}
      <main id="primary-content-scroller">
        {/* Full-screen Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Company About & Values (Bone/Ivory White Background) */}
        <About />

        {/* Services Accordion (Dark Navy Background) */}
        <Services />

        {/* Portfolio & Case Studies (Light Background) */}
        <Projects />

        {/* Real Site Photo Gallery (Mid-Navy Background) */}
        <Gallery />

        {/* Engineering Process Steps (Light Background) */}
        <Process />

        {/* Custom Form, Location Map, and Phone Inquiries (Dark Navy CTA Background) */}
        <Contact />
      </main>

      {/* Elegant Architectural Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating AI Assistant Chatbot */}
      <Chatbot />
    </div>
  );
}
