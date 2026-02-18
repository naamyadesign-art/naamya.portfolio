
export type Domain = 'All' | 'Typography' | 'Illustration' | 'Website Design' | 'AI Integration' | 'Print Design' | 'Posters';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  domain: Domain;
  imageUrl: string;
  galleryUrls: string[];
  year: string;
  tools?: string[];
}
