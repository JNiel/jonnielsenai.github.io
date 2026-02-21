export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

export interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  level: 'Advanced' | 'Intermediate' | 'Basic';
}

export interface AIExpertiseItem {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}
