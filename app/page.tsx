import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] overflow-hidden">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-neutral-600 text-sm border-t border-white/5 mt-20">
        <p>© {new Date().getFullYear()} Harshit Kudhial. Built with Next.js & GSAP.</p>
      </footer>
    </main>
  );
}
