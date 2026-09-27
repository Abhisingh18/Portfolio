/**
 * Long-form write-ups behind each project card.
 *
 * Everything here is drawn from the project's own repository, README or live
 * site. Where a project has no public engineering detail, the entry stays
 * short rather than inventing architecture.
 */

export type DetailSection = {
  heading: string;
  body?: string[];
  points?: string[];
};

export type ProjectDetail = {
  /** Opening paragraph. Longer and more specific than the card blurb. */
  lede: string;
  /** Left-hand spec sheet. */
  specs?: { label: string; value: string }[];
  sections: DetailSection[];
  results?: {
    caption?: string;
    head: string[];
    rows: string[][];
  };
  /** What it does not do. Stated plainly. */
  limits?: string[];
};

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "sutra-1.3b": {
    lede: "A 1.32-billion-parameter Mixture-of-Experts language model written from first principles in PyTorch — own tokenizer, own data pipeline, own training loop. No Hugging Face Trainer, no pretrained weight anywhere in the stack.",
    specs: [
      { label: "Total / active params", value: "1.32B / 0.28B (4.71× sparsity)" },
      { label: "Layers", value: "16 — layer 0 dense, 1–15 MoE" },
      { label: "d_model", value: "1024" },
      { label: "Attention", value: "Multi-head latent attention, 16 heads, kv_lora_rank 256" },
      { label: "Head split", value: "64 nope + 32 rope, v_head_dim 64" },
      { label: "Experts", value: "48 routed + 1 shared, top-4, width 512" },
      { label: "Routing", value: "Sigmoid scoring, bias-based load balancing" },
      { label: "Context", value: "4096" },
      { label: "Vocab", value: "48,000" },
      { label: "Hardware", value: "4× RTX 6000 Ada (48 GB), PCIe, no NVLink" },
      { label: "Training run", value: "18B tokens, ~11 days end to end" },
      { label: "Inference", value: "~10 tokens/sec on CPU" },
    ],
    sections: [
      {
        heading: "Why build it from zero",
        body: [
          "The point was not to beat a frontier model. It was to own every stage that produces one — tokenization, data mixture, pretraining, chat fine-tuning and preference alignment — and to find out what a single person with four GPUs can actually train.",
          "Nothing in the architecture is novel, and that is deliberate. The largest risk in a multi-week run is instability, and novelty buys risk without buying measurable quality at this scale.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "A decoder-only transformer with a DeepSeek-inspired Mixture-of-Experts block. Sixteen layers, of which the first is dense and the rest route each token to 4 of 48 experts plus one shared expert. Only 0.28B of the 1.32B parameters are active per token, which is what lets it run on a CPU at all.",
          "Attention is multi-head latent attention: keys and values are compressed into a 256-wide latent space, with rotary encoding applied to a decoupled 32-dimension slice of each head. A dense Llama-style variant — 1.16B parameters, 22 layers, grouped-query attention, SwiGLU — is implemented alongside it and selectable by config.",
          "MoE trades quality for speed. Against the dense build it is roughly 3× cheaper per token, which turns a seven-week run into four, at the cost of behaving like a smaller dense model.",
        ],
      },
      {
        heading: "Pipeline",
        points: [
          "Tokenizer — BPE trained from scratch, 48K vocab covering English and Devanagari",
          "Data prep — streamed and tokenized into uint16 shards, English, Hindi, code and math",
          "Pretrain — the stage that is 95% of the compute",
          "SFT — chat fine-tuning, the stage that makes it feel like an assistant",
          "DPO — direct preference alignment on top of the chat model",
        ],
      },
      {
        heading: "Three decisions that cannot be undone",
        body: [
          "Special tokens must exist before pretraining. The tokenizer reserves chat tokens, reasoning tokens, 32 spare slots and 4096 audio slots for a future speech front-end. Added later, their embeddings start from noise while everything else has seen the full corpus, and they never catch up. The whole reservation costs 0.7% of the model.",
          "Vocab size is fixed at 48K. Changing it means retokenizing the corpus and retraining from zero.",
          "The data mixture has to be decided before the first token is written. At 1B scale you cannot maximise English fluency, Hindi fluency and reasoning simultaneously — the split favours English, with Hindi and math/code real but secondary.",
        ],
      },
      {
        heading: "Surviving a seven-week run",
        body: [
          "A run that long will not complete uninterrupted, so the training loop is built around being killed.",
        ],
        points: [
          "Checkpoints every 2000 steps, written atomically so a crash mid-save cannot corrupt them",
          "Restart picks up the newest checkpoint automatically — same step, same optimizer state, same data order",
          "Batches are a deterministic function of (step, rank), so a resume replays exactly the data the crashed run would have seen",
          "A loss-spike guard rolls back to the last checkpoint if loss jumps 1.5× above its running average for three consecutive steps",
        ],
      },
      {
        heading: "Watching the router",
        body: [
          "The failure mode unique to MoE is router collapse: tokens pile onto a few experts and the rest never learn, so you pay for capacity you do not get. Load is logged every 200 steps against the uniform baseline, and the log flags collapse risk directly.",
          "Two things prevent it, both in place from the start. Layer 0 is dense, because routing on raw embeddings is near-random and collapses early. And load balancing is bias-based rather than an auxiliary loss.",
        ],
      },
    ],
    results: {
      caption:
        "Log-likelihood scoring, 500 examples per task, length-normalised accuracy.",
      head: ["Task", "Random", "Base", "SFT", "DPO"],
      rows: [
        ["HellaSwag", "25.0", "38.4", "39.8", "40.4"],
        ["ARC-easy", "25.0", "45.0", "44.8", "45.0"],
        ["PIQA", "50.0", "62.6", "65.4", "65.6"],
        ["WinoGrande", "50.0", "50.6", "49.0", "49.0"],
      ],
    },
    limits: [
      "WinoGrande sits at chance. The pronoun-resolution reasoning it measures never arrived — the sharpest available statement of what 0.28B active parameters do not buy.",
      "DPO did not generalise. Held-out preference accuracy came out at 47.5% against a 50% baseline; the 66% its training loop printed was measured on training batches. SFT and DPO perform about equally.",
      "It will not reliably remember facts, do multi-step reasoning or write real code. Those need 10–100× more parameters and compute. Pair it with retrieval for anything knowledge-dependent.",
    ],
  },

  "krishaan-agro": {
    lede: "An agri-commerce and advisory platform built for Krishaan Agro, which describes itself as India's trusted agri-growth partner and reports serving more than 12,000 farmer families across 45+ districts.",
    sections: [
      {
        heading: "What the platform covers",
        points: [
          "Product shop with cash-on-delivery and pan-India delivery",
          "Soil-testing lab results with crop-specific recommendations",
          "Contract farming with assured buy-back agreements",
          "Smart farming — hydroponics and soil-less cultivation systems",
          "Urban gardening — rooftop and balcony installations",
          "Training programmes for farmers and agripreneurs, plus student internships",
        ],
      },
      {
        heading: "Build",
        body: [
          "Built end to end at Pragyaan Labs — the storefront, the advisory flows and the infrastructure under them — and maintained rather than handed over at launch.",
        ],
      },
    ],
  },

  glofihub: {
    lede: "An AI-driven platform guiding students and professionals toward international education, skill development and global employment, with on-ground support in India and Russia.",
    sections: [
      {
        heading: "What the platform covers",
        points: [
          "University admissions guidance across 50+ countries, including MBBS, B.Tech and MBA tracks",
          "Industry-designed courses in full-stack development, data science and cybersecurity",
          "Job placement through direct connections with employers in tech, healthcare and business",
          "Institutional collaborations and franchise programmes for colleges and corporates",
        ],
      },
      {
        heading: "Build",
        body: [
          "Built end to end at Pragyaan Labs and live in production, covering the public site, the student journey from admission through placement, and the CRM and database behind it.",
        ],
      },
    ],
  },

  "snapfit-ai": {
    lede: "An AI virtual try-on app for garment stores — shoppers see how a piece looks on them before they buy.",
    sections: [
      {
        heading: "Build",
        body: [
          "Built in-house at Pragyaan Labs for Android and shipped to the Google Play Store.",
        ],
      },
    ],
  },

  "vertical-ai": {
    lede: "A document-centric AI research workspace in the shape of NotebookLM: search and import academic papers, then ask questions that are answered only from what you imported, with citations attached.",
    specs: [
      { label: "Frontend", value: "React + Vite, three-panel notebook layout" },
      { label: "Backend", value: "FastAPI, modular REST" },
      { label: "Discovery", value: "OpenAlex (free, no API key), Tavily for optional web search" },
      { label: "Retrieval", value: "FAISS over Hugging Face embeddings (SciBERT / E5, local)" },
      { label: "Reasoning", value: "Groq" },
      { label: "Graph", value: "Neo4j" },
    ],
    sections: [
      {
        heading: "The pipeline",
        body: [
          "A paper search hits OpenAlex and ranks by citation count. Selected papers are imported, split into chunks, embedded and written to a FAISS index. Questions retrieve against that index and only that index, so an answer can always name the passage it came from.",
        ],
      },
      {
        heading: "Many views over one knowledge base",
        body: [
          "The same imported sources drive several representations rather than one chat window — a mind map, flashcards, a slide-deck outline and data tables.",
          "The mind map loads lazily: nodes expand on click, and clicking a node sends its detailed explanation into the chat rather than opening a separate page.",
        ],
      },
      {
        heading: "Trust over chat",
        body: [
          "The design choice throughout is explainability over fluency. Answers are constrained to imported sources, citations are explicit, and the conversation persists as a notebook rather than resetting like a chatbot.",
        ],
      },
    ],
  },

  agrismart: {
    lede: "A smart agricultural monitoring system pairing IoT sensors with AI for sustainable farming — the build that won Smart India Hackathon 2025.",
    sections: [
      {
        heading: "What it monitors",
        points: [
          "Soil nitrogen, phosphorus and potassium (NPK) levels",
          "Soil pH and moisture",
          "Temperature and irrigation state",
        ],
      },
      {
        heading: "How it is used",
        body: [
          "Sensor readings feed a real-time dashboard covering soil conditions, temperature and irrigation, with predictive insights layered on top to improve yield and cut resource waste.",
          "Vision models for early crop-disease detection run at the edge on a Raspberry Pi, so a reading does not need connectivity to be useful.",
        ],
      },
    ],
  },

  prashikshak: {
    lede: "A disaster-management training platform for the national response ecosystem — a single place to track exercises happening across states, score them, and report across the organisations involved.",
    specs: [
      { label: "Frontend", value: "React + Vite" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Deployment", value: "Static build on Hugging Face Spaces" },
      { label: "Context", value: "Smart India Hackathon — NDMA problem statement" },
    ],
    sections: [
      {
        heading: "What it does",
        points: [
          "Live monitoring of training exercises across states as they happen",
          "Data-backed scores and feedback so an exercise produces something actionable",
          "Integrated reporting across NDMA, state authorities (SDMAs) and NGOs",
        ],
      },
      {
        heading: "Inside the app",
        body: [
          "The build covers the full administrative path, not just a dashboard: a form builder for assessments, form viewing and response collection, document upload, a pending-verification queue for onboarding organisations, and two-factor setup for the accounts that handle it.",
        ],
      },
    ],
  },

  "vidya-ai": {
    lede: "Type a topic, pick a grade and a language, and get a four-to-five minute animated lesson with synchronised narration — built so a student anywhere in India can learn in the language they actually think in.",
    specs: [
      { label: "Framework", value: "Next.js 14 App Router, React 18, TypeScript" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Auth", value: "NextAuth — Google OAuth plus guest sessions" },
      { label: "Database", value: "Prisma ORM, Postgres in production" },
      { label: "LLM", value: "OpenRouter" },
      { label: "Narration", value: "Web Speech API — no external TTS service" },
      { label: "Languages", value: "22 Indian languages" },
    ],
    sections: [
      {
        heading: "How a lesson is made",
        body: [
          "A topic goes to the LLM, which returns three things at once: a narration script, a scene description, and Manim source. The player then combines timed text-to-speech with an SVG scene renderer, so the animation is drawn live in the browser rather than downloaded as a video file.",
          "Every generated lesson ships its Manim source too, so anyone who wants a real rendered video can produce one locally.",
        ],
      },
      {
        heading: "What ships with it",
        points: [
          "A public library of 40+ handcrafted lessons across maths, physics, chemistry, biology, CS and history",
          "3Blue1Brown-style deep-learning topics — neural nets, backpropagation, Fourier transform, eigenvalues, transformers",
          "Accounts with watch history and daily learning streaks",
        ],
      },
      {
        heading: "One deployment, not two",
        body: [
          "There is no separate backend. With the App Router every API route ships as a serverless function inside the same deployment, so the app needs exactly two services: one host and one database. A split stack would only be necessary for long-running processes, WebSocket servers or background workers, none of which this app uses.",
          "The build step reconciles the database schema on every deploy, and fails safely rather than dropping data when a change would be destructive.",
        ],
      },
    ],
  },

  "crowd-intelligence": {
    lede: "A pedestrian tracking and crowd-density system built to hold up at Shibuya-Scramble density — it extracts trajectories, dwell times and spatial flow vectors from ordinary video.",
    specs: [
      { label: "Detection", value: "YOLOv8" },
      { label: "Tracking", value: "ByteTrack" },
      { label: "Video", value: "FFmpeg processing pipeline" },
      { label: "Backend", value: "FastAPI, Docker" },
      { label: "Frontend", value: "React, Tailwind CSS v4, Framer Motion" },
      { label: "Charts", value: "Recharts, updating in step with playback" },
    ],
    sections: [
      {
        heading: "What it measures",
        points: [
          "Unique pedestrians — held across frames through occlusion",
          "Dwell time — average seconds a person stays in frame",
          "Flow velocity and direction vectors — left→right, top→bottom",
          "Density over time — frame-by-frame crowd compression",
        ],
      },
      {
        heading: "Running it in the real world",
        body: [
          "The backend ships as a Docker image because the OpenCV and FFmpeg system dependencies are not something a buildpack resolves cleanly. The frontend deploys separately and talks to it over a configured API URL.",
          "Model size is a deployment decision rather than a fixed choice: the default is YOLOv8m, and a smaller variant is swapped in where memory is constrained — the difference between a service that runs and one that is killed mid-inference.",
        ],
      },
    ],
  },
};
