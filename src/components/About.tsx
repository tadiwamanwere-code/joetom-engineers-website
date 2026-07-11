import { motion } from 'motion/react';
import { ShieldCheck, HardHat, Eye } from 'lucide-react';
import { VALUES_DATA } from '../data';

export default function About() {
  const iconMap = [
    <ShieldCheck className="w-5 h-5 text-blue-600 group-hover:text-white" key="shield" />,
    <HardHat className="w-5 h-5 text-blue-600 group-hover:text-white" key="hardhat" />,
    <Eye className="w-5 h-5 text-blue-600 group-hover:text-white" key="eye" />,
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF9F6] text-gray-900 overflow-hidden">
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
              A Legacy of Steel, Concrete & Vision.
            </h2>
          </div>
          
          <div className="lg:col-span-7 font-sans text-gray-700 space-y-6 text-base md:text-lg font-light leading-relaxed">
            <p>
              Joetom Engineers was born from a singular conviction: that ambitious architectural designs should be engineered and executed without compromise. We refuse to let structural hurdles dilute design elegance.
            </p>
            <p>
              By combining structural contracting expertise with careful project management, we deliver residential builds, complex structural frames, and commercial developments across Zimbabwe. Every joint, pour, and material selection is executed with care.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES_DATA.map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 border border-gray-100 shadow-sm relative group hover:border-blue-500 transition-colors duration-300"
                id={`value-card-${idx}`}
              >
                <div className="w-10 h-10 rounded-none bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {iconMap[idx % iconMap.length]}
                  </div>
                </div>
                <h4 className="text-lg font-display font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 font-sans font-light leading-relaxed">
                  {value.description}
                </p>
                <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
