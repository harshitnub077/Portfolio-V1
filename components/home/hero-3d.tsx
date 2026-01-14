/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

const NeuralGrid = () => {
    const { mouse, viewport } = useThree();
    const groupRef = useRef<THREE.Group>(null!);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.1, 0.1);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.1, 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            {/* Horizontal Lines */}
            {Array.from({ length: 20 }).map((_, i) => (
                <Line
                    key={`h-${i}`}
                    points={[[-5, (i - 10) * 0.5, 0], [5, (i - 10) * 0.5, 0]]}
                    color="#ffffff"
                    lineWidth={0.5}
                    transparent
                    opacity={0.05}
                />
            ))}
            {/* Vertical Lines */}
            {Array.from({ length: 20 }).map((_, i) => (
                <Line
                    key={`v-${i}`}
                    points={[[(i - 10) * 0.5, -5, 0], [(i - 10) * 0.5, 5, 0]]}
                    color="#ffffff"
                    lineWidth={0.5}
                    transparent
                    opacity={0.05}
                />
            ))}
        </group>
    );
};

const ParticleField = (props: any) => {
    const ref = useRef<THREE.Points>(null!);
    const { mouse } = useThree();

    const sphere = useMemo(() => {
        const temp = new Float32Array(3000 * 3);
        for (let i = 0; i < 3000; i++) {
            temp[i * 3] = (Math.random() - 0.5) * 15;
            temp[i * 3 + 1] = (Math.random() - 0.5) * 15;
            temp[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return temp;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.03;
            ref.current.rotation.x += delta * 0.02;
            ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, mouse.x * 0.3, 0.1);
            ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, mouse.y * 0.3, 0.1);
        }
    });

    return (
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
            <PointMaterial
                transparent
                color="#00FFC2"
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#00FFC2" />
                <NeuralGrid />
                <ParticleField />
            </Canvas>
        </div>
    );
};

export default Hero3D;
