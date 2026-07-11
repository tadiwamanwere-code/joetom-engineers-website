import { Quote } from 'lucide-react';
import { OWNER_DATA } from '../data';

export default function Owner() {
  const initials = OWNER_DATA.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <section id="owner" className="py-24 md:py-36 bg-blue-700 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-yellow-500"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-yellow-500 uppercase font-semibold">
              LEADERSHIP
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white">
            Meet the Owner
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Photo */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            {/* Decorative backdrop block */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0 w-64 h-64 md:w-80 md:h-80 bg-yellow-500 pointer-events-none" />

            <div className="relative z-10 w-full max-w-sm">
              {OWNER_DATA.photo ? (
                <img
                  src={OWNER_DATA.photo}
                  alt={`${OWNER_DATA.name}, ${OWNER_DATA.title} of Joetom Engineers`}
                  className="w-full h-[26rem] sm:h-[32rem] md:h-[36rem] object-contain object-bottom mx-auto drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-[26rem] sm:h-[32rem] flex flex-col items-center justify-center bg-blue-800 text-white">
                  <span className="text-7xl font-display font-bold tracking-tight">{initials}</span>
                  <span className="mt-3 text-xs font-mono tracking-widest text-gray-300 uppercase">
                    Photo coming soon
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-8 pb-4">
            <div>
              <span className="inline-block px-4 py-2 bg-yellow-500 text-[#052E46] font-display font-bold text-xs tracking-widest uppercase">
                {OWNER_DATA.title}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-5 tracking-tight">
                {OWNER_DATA.name}
              </h3>
            </div>

            <div className="relative">
              <Quote className="absolute -top-6 -left-2 w-16 h-16 text-white/10 pointer-events-none" strokeWidth={1} />
              <blockquote className="relative border-l-4 border-yellow-500 pl-6 md:pl-8 italic text-white font-display text-xl md:text-2xl lg:text-3xl font-medium leading-snug">
                "{OWNER_DATA.quote}"
              </blockquote>
            </div>

            <div className="space-y-4 max-w-2xl">
              {OWNER_DATA.bio.map((paragraph, idx) => (
                <p key={idx} className="text-base md:text-lg text-gray-200 font-sans font-light leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
