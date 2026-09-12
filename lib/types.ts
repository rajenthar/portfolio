export type ProjectStatus = 'complete' | 'in-progress';
export type BadgeType = 'observability' | 'payments' | 'infrastructure' | 'trading' | 'search' | 'faang' | 'streaming';

export interface Project {
  id: string;
  name: string;
  description: string;
  category: BadgeType;
  status: ProjectStatus;
  /** Public repo or write-up URL. Omit to render the card as a non-link. */
  url?: string;
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  technologies: string[];
}

export interface Experience {
  period: string;
  location?: string;
  role: string;
  company: string;
  companyInfo?: string;
  description?: string;
  highlights?: string[];
  isPersonal?: boolean;
}

export interface Skill {
  name: string;
}
