import React, { useState } from "react";
import CinematicLayout from "@/components/common/cinematic-layout";
import Intro from "@/components/home/intro";
import HeroSection from "@/components/home/hero";
import Showcase from "@/components/home/showcase";
import Manifesto from "@/components/home/manifesto";
import TechMatrix from "@/components/home/tech-matrix";
import Contact from "@/components/home/contact";
import AboutSection from "@/components/home/about";
import Experience from "@/components/home/experience";


export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  return (
    <CinematicLayout>
      {!introComplete && <Intro onComplete={handleIntroComplete} />}

      {introComplete && (
        <>
          <HeroSection />
          <Manifesto />
          <AboutSection />
          <Experience />
          <Showcase />
          <TechMatrix />
          <Contact />
        </>
      )}
    </CinematicLayout>
  );
}
