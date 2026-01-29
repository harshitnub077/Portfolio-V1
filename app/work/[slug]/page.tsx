import { PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import GlitchText from "@/components/v2/ui/GlitchText";
import Link from "next/link";

// Generate static params for SSG
export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = PROJECTS.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white pt-32 px-6 md:px-20">

            {/* Navigation Back */}
            <Link href="/#work" className="inline-block mb-12 font-mono text-xs text-[#d4af37] border-b border-[#d4af37] pb-1 hover:opacity-70 transition-opacity">
                &lt; RETURN_TO_ARCHIVE
            </Link>

            <header className="mb-20">
                <p className="font-mono text-white/40 text-xs tracking-widest mb-4">
                    CASE_STUDY: {project.id}
                </p>
                <h1 className="text-6xl md:text-8xl font-serif font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                    <GlitchText text={project.title} />
                </h1>
                <p className="text-xl md:text-2xl text-[#d4af37] font-mono">
                    {project.subtitle}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Sidebar Info */}
                <aside className="md:col-span-4 space-y-8">
                    <div>
                        <h3 className="font-mono text-xs text-white/40 mb-2">TAGS</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="border border-white/10 px-3 py-1 text-xs rounded-full bg-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="w-full aspect-square border border-white/10 rounded-lg flex items-center justify-center bg-white/5">
                        <p className="font-mono text-xs text-white/30">[ LIVE_DEPLOYMENT_OFFLINE ]</p>
                    </div>
                </aside>

                {/* Content Body */}
                <article className="md:col-span-8 prose prose-invert prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </article>
            </div>

            <div className="h-[20vh]" />
        </main>
    );
}
