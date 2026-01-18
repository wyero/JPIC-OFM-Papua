
export enum ViolationType {
  CIVIL_POLITICAL = 'Sipil & Politik',
  ECONOMIC_SOCIAL = 'Ekonomi, Sosial & Budaya',
  ENVIRONMENTAL = 'Lingkungan Hidup',
  DOMESTIC_VIOLENCE = 'Kekerasan Domestik',
  OTHER = 'Lainnya'
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

export interface Publication {
  id: string;
  title: string;
  date: string;
  category: 'HAM' | 'Sosial-politik' | 'Gereja' | 'Infografis';
  summary: string;
  content?: string;
  image: string;
  type: 'article' | 'infographic';
}

export interface NavItem {
  label: string;
  path: string;
}
