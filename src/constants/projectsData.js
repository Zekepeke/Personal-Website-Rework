// Projects section data.
//
// Tech stacks and repo URLs were pulled live from GitHub (github.com/Zekepeke) so tags and
// links reflect what each repo actually contains. All narrative copy is a placeholder — see
// VERIFICATION.md at the repo root for the audit this data was checked against.

export const tier1Projects = [
  {
    id: 'reachy-mini',
    index: 1,
    title: 'Reachy Mini',
    role: 'Solo project',
    org: 'Independent',
    year: '2025',
    anchor: 'time-to-first-audio: ~60s to under 2s',
    narrative: '[NARRATIVE-01]',
    tags: ['FastAPI', 'OpenCV', 'MediaPipe', 'PyTorch', 'Raspberry Pi 5'],
    github: 'https://github.com/Zekepeke/Reachy-Server-Project',
    live: null,
    media: {
      type: 'photos',
      items: [
        { id: '1', src: '/projects/reachy/reachy1.jpeg', alt: '[PLACEHOLDER ALT]', caption: '[PLACEHOLDER CAPTION]' },
        { id: '2', src: '/projects/reachy/reachy2.jpeg', alt: '[PLACEHOLDER ALT]', caption: '[PLACEHOLDER CAPTION]' },
        { id: '3', src: '/projects/reachy/reachy3.jpeg', alt: '[PLACEHOLDER ALT]', caption: '[PLACEHOLDER CAPTION]' },
      ],
    },
  },
  {
    id: 'extended-pcmdm',
    index: 2,
    title: 'Extended PCMDM',
    role: 'Undergraduate Researcher',
    org: 'Purdue University',
    year: '2025–2026',
    anchor: '+60% R-Precision Top-3 over baseline',
    narrative: '[NARRATIVE-02]',
    tags: ['PyTorch', 'PyTorch3D', 'Diffusion Models'],
    github: 'https://github.com/Zekepeke/newPCMDM',
    live: null,
    media: {
      type: 'photos',
      items: [],
    },
  },
  {
    id: 'machine-learn',
    index: 3,
    title: 'machine(learn)',
    role: 'Solo project',
    org: 'Independent',
    year: '2026',
    anchor: '4-phase pipeline, typed handoffs end to end',
    narrative: '[NARRATIVE-03]',
    tags: ['Python', 'Modal', 'Next.js', 'TypeScript', 'Supabase'],
    github: null,
    live: null,
    media: {
      type: 'diagram',
      caption: '[PLACEHOLDER CAPTION]',
    },
  },
  {
    id: 'price-is-right-glasses',
    index: 4,
    title: 'Price is Right Glasses',
    role: 'Solo project',
    org: 'Independent',
    year: '2026',
    anchor: 'two vision providers, one prompt and schema',
    narrative: '[NARRATIVE-04]',
    tags: ['Swift', 'SwiftUI', 'FastAPI', 'Claude API', 'Gemini API'],
    github: 'https://github.com/Zekepeke/Price-is-right',
    live: null,
    media: {
      type: 'photos',
      items: [],
    },
  },
];

export const tier2Projects = [
  {
    id: 'blk1800',
    name: 'BLK1800',
    stack: 'Java · Sockets',
    result: '[TIER2-BLK1800]',
    href: 'https://github.com/Zekepeke/Team-Project-BLK1800',
  },
  {
    id: 'shop22',
    name: 'Shop22',
    stack: 'Next.js · Payload · Stripe',
    result: '[TIER2-SHOP22]',
    href: 'https://github.com/Zekepeke/shop22',
  },
  {
    id: 'aircursor',
    name: 'AirCursor',
    stack: 'Python · MediaPipe · PyAutoGUI',
    result: '[TIER2-AIRCURSOR]',
    href: 'https://github.com/Zekepeke/Computer-Vision-Project',
  },
  {
    id: 'zekeshot',
    name: 'ZekeShot',
    stack: 'Python · Pygame',
    result: '[TIER2-ZEKESHOT]',
    href: 'https://github.com/Zekepeke/Zekeshot',
  },
];

// Confirmed live via GitHub search (user:Zekepeke, forks excluded) — the repo count changes
// over time, so re-check before reusing this number elsewhere.
export const githubRepoCount = 33;
export const githubProfileUrl = 'https://github.com/Zekepeke';
