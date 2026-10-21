"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlueprintGuides } from "@/components/blueprint/blueprint-guides";
import { HeaderBanner } from "@/components/blueprint/header-banner";
import { PageMotion } from "@/components/fx/page-motion";
import { CommandMenu } from "@/components/command-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteProfile } from "@/content/portfolio-data";
import { ArrowLeft, Check, Send } from "lucide-react";

const EMAIL =
  siteProfile.socials.find((s) => s.icon === "mail")?.href.replace("mailto:", "") ??
  "harshitkudhial@gmail.com";

export default function ContactPage() {
  const [opened, setOpened] = useState(false);

  // No backend: hand the message to the visitor's own mail app, ready to send.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name}${from ? ` (${from})` : ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

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
            <label
              htmlFor="contact-name"
              className="text-[11px] font-bold tracking-[0.15em] text-zinc-500 uppercase"
            >
              Full Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              required
              placeholder="Your name"
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-[14px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-ink transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-email"
              className="text-[11px] font-bold tracking-[0.15em] text-zinc-500 uppercase"
            >
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-[14px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-ink transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="text-[11px] font-bold tracking-[0.15em] text-zinc-500 uppercase"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about the role, project or idea."
              className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-[14px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-ink transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700 resize-none"
            />
          </div>

          <div className="flex justify-center w-full pt-4">
            <div className="relative group">
              <div className="absolute -inset-[5px] border border-black/5 dark:border-white/5 rounded-[11px] pointer-events-none transition-colors duration-300 group-hover:border-black/10 dark:group-hover:border-white/10" />
              <button type="submit" className="flight-button">
                <span className="flight-defaultText">
                  {opened ? (
                    <span className="inline-flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                      <Check className="w-4 h-4" /> Opened in your mail app
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2">
                      Send message
                      <Send className="w-3.5 h-3.5" />
                    </span>
                  )}
                </span>
              </button>
            </div>
          </div>

          <p className="text-center text-[12px] text-zinc-500">
            Opens your email app with the message ready to send. Or write to{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-zinc-800 dark:text-zinc-200 underline decoration-ink/40 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              {EMAIL}
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
