"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBackground3D() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const mount = mountRef.current;
        const w = mount.clientWidth;
        const h = mount.clientHeight;

        // ── Scene ──────────────────────────────────────────────────────
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000); // Pitch black background

        const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 200);
        camera.position.set(0, 14, 32);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(w, h);
        mount.appendChild(renderer.domElement);

        // ── Particle Wave Grid ──────────────────────────────────────────
        const COLS = 120;
        const ROWS = 120;
        const SPACING = 1.0;
        const count = COLS * ROWS;

        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const accentColor = new THREE.Color(0xdfff00); // Neon Acid Green
        const baseColor = new THREE.Color(0xffffff);   // white dots for contrast
        const midColor = new THREE.Color(0x888888);    // gray mid-tone

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                const idx = i * COLS + j;
                positions[idx * 3 + 0] = (j - COLS / 2) * SPACING;
                positions[idx * 3 + 1] = 0;
                positions[idx * 3 + 2] = (i - ROWS / 2) * SPACING;

                // Accent dots at grid crossings: every 8th row/col
                const isAccent = (i % 8 === 0 && j % 8 === 0);
                const c = isAccent ? accentColor : (Math.random() > 0.97 ? midColor : baseColor);
                colors[idx * 3 + 0] = c.r;
                colors[idx * 3 + 1] = c.g;
                colors[idx * 3 + 2] = c.b;
                sizes[idx] = isAccent ? 4.5 : 1.8 + Math.random() * 1.2;
            }
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

        // Custom shader for crisp, size-controllable points
        const mat = new THREE.ShaderMaterial({
            uniforms: { time: { value: 0 } },
            vertexShader: `
                attribute float size;
                attribute vec3 color;
                varying vec3 vColor;
                void main() {
                    vColor = color;
                    gl_PointSize = size;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                void main() {
                    float d = length(gl_PointCoord - vec2(0.5));
                    if (d > 0.5) discard;
                    gl_FragColor = vec4(vColor, 1.0);
                }
            `,
            vertexColors: false,
            transparent: false,
        });

        const particles = new THREE.Points(geo, mat);
        scene.add(particles);

        // ── Thin horizontal lines (X-axis stripes) ─────────────────────
        for (let i = 0; i < ROWS; i += 8) {
            const y = (i - ROWS / 2) * SPACING;
            const pts = [
                new THREE.Vector3(-(COLS / 2) * SPACING, 0, y),
                new THREE.Vector3((COLS / 2) * SPACING, 0, y),
            ];
            const lGeo = new THREE.BufferGeometry().setFromPoints(pts);
            const lMat = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.1, transparent: true });
            scene.add(new THREE.Line(lGeo, lMat));
        }
        for (let j = 0; j < COLS; j += 8) {
            const x = (j - COLS / 2) * SPACING;
            const pts = [
                new THREE.Vector3(x, 0, -(ROWS / 2) * SPACING),
                new THREE.Vector3(x, 0, (ROWS / 2) * SPACING),
            ];
            const lGeo = new THREE.BufferGeometry().setFromPoints(pts);
            const lMat = new THREE.LineBasicMaterial({ color: 0xdfff00, opacity: 0.3, transparent: true });
            scene.add(new THREE.Line(lGeo, lMat));
        }

        // ── Mouse Parallax ─────────────────────────────────────────────
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const onMouseMove = (e: MouseEvent) => {
            targetX = (e.clientX / window.innerWidth - 0.5) * 2;
            targetY = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener("mousemove", onMouseMove);

        // ── Resize ─────────────────────────────────────────────────────
        const onResize = () => {
            if (!mount) return;
            const nw = mount.clientWidth;
            const nh = mount.clientHeight;
            camera.aspect = nw / nh;
            camera.updateProjectionMatrix();
            renderer.setSize(nw, nh);
        };
        window.addEventListener("resize", onResize);

        // ── Animation Loop ──────────────────────────────────────────────
        let animId: number;
        let time = 0;

        const animate = () => {
            animId = requestAnimationFrame(animate);
            time += 0.012;

            // Smooth mouse follow
            currentX += (targetX - currentX) * 0.04;
            currentY += (targetY - currentY) * 0.04;

            // Rotate entire grid subtly with mouse
            particles.rotation.x = currentY * 0.18 + 0.55; // base tilt forward
            particles.rotation.y = currentX * 0.25;

            // Wave: update Y positions per particle
            const posAttr = geo.attributes.position as THREE.BufferAttribute;
            for (let i = 0; i < ROWS; i++) {
                for (let j = 0; j < COLS; j++) {
                    const idx = i * COLS + j;
                    const x = (j - COLS / 2) * SPACING;
                    const z = (i - ROWS / 2) * SPACING;

                    // Compound wave: diagonal + radial
                    const dist = Math.sqrt(x * x + z * z) * 0.25;
                    const wave1 = Math.sin(x * 0.35 + time) * 0.9;
                    const wave2 = Math.cos(z * 0.35 + time * 1.3) * 0.7;
                    const radialPulse = Math.sin(dist - time * 1.2) * 0.6;

                    posAttr.setY(idx, wave1 + wave2 + radialPulse);
                }
            }
            posAttr.needsUpdate = true;

            // Drift camera forward gently
            camera.position.z = 32 + Math.sin(time * 0.25) * 1.5;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
            renderer.dispose();
            geo.dispose();
            mat.dispose();
            if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.45 }}
        />
    );
}
