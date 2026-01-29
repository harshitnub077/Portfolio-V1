"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

export default function GlobalCanvas() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                eventSource={document.body}
                eventPrefix="client"
                shadows
                camera={{ position: [0, 0, 10], fov: 35 }}
                gl={{ alpha: true, antialias: true }}
            >
                <View.Port />
            </Canvas>
        </div>
    );
}
