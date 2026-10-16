// Auto-generated portfolio data for Harshit Kudhial

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc: string;
  video: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  starsText?: string;
  backgroundImage?: string;
  hasPin?: boolean;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Experience {
  title: string;
  role: string;
  dates: string;
  location: string;
  src: string;
  imageFit?: 'contain' | 'cover';
  imageZoom?: number;
  description: string;
  tech: string[];
  metrics?: Metric[];
  screenshot?: string;
}

export const siteProfile = {
  name: "Harshit Kudhial",
  age: "B.Tech CSE (AI/ML) @ Newton School of Technology (2024–2028)",
  avatar: "/avatar.png",
  tagline: "Engineer / Builder. I love building, breaking, and shipping things.",
  bullets: [
    "AI architectures, open source, and high-performance systems excite me.",
    "I believe actions speak louder than words, so I prove it in git commits and merged PRs.",
    "Currently building Cognify, NotForgotten, and autonomous AI agents."
  ],
  calLink: "mailto:harshitkudhial@gmail.com",
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/harshitnub077",
      icon: "github"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/harshit-kudhial",
      icon: "linkedin"
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/WlKY4dkoJU/",
      icon: "leetcode"
    },
    {
      name: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/profile/harshitttt077",
      icon: "geeksforgeeks"
    },
    {
      name: "Twitter",
      href: "https://x.com/harshitnub077",
      icon: "twitter"
    },
    {
      name: "Email",
      href: "mailto:harshitkudhial@gmail.com",
      icon: "mail"
    }
  ]
};

export const projectsData: Project[] = [
  {
    slug: "cognify",
    title: "Cognify",
    imageTitle: "Agentic RAG Microservice",
    src: "/images/works/cognify.png",
    lightModeSrc: "/images/works/cognify.png",
    video: "",
    description: "Distributed agentic RAG microservice processing 50MB payloads with Qdrant semantic caching, local Llama 3 fallback via Ollama, and RAGAS evaluation.",
    tech: ["react", "ts", "python", "node", "rag"],
    github: "https://github.com/harshitnub077/Cognify",
    live: "",
    starsText: "12.5k LOC",
    backgroundImage: "/project-hover-blueprint.webp",
    hasPin: true
  },
  {
    slug: "notforgotten",
    title: "NotForgotten",
    imageTitle: "Agentic RAG Study Tutor",
    src: "/images/works/notforgotten.svg",
    lightModeSrc: "/images/works/notforgotten.svg",
    video: "",
    description: "Cognitive memory-augmented RAG tutor pairing LangGraph cyclical agents with Ebbinghaus decay curves, SM-2 repetition, and FastAPI.",
    tech: ["python", "langgraph", "fastapi", "rag"],
    github: "https://github.com/harshitnub077/NotForgotten",
    live: "",
    starsText: "+40% Gain",
    backgroundImage: "/project-hover-scribble3d.webp",
    hasPin: true
  },
  {
    slug: "bidforge",
    title: "BidForge",
    imageTitle: "AI Proposal Platform",
    src: "/images/works/bidforge.png",
    lightModeSrc: "/images/works/bidforge.png",
    video: "",
    description: "Enterprise AI proposal platform with 3-layer tenant isolation (RLS, JWT, triggers) and pgvector semantic retrieval.",
    tech: ["fastapi", "python", "gemini", "rag"],
    github: "https://github.com/harshitnub077/BidForge",
    live: "",
    starsText: "3-Layer Sec",
    backgroundImage: "/project-hover-vengenceui.webp",
    hasPin: false
  },
  {
    slug: "zephyr-kubescape",
    title: "Zephyr & Kubescape",
    imageTitle: "Kernel Concurrency & Cloud Security",
    src: "/images/works/kubewarden.svg",
    lightModeSrc: "/images/works/kubewarden.svg",
    video: "",
    description: "30 merged PRs across Linux Foundation Zephyr RTOS and CNCF Kubescape covering kernel concurrency, ESP32 I2S recovery, and SSRF hardening.",
    tech: ["c", "github", "python", "node"],
    github: "https://github.com/harshitnub077",
    live: "",
    starsText: "30 PRs",
    backgroundImage: "/project-hover-inquiro.webp",
    hasPin: false
  }
];

export const experiencesData: Experience[] = [
  {
    title: "FlyRank AI",
    role: "AI Engineer Intern | ML Track: Search Intelligence & Ranking Capstone",
    dates: "Jul 2026 – Present",
    location: "Illinois, USA (Remote)",
    src: "/Experience-image/flyrank-logo.png",
    imageFit: "cover",
    imageZoom: 1,
    description: `Built 5-stage Python ML pipelines (scikit-learn, Pandas): preprocessing, feature engineering, training, tuning, evaluation for a ranking capstone
Benchmarked ranking models against a baseline score using Top-K analysis on the 5-stage pipeline, gating each experiment iteration on beating baseline before adoption
Completed 10 assignments across 2 tracks; capstone accepted, qualified for 2 of 2 track certificates`,
    tech: ["Python", "scikit-learn", "Pandas", "ML Pipelines", "Search Ranking", "Top-K Analysis", "Model Tuning"],
    metrics: [
      { label: "Pipeline Stages", value: "5" },
      { label: "Assignments", value: "10" },
      { label: "Track Certs", value: "2 of 2" },
      { label: "Focus", value: "Ranking ML" }
    ]
  },
  {
    title: "Product Manager Accelerator",
    role: "AI/ML Software Engineering Intern | 11-Week Project-Based Program",
    dates: "Jun 2026 – Present",
    location: "Remote (Boston, MA, USA)",
    src: "/Experience-image/pm-accelerator-logo.png",
    imageFit: "contain",
    imageZoom: 1.15,
    description: `Collaborated in a 4-discipline Agile Scrum team (engineers, designers, data scientists, product managers) and designed RAG workflows combining 4 components (LLMs, prompt engineering, embeddings, vector databases) over 11 weeks
    Set up 2-stage CI/CD pipelines (build, test) for the team’s 11-week project
    Containerized services with Docker for a 4-discipline team and deployed ML models as FastAPI REST endpoints (MLOps)`,
    tech: ["FastAPI", "Docker", "RAG", "LLMs", "Vector Databases", "CI/CD", "MLOps", "Agile Scrum"],
    metrics: [
      { label: "Disciplines", value: "4" },
      { label: "Duration", value: "11 Weeks" },
      { label: "CI/CD", value: "2 Stages" },
      { label: "Deployment", value: "FastAPI REST" }
    ]
  },
  {
    title: "Zephyr RTOS – Linux Foundation",
    role: "Open Source Contributor | POSIX & Kernel Concurrency",
    dates: "Jul 2026 – Present",
    location: "Remote",
    src: "/Experience-image/zephyr-logo.png",
    imageFit: "contain",
    imageZoom: 1.05,
    description: `Fixed POSIX concurrency bugs and leaks: shm file-descriptor leak and list race via mutex serialization (#117418); spinlock trylock errno compliance with handle invalidation (#120414)
    Resolved a full-duplex lockup in the ESP32 I2S driver via bidirectional error propagation and PREPARE recovery on TX/RX faults (#117645)
    Eliminated hard-fault crashes in the Bluetooth Media Proxy with NULL and callback validation across 30+ functions (#117078)
    Fixed 2 logging kernel crashes: NULL thread dereference in ISR syslog formatting (#116926); divide-by-zero in timestamp conversion (#116917)`,
    tech: ["C", "Zephyr RTOS", "POSIX", "Kernel Concurrency", "ESP32", "Bluetooth", "Embedded C"],
    metrics: [
      { label: "Domain", value: "Kernel Concurrency" },
      { label: "Functions Patched", value: "30+" },
      { label: "Hardware", value: "ESP32 & POSIX" },
      { label: "Foundation", value: "Linux Foundation" }
    ]
  },
  {
    title: "Kubescape – CNCF",
    role: "Open Source Contributor | Go, Kubernetes Security",
    dates: "Sep 2026 – Present",
    location: "Remote",
    src: "/Experience-image/cncf-kubescape.svg",
    imageFit: "contain",
    imageZoom: 1.05,
    description: `Hardened kubevuln SSRF protection, blocking reserved ranges from 6 RFCs, incl. 240.0.0.0/4 (about 268M IPs)
    Fixed kubevuln registry auth: exchanged IdentityTokens via OAuth instead of dropping them; stopped futile MANIFEST_UNKNOWN retries
    Fixed Kubescape diff to extract failed-path evidence from 2 engines (Rego, CEL), exposing masked regressions
    Improved report accuracy across output formats: CSV, JUnit, SARIF, PDF, Prometheus, ClusterPolicyReport, and v2-to-v1 counters`,
    tech: ["Go", "Kubernetes", "SSRF Hardening", "Rego / OPA", "CEL", "SARIF", "Prometheus", "CNCF"],
    metrics: [
      { label: "IPs Guarded", value: "268M+" },
      { label: "Policy Engines", value: "Rego & CEL" },
      { label: "Security", value: "SSRF Hardening" },
      { label: "Ecosystem", value: "CNCF" }
    ]
  },
  {
    title: "Newton School of Technology, Rishihood University",
    role: "B.Tech in Computer Science & Engineering",
    dates: "2024 – 2028",
    location: "Sonipat, Haryana",
    src: "/Experience-image/nst-logo.png",
    imageFit: "contain",
    imageZoom: 1.08,
    description: `Pursuing Bachelor of Technology in Computer Science and Engineering
Coursework: DSA, Operating Systems, DBMS, Computer Networks, Advanced ML, Deep Learning, Computer Architecture
Hackathons & Coding: IIT Roorkee Cognizance Hackathon Finalist (Top 8 national), LeetCode 250+ solved, GSSoC 2024 & 2026, Hacktoberfest 2024
Certifications: AI Fluency: Framework & Foundations (Anthropic, Jun 2026); Introduction to Strategy Consulting (BCG, Oct 2024)`,
    tech: ["DSA", "Operating Systems", "Advanced ML", "Deep Learning", "DBMS", "Computer Networks"],
    metrics: [
      { label: "Hackathon", value: "Top 8 National" },
      { label: "LeetCode", value: "250+" },
      { label: "GSSoC", value: "2024 & 2026" },
      { label: "Degree", value: "B.Tech CSE" }
    ]
  }
];

