"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BannerParticles } from "@/components/banner-particles";
import { CurrentTime } from "@/components/current-time";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteProfile } from "@/content/portfolio-data";
import { ArrowLeft, Check } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate flight animation & submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black relative overflow-x-hidden transition-colors duration-300">
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

      {/* Top Banner */}
      <div className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] pointer-events-auto overflow-hidden bg-white dark:bg-black shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)]">
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
          <Link href="/" className="flex items-center gap-4 sm:gap-5 group cursor-pointer">
            <div className="relative p-[3px] rounded-[6px] sm:rounded-[8px] border-[1.5px] border-black/30 dark:border-white/[0.15] shrink-0">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[3px] sm:rounded-[5px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={siteProfile.avatar}
                  alt={siteProfile.name}
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
          </Link>

          <div className="flex items-start justify-end gap-2 sm:gap-3 h-20 sm:h-24 py-1">
            <CommandMenu />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-0 mr-0 md:ml-[30%] md:mr-[30%] pt-[calc(22vh+112px)] pb-16 px-8 md:px-4 flex flex-col z-10 relative">
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to portfolio</span>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[0.15em] text-zinc-400 dark:text-zinc-600 uppercase">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Tyler Durden"
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-[14px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[0.15em] text-zinc-400 dark:text-zinc-600 uppercase">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="tyler@projectmayhem.com"
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-[14px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[0.15em] text-zinc-400 dark:text-zinc-600 uppercase">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="You're crazy good, never change."
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-[14px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700 resize-none"
            />
          </div>

          <div className="flex justify-center w-full pt-4">
            <div className="relative group">
              <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
              <button
                type="submit"
                disabled={submitting || submitted}
                className="flight-button"
              >
                {submitted ? (
                  <span className="flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <Check className="w-4 h-4" /> Message Sent!
                  </span>
                ) : submitting ? (
                  <span>Sending...</span>
                ) : (
                  <span className="flight-defaultText flex items-center justify-center gap-2">
                    <span>Send Message</span>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
