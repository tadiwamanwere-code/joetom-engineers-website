import { Project, Service, Value, ProcessStep } from './types';

export const HERO_DATA = {
  bgImage: "/images/hero-site-team.jpg",
  tagline: "BUILDING EXCELLENCE",
  headline: "Joetom Engineers",
  subheadline: "Professional civil, structural and construction solutions built for strength, precision, and long term value.",
  ctaPrimary: "Get A Quote",
  ctaSecondary: "View Projects"
};

export const VALUES_DATA: Value[] = [
  {
    title: "Committed to Safety",
    description: "Every site, every crew, every phase — safety comes first on every Joetom Engineers project."
  },
  {
    title: "Driven by Quality",
    description: "High-quality workmanship and well-supervised teams, from raft foundations through to finishing works."
  },
  {
    title: "Building for Tomorrow",
    description: "Reliable delivery and honest communication, so what we build stands for the long term."
  }
];

export const OWNER_DATA = {
  name: "Lovemore Munguri",
  title: "Managing Director",
  photo: "/images/lovemore-owner-full-body.png",
  bio: [
    "Lovemore Munguri leads Joetom Engineers, overseeing the firm's civil, structural, and construction projects from initial site assessment through final handover.",
    "Under his direction, Joetom Engineers works with residential, commercial, and civil clients across Zimbabwe, with an emphasis on technical focus, disciplined site work, and well managed construction projects."
  ],
  quote: "Joetom Engineers is built around technical focus, disciplined site work, and a commitment to strong, well managed construction projects."
};

