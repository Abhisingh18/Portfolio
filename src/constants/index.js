import {
    Brain,
    Code,
    Database,
    Rocket,
    Github,
    Linkedin,
    Mail,
    Terminal,
    Code2,
} from "lucide-react";

import trustFirstAiImage from "../assets/AI-copilots.jpg";
import verticalAiImage from "../assets/Vertical.jpg";
import agricultureImage from "../assets/Agriculture.jpeg";
import vidyaImage from "../assets/Vidya.jpg";
import hunterAiImage from "../assets/HUnterai.jpg";
import iiscInternImage from "../assets/iisc banglore.jpg";
import iitHyderabadInternImage from "../assets/IIT-Hyderabad.jpg";
import springLabImage from "../assets/spring_lab_iit_madras_cover.jpg";
import iitmLogoCircle from "../assets/IITM_LOGO_circle.png";
import tanuhLogoCircle from "../assets/tanuh_logo_circle.png";
import iiscLogoCircle from "../assets/iisc_logo_circle.png";
import iithLogoCircle from "../assets/iith_logo_circle.png";

import sihImage from "../assets/sih winner.jpg";
import cbdeImage from "../assets/cbde-grant.jpg";
import hacktivateImage from "../assets/hacktivate-winner.jpg";
import ggvImage from "../assets/ggv-winner.jpg";
import innovationImage from "../assets/innovation-winner.jpg";
import bnyImage from "../assets/bny-winner.jpg";
import hackverseImage from "../assets/hackverse-rank.jpg";

/* Large demo videos live in /public/media so the browser only downloads one
   when a visitor actually presses play. Posters are the frame shown until then. */
const media = (slug) => ({
    video: `/media/${slug}.mp4`,
    poster: `/posters/${slug}.jpg`,
});

export const SITE_URL = "https://portfolio-nine-ivory-61.vercel.app";

export const PROFILE = {
    name: "Abhishek Singh",
    title: "AI/ML Engineer",
    roles: [
        "AI/ML Engineer",
        "Quantum ML Researcher",
        "GenAI & RAG Developer",
        "Computer Vision Engineer",
    ],
    tagline:
        "Research-driven AI engineer building intelligent systems that ship. Currently at Spring Lab, IIT Madras — previously IISc Bangalore and IIT Hyderabad.",
    shortBio:
        "I design and deploy machine learning systems end to end — from forecasting models and RAG pipelines to computer-vision products running in production.",
    location: "India",
    email: "SinghAbhishek1571@gmail.com",
    phone: "+91 96485 31091",
    resume: "/Abhishek-Singh-Resume.pdf",
    linkedin: "https://www.linkedin.com/in/abhisheksingh500/",
    github: "https://github.com/Abhisingh18",
    geeksforgeeks:
        "https://www.geeksforgeeks.org/profile/abhi9648k838?tab=activity",
    leetcode: "https://leetcode.com/u/Abhi-singh_9648/",
    available: true,
};

export const SOCIALS = [
    { name: "GitHub", href: PROFILE.github, icon: Github },
    { name: "LinkedIn", href: PROFILE.linkedin, icon: Linkedin },
    { name: "Email", href: `mailto:${PROFILE.email}`, icon: Mail },
    { name: "LeetCode", href: PROFILE.leetcode, icon: Code2 },
    { name: "GeeksforGeeks", href: PROFILE.geeksforgeeks, icon: Terminal },
];

/* Headline numbers for the hero. Every one of these is backed by something
   further down the page — keep it that way. */
export const STATS = [
    { value: "3", label: "IIT / IISc research roles" },
    { value: "5x", label: "Hackathon wins" },
    { value: "73%", label: "MSE cut vs. baseline" },
    { value: "10+", label: "Systems shipped" },
];

export const EDUCATION = {
    institution: "Central University of Chhattisgarh",
    location: "Bilaspur, India",
    degree: "B.Tech, Information Technology",
    duration: "Dec 2022 — Apr 2026",
    grade: "CGPA 8.1 / 10",
};

