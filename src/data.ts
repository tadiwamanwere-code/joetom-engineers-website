import { Project, Service, Value, ProcessStep } from './types';

export const HERO_DATA = {
  bgImage: "/src/assets/images/joetom_construction_team_1783771742526.jpg",
  tagline: "BUILDING EXCELLENCE",
  headline: "Engineering Solutions, Building Excellence",
  subheadline: "Professional civil, structural, and construction solutions for residential, commercial, and infrastructure projects across Zimbabwe.",
  ctaPrimary: "Start Your Blueprint",
  ctaSecondary: "View Our Portfolio"
};

export const VALUES_DATA: Value[] = [
  {
    title: "Structural Excellence",
    description: "We engineer to exact structural load standards. From high-grade structural steel fixing to monolithic raw concrete pouring, strength is our baseline."
  },
  {
    title: "Design-Build Integrity",
    description: "We translate challenging blueprints with complete engineering fidelity, respecting safety, material calculations, and architectural lines."
  },
  {
    title: "Absolute Transparency",
    description: "Clear communication, itemized Bills of Quantities (BoQs), on-time milestones, and honest specifications. No hidden fees or unexpected changes."
  }
];

export const OWNER_DATA = {
  name: "Lovemore Munguri",
  title: "Managing Director",
  photo: "", // real headshot to be supplied by the client
  bio: [
    "Lovemore Munguri leads Joetom Engineers, overseeing the firm's civil, structural, and construction projects from initial site assessment through final handover.",
    "Under his direction, Joetom Engineers works with residential, commercial, and civil clients across Zimbabwe, with an emphasis on safety, transparent pricing, and construction quality."
  ],
  quote: "We take pride in doing the job right — clear communication with our clients, sound engineering, and construction our clients can trust."
};

export const SERVICES_DATA: Service[] = [
  {
    id: "building-construction",
    iconName: "Home",
    title: "Building Construction",
    description: "Design-build projects, residential builds, and commercial complexes engineered and executed with careful craftsmanship.",
    details: [
      "Monolithic raw concrete pouring and framing",
      "Steel structures, brickwork, and timber trussing",
      "Multi-story masonry construction",
      "Thermal, acoustic, and utility integration"
    ]
  },
  {
    id: "civil-structural",
    iconName: "Briefcase",
    title: "Civil & Structural Works",
    description: "Structural engineering, load calculation analysis, and steel and concrete frameworks built to handle structural loads.",
    details: [
      "Structural load-bearing calculation",
      "Concrete foundations and columns",
      "Engineered retaining structures",
      "Site feasibility and design verification"
    ]
  },
  {
    id: "steel-fixing",
    iconName: "Hammer",
    title: "Steel Fixing & Concreting",
    description: "Precision reinforcement bar (rebar) installation, structural steel coupling, and concrete casting.",
    details: [
      "Rebar fixing and tying",
      "Concrete mix pouring and vibratory settlement",
      "Slab casting and foundation preparation",
      "Structural reinforcement verification and testing"
    ]
  },
  {
    id: "brickwork-finishing",
    iconName: "Hammer",
    title: "Brickwork & Finishing Works",
    description: "Decorative masonry, blockwork laying, plastering, and interior and exterior architectural finishes.",
    details: [
      "Brickwork and fair-face masonry",
      "External plastering, cladding, and wall treatments",
      "Interior partition alignment and drywall detailing",
      "Surface finish integration"
    ]
  },
  {
    id: "roads-paving",
    iconName: "Compass",
    title: "Roads, Paving & Drainage",
    description: "Design, grading, and paving of access roads, concrete interlocking paving, and stormwater management systems.",
    details: [
      "Subgrade grading, compaction, and base preparation",
      "Asphalt and concrete interlocking block paving",
      "Surface water runoff and drainage modeling",
      "Erosion control barriers and site civil layouts"
    ]
  },
  {
    id: "water-sewer",
    iconName: "Compass",
    title: "Water & Sewer Reticulation",
    description: "Municipal and industrial pipework systems, plumbing reticulation, supply lines, and sewer flow engineering.",
    details: [
      "Excavation, pipe-laying, and pressure testing",
      "Sewer reticulation lines and manhole networks",
      "Clean water supply grids",
      "Industrial waste and runoff storage configurations"
    ]
  },
  {
    id: "boq-management",
    iconName: "Briefcase",
    title: "BoQs & Project Management",
    description: "Bills of Quantities (BoQ) costing, contract supervision, and project management schedules.",
    details: [
      "Material costing and itemized bills",
      "Site logs and milestone tracking",
      "Zoning compliance and material testing coordination",
      "Fixed-price accountability and transparent reporting"
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

// Verified via joetomengineers.co.zw — additional projects to be added once client supplies details/photos.
export const PROJECTS_DATA: Project[] = [
  {
    id: "chinhoyi-mall",
    title: "Chinhoyi Mall",
    category: "commercial",
    categoryLabel: "Commercial Development",
    description: "A commercial retail development in Chinhoyi's central business district, for client Mrs Mxegi.",
    afterImage: "/src/assets/images/commercial_completed_1783762503146.jpg",
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

export const CONTACT_INFO = {
  phone: "0773514902",
  phoneFormatted: "+263 77 351 4902",
  email: "info@joetomengineers.co.zw",
  officeAddress: "279 Ethlyn House, Chinhoyi, Zimbabwe",
  hours: "Monday - Saturday: 7:30 AM - 5:00 PM (CAT)",
  website: "https://joetomengineers.co.zw",
  coordinates: {
    lat: -17.3592, // Coordinates of Chinhoyi
    lng: 30.1983
  }
};
