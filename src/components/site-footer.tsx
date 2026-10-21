"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { DashedRule, RegDot } from "@/components/blueprint/dashed-rule";
import { Reveal } from "@/components/fx/reveal";
import { siteProfile } from "@/content/portfolio-data";
import { scrollToTarget } from "@/components/fx/smooth-scroll";

/** Closing rule and colophon. */
export function SiteFooter() {
  return (
    <Reveal className="w-[calc(100%+32px)] -mx-4 relative mt-10">
      <DashedRule bleed className="top-0 z-10" />
      <RegDot ping className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <RegDot ping className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />

      <footer
        data-reveal-item=""
        className="relative z-10 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-7 text-[12px] text-zinc-500 dark:text-zinc-400"
      >
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} {siteProfile.name} · Designed &amp; built with Next.js
        </span>
        <span className="font-mono text-[11px] tabular-nums">{siteProfile.coords}</span>
        <button
          type="button"
          onClick={() => scrollToTarget(0)}
          className="group inline-flex items-center gap-1 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
        >
          Back to top
          <ArrowUp className="h-3 w-3 transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
        </button>
      </footer>
    </Reveal>
  );
}
