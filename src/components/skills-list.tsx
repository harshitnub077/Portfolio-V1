"use client";

import React from "react";
import {
  SiPython,
  SiGo,
  SiC,
  SiJavascript,
  SiTypescript,
  SiLangchain,
  SiHuggingface,
  SiScikitlearn,
  SiPandas,
  SiPostgresql,
  SiFastapi,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiPrometheus,
  SiGit,
  SiGithubactions,
  SiLinux,
} from "react-icons/si";
import { Database, Network, Cpu, Layers, Workflow, Activity, ShieldCheck, Box } from "lucide-react";

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const skillsWithIcons: SkillItem[] = [
  { name: "Python", icon: SiPython },
  { name: "Go", icon: SiGo },
  { name: "C", icon: SiC },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "SQL", icon: Database },
  { name: "LLMs", icon: Cpu },
  { name: "RAG", icon: Database },
  { name: "Agentic AI", icon: Network },
  { name: "LangGraph", icon: Network },
  { name: "LangChain", icon: SiLangchain },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "RAGAS", icon: Activity },
  { name: "Ollama", icon: Box },
  { name: "NLP", icon: Layers },
  { name: "Deep Learning", icon: Workflow },
  { name: "scikit-learn", icon: SiScikitlearn },
  { name: "Pandas", icon: SiPandas },
  { name: "Qdrant", icon: Database },
  { name: "Weaviate", icon: Database },
  { name: "pgvector", icon: SiPostgresql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes Security", icon: SiKubernetes },
  { name: "Prometheus", icon: SiPrometheus },
  { name: "Git", icon: SiGit },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "CI/CD", icon: Workflow },
  { name: "MLOps", icon: Activity },
  { name: "Zephyr RTOS", icon: ShieldCheck },
  { name: "Embedded C", icon: SiC },
  { name: "Linux", icon: SiLinux },
];

function Chip({ skill, i, grow = false }: { skill: SkillItem; i: number; grow?: boolean }) {
  const Icon = skill.icon;
  return (
    <div
      data-reveal-item=""
      style={{ "--i": i } as React.CSSProperties}
      className={`group/chip ${grow ? "grow" : "shrink-0"} flex items-center justify-center gap-2 px-3 py-1.5 bg-zinc-50 dark:bg-[#0a0a0a] hover:bg-ink/[0.06] border border-black/30 dark:border-white/[0.15] hover:border-ink/60 rounded-[6px] transition-colors duration-300 cursor-default select-none`}
    >
      <Icon className="h-3.5 w-3.5 shrink-0 text-zinc-500 opacity-80 transition-[color,opacity,scale] duration-300 group-hover/chip:text-ink group-hover/chip:opacity-100 group-hover/chip:scale-110" />
      <span className="text-[13px] font-medium whitespace-nowrap text-zinc-900 dark:text-zinc-100">{skill.name}</span>
    </div>
  );
}

export function SkillsList() {
  return (
    <div className="relative pt-6 pb-2">
      <div className="flex flex-wrap gap-2 w-full">
        {skillsWithIcons.map((skill, i) => (
          <Chip key={skill.name} skill={skill} i={i} grow />
        ))}
      </div>
    </div>
  );
}
