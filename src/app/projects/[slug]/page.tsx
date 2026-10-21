import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlueprintGuides } from "@/components/blueprint/blueprint-guides";
import { HeaderBanner } from "@/components/blueprint/header-banner";
import { PageMotion } from "@/components/fx/page-motion";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { projectsData, siteProfile } from "@/content/portfolio-data";
import { techNames } from "@/content/tech";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full relative z-[1] overflow-x-hidden">
      <PageMotion />

      {/* Column guides, header rules and their crossings */}
      <BlueprintGuides />

      {/* Header Banner */}
      <HeaderBanner />

      {/* Profile Bar */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[22vh] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex min-w-0 items-center gap-4 sm:gap-5 group cursor-pointer">
            <div data-hero="avatar" className="group/avatar relative p-[3px] rounded-[6px] sm:rounded-[8px] border-[1.5px] border-black/30 dark:border-white/[0.15] shrink-0">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-14 md:h-14 xl:w-20 xl:h-20 rounded-[3px] sm:rounded-[5px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={siteProfile.avatar}
                  alt={siteProfile.name}
                  width={240}
                  height={240}
                  priority
                  className="h-full w-full object-cover object-center saturate-[0.9] transition-[filter,scale] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/avatar:saturate-100 group-hover/avatar:scale-[1.06]"
                />
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-center pt-8">
              <h1 data-hero="name" className="name-glitch whitespace-nowrap text-[20px] sm:text-[24px] md:text-[18px] xl:text-[24px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]">
                {siteProfile.name}
              </h1>
              <p data-hero="sub" title={siteProfile.age} className="text-[13px] sm:text-[14px] text-zinc-500 dark:text-zinc-400 md:line-clamp-2 xl:line-clamp-none">
                {siteProfile.age}
              </p>
            </div>
          </Link>

          <div data-hero="tools" className="flex shrink-0 items-start justify-end gap-2 sm:gap-3 h-20 sm:h-24 py-1">
            <CommandMenu />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Column */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-16 px-4 flex flex-col z-10 relative">
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to overview</span>
          </Link>
        </div>

        {/* Video / Preview */}
        <div className="w-full aspect-video relative mt-6 rounded-lg overflow-hidden border border-black/10 dark:border-white/[0.15] shadow-sm bg-black z-20">
          {project.video ? (
            <iframe
              src={project.video}
              title={`${project.title} video`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <Image
              src={project.src}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
            />
          )}
        </div>

        {/* Divider */}
        <div className="relative mt-8">
          <div
            className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Action links */}
        <div className="grid grid-cols-2 items-center justify-between py-4 relative">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[13px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <SiGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[13px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Site</span>
            </a>
          ) : (
            <div className="flex items-center justify-center text-[13px] text-zinc-400">
              <span>Internal Demo</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="relative">
          <div
            className="absolute left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
          <div className="absolute right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-[-1px] pointer-events-none z-20" />
        </div>

        {/* Content & Details */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h2>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50 dark:bg-zinc-900/50">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400">
                {project.starsText || "Shipped"}
              </span>
            </div>
          </div>

          <p className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          <div className="pt-4">
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-[12px] bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/5 transition-colors duration-300 hover:border-ink/60 hover:text-ink"
                >
                  {techNames[t] ?? t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
