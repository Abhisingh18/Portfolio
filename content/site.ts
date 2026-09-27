/**
 * Every word and link on the page lives here.
 * Components read this file; none of them hardcode content.
 */

export type Social = {
  label: string;
  href: string;
  handle: string;
};

export type Role = {
  title: string;
  org: string;
  logos: string[];
  cover: string;
  period: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  result: string;
  stack: string[];
  image: string | null;
  video?: string;
  poster?: string;
  repo: string | null;
  live: string | null;
  client?: string;
};

export type Award = {
  title: string;
  result: string;
  note?: string;
  image?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ResearchArea = {
  title: string;
  abbr?: string;
  /** The open problem, stated plainly. Not a claim about results. */
  problem: string;
  threads: string[];
};

export const SITE = {
  url: "https://portfolio-nine-ivory-61.vercel.app",
  name: "Abhishek Singh",
  role: "AI/ML Engineer",
  description:
    "AI/ML engineer building production intelligent systems. Quantum ML at IISc Bangalore, computer vision at IIT Hyderabad, currently Researcher at Spring Lab, IIT Madras.",
} as const;

export const PROFILE = {
  name: "Abhishek Singh",
  role: "AI/ML Engineer",
  available: true,
  location: "India",
  email: "SinghAbhishek1571@gmail.com",
  phone: "+91 96485 31091",
  resume: "/Abhishek-Singh-Resume.pdf",
  /** Two lines, shown under the hero name. Keep them short. */
  intro:
    "I build machine learning systems end to end — forecasting models, retrieval pipelines and computer-vision products that run in production, not just in notebooks.",
  /** Rotating words after "Working on" in the hero. */
  focus: ["quantum ML", "retrieval systems", "computer vision", "LLM agents"],
} as const;

export const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/Abhisingh18", handle: "Abhisingh18" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhisheksingh500/",
    handle: "abhisheksingh500",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Abhi-singh_9648/",
    handle: "Abhi-singh_9648",
  },
  {
    label: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/abhi9648k838?tab=activity",
    handle: "abhi9648k838",
  },
  {
    label: "Hugging Face",
    href: "https://huggingface.co/Abhisingh-18",
    handle: "Abhisingh-18",
  },
];

/** Spoken languages. Shown on the About page, beside the education panel. */
export const LANGUAGES = ["Hindi", "English", "Bhojpuri"] as const;

export const EDUCATION = {
  degree: "B.Tech, Information Technology",
  school: "Central University of Chhattisgarh",
  place: "Bilaspur, India",
  period: "Dec 2022 — Apr 2026",
  grade: "CGPA 8.1 / 10",
} as const;

