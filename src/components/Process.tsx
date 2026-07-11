import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Hammer, ClipboardCheck, Trophy } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ClipboardCheck className="w-5 h-5 text-blue-500" />;
      case 1:
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 2:
        return <Hammer className="w-5 h-5 text-blue-500" />;
      case 3:
        return <Trophy className="w-5 h-5 text-blue-500" />;
      default:
        return <Hammer className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-[#0B0C0E] text-white relative overflow-hidden">
      {/* Structural visual accents */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 z-0" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 z-0" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-blue-500"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-blue-500 uppercase font-semibold">
              OUR LIFECYCLE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
            The Structural Process
          </h2>
          <p className="text-sm sm:text-base font-sans text-gray-400 font-light mt-4">
            How we translate challenging architectural blueprints into solid, high-precision concrete and timber frameworks.
          </p>
        </div>

        {/* Timeline Stepper (Horizontal/Vertical hybrid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
          
          {/* Timeline Buttons (Left 4 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-2">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 border transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? 'bg-[#121317] border-blue-500'
                      : 'bg-transparent border-transparent opacity-50 hover:opacity-100'
                  }`}
                  id={`process-step-btn-${idx}`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xl font-bold tracking-tight ${
                      isActive ? 'text-blue-500' : 'text-gray-500'
                    }`}>
                      {step.step}
                    </span>
                    <div className="h-6 w-[1px] bg-white/10" />
                    <div>
                      <h4 className="text-sm font-display font-bold tracking-tight text-white">
                        {step.title}
                      </h4>
                      <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block mt-0.5">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Timeline Content View (Right 8 columns) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="bg-[#121317] border border-white/5 p-8 md:p-12 min-h-[380px] flex flex-col justify-between relative">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                  id={`process-card-${activeStep}`}
                >
                  <div>
                    {/* Top line with phase icon */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-blue-500/10 rounded-none">
                          {getStepIcon(activeStep)}
                        </div>
                        <span className="text-xs font-mono text-blue-500 tracking-widest uppercase">
                          PHASE 0{activeStep + 1} • TIMEFRAME: {PROCESS_STEPS[activeStep].duration}
                        </span>
                      </div>
                      <span className="text-sm font-mono font-bold text-gray-600">
                        JOETOM_PROC_v4
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight mb-4">
                      {PROCESS_STEPS[activeStep].title}
                    </h3>
                    
                    <p className="text-sm md:text-base font-sans text-gray-300 font-light leading-relaxed mb-6">
                      {PROCESS_STEPS[activeStep].description}
                    </p>

                    {/* Deliverables List */}
                    <div className="bg-black/20 p-5 border border-white/[0.02]">
                      <span className="text-[10px] font-mono tracking-widest text-gray-500 block mb-3 uppercase">
                        PHASE DELIVERABLES & DOCUMENTATION:
                      </span>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {PROCESS_STEPS[activeStep].deliverables.map((deliverable, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-500" />
                            <span className="text-xs font-mono text-gray-300 font-light">
                              {deliverable}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <div className="border-t border-white/5 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs font-sans text-gray-500">
                      Phase {activeStep + 1} requires client signatures and engineering releases before starting Phase {activeStep === 3 ? 1 : activeStep + 2}.
                    </span>
                    <button
                      onClick={() => {
                        const next = (activeStep + 1) % PROCESS_STEPS.length;
                        setActiveStep(next);
                      }}
                      className="px-4 py-2 bg-white/5 hover:bg-blue-600 text-white font-mono text-[10px] tracking-widest uppercase transition-colors cursor-pointer"
                    >
                      NEXT PHASE →
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Visual Line Connectors */}
        <div className="hidden lg:grid grid-cols-4 gap-8 text-center mt-12 border-t border-white/5 pt-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className="group cursor-pointer text-left"
              id={`process-mini-step-${idx}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  activeStep === idx ? 'bg-blue-500 scale-110' : 'bg-zinc-800 group-hover:bg-gray-600'
                }`} />
                <span className={`font-mono text-xs ${
                  activeStep === idx ? 'text-white' : 'text-gray-500'
                }`}>
                  Phase {step.step}
                </span>
              </div>
              <h5 className={`text-xs font-display font-medium tracking-tight ${
                activeStep === idx ? 'text-blue-500' : 'text-gray-400'
              }`}>
                {step.title}
              </h5>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
