// 포트폴리오 데이터 타입 정의

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  website?: string;
  kakao?: string;
  twitter?: string;
  instagram?: string;
}

export interface KPI {
  label: string;
  value: string;
  icon?: string;
}

export interface Profile {
  name: string;
  tagline: string;
  shortIntro: string;
  detailedIntro: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  social: SocialLinks;
  kpis: KPI[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
  startDate?: string;
  endDate?: string;
  status?: 'completed' | 'in-progress' | 'planned';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  current: boolean;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
  image?: string;
  category?: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  awards: Award[];
}

// 포트폴리오 데이터 타입 가드 함수
export function isPortfolioData(data: unknown): data is PortfolioData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'profile' in data &&
    'skills' in data &&
    'projects' in data &&
    'experience' in data &&
    'awards' in data
  );
}
