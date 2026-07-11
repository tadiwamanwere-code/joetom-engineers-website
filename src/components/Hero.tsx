import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_DATA } from '../data';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img
          src={HERO_DATA.bgImage}
          alt="Joetom Engineers Civil and Construction Solutions Build"
          className="w-full h-full object-cover object-center brightness-[0.4] scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Subtle overlay gradients for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-left flex flex-col justify-center h-full">
        <div className="max-w-3xl">
          {/* Animated Category Flag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-blue-500"></span>
            <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-blue-500 uppercase font-medium">
              {HERO_DATA.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-[1.05]"
            id="hero-headline"
          >
            Building Beyond <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Blueprints.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-sans font-light mb-10 leading-relaxed max-w-xl"
            id="hero-subheadline"
          >
            {HERO_DATA.subheadline}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
            id="hero-actions"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-cta-primary"
            >
              {HERO_DATA.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-blue-500 hover:text-blue-500 font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              id="hero-cta-secondary"
            >
              {HERO_DATA.ctaSecondary}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={() => onNavigate('about')}
          className="text-gray-400 hover:text-blue-500 transition-colors duration-300 flex flex-col items-center gap-2 cursor-pointer"
          id="scroll-indicator-btn"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] text-gray-500 uppercase">
            EXPLORE
          </span>
          <div className="h-10 w-[1px] bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{
                y: [0, 40, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-blue-500"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
