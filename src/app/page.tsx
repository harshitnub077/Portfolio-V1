import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/sections/Footer";
import MarqueeText from "@/components/ui/MarqueeText";
import PageWrapper from "@/components/ui/PageWrapper";

export default function Home() {
    return (
        <PageWrapper>
            <Hero />
            <MarqueeText
                text="AI/ML ENGINEER • AGENTIC SYSTEMS • RAG • LLM ORCHESTRATION • FULL-STACK • REACT • NEXT.JS • PYTHON"
                speed={25}
            />
            <About />
            <Skills />
            <MarqueeText
                text="COGNIFY • NOTFORGOTTEN • BIDFORGE • PRODUCTION-GRADE AI SYSTEMS • 12,500+ LOC"
                speed={30}
                className="mt-8"
            />
            <Projects />
            <Achievements />
            <Footer />
        </PageWrapper>
    );
}
