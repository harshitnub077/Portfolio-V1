import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Hero />
      <About />
      <Stats />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}
