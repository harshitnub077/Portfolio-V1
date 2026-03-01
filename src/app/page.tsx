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

export default function Home() {
  return (
    <PageWrapper>
      <Effects />
      <Hero />
      <Quote1 />
      <About />
      <Stats />
      <Quote2 />
      <TechStack />
      <Projects />
      <Footer />
    </PageWrapper>
  );
}
