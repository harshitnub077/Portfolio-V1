"use client";

import React, { useState } from "react";
import Image from "next/image";
import { experiencesData } from "@/content/portfolio-data";

export function ExperienceList() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="block">
      {experiencesData.map((exp, idx) => {
        const isExpanded = expandedIndex === idx;
        const isLast = idx === experiencesData.length - 1;

        return (
          <div key={`${exp.title}-${idx}`} className="group relative">
            {/* Dashed line separating items */}
            {!isLast && (
              <div
                className="absolute bottom-0 left-[-16px] right-[-16px] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                style={{
                  maskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  WebkitMaskImage:
                    "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                }}
              />
            )}
            {isLast && (
              <>
                <div
                  className="absolute bottom-0 left-[-100vw] right-[-100vw] h-0 border-b border-black/30 dark:border-white/[0.15] pointer-events-none z-10"
                  style={{
                    maskImage:
                      "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                    WebkitMaskImage:
                      "repeating-linear-gradient(to right, black 0, black 1px, transparent 1px, transparent 6px)",
                  }}
                />
                <div className="absolute bottom-0 -left-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] -translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
                <div className="absolute bottom-0 -right-4 w-[2px] h-[2px] bg-black/40 dark:bg-white/[0.25] translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
              </>
            )}

            {/* Clickable Row */}
            <div
              className="flex flex-col items-start gap-2.5 py-3.5 px-4 -mx-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/20 transition-colors cursor-pointer relative z-20 rounded-lg sm:gap-3 sm:py-4 2xl:flex-row 2xl:items-center 2xl:justify-between"
              onClick={() => toggleExpand(idx)}
            >
              <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="size-12 shrink-0 rounded-[12px] border border-black/10 bg-zinc-50 p-[2.5px] shadow-sm shadow-black/15 dark:border-zinc-800 dark:bg-[#111111] dark:shadow-md dark:shadow-black/50">
                  <div className="w-full h-full rounded-[9px] border border-black/5 dark:border-black/20 bg-white flex items-center justify-center overflow-hidden relative">
                    <Image
                      src={exp.src}
                      alt={exp.title}
                      width={48}
                      height={48}
                      unoptimized
                      className={`${
                        exp.imageFit === "cover" ? "object-cover p-0" : "object-contain p-0.5"
                      } w-full h-full`}
                      style={{
                        transform: `scale(${exp.imageZoom || 1})`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col min-w-0">
                  <h3 className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {exp.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 shrink-0 pl-[60px] sm:pl-0">
                <span className="text-[12px] text-zinc-400 dark:text-zinc-500 font-mono">
                  {exp.dates}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full border border-black/10 dark:border-white/10 text-zinc-500 dark:text-zinc-400">
                  {exp.location}
                </span>
                <div
                  className={`w-4 h-4 flex items-center justify-center text-zinc-400 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Expanded Detailed Content */}
            {isExpanded && (
              <div className="px-4 pb-6 pt-1 text-[13px] text-zinc-600 dark:text-zinc-300 space-y-4 animate-in fade-in-0 duration-200">
                {/* Bullet points */}
                <ul className="space-y-1.5 list-disc list-inside">
                  {exp.description
                    .trim()
                    .split("\n")
                    .map((line, i) => (
                      <li key={i} className="leading-relaxed">
                        {line.trim()}
                      </li>
                    ))}
                </ul>

                {/* Tech chips */}
                {exp.tech && exp.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Metrics cards if available */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    {exp.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-2.5 rounded-lg border border-black/5 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col"
                      >
                        <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                          {m.label}
                        </span>
                        <span className="text-[15px] font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional Screenshot */}
                {exp.screenshot && (
                  <div className="mt-3 rounded-lg overflow-hidden border border-black/10 dark:border-white/10">
                    <Image
                      src={exp.screenshot}
                      alt={`${exp.title} analytics`}
                      width={700}
                      height={400}
                      className="w-full object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
