"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DecodeText } from "@/components/fx/decode-text";

const navItems = [
  { n: "01", name: "Experience", id: "experience" },
  { n: "02", name: "Education", id: "education" },
  { n: "03", name: "Projects", id: "projects" },
  { n: "04", name: "GitHub", id: "github" },
  { n: "05", name: "Open Source", id: "opensource" },
  { n: "06", name: "Skills", id: "skills" },
];

export function RightNavbar() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none hidden lg:block"
      style={{ width: "calc(100vw - var(--removed-body-scroll-bar-size, 0px))" }}
    >
      <nav
        aria-label="Sections"
        className="absolute top-[22vh] left-[calc(69%+32px)] pointer-events-auto flex flex-col gap-4 mt-2"
      >
        <h3 className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 dark:text-zinc-600 uppercase mb-1">
          Index
        </h3>
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`text-[12px] font-medium tracking-[0.05em] transition-colors duration-300 ease-out flex items-center gap-2.5 ${
                isActive
                  ? "text-zinc-800 dark:text-zinc-200"
                  : "text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400"
              }`}
            >
              <span
                className={`h-[1.5px] transition-[width,background-color] duration-300 ease-out ${
                  isActive ? "w-3 bg-ink" : "w-0 bg-transparent"
                }`}
              />
              <span
                className={`font-mono text-[10px] tabular-nums tracking-normal transition-colors duration-300 ${
                  isActive ? "text-ink" : ""
                }`}
              >
                {item.n}
              </span>
              <DecodeText text={item.name} />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