export const skillsData = [
  "Python", "Go", "C", "JavaScript", "TypeScript", "SQL", "LLMs", "RAG",
  "Agentic AI", "LangGraph", "LangChain", "Hugging Face", "RAGAS", "Ollama",
  "NLP", "Deep Learning", "scikit-learn", "Pandas", "Qdrant", "Weaviate",
  "pgvector", "PostgreSQL", "FastAPI", "Node.js", "React", "Next.js",
  "Docker", "Kubernetes Security", "Prometheus", "Git", "GitHub Actions",
  "CI/CD", "MLOps", "Zephyr RTOS", "Embedded C", "Linux"
];

export const fallbackGithubContributions = {
  "totalContributions": 1429,
  "months": [
    {
      "name": "Oct"
    },
    {
      "name": "Nov"
    },
    {
      "name": "Dec"
    },
    {
      "name": "Jan"
    },
    {
      "name": "Feb"
    },
    {
      "name": "Mar"
    },
    {
      "name": "Apr"
    },
    {
      "name": "May"
    },
    {
      "name": "Jun"
    },
    {
      "name": "Jul"
    },
    {
      "name": "Aug"
    },
    {
      "name": "Sep"
    }
  ],
  "weeks": [
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-10-19"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-20"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-21"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-22"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-23"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-24"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-25"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-10-26"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-27"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-28"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-29"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-30"
        },
        {
          "contributionCount": 0,
          "date": "2025-10-31"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-01"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-11-02"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-03"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-04"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-05"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-06"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-07"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-08"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-11-09"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-10"
        },
        {
          "contributionCount": 1,
          "date": "2025-11-11"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-12"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-13"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-14"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-15"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-11-16"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-17"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-18"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-19"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-20"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-21"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-22"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-11-23"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-24"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-25"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-26"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-27"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-28"
        },
        {
          "contributionCount": 0,
          "date": "2025-11-29"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-11-30"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-01"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-02"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-03"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-04"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-05"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-06"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-12-07"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-08"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-09"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-10"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-11"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-12"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-13"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-12-14"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-15"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-16"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-17"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-18"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-19"
        },
        {
          "contributionCount": 2,
          "date": "2025-12-20"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-12-21"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-22"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-23"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-24"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-25"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-26"
        },
        {
          "contributionCount": 26,
          "date": "2025-12-27"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2025-12-28"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-29"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-30"
        },
        {
          "contributionCount": 0,
          "date": "2025-12-31"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-01"
        },
        {
          "contributionCount": 1,
          "date": "2026-01-02"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-03"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 2,
          "date": "2026-01-04"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-05"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-06"
        },
        {
          "contributionCount": 3,
          "date": "2026-01-07"
        },
        {
          "contributionCount": 1,
          "date": "2026-01-08"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-09"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-10"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-01-11"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-12"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-13"
        },
        {
          "contributionCount": 1,
          "date": "2026-01-14"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-15"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-16"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-17"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-01-18"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-19"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-20"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-21"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-22"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-23"
        },
        {
          "contributionCount": 10,
          "date": "2026-01-24"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-01-25"
        },
        {
          "contributionCount": 23,
          "date": "2026-01-26"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-27"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-28"
        },
        {
          "contributionCount": 1,
          "date": "2026-01-29"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-30"
        },
        {
          "contributionCount": 0,
          "date": "2026-01-31"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-02-01"
        },
        {
          "contributionCount": 1,
          "date": "2026-02-02"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-03"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-04"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-05"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-06"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-07"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-02-08"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-09"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-10"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-11"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-12"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-13"
        },
        {
          "contributionCount": 1,
          "date": "2026-02-14"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 6,
          "date": "2026-02-15"
        },
        {
          "contributionCount": 12,
          "date": "2026-02-16"
        },
        {
          "contributionCount": 15,
          "date": "2026-02-17"
        },
        {
          "contributionCount": 1,
          "date": "2026-02-18"
        },
        {
          "contributionCount": 3,
          "date": "2026-02-19"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-20"
        },
        {
          "contributionCount": 2,
          "date": "2026-02-21"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 2,
          "date": "2026-02-22"
        },
        {
          "contributionCount": 5,
          "date": "2026-02-23"
        },
        {
          "contributionCount": 11,
          "date": "2026-02-24"
        },
        {
          "contributionCount": 2,
          "date": "2026-02-25"
        },
        {
          "contributionCount": 2,
          "date": "2026-02-26"
        },
        {
          "contributionCount": 2,
          "date": "2026-02-27"
        },
        {
          "contributionCount": 0,
          "date": "2026-02-28"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 4,
          "date": "2026-03-01"
        },
        {
          "contributionCount": 1,
          "date": "2026-03-02"
        },
        {
          "contributionCount": 2,
          "date": "2026-03-03"
        },
        {
          "contributionCount": 4,
          "date": "2026-03-04"
        },
        {
          "contributionCount": 0,
          "date": "2026-03-05"
        },
        {
          "contributionCount": 2,
          "date": "2026-03-06"
        },
        {
          "contributionCount": 0,
          "date": "2026-03-07"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-03-08"
        },
        {
          "contributionCount": 2,
          "date": "2026-03-09"
        },
        {
          "contributionCount": 0,
          "date": "2026-03-10"
        },
        {
          "contributionCount": 0,
          "date": "2026-03-11"
        },
        {
          "contributionCount": 1,
          "date": "2026-03-12"
        },
        {
          "contributionCount": 1,
          "date": "2026-03-13"
        },
        {
          "contributionCount": 1,
          "date": "2026-03-14"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 25,
          "date": "2026-03-15"
        },
        {
          "contributionCount": 1,
          "date": "2026-03-16"
        },
        {
          "contributionCount": 0,
          "date": "2026-03-17"
        },
        {
          "contributionCount": 4,
          "date": "2026-03-18"
        },
        {
          "contributionCount": 6,
          "date": "2026-03-19"
        },
        {
          "contributionCount": 2,
          "date": "2026-03-20"
        },
        {
          "contributionCount": 1,
          "date": "2026-03-21"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-03-22"
        },
        {
          "contributionCount": 1,
          "date": "2026-03-23"
        },
        {
          "contributionCount": 0,
          "date": "2026-03-24"
        },
        {
          "contributionCount": 2,
          "date": "2026-03-25"
        },
        {
          "contributionCount": 1,
          "date": "2026-03-26"
        },
        {
          "contributionCount": 4,
          "date": "2026-03-27"
        },
        {
          "contributionCount": 13,
          "date": "2026-03-28"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-03-29"
        },
        {
          "contributionCount": 1,
          "date": "2026-03-30"
        },
        {
          "contributionCount": 2,
          "date": "2026-03-31"
        },
        {
          "contributionCount": 6,
          "date": "2026-04-01"
        },
        {
          "contributionCount": 1,
          "date": "2026-04-02"
        },
        {
          "contributionCount": 1,
          "date": "2026-04-03"
        },
        {
          "contributionCount": 17,
          "date": "2026-04-04"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 2,
          "date": "2026-04-05"
        },
        {
          "contributionCount": 2,
          "date": "2026-04-06"
        },
        {
          "contributionCount": 16,
          "date": "2026-04-07"
        },
        {
          "contributionCount": 10,
          "date": "2026-04-08"
        },
        {
          "contributionCount": 13,
          "date": "2026-04-09"
        },
        {
          "contributionCount": 14,
          "date": "2026-04-10"
        },
        {
          "contributionCount": 12,
          "date": "2026-04-11"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 16,
          "date": "2026-04-12"
        },
        {
          "contributionCount": 7,
          "date": "2026-04-13"
        },
        {
          "contributionCount": 4,
          "date": "2026-04-14"
        },
        {
          "contributionCount": 5,
          "date": "2026-04-15"
        },
        {
          "contributionCount": 3,
          "date": "2026-04-16"
        },
        {
          "contributionCount": 16,
          "date": "2026-04-17"
        },
        {
          "contributionCount": 10,
          "date": "2026-04-18"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 16,
          "date": "2026-04-19"
        },
        {
          "contributionCount": 3,
          "date": "2026-04-20"
        },
        {
          "contributionCount": 8,
          "date": "2026-04-21"
        },
        {
          "contributionCount": 2,
          "date": "2026-04-22"
        },
        {
          "contributionCount": 3,
          "date": "2026-04-23"
        },
        {
          "contributionCount": 2,
          "date": "2026-04-24"
        },
        {
          "contributionCount": 1,
          "date": "2026-04-25"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 3,
          "date": "2026-04-26"
        },
        {
          "contributionCount": 5,
          "date": "2026-04-27"
        },
        {
          "contributionCount": 2,
          "date": "2026-04-28"
        },
        {
          "contributionCount": 4,
          "date": "2026-04-29"
        },
        {
          "contributionCount": 6,
          "date": "2026-04-30"
        },
        {
          "contributionCount": 0,
          "date": "2026-05-01"
        },
        {
          "contributionCount": 2,
          "date": "2026-05-02"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 1,
          "date": "2026-05-03"
        },
        {
          "contributionCount": 1,
          "date": "2026-05-04"
        },
        {
          "contributionCount": 2,
          "date": "2026-05-05"
        },
        {
          "contributionCount": 4,
          "date": "2026-05-06"
        },
        {
          "contributionCount": 1,
          "date": "2026-05-07"
        },
        {
          "contributionCount": 1,
          "date": "2026-05-08"
        },
        {
          "contributionCount": 8,
          "date": "2026-05-09"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 9,
          "date": "2026-05-10"
        },
        {
          "contributionCount": 9,
          "date": "2026-05-11"
        },
        {
          "contributionCount": 9,
          "date": "2026-05-12"
        },
        {
          "contributionCount": 7,
          "date": "2026-05-13"
        },
        {
          "contributionCount": 8,
          "date": "2026-05-14"
        },
        {
          "contributionCount": 7,
          "date": "2026-05-15"
        },
        {
          "contributionCount": 8,
          "date": "2026-05-16"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 12,
          "date": "2026-05-17"
        },
        {
          "contributionCount": 3,
          "date": "2026-05-18"
        },
        {
          "contributionCount": 6,
          "date": "2026-05-19"
        },
        {
          "contributionCount": 6,
          "date": "2026-05-20"
        },
        {
          "contributionCount": 4,
          "date": "2026-05-21"
        },
        {
          "contributionCount": 6,
          "date": "2026-05-22"
        },
        {
          "contributionCount": 6,
          "date": "2026-05-23"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 5,
          "date": "2026-05-24"
        },
        {
          "contributionCount": 15,
          "date": "2026-05-25"
        },
        {
          "contributionCount": 14,
          "date": "2026-05-26"
        },
        {
          "contributionCount": 12,
          "date": "2026-05-27"
        },
        {
          "contributionCount": 11,
          "date": "2026-05-28"
        },
        {
          "contributionCount": 14,
          "date": "2026-05-29"
        },
        {
          "contributionCount": 12,
          "date": "2026-05-30"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 17,
          "date": "2026-05-31"
        },
        {
          "contributionCount": 33,
          "date": "2026-06-01"
        },
        {
          "contributionCount": 17,
          "date": "2026-06-02"
        },
        {
          "contributionCount": 16,
          "date": "2026-06-03"
        },
        {
          "contributionCount": 2,
          "date": "2026-06-04"
        },
        {
          "contributionCount": 1,
          "date": "2026-06-05"
        },
        {
          "contributionCount": 17,
          "date": "2026-06-06"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 4,
          "date": "2026-06-07"
        },
        {
          "contributionCount": 2,
          "date": "2026-06-08"
        },
        {
          "contributionCount": 1,
          "date": "2026-06-09"
        },
        {
          "contributionCount": 6,
          "date": "2026-06-10"
        },
        {
          "contributionCount": 3,
          "date": "2026-06-11"
        },
        {
          "contributionCount": 17,
          "date": "2026-06-12"
        },
        {
          "contributionCount": 45,
          "date": "2026-06-13"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 3,
          "date": "2026-06-14"
        },
        {
          "contributionCount": 3,
          "date": "2026-06-15"
        },
        {
          "contributionCount": 3,
          "date": "2026-06-16"
        },
        {
          "contributionCount": 3,
          "date": "2026-06-17"
        },
        {
          "contributionCount": 5,
          "date": "2026-06-18"
        },
        {
          "contributionCount": 6,
          "date": "2026-06-19"
        },
        {
          "contributionCount": 2,
          "date": "2026-06-20"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 1,
          "date": "2026-06-21"
        },
        {
          "contributionCount": 1,
          "date": "2026-06-22"
        },
        {
          "contributionCount": 1,
          "date": "2026-06-23"
        },
        {
          "contributionCount": 0,
          "date": "2026-06-24"
        },
        {
          "contributionCount": 1,
          "date": "2026-06-25"
        },
        {
          "contributionCount": 1,
          "date": "2026-06-26"
        },
        {
          "contributionCount": 0,
          "date": "2026-06-27"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 4,
          "date": "2026-06-28"
        },
        {
          "contributionCount": 10,
          "date": "2026-06-29"
        },
        {
          "contributionCount": 2,
          "date": "2026-06-30"
        },
        {
          "contributionCount": 0,
          "date": "2026-07-01"
        },
        {
          "contributionCount": 0,
          "date": "2026-07-02"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-03"
        },
        {
          "contributionCount": 0,
          "date": "2026-07-04"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-07-05"
        },
        {
          "contributionCount": 0,
          "date": "2026-07-06"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-07"
        },
        {
          "contributionCount": 0,
          "date": "2026-07-08"
        },
        {
          "contributionCount": 0,
          "date": "2026-07-09"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-10"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-11"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 1,
          "date": "2026-07-12"
        },
        {
          "contributionCount": 0,
          "date": "2026-07-13"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-14"
        },
        {
          "contributionCount": 27,
          "date": "2026-07-15"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-16"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-17"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-18"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 2,
          "date": "2026-07-19"
        },
        {
          "contributionCount": 3,
          "date": "2026-07-20"
        },
        {
          "contributionCount": 4,
          "date": "2026-07-21"
        },
        {
          "contributionCount": 3,
          "date": "2026-07-22"
        },
        {
          "contributionCount": 2,
          "date": "2026-07-23"
        },
        {
          "contributionCount": 2,
          "date": "2026-07-24"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-25"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 2,
          "date": "2026-07-26"
        },
        {
          "contributionCount": 2,
          "date": "2026-07-27"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-28"
        },
        {
          "contributionCount": 6,
          "date": "2026-07-29"
        },
        {
          "contributionCount": 1,
          "date": "2026-07-30"
        },
        {
          "contributionCount": 3,
          "date": "2026-07-31"
        },
        {
          "contributionCount": 1,
          "date": "2026-08-01"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 1,
          "date": "2026-08-02"
        },
        {
          "contributionCount": 3,
          "date": "2026-08-03"
        },
        {
          "contributionCount": 9,
          "date": "2026-08-04"
        },
        {
          "contributionCount": 13,
          "date": "2026-08-05"
        },
        {
          "contributionCount": 5,
          "date": "2026-08-06"
        },
        {
          "contributionCount": 3,
          "date": "2026-08-07"
        },
        {
          "contributionCount": 5,
          "date": "2026-08-08"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 6,
          "date": "2026-08-09"
        },
        {
          "contributionCount": 4,
          "date": "2026-08-10"
        },
        {
          "contributionCount": 7,
          "date": "2026-08-11"
        },
        {
          "contributionCount": 2,
          "date": "2026-08-12"
        },
        {
          "contributionCount": 1,
          "date": "2026-08-13"
        },
        {
          "contributionCount": 1,
          "date": "2026-08-14"
        },
        {
          "contributionCount": 1,
          "date": "2026-08-15"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 1,
          "date": "2026-08-16"
        },
        {
          "contributionCount": 1,
          "date": "2026-08-17"
        },
        {
          "contributionCount": 4,
          "date": "2026-08-18"
        },
        {
          "contributionCount": 23,
          "date": "2026-08-19"
        },
        {
          "contributionCount": 5,
          "date": "2026-08-20"
        },
        {
          "contributionCount": 0,
          "date": "2026-08-21"
        },
        {
          "contributionCount": 2,
          "date": "2026-08-22"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 1,
          "date": "2026-08-23"
        },
        {
          "contributionCount": 5,
          "date": "2026-08-24"
        },
        {
          "contributionCount": 0,
          "date": "2026-08-25"
        },
        {
          "contributionCount": 12,
          "date": "2026-08-26"
        },
        {
          "contributionCount": 10,
          "date": "2026-08-27"
        },
        {
          "contributionCount": 7,
          "date": "2026-08-28"
        },
        {
          "contributionCount": 7,
          "date": "2026-08-29"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-08-30"
        },
        {
          "contributionCount": 7,
          "date": "2026-08-31"
        },
        {
          "contributionCount": 0,
          "date": "2026-09-01"
        },
        {
          "contributionCount": 0,
          "date": "2026-09-02"
        },
        {
          "contributionCount": 0,
          "date": "2026-09-03"
        },
        {
          "contributionCount": 0,
          "date": "2026-09-04"
        },
        {
          "contributionCount": 0,
          "date": "2026-09-05"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 0,
          "date": "2026-09-06"
        },
        {
          "contributionCount": 0,
          "date": "2026-09-07"
        },
        {
          "contributionCount": 10,
          "date": "2026-09-08"
        },
        {
          "contributionCount": 12,
          "date": "2026-09-09"
        },
        {
          "contributionCount": 14,
          "date": "2026-09-10"
        },
        {
          "contributionCount": 11,
          "date": "2026-09-11"
        },
        {
          "contributionCount": 23,
          "date": "2026-09-12"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 8,
          "date": "2026-09-13"
        },
        {
          "contributionCount": 12,
          "date": "2026-09-14"
        },
        {
          "contributionCount": 15,
          "date": "2026-09-15"
        },
        {
          "contributionCount": 10,
          "date": "2026-09-16"
        },
        {
          "contributionCount": 12,
          "date": "2026-09-17"
        },
        {
          "contributionCount": 14,
          "date": "2026-09-18"
        },
        {
          "contributionCount": 9,
          "date": "2026-09-19"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 13,
          "date": "2026-09-20"
        },
        {
          "contributionCount": 19,
          "date": "2026-09-21"
        },
        {
          "contributionCount": 26,
          "date": "2026-09-22"
        },
        {
          "contributionCount": 5,
          "date": "2026-09-23"
        },
        {
          "contributionCount": 9,
          "date": "2026-09-24"
        },
        {
          "contributionCount": 12,
          "date": "2026-09-25"
        },
        {
          "contributionCount": 9,
          "date": "2026-09-26"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 6,
          "date": "2026-09-27"
        },
        {
          "contributionCount": 11,
          "date": "2026-09-28"
        },
        {
          "contributionCount": 2,
          "date": "2026-09-29"
        },
        {
          "contributionCount": 18,
          "date": "2026-09-30"
        },
        {
          "contributionCount": 16,
          "date": "2026-10-01"
        },
        {
          "contributionCount": 17,
          "date": "2026-10-02"
        },
        {
          "contributionCount": 9,
          "date": "2026-10-03"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 5,
          "date": "2026-10-04"
        },
        {
          "contributionCount": 8,
          "date": "2026-10-05"
        },
        {
          "contributionCount": 0,
          "date": "2026-10-06"
        },
        {
          "contributionCount": 1,
          "date": "2026-10-07"
        },
        {
          "contributionCount": 5,
          "date": "2026-10-08"
        },
        {
          "contributionCount": 3,
          "date": "2026-10-09"
        },
        {
          "contributionCount": 3,
          "date": "2026-10-10"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 2,
          "date": "2026-10-11"
        },
        {
          "contributionCount": 0,
          "date": "2026-10-12"
        },
        {
          "contributionCount": 0,
          "date": "2026-10-13"
        },
        {
          "contributionCount": 0,
          "date": "2026-10-14"
        },
        {
          "contributionCount": 0,
          "date": "2026-10-15"
        },
        {
          "contributionCount": 0,
          "date": "2026-10-16"
        },
        {
          "contributionCount": 6,
          "date": "2026-10-17"
        }
      ]
    },
    {
      "contributionDays": [
        {
          "contributionCount": 2,
          "date": "2026-10-18"
        },
        {
          "contributionCount": 0,
          "date": "2026-10-19"
        }
      ]
    }
  ]
};

