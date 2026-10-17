"use client";

import SplitReveal from "@/components/ui/SplitReveal";
import { skills } from "@/content/site";

export default function Skills() {
  return (
    <section className="gutter py-[16vh]">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <SplitReveal className="t-64" lines={["Engineering", "skill sets"]} />
            <p className="t-15 c-muted mt-10">(Stack® — 0{skills.groups.length})</p>
            <p className="t-18 c-75 mt-3 max-w-[380px] leading-[1.25]">{skills.intro}</p>
          </div>
        </div>

        <div className="space-y-16 md:col-span-8 md:col-start-5">
          {skills.groups.map((g) => (
            <div key={g.title}>
              <div className="mb-5 flex items-baseline gap-3">
                <h3 className="t-28">{g.title}</h3>
                <span className="t-18 c-55">({String(g.items.length).padStart(2, "0")})</span>
              </div>
              <ul>
                {g.items.map((it, i) => (
                  <li
                    key={it}
                    className="group grid grid-cols-[1fr_auto] border-t border-[var(--line)] py-[16px] t-18 c-55 transition-colors duration-300 last:border-b hover:text-white"
                  >
                    <span className="transition-transform duration-500 group-hover:translate-x-3">{it}</span>
                    <span>{i + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
