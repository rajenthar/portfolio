export type ProjectStatus = 'complete' | 'in-progress';
export type BadgeType = 'observability' | 'payments' | 'infrastructure' | 'trading' | 'search' | 'faang' | 'streaming';

export interface Project {
  id: string;
  name: string;
  description: string;
  category: BadgeType;
  status: ProjectStatus;
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
