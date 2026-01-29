"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function AboutScene() {
    const pointsRef = useRef<THREE.Points>(null);

    // Generate DNA Helix points
    const particlesPosition = useMemo(() => {
        const count = 200; // Number of particles per strand
        const positions = new Float32Array(count * 2 * 3); // 2 strands, 3 coords

        for (let i = 0; i < count; i++) {
            const t = i / count;
            const angle = t * Math.PI * 8; // 4 turns

            // Strand 1
            positions[i * 3] = Math.cos(angle) * 1.5;
            positions[i * 3 + 1] = (t - 0.5) * 8; // vertical spread
            positions[i * 3 + 2] = Math.sin(angle) * 1.5;

            // Strand 2 (Offset by PI)
            const i2 = i + count;
            positions[i2 * 3] = Math.cos(angle + Math.PI) * 1.5;
            positions[i2 * 3 + 1] = (t - 0.5) * 8;
            positions[i2 * 3 + 2] = Math.sin(angle + Math.PI) * 1.5;
        }

        return positions;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <Points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                    args={[particlesPosition, 3]}
                />
            </bufferGeometry>
            <PointMaterial
                transparent
                vertexColors={false}
                color="#d4af37"
                size={0.15}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    );
}
