"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import {
  Briefcase,
  Code,
  Sparkles,
  Link as LinkIcon,
  Sun,
  Moon,
  Laptop,
  Search,
  Layers,
  X,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  // Keyboard shortcut cmd+k / ctrl+k to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const runCommand = useCallback((cmd: () => void) => {
    setOpen(false);
    cmd();
  }, []);

  // Quick navigation / actions when dialog is open or using shift keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (open) {
        if (e.key === "Escape") {
          e.preventDefault();
          setOpen(false);
          return;
        }

        if (e.shiftKey) {
          const key = e.key.toLowerCase();
          if (key === "e") {
            e.preventDefault();
            runCommand(() => (window.location.hash = "#experience"));
          } else if (key === "p") {
            e.preventDefault();
            runCommand(() => (window.location.hash = "#projects"));
          } else if (key === "o") {
            e.preventDefault();
            runCommand(() => (window.location.hash = "#opensource"));
          } else if (key === "s") {
            e.preventDefault();
            runCommand(() => (window.location.hash = "#skills"));
          } else if (key === "c") {
            e.preventDefault();
            runCommand(() => navigator.clipboard.writeText(window.location.href));
          } else if (key === "t") {
            e.preventDefault();
            runCommand(() => setTheme("light"));
          } else if (key === "d") {
            e.preventDefault();
            runCommand(() => setTheme("dark"));
          } else if (key === "y") {
            e.preventDefault();
            runCommand(() => setTheme("system"));
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, runCommand, setTheme]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative group cursor-pointer transition-all duration-300 active:scale-95"
        aria-label="Open command palette"
      >
        <div className="absolute -inset-[4.5px] border border-black/5 dark:border-white/5 rounded-[9px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
        <div className="relative flex items-center gap-1.5 px-3 py-1 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#09090b] dark:hover:bg-[#121214] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-[5px] text-[11px] font-medium transition-all duration-300 border border-black/5 dark:border-white/5 shadow-sm shadow-black/20 dark:shadow-lg dark:shadow-black/80 font-mono">
          <span className="leading-none mt-[0.5px]">⌘</span>
          <span className="leading-none mt-[0.5px]">K</span>
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in-0 duration-200"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white dark:bg-[#09090b] border border-black/10 dark:border-white/10 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Navigation Menu
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Quickly jump to sections or actions
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <Command className="w-full">
              <div className="flex items-center border-b border-zinc-100 dark:border-zinc-800 px-3">
                <Search className="size-4 shrink-0 opacity-50 mr-2 text-zinc-400" />
                <Command.Input
                  placeholder="Search for actions..."
                  className="w-full bg-transparent py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 outline-none"
                  autoFocus
                />
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-py-1">
                <Command.Empty className="py-6 text-center text-sm text-zinc-500">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Sections"
                  className="text-xs font-medium text-zinc-400 px-2 py-1.5 uppercase tracking-wider"
                >
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => (window.location.hash = "#experience"))
                    }
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-zinc-500" />
                      <span>Experience</span>
                    </div>
                    <span className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                      shift + E
                    </span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() =>
                      runCommand(() => (window.location.hash = "#projects"))
                    }
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <Code className="w-4 h-4 text-zinc-500" />
                      <span>Projects</span>
                    </div>
                    <span className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                      shift + P
                    </span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() =>
                      runCommand(() => (window.location.hash = "#opensource"))
                    }
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <SiGithub className="w-4 h-4 text-zinc-500" />
                      <span>Open Source</span>
                    </div>
                    <span className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                      shift + O
                    </span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() =>
                      runCommand(() => (window.location.hash = "#skills"))
                    }
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-zinc-500" />
                      <span>Skills</span>
                    </div>
                    <span className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                      shift + S
                    </span>
                  </Command.Item>
                </Command.Group>

                <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-1" />

                <Command.Group
                  heading="General"
                  className="text-xs font-medium text-zinc-400 px-2 py-1.5 uppercase tracking-wider"
                >
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => {
                        navigator.clipboard.writeText(window.location.href);
                      })
                    }
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkIcon className="w-4 h-4 text-zinc-500" />
                      <span>Copy Link</span>
                    </div>
                    <span className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                      shift + C
                    </span>
                  </Command.Item>
                </Command.Group>

                <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-1" />

                <Command.Group
                  heading="Theme"
                  className="text-xs font-medium text-zinc-400 px-2 py-1.5 uppercase tracking-wider"
                >
                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("light"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sun className="w-4 h-4 text-zinc-500" />
                      <span>Light Mode</span>
                    </div>
                    <span className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                      shift + T
                    </span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("dark"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <Moon className="w-4 h-4 text-zinc-500" />
                      <span>Dark Mode</span>
                    </div>
                    <span className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                      shift + D
                    </span>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("system"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-2.5">
                      <Laptop className="w-4 h-4 text-zinc-500" />
                      <span>System</span>
                    </div>
                    <span className="font-mono text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                      shift + Y
                    </span>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="flex items-center justify-between px-4 py-2.5 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-[11px] text-zinc-500">
                <div className="flex items-center gap-3">
                  <span>Navigation: ↑ ↓</span>
                  <span>Select: ↵</span>
                </div>
                <span>ESC to close</span>
              </div>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
