import { motion } from 'motion/react';
import { ShieldCheck, HardHat, Building2 } from 'lucide-react';
import { VALUES_DATA } from '../data';

export default function About() {
  const iconMap = [
    <ShieldCheck className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" key="shield" strokeWidth={1.75} />,
    <HardHat className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" key="hardhat" strokeWidth={1.75} />,
    <Building2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" key="building" strokeWidth={1.75} />,
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F4F7FA] text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-blue-600"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-blue-600 uppercase font-semibold">
                OUR STORY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 leading-tight">
              Ceilings That Transform the Whole Room.
            </h2>
          </div>

          <div className="lg:col-span-7 font-sans text-gray-700 space-y-6 text-base md:text-lg font-light leading-relaxed">
            <p>
              Alstyle Construction specialises in ceilings — PVC, gypsum, and suspended systems — installed and finished to a clean, modern standard. A new ceiling is one of the fastest ways to lift the look and feel of any space.
            </p>
            <p>
              From a single room to a full home or office, we handle everything: design, framing, boarding, cornices, cove and recessed lighting, and the final finish. We work tidily, on schedule, and serve clients across Zimbabwe.
            </p>
          </div>
        </div>

        {/* Brand Values Grid */}
        <div className="border-t border-gray-200 pt-16">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-[0.25em] text-gray-500 uppercase">
              OPERATING PRINCIPLES
            </span>
            <h3 className="text-2xl font-display font-bold tracking-tight text-gray-900 mt-2">
              Why Clients Trust Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {VALUES_DATA.map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white pt-10 pb-8 px-8 border border-gray-100 shadow-sm hover:shadow-xl relative group flex flex-col overflow-hidden transition-shadow duration-300"
                id={`value-card-${idx}`}
              >
                {/* Watermark index number */}
                <span className="absolute -top-3 right-4 text-7xl font-display font-bold text-gray-100 group-hover:text-blue-50 transition-colors duration-300 select-none pointer-events-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="relative w-16 h-16 bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                  {iconMap[idx % iconMap.length]}
                </div>

                <h4 className="relative text-xl md:text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="relative text-sm md:text-base text-gray-600 font-sans font-light leading-relaxed flex-grow">
                  {value.description}
                </p>

                <div className="relative mt-8 h-1 w-12 bg-yellow-500 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
