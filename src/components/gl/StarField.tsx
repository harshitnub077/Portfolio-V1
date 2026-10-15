"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { noiseGLSL } from "./noise";

const starVert = /* glsl */ `
attribute float aSize;
attribute float aSeed;
attribute vec3 aColor;
uniform float uTime;
uniform float uPR;
varying float vTw;
varying vec3 vColor;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float tw = 0.55 + 0.45*sin(uTime*(0.6 + aSeed*2.2) + aSeed*40.0);
  vTw = tw;
  vColor = aColor;
  gl_PointSize = aSize * uPR * (260.0 / -mv.z);
}
`;
const starFrag = /* glsl */ `
varying float vTw;
varying vec3 vColor;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float core = smoothstep(0.5, 0.0, d);
  float a = pow(core, 2.6) * vTw;
  // tiny diffraction cross on bright stars
  float cross = max(0.0, 1.0 - abs(c.x)*24.0) * max(0.0, 1.0 - abs(c.y)*2.2) + max(0.0, 1.0 - abs(c.y)*24.0) * max(0.0, 1.0 - abs(c.x)*2.2);
  a += cross * 0.25 * vTw;
  if(a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}
`;

const nebulaVert = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }
`;
const nebulaFrag = /* glsl */ `
uniform float uTime;
uniform float uScroll;
uniform vec2 uRes;
varying vec2 vUv;
${noiseGLSL}
void main(){
  vec2 p = (vUv - 0.5) * vec2(uRes.x/uRes.y, 1.0);
  vec3 q = vec3(p*1.6, uTime*0.012) + vec3(0.0, uScroll*0.35, 0.0);
  float n = fbm(q + fbm(q*1.7)*1.4);
  float n2 = fbm(q*2.3 + 11.0);
  vec3 ember = vec3(0.98, 0.27, 0.09);
  vec3 cold = vec3(0.18, 0.22, 0.42);
  vec3 col = ember * pow(smoothstep(0.52, 0.95, n), 2.0) * 0.16
           + cold  * pow(smoothstep(0.45, 0.9, n2), 2.0) * 0.13;
  gl_FragColor = vec4(col, 1.0);
}
`;

/** Fixed deep-space background: twinkling parallax stars, faint nebula, shooting stars. */
export default function StarField() {
  const host = useRef<HTMLDivElement>(null);
  const shoot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "high-performance" });
    const pr = Math.min(window.devicePixelRatio, 1.5);
    renderer.setPixelRatio(pr);
    renderer.setClearColor(0x050507, 1);
    renderer.autoClear = false;
    el.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block";

    // Nebula pass
    const nebScene = new THREE.Scene();
    const nebCam = new THREE.Camera();
    const nebU = { uTime: { value: 0 }, uScroll: { value: 0 }, uRes: { value: new THREE.Vector2(1, 1) } };
    const neb = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({ vertexShader: nebulaVert, fragmentShader: nebulaFrag, uniforms: nebU, depthWrite: false }),
    );
    nebScene.add(neb);

    // Stars
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 400);
    const count = window.innerWidth < 768 ? 2600 : 5200;
    const pos = new Float32Array(count * 3);
    const size = new Float32Array(count);
    const seed = new Float32Array(count);
    const color = new Float32Array(count * 3);
    const palette = [new THREE.Color("#ffffff"), new THREE.Color("#cfd8ff"), new THREE.Color("#ffd9c7"), new THREE.Color("#ff8a5c")];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 260;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 600;
      pos[i * 3 + 2] = -Math.random() * 220 - 6;
      const r = Math.random();
      size[i] = r > 0.985 ? 3.6 : r > 0.9 ? 2.0 : 1.0 + Math.random() * 0.6;
      seed[i] = Math.random();
      const c = palette[Math.random() < 0.8 ? 0 : Math.random() < 0.5 ? 1 : Math.random() < 0.7 ? 2 : 3];
      color.set([c.r, c.g, c.b], i * 3);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    geo.setAttribute("aColor", new THREE.BufferAttribute(color, 3));
    const starU = { uTime: { value: 0 }, uPR: { value: pr } };
    const stars = new THREE.Points(
      geo,
      new THREE.ShaderMaterial({
        vertexShader: starVert,
        fragmentShader: starFrag,
        uniforms: starU,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    scene.add(stars);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      nebU.uRes.value.set(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = e.clientX / window.innerWidth - 0.5;
      mouse.ty = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    let lastY = window.scrollY;
    let warp = 0;
    const t0 = performance.now();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const t = reduce ? 0 : (performance.now() - t0) / 1000;
      const y = window.scrollY;
      const vh = window.innerHeight;
      // Scroll speed briefly "warps" the camera forward.
      warp += (Math.min(Math.abs(y - lastY) * 0.04, 6) - warp) * 0.08;
      lastY = y;
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      camera.position.y = -(y / vh) * 9;
      camera.position.z = -warp * 2;
      camera.rotation.y = -mouse.x * 0.08;
      camera.rotation.x = -mouse.y * 0.06;
      starU.uTime.value = t;
      nebU.uTime.value = t;
      nebU.uScroll.value = y / vh;
      renderer.clear();
      renderer.render(nebScene, nebCam);
      renderer.render(scene, camera);
    };
    loop();

    // Shooting stars
    let timer = 0;
    const fire = () => {
      const s = shoot.current;
      if (s && !reduce && document.visibilityState === "visible") {
        const streak = document.createElement("span");
        streak.className = "shooting-star";
        streak.style.top = `${Math.random() * 55}%`;
        streak.style.left = `${30 + Math.random() * 70}%`;
        streak.style.setProperty("--len", `${120 + Math.random() * 180}px`);
        s.appendChild(streak);
        setTimeout(() => streak.remove(), 1600);
      }
      timer = window.setTimeout(fire, 3500 + Math.random() * 6000);
    };
    timer = window.setTimeout(fire, 2500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      geo.dispose();
      (stars.material as THREE.Material).dispose();
      neb.geometry.dispose();
      (neb.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div ref={host} className="absolute inset-0" />
      <div ref={shoot} className="absolute inset-0 overflow-hidden" />
    </div>
  );
}
