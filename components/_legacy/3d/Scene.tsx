"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape({ position, color }: { position: [number, number, number], color: string }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.5}
                    roughness={0}
                    metalness={1}
                    wireframe
                />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FloatingShape position={[-3, 2, 0]} color="#3b82f6" />
                <FloatingShape position={[3, -2, -2]} color="#ffffff" />
                <FloatingShape position={[0, 4, -5]} color="#555555" />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