export const EXPERIENCE = [
    {
        role: "Project Staff",
        company: "Spring Lab, IIT Madras",
        duration: "May 2026 — Present",
        current: true,
        image: springLabImage,
        logo: iitmLogoCircle,
        description: [
            "Applied AI/ML research and systems engineering at the Spring Lab, IIT Madras.",
        ],
        tags: ["Research", "AI/ML Systems"],
    },
    {
        role: "Quantum Machine Learning Intern",
        company: "IISc Bangalore · TANUH.ai",
        duration: "Nov 2025 — May 2026",
        image: iiscInternImage,
        logo: iiscLogoCircle,
        logo2: tanuhLogoCircle,
        description: [
            "Designed Delta-GRU, a residual forecasting architecture that models CPU-usage deltas to handle non-stationary cloud workloads.",
            "Built a RAM-safe streaming training pipeline holding under 2 GB while training on large-scale Alibaba cluster traces.",
            "Cut MSE by 68–73% against TFE-GRU and LSTM baselines across 1–20 minute horizons.",
            "Reached state-of-the-art accuracy at MSE 0.00029 (1-min) and 0.003 (5-min).",
        ],
        tags: ["Time Series", "PyTorch", "Quantum ML"],
    },
    {
        role: "AI/ML Research Intern",
        company: "IIT Hyderabad",
        duration: "May 2025 — Jun 2025",
        image: iitHyderabadInternImage,
        logo: iithLogoCircle,
        description: [
            "Built autonomous-driving perception modules in Python, OpenCV and ROS, improving lane-detection accuracy by 15%.",
            "Implemented YOLOv5 object detection holding 92% accuracy under varying lighting conditions.",
            "Fused LiDAR, GPS and camera streams to reach sub-metre localisation accuracy.",
        ],
        tags: ["Computer Vision", "ROS", "Sensor Fusion"],
    },
];

/* `featured: true` pins a project to the top of the grid.
   `freelance: true` moves it into the client-work section instead. */
export const PROJECTS = [
    {
        title: "Vidya AI",
        category: "EdTech AI",
        featured: true,
        description:
            "Generates professional animated teacher videos in 22 Indian languages, with lessons personalised to a learner's grade on demand.",
        techStack: ["GenAI", "React", "TTS", "Multilingual"],
        github: "https://github.com/Abhisingh18/Vidya-AI",
        // No public demo: the Vercel deployment sits behind deployment
        // protection, so the old link only showed visitors a login wall.
        demo: null,
        impact: "22 Indian languages, free to use",
        image: vidyaImage,
    },
    {
        title: "Vertical.ai",
        category: "GenAI & RAG",
        featured: true,
        description:
            "A NotebookLM-inspired RAG platform for citation-grounded QA over imported documents, with an OpenAlex + FAISS ingestion pipeline and interactive mind maps.",
        techStack: ["FastAPI", "FAISS", "Groq", "React"],
        github: "https://github.com/Abhisingh18/Vertical.ai",
        demo: null,
        impact: "Cut manual reading effort by 60%",
        image: verticalAiImage,
        ...media("vertical-ai"),
    },
    {
        title: "Crowd Intelligence OS",
        category: "Computer Vision",
        featured: true,
        description:
            "Real-time crowd analytics that tracks pedestrians, estimates flow density, computes dwell times and builds spatial direction matrices — built to hold up at Shibuya-Crossing density.",
        techStack: ["YOLOv8", "FastAPI", "React", "Recharts"],
        github: "https://github.com/Abhisingh18/Crowd-Intelligence",
        demo: "https://crowd-intelligence-l58l.vercel.app/",
        impact: "Real-time density & dwell-time analytics",
        image: null,
        ...media("crowd-intelligence"),
    },
    {
        title: "Trust-First AI Copilot",
        category: "GenAI & RAG",
        description:
            "A copilot built around verifiability: source-grounded answers with confidence scoring, a 'Disagree-with-Me' mode, and citation-backed retrieval via FAISS and Tavily.",
        techStack: ["FastAPI", "FAISS", "Groq", "Next.js"],
        github: "https://github.com/Abhisingh18/Trust-first-AI-Copilot",
        demo: null,
        impact: "Citation-backed answers with confidence scoring",
        image: trustFirstAiImage,
    },
    {
        title: "Smart Agriculture Monitoring",
        category: "IoT + AI",
        description:
            "An IoT sensor network paired with on-device vision models for early crop-disease detection, running inference at the edge on Raspberry Pi.",
        techStack: ["Raspberry Pi", "TensorFlow Lite", "MQTT"],
        github: "https://github.com/Abhisingh18/AGRISMART",
        demo: "https://sih-2025-16aj.vercel.app/",
        impact: "Smart India Hackathon 2025 — winning build",
        image: agricultureImage,
    },
    {
        title: "Hunter AI",
        category: "LLM Automation",
        description:
            "A production-ready outreach engine that parses résumés, engineers prompts per recipient and routes across multiple models (Groq API, Ollama + Mistral).",
        techStack: ["Groq API", "Ollama", "Mistral", "Python"],
        github: "https://github.com/Abhisingh18/HunterAI",
        demo: null,
        impact: "Cut manual outreach effort by 90%",
        image: hunterAiImage,
        ...media("hunter-ai"),
    },

    /* ── Client / freelance work ── */
    {
        title: "Dodge AI — ERP Copilot",
        category: "Enterprise AI",
        freelance: true,
        description:
            "An ERP analytics copilot that traces Order-to-Cash flows: it turns natural-language questions into SQL, runs them against SAP data, and renders the resulting process graph in Cytoscape.",
        techStack: ["FastAPI", "React", "Cytoscape.js", "SQL"],
        github: "https://github.com/Abhisingh18/Dodge-AI-ERP-Copilot",
        demo: "https://dodge-ai-erp-copilot-xcju.vercel.app/",
        impact: "Natural-language O2C process analytics",
        image: null,
        ...media("dodge-ai"),
    },
    {
        title: "Mantis — Cognitive Cartography",
        category: "Spatial Reasoning",
        freelance: true,
        description:
            "A cognitive-cartography engine that builds navigable spatial maps from unstructured input for downstream reasoning tasks.",
        techStack: ["Python", "Graph AI", "Mapping"],
        github:
            "https://github.com/Abhisingh18/Mantis-Basic-Version-of-Cognitive-Cartography-",
        demo: null,
        impact: "Spatial reasoning research prototype",
        image: null,
        ...media("mantis"),
    },
];

