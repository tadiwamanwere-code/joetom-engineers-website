import { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'owner', label: 'OWNER' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'process', label: 'PROCESS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0C0E]/95 backdrop-blur-md py-4 border-b border-white/5 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => handleItemClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
          id="brand-logo-btn"
        >
          <div className="relative w-9 h-9 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-blue-500 bg-white/5">
            <Hammer className="w-4 h-4 text-white group-hover:text-blue-500 transition-colors duration-300" />
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </div>
          <div>
            <span className="font-display font-bold tracking-widest text-lg text-white block">
              JOETOM
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-gray-400 block -mt-1 group-hover:text-blue-500 transition-colors duration-300">
              ENGINEERS
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`text-xs font-mono tracking-widest font-medium cursor-pointer transition-colors duration-300 relative py-2 block ${
                    activeSection === item.id
                      ? 'text-blue-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleItemClick('contact')}
            className="ml-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
            id="nav-cta-btn"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-1 hover:text-blue-500 transition-colors cursor-pointer"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0B0C0E]/98 border-b border-white/5 overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className={`text-sm font-mono tracking-widest font-medium w-full text-left py-2 border-b border-white/5 cursor-pointer ${
                        activeSection === item.id ? 'text-blue-500' : 'text-gray-300'
                      }`}
                      id={`mobile-nav-link-${item.id}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleItemClick('contact')}
                className="w-full text-center py-3 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs tracking-widest uppercase transition-colors cursor-pointer"
                id="mobile-nav-cta"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
