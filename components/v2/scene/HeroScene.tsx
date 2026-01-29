"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (sphereRef.current) {
            // Subtle rotation
            sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#d4af37" />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4c1d95" />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
                    <MeshDistortMaterial
                        color="#000000"
                        emissive="#1a1a1a"
                        factor={0.6} // Distortion amount
                        speed={2}    // Distortion speed
                        roughness={0.2}
                        metalness={0.9}
                        wireframe={false}
                    />
                </Sphere>
            </Float>

            {/* Particle dust could be added here */}
        </>
    );
}