export const SERVICES_DATA: Service[] = [
  {
    id: "building-construction",
    iconName: "Home",
    title: "Building Construction",
    description: "Practical construction solutions for residential, commercial, and multi-storey projects, combining site experience with reliable supervision.",
    details: [
      "Residential and commercial builds",
      "Multi-storey and high-rise buildings",
      "Steel structures, brickwork, and roofing",
      "Reliable, well-supervised site teams"
    ]
  },
  {
    id: "civil-structural",
    iconName: "Briefcase",
    title: "Civil & Structural Works",
    description: "Structural works and civil engineering built to handle the demands of multi-storey and high-rise construction.",
    details: [
      "Raft foundations",
      "Substructure works",
      "Superstructure works",
      "Concrete and formwork"
    ]
  },
  {
    id: "steel-fixing",
    iconName: "Hammer",
    title: "Steel Fixing & Concreting",
    description: "Experienced steel fixers and shuttering carpenters for multi-storey buildings, built for strength and built for excellence.",
    details: [
      "Steel fixing and shuttering carpentry",
      "Rebar installation and tying",
      "Concrete mix pouring",
      "Slab casting and foundation preparation"
    ]
  },
  {
    id: "brickwork-finishing",
    iconName: "Hammer",
    title: "Brickwork & Finishing Works",
    description: "Blockwork laying, plastering, and interior and exterior finishing works carried out with careful craftsmanship.",
    details: [
      "Brickwork and blockwork laying",
      "External plastering and wall treatments",
      "Interior finishing works",
      "Roofing"
    ]
  },
  {
    id: "roads-paving",
    iconName: "Compass",
    title: "Roads, Paving & Drainage",
    description: "Grading, paving, and drainage works for access roads and civil site layouts.",
    details: [
      "Subgrade grading and compaction",
      "Interlocking block paving",
      "Surface water drainage",
      "Site civil layouts"
    ]
  },
  {
    id: "water-sewer",
    iconName: "Compass",
    title: "Water & Sewer Reticulation",
    description: "Municipal and industrial pipework systems, supply lines, and sewer reticulation.",
    details: [
      "Excavation and pipe-laying",
      "Sewer reticulation lines",
      "Water supply grids",
      "Reticulation for residential and commercial sites"
    ]
  },
  {
    id: "boq-management",
    iconName: "Briefcase",
    title: "BoQs & Project Management",
    description: "Bills of Quantities (BoQ) costing and full project management to keep projects on schedule and on budget.",
    details: [
      "Bills of Quantities (BoQ) costing",
      "Contract supervision",
      "Project management schedules",
      "Site logs and milestone tracking"
    ]
  },
  {
    id: "house-plan-printing",
    iconName: "Compass",
    title: "House Plan Printing & Scanning",
    description: "Fast, clear, and professional house plan printing and scanning services.",
    details: [
      "Large-format plan printing",
      "Plan scanning and digitizing",
      "Fast turnaround",
      "Professional print quality"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation & Feasibility",
    description: "We review your structural concepts, site conditions, zoning regulations, and target budget to establish project parameters.",
    duration: "1 - 2 Weeks",
    deliverables: ["Site inspection summary", "Pre-construction schedule estimate", "Preliminary budget outlines"]
  },
  {
    step: "02",
    title: "Design & Engineering",
    description: "Our engineers work with you to finalize blueprints, load calculations, material orders, and municipal permits.",
    duration: "4 - 8 Weeks",
    deliverables: ["Approved structural blueprints", "Interior surface & finish specifications", "Final fixed-price quote and timeline"]
  },
  {
    step: "03",
    title: "Construction",
    description: "Our site team executes the layout, foundations, framing, steel fixing, and concrete casting under supervision.",
    duration: "Varies by project scope",
    deliverables: ["Progress updates", "Inspections at each major phase", "Site access logs and quality checks"]
  },
  {
    step: "04",
    title: "Handover & Support",
    description: "A final walkthrough is conducted. We deliver keys, documentation, and are available for post-handover queries.",
    duration: "1 - 2 Weeks",
    deliverables: ["Operation manuals where applicable", "Occupancy permit coordination", "Post-handover support"]
  }
];

// Verified via joetomengineers.co.zw and client-supplied materials — additional case studies to be added as they're completed.
export const PROJECTS_DATA: Project[] = [
  {
    id: "chinhoyi-mall",
    title: "Chinhoyi Mall",
    category: "commercial",
    categoryLabel: "Commercial Development",
    description: "A commercial retail development in Chinhoyi's central business district, for client Mrs Mxegi.",
    afterImage: "/images/gallery-large-aerial.jpg",
    year: "In Progress",
    location: "Chinhoyi CBD, Zimbabwe",
    client: "Mrs Mxegi",
    area: "Undisclosed",
    highlights: [
      "Commercial retail construction",
      "Located in Chinhoyi's central business district",
      "Project currently in progress"
    ]
  }
];

// Real site and project photography supplied by the client.
export const GALLERY_IMAGES = [
  { src: "/images/gallery-brickwork-aerial.jpg", alt: "Brickwork and blockwork on a Joetom Engineers site, aerial view" },
  { src: "/images/gallery-rebar-wide.jpg", alt: "Steel fixing and rebar reinforcement on site" },
  { src: "/images/gallery-concrete-pour.jpg", alt: "Concrete pour in progress" },
  { src: "/images/gallery-large-aerial.jpg", alt: "Aerial view of a Joetom Engineers construction site" },
  { src: "/images/gallery-roofing-house.jpg", alt: "Roofing works on a residential build" },
  { src: "/images/gallery-structure-house.jpg", alt: "Structural framing on a residential build" },
  { src: "/images/gallery-concrete-action.jpg", alt: "Site crew at work during a concrete pour" },
  { src: "/images/gallery-team-portrait-roof.jpg", alt: "Joetom Engineers site team on a rooftop" },
  { src: "/images/gallery-crew-celebration.jpg", alt: "Joetom Engineers crew celebrating a project milestone" }
];

export const CONTACT_INFO = {
  phone: "0773514902",
  phoneFormatted: "+263 773 514 902",
  phone2: "0717986356",
  phone2Formatted: "+263 717 986 356",
  whatsapp: "263773514902",
  email: "joetomengineers1@gmail.com",
  officeAddress: "279 Ethlyn House, Chinhoyi, Zimbabwe",
  hours: "Monday - Saturday: 7:30 AM - 5:00 PM (CAT)",
  website: "https://www.joetomengineers.co.zw",
  facebook: "https://www.facebook.com/joetomengineers/",
  coordinates: {
    lat: -17.3592, // Coordinates of Chinhoyi
    lng: 30.1983
  }
};
