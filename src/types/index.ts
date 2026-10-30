export type ToolType = 'move' | 'frame' | 'shape' | 'text' | 'hand' | 'comment';

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Persona {
  name: string;
  role: string;
  quote: string;
  painPoints: string[];
  goals: string[];
}

export interface CaseStudyData {
  overview: string;
  role: string;
  duration: string;
  team: string;
  deliverables: string[];
  problemStatement: string;
  goals: string[];
  researchInsights: {
    stat?: string;
    label: string;
    takeaway: string;
  }[];
  personas: Persona[];
  informationArchitecture: {
    title: string;
    nodes: string[];
  }[];
  userFlow: {
    step: string;
    action: string;
    outcome: string;
  }[];
  wireframes: {
    title: string;
    description: string;
    annotations: string[];
  }[];
  visualDesignSystem: {
    colorTokens: { name: string; hex: string; usage: string }[];
    typographyScale: { level: string; spec: string; usage: string }[];
    componentHighlights: string[];
  };
  finalScreens: {
    title: string;
    description: string;
    badge?: string;
  }[];
  interactionDetails: string[];
  learnings: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline?: string;
  description: string;
  techStack: string[];
  status: 'Shipped' | 'Case Study' | 'Concept' | 'In Production';
  highlights: string[];
  dimensions: { width: number; height: number };
  canvasPosition: { x: number; y: number };
  accentColor: string;
  logoUrl?: string;
  behanceUrl?: string;
  previewType: 'agenticos' | 'lastmile' | 'pharmaflow' | 'fitstart';
  caseStudy: CaseStudyData;
}

export interface CanvasComment {
  id: string;
  author: string;
  avatarColor: string;
  x: number;
  y: number;
  text: string;
  timestamp: string;
  resolved?: boolean;
}

export interface LayerNode {
  id: string;
  name: string;
  type: 'frame' | 'component' | 'text' | 'group';
  icon: string;
  visible: boolean;
  locked: boolean;
}