export const ROLES: Role[] = [
  {
    title: "Founding Engineer",
    org: "Pragyaan Labs",
    logos: ["/images/logo-pragyaan.png"],
    cover: "/images/pragyaan-labs.jpg",
    period: "Jul 2026 — Present · Remote",
    current: true,
    points: [
      "Engineering studio building production AI systems and custom software — AI agents, SaaS products, APIs and the cloud infrastructure under them.",
      "Built client platforms end to end across AgriTech, EdTech and retail — Krishaan Agro, GlofiHub, Snapfit AI and UmexTrader.",
      "Own the work from architecture through deployment and ongoing maintenance, in-house rather than outsourced.",
    ],
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "MongoDB", "Docker"],
  },
  {
    title: "Researcher",
    org: "Spring Lab, IIT Madras",
    logos: ["/images/logo-iitm.png"],
    cover: "/images/spring-lab-iitm.jpg",
    period: "May 2026 — Present",
    current: true,
    points: [
      "Working on SLAM-ASR — speech recognition built on speech-LLM architectures — for Indian languages.",
      "Targeting the conditions Indic speech actually arrives in: accented, dialectal and code-switched, with little labelled audio to train on.",
    ],
    stack: ["SLAM-ASR", "Speech", "Indic Languages"],
  },
  {
    title: "Quantum Machine Learning Intern",
    org: "IISc Bangalore · TANUH.ai",
    logos: ["/images/logo-iisc.png", "/images/logo-tanuh.png"],
    cover: "/images/iisc-bangalore.jpg",
    period: "Nov 2025 — May 2026",
    points: [
      "Designed Delta-GRU, a residual forecasting architecture that models CPU-usage deltas to handle non-stationary cloud workloads.",
      "Built a RAM-safe streaming training pipeline holding under 2 GB while training on large-scale Alibaba cluster traces.",
      "Cut MSE by 68–73% against TFE-GRU and LSTM baselines across 1–20 minute horizons.",
      "Reached state-of-the-art accuracy at MSE 0.00029 (1-min) and 0.003 (5-min).",
    ],
    stack: ["PyTorch", "Time Series", "Quantum ML"],
  },
  {
    title: "AI/ML Research Intern",
    org: "IIT Hyderabad",
    logos: ["/images/logo-iith.png"],
    cover: "/images/iit-hyderabad.jpg",
    period: "May 2025 — Jun 2025",
    points: [
      "Built autonomous-driving perception modules in Python, OpenCV and ROS, improving lane-detection accuracy by 15%.",
      "Implemented YOLOv5 object detection holding 92% accuracy under varying lighting conditions.",
      "Fused LiDAR, GPS and camera streams to reach sub-metre localisation accuracy.",
    ],
    stack: ["OpenCV", "ROS", "Sensor Fusion"],
  },
  {
    title: "Research Intern",
    org: "NIT Rourkela",
    logos: ["/images/logo-nitrkl.png"],
    cover: "/images/nit-rourkela.jpg",
    period: "May 2024 — Jun 2024",
    points: ["Worked in chemical engineering research."],
    stack: [],
  },
  {
    title: "Subject Matter Expert",
    org: "Chegg India",
    logos: ["/images/logo-chegg.png"],
    cover: "/images/chegg.jpg",
    period: "Dec 2022 — Mar 2024 · Remote",
    points: [
      "Answered and explained student questions on Chegg's academic Q&A platform as a verified subject matter expert, over roughly 1.3 years.",
    ],
    stack: [],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "sutra-1.3b",
    title: "Sutra-1.3B",
    category: "LLM Pretraining",
    blurb:
      "A 1.32B-parameter Mixture-of-Experts language model trained from scratch — 48 experts with 4 active per token, latent attention with rotary encoding, and DPO alignment. Trained on 18B tokens across 4 GPUs in 11 days.",
    result: "1.32B params, runs at 10 tok/s on CPU",
    stack: ["PyTorch", "Mixture-of-Experts", "Custom Tokenizer", "DPO"],
    image: "/images/sutra.jpg",
    repo: "https://github.com/Abhisingh18/Sutra-1.3B-Model",
    live: "https://sutra-1-3-b-model-15co.vercel.app/",
  },
  {
    slug: "krishaan-agro",
    title: "Krishaan Agro",
    category: "AgriTech Platform",
    blurb:
      "An agri-commerce and advisory platform serving 12,000+ farmer families across 45+ districts — product shop with cash-on-delivery, soil-testing reports with crop-specific recommendations, and contract farming with assured buy-back.",
    result: "12,000+ farmer families, 45+ districts",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "MongoDB"],
    image: "/images/krishaan-agro.jpg",
    repo: null,
    live: "https://www.krishaanagro.com/",
    client: "Pragyaan Labs",
  },
  {
    slug: "glofihub",
    title: "GlofiHub",
    category: "EdTech Platform",
    blurb:
      "An AI-driven platform guiding students toward international education, skill-development courses and global job placement — admissions across 50+ countries, employer connections and institutional partnerships.",
    result: "Built end to end, live in production",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "MongoDB"],
    image: "/images/glofihub.jpg",
    repo: null,
    live: "https://www.glofihub.com/",
    client: "Pragyaan Labs",
  },
  {
    slug: "snapfit-ai",
    title: "Snapfit AI",
    category: "AI Mobile App",
    blurb:
      "An AI virtual try-on app for garment stores — shoppers see how a piece looks on them before they buy. Built for Android and shipped to the Google Play Store.",
    result: "Live on the Google Play Store",
    stack: ["React Native", "Android", "Computer Vision", "GenAI"],
    image: "/images/snapfit-ai.jpg",
    repo: null,
    live: null,
    client: "Pragyaan Labs",
  },
  {
    slug: "vertical-ai",
    title: "Vertical.ai",
    category: "GenAI & RAG",
    blurb:
      "A NotebookLM-inspired RAG platform for citation-grounded QA over imported documents, with an OpenAlex + FAISS ingestion pipeline and interactive mind maps.",
    result: "Cut manual reading effort by 60%",
    stack: ["FastAPI", "FAISS", "Groq", "React"],
    image: "/images/vertical-ai.jpg",
    video: "/media/vertical-ai.mp4",
    poster: "/posters/vertical-ai.jpg",
    repo: "https://github.com/Abhisingh18/Vertical.ai",
    live: null,
  },
  {
    slug: "agrismart",
    title: "Smart Agriculture Monitoring",
    category: "IoT + AI",
    blurb:
      "An IoT sensor network paired with on-device vision models for early crop-disease detection, running inference at the edge on Raspberry Pi.",
    result: "Smart India Hackathon 2025 — winning build",
    stack: ["Raspberry Pi", "TensorFlow Lite", "MQTT"],
    image: "/images/agriculture.jpg",
    repo: "https://github.com/Abhisingh18/AGRISMART",
    live: "https://sih-2025-16aj.vercel.app/",
  },
  {
    slug: "prashikshak",
    title: "Prashikshak",
    category: "GovTech Platform",
    blurb:
      "A disaster-management training platform for the national response ecosystem — live monitoring of exercises across states, data-backed scoring and feedback, and integrated reporting from NDMA, SDMAs and NGOs.",
    result: "Smart India Hackathon — NDMA problem statement",
    stack: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    image: "/images/prashikshak.jpg",
    repo: "https://huggingface.co/spaces/Abhisingh-18/prashikshak-website",
    live: "https://abhisingh-18-prashikshak-website.static.hf.space/",
  },
  {
    slug: "vidya-ai",
    title: "Vidya AI",
    category: "EdTech AI",
    blurb:
      "Generates animated teacher videos in 22 Indian languages, with lessons personalised to a learner's grade on demand.",
    result: "22 Indian languages, free to use",
    stack: ["GenAI", "React", "TTS"],
    image: "/images/vidya-ai.jpg",
    repo: "https://github.com/Abhisingh18/Vidya-AI",
    // The Vercel deployment sits behind deployment protection, so a public
    // link would only show visitors a login wall.
    live: null,
  },
  {
    slug: "crowd-intelligence",
    title: "Crowd Intelligence OS",
    category: "Computer Vision",
    blurb:
      "Real-time crowd analytics that tracks pedestrians, estimates flow density, computes dwell times and builds spatial direction matrices — built to hold up at Shibuya-Crossing density.",
    result: "Real-time density & dwell-time analytics",
    stack: ["YOLOv8", "FastAPI", "React", "Recharts"],
    image: null,
    video: "/media/crowd-intelligence.mp4",
    poster: "/posters/crowd-intelligence.jpg",
    repo: "https://github.com/Abhisingh18/Crowd-Intelligence",
    live: "https://crowd-intelligence-l58l.vercel.app/",
  },
];

