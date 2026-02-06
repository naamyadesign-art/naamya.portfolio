
export type Domain = 'All' | 'Typography' | 'Illustration' | 'Website Design' | 'AI Integration' | 'Print Design' | 'Posters';

export interface Project {
  id: string;
  title: string;
  description: string;
  domain: Domain;
  imageUrl: string;
  year: string;
}
