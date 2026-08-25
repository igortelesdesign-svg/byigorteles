export type Language = 'pt' | 'en';

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  year: string;
  category: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  shortDescription: {
    pt: string;
    en: string;
  };
  image: string;
  gallery?: string[];
  technologies: string[];
  roles: {
    pt: string[];
    en: string[];
  };
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  challenge: {
    pt: string;
    en: string;
  };
  solution: {
    pt: string;
    en: string;
  };
  result: {
    pt: string;
    en: string;
  };
  tags: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: boolean;
  };
  caseStudy: {
    overview: { pt: string; en: string };
    challenge: { pt: string; en: string };
    myRole: { pt: string; en: string };
    process: { pt: string; en: string };
    designDecisions: { pt: string[]; en: string[] };
    developmentDecisions: { pt: string[]; en: string[] };
    result: { pt: string; en: string };
    metrics?: { label: { pt: string; en: string }; value: string }[];
  };
}

export interface PlaygroundItem {
  id: string;
  title: string;
  category: 'graphic-design' | 'ui-experiments' | 'motion' | 'creative-coding' | 'ai-art';
  categoryLabel: { pt: string; en: string };
  year: string;
  image: string;
  description: { pt: string; en: string };
  tools: string[];
  link?: string;
}

export interface ToolItem {
  name: string;
  category: 'design' | 'development';
  icon: string;
  description: { pt: string; en: string };
}

export interface TimelineItem {
  stage: string;
  period: string;
  role: { pt: string; en: string };
  description: { pt: string; en: string };
  skills: string[];
}
