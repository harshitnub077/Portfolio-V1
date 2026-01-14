import React from "react";
import HeroSection from "./hero";
import Hero3D from "./hero-3d";

const HeroWith3D = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Hero3D />
      <div className="relative z-10 w-full">
        <HeroSection />
      </div>
    </section>
  );
};

export default HeroWith3D;


