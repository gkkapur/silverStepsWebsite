// Edit this file to add your crew, videos, and application destinations.
// Leave URLs empty to display honest placeholders. No invented identities or videos.
export const contactEmail = 'silverstepsdc@gmail.com';
export const applicationLinks = { chapter: '', crew: '' };
export const founderPhoto = ''; // e.g. '/images/guneet.jpg'
export const dancers = Array.from({ length: 24 }, (_, i) => ({ name: '', photo: '', number: i + 1 }));
export const performances = [
  {
    venue: 'SAGE Eldercare', location: 'Summit, NJ', date: 'June 16, 2026',
    description: 'A multi-school arts festival',
    videos: [
      { title: 'Teaching the seniors “Dancing Queen”', artist: 'ABBA', url: '' },
      { title: '“Squabble Up”', artist: 'Kendrick Lamar', url: '' },
      { title: '“Nainowaale Ne”', artist: 'Neeti Mohan', url: '' },
      { title: '“Love Dive”', artist: 'IVE', url: '' },
    ],
  },
  {
    venue: 'SAGE Eldercare', location: 'Summit, NJ', date: 'November 20, 2025', description: '',
    videos: [
      { title: 'Hip Hop Performance', artist: '', url: '' },
      { title: 'Bollywood Performance', artist: '', url: '' },
      { title: '“Strategy”', artist: 'TWICE', url: '' },
    ],
  },
  { venue: 'Springfield Senior Center', location: 'Springfield, NJ', date: 'April 28, 2025', description: '', videos: [{ title: '“Easy”', artist: 'LE SSERAFIM', url: '' }] },
  { venue: 'Union Senior Center', location: 'Union, NJ', date: 'March 25, 2025', description: '', videos: [{ title: '“Cheshire”', artist: 'ITZY', url: '' }] },
];
