import { Code, Database, Brain, Rocket } from "lucide-react";
import trustFirstAiImage from "../assets/AI-copilots.jpg";
import verticalAiImage from "../assets/Vertical.png";
import verticalAiVideo from "../assets/Vertical ai prototype video.mp4";
import hunterAiVideo from "../assets/HUNTER AI.mp4";
import mantisVideo from "../assets/Mantis video.mp4";
import assignmentVideo from "../assets/Assignment.mp4";
import iiscAssignmentImage from "../assets/iisc assignment.jpeg";
import railwayImage from "../assets/iit-kgp Supply chian  Operation Reasearch.jpeg";
import agricultureImage from "../assets/Agriculture.jpeg";
import hunterAiImage from "../assets/HUnterai.png";
import iiscInternImage from "../assets/iisc banglore.jpg";
import iitHyderabadInternImage from "../assets/IIT-Hyderabad.jpg";
import iitKgpInternImage from "../assets/iit kgp.jpg";
import analyticsImage from "../assets/aanlytics.jpg";
import cloudImage from "../assets/qauntum.png";
import peopleDetectionImage from "../assets/AI people Detection.png";
import crowdIntelligenceVideo from "../assets/Crowd Intelligence System.webm";
import dodgeAiVideo from "../assets/Dodge Proto.webm";


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
        duration: "December 2025 - Present", // Assuming current or recent
        image: iiscInternImage,
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
        image: iitHyderabadInternImage,
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
        image: iitKgpInternImage,
        description: [
            "Worked on distributed systems optimization using AI.",
            "Implmented custom scheduling algorithms.",
            "Reduced system latency by 25%."
        ]
    }
];

export const PROJECTS = [
    {
        title: "Vertical.ai",
        category: "GenAI Agents",
        description: "Building the next generation of Vertical AI Agents for specialized workflows.",
        techStack: ["GenAI", "React", "Python"],
        github: "https://github.com/Abhisingh18/Vertical.ai",
        demo: "#",
        impact: "Specialized AI solutions",
        image: verticalAiImage,
        video: verticalAiVideo
    },
    {
        title: "Smart Agriculture Monitoring",
        category: "IoT + AI",
        description: "IoT sensor network integrated with AI for crop disease detection.",
        techStack: ["Raspberry Pi", "TensorFlow Lite", "MQTT"],
        github: "https://github.com/Abhisingh18/AGRISMART",
        demo: "https://sih-2025-16aj.vercel.app/",
        impact: "Deployed in 5 farms",
        image: agricultureImage
    },
    {
        title: "Crowd Intelligence OS",
        category: "Computer Vision & OS",
        description: "AI-powered crowd intelligence OS for tracking pedestrians, estimating flow density, calculating dwell times, and analyzing spatial direction matrices in real-time. Designed for robust crowd density calculation in intense scenarios like the Shibuya Scramble Crossing.",
        techStack: ["YOLOv8", "FastAPI", "React", "Recharts"],
        github: "https://github.com/Abhisingh18/Crowd-Intelligence",
        demo: "https://crowd-intelligence-l58l.vercel.app/",
        impact: "Production-ready Crowd Intelligence OS",
        image: null,
        video: crowdIntelligenceVideo
    },
    {
        title: "Dodge AI ERP Copilot",
        category: "Enterprise AI & ERP",
        description: "AI-powered ERP analytics tool that traces Order-to-Cash (O2C) processes. It converts natural language queries into SQL, executes them on SAP data, and visualizes workflows with interactive Cytoscape graphs.",
        techStack: ["FastAPI", "React", "Cytoscape.js", "SQL"],
        github: "https://github.com/Abhisingh18/Dodge-AI-ERP-Copilot",
        demo: "https://dodge-ai-erp-copilot-xcju.vercel.app/",
        impact: "Visual O2C Analytics with AI Explanations",
        image: null,
        video: dodgeAiVideo
    },
    {
        title: "Hunter AI (Cold Outreach)",
        category: "Automation",
        description: "Automated outreach system using LLMs to personalize emails at scale.",
        techStack: ["OpenAI API", "Celery", "Redis"],
        github: "https://github.com/Abhisingh18/HunterAI",
        demo: "#",
        impact: "Increased response rate by 3x",
        image: hunterAiImage,
        video: hunterAiVideo
    },
    {
        title: "Railway Scheduling System (IIT KGP)",
        category: "Client Project",
        description: "AI-driven scheduling and resource optimization system developed for railway networks at IIT Kharagpur.",
        techStack: ["Python", "Optimization Algos", "Data Analytics"],
        github: "https://github.com/Abhisingh18/Railway-Project-IIT-KGP",
        demo: "https://railway-project-iit-kgp.onrender.com/",
        impact: "Optimized scheduling logic for large-scale networks",
        image: railwayImage
    },
    {
        title: "Mantis Basic (Cognitive Cartography)",
        category: "Cognitive Maps",
        description: "A basic version of Mantis for cognitive cartography and spatial reasoning.",
        techStack: ["Python", "AI", "Mapping"],
        github: "https://github.com/Abhisingh18/Mantis-Basic-Version-of-Cognitive-Cartography-",
        demo: "#",
        impact: "Spatial Reasoning Prototype",
        image: null,
        video: mantisVideo
    },
    {
        title: "Trust-First AI Copilot",
        category: "GenAI & RAG",
        description: "An AI OS focused on transparency. Features 'Disagree-with-Me' mode, fact verification, and decision support using Groq & Vector RAG.",
        techStack: ["Python", "Groq API", "FAISS", "React"],
        github: "https://github.com/Abhisingh18/Trust-first-AI-Copilot",
        demo: "#",
        impact: "Reduces hallucinations by 90%",
        image: trustFirstAiImage
    },
    {
        title: "AI-Powered RAG Disaster Analytics Platform",
        category: "AI & NLP",
        description: "A real-time Disaster Management System using Retrieval-Augmented Generation for NDMA.",
        techStack: ["React", "Python", "LangChain", "Pinecone"],
        github: "https://github.com/Abhisingh18/Rag-Model-For-DA",
        demo: "#",
        impact: "Used by NDMA for real-time analysis",
        image: analyticsImage
    },
    {
        title: "Advanced Cloud Workload Forecasting",
        category: "Time Series",
        description: "Transformer-based model (TFT, GRU + Attention) to predict cloud resource usage.",
        techStack: ["PyTorch", "Transformers", "AWS"],
        github: "#",
        demo: "#",
        impact: "95% accuracy in load prediction",
        image: cloudImage
    },
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

import sihImage from "../assets/sih winner.jpg";
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
    { title: "National Innovation Award", result: "Winner", image: innovationImage },
    { title: "BNY Shark Tank", result: "Winner", image: bnyImage },
    { title: "Hackverse 25", result: "4th Rank", image: hackverseImage },
    { title: "IIT-Level Finals", result: "Multiple" }
];
