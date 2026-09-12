/**
 * Every word and link on the page lives here.
 * Components read this file; none of them hardcode content.
 */

export type Social = {
  label: string;
  href: string;
  handle: string;
};

export type Stat = {
  value: string;
  label: string;
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
    "AI/ML engineer building production intelligent systems. Quantum ML at IISc Bangalore, computer vision at IIT Hyderabad, currently Project Staff at Spring Lab, IIT Madras.",
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
];

/** Each number here is backed by something further down the page. */
export const STATS: Stat[] = [
  { value: "73%", label: "MSE cut vs. baseline" },
  { value: "3", label: "IIT / IISc research roles" },
  { value: "5", label: "National hackathon wins" },
  { value: "8.1", label: "CGPA" },
];

export const EDUCATION = {
  degree: "B.Tech, Information Technology",
  school: "Central University of Chhattisgarh",
  place: "Bilaspur, India",
  period: "Dec 2022 — Apr 2026",
  grade: "CGPA 8.1 / 10",
} as const;

export const ROLES: Role[] = [
  {
    title: "Project Staff",
    org: "Spring Lab, IIT Madras",
    logos: ["/images/logo-iitm.png"],
    cover: "/images/spring-lab-iitm.jpg",
    period: "May 2026 — Present",
    current: true,
    points: [
      "Applied AI/ML research and systems engineering at the Spring Lab, IIT Madras.",
    ],
    stack: ["Research", "AI/ML Systems"],
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
];

export const PROJECTS: Project[] = [
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
    label: "Languages",
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
    label: "GenAI & Retrieval",
    items: ["LangChain", "FAISS", "Hugging Face", "Groq", "Ollama"],
  },
  {
    label: "Backend & Web",
    items: ["FastAPI", "Next.js", "React", "Node.js", "REST APIs"],
  },
  {
    label: "Data",
    items: ["Pandas", "NumPy", "Matplotlib", "MongoDB", "MySQL"],
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
  /** Research questions vs. things I build for clients. Shown differently. */
  kind: "research" | "engineering";
};

/**
 * The research half states open problems — it claims no benchmark or paper.
 * The engineering half states what I build. Add numbers only when they exist.
 */
export const RND = {
  affiliation: "Spring Lab, IIT Madras",
  vision:
    "Language should not decide who gets to use good technology.",
  lede: "My research is on speech and language for Indian languages, where the data that makes English models work simply does not exist. Alongside it I build the systems that put such models in front of real users.",
  areas: [
    {
      no: "01",
      title: ["Multilingual", "Translation"],
      abbr: "MT",
      body: "Translation quality collapses without large parallel corpora, and India's 22 scheduled languages sit almost entirely in that low-resource regime.",
      kind: "research",
    },
    {
      no: "02",
      title: ["Speech", "Recognition"],
      abbr: "ASR",
      body: "Recognition degrades on accented, dialectal and code-switched speech — which is how most of India actually speaks.",
      kind: "research",
    },
    {
      no: "03",
      title: ["Vision-Language", "Models"],
      abbr: "VLM",
      body: "Grounding language in visual context stays brittle once an image leaves the distribution the model was tuned on.",
      kind: "research",
    },
    {
      no: "04",
      title: ["RAG", "Applications"],
      body: "Retrieval pipelines where every answer carries its source — FAISS and vector search, citation-grounded generation, evaluation that catches drift.",
      kind: "engineering",
    },
    {
      no: "05",
      title: ["LLM"],
      body: "Agents that carry a workflow end to end: tool use, model routing across providers, and guardrails that fail loudly rather than quietly.",
      kind: "engineering",
    },
    {
      no: "06",
      title: ["Full-Stack", "& Apps"],
      body: "The product around the model — FastAPI services, Next.js and React front-ends, React Native apps, and the deployment that keeps them up.",
      kind: "engineering",
    },
  ] satisfies FocusArea[],
} as const;

/** Dated updates for the home page. Newest first; keep these factual. */
export const NEWS = [
  {
    date: "May 2026",
    body: "Joined Spring Lab, IIT Madras as Project Staff, working on speech and language for Indian languages.",
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
      "Research and engineering roles at Spring Lab IIT Madras, IISc Bangalore and IIT Hyderabad — including Delta-GRU forecasting and autonomous-driving perception.",
    blurb: "Research and engineering roles across IIT Madras, IISc Bangalore and IIT Hyderabad.",
  },
  {
    index: "02",
    label: "Research",
    href: "/research",
    title: "Research & development",
    description:
      "Multilingual machine translation, speech recognition and vision-language models for Indian languages, plus retrieval, agent and full-stack engineering.",
    blurb: "Multilingual translation, speech recognition and vision-language models — plus the RAG, agent and full-stack work I build.",
  },
  {
    index: "03",
    label: "Projects",
    href: "/projects",
    title: "Selected projects",
    description:
      "Prototypes and production systems across generative AI, computer vision, retrieval and IoT — with live demos and source.",
    blurb: "Prototypes and production systems across generative AI, computer vision and IoT.",
  },
  {
    index: "04",
    label: "Recognition",
    href: "/recognition",
    title: "Recognition",
    description:
      "Five national hackathon wins including Smart India Hackathon 2025, a funded CBDE build grant, and finals placements at IIT Delhi and IIT Madras.",
    blurb: "Five national hackathon wins, a funded build grant and finals placements.",
  },
  {
    index: "05",
    label: "About",
    href: "/about",
    title: "About",
    description:
      "Background, education and the toolkit behind the work — an AI/ML engineer working between research and production.",
    blurb: "Background, education and the toolkit I reach for.",
  },
  {
    index: "06",
    label: "Contact",
    href: "/contact",
    title: "Contact",
    description:
      "Get in touch about AI/ML roles, research collaborations or consulting work.",
    blurb: "Open to roles, research collaborations and consulting.",
  },
] as const;

export type PageMeta = (typeof PAGES)[number];
