import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Briefcase, Compass, Hammer, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data';

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>('residential');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-blue-500" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-500" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-blue-500" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-blue-500" />;
      default:
        return <Hammer className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#052E46] text-white overflow-hidden relative">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-blue-500"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-blue-500 uppercase font-semibold">
              OUR CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6">
            Millimeter Accuracy. <br />Architectural Mastery.
          </h2>
          <p className="text-sm sm:text-base font-sans text-gray-400 font-light leading-relaxed">
            Joetom Engineers provides specialized engineering and contracting services for residential, commercial, and civil construction projects.
          </p>
        </div>

        {/* Real Site Photo Banner */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full mb-16 md:mb-24 overflow-hidden border border-white/10">
          <img
            src="/images/gallery-concrete-action.jpg"
            alt="Joetom Engineers crew at work during a concrete pour"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-600/40" />
          <div className="absolute bottom-0 left-0 px-6 py-4 md:px-8 md:py-6 bg-blue-800/90">
            <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-yellow-500 uppercase font-semibold">
              Real Crews. Real Results.
            </span>
          </div>
        </div>

        {/* Services Interactive Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Service Buttons Selector (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {SERVICES_DATA.map((service) => {
              const isExpanded = expandedId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className={`w-full text-left p-6 border transition-all duration-300 relative group cursor-pointer ${
                    isExpanded
                      ? 'bg-white/5 border-blue-500/80 shadow-[0_4px_20px_rgba(37,99,235,0.15)]'
                      : 'bg-white/[0.01] border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                  id={`service-toggle-${service.id}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 transition-colors duration-300 ${
                        isExpanded ? 'bg-blue-500/10' : 'bg-white/5'
                      }`}>
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-gray-500 tracking-wider block mb-0.5">
                          CAPABILITY_0{SERVICES_DATA.findIndex(s => s.id === service.id) + 1}
                        </span>
                        <h3 className="text-lg font-display font-bold text-white tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-blue-500' : ''
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Panel Viewport (Right) */}
          <div className="lg:col-span-7 h-full flex flex-col justify-between">
            <div className="bg-[#0A425F] border border-white/5 p-8 md:p-12 min-h-[420px] flex flex-col justify-between relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 transform translate-x-12 -translate-y-12 rotate-45 pointer-events-none transition-transform duration-700 group-hover:scale-125" />
              
              <AnimatePresence mode="wait">
                {expandedId ? (
                  SERVICES_DATA.filter((s) => s.id === expandedId).map((service) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col justify-between h-full gap-8"
                      id={`service-detail-${service.id}`}
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-[10px] font-mono tracking-widest uppercase">
                            CORE METHOD
                          </span>
                          <span className="text-xs font-mono text-gray-500">
                            Est. Specs v2.1
                          </span>
                        </div>
                        <h4 className="text-2xl font-display font-bold text-white mb-4">
                          {service.title} Specifications
                        </h4>
                        <p className="text-sm font-sans text-gray-400 font-light leading-relaxed mb-8">
                          {service.description}
                        </p>

                        <div className="border-t border-white/5 pt-6">
                          <span className="text-[10px] font-mono tracking-widest text-gray-500 block mb-4 uppercase">
                            CORE OPERATIONAL DELIVERABLES:
                          </span>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.details.map((detail, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                <span className="text-xs font-sans text-gray-300 font-light leading-snug">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-xs font-mono text-gray-500">
                          Looking for specific material loads?
                        </span>
                        <a
                          href="#contact"
                          className="text-xs font-mono text-blue-500 hover:text-white transition-colors flex items-center gap-2 group/btn"
                        >
                          REQUEST BLUEPRINT SPECS
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center text-center h-full py-12">
                    <Compass className="w-12 h-12 text-zinc-700 mb-4 animate-spin-slow" />
                    <h4 className="text-lg font-display text-gray-400 mb-2">Select a capability</h4>
                    <p className="text-xs text-gray-500 max-w-xs font-light">
                      Click any of our architectural capabilities on the left to examine detailed technical guidelines and structural criteria.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