export const SKILLS = [
    {
        category: "Languages & Foundations",
        items: ["Python", "SQL", "Data Structures & Algorithms", "OOP", "HLD / LLD"],
    },
    {
        category: "AI & Machine Learning",
        items: [
            "Deep Learning",
            "Computer Vision",
            "NLP",
            "Time-Series Forecasting",
            "Quantum ML",
        ],
    },
    {
        category: "Frameworks & Libraries",
        items: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "YOLOv5 / v8"],
    },
    {
        category: "GenAI & RAG",
        items: ["LangChain", "FAISS", "Hugging Face", "Groq", "Ollama"],
    },
    {
        category: "Web & Backend",
        items: ["React.js", "React Native", "FastAPI", "Node.js", "REST APIs"],
    },
    {
        category: "Data & Analytics",
        items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
        category: "Cloud & DevOps",
        items: ["Docker", "CI/CD", "Microsoft Azure", "Vercel", "Render"],
    },
    {
        category: "Databases & Tools",
        items: ["MongoDB", "MySQL", "Git", "Linux", "Jupyter"],
    },
];

export const SERVICES = [
    {
        title: "AI Agent Development",
        description:
            "Autonomous agents that carry real workflows end to end — tool use, routing and guardrails included.",
        icon: Brain,
    },
    {
        title: "Custom ML Models",
        description:
            "Forecasting, classification and vision models trained on your data and tuned to your constraints.",
        icon: Code,
    },
    {
        title: "RAG Systems",
        description:
            "Citation-grounded retrieval over private corpora, built so every answer traces back to a source.",
        icon: Database,
    },
    {
        title: "Research & Prototyping",
        description:
            "Turning papers into working code — proofs of concept that de-risk a decision before you fund it.",
        icon: Rocket,
    },
];

export const ACHIEVEMENTS = [
    {
        title: "Smart India Hackathon 2025",
        result: "Winner",
        note: "National finals",
        image: sihImage,
    },
    { title: "Hacktivate 2025", result: "Winner", image: hacktivateImage },
    { title: "GGV Ideathon 2024", result: "Winner", image: ggvImage },
    {
        title: "National Innovation Award 2024",
        result: "Winner",
        image: innovationImage,
    },
    {
        title: "BNI Shark Tank 2025",
        result: "1st Runner-Up",
        image: bnyImage,
    },
    {
        title: "CBDE Grant",
        result: "₹20K Recipient",
        note: "Funded build grant",
        image: cbdeImage,
    },
    { title: "HackVerse 2025", result: "Top 4", image: hackverseImage },
    { title: "Hack For Impact", result: "Top 9", note: "IIT Delhi" },
    { title: "TIF", result: "Top 13", note: "IIT Madras" },
];

export const NAV_LINKS = [
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Achievements", to: "achievements" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
];
