"use client";

import Marquee from "@/components/ui/Marquee";
import RollText from "@/components/ui/RollText";
import { coords, site, socials } from "@/content/site";

export default function Footer() {
  return (
    <footer className="pb-6">
      <a href={`mailto:${site.email}`} className="block py-6" data-cursor="big">
        <Marquee items={["Let’s connect"]} speed={110} />
      </a>

      <div className="gutter mt-6 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="t-14 md:col-span-4">
          <p className="uppercase">{site.location}</p>
          <p className="mono c-muted mt-1 text-[11px]">
            {coords.lat} · {coords.lon}
          </p>
          <div className="mt-3 flex items-end gap-6">
            <p className="uppercase">
              Working
              <br />
              Globally
            </p>
            <p className="c-accent">IND</p>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-6">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 t-14 c-75 sm:grid-cols-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="roll-host hover:text-white">
                  <RollText text={s.label} />
                </a>
              </li>
            ))}
          </ul>
          <a href={`mailto:${site.email}`} className="roll-host t-14 mt-6 inline-block">
            <RollText text={site.email} />
          </a>
        </div>

        <a href="#home" className="roll-host t-14 c-75 md:col-span-1 md:col-start-12 md:justify-self-end">
          <RollText text="Top ↑" />
        </a>
      </div>

      <div className="gutter mt-12 flex flex-wrap items-end justify-between gap-4">
        <p className="t-14 c-55 uppercase">
          ©{site.year} {site.name}, all rights reserved
        </p>
        <p className="t-14 c-55">Transmitted from Earth — Next.js, GSAP & WebGL</p>
      </div>
    </footer>
  );
}
