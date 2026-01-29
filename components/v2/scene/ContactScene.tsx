"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function ContactScene() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;

            // Pulse scale
            const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <Icosahedron
            ref={meshRef}
            args={[1.5, 0]}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <MeshDistortMaterial
                color={hovered ? "#d4af37" : "#1a1a1a"}
                emissive="#000000"
                wireframe={true}
                distort={hovered ? 0.3 : 0}
                speed={2}
                roughness={0}
                metalness={1}
            />
        </Icosahedron>
    );
}
