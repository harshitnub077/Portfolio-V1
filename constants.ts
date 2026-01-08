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
    name: "Contact",
    ref: "contact",
  },
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
    name: "Cognify",
    image: "/projects/orchestrator.jpg",
    blurImage: "/projects/blur/orchestrator-blur.jpg",
    description: "An intelligent AI-powered platform that transforms complex data into actionable insights through advanced machine learning algorithms and intuitive user interfaces.",
    gradient: ["#5D2CA8", "#0316E3"],
    url: "#",
    tech: ["typescript", "next.js", "ai/ml", "supabase"],
  },
  {
    name: "Wanderix",
    image: "/projects/cardize.jpg",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "A modern travel companion application that helps users discover, plan, and share their adventures with seamless integration of maps, recommendations, and social features.",
    gradient: ["#FF5F6D", "#FFC371"],
    url: "#",
    tech: ["react", "node.js", "tailwind", "maps api"],
  },
  {
    name: "Geethub",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "A collaborative code repository platform designed for developers to share, discover, and contribute to open-source projects with enhanced version control and team collaboration tools.",
    gradient: ["#E233FF", "#FFBD00"],
    url: "#",
    tech: ["next.js", "git", "typescript", "postgresql"],
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

export const GTAG = "UA-163844688-1";
