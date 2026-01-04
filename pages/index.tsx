import React, { useState } from "react";
import CinematicLayout from "@/components/common/cinematic-layout";
import Intro from "@/components/home/intro";
import Showcase from "@/components/home/showcase";
import Manifesto from "@/components/home/manifesto";
import TechMatrix from "@/components/home/tech-matrix";
import Contact from "@/components/home/contact";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <CinematicLayout>
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}

      {introComplete && (
        <>
          <header className="fixed top-6 left-0 w-full flex justify-between px-6 md:px-12 z-50 mix-blend-difference pointer-events-none">
            <span className="font-bold tracking-tighter text-xl text-white">HARSHIT.ORIGIN</span>
            <span className="font-mono text-xs animate-pulse text-white">SYSTEM_ONLINE</span>
          </header>

          <Manifesto />
          <Showcase />
          <TechMatrix />
          <Contact />
        </>
      )}
    </CinematicLayout>
  );
}
