"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RightNavbar } from "@/components/right-navbar";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { ExperienceList } from "@/components/experience-list";
import { ProjectsGrid } from "@/components/projects-grid";
import { GithubGraph } from "@/components/github-graph";
import { OpenSourceContributions } from "@/components/open-source-contributions";
import { SkillsList } from "@/components/skills-list";
import { SiteFooter } from "@/components/site-footer";
import { BlueprintGuides } from "@/components/blueprint/blueprint-guides";
import { HeaderBanner } from "@/components/blueprint/header-banner";
import { PageMotion } from "@/components/fx/page-motion";
import { SectionHeader } from "@/components/blueprint/section-header";
import { Reveal } from "@/components/fx/reveal";
import { siteProfile, educationData } from "@/content/portfolio-data";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiGithub, SiX, SiDiscord, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative z-[1] overflow-x-hidden">
      {/* Right Index Sidebar for Desktop */}
      <RightNavbar />

      <PageMotion />

      {/* Column guides, header rules and their crossings */}
      <BlueprintGuides />

      {/* Header Banner */}
      <HeaderBanner />

      {/* Profile Bar */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[22vh] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
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
          </div>

          <div data-hero="tools" className="flex shrink-0 items-start justify-end gap-2 sm:gap-3 h-20 sm:h-24 py-1">
            <CommandMenu />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content Column */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-0 px-4 flex flex-col z-10 relative min-h-screen">
        {/* Bio */}
        <p data-hero="item" className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4">
          {siteProfile.tagline}
        </p>

        {/* Bullets */}
        {siteProfile.bullets && siteProfile.bullets.length > 0 && (
          <ul className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4 pl-4 space-y-1">
            {siteProfile.bullets.map((b, i) => (
              <li key={i} data-hero="item" className="flex gap-1.5">
                <span>•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Primary action */}
        <div data-hero="item" className="flex flex-wrap items-center gap-2 mt-5">
          <Link
            href="/contact"
            data-magnetic="0.22"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[6px] bg-zinc-900 px-3.5 py-2 text-[12.5px] font-medium tracking-tight text-white shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_6px_16px_-8px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:bg-black dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            {/* A sheen of ink sweeps across on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-[translate,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[260%] group-hover:opacity-100 dark:via-ink/30"
            />
            <Mail className="relative h-3.5 w-3.5" />
            <span className="relative">Send an email</span>
            <ArrowUpRight className="relative h-3.5 w-3.5 opacity-60 transition-[translate,opacity] duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </Link>
        </div>

        {/* Socials */}
        <div id="contact" className="mt-6 scroll-mt-24">
          <h2 data-hero="item" className="text-[14px] text-zinc-500 mb-2">
            Here are my{" "}
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              socials
            </span>
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {siteProfile.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hero="item"
                data-magnetic="0.3"
                className="group relative block rounded-[4px] text-center text-[13px] font-medium tracking-tight text-neutral-900 dark:text-neutral-300 px-3 py-1.5 !text-[12px] cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[4px] overflow-hidden transition-colors duration-200 bg-white/90 dark:bg-[#0c0c0e] group-hover:dark:bg-[#121214] border border-black/5 dark:border-white/5 group-hover:border-black/10 dark:group-hover:border-white/10"
                >
                  <span className="absolute inset-0 rounded-[4px] bg-black/[0.02] dark:bg-transparent" />
                </span>
                <span className="relative">
                  <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300 [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:text-ink">
                    {s.icon === "github" && <SiGithub className="w-3.5 h-3.5" />}
                    {s.icon === "twitter" && <SiX className="w-3.5 h-3.5" />}
                    {s.icon === "linkedin" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                      </svg>
                    )}
                    {s.icon === "leetcode" && <SiLeetcode className="w-3.5 h-3.5" />}
                    {s.icon === "geeksforgeeks" && <SiGeeksforgeeks className="w-3.5 h-3.5" />}
                    {s.icon === "discord" && (
                      <SiDiscord className="w-3.5 h-3.5" />
                    )}
                    {s.icon === "mail" && <Mail className="w-3.5 h-3.5" />}
                    <span>{s.name}</span>
                  </div>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 01 Experiences */}
        <Reveal id="experience" className="mt-10 flex flex-col relative z-10 scroll-mt-24">
          <SectionHeader n="01" title="Experiences" top />
          <ExperienceList />
        </Reveal>

        {/* 02 Education */}
        <Reveal id="education" className="flex flex-col relative z-10 scroll-mt-24 pt-10">
          <SectionHeader n="02" title="Education" />
          <ExperienceList items={educationData} />
        </Reveal>

        {/* 03 Projects */}
        <Reveal id="projects" className="flex flex-col relative z-10 scroll-mt-24 pt-10">
          <SectionHeader n="03" title="Projects" className="mb-6" />
          <div data-reveal-item="">
            <ProjectsGrid />
          </div>
        </Reveal>

        {/* 04 GitHub Activity */}
        <Reveal as="section" id="github" className="relative z-10 mt-10 flex flex-col scroll-mt-24">
          <SectionHeader n="04" title="GitHub Activity" top />
          <div data-reveal-item="">
            <GithubGraph />
          </div>
        </Reveal>

        {/* 05 Open Source Contributions */}
        <Reveal id="opensource" className="relative z-10 mt-10 flex flex-col scroll-mt-24">
          <SectionHeader n="05" title="Open Source Contributions" top />
          <div data-reveal-item="">
            <OpenSourceContributions />
          </div>
        </Reveal>

        {/* 06 Skills */}
        <Reveal id="skills" className="mt-10 flex flex-col relative z-10 scroll-mt-24">
          <SectionHeader n="06" title="Skills & Technologies" top />
          <SkillsList />
        </Reveal>

        {/* Motivational Quote */}
        <Reveal className="mt-14 flex flex-col items-center justify-center relative py-10">
          <div data-reveal-item="" className="max-w-[480px] w-full flex flex-col items-center">
            <h3 data-scrub-words="" className="text-[20px] sm:text-[22px] font-medium text-center leading-snug tracking-tight text-zinc-800 dark:text-zinc-100 mb-6 [text-wrap:balance]">
              &quot;Do so much work that it would be unreasonable{" "}
              <br className="hidden md:block" />
              for you to not be successful.&quot;
            </h3>
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase">
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
              ALEX HORMOZI
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </Reveal>

        {/* Signature + colophon */}
        <SiteFooter />
      </div>
    </div>
  );
}
