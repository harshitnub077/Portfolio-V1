import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import Quote1 from "@/components/sections/Quote1";
import Quote2 from "@/components/sections/Quote2";
import Effects from "@/components/ui/Effects";
import PageWrapper from "@/components/ui/PageWrapper";

// Crazy Transitions
import CrazyScrollTransitions from "@/components/ui/CrazyScrollTransitions";
import SectionTransition from "@/components/ui/SectionTransition";
import SectionTransition2 from "@/components/ui/SectionTransition2";
import SectionTransition3 from "@/components/ui/SectionTransition3";

export default function Home() {
  return (
    <PageWrapper>
      <Effects />
      
      {/* Global Orchestrator mapping crazy GSAP entrances to all <section> elements */}
      <CrazyScrollTransitions /> 
      
      <Hero />
      <SectionTransition /> {/* Acid Sweep */}

      <Quote1 />
      <About />
      <SectionTransition2 /> {/* Venetian Blinds stagger */}

      <Stats />
      <Quote2 />
      <SectionTransition3 /> {/* Vertical Comb down */}

      <TechStack />
      <Projects />
      <Footer />
    </PageWrapper>
  );
}
