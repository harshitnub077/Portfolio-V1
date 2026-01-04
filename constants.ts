// Copyright Harshit Kudhial 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaharshit/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Harshit Kudhial",
  description:
    "I am Harshit, currently in Newton School of Technology, pursuing CS & AI B.Tech. Philomath interested in AI and UI/UX, making new projects which can be implemented in real-life use.",
  siteUrl: "#",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "null";

export const SOCIAL_LINKS = {
  linkedin: "#",
  github: "#",
  medium: "#",
  instagram: "#",
  facebook: "#",
  dribbble: "#",
  behance: "#",
  twitter: "#",
  topmate: "#",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Nexus Dashboard",
    image: "/projects/orchestrator.jpg",
    blurImage: "/projects/blur/orchestrator-blur.jpg",
    description: "A high-performance SaaS analytics platform featuring real-time data visualization and comprehensive user management systems.",
    gradient: ["#5D2CA8", "#0316E3"],
    url: "#",
    tech: ["typescript", "next.js", "chart.js", "supabase"],
  },
  {
    name: "Luxe Commerce",
    image: "/projects/cardize.jpg",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "An award-winning e-commerce experience designed for premium lifestyle brands, integrating stripe payments and headless CMS.",
    gradient: ["#FF5F6D", "#FFC371"],
    url: "#",
    tech: ["react", "shopify", "tailwind", "redux"],
  },
  {
    name: "Aether AI",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Next-generation conversational AI interface with code syntax highlighting and context-aware responses.",
    gradient: ["#E233FF", "#FFBD00"],
    url: "#",
    tech: ["openai api", "websocket", "node.js", "react"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
