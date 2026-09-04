export const navLinks = [
    {
      id: 0,
      name: 'Home',
      href: '#home',
    },
    {
      id: 1,
      name: 'About',
      href: '#about',
    },
    {
      id: 2,
      name: 'Work',
      href: '#work',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
];
  
export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      benderScale: isSmall ? 2.4 : isMobile ? 2.46 : 2.5,
      expressiveRobotScale: isSmall ? 0.28 : isMobile ? 0.289 : 0.3,
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
      benderPosition: isSmall ? [2.9, 2.9, 0.7] : isMobile ? [2.9, 2.9, 0.7] : isTablet ? [2.1, 1.4, 0.7] : [2.9, 1.4, 0.7],
      expressiveRobotPosition: isSmall ? [-2.7, 1.9, 5.1] : isMobile ? [-2.7, 1.9, 5.1] : isTablet ? [-2.7, 1, 5.1] : [-2.7, 1, 5.1],
    };
  };
  
export const workExperiences = [
  {
    id: 1,
    featured: true,
    pos: "Software Engineering Intern",
    name: "JPMorgan Chase & Co.",
    location: "Chicago, IL",
    duration: "Jun 2026 – Aug 2026",
    headline: "100-document batch: ~2 hours to 11 minutes",
    points: [
      "Design and build the ingestion layer of Hermes, an internal document processing platform converting invoices and contracts (PDF, PNG) into schema-validated Delta tables, applying Strategy, Factory, and Adapter patterns so new file formats and parsers drop in without pipeline code changes.",
      "Implement validation gates for the LLM mapping job, layering deterministic field checks with an LLM verification pass and routing malformed records to a Dead Letter Queue, with JSON schemas and guardrail prompts loaded from Delta tables rather than hardcoded.",
      "Present the platform to senior firm leadership, securing handoff to a partner team for production adoption.",
    ],
  },
  {
    id: 2,
    featured: true,
    pos: "Undergraduate Researcher – Multimodal Generative AI",
    name: "Purdue University",
    location: "West Lafayette, IN",
    duration: "Sep 2025 – May 2026",
    headline: "+60% R-Precision Top-3 over baseline",
    points: [
      "Extended PCMDM, a past-conditioned diffusion model for coherent long-form 3D human motion generation, training a variant on a 10K+ annotation duet dance dataset.",
      "Built PyTorch training and evaluation pipelines for Text-to-Duet and Dance Accompaniment, implementing an R-Precision harness that ranks ground-truth captions against mismatched candidates in a shared text-motion embedding space.",
    ],
  },
  {
    id: 3,
    featured: false,
    pos: "Backend Developer",
    name: "JPMorgan Code for Good",
    duration: "Nov 2025",
    result: "10+ Flask endpoints, 56 commits (47% of the repo), deployed to EC2, top-3 placement in 24 hours.",
  },
  {
    id: 5,
    featured: false,
    pos: "Programming Instructor",
    name: "Self-Employed",
    duration: "Aug 2022 – Jun 2025",
    result: "Developed structured lesson plans improving exam performance by 20%.",
  },
];

export const socials =[
    {
        social_name: 'Gmail',
        img: 'assets/gmail.svg',
        name: 'zekedev06@gmail.com',
        link: 'mailto:zekedev06@gmail.com',
    },
    {
      social_name: 'Linkedin',
      img: 'assets/linkedin.svg',
      name: 'Esequiel Linares',
      link: 'https://www.linkedin.com/in/esequiel-linares-663a63300/',
      
    },
    {
        social_name: 'Github',
        img: 'assets/github.svg',
        name: 'Zekepeke',
        link: 'https://github.com/Zekepeke',

    },
    {
        social_name: 'CV Download',
        img: 'assets/resume.svg',
        name: 'Download Resume',
        link: '/assets/Esequiel_Linares_resume.pdf',
        download: true,
    },
];

export const skills = [
    //'Languages',
    'skills/python.svg',
    'skills/java.svg',
    'skills/cpp.svg',
    'skills/c.svg',
    'skills/javascript.svg',
    'skills/typescript.svg',
    'skills/sql.svg',

    // Frontend
    'skills/css.svg',
    'skills/sass.svg',
    'skills/tailwindcss.png',
    'skills/nextjs.svg',
    // 'skills/react.svg', // add back when you include React visuals

    //'Backend',
    'skills/nodejs.svg',

    // 'AI / ML'
    'skills/pytorch.svg',
    'skills/huggingface.svg',

    //'DevOps & Tools',
    'skills/git.svg',
    'skills/docker.svg',
    'skills/aws.svg',
];