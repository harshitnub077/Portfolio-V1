"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BannerParticles } from "@/components/banner-particles";
import { CurrentTime } from "@/components/current-time";
import { RightNavbar } from "@/components/right-navbar";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { FlipCoverButton } from "@/components/flip-cover-button";
import { ExperienceList } from "@/components/experience-list";
import { ProjectsGrid } from "@/components/projects-grid";
import { GithubGraph } from "@/components/github-graph";
import { OpenSourceContributions } from "@/components/open-source-contributions";
import { SkillsList } from "@/components/skills-list";
import { FooterBackground } from "@/components/footer-background";
import { siteProfile } from "@/content/portfolio-data";
import { Mail } from "lucide-react";
import { SiGithub, SiX, SiDiscord, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-x-hidden transition-colors duration-300">
      {/* Right Index Sidebar for Desktop */}
      <RightNavbar />

      {/* Vertical Dashed Guidelines */}
      <div
        className="absolute top-0 bottom-0 left-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />
      <div
        className="absolute top-0 bottom-0 right-[30%] w-0 border-r border-black/30 dark:border-white/[0.15] pointer-events-none hidden md:block"
        style={{
          maskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to bottom, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Horizontal Dashed Guidelines */}
      <div
        className="absolute left-0 right-0 top-[22vh] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />
      <div
        className="absolute left-0 right-0 top-[calc(22vh+112px)] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
        style={{
          maskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
          WebkitMaskImage:
            "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
        }}
      />

      {/* Crosshair Dots at Intersections */}
      <div
        className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
        style={{ top: "22vh", left: "30%", transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
        style={{ top: "22vh", right: "30%", transform: "translate(50%, -50%)" }}
      />
      <div
        className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
        style={{
          top: "calc(22vh + 112px)",
          left: "30%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] pointer-events-none z-10 hidden md:block"
        style={{
          top: "calc(22vh + 112px)",
          right: "30%",
          transform: "translate(50%, -50%)",
        }}
      />

      {/* Header Banner */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] -z-0 pointer-events-auto overflow-hidden bg-white dark:bg-black shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)]">
        <Image
          src="/ChatGPT Image May 22, 2026, 12_40_29 AM.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover object-center dark:hidden"
        />
        <Image
          src="/ChatGPT Image May 22, 2026, 12_49_39 AM.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="hidden object-cover object-center dark:block"
        />
        <BannerParticles />
        <div className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-[5] bg-gradient-to-t from-white/90 to-transparent dark:from-black/50 dark:to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-r from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-20 bg-gradient-to-l from-white/90 to-transparent dark:from-black/40 dark:to-transparent" />

        <div className="absolute bottom-3 right-2 z-10 pointer-events-auto">
          <CurrentTime />
        </div>
      </div>

      {/* Profile Bar */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-[22vh] h-[112px] flex items-center px-4 z-50">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative p-[3px] rounded-[6px] sm:rounded-[8px] border-[1.5px] border-black/30 dark:border-white/[0.15] shrink-0">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[3px] sm:rounded-[5px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={siteProfile.avatar}
                  alt="Profile"
                  width={240}
                  height={240}
                  priority
                  className="h-full w-full origin-center translate-y-1 scale-[1.1] object-cover opacity-90 grayscale contrast-100 mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center pt-8">
              <h1 className="text-[20px] sm:text-[24px] font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-none mb-0.5 [text-shadow:-1.5px_0_0_rgba(0,200,255,0.3),1.5px_0_0_rgba(255,80,0,0.3)] dark:[text-shadow:-1.5px_0_0_rgba(0,200,255,0.6),1.5px_0_0_rgba(255,80,0,0.6)]">
                {siteProfile.name}
              </h1>
              <p className="text-[13px] sm:text-[14px] text-zinc-500 dark:text-zinc-400">
                {siteProfile.age}
              </p>
            </div>
          </div>

          <div className="flex items-start justify-end gap-2 sm:gap-3 h-20 sm:h-24 py-1">
            <CommandMenu />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content Column */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-0 px-4 flex flex-col z-10 relative min-h-screen">
        {/* Bio */}
        <p className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4">
          {siteProfile.tagline}
        </p>

        {/* Bullets */}
        {siteProfile.bullets && siteProfile.bullets.length > 0 && (
          <ul className="text-[14px] sm:text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4 pl-4 space-y-1">
            {siteProfile.bullets.map((b, i) => (
              <li key={i} className="flex gap-1.5">
                <span>•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <FlipCoverButton href={siteProfile.calLink} />

          <Link href="/contact">
            <span className="group relative block rounded-[4px] text-center text-[13px] font-medium tracking-tight transition-[transform] duration-200 active:scale-[0.99] [backdrop-filter:blur(6px)] text-neutral-900 dark:text-neutral-300 px-3 py-1.5 !text-[12px] cursor-pointer">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-[4px] overflow-hidden transition-colors duration-200 bg-white/90 dark:bg-[#0c0c0e] group-hover:dark:bg-[#121214] border border-black/5 dark:border-white/5 group-hover:border-black/10 dark:group-hover:border-white/10"
              >
                <span className="absolute inset-0 rounded-[4px] transition duration-200 bg-black/[0.02] dark:bg-transparent group-hover:bg-transparent dark:group-hover:bg-white/[0.02]" />
              </span>
              <span className="relative">
                <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send an email</span>
                </div>
              </span>
            </span>
          </Link>
        </div>

        {/* Socials */}
        <div id="contact" className="mt-6 scroll-mt-24">
          <h2 className="text-[14px] text-zinc-500 mb-2">
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
                className="group relative block rounded-[4px] text-center text-[13px] font-medium tracking-tight text-neutral-900 dark:text-neutral-300 px-3 py-1.5 !text-[12px] cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[4px] overflow-hidden transition-colors duration-200 bg-white/90 dark:bg-[#0c0c0e] group-hover:dark:bg-[#121214] border border-black/5 dark:border-white/5 group-hover:border-black/10 dark:group-hover:border-white/10"
                >
                  <span className="absolute inset-0 rounded-[4px] bg-black/[0.02] dark:bg-transparent" />
                </span>
                <span className="relative">
                  <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
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

        {/* Experiences Section */}
        <div
          id="experience"
          className="mt-6 flex flex-col relative z-10 scroll-mt-24"
        >
          {/* Top dashed line across */}
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          {/* Heading with bottom dashed line */}
          <div className="py-2 relative">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Experiences
            </h2>
            <div
              className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <ExperienceList />
        </div>

        {/* Projects Section */}
        <div
          id="projects"
          className="mt-0 flex flex-col relative z-10 scroll-mt-24 pt-6"
        >
          <div className="py-2 relative mb-6">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Projects
            </h2>
            <div
              className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <ProjectsGrid />
        </div>

        {/* GitHub Activity Section */}
        <section className="relative z-10 mt-6 flex flex-col scroll-mt-24">
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative mt-1">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              GitHub Activity
            </h2>
            <div
              className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <GithubGraph />
        </section>

        {/* Open Source Contributions Section */}
        <div id="opensource" className="scroll-mt-24 mt-6">
          <div className="relative py-2 mt-1">
            <div
              className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
            <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Open Source Contributions
            </h2>

            <div
              className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <OpenSourceContributions />
        </div>

        {/* Skills Section */}
        <div
          id="skills"
          className="mt-6 flex flex-col relative z-10 scroll-mt-24"
        >
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute top-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <div className="py-2 relative mt-1">
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Skills &amp; Technologies
            </h2>
            <div
              className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none"
              style={{
                maskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              }}
            />
            <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
            <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
          </div>

          <SkillsList />
        </div>

        {/* Motivational Quote */}
        <div className="mt-8 flex flex-col items-center justify-center relative py-6">
          <div className="max-w-[480px] w-full flex flex-col items-center">
            <h3 className="text-[16px] font-medium text-center leading-relaxed text-zinc-500 dark:text-zinc-400 mb-6 italic">
              &quot;Do so much work that it would be unreasonable
              <br className="hidden md:block" />
              for you to not be successful.&quot;
            </h3>
            <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase">
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
              ALEX HORMOZI
              <div className="w-4 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
        </div>

        {/* Interactive Footer Canvas Container */}
        <div className="flex-grow w-[calc(100%+32px)] -mx-4 h-[300px] relative mt-4">
          <div
            className="absolute top-0 left-[-100vw] right-[-100vw] h-0 border-t border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
            style={{
              maskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
              WebkitMaskImage:
                "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
            }}
          />
          <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute top-0 right-0 w-[2px] h-[2px] bg-black/50 dark:bg-white/[0.25] translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />

          <FooterBackground />
        </div>
      </div>
    </div>
  );
}