export const AWARDS: Award[] = [
  {
    title: "Smart India Hackathon 2025",
    result: "Winner",
    note: "National finals",
    image: "/images/award-sih.jpg",
  },
  { title: "Hacktivate 2025", result: "Winner", image: "/images/award-hacktivate.jpg" },
  { title: "GGV Ideathon 2024", result: "Winner", image: "/images/award-ggv.jpg" },
  {
    title: "National Innovation Award 2024",
    result: "Winner",
    image: "/images/award-nia.jpg",
  },
  { title: "BNI Shark Tank 2025", result: "1st Runner-Up", image: "/images/award-bni.jpg" },
  {
    title: "CBDE Grant",
    result: "₹20K Recipient",
    note: "Funded build grant",
    image: "/images/award-cbde.jpg",
  },
  { title: "HackVerse 2025", result: "Top 4", image: "/images/award-hackverse.jpg" },
  { title: "Hack For Impact", result: "Top 9", note: "IIT Delhi" },
  { title: "TIF", result: "Top 13", note: "IIT Madras" },
];

export const SKILLS: SkillGroup[] = [
  {
    label: "Programming",
    items: ["Python", "TypeScript", "SQL", "DSA", "OOP"],
  },
  {
    label: "Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "OpenCV",
      "YOLOv5 / v8",
      "Time-Series Forecasting",
    ],
  },
  {
    label: "Model Training",
    items: [
      "Transformers",
      "Pretraining",
      "Fine-tuning",
      "Post-training",
      "RLHF",
      "PPO",
      "DPO",
      "GRPO",
    ],
  },
  {
    label: "GenAI & Retrieval",
    items: [
      "RAG",
      "Agents",
      "VLMs",
      "LangChain",
      "FAISS",
      "Hugging Face",
      "Groq",
      "Ollama",
    ],
  },
  {
    label: "Backend & Web",
    items: ["FastAPI", "Next.js", "React", "Node.js", "REST APIs"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "CI/CD", "Azure", "Vercel", "Render", "Git"],
  },
];

/** Marquee strip under the hero. */
export const AFFILIATIONS = [
  "IIT Madras",
  "IISc Bangalore",
  "IIT Hyderabad",
  "Smart India Hackathon",
  "TANUH.ai",
  "IIT Delhi",
  "CBDE",
];

export type FocusArea = {
  no: string;
  title: string[];
  abbr?: string;
  body: string;
  /** The actual tools. Development cards carry these; research cards do not. */
  stack?: string[];
};

/**
 * The research half states open problems — it claims no benchmark or paper.
 * The engineering half states what I build. Add numbers only when they exist.
 */
