import { ArrowUp, ArrowUpRight, Phone, Mail, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-blue-800 text-white border-t border-white/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">

          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-6">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer"
            >
              <img
                src="/images/joetom-logo-400.png"
                alt="Joetom Engineers"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-display font-bold tracking-wide text-base text-white block leading-tight">
                  JOETOM ENGINEERS
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-blue-400 block -mt-0.5">
                  BUILDING EXCELLENCE
                </span>
              </div>
            </button>
            <p className="text-xs md:text-sm font-sans text-gray-400 font-light leading-relaxed max-w-sm">
              Civil, structural, and construction engineering services based in Chinhoyi, Zimbabwe.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase block">
              QUICK SECTIONS
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              {[
                { id: 'about', label: 'ABOUT US' },
                { id: 'owner', label: 'THE OWNER' },
                { id: 'services', label: 'CAPABILITIES' },
                { id: 'projects', label: 'CASE STUDIES' },
                { id: 'gallery', label: 'GALLERY' },
                { id: 'process', label: 'THE LIFECYCLE' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer uppercase"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase block">
              REACH US DIRECTLY
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone2}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <Phone className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  {CONTACT_INFO.phone2Formatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <Mail className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  joetomengineers.co.zw
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <Facebook className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                  @joetomengineers
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-[10px] font-mono text-gray-500">
          <div>
            <p>© {new Date().getFullYear()} JOETOM ENGINEERS. ALL RIGHTS RESERVED.</p>
            <p className="mt-1 text-gray-600">CIVIL ENGINEERING & CONSTRUCTION — CHINHOYI, ZIMBABWE.</p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-blue-400 hover:text-blue-400 transition-colors group cursor-pointer"
            aria-label="Scroll back to top"
          >
            BACK TO TOP
            <ArrowUp className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

      </div>
    </footer>
  );
}
