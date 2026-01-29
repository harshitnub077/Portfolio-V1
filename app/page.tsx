import Hero from "@/components/v2/sections/Hero";
import Work from "@/components/v2/sections/Work";
import About from "@/components/v2/sections/About";
import Contact from "@/components/v2/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Work />
      <About />
      <Contact />
      <div className="h-[20vh]" /> {/* Footer Spacer */}
    </main>
  );
}
