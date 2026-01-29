"use client";

import { View } from "@react-three/drei";
import WorkCard from "../scene/WorkCard";
import GlitchText from "@/components/v2/ui/GlitchText";
import { PROJECTS } from "@/data/projects";
import Link from "next/link";

export default function Work() {
    return (
        <section id="work" className="min-h-screen py-32 px-4 md:px-12 relative z-10">

            <div className="mb-20">
                <h2 className="font-mono text-[#d4af37] text-xs tracking-[0.5em] mb-4">
                    [ ARTIFACT_GALLERY ]
                </h2>
                <p className="text-white/50 max-w-md font-mono text-sm leading-relaxed">
                    Collection of deployed systems and experimental algorithms.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {PROJECTS.map((project) => (
                    <Link key={project.id} href={`/work/${project.slug}`} className="group relative block">
                        {/* 3D Viewport */}
                        <div className="h-[300px] w-full bg-white/5 rounded-lg overflow-hidden relative mb-6">
                            <View className="absolute inset-0 w-full h-full">
                                <WorkCard color={project.color} />
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[5, 5, 5]} intensity={1} />
                            </View>

                            {/* Overlay Content */}
                            <div className="absolute top-4 left-4 font-mono text-xs text-white/30">
                                ID_{project.id}
                            </div>
                        </div>

                        {/* Meta */}
                        <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                            <GlitchText text={project.title} />
                        </h3>
                        <p className="font-mono text-xs text-white/50">
                            {project.description}
                        </p>
                    </Link>
                ))}
            </div>

        </section>
    );
}
