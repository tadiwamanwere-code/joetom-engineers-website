import { OWNER_DATA } from '../data';

export default function Owner() {
  const initials = OWNER_DATA.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <section id="owner" className="py-24 md:py-32 bg-[#F4F7FA] text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-blue-600"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-blue-600 uppercase font-semibold">
              LEADERSHIP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900">
            Meet the Owner
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-gray-100 p-8 md:p-12 shadow-sm">
          {/* Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-80 border border-gray-200 p-2 bg-blue-600">
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                {OWNER_DATA.photo ? (
                  <img
                    src={OWNER_DATA.photo}
                    alt={`${OWNER_DATA.name}, ${OWNER_DATA.title} of Joetom Engineers`}
                    className="w-full h-full object-contain object-bottom"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white">
                    <span className="text-5xl font-display font-bold tracking-tight">{initials}</span>
                    <span className="mt-3 text-[10px] font-mono tracking-widest text-gray-300 uppercase">
                      Photo coming soon
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-yellow-500 pointer-events-none" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-yellow-500 pointer-events-none" />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-widest">
                {OWNER_DATA.title}
              </span>
              <h3 className="text-2xl font-display font-bold text-gray-900 mt-1">{OWNER_DATA.name}</h3>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-700 font-sans text-base md:text-lg font-light leading-relaxed">
              "{OWNER_DATA.quote}"
            </blockquote>

            <div className="space-y-4">
              {OWNER_DATA.bio.map((paragraph, idx) => (
                <p key={idx} className="text-sm text-gray-600 font-sans font-light leading-relaxed">
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
