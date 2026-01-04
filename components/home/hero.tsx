// Copyright Harshit Kudhial 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaharshit/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import React, { MutableRefObject, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import Button, { ButtonTypes } from "../common/button";
import MagneticButton from "../common/magnetic-button";
import FluidBackground from "./fluid-background";
import HeroImage from "./hero-image";
import { useScrambleText } from "../../hooks/useScrambleText";

const HERO_STYLES = {
  SECTION:
    "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
  CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
  SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
  BG_WRAPPER:
    "absolute hero-bg right-0 md:bottom-0 bottom-8 -z-1 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
};

const HeroSection = React.memo(() => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): GSAPTimeline => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

    return revealTl;
  };

  useEffect(() => {
    initRevealAnimation(targetSection);

    gsap.to(".floating", {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
    gsap.to(".floating-delayed", {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
      delay: 0.5,
    });
    gsap.to(".floating-mid", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
      delay: 1,
    });

  }, [targetSection]);

  const renderBackgroundImage = (): React.ReactNode => (
    <div className={HERO_STYLES.BG_WRAPPER} style={{ maxHeight: "650px" }}>
      <HeroImage />
    </div>
  );

  const renderSocialLinks = (): React.ReactNode =>
    Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className={HERO_STYLES.SOCIAL_LINK}
        rel="noreferrer"
        target="_blank"
      >
        <MagneticButton className="p-2">
          <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
        </MagneticButton>
      </a>
    ));

  const { displayText: helloText, scramble: scrambleHello, stopScramble: stopHello } = useScrambleText("Hello 👋🏻");
  const { displayText: nameText, scramble: scrambleName, stopScramble: stopName } = useScrambleText("I am Harshit Kudhial");

  const renderHeroContent = (): React.ReactNode => (
    <div className={HERO_STYLES.CONTENT}>
      <div className="md:mb-8 mb-4">
        <h2
          className="text-5xl seq font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-cyan cursor-none"
          onMouseEnter={scrambleHello}
          onMouseLeave={stopHello}
        >
          {helloText}
        </h2>
        <h1
          className="text-4xl md:text-6xl seq font-extrabold mt-2 tracking-tight cursor-none"
          onMouseEnter={scrambleName}
          onMouseLeave={stopName}
        >
          {nameText}
        </h1>
      </div>

      <div className="flex seq mb-8 gap-4">{renderSocialLinks()}</div>
      <div className="flex seq gap-6 mt-4">
        <MagneticButton
          classes="px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-purple-500/20"
          type={ButtonTypes.PRIMARY}
          name="My Resume"
          href="/Harshit_Resume.pdf"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        >
          My Resume
        </MagneticButton>
        <MagneticButton
          classes="px-10 py-4 rounded-full font-bold text-lg border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white transition-all shadow-lg shadow-purple-500/10"
          type={ButtonTypes.OUTLINE}
          name="Connect"
          href={SOCIAL_LINKS.linkedin}
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        >
          Connect
        </MagneticButton>
      </div>
    </div>
  );

  const { ref: heroSectionRef } = MENULINKS[0];

  return (
    <section
      className="w-full flex flex-col justify-center items-center min-h-screen relative overflow-hidden"
      id={heroSectionRef}
      ref={targetSection}
      style={{ opacity: 0 }}
    >
      <FluidBackground />

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-7xl px-6">
        <h2
          className="text-xl md:text-3xl font-light tracking-[0.5em] text-gray-400 mb-4 seq"
        >
          DIGITAL ALCHEMIST
        </h2>

        <div className="relative">
          <h1
            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 seq mix-blend-overlay"
            onMouseEnter={scrambleName}
            onMouseLeave={stopName}
          >
            {nameText || "EXPERIENCE"}
          </h1>
          <h1
            className="absolute top-0 left-0 text-[12vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 opacity-30 blur-lg seq animate-pulse"
          >
            {nameText || "EXPERIENCE"}
          </h1>
        </div>

        <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-2xl font-light tracking-wide seq">
          Crafting <span className="text-white font-medium">award-winning</span> digital experiences from the void.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-12 seq">
          <MagneticButton
            classes="px-12 py-5 rounded-full font-bold text-lg bg-white text-black hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
            type={ButtonTypes.PRIMARY}
            name="Explore Works"
            href={`#${MENULINKS[1].ref}`}
          >
            Explore Works
          </MagneticButton>
          <MagneticButton
            classes="px-12 py-5 rounded-full font-bold text-lg border border-white/20 text-white hover:bg-white/10 backdrop-blur-md transition-all"
            type={ButtonTypes.OUTLINE}
            name="Connect"
            href={SOCIAL_LINKS.linkedin}
            otherProps={{ target: "_blank", rel: "noreferrer" }}
          >
            Connect
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll to enter</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
});

HeroSection.displayName = "LandingHero";

export default HeroSection;
