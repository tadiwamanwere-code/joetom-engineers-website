import { Project, Service, Value, ProcessStep } from './types';

export const HERO_DATA = {
  bgImage: "/images/alstyle-hero.jpg",
  tagline: "TRANSFORM YOUR SPACE",
  headline: "Alstyle Construction",
  subheadline: "Ceiling installation & renovation specialists — PVC, gypsum, and suspended ceilings finished to a clean, modern standard, from top to bottom.",
  ctaPrimary: "Get A Free Quote",
  ctaSecondary: "View Our Work"
};

export const VALUES_DATA: Value[] = [
  {
    title: "Clean, Precise Finishes",
    description: "Seamless joints, crisp bulkheads, and level lines — the kind of finish that makes a whole room feel new."
  },
  {
    title: "Quality Materials",
    description: "Durable PVC panels, proper gypsum board, and trusted fittings, so your ceiling looks great and lasts for years."
  },
  {
    title: "Neat, On-Time Installs",
    description: "We work to schedule, protect your space, and clean up after ourselves — no mess left behind."
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: "pvc-ceilings",
    iconName: "PanelTop",
    title: "PVC Ceilings",
    description: "Waterproof, durable, and low-maintenance PVC ceilings — an affordable, modern finish ideal for kitchens, bathrooms, and high-humidity rooms.",
    details: [
      "Water- and moisture-resistant panels",
      "Wide range of colours and finishes",
      "Easy to clean and long lasting",
      "Fast, cost-effective installation"
    ]
  },
  {
    id: "gypsum-ceilings",
    iconName: "Layers",
    title: "Gypsum Ceilings",
    description: "Smooth, seamless gypsum ceilings with bulkheads, cove detailing, and recessed lighting for a premium, contemporary interior.",
    details: [
      "Seamless skimmed finish",
      "Bulkheads and dropped detailing",
      "Cove and recessed lighting ready",
      "Painted to your colour of choice"
    ]
  },
  {
    id: "suspended-ceilings",
    iconName: "Grid3x3",
    title: "Suspended / Drop Ceilings",
    description: "Grid-based suspended ceilings for offices, shops, and commercial spaces — tidy, practical, and easy to access for services above.",
    details: [
      "Concealed and exposed grid systems",
      "Acoustic and moisture-resistant tiles",
      "Easy access to wiring and pipework",
      "Ideal for offices and retail fit-outs"
    ]
  },
  {
    id: "cove-led-lighting",
    iconName: "Lightbulb",
    title: "Cove & LED Lighting",
    description: "Recessed downlights and LED cove lighting designed into your ceiling for warm, modern ambience and a standout feature finish.",
    details: [
      "Recessed downlight installation",
      "LED strip cove lighting",
      "Feature and mood lighting layouts",
      "Energy-efficient fittings"
    ]
  },
  {
    id: "repairs-renovations",
    iconName: "Wrench",
    title: "Ceiling Repairs & Renovations",
    description: "Repairs for sagging, cracked, or water-damaged ceilings, plus full renovations to bring dated rooms up to a fresh, modern standard.",
    details: [
      "Sagging and cracked ceiling repairs",
      "Water-damage replacement",
      "Re-skimming and refinishing",
      "Full room-by-room renovation"
    ]
  },
  {
    id: "cornices-finishes",
    iconName: "PaintRoller",
    title: "Cornices & Finishes",
    description: "Decorative cornices, trims, and clean painted finishes that frame your ceiling and tie the whole room together.",
    details: [
      "Cornice supply and fitting",
      "Decorative trims and mouldings",
      "Skimming and preparation",
      "Neat, even paint finishes"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation & Measurement",
    description: "We visit your space, take accurate measurements, and talk through the look, materials, and lighting you have in mind.",
    duration: "Free Site Visit",
    deliverables: ["On-site measurement", "Material & finish options", "Design suggestions"]
  },
  {
    step: "02",
    title: "Quote & Design",
    description: "You get a clear, fixed quote with a ceiling and lighting layout — no surprises, no hidden costs.",
    duration: "1 - 3 Days",
    deliverables: ["Fixed written quote", "Ceiling & lighting layout", "Agreed timeline"]
  },
  {
    step: "03",
    title: "Installation",
    description: "Our team installs the framing, boards or panels, bulkheads, and cornices — working tidily and protecting your furniture.",
    duration: "Varies by room size",
    deliverables: ["Framing & brandering", "Board / panel fitting", "Bulkheads & cornices"]
  },
  {
    step: "04",
    title: "Finishing & Handover",
    description: "We skim, paint, fit lighting, clean up, and walk you through the finished ceiling before we leave.",
    duration: "1 - 2 Days",
    deliverables: ["Skim, paint & lighting", "Full site clean-up", "Final walkthrough"]
  }
];

// Representative of Alstyle Construction's ceiling work. Additional named projects
// and client references available on request.
export const PROJECTS_DATA: Project[] = [
  {
    id: "living-room-led-cove",
    title: "Living Room LED Cove Ceiling",
    category: "residential",
    categoryLabel: "Gypsum Ceiling",
    description: "A modern gypsum ceiling with a recessed perimeter and LED cove lighting, giving the living room a warm, floating-ceiling feature effect.",
    afterImage: "/images/ceiling-livingroom.jpg",
    year: "Recent",
    location: "Zimbabwe",
    client: "Private Residence",
    area: "Living Room",
    highlights: [
      "Dropped perimeter with LED cove lighting",
      "Recessed downlights throughout",
      "Smooth, seamless painted finish"
    ]
  },
  {
    id: "hallway-bulkhead",
    title: "Hallway Bulkhead & Downlights",
    category: "residential",
    categoryLabel: "Gypsum Ceiling",
    description: "A stepped bulkhead ceiling running the length of a hallway, with evenly spaced recessed downlights for a clean, high-end look.",
    afterImage: "/images/ceiling-hallway.jpg",
    year: "Recent",
    location: "Zimbabwe",
    client: "Private Residence",
    area: "Hallway / Passage",
    highlights: [
      "Stepped bulkhead detailing",
      "Evenly spaced recessed downlights",
      "Crisp, level lines end to end"
    ]
  },
  {
    id: "modern-kitchen-ceiling",
    title: "Modern Kitchen Ceiling",
    category: "residential",
    categoryLabel: "Ceiling & Lighting",
    description: "A flush, moisture-tolerant ceiling with recessed lighting over a modern kitchen and island — bright, even, and easy to maintain.",
    afterImage: "/images/ceiling-kitchen.jpg",
    year: "Recent",
    location: "Zimbabwe",
    client: "Private Residence",
    area: "Kitchen",
    highlights: [
      "Even recessed downlight layout",
      "Moisture-tolerant finish",
      "Clean lines over kitchen island"
    ]
  }
];

// Stock ceiling photography (Unsplash, free for commercial use). Swap for real
// Alstyle project photos when available.
export const GALLERY_IMAGES = [
  { src: "/images/ceiling-livingroom.jpg", alt: "Gypsum living room ceiling with LED cove lighting by Alstyle Construction" },
  { src: "/images/ceiling-hallway.jpg", alt: "Hallway bulkhead ceiling with recessed downlights" },
  { src: "/images/ceiling-kitchen.jpg", alt: "Modern kitchen ceiling with recessed lighting" },
  { src: "/images/ceiling-pvc.jpg", alt: "Waterproof PVC ceiling installation" },
  { src: "/images/ceiling-suspended.jpg", alt: "Suspended grid ceiling in an office space" },
  { src: "/images/ceiling-cornice.jpg", alt: "Bedroom gypsum ceiling with decorative cornice and cove lighting" }
];

export const CONTACT_INFO = {
  phone: "0773583427",
  phoneFormatted: "+263 77 358 3427",
  phone2: "0719054935",
  phone2Formatted: "+263 71 905 4935",
  phone3: "0717115481",
  phone3Formatted: "+263 71 711 5481",
  whatsapp: "263773583427",
  serviceArea: "Nationwide — serving clients across Zimbabwe",
  hours: "Monday - Saturday: 8:00 AM - 5:00 PM (CAT)",
  facebook: "https://www.facebook.com/p/Alstyle-Construction-100082589794481/",
  facebookHandle: "Alstyle Construction"
};
