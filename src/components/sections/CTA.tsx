"use client";

import dynamic from "next/dynamic";
import PillButton from "@/components/ui/PillButton";
import { site } from "@/content/site";

const Planet = dynamic(() => import("@/components/gl/Planet"), { ssr: false });
const LIGHT: [number, number, number] = [0.2, 1, 0.15];

export default function CTA() {
  return (
    <section id="contact" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Planet horizon: a huge body whose lit limb arcs across the bottom */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] aspect-square w-[280vw] -translate-x-1/2 md:top-[30%] md:w-[190vw]">
        <Planet kind="dark" light={LIGHT} atmosphere="#fb4617" distance={4.6} spin={0.008} tilt={0} scrollSpin={0.15} className="h-full w-full" />
      </div>
      <div className="gutter relative z-10 flex -translate-y-[8vh] flex-col items-center text-center">
        <p className="mono c-muted mb-8 text-[11px] uppercase tracking-[0.3em]">T-minus 00:00:10 — ready for launch</p>
        <div className="flex items-center gap-[2vw]">
          <span className="t-64 font-normal">(</span>
          <h2 className="t-48">
            Have something ambitious in
            <br />
            your orbit? Let’s launch it
            <br />
            together!
          </h2>
          <span className="t-64 font-normal">)</span>
        </div>
        <PillButton href={`mailto:${site.email}`} label="Start the project" className="mt-12" />
      </div>
    </section>
  );
}
