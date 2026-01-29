"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Plane } from "@react-three/drei";
import * as THREE from "three";

export default function WorkCard({ color = "#ffffff" }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, hovered ? 0.2 : 0, 0.1);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, hovered ? 0.2 : 0, 0.1);
        }
    });

    return (
        <Plane
            ref={meshRef}
            args={[3, 2, 32, 32]}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <MeshDistortMaterial
                color={color}
                speed={hovered ? 4 : 2}
                distort={hovered ? 0.4 : 0.1}
                roughness={0.4}
            />
        </Plane>
    );
}
