import { Code, Database, Brain, Rocket } from "lucide-react";

export const PROFILE = {
    name: "Abhishek Singh",
    roles: ["AI/ML Engineer", "Research Intern", "AI Consultant"],
    shortBio: "Research-driven AI Engineer building scalable intelligent systems. Passionate about LLMs, Computer Vision, and Solving Real-World Problems.",
    email: "abhishek@example.com",
    linkedin: "https://www.linkedin.com/in/abhishek-singh-ai-ml/", // Placeholder
    github: "https://github.com/abhishek-singh-ai", // Placeholder
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/abhi9648k838?tab=activity",
    leetcode: "https://leetcode.com/u/Abhi-singh_9648/"
};

export const EXPERIENCE = [
    {
        role: "Quantum Machine Learning Intern",
        company: "IISc Bangalore",
        duration: "May 2025 - Present", // Assuming current or recent
        description: [
            "Working on Quantum Neural Networks for optimization problems.",
            "Developing hybrid classical-quantum algorithms.",
            "Collaborating with research team on QML publications."
        ]
    },
    {
        role: "AI/ML Research Intern",
        company: "IIT Hyderabad",
        duration: "Jan 2024 - Apr 2024",
        description: [
            "Researched on Advanced Computer Vision architectures.",
            "Optimized inference time for edge devices by 40%.",
            "Published findings in student research symposium."
        ]
    },
    {
        role: "Optimization & Systems Project",
        company: "IIT Kharagpur",
        duration: "Aug 2023 - Dec 2023",
        description: [
            "Worked on distributed systems optimization using AI.",
            "Implmented custom scheduling algorithms.",
            "Reduced system latency by 25%."
        ]
    }
];

export const PROJECTS = [
    {
        title: "Trust-First AI Copilot",
        category: "GenAI & RAG",
        description: "An AI OS focused on transparency. Features 'Disagree-with-Me' mode, fact verification, and decision support using Groq & Vector RAG.",
        techStack: ["Python", "Groq API", "FAISS", "React"],
        github: "https://github.com/Abhisingh18/Trust-first-AI-Copilot",
        demo: "#",
        impact: "Reduces hallucinations by 90%"
    },
    {
        title: "Railway Scheduling System (IIT KGP)",
        category: "Client Project",
        description: "AI-driven scheduling and resource optimization system developed for railway networks at IIT Kharagpur.",
        techStack: ["Python", "Optimization Algos", "Data Analytics"],
        github: "https://github.com/Abhisingh18/Railway-Project-IIT-KGP",
        demo: "#",
        impact: "Optimized scheduling logic for large-scale networks"
    },
    {
        title: "AI-Powered RAG Disaster Analytics Platform",
        category: "AI & NLP",
        description: "A real-time disaster management system using Retrieval-Augmented Generation for NDMA.",
        techStack: ["React", "Python", "LangChain", "Pinecone"],
        github: "https://github.com/abhi-singh/rag-disaster",
        demo: "#",
        impact: "Used by NDMA for real-time analysis"
    },
    {
        title: "Advanced Cloud Workload Forecasting",
        category: "Time Series",
        description: "Transformer-based model (TFE-GRU + Attention) to predict cloud resource usage.",
        techStack: ["PyTorch", "Transformers", "AWS"],
        github: "#",
        demo: "#",
        impact: "95% accuracy in load prediction"
    },
    {
        title: "AI Cold Outreach Automation",
        category: "Automation",
        description: "Automated outreach system using LLMs to personalize emails at scale.",
        techStack: ["OpenAI API", "Celery", "Redis"],
        github: "#",
        demo: "#",
        impact: "Increased response rate by 3x"
    },
    {
        title: "Smart Agriculture Monitoring",
        category: "IoT + AI",
        description: "IoT sensor network integrated with AI for crop disease detection.",
        techStack: ["Raspberry Pi", "TensorFlow Lite", "MQTT"],
        github: "#",
        demo: "#",
        impact: "Deployed in 5 farms"
    }
];

export const SKILLS = [
    { category: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost"] },
    { category: "Deep Learning", items: ["Transformers", "CNNs", "RNNs/LSTMs", "GANs"] },
    { category: "NLP & RAG", items: ["LangChain", "LlamaIndex", "Hugging Face", "OpenAI API"] },
    { category: "Time Series", items: ["ARIMA", "Prophet", "LSTMs", "TFE-GRU"] },
    { category: "Web & Backend", items: ["React.js", "FastAPI", "Node.js", "PostgreSQL"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
];

export const SERVICES = [
    {
        title: "AI Agent Development",
        description: "Custom autonomous agents for workflow automation.",
        icon: Brain
    },
    {
        title: "Custom ML Models",
        description: "Tailored models for classification, regression, and forecasting.",
        icon: Code
    },
    {
        title: "RAG Systems",
        description: "Enterprise-grade search and retrieval systems on your data.",
        icon: Database
    },
    {
        title: "Research & Prototyping",
        description: "Turning papers into code and POCs for startups.",
        icon: Rocket
    }
];

import sihImage from "../assets/sih-winner.jpg";
import cbdeImage from "../assets/cbde-grant.jpg";
import hacktivateImage from "../assets/hacktivate-winner.jpg";
import ggvImage from "../assets/ggv-winner.jpg";
import innovationImage from "../assets/innovation-winner.jpg";
import bnyImage from "../assets/bny-winner.jpg";
import hackverseImage from "../assets/hackverse-rank.jpg";

export const ACHIEVEMENTS = [
    { title: "Smart India Hackathon", result: "Winner", image: sihImage },
    { title: "CBDE Grant Funding (₹20k)", result: "Recipient", image: cbdeImage },
    { title: "GGV Ideathon", result: "Winner", image: ggvImage },
    { title: "Hacktivate", result: "Winner", image: hacktivateImage },
    { title: "National Innovation Award", result: "Recipient", image: innovationImage },
    { title: "BNY Shark Tank", result: "Winner", image: bnyImage },
    { title: "Hackverse 25", result: "4th Rank", image: hackverseImage },
    { title: "IIT-Level Finals", result: "Multiple" }
];