export const fallbackGithubPRs = {
  "merged": [
    {
      "id": "PR_kwDOG_sA9M8AAAABHE1mEA",
      "title": "feat(registryauth): add Azure Container Registry (ACR) ambient auth provider",
      "url": "https://github.com/kubescape/kubevuln/pull/1163",
      "repository": {
        "nameWithOwner": "kubescape/kubevuln"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-07T08:07:49Z",
      "mergedAt": "2026-10-08T07:43:10Z",
      "closedAt": "2026-10-08T07:43:10Z"
    },
    {
      "id": "PR_kwDOH8_SWs8AAAABGbMtfw",
      "title": "fix(node-agent): add allowPrivilegeEscalation: false and runAsGroup to sbom-scanner sidecar",
      "url": "https://github.com/kubescape/helm-charts/pull/956",
      "repository": {
        "nameWithOwner": "kubescape/helm-charts"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-03T11:16:40Z",
      "mergedAt": "2026-10-05T07:42:43Z",
      "closedAt": "2026-10-05T07:42:43Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABGQ_9mw",
      "title": "fix(prometheus): omit complianceScore metric when score is unset (#4017)",
      "url": "https://github.com/kubescape/kubescape/pull/4018",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-02T10:35:58Z",
      "mergedAt": "2026-10-02T14:51:25Z",
      "closedAt": "2026-10-02T14:51:25Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABGQeNSg",
      "title": "feat(printer): include skipped and unevaluated controls in junit report (#4014)",
      "url": "https://github.com/kubescape/kubescape/pull/4015",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-02T09:31:43Z",
      "mergedAt": "2026-10-05T07:33:26Z",
      "closedAt": "2026-10-05T07:33:26Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABGQZ1LA",
      "title": "fix(prometheus): emit kubescape_resource_count_controls_passed metric",
      "url": "https://github.com/kubescape/kubescape/pull/4013",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-02T09:23:47Z",
      "mergedAt": "2026-10-02T14:57:29Z",
      "closedAt": "2026-10-02T14:57:29Z"
    },
    {
      "id": "PR_kwDOH8_SWs8AAAABGDY2tQ",
      "title": "fix(operator): run admission certgen init containers with a read-only root filesystem",
      "url": "https://github.com/kubescape/helm-charts/pull/948",
      "repository": {
        "nameWithOwner": "kubescape/helm-charts"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-01T08:21:55Z",
      "mergedAt": "2026-10-02T06:41:33Z",
      "closedAt": "2026-10-02T06:41:33Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABGCPU6w",
      "title": "feat(printer): surface attack-path priority score and severity in SARIF result properties",
      "url": "https://github.com/kubescape/kubescape/pull/4004",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-01T06:04:37Z",
      "mergedAt": "2026-10-01T06:45:30Z",
      "closedAt": "2026-10-01T06:45:30Z"
    },
    {
      "id": "PR_kwDOG_sA9M8AAAABGCNeBA",
      "title": "fix(registryauth): exchange IdentityToken via OAuth instead of dropping it",
      "url": "https://github.com/kubescape/kubevuln/pull/1148",
      "repository": {
        "nameWithOwner": "kubescape/kubevuln"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-01T06:00:20Z",
      "mergedAt": "2026-10-05T07:42:24Z",
      "closedAt": "2026-10-05T07:42:24Z"
    },
    {
      "id": "PR_kwDOG_sA9M8AAAABF8oUWg",
      "title": "fix(safefetch): block RFC 6890 IETF protocol assignments and RFC 9637 documentation ranges in checkIPAllowed",
      "url": "https://github.com/kubescape/kubevuln/pull/1125",
      "repository": {
        "nameWithOwner": "kubescape/kubevuln"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-30T17:53:37Z",
      "mergedAt": "2026-10-05T05:28:51Z",
      "closedAt": "2026-10-05T05:28:51Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABF4mTjg",
      "title": "fix(policyreport): surface cluster-wide skipped controls and diagnostics in ClusterPolicyReport",
      "url": "https://github.com/kubescape/kubescape/pull/3990",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-30T11:30:25Z",
      "mergedAt": "2026-10-05T05:28:24Z",
      "closedAt": "2026-10-05T05:28:24Z"
    },
    {
      "id": "PR_kwDOG_sA9M8AAAABF4eeYw",
      "title": "fix(repositories): support multiple applied rules in isOwnIgnoreRule",
      "url": "https://github.com/kubescape/kubevuln/pull/1112",
      "repository": {
        "nameWithOwner": "kubescape/kubevuln"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-30T11:17:18Z",
      "mergedAt": "2026-10-01T06:22:06Z",
      "closedAt": "2026-10-01T06:22:06Z"
    },
    {
      "id": "PR_kwDOG_sA9M8AAAABF1KEwQ",
      "title": "fix(registryauth): do not retry MANIFEST_UNKNOWN when imageTag is empty or matches imageID",
      "url": "https://github.com/kubescape/kubevuln/pull/1110",
      "repository": {
        "nameWithOwner": "kubescape/kubevuln"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-30T05:28:14Z",
      "mergedAt": "2026-09-30T06:12:20Z",
      "closedAt": "2026-09-30T06:12:20Z"
    },
    {
      "id": "PR_kwDOH8_SWs8AAAABF09GrQ",
      "title": "fix(grype-offline-db): run container with a read-only root filesystem",
      "url": "https://github.com/kubescape/helm-charts/pull/943",
      "repository": {
        "nameWithOwner": "kubescape/helm-charts"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-30T05:00:44Z",
      "mergedAt": "2026-10-01T06:14:04Z",
      "closedAt": "2026-10-01T06:14:04Z"
    },
    {
      "id": "PR_kwDOG_sA9M8AAAABFiarEQ",
      "title": "fix(tools): support zero delay and elapsed HTTP-dates in ParseRetryAfter (#1106)",
      "url": "https://github.com/kubescape/kubevuln/pull/1107",
      "repository": {
        "nameWithOwner": "kubescape/kubevuln"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-28T16:39:59Z",
      "mergedAt": "2026-09-29T05:49:54Z",
      "closedAt": "2026-09-29T05:49:54Z"
    },
    {
      "id": "PR_kwDOG_sA9M8AAAABFe289g",
      "title": "fix(safefetch): block RFC 5180 benchmark, RFC 6666 discard, and documentation ranges in checkIPAllowed (#1104)",
      "url": "https://github.com/kubescape/kubevuln/pull/1105",
      "repository": {
        "nameWithOwner": "kubescape/kubevuln"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-28T11:15:34Z",
      "mergedAt": "2026-09-28T15:34:42Z",
      "closedAt": "2026-09-28T15:34:42Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABFdbaIg",
      "title": "feat(pdf): report scan coverage and skipped-control diagnostics (#3958)",
      "url": "https://github.com/kubescape/kubescape/pull/3959",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-28T08:47:54Z",
      "mergedAt": "2026-09-30T06:20:23Z",
      "closedAt": "2026-09-30T06:20:23Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABFRGATA",
      "title": "fix(sarif): aggregate container image vulnerability runs in combined scans (#3945)",
      "url": "https://github.com/kubescape/kubescape/pull/3946",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-26T17:07:34Z",
      "mergedAt": "2026-09-29T05:48:37Z",
      "closedAt": "2026-09-29T05:48:37Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABFO2nCQ",
      "title": "fix(prometheus): emit container image vulnerability metrics in combined scans (#3941)",
      "url": "https://github.com/kubescape/kubescape/pull/3942",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-26T09:03:50Z",
      "mergedAt": "2026-09-28T05:29:35Z",
      "closedAt": "2026-09-28T05:29:35Z"
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABFO11Zw",
      "title": "posix: spinlock: fix trylock errno and invalidate handle on destroy",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/120414",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-26T09:01:20Z",
      "mergedAt": "2026-10-02T22:48:34Z",
      "closedAt": "2026-10-02T22:48:34Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABFIW6bw",
      "title": "fix(printer): include skipped and unevaluated controls in CSV report output (#3934)",
      "url": "https://github.com/kubescape/kubescape/pull/3935",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-25T14:44:16Z",
      "mergedAt": "2026-09-28T05:29:52Z",
      "closedAt": "2026-09-28T05:29:52Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABFGUQew",
      "title": "fix(junit): aggregate and serialize skipped count in root testsuites element (#3932)",
      "url": "https://github.com/kubescape/kubescape/pull/3933",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-25T10:51:55Z",
      "mergedAt": "2026-09-28T05:25:00Z",
      "closedAt": "2026-09-28T05:25:00Z"
    },
    {
      "id": "PR_kwDOG_sA9M8AAAABFEJh9g",
      "title": "fix(safefetch): block RFC 1112 reserved and RFC 2544 benchmark ranges in checkIPAllowed (#1092)",
      "url": "https://github.com/kubescape/kubevuln/pull/1093",
      "repository": {
        "nameWithOwner": "kubescape/kubevuln"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-25T06:26:01Z",
      "mergedAt": "2026-09-25T11:57:39Z",
      "closedAt": "2026-09-25T11:57:39Z"
    },
    {
      "id": "PR_kwDOG_sA9M8AAAABE-Ax9w",
      "title": "fix(adapters): return error when ContainerProfile is not found in GetContainerRelevancyScans",
      "url": "https://github.com/kubescape/kubevuln/pull/1091",
      "repository": {
        "nameWithOwner": "kubescape/kubevuln"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-24T16:29:10Z",
      "mergedAt": "2026-09-25T12:03:35Z",
      "closedAt": "2026-09-25T12:03:35Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABE5N21g",
      "title": "fix: populate framework resource counters and root metadata in ReportV2ToV1 (#3927)",
      "url": "https://github.com/kubescape/kubescape/pull/3928",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-24T08:17:17Z",
      "mergedAt": "2026-09-25T06:01:17Z",
      "closedAt": "2026-09-25T06:01:17Z"
    },
    {
      "id": "PR_kwDOF4-Lyc8AAAABEuhVrw",
      "title": "fix(diff): extract failedPath evidence in granular comparison (#3921)",
      "url": "https://github.com/kubescape/kubescape/pull/3922",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-23T09:57:48Z",
      "mergedAt": "2026-09-24T05:14:54Z",
      "closedAt": "2026-09-24T05:14:54Z"
    },
    {
      "id": "PR_kwDOAPIZOs8AAAABBljjyA",
      "title": "fix(api): pass authenticated user id to folder access checks",
      "url": "https://github.com/fossology/fossology/pull/3797",
      "repository": {
        "nameWithOwner": "fossology/fossology"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-31T10:33:19Z",
      "mergedAt": "2026-09-28T08:06:49Z",
      "closedAt": "2026-09-28T08:06:50Z"
    },
    {
      "id": "PR_kwDODcZyiM8AAAABBUJK2Q",
      "title": "fix(data_model): correct JSONField and SetField handling in BaseDataModel.merge. Closes #3970",
      "url": "https://github.com/intelowlproject/IntelOwl/pull/3971",
      "repository": {
        "nameWithOwner": "intelowlproject/IntelOwl"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-28T08:41:59Z",
      "mergedAt": "2026-09-28T09:34:09Z",
      "closedAt": "2026-09-28T09:34:09Z"
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABBPHmPg",
      "title": "drivers: i2s: esp32: fix full-duplex error handling and PREPARE recovery",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/117645",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-27T16:58:58Z",
      "mergedAt": "2026-10-02T22:40:34Z",
      "closedAt": "2026-10-02T22:40:34Z"
    },
    {
      "id": "PR_kwDODcZyiM8AAAABBPDXzg",
      "title": "Fix archive extension regex matching in FileJobSerializer. Closes #3968",
      "url": "https://github.com/intelowlproject/IntelOwl/pull/3969",
      "repository": {
        "nameWithOwner": "intelowlproject/IntelOwl"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-27T16:49:33Z",
      "mergedAt": "2026-09-28T09:36:02Z",
      "closedAt": "2026-09-28T09:36:02Z"
    },
    {
      "id": "PR_kwDOAPIZOs8AAAABBOs4Qg",
      "title": "fix(api): add spdx2csv and spdx3tv report formats and refactor dispatch",
      "url": "https://github.com/fossology/fossology/pull/3789",
      "repository": {
        "nameWithOwner": "fossology/fossology"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-27T15:59:15Z",
      "mergedAt": "2026-08-31T08:14:34Z",
      "closedAt": "2026-08-31T08:14:34Z"
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABBB579w",
      "title": "posix: shm: fix fd leak on error paths and protect shm_list with mutex",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/117418",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-26T04:52:51Z",
      "mergedAt": "2026-10-02T22:38:42Z",
      "closedAt": "2026-10-02T22:38:42Z"
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABAlmHPg",
      "title": "bluetooth: audio: fix null pointer dereferences in media proxy callbacks",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/117078",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-21T18:44:19Z",
      "mergedAt": "2026-09-24T07:54:32Z",
      "closedAt": "2026-09-24T07:54:32Z"
    },
    {
      "id": "PR_kwDOC8Dqbc8AAAABAZ_YMQ",
      "title": "feat(limits): improve registry limit enforcement error messages with contextual data",
      "url": "https://github.com/Apicurio/apicurio-registry/pull/9712",
      "repository": {
        "nameWithOwner": "Apicurio/apicurio-registry"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-20T11:08:08Z",
      "mergedAt": "2026-09-30T13:37:31Z",
      "closedAt": "2026-09-30T13:37:31Z"
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABAZqY6w",
      "title": "logging: log_output: fix NULL pointer dereference in syslog formatting for ISR logs",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/116926",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-20T10:18:21Z",
      "mergedAt": "2026-09-22T15:55:16Z",
      "closedAt": "2026-09-22T15:55:16Z"
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABAZON3g",
      "title": "logging: output: prevent divide-by-zero in log_output_timestamp_to_us",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/116917",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-20T09:14:31Z",
      "mergedAt": "2026-08-31T10:59:41Z",
      "closedAt": "2026-08-31T10:59:42Z"
    },
    {
      "id": "PR_kwDOC8Dqbc78jm3h",
      "title": "fix(ui): clean up remaining stale PatternFly 5 (pf-v5) CSS classes and variables in ui-app",
      "url": "https://github.com/Apicurio/apicurio-registry/pull/9401",
      "repository": {
        "nameWithOwner": "Apicurio/apicurio-registry"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-09T04:50:22Z",
      "mergedAt": "2026-08-12T10:46:05Z",
      "closedAt": "2026-08-12T10:46:05Z"
    },
    {
      "id": "PR_kwDOLuWyWM78dSVb",
      "title": "feat(docs): add interactive kubernetes manifest generator for heterogeneous devices",
      "url": "https://github.com/Project-HAMi/website/pull/744",
      "repository": {
        "nameWithOwner": "Project-HAMi/website"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-08T18:08:45Z",
      "mergedAt": "2026-09-23T12:58:42Z",
      "closedAt": "2026-09-23T12:58:42Z"
    },
    {
      "id": "PR_kwDOA5AKIc77AGIN",
      "title": "tests: posix: add min_ram for dynamic_stack test",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/115414",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-05T09:51:51Z",
      "mergedAt": "2026-08-20T08:50:37Z",
      "closedAt": "2026-08-20T08:50:37Z"
    },
    {
      "id": "PR_kwDOA5AKIc76XqSW",
      "title": "logging: fix -Wpointer-sign warnings",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/115264",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-04T05:42:21Z",
      "mergedAt": "2026-09-23T17:18:37Z",
      "closedAt": "2026-09-23T17:18:37Z"
    },
    {
      "id": "PR_kwDOA5AKIc76DeM1",
      "title": "bluetooth: mesh: fix -Wpointer-sign warnings",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/115228",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-03T14:26:23Z",
      "mergedAt": "2026-08-08T19:21:28Z",
      "closedAt": "2026-08-08T19:21:28Z"
    },
    {
      "id": "PR_kwDOA5AKIc7523To",
      "title": "tests: kernel: fix -Wpointer-sign warnings",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/115178",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-03T06:30:59Z",
      "mergedAt": "2026-08-13T17:15:12Z",
      "closedAt": "2026-08-13T17:15:12Z"
    },
    {
      "id": "PR_kwDOTe4hZ8739M6o",
      "title": "feat: prototype implementation of wide arithmetic opcodes",
      "url": "https://github.com/harshitnub077/WasmEdge/pull/1",
      "repository": {
        "nameWithOwner": "harshitnub077/WasmEdge"
      },
      "state": "CLOSED",
      "createdAt": "2026-07-29T11:37:11Z",
      "mergedAt": "2026-07-31T12:49:19Z",
      "closedAt": "2026-07-31T12:49:20Z"
    },
    {
      "id": "PR_kwDOQvdms87hqJA7",
      "title": "Main",
      "url": "https://github.com/harshitnub077/Cognify/pull/2",
      "repository": {
        "nameWithOwner": "harshitnub077/Cognify"
      },
      "state": "CLOSED",
      "createdAt": "2026-06-02T06:07:11Z",
      "mergedAt": "2026-06-02T06:07:26Z",
      "closedAt": "2026-06-02T06:07:26Z"
    },
    {
      "id": "PR_kwDOQvdms87cYGOO",
      "title": "Main4",
      "url": "https://github.com/harshitnub077/Cognify/pull/1",
      "repository": {
        "nameWithOwner": "harshitnub077/Cognify"
      },
      "state": "CLOSED",
      "createdAt": "2026-05-17T12:58:30Z",
      "mergedAt": "2026-05-17T12:58:40Z",
      "closedAt": "2026-05-17T12:58:40Z"
    },
    {
      "id": "PR_kwDOBBiY487YJSKy",
      "title": "Add harshitnub077 to Contributors list",
      "url": "https://github.com/firstcontributions/first-contributions/pull/116560",
      "repository": {
        "nameWithOwner": "firstcontributions/first-contributions"
      },
      "state": "CLOSED",
      "createdAt": "2026-05-04T19:53:15Z",
      "mergedAt": "2026-05-04T19:53:27Z",
      "closedAt": "2026-05-04T19:53:27Z"
    },
    {
      "id": "PR_kwDOR749wM7WR4rR",
      "title": "fix: Resolve critical backend and frontend issues for production read\u2026",
      "url": "https://github.com/Omc12/sdse/pull/1",
      "repository": {
        "nameWithOwner": "Omc12/sdse"
      },
      "state": "CLOSED",
      "createdAt": "2026-04-28T09:46:58Z",
      "mergedAt": "2026-04-28T09:55:07Z",
      "closedAt": "2026-04-28T09:55:07Z"
    },
    {
      "id": "PR_kwDORQrris7Ex_jZ",
      "title": "Add dashboard performance analysis charts",
      "url": "https://github.com/Aggarwalmansi/SectionD_Group17_electricityPerformanceMonitoring/pull/1",
      "repository": {
        "nameWithOwner": "Aggarwalmansi/SectionD_Group17_electricityPerformanceMonitoring"
      },
      "state": "CLOSED",
      "createdAt": "2026-02-19T05:18:04Z",
      "mergedAt": "2026-02-19T05:18:15Z",
      "closedAt": "2026-02-19T05:18:15Z"
    }
  ],
  "open": [
    {
      "id": "PR_kwDOF4-Lyc8AAAABJH4oPg",
      "title": "fix(printer): preserve symlink parent paths in GetWriter and GetWriterNoStdoutFallback",
      "url": "https://github.com/kubescape/kubescape/pull/4233",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "OPEN",
      "createdAt": "2026-10-18T07:19:04Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABJDQSnQ",
      "title": "posix: timer: allow NULL evp and validate clockid in timer_create",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/122554",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-10-17T17:31:51Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOH8_SWs8AAAABJDMTYg",
      "title": "feat(kubevuln): support Azure Workload Identity for ambient ACR auth",
      "url": "https://github.com/kubescape/helm-charts/pull/968",
      "repository": {
        "nameWithOwner": "kubescape/helm-charts"
      },
      "state": "OPEN",
      "createdAt": "2026-10-17T17:22:57Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABHy_EeQ",
      "title": "posix: semaphore: gate va_arg in sem_open and validate handles",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/121805",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-10-11T09:53:58Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABHhRWNw",
      "title": "posix: cond: serialize lazy initialization of static condvars",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/121708",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-10-09T11:11:02Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODcZyiM8AAAABHTij0A",
      "title": "Fix Investigation TLP and tags tree traversal and enum consistency. Closes #4061",
      "url": "https://github.com/intelowlproject/IntelOwl/pull/4062",
      "repository": {
        "nameWithOwner": "intelowlproject/IntelOwl"
      },
      "state": "OPEN",
      "createdAt": "2026-10-08T10:15:02Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOAPIZOs8AAAABHTdhrg",
      "title": "fix(api): enforce write permission on main license mutation endpoints",
      "url": "https://github.com/fossology/fossology/pull/3908",
      "repository": {
        "nameWithOwner": "fossology/fossology"
      },
      "state": "OPEN",
      "createdAt": "2026-10-08T10:07:55Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODcZyiM8AAAABGbKSng",
      "title": "fix(serializers): prevent AttributeError and ObjectDoesNotExist in PluginConfigSerializer secret redaction. Closes #4052",
      "url": "https://github.com/intelowlproject/IntelOwl/pull/4053",
      "repository": {
        "nameWithOwner": "intelowlproject/IntelOwl"
      },
      "state": "OPEN",
      "createdAt": "2026-10-03T11:09:50Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOC8Dqbc8AAAABGbCppw",
      "title": "fix(storage): add primary key tiebreakers to search order for deterministic pagination",
      "url": "https://github.com/Apicurio/apicurio-registry/pull/10413",
      "repository": {
        "nameWithOwner": "Apicurio/apicurio-registry"
      },
      "state": "OPEN",
      "createdAt": "2026-10-03T10:49:26Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODcZyiM8AAAABGa_0tA",
      "title": "fix(serializers): fix KeyError and ensure PivotMap creation when parent_job is provided. Closes #4050",
      "url": "https://github.com/intelowlproject/IntelOwl/pull/4051",
      "repository": {
        "nameWithOwner": "intelowlproject/IntelOwl"
      },
      "state": "OPEN",
      "createdAt": "2026-10-03T10:41:35Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOAPIZOs8AAAABGRenSg",
      "title": "fix(api): enforce write permission on copyright mutation endpoints",
      "url": "https://github.com/fossology/fossology/pull/3884",
      "repository": {
        "nameWithOwner": "fossology/fossology"
      },
      "state": "OPEN",
      "createdAt": "2026-10-02T11:35:55Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODcZyiM8AAAABGE86Aw",
      "title": "fix(serializers): fix delay calculation and QueryDict file_mimetypes handling in MultipleJobSerializer. Closes #4047",
      "url": "https://github.com/intelowlproject/IntelOwl/pull/4048",
      "repository": {
        "nameWithOwner": "intelowlproject/IntelOwl"
      },
      "state": "OPEN",
      "createdAt": "2026-10-01T11:07:45Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOAPIZOs8AAAABGEic8w",
      "title": "fix(api): associate authenticated user id on folder creation",
      "url": "https://github.com/fossology/fossology/pull/3882",
      "repository": {
        "nameWithOwner": "fossology/fossology"
      },
      "state": "OPEN",
      "createdAt": "2026-10-01T10:22:56Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABE0Zg7Q",
      "title": "posix: key: unlink thread key_list on pthread_key_delete",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/120152",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-09-23T20:30:57Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODSVGxs8AAAABEj0LYQ",
      "title": "frontend: HPA: Match metrics by identifier and guard status access",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/7737",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "OPEN",
      "createdAt": "2026-09-22T10:24:25Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABEjDBUA",
      "title": "posix: rwlock: fix static initializer and lazy initialization race",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/119906",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-09-22T08:46:53Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABBb52JA",
      "title": "posix: barrier: fix reuse race condition and return codes",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/117759",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-08-29T11:24:55Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODSVGxs8AAAABBXmP_w",
      "title": "backend: helm: Report failed status on install verification error",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/7536",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "OPEN",
      "createdAt": "2026-08-28T17:40:46Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODSVGxs8AAAABBUDDqw",
      "title": "backend: helm: Allow managing non-deployed and failed releases",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/7524",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "OPEN",
      "createdAt": "2026-08-28T08:29:05Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODSVGxs8AAAABBPDxiA",
      "title": "backend: auth: Support BaseURL in OIDC refresh and token parsing",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/7515",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "OPEN",
      "createdAt": "2026-08-27T16:50:23Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABBBq0pw",
      "title": "posix: mqueue: fix mq_open concurrency race and errno conformance",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/117413",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-08-26T03:56:59Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABBBoemg",
      "title": "tests: arch: arm_thread_swap: increase stack for no_optimizations",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/117410",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-08-26T03:47:48Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABAsed1g",
      "title": "posix: run cleanup handlers on thread exit",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/117134",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-08-23T09:41:14Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODSVGxs8AAAABAlybAA",
      "title": "backend: Prevent port-forward resurrection on deletion",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/7389",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "OPEN",
      "createdAt": "2026-08-21T19:15:45Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODSVGxs8AAAABAZuCJA",
      "title": "backend: k8cache: Prevent panic in cache invalidation watcher",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/7356",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "OPEN",
      "createdAt": "2026-08-20T10:26:34Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODSVGxs768mwN",
      "title": "backend: helm: Enforce 0o600 permissions on repository config",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6888",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "OPEN",
      "createdAt": "2026-08-05T07:36:43Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc768SlQ",
      "title": "posix: make pthread_once thread-safe",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/115385",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-08-05T07:25:40Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDODSVGxs76lQK_",
      "title": "backend: server: Add configurable security headers against clickjacking",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6874",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "OPEN",
      "createdAt": "2026-08-04T13:57:33Z",
      "mergedAt": null,
      "closedAt": null
    },
    {
      "id": "PR_kwDOA5AKIc75Hl4Z",
      "title": "posix: isolate non-portable pthread APIs under CONFIG_POSIX_NON_PORTABLE",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/115085",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "OPEN",
      "createdAt": "2026-07-31T17:00:33Z",
      "mergedAt": null,
      "closedAt": null
    }
  ],
  "closed": [
    {
      "id": "PR_kwDOF4-Lyc8AAAABHzG3aw",
      "title": "fix(cautils): preserve delete and review paths in ReportV2ToV1 (#4103)",
      "url": "https://github.com/kubescape/kubescape/pull/4106",
      "repository": {
        "nameWithOwner": "kubescape/kubescape"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-11T10:15:50Z",
      "mergedAt": null,
      "closedAt": "2026-10-15T13:52:45Z"
    },
    {
      "id": "PR_kwDOC0tkAc8AAAABGbGOpA",
      "title": "fix(sidecarset): initialize pod annotations map before writing",
      "url": "https://github.com/openkruise/kruise/pull/2590",
      "repository": {
        "nameWithOwner": "openkruise/kruise"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-03T10:58:54Z",
      "mergedAt": null,
      "closedAt": "2026-10-07T16:00:23Z"
    },
    {
      "id": "PR_kwDOC0tkAc8AAAABGRGrzA",
      "title": "fix(resourcedistribution): safely match status conditions by type in calculateNewStatus",
      "url": "https://github.com/openkruise/kruise/pull/2588",
      "repository": {
        "nameWithOwner": "openkruise/kruise"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-02T10:49:20Z",
      "mergedAt": null,
      "closedAt": "2026-10-07T16:00:22Z"
    },
    {
      "id": "PR_kwDOC0tkAc8AAAABGQ-b-w",
      "title": "fix(webhook): propagate admission request context to API client calls",
      "url": "https://github.com/openkruise/kruise/pull/2585",
      "repository": {
        "nameWithOwner": "openkruise/kruise"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-02T10:32:53Z",
      "mergedAt": null,
      "closedAt": "2026-10-07T16:00:22Z"
    },
    {
      "id": "PR_kwDOC0tkAc8AAAABGQWmEw",
      "title": "fix(util): avoid race condition in DurationStore.Pop with LoadAndDelete",
      "url": "https://github.com/openkruise/kruise/pull/2584",
      "repository": {
        "nameWithOwner": "openkruise/kruise"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-02T09:17:46Z",
      "mergedAt": null,
      "closedAt": "2026-10-07T16:00:21Z"
    },
    {
      "id": "PR_kwDOC0tkAc8AAAABGDxxxQ",
      "title": "fix(resourcedistribution): update distributed resources when labels or annotations change",
      "url": "https://github.com/openkruise/kruise/pull/2583",
      "repository": {
        "nameWithOwner": "openkruise/kruise"
      },
      "state": "CLOSED",
      "createdAt": "2026-10-01T09:02:58Z",
      "mergedAt": null,
      "closedAt": "2026-10-07T16:00:20Z"
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABFEIYKg",
      "title": "drivers: i2s: esp32: return unstarted block to slab on restart failure",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/120322",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-25T06:23:33Z",
      "mergedAt": null,
      "closedAt": "2026-09-26T11:04:44Z"
    },
    {
      "id": "PR_kwDOC8Dqbc8AAAABEkJMWQ",
      "title": "fix(ui): correct branch delete error text, metadata guard, and service logging (#10232)",
      "url": "https://github.com/Apicurio/apicurio-registry/pull/10233",
      "repository": {
        "nameWithOwner": "Apicurio/apicurio-registry"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-22T11:07:58Z",
      "mergedAt": null,
      "closedAt": "2026-09-30T15:58:58Z"
    },
    {
      "id": "PR_kwDOC8Dqbc8AAAABEj_tRg",
      "title": "fix(ui): correct empty state label, service return type, and lifecycle in ArtifactBranchesTabContent (#10110)",
      "url": "https://github.com/Apicurio/apicurio-registry/pull/10231",
      "repository": {
        "nameWithOwner": "Apicurio/apicurio-registry"
      },
      "state": "CLOSED",
      "createdAt": "2026-09-22T10:47:45Z",
      "mergedAt": null,
      "closedAt": "2026-09-30T15:43:18Z"
    },
    {
      "id": "PR_kwDOC8Dqbc8AAAABBlzTiA",
      "title": "fix(mcp): validate versionState and throw ToolCallException when invalid (#9906)",
      "url": "https://github.com/Apicurio/apicurio-registry/pull/9921",
      "repository": {
        "nameWithOwner": "Apicurio/apicurio-registry"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-31T11:10:17Z",
      "mergedAt": null,
      "closedAt": "2026-08-31T11:10:30Z"
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABBUARTA",
      "title": "drivers: dma: esp32_gdma: fix premature PM lock release in concurrent M2M",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/117686",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-28T08:22:54Z",
      "mergedAt": null,
      "closedAt": "2026-08-30T03:57:46Z"
    },
    {
      "id": "PR_kwDOAPIZOs8AAAABBEPsDw",
      "title": "fix(api): use dynamic uploadtree table and add safety checks in upload download",
      "url": "https://github.com/fossology/fossology/pull/3782",
      "repository": {
        "nameWithOwner": "fossology/fossology"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-26T11:21:27Z",
      "mergedAt": null,
      "closedAt": "2026-09-21T18:22:56Z"
    },
    {
      "id": "PR_kwDODSVGxs8AAAABBDE-lw",
      "title": "frontend: storageClass: Support beta is-default-class annotation",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/7497",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-26T08:30:30Z",
      "mergedAt": null,
      "closedAt": "2026-10-17T16:42:24Z"
    },
    {
      "id": "PR_kwDOA5AKIc8AAAABBBkC6A",
      "title": "drivers: spi: ambiq_spid: fix runtime PM leaks and return status",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/117407",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-26T03:31:16Z",
      "mergedAt": null,
      "closedAt": "2026-08-26T03:32:12Z"
    },
    {
      "id": "PR_kwDONHcR9M8AAAABAOukvw",
      "title": "headlamp-backend: Configure allowed-frame-ancestors for Headlamp",
      "url": "https://github.com/headlamp-k8s/backstage-plugin/pull/30",
      "repository": {
        "nameWithOwner": "headlamp-k8s/backstage-plugin"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-19T03:45:36Z",
      "mergedAt": null,
      "closedAt": "2026-10-07T16:02:34Z"
    },
    {
      "id": "PR_kwDOC8Dqbc78tmkP",
      "title": "fix(core): resolve race condition and memory leaks in KafkaSqlCoordinator",
      "url": "https://github.com/Apicurio/apicurio-registry/pull/9425",
      "repository": {
        "nameWithOwner": "Apicurio/apicurio-registry"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-09T19:07:25Z",
      "mergedAt": null,
      "closedAt": "2026-08-30T07:59:51Z"
    },
    {
      "id": "PR_kwDOC8Dqbc78kFKT",
      "title": "fix(backend): Explicitly throw RegistryException on content canonical\u2026",
      "url": "https://github.com/Apicurio/apicurio-registry/pull/9403",
      "repository": {
        "nameWithOwner": "Apicurio/apicurio-registry"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-09T05:43:08Z",
      "mergedAt": null,
      "closedAt": "2026-08-28T09:44:13Z"
    },
    {
      "id": "PR_kwDODSVGxs78dPro",
      "title": "frontend: Add Dynamic Resource Allocation (DRA) API objects and views",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/7019",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-08T18:05:00Z",
      "mergedAt": null,
      "closedAt": "2026-08-20T17:51:25Z"
    },
    {
      "id": "PR_kwDODSVGxs77uyZN",
      "title": "frontend: Add ValidatingAdmissionPolicy and ValidatingAdmissionPolicyBinding",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6964",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-06T19:03:46Z",
      "mergedAt": null,
      "closedAt": "2026-10-06T11:41:28Z"
    },
    {
      "id": "PR_kwDOKToQrs77uaoz",
      "title": "feat(fuzzing): add ClusterFuzzLite integration and initial fuzz targets",
      "url": "https://github.com/urunc-dev/urunc/pull/911",
      "repository": {
        "nameWithOwner": "urunc-dev/urunc"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-06T18:43:01Z",
      "mergedAt": null,
      "closedAt": "2026-08-07T07:58:54Z"
    },
    {
      "id": "PR_kwDODSVGxs77QE5d",
      "title": "frontend: priorityClass: Fix Global Default rendering",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6926",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-05T19:34:19Z",
      "mergedAt": null,
      "closedAt": "2026-10-06T11:41:25Z"
    },
    {
      "id": "PR_kwDOLuWyWM77P0AT",
      "title": "docs(tutorials): add SGLang lab and overhaul troubleshooting",
      "url": "https://github.com/Project-HAMi/website/pull/728",
      "repository": {
        "nameWithOwner": "Project-HAMi/website"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-05T19:24:10Z",
      "mergedAt": null,
      "closedAt": "2026-09-21T20:52:19Z"
    },
    {
      "id": "PR_kwDOIzjTBc77N2hJ",
      "title": "fix: improve accessibility with ARIA roles and alt tags",
      "url": "https://github.com/podman-container-tools/podman.io/pull/637",
      "repository": {
        "nameWithOwner": "podman-container-tools/podman.io"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-05T18:08:39Z",
      "mergedAt": null,
      "closedAt": "2026-10-17T16:42:29Z"
    },
    {
      "id": "PR_kwDODSVGxs77E-Xu",
      "title": "frontend: resourceMap: Persist source selection in localStorage",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6898",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-05T13:01:44Z",
      "mergedAt": null,
      "closedAt": "2026-10-06T11:41:21Z"
    },
    {
      "id": "PR_kwDOA5AKIc76_wZZ",
      "title": "posix: mutex: remove structurally dead code",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/115408",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-05T09:38:22Z",
      "mergedAt": null,
      "closedAt": "2026-08-05T09:39:42Z"
    },
    {
      "id": "PR_kwDODSVGxs768m7I",
      "title": "frontend: api/v2: Fix WebSocket unmount race condition and memory leaks",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6889",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-05T07:36:47Z",
      "mergedAt": null,
      "closedAt": "2026-10-06T11:41:17Z"
    },
    {
      "id": "PR_kwDODSVGxs768DFR",
      "title": "fix(backend): preserve server-side credentials and TLS config in helm AddRepo",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6884",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-05T07:16:27Z",
      "mergedAt": null,
      "closedAt": "2026-08-05T09:03:55Z"
    },
    {
      "id": "PR_kwDOA5AKIc76levp",
      "title": "arch: arm: delay msp interrupt stack setup until thread switch",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/115327",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-04T14:04:40Z",
      "mergedAt": null,
      "closedAt": "2026-08-13T13:41:49Z"
    },
    {
      "id": "PR_kwDODSVGxs76lEiH",
      "title": "fix(api): fix WebSocket unmount race condition and connection leaks",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6873",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-04T13:51:59Z",
      "mergedAt": null,
      "closedAt": "2026-08-04T13:53:12Z"
    },
    {
      "id": "PR_kwDODSVGxs76Y0s8",
      "title": "feat(ui): add 'Copy as kubectl' quick action on resource detail pages",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6856",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-04T06:37:47Z",
      "mergedAt": null,
      "closedAt": "2026-08-05T13:16:16Z"
    },
    {
      "id": "PR_kwDODSVGxs76Yi2_",
      "title": "frontend: globalSearch: Prevent eviction of oldest recent item on re-select",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6855",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-04T06:25:01Z",
      "mergedAt": null,
      "closedAt": "2026-10-06T11:41:14Z"
    },
    {
      "id": "PR_kwDODSVGxs76YTNy",
      "title": "frontend: role: Show ServiceAccount namespace in BindingList",
      "url": "https://github.com/kubernetes-sigs/headlamp/pull/6854",
      "repository": {
        "nameWithOwner": "kubernetes-sigs/headlamp"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-04T06:12:51Z",
      "mergedAt": null,
      "closedAt": "2026-10-06T11:41:10Z"
    },
    {
      "id": "PR_kwDOA5AKIc75WSIC",
      "title": "tests: posix: common: split POSIX_SYSTEM_DATABASE into a standalone test",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/115125",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-08-01T09:27:47Z",
      "mergedAt": null,
      "closedAt": "2026-08-25T10:32:33Z"
    },
    {
      "id": "PR_kwDODWfT1M739dx-",
      "title": "feat: prototype implementation of wide arithmetic opcodes",
      "url": "https://github.com/WasmEdge/WasmEdge/pull/5227",
      "repository": {
        "nameWithOwner": "WasmEdge/WasmEdge"
      },
      "state": "CLOSED",
      "createdAt": "2026-07-29T11:46:32Z",
      "mergedAt": null,
      "closedAt": "2026-07-29T12:04:54Z"
    },
    {
      "id": "PR_kwDOA5AKIc739B9v",
      "title": "tests: kernel: fix -Wpointer-sign warnings",
      "url": "https://github.com/zephyrproject-rtos/zephyr/pull/114853",
      "repository": {
        "nameWithOwner": "zephyrproject-rtos/zephyr"
      },
      "state": "CLOSED",
      "createdAt": "2026-07-29T11:30:48Z",
      "mergedAt": null,
      "closedAt": "2026-08-03T06:16:43Z"
    },
    {
      "id": "PR_kwDODWfT1M70Qd-v",
      "title": "test: add arithmetic boundary tests",
      "url": "https://github.com/WasmEdge/WasmEdge/pull/5194",
      "repository": {
        "nameWithOwner": "WasmEdge/WasmEdge"
      },
      "state": "CLOSED",
      "createdAt": "2026-07-21T08:42:47Z",
      "mergedAt": null,
      "closedAt": "2026-10-17T16:42:26Z"
    },
    {
      "id": "PR_kwDOC4Q8Qs7UCu0m",
      "title": "fix(nodes): handle empty HTTP 204 response for S3 \"Delete Bucket\" operation",
      "url": "https://github.com/n8n-io/n8n/pull/28734",
      "repository": {
        "nameWithOwner": "n8n-io/n8n"
      },
      "state": "CLOSED",
      "createdAt": "2026-04-20T17:39:26Z",
      "mergedAt": null,
      "closedAt": "2026-08-11T14:46:23Z"
    }
  ]
};
