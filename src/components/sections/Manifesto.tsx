"use client";

import SplitReveal from "@/components/ui/SplitReveal";
import Marquee from "@/components/ui/Marquee";
import { achievements, education } from "@/content/site";

export default function Manifesto() {
  return (
    <section className="pb-[10vh] pt-[16vh]">
      <div className="gutter grid grid-cols-1 gap-10 md:grid-cols-12">
        <p className="t-15 c-muted md:col-span-3">(Manifesto)</p>
        <SplitReveal
          className="t-48 md:col-span-8 md:col-start-4"
          lines={["Most engineers make models work.", "I make them hold up — under load,", "in production, at 3 a.m."]}
        />
      </div>

      <div className="gutter mt-20 grid grid-cols-1 gap-10 md:grid-cols-12">
        <p className="t-15 c-muted md:col-span-3">(Recognition)</p>
        <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 md:col-span-8 md:col-start-4">
          {achievements.map((a, i) => (
            <li key={a} className="flex justify-between border-t border-[var(--line)] py-4 t-18 c-75">
              <span>{a}</span>
              <span className="c-55">({String(i + 1).padStart(2, "0")})</span>
            </li>
          ))}
        </ul>
        <p className="t-15 c-muted md:col-span-3">(Education)</p>
        <div className="md:col-span-8 md:col-start-4">
          <p className="t-28">{education.school}</p>
          <p className="t-15 c-muted mt-2">
            {education.degree} · {education.when}
          </p>
        </div>
      </div>

      <div className="mt-[14vh] bg-[var(--accent)] py-4 text-white">
        <Marquee items={["LLMs", "RAG", "Agentic AI", "MLOps", "Open Source"]} speed={70} reverse />
      </div>
    </section>
  );
}
