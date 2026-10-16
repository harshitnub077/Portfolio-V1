// Single source of truth for every piece of copy and every image path on the site.
// Swap photos by dropping files into /public/images with the same names.

export const site = {
  name: "Harshit Kudhial",
  firstName: "Harshit",
  initials: "HK",
  role: "AI/ML Engineer",
  tagline: "LLMs · RAG · Agentic AI · MLOps · Open Source",
  location: "Delhi, India",
  year: "2026",
  email: "harshitkudhial@gmail.com",
  heroImage: "/images/hero.svg",
  bio: "AI/ML engineer with 30 merged pull requests across CNCF Kubescape and Linux Foundation Zephyr RTOS, two AI/ML internships, and three shipped LLM products — 12,500+ lines of Python, LangGraph, Qdrant, pgvector, FastAPI and Docker.",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about", mark: "*" },
  { label: "Works", href: "#works", mark: "//" },
];

export type Project = {
  name: string;
  year: string;
  blurb: string;
  stack: string;
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Cognify",
    year: "2024",
    blurb: "12,500-LOC agentic content-intelligence platform with a Qdrant semantic cache and local Llama 3 fallback.",
    stack: "React · Node · Python · Qdrant · RAGAS",
    href: "https://github.com/harshitnub077/Cognify",
    image: "/images/works/cognify.svg",
  },
  {
    name: "NotForgotten",
    year: "2024",
    blurb: "Agentic RAG study tutor — +40% at-risk concept retrieval with forgetting-curve modelling and SM-2.",
    stack: "LangGraph · Weaviate · FastAPI",
    href: "https://github.com/harshitnub077/NotForgotten",
    image: "/images/works/notforgotten.svg",
  },
  {
    name: "BidForge",
    year: "2025",
    blurb: "AI proposal platform on pgvector with three-layer tenant isolation (RLS, JWT, PL/pgSQL).",
    stack: "FastAPI · Supabase · pgvector · Gemini",
    href: "https://bid-forge-one.vercel.app",
    image: "/images/works/bidforge.svg",
  },
  {
    name: "Recto",
    year: "2026",
    blurb: "Deterministic candidate intelligence — ranks 100,000+ candidates in under 3 minutes, offline, CPU-only.",
    stack: "Python · Docker · Streamlit",
    href: "https://github.com/harshitnub077/Recto",
    image: "/images/works/recto.svg",
  },
  {
    name: "KubeWarden",
    year: "2026",
    blurb: "Go OIDC/RBAC reverse proxy for Kubernetes using SubjectAccessReview and DRA-aware authorization.",
    stack: "Go · Kubernetes · React",
    href: "https://github.com/harshitnub077/KubeWarden",
    image: "/images/works/kubewarden.svg",
  },
  {
    name: "DRA-Lens",
    year: "2026",
    blurb: "Real-time Kubernetes DRA topology visualizer — resources, allocations and health as a live graph.",
    stack: "Go · React · Kubernetes",
    href: "https://github.com/harshitnub077/DRA-lens",
    image: "/images/works/dralens.svg",
  },
  {
    name: "AegisMCP",
    year: "2026",
    blurb: "Command center for Model Context Protocol servers — manage remote agents, connections and health.",
    stack: "TypeScript · MCP · Next.js",
    href: "https://agis-mcp-q6jy.vercel.app/",
    image: "/images/works/aegismcp.svg",
  },
  {
    name: "SiteIntel",
    year: "2026",
    blurb: "Offline-first AI inspection platform — on-device ML and voice-to-text for field defect reports.",
    stack: "JavaScript · On-device ML",
    href: "https://github.com/harshitnub077/SiteIntel",
    image: "/images/works/siteintel.svg",
  },
];

export const values = [
  { word: "Be Curious", mark: "*" },
  { word: "Be Precise", mark: "#" },
  { word: "Be Open", mark: "™" },
];

export const skills = {
  intro:
    "I build end-to-end AI systems — from retrieval and agent design to the APIs, containers and pipelines that keep them alive in production, with a contributor's respect for the codebases underneath.",
  groups: [
    {
      title: "AI / ML",
      items: ["LLMs & RAG", "Agentic AI · LangGraph", "Evaluation · RAGAS", "Hugging Face · Ollama", "scikit-learn · Pandas", "Deep Learning · NLP"],
    },
    {
      title: "Backend & MLOps",
      items: ["FastAPI · Node.js", "Qdrant · Weaviate · pgvector", "Docker · Kubernetes", "CI/CD · GitHub Actions", "Prometheus"],
    },
    {
      title: "Systems & OSS",
      items: ["Go · C · Python", "Zephyr RTOS", "Kubescape", "Embedded C · Verilog", "Networking"],
    },
  ],
};

export const experience = [
  {
    org: "FlyRank AI",
    role: "AI Engineer Intern",
    when: "Jul 2026 — Now",
    line: "5-stage ranking pipelines, Top-K benchmarked against baseline. Capstone accepted, 2/2 track certs.",
  },
  {
    org: "PM Accelerator",
    role: "AI/ML SWE Intern",
    when: "Jun 2026 — Now",
    line: "RAG workflows in a 4-discipline Scrum team. CI/CD, Docker and FastAPI model endpoints.",
  },
  {
    org: "Zephyr RTOS",
    role: "Linux Foundation · OSS",
    when: "Jul 2026 — Now",
    line: "10 merged PRs — POSIX & kernel concurrency, ESP32 I2S lockups, Bluetooth hard-faults.",
  },
  {
    org: "Kubescape",
    role: "CNCF · OSS",
    when: "Sep 2026 — Now",
    line: "20 merged PRs — SSRF hardening across 6 RFCs, registry OAuth, SARIF/JUnit/PDF reports.",
  },
];

export const achievements = [
  "IIT Roorkee Cognizance — Finalist, Top 8",
  "GSSoC 2024 & 2026",
  "Hacktoberfest 2024",
  "LeetCode 250+",
  "Anthropic — AI Fluency",
  "BCG — Strategy Consulting",
];

export const education = {
  school: "Newton School of Technology, Rishihood University",
  degree: "B.Tech, Computer Science & Engineering",
  when: "2024 — 2028",
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harshit-kudhial" },
  { label: "GitHub", href: "https://github.com/harshitnub077" },
  { label: "LeetCode", href: "https://leetcode.com/u/WlKY4dkoJU/" },
  { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/harshitttt077" },
  { label: "Zephyr PRs", href: "https://github.com/zephyrproject-rtos/zephyr/pulls?q=is%3Apr+author%3Aharshitnub077" },
  { label: "Kubescape PRs", href: "https://github.com/pulls?q=is%3Apr+author%3Aharshitnub077+org%3Akubescape" },
  { label: "Email", href: "mailto:harshitkudhial@gmail.com" },
];

export const coords = { lat: "28.61° N", lon: "77.20° E", tz: "Asia/Kolkata" };

/** Bodies orbiting the planet in the "Tech universe" section — inner to outer ring. */
export const orbits = [
  ["Python", "LLMs", "RAG", "LangGraph", "FastAPI"],
  ["Qdrant", "pgvector", "Weaviate", "Docker", "Kubernetes", "Go", "Ollama"],
  ["Hugging Face", "RAGAS", "scikit-learn", "Next.js", "Prometheus", "Zephyr RTOS", "Kubescape", "CI/CD", "PostgreSQL"],
];
