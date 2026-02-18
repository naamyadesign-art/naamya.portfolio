
import { Project, Domain } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ephemeral Glyphs',
    description: 'An exploration of transient typography in urban environments.',
    fullDescription: 'This project investigates the intersection of fleeting urban moments and permanent letterforms. By documenting environmental typography—shadows, reflections, and wear—I developed a custom typeface that shifts based on digital "lighting" conditions. The goal was to challenge the rigidity of traditional font systems and introduce a more organic, time-sensitive approach to visual communication.',
    domain: 'Typography',
    imageUrl: 'https://picsum.photos/seed/typo1/1200/1600',
    galleryUrls: [
      'https://picsum.photos/seed/typo-gal1/1200/1600',
      'https://picsum.photos/seed/typo-gal2/1600/1200',
      'https://picsum.photos/seed/typo-gal3/1200/1200',
      'https://picsum.photos/seed/typo-gal4/1000/1400'
    ],
    year: '2024',
    tools: ['Glyphs App', 'Adobe Illustrator', 'Processing']
  },
  {
    id: '2',
    title: 'Digital Narratives',
    description: 'Illustrated series exploring the intersection of folklore and technology.',
    fullDescription: 'Digital Narratives is a visual commentary on how ancient storytelling adapts to the silicon age. Each illustration pairs a traditional mythological figure with modern technological artifacts, rendered in a style that blends woodblock printing aesthetics with neon digital gradients. The series explores themes of surveillance, connectivity, and digital spirituality.',
    domain: 'Illustration',
    imageUrl: 'https://picsum.photos/seed/illus1/1200/1600',
    galleryUrls: [
      'https://picsum.photos/seed/illus-gal1/1200/1600',
      'https://picsum.photos/seed/illus-gal2/1600/1200',
      'https://picsum.photos/seed/illus-gal3/1200/1200'
    ],
    year: '2023',
    tools: ['Procreate', 'Adobe Photoshop', 'Wacom Intuos']
  },
  {
    id: '3',
    title: 'Lumina Interface',
    description: 'A minimal SaaS dashboard focused on user-centric workflow.',
    fullDescription: 'Lumina is a conceptual dashboard designed for creative studios. The primary design challenge was to present high-density data without overwhelming the user. By utilizing a modular grid and a strictly monochromatic palette with functional color accents, Lumina achieves a state of "calm computing" where focus is naturally directed to active tasks.',
    domain: 'Website Design',
    imageUrl: 'https://picsum.photos/seed/web1/1600/1200',
    galleryUrls: [
      'https://picsum.photos/seed/web-gal1/1600/1200',
      'https://picsum.photos/seed/web-gal2/1600/1000',
      'https://picsum.photos/seed/web-gal3/1200/1600',
      'https://picsum.photos/seed/web-gal4/1400/1000'
    ],
    year: '2024',
    tools: ['Figma', 'React', 'Framer Motion']
  },
  {
    id: '4',
    title: 'Neural Aesthetics',
    description: 'Generative design system leveraging AI for brand identity.',
    fullDescription: 'Neural Aesthetics is an experimental branding project where a machine learning model was trained on 50 years of minimalist design history. The resulting system generates thousands of unique logo variations based on a few core parameters, allowing for an identity that is both consistent and infinitely diverse. This project questions the role of the designer in an age of automated creativity.',
    domain: 'AI Integration',
    imageUrl: 'https://picsum.photos/seed/ai1/1200/1600',
    galleryUrls: [
      'https://picsum.photos/seed/ai-gal1/1200/1600',
      'https://picsum.photos/seed/ai-gal2/1200/1600',
      'https://picsum.photos/seed/ai-gal3/1200/1600'
    ],
    year: '2024',
    tools: ['Midjourney', 'Stable Diffusion', 'P5.js']
  },
  {
    id: '5',
    title: 'The Paper Trail',
    description: 'Tactile editorial design for an independent travel magazine.',
    fullDescription: 'Focusing on the slower side of travel, The Paper Trail is a quarterly publication that emphasizes physical texture. The design uses heavy-weight recycled stocks and varying paper finishes to create a sensory experience. The typography is kept intentionally wide and open to reflect the expansive landscapes featured in the photography.',
    domain: 'Print Design',
    imageUrl: 'https://picsum.photos/seed/print1/1200/1600',
    galleryUrls: [
      'https://picsum.photos/seed/print-gal1/1200/1600',
      'https://picsum.photos/seed/print-gal2/1600/1200',
      'https://picsum.photos/seed/print-gal3/1400/1400'
    ],
    year: '2023',
    tools: ['InDesign', 'Lightroom', 'Manual Binding']
  },
  {
    id: '6',
    title: 'Kinetic Motion',
    description: 'Experimental poster series for a contemporary dance festival.',
    fullDescription: 'These posters capture the fluid energy of contemporary dance through motion-blur photography and fragmented typography. Each poster in the series represents a specific piece of choreography, with the layout dictated by the dancer\'s movement paths. The high-contrast black and white palette ensures maximum impact in urban street-posting environments.',
    domain: 'Posters',
    imageUrl: 'https://picsum.photos/seed/poster1/1200/1600',
    galleryUrls: [
      'https://picsum.photos/seed/post-gal1/1200/1600',
      'https://picsum.photos/seed/post-gal2/1200/1600',
      'https://picsum.photos/seed/post-gal3/1200/1600'
    ],
    year: '2024',
    tools: ['Photoshop', 'Photography', 'Screen Printing']
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/misc1/1200/1600',
  'https://picsum.photos/seed/misc2/1200/1600',
  'https://picsum.photos/seed/misc3/1200/1200',
  'https://picsum.photos/seed/misc4/1600/1200',
  'https://picsum.photos/seed/misc5/1200/1600',
  'https://picsum.photos/seed/misc6/1200/1600',
  'https://picsum.photos/seed/misc7/1600/1200',
  'https://picsum.photos/seed/misc8/1200/1400',
  'https://picsum.photos/seed/misc9/1400/1200',
  'https://picsum.photos/seed/misc10/1200/1600',
  'https://picsum.photos/seed/misc11/1200/1200',
];

export const DOMAINS: Domain[] = ['All', 'Typography', 'Illustration', 'Website Design', 'AI Integration', 'Print Design', 'Posters'];