export const RND = {
  affiliation: "Spring Lab, IIT Madras",
  vision: "Language should not decide who gets to use good technology.",
  lede: "My research is on speech and language for Indian languages, where the data that makes English models work simply does not exist.",
  developmentLede:
    "Alongside the research, the engineering that puts a model in front of people and keeps it there.",

  /** Open problems I work on. No benchmark or paper is claimed here. */
  research: [
    {
      no: "01",
      title: ["Speech", "Recognition"],
      abbr: "ASR",
      body: "Recognition degrades on accented, dialectal and code-switched speech — which is how most of India actually speaks.",
    },
    {
      no: "02",
      title: ["Multilingual", "Translation"],
      abbr: "MT",
      body: "Translation quality collapses without large parallel corpora, and India's 22 scheduled languages sit almost entirely in that low-resource regime.",
    },
    {
      no: "03",
      title: ["Large Language", "Models"],
      abbr: "LLM",
      body: "Adapting and aligning language models for languages they were never really trained on, and coupling them to speech encoders.",
    },
    {
      no: "04",
      title: ["Vision-Language", "Models"],
      abbr: "VLM",
      body: "Grounding language in visual context stays brittle once an image leaves the distribution the model was tuned on.",
    },
  ] satisfies FocusArea[],

  /** What I build and ship. */
  development: [
    {
      no: "05",
      title: ["Web", "& Apps"],
      body: "The product around the model — Next.js and React on the web, React Native on mobile, built to stay quick on the devices people actually own.",
      stack: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
    },
    {
      no: "06",
      title: ["Backend", "& APIs"],
      body: "FastAPI and Node services that put model inference behind a stable contract, with the queuing, timeouts and error handling production asks for.",
      stack: ["FastAPI", "Node.js", "Python", "REST APIs", "MongoDB", "MySQL"],
    },
    {
      no: "07",
      title: ["RAG", "Applications"],
      body: "Retrieval pipelines where every answer carries its source — FAISS and vector search, citation-grounded generation, evaluation that catches drift.",
      stack: ["LangChain", "FAISS", "Hugging Face", "Groq", "Ollama"],
    },
    {
      no: "08",
      title: ["Deployment", "& Infra"],
      body: "Docker, CI/CD and the hosting that keeps it all up — Vercel, Render, Azure — including the cold starts and timeouts nobody demos.",
      stack: ["Docker", "CI/CD", "Vercel", "Render", "Azure", "Git"],
    },
  ] satisfies FocusArea[],
} as const;

/** Dated updates for the home page. Newest first; keep these factual. */
export const NEWS = [
  {
    date: "May 2026",
    body: "Joined Spring Lab, IIT Madras as Researcher, working on speech and language for Indian languages.",
  },
  {
    date: "Nov 2025",
    body: "Started quantum machine learning research at IISc Bangalore with TANUH.ai, on forecasting for non-stationary cloud workloads.",
  },
  {
    date: "2025",
    body: "Won Smart India Hackathon 2025 with an edge-inference crop-disease detection system.",
  },
];

/**
 * Every section is its own route. `index` drives the numbering shown in
 * headings, and `blurb` is the one-liner on the home index.
 */
export const PAGES = [
  {
    index: "01",
    label: "Work",
    href: "/work",
    title: "Work experience",
    description:
      "Founding engineer at Pragyaan Labs, with research roles at Spring Lab IIT Madras, IISc Bangalore, IIT Hyderabad and NIT Rourkela — including Delta-GRU forecasting and autonomous-driving perception.",
    blurb: "Engineering at Pragyaan Labs and research across IIT Madras, IISc Bangalore and IIT Hyderabad.",
  },
  {
    index: "02",
    label: "Research",
    href: "/research",
    title: "Research & projects",
    description:
      "Multilingual machine translation, speech recognition and vision-language models for Indian languages — and the projects built on them.",
    blurb: "Multilingual translation, speech recognition and vision-language models — and the RAG, agent and full-stack systems I have built."
  },
  {
    index: "03",
    label: "Recognition",
    href: "/recognition",
    title: "Recognition",
    description:
      "Five national hackathon wins including Smart India Hackathon 2025, a funded CBDE build grant, and finals placements at IIT Delhi and IIT Madras.",
    blurb: "Five national hackathon wins, a funded build grant and finals placements.",
  },
  {
    index: "04",
    label: "About",
    href: "/about",
    title: "About",
    description:
      "Background, education and the toolkit behind the work — an AI/ML engineer working between research and production.",
    blurb: "Background, education and the toolkit I reach for.",
  },
  {
    index: "05",
    label: "Contact",
    href: "/contact",
    title: "Contact",
    description:
      "Get in touch about AI/ML roles, research collaborations or consulting work.",
    blurb: "Open to roles, research collaborations and consulting.",
  },
] as const;

export type PageMeta = (typeof PAGES)[number];
