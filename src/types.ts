export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'design-build' | 'renovation';
  categoryLabel: string;
  description: string;
  beforeImage?: string;
  afterImage: string;
  year: string;
  location: string;
  client: string;
  area: string;
  budget?: string;
  highlights: string[];
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  description: string;
  details: string[];
}

export interface Value {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ProcessStep {
  step: string; // e.g. "01"
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}
