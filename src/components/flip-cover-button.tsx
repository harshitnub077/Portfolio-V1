"use client";

import React from "react";

interface FlipCoverButtonProps {
  href: string;
}

export function FlipCoverButton({ href }: FlipCoverButtonProps) {
  return (
    <section className="flip-cover-section">
      {/* Sizer clone to set container width & height */}
      <div
        className="group relative block rounded-[4px] text-center text-[13px] font-medium tracking-tight px-3 py-1.5 !text-[12px] opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5">
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="whitespace-nowrap">Book an intro call</span>
        </div>
      </div>

      {/* Button underneath */}
      <div className="flip-cover-button">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-black dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 rounded-[4px] text-[12px] font-semibold tracking-wide whitespace-nowrap shadow-sm border border-white/10 dark:border-black/10 transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>cal.com</span>
        </a>
      </div>

      {/* 3D Flipping cover */}
      <div className="flip-cover-cover" aria-hidden="true">
        <div className="flip-cover-innie">
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-white whitespace-nowrap">
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>cal.com</span>
          </div>
        </div>
        <div className="flip-cover-spine" />
        <div className="flip-cover-outie">
          <div className="group relative rounded-[4px] text-center text-[13px] font-medium tracking-tight text-neutral-50 dark:text-neutral-950 w-full h-full flex items-center justify-center px-3 py-1.5 !text-[12px] whitespace-nowrap pointer-events-none">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-[4px] overflow-hidden transition-colors duration-200 bg-[#18181b] group-hover:bg-[#27272a] dark:bg-white dark:group-hover:bg-neutral-100 border border-black/10 dark:border-white/10"
            >
              <span
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  background:
                    "linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255) 0) 100%)",
                }}
              />
              <span
                className="absolute inset-0 opacity-[0.32]"
                style={{
                  background:
                    "radial-gradient(65.62% 65.62% at 50% 100%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
                }}
              />
            </span>
            <span className="relative">
              <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="whitespace-nowrap">Book an intro call</span>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="flip-cover-shadow" aria-hidden="true" />
    </section>
  );
}
