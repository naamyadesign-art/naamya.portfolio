
import { Project, Domain } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ephemeral Glyphs',
    description: 'An exploration of transient typography in urban environments.',
    fullDescription: 'This project investigates the intersection of fleeting urban moments and permanent letterforms. By documenting environmental typography—shadows, reflections, and wear—I developed a custom typeface that shifts based on digital "lighting" conditions. The goal was to challenge the rigidity of traditional font systems and introduce a more organic, time-sensitive approach to visual communication.',
    domain: 'Typography',
    imageUrl: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200&h=1600',
    galleryUrls: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200&h=1600',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1600&h=1200',
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200&h=1200'
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
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200&h=1600',
    galleryUrls: [
      'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1200&h=1600',
      'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=1600&h=1200'
    ],
    year: '2023',
    tools: ['Procreate', 'Adobe Photoshop', 'Wacom Intuos']
  },
  {
    id: '3',
    title: 'Interactive Photobooth',
    description: 'An AI-powered digital installation reimagining captures through generative filters. Visit: photoboothbynaamya.vercel.app',
    fullDescription: 'The Interactive Photobooth is a cutting-edge digital experience that utilizes Google AI Studio and Gemini models to transform real-time captures into curated visual art. By bridging the gap between physical interaction and latent space representation, the project offers users a unique perspective on their own digital reflections. This project focuses on seamless user flow, low-latency AI processing, and a minimal interface that lets the generated art take center stage. Live at: https://photoboothbynaamya.vercel.app/',
    domain: 'Website Design',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600&h=1200',
    galleryUrls: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1600&h=1200',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200&h=1600',
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1600&h=1000'
    ],
    year: '2026',
    tools: ['Google AI Studio', 'React', 'Gemini API', 'Tailwind CSS']
  },
  {
    id: '4',
    title: 'Neural Aesthetics',
    description: 'Generative design system leveraging AI for brand identity.',
    fullDescription: 'Neural Aesthetics is an experimental branding project where a machine learning model was trained on 50 years of minimalist design history. The resulting system generates thousands of unique logo variations based on a few core parameters, allowing for an identity that is both consistent and infinitely diverse. This project questions the role of the designer in an age of automated creativity.',
    domain: 'AI Integration',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200&h=1600',
    galleryUrls: [
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=1200&h=1600'
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
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1200&h=1600',
    galleryUrls: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=1200&h=1600'
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
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200&h=1600',
    galleryUrls: [
      'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1200&h=1600'
    ],
    year: '2024',
    tools: ['Photoshop', 'Photography', 'Screen Printing']
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200&h=1600',
  'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200&h=1600',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200&h=1200',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600&h=1200',
  'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=1200&h=1600'
];

export const DOMAINS: Domain[] = ['All', 'Typography', 'Illustration', 'Website Design', 'AI Integration', 'Print Design', 'Posters'];
