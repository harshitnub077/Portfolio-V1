import React, { useState } from "react";
import Head from "next/head";
import { METADATA } from "../constants";
import Intro from "@/components/home/intro";
import HeroWith3D from "@/components/home/hero-with-3d";
import AboutSection from "@/components/home/about";
import Showcase from "@/components/home/showcase";
import TechMatrix from "@/components/home/tech-matrix";
import Photography from "@/components/home/photography";
import Contact from "@/components/home/contact";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
        <meta name="description" content={METADATA.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[#0a0a0a] min-h-screen text-white">
        {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}

        {introComplete && (
          <>
            <HeroWith3D />
            <Showcase />
            <TechMatrix />
            <Photography />
            <AboutSection />
            <Contact />
          </>
        )}
      </div>
    </>
  );
}
