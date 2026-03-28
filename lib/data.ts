export interface StoryChapter {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const storyChapters: StoryChapter[] = [
  {
    id: 'chapter-1',
    title: 'The Beginning',
    subtitle: 'Where Dreams Take Form',
    description: 'Every great journey starts with a single step into the unknown. In the quiet moments before dawn, possibilities unfold like petals greeting the morning light.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    color: '#d4af37',
  },
  {
    id: 'chapter-2',
    title: 'The Ascent',
    subtitle: 'Climbing Beyond Limits',
    description: 'The path upward demands courage, resilience, and an unwavering belief in one\'s potential. Each challenge conquered becomes a stepping stone to greater heights.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    color: '#e8c966',
  },
  {
    id: 'chapter-3',
    title: 'The Discovery',
    subtitle: 'Finding Your True North',
    description: 'In the pursuit of excellence, we discover not just the world around us, but the extraordinary capabilities that lie within ourselves.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80',
    color: '#d4af37',
  },
  {
    id: 'chapter-4',
    title: 'The Horizon',
    subtitle: 'Where Dreams Meet Reality',
    description: 'The horizon beckons with promises untold. Here, at the edge of possibility, visionaries transform imagination into tangible legacies.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80',
    color: '#e8c966',
  },
];

export const brandStats = [
  { value: '12', label: 'Years of Excellence', suffix: '+' },
  { value: '500', label: 'Stories Crafted', suffix: '+' },
  { value: '98', label: 'Client Satisfaction', suffix: '%' },
  { value: '45', label: 'Awards Won', suffix: '' },
];

export const testimonials = [
  {
    quote: 'A transformative experience that redefined our brand narrative.',
    author: 'Alexandra Sterling',
    role: 'CEO, Luminary Ventures',
  },
  {
    quote: 'The attention to detail and cinematic quality is unmatched.',
    author: 'Marcus Chen',
    role: 'Creative Director, Apex Studios',
  },
];
