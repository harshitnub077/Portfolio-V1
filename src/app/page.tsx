import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import PageWrapper from "@/components/ui/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Work />
      <About />
      <Footer />
    </PageWrapper>
  );
}
