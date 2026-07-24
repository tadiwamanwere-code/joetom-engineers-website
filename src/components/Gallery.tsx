import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-blue-700 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-yellow-500"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-yellow-500 uppercase font-semibold">
              ON SITE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
            Our Ceiling Gallery
          </h2>
          <p className="text-sm sm:text-base font-sans text-gray-300 font-light mt-4">
            A selection of ceiling styles we install — gypsum bulkheads, LED cove lighting, PVC, suspended grids, and decorative finishes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" id="site-gallery-grid">
          {GALLERY_IMAGES.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => setSelected(idx)}
              className="relative aspect-square overflow-hidden group cursor-pointer border border-white/10"
              id={`gallery-thumb-${idx}`}
              aria-label={`View larger: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}
            id="gallery-lightbox"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-yellow-500 hover:text-[#101820] text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={GALLERY_IMAGES[selected].src}
              alt={GALLERY_IMAGES[selected].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
