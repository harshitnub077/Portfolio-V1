"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiPython, SiTypescript, SiJavascript, SiPostgresql, SiMongodb, SiGit, SiDocker, SiFigma } from "react-icons/si";

const TECH_ITEMS = [
    { icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
    { icon: SiReact, color: "#61DAFB", label: "React" },
    { icon: SiTailwindcss, color: "#38B2AC", label: "Tailwind" },
    { icon: SiNodedotjs, color: "#339933", label: "Node" },
    { icon: SiPython, color: "#3776AB", label: "Python" },
    { icon: SiTypescript, color: "#3178C6", label: "TS" },
    { icon: SiJavascript, color: "#F7DF1E", label: "JS" },
    { icon: SiPostgresql, color: "#336791", label: "Postgres" },
    { icon: SiMongodb, color: "#47A248", label: "Mongo" },
    { icon: SiGit, color: "#F05032", label: "Git" },
    { icon: SiDocker, color: "#2496ED", label: "Docker" },
    { icon: SiFigma, color: "#F24E1E", label: "Figma" },
];

export default function PhysicsTech() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Mouse = Matter.Mouse;
        const MouseConstraint = Matter.MouseConstraint;

        const engine = Engine.create();
        engineRef.current = engine;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: sceneRef.current.clientWidth,
                height: sceneRef.current.clientHeight,
                wireframes: false,
                background: "transparent",
            },
        });

        const boundaries = [
            // Floor
            Bodies.rectangle(
                sceneRef.current.clientWidth / 2,
                sceneRef.current.clientHeight + 30,
                sceneRef.current.clientWidth,
                60,
                { isStatic: true, render: { visible: false } }
            ),
            // Walls
            Bodies.rectangle(
                -30,
                sceneRef.current.clientHeight / 2,
                60,
                sceneRef.current.clientHeight,
                { isStatic: true, render: { visible: false } }
            ),
            Bodies.rectangle(
                sceneRef.current.clientWidth + 30,
                sceneRef.current.clientHeight / 2,
                60,
                sceneRef.current.clientHeight,
                { isStatic: true, render: { visible: false } }
            ),
        ];

        const techBodies = TECH_ITEMS.map((tech) => {
            return Bodies.circle(
                Math.random() * sceneRef.current!.clientWidth,
                -Math.random() * 500,
                40, // radius
                {
                    restitution: 0.8,
                    render: {
                        fillStyle: "#111",
                        strokeStyle: tech.color,
                        lineWidth: 2,
                        // We can't easily render react-icons in canvas directly without custom logic
                        // For MVP, we use colored circles. Ideally we'd map textures or use HTML constraints.
                    },
                    label: tech.label
                }
            );
        });

        World.add(engine.world, [...boundaries, ...techBodies]);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        World.add(engine.world, mouseConstraint);
        render.mouse = mouse;

        Engine.run(engine);
        Render.run(render);

        return () => {
            Render.stop(render);
            World.clear(engine.world, false);
            Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    return (
        <div className="relative w-full h-[60vh] bg-black overflow-hidden">
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
                <p className="font-mono text-[#d4af37] text-sm tracking-widest">[ GRAVITY_SIMULATION ]</p>
            </div>
            {/* The canvas renders here */}
            <div ref={sceneRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Overlay for "Crazy" visual - DOM elements that follow bodies could go here for actual icons */}
            <div className="absolute bottom-6 right-6 pointer-events-none text-right">
                <p className="font-mono text-neutral-500 text-xs">INTERACT WITH THE STACK</p>
            </div>
        </div>
    );
}
