
export enum ViolationType {
  CIVIL_POLITICAL = 'Sipil & Politik',
  ECONOMIC_SOCIAL = 'Ekonomi, Sosial & Budaya',
  ENVIRONMENTAL = 'Lingkungan Hidup',
  DOMESTIC_VIOLENCE = 'Kekerasan Domestik',
  OTHER = 'Lainnya'
}

export type WorkCategory = 'Advokasi' | 'Animasi' | 'Sitasi Sosial' | 'Ekopastoral';

export interface WorkArea {
  id: string;
  title: WorkCategory;
  description: string;
  content: string;
  image: string;
  icon: string;
  challenges: string[];
  keySuccesses: string[];
}

export type FigureCategory = 'HAM' | 'Lingkungan' | 'Perdamaian' | 'Spiritual';

export interface Figure {
  id: string;
  name: string;
  role: string;
  category: FigureCategory;
  quote: string;
  summary: string;
  biography?: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  category: 'Lokal' | 'Nasional' | 'Internasional';
  description: string;
  logo?: string;
}

export interface AgendaItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface Report {
  id: string;
  year: number;
  date?: string;
  region: string;
  type: ViolationType;
  description: string;
  detailedDescription?: string;
  status: 'Terdokumentasi' | 'Dalam Penyelidikan' | 'Selesai';
  statusExplanation?: string;
}

export type PublicationCategory = 
  | 'Publikasi Media' 
  | 'Siaran Pers' 
  | 'Memoria Passionis' 
  | 'Memoria Resurectionis' 
  | 'Laporan Berkala'
  | 'Gereja'
  | 'HAM'
  | 'Infografis';

export interface Publication {
  id: string;
  title: string;
  date: string;
  category: PublicationCategory;
  summary: string;
  content?: string;
  image: string;
  type: 'article' | 'infographic' | 'report' | 'journal';
}

export interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}
