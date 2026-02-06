
import { Project, Domain } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ephemeral Glyphs',
    description: 'An exploration of transient typography in urban environments.',
    domain: 'Typography',
    imageUrl: 'https://picsum.photos/seed/typo1/1200/1600',
    year: '2024'
  },
  {
    id: '2',
    title: 'Digital Narratives',
    description: 'Illustrated series exploring the intersection of folklore and technology.',
    domain: 'Illustration',
    imageUrl: 'https://picsum.photos/seed/illus1/1200/1600',
    year: '2023'
  },
  {
    id: '3',
    title: 'Lumina Interface',
    description: 'A minimal SaaS dashboard focused on user-centric workflow.',
    domain: 'Website Design',
    imageUrl: 'https://picsum.photos/seed/web1/1600/1200',
    year: '2024'
  },
  {
    id: '4',
    title: 'Neural Aesthetics',
    description: 'Generative design system leveraging AI for brand identity.',
    domain: 'AI Integration',
    imageUrl: 'https://picsum.photos/seed/ai1/1200/1600',
    year: '2024'
  },
  {
    id: '5',
    title: 'The Paper Trail',
    description: 'Tactile editorial design for an independent travel magazine.',
    domain: 'Print Design',
    imageUrl: 'https://picsum.photos/seed/print1/1200/1600',
    year: '2023'
  },
  {
    id: '6',
    title: 'Kinetic Motion',
    description: 'Experimental poster series for a contemporary dance festival.',
    domain: 'Posters',
    imageUrl: 'https://picsum.photos/seed/poster1/1200/1600',
    year: '2024'
  },
  {
    id: '7',
    title: 'Type Anatomy',
    description: 'Structural study of modern serif typefaces.',
    domain: 'Typography',
    imageUrl: 'https://picsum.photos/seed/typo2/1200/1600',
    year: '2024'
  },
  {
    id: '8',
    title: 'Minimalist UX',
    description: 'E-commerce redesign for a high-end fashion brand.',
    domain: 'Website Design',
    imageUrl: 'https://picsum.photos/seed/web2/1600/1200',
    year: '2024'
  },
  {
    id: '9',
    title: 'Organic Forms',
    description: 'Hand-drawn botanical illustrations for luxury packaging.',
    domain: 'Illustration',
    imageUrl: 'https://picsum.photos/seed/illus2/1200/1600',
    year: '2023'
  }
];

// Added missing Domain import on line 1 to resolve error here
export const DOMAINS: Domain[] = ['All', 'Typography', 'Illustration', 'Website Design', 'AI Integration', 'Print Design', 'Posters'];
