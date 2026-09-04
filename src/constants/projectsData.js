// Projects section data.
//
// Tech stacks and repo URLs were pulled live from GitHub (github.com/Zekepeke) so tags and
// links reflect what each repo actually contains.

export const tier1Projects = [
  {
    id: 'reachy-mini',
    index: 1,
    title: 'Reachy Mini',
    role: 'Solo project',
    org: 'Independent',
    year: '2025',
    anchor: 'time-to-first-audio: ~60s to under 2s',
    narrative: 'Time-to-first-audio: ~60 seconds down to under 2. A Raspberry Pi 5-powered robot head running real-time perception (OpenCV, MediaPipe, PyTorch) behind a FastAPI server.',
    tags: ['FastAPI', 'OpenCV', 'MediaPipe', 'PyTorch', 'Raspberry Pi 5'],
    github: 'https://github.com/Zekepeke/Reachy-Server-Project',
    live: null,
    media: {
      type: 'photos',
      items: [
        {
          id: '1',
          src: '/projects/reachy/reachy1.jpeg',
          alt: 'The first 3D-printed prototype of the Reachy Mini head shell, mid-assembly on a workbench',
          caption: 'First prototype',
        },
        {
          id: '4',
          src: '/projects/reachy/reachy4.jpeg',
          alt: 'CAD model of the improved head assembly, showing the camera, compute board, and mounts',
          caption: 'The improved design, in CAD',
        },
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
    narrative: '+60% R-Precision Top-3 over baseline. Extended an existing motion-diffusion model to generate two-person interactions instead of single-body motion, as an undergraduate researcher at Purdue.',
    tags: ['PyTorch', 'PyTorch3D', 'Diffusion Models'],
    github: 'https://github.com/Zekepeke/newPCMDM',
    live: null,
    media: {
      type: 'photos',
      items: [
        {
          id: '1',
          src: '/projects/extended-pcmdm/pcmdm-demo-poster.jpg',
          video: '/projects/extended-pcmdm/pcmdm-demo.mp4',
          alt: 'Two generated 3D figures walking together, output from the extended motion-diffusion model',
          caption: 'Two generated figures walking in sync from a text prompt',
        },
      ],
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
    narrative: 'Runs ML experiments start to finish, unsupervised. Plans an approach, implements it, tunes hyperparameters, and writes up the results — four phases with typed handoffs between them and automatic retries when implementation or tuning fails, orchestrated on Modal.',
    tags: ['Python', 'Modal', 'Next.js', 'TypeScript', 'Supabase'],
    github: null,
    live: null,
    media: {
      type: 'diagram',
      caption: 'Plan → Implement → Tune → Report, with retries on the two middle phases',
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
    narrative: 'An iOS app that guesses real-world prices from a photo. The FastAPI backend can call either Claude’s or Gemini’s vision models against the same prompt and schema, so the two providers are interchangeable and directly comparable.',
    tags: ['Swift', 'SwiftUI', 'FastAPI', 'Claude API', 'Gemini API'],
    github: 'https://github.com/Zekepeke/Price-is-right',
    live: null,
    media: {
      type: 'photos',
      items: [
        {
          id: '1',
          src: '/projects/Price_is_Right/price1.jpeg',
          alt: 'Title slide for Price is Right Glasses, StarkHacks 2026',
          caption: 'Slide deck presentation — StarkHacks 2026',
        },
        {
          id: '2',
          src: '/projects/Price_is_Right/price2.jpeg',
          alt: 'Feature slide: hands-free valuation, cross-platform price guard, and multimodal vision via Gemini',
          caption: 'Feature breakdown',
        },
      ],
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
