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
  
export const myProjects = [
  {
    title: 'Reachy Mini – Edge Video Server',
    desc: 'Engineered a low-latency edge video server on Raspberry Pi 5 using FastAPI/Uvicorn and Picamera2/libcamera to stream live MJPEG video. Designed for real-time gesture recognition with MediaPipe/OpenCV and scalable LLM/TTS integration, achieving sub-100 ms response times in cloud-edge pipelines.',
    href: 'https://github.com/Zekepeke/Reachy-Server-Project',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    img: [
      { id: "1", img: "projects/reachy/reachy1.jpeg", height: 200 },
      { id: "2", img: "projects/reachy/reachy2.jpeg", height: 400 },
      { id: "3", img: "projects/reachy/reachy3.jpeg", height: 400 },
    ],
    tags: [
      { id: 1, name: 'Python', path: 'skills/python.svg' },
      { id: 2, name: 'FastAPI', path: '/assets/fastapi.svg' },
      { id: 3, name: 'MediaPipe', path: '/assets/mediapipe.svg' },
      { id: 4, name: 'OpenCV', path: '/assets/opencv.svg' },
    ],
  },
  {
    title: 'AirCursor – Gesture-Controlled Cursor',
    desc: 'Developed a real-time hand-gesture recognition system using MediaPipe and OpenCV, training a CNN on 1,440 frames to ~95 % accuracy. Integrated PyAutoGUI for OS-level cursor control and optimized data pipelines for low-latency, frame-accurate interaction.',
    href: 'https://github.com/Zekepeke/Computer-Vision-Project',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    img: [
      { id: "1", img: "projects/aircursor/aircursor1.jpeg", height: 200 },
      { id: "2", img: "projects/aircursor/aircursor3.jpeg", height: 300 },
    ],
    tags: [
      { id: 1, name: 'MediaPipe', path: '/assets/mediapipe.svg' },
      { id: 2, name: 'OpenCV', path: '/assets/opencv.svg' },
      { id: 3, name: 'NumPy', path: '/assets/numpy.svg' },
      { id: 4, name: 'Python', path: '/assets/python.svg' },
    ],
  },
  {
    title: 'Autograd – Tiny Reverse-Mode Engine',
    desc: 'Built a PyTorch-style automatic differentiation engine from scratch in Python, implementing reverse-mode backpropagation with operator overloading, dynamic computation graphs, and ReLU/tanh activation functions. Verified gradient correctness through analytical tests and micro-MLP experiments.',
    href: 'https://github.com/Zekepeke/autograd',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    img: [
      { id: "1", img: "projects/autograd/autograd1.jpeg", height: 400 },
      { id: "2", img: "projects/autograd/autograd2.jpeg", height: 350 },
    ],
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.svg' },
      { id: 2, name: 'NumPy', path: '/assets/numpy.svg' },
      { id: 3, name: 'PyTorch', path: '/assets/pytorch.svg' },
      { id: 4, name: 'Matplotlib', path: '/assets/matplotlib.svg' },
    ],
  },
  {
    title: 'moldmany – Character-Level Bigram LM',
    desc: 'Implemented a pure-Python character-level Bigram language model inspired by Karpathy’s *makemore*. Built an end-to-end data pipeline to construct vocabularies, estimate transition probabilities, and generate synthetic words, providing a clean baseline for scaling to n-gram and neural models.',
    href: 'https://github.com/Zekepeke/moldmany',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    img: [
      { id: "1", img: "projects/moldmany/moldmany2.jpeg", height: 300 },
      { id: "2", img: "projects/moldmany/moldmany3.jpeg", height: 300 },
    ],
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.svg' },
      { id: 2, name: 'NLP', path: '/assets/nlp.svg' },
      { id: 3, name: 'Probability', path: '/assets/probability.svg' },
    ],
  },
  {
    title: 'Shop22 – Payload/Next E-commerce',
    desc: 'Developed a full-stack e-commerce platform with Next.js 14, Payload CMS, and Stripe integration for secure transactions. Implemented RBAC, SEO optimization, and modular content builder, and containerized the app with Docker for reproducible deployments and scalable CI/CD pipelines.',
    href: 'https://github.com/Zekepeke/shop22',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    img: [
      { id: "1", img: "projects/shop22/shop221.jpeg", height: 400 },
      { id: "2", img: "projects/shop22/shop222.jpeg", height: 350 },
      { id: "3", img: "projects/shop22/shop223.jpeg", height: 300 },
      { id: "4", img: "projects/shop22/shop224.jpeg", height: 400 },
    ],
    tags: [
      { id: 1, name: 'Next.js', path: '/assets/nextjs.svg' },
      { id: 2, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 3, name: 'Stripe', path: '/assets/stripe.svg' },
      { id: 4, name: 'Docker', path: '/assets/docker.svg' },
    ],
  },
  {
    title: 'ZekeShot – Pixel Pygame Shooter',
    desc: 'Created a fast-paced retro shooter in Python using Pygame with smooth controls, progressive wave logic, and polished game feel. Designed modular level and asset systems and automated environment setup with packaged requirements for effortless testing and deployment.',
    href: 'https://github.com/Zekepeke/Zekeshot',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    img: [
      { id: "1", img: "projects/zekeshot/zekeshot1.jpeg", height: 400 },
      { id: "2", img: "projects/zekeshot/zekeshot2.jpeg", height: 400 },
    ],
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.svg' },
      { id: 2, name: 'Pygame', path: '/assets/pygame.svg' },
      { id: 3, name: 'Game Dev', path: '/assets/game.svg' },
    ],
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
    name: "J.P. Morgan Code for Good",
    pos: "Hackathon Participant",
    duration: "November 2025 - November 2025",
    icon: "/assets/Logo_of_JPMorganChase_2024.svg",
    iconBg: "#B3b3b3",
    animation: "bounce",
     points: [
      "Built the backend for a 2-day hackathon project supporting the Lilabean Foundation for Pediatric Brain Cancer Research.",
      "Built a small RESTful API in Python using Flask and SQLAlchemy on SQLite to connect the frontend and data layer.",
      "Configured the Flask app to serve the frontend, keeping deployment and integration simple for the team.",
      "Proposed rapid Figma wireframing and a lightweight data model so the team could focus on delivering a clear MVP.",
      "Coordinated across frontend, backend, and database groups, clarifying interfaces and answering integration questions.",
    ],
  },
  {
    id: 2,
    name: "Purdue University",
    pos: "Undergraduate Researcher – Multimodal Generative AI",
    duration: "September 2025 – Present",
    icon: "/assets/PU-V-Full-Rev-RGB.svg",
    iconBg: "#B3b3b3",
    animation: "victory",
    points: [
      "Led research on the Duet Dance dataset (10.3 hrs, 15 genres, 30 dancers, 10K+ annotations, 4K sequences).",
      "Achieved up to 6× accuracy gains in duet generation models through novel training methods.",
      "Built PyTorch pipelines for Text-to-Duet and Dance Accompaniment, improving results by 60–500%.",
      "Analyzed multimodal embeddings across text, motion, and audio; identified 5 use cases for VR/XR interaction.",
      "Contributed to the writing of a research paper exploring long-term dance motion generation.",
    ],
  },
  {
    id: 3,
    name: "Capital One – First Gen Focus",
    pos: "Participant (Top 10% Selected)",
    duration: "May 2025 – July 2025",
    icon: "/assets/Capital_One_logo.svg",
    iconBg: "#B3b3b3",
    animation: "clapping",
    points: [
      "Selected from over 1,000 applicants for an 8-week professional development program.",
      "Completed 10+ hours of SWE, data structures, and LeetCode-based workshops.",
      "Collaborated with mentors and peers to design 3 small projects including a multilayer perceptron model.",
      "Improved model name-generation accuracy by 25% and output diversity by 40%.",
      "Received mentorship on software engineering practices and career development.",
    ],
  },
  {
    id: 4,
    name: "Self-Employed",
    pos: "Programming Instructor",
    duration: "August 2022 – June 2025",
    icon: "/assets/noun-user-102183.svg",
    iconBg: "#B3b3b3",
    animation: "salute",
    points: [
      "Taught 15+ students programming fundamentals in Java and Python.",
      "Developed structured lesson plans improving exam performance by 20%.",
      "Enhanced student understanding of data structures and algorithmic thinking.",
      "Provided individualized support leading to class averages above 90%.",
      "Fostered critical thinking and independent project work among learners.",
    ],
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