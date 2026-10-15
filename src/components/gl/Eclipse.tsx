"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { noiseGLSL } from "./noise";

const vert = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const frag = /* glsl */ `
uniform float uTime;
uniform float uProg;
uniform vec2 uRes;
varying vec2 vUv;
${noiseGLSL}
void main(){
  float m = min(uRes.x, uRes.y);
  vec2 p = (vUv - 0.5) * uRes / m;
  float R = 0.24;
  // moon travels left → right, totality at uProg = .5
  vec2 mc = vec2((uProg - 0.5) * 1.5, (uProg - 0.5) * -0.12);
  float dS = length(p);
  float dM = length(p - mc);
  float sep = length(mc);
  float total = 1.0 - smoothstep(0.0, R*0.55, sep);

  float sunDisk = 1.0 - smoothstep(R - 0.003, R + 0.003, dS);
  float moonDisk = 1.0 - smoothstep(R*1.015 - 0.003, R*1.015 + 0.003, dM);
  float visible = sunDisk * (1.0 - moonDisk);

  // fraction of the sun still showing (cheap analytic estimate)
  float shown = clamp(sep / (2.0*R), 0.0, 1.0);

  // corona with streamers
  float ang = atan(p.y, p.x);
  float streamer = fbm(vec3(cos(ang)*2.5, sin(ang)*2.5, uTime*0.06)) ;
  streamer = pow(streamer, 1.6) * 2.2;
  float falloff = exp(-(dS - R) * (7.0 - 3.0*streamer));
  float corona = (dS > R) ? falloff * (0.35 + streamer) : 0.0;
  vec3 coronaCol = mix(vec3(1.0,0.32,0.08), vec3(1.0,0.86,0.72), clamp(falloff*1.2,0.0,1.0));

  // glare from the exposed photosphere
  float glare = exp(-max(dS - R, 0.0) * 5.0) * shown;
  // diamond ring: bright bead at the last exposed limb near totality
  vec2 limb = -normalize(mc + 1e-4) * R;
  float bead = exp(-length(p - limb) * 38.0) * smoothstep(0.75, 0.25, shown) * (1.0 - total);

  vec3 col = vec3(0.0);
  col += coronaCol * corona * (0.25 + 1.4*total);
  col += vec3(1.0, 0.55, 0.25) * glare * 0.9;
  col += vec3(1.0, 0.93, 0.85) * visible * 1.6;
  col += vec3(1.0, 0.9, 0.8) * bead * 2.2;
  // moon's dark face blocks everything behind it, keep a whisper of earthshine
  col = mix(col, vec3(0.012), moonDisk);
  // thin chromosphere ring at totality
  col += vec3(1.0,0.25,0.1) * exp(-abs(dM - R*1.015) * 220.0) * total * 0.9;

  float a = clamp(max(max(col.r, col.g), col.b), 0.0, 1.0);
  a = max(a, moonDisk);
  gl_FragColor = vec4(col, a);
}
`;

/** Scroll-scrubbed total solar eclipse. Parent drives `progress` via ref (0 → 1). */
export default function Eclipse({ progressRef, className }: { progressRef: React.RefObject<number>; className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block";

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const uniforms = { uTime: { value: 0 }, uProg: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } };
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms, transparent: true }),
    );
    scene.add(mesh);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el;
      renderer.setSize(w, h, false);
      uniforms.uRes.value.set(w, h);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let visible = true;
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io.observe(el);

    let raf = 0;
    const t0 = performance.now();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      uniforms.uTime.value = reduce ? 0 : (performance.now() - t0) / 1000;
      uniforms.uProg.value += ((progressRef.current ?? 0.5) - uniforms.uProg.value) * 0.12;
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [progressRef]);

  return <div ref={host} className={className} aria-hidden />;
}
