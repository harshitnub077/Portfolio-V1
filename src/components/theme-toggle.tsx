"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { switchTheme } from "@/lib/theme-switch";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[18px] w-[18px]" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        switchTheme(isDark ? "light" : "dark", setTheme, { x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }}
      className="h-[18px] w-[18px] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center justify-center cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun key="sun" className="theme-icon h-[18px] w-[18px]" />
      ) : (
        <Moon key="moon" className="theme-icon h-[18px] w-[18px]" />
      )}
    </button>
  );
}
