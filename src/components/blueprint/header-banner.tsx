import React from "react";
import Image from "next/image";
import { BannerParticles } from "@/components/banner-particles";
import { CurrentTime } from "@/components/current-time";

/** The samurai field banner at the head of every page, with petals and the clock. */
export function HeaderBanner() {
  return (
    <div data-hero="banner" className="absolute left-0 right-0 md:left-[30%] md:right-[30%] top-0 h-[22vh] -z-0 pointer-events-auto overflow-hidden bg-white dark:bg-black shadow-[0_4px_12px_rgba(2,6,23,0.04)] dark:shadow-[0_4px_12px_rgba(2,6,23,0.10)]">
      <Image
        src="/banner-light.jpg"
        alt="Samurai in flower field"
        fill
        priority
        sizes="(min-width: 768px) 40vw, 100vw"
        className="object-cover object-center dark:hidden"
      />
      <Image
        src="/banner-dark.jpg"
        alt="Samurai in flower field dark mode"
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
  );
}
