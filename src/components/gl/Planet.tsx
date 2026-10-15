"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { noiseGLSL } from "./noise";

export type PlanetKind = "moon" | "dark";

type Props = {
  kind?: PlanetKind;
  ring?: boolean;
  className?: string;
  /** Light direction swings toward the cursor. */
  followMouse?: boolean;
  /** Base light direction (world space, roughly). */
  light?: [number, number, number];
  atmosphere?: string;
  spin?: number;
  /** Camera distance — smaller means the body fills more of the canvas. */
  distance?: number;
  tilt?: number;
  /** Rotation driven by page scroll (radians per viewport). */
  scrollSpin?: number;
};

const surfaceVert = /* glsl */ `
varying vec3 vN;
varying vec3 vObj;
varying vec3 vWorld;
void main(){
  vObj = normalize(position);
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position,1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;

const surfaceFrag = /* glsl */ `
uniform vec3 uLight;
uniform vec3 uAtm;
uniform float uKind;
uniform float uTime;
varying vec3 vN;
varying vec3 vObj;
varying vec3 vWorld;
${noiseGLSL}

float crater(vec3 p, float scale, float size, float density){
  vec2 c = cellular(p*scale);
  float r = size * (0.55 + 0.45*c.y);
  float q = clamp(c.x / r, 0.0, 1.0);
  float bowl = 1.0 - q*q;
  float rim = exp(-pow((c.x - r)/(r*0.35), 2.0));
  // only some cells host a crater
  float on = step(1.0 - density, c.y);
  return on * (rim*0.45 - bowl*0.7);
}

float moonHeight(vec3 p){
  float h = fbm(p*3.0)*0.35;
  h += crater(p, 2.4, 0.24, 0.6)*0.45;
  h += crater(p+7.3, 6.0, 0.22, 0.45)*0.22;
  h += crater(p-3.1, 13.0, 0.2, 0.3)*0.10;
  return h;
}

void main(){
  vec3 p = vObj;
  vec3 N = normalize(vN);
  vec3 L = normalize(uLight);
  vec3 V = normalize(cameraPosition - vWorld);

  vec3 albedo;
  float h;
  if(uKind < 0.5){
    // ---- Moon: maria + craters + regolith grain
    h = moonHeight(p);
    float maria = smoothstep(0.48, 0.62, fbm(p*1.3 + 2.0));
    albedo = mix(vec3(0.46), vec3(0.17), maria);
    albedo *= 0.8 + 0.35*fbm(p*12.0);
    // fresh ejecta: bright rays around a few young craters
    albedo += vec3(0.08) * smoothstep(0.72, 0.9, fbm(p*9.0));
    albedo = mix(albedo, albedo*vec3(1.05,0.98,0.92), 0.5);
  } else {
    // ---- Dark planet: slow banded storms in charcoal & ember
    float warp = fbm(p*2.5 + vec3(uTime*0.02,0.0,0.0));
    float bands = sin(p.y*18.0 + warp*6.0);
    float storm = smoothstep(0.62, 0.8, fbm(p*5.0 + warp*2.0));
    albedo = mix(vec3(0.07,0.07,0.08), vec3(0.20,0.18,0.17), bands*0.5+0.5);
    albedo = mix(albedo, vec3(0.55,0.18,0.06), storm*0.55);
    h = bands*0.08 + storm*0.1;
  }

  // Bump mapping from screen-space derivatives (no tangents needed)
  vec3 dpdx = dFdx(vWorld), dpdy = dFdy(vWorld);
  float dhdx = dFdx(h), dhdy = dFdy(h);
  vec3 r1 = cross(dpdy, N), r2 = cross(N, dpdx);
  float det = dot(dpdx, r1);
  vec3 grad = sign(det) * (dhdx*r1 + dhdy*r2);
  float bump = uKind < 0.5 ? 0.22 : 0.15;
  vec3 Nb = normalize(abs(det)*N - grad*bump);

  float ndl = dot(Nb, L);
  float diff = smoothstep(-0.08, 0.6, ndl);
  diff = pow(diff, 1.4);
  vec3 col = albedo * diff * 1.35;

  // earthshine on the night side
  col += albedo * 0.025;

  // atmospheric rim, stronger toward the light
  float fres = pow(1.0 - max(dot(N, V), 0.0), 4.0);
  float lit = smoothstep(-0.3, 0.6, dot(N, L));
  float atmK = uKind < 0.5 ? 0.35 : 0.8;
  col += uAtm * fres * (0.04 + atmK*lit);

  gl_FragColor = vec4(col, 1.0);
}
`;

const atmVert = /* glsl */ `
varying vec3 vN;
varying vec3 vWorld;
void main(){
  vN = normalize(mat3(modelMatrix) * normal);
  vec4 w = modelMatrix * vec4(position,1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const atmFrag = /* glsl */ `
uniform vec3 uAtm;
uniform vec3 uLight;
uniform float uStrength;
varying vec3 vN;
varying vec3 vWorld;
void main(){
  vec3 V = normalize(cameraPosition - vWorld);
  // Back faces of the shell: -dot(N,V) is 0 at the shell's outer edge and ~0.48 at the planet's limb.
  float rim = pow(clamp(-dot(normalize(vN), V) / 0.48, 0.0, 1.0), 3.0);
  float lit = smoothstep(-0.6, 0.6, dot(normalize(vN), normalize(uLight)));
  gl_FragColor = vec4(uAtm * rim * (0.04 + uStrength*lit), 1.0);
}
`;

const ringVert = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorld;
void main(){
  vUv = uv;
  vec4 w = modelMatrix * vec4(position,1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const ringFrag = /* glsl */ `
uniform vec3 uLight;
uniform float uInner;
uniform float uOuter;
varying vec2 vUv;
varying vec3 vWorld;
float h1(float x){ return fract(sin(x*127.1)*43758.5453); }
float n1(float x){ float i=floor(x), f=fract(x); return mix(h1(i), h1(i+1.0), f*f*(3.0-2.0*f)); }
void main(){
  float r = length(vWorld.xz - vec2(0.0));
  r = length(vWorld);
  float t = (r - uInner) / (uOuter - uInner);
  if(t<0.0||t>1.0) discard;
  float bands = n1(t*60.0)*0.6 + n1(t*13.0)*0.4;
  float gap = smoothstep(0.52,0.55,t) * (1.0 - smoothstep(0.58,0.61,t));
  float a = bands * (1.0-gap*0.9) * smoothstep(0.0,0.06,t) * (1.0 - smoothstep(0.9,1.0,t));
  // planet shadow: points behind the planet relative to the light
  vec3 L = normalize(uLight);
  float along = dot(vWorld, -L);
  float perp = length(vWorld + L*along);
  float shadow = (along > 0.0 && perp < 1.0) ? 0.15 : 1.0;
  vec3 col = mix(vec3(0.35,0.31,0.28), vec3(0.85,0.45,0.25), n1(t*7.0)) * shadow;
  gl_FragColor = vec4(col * a, a*0.85);
}
`;

/** A procedurally shaded celestial body (cratered moon or banded dark planet), optional ring + atmosphere. */
export default function Planet({
  kind = "moon",
  ring = false,
  className,
  followMouse = false,
  light = [-1, 0.6, 0.7],
  atmosphere = "#fb4617",
  spin = 0.03,
  distance = 3.2,
  tilt = 0.35,
  scrollSpin = 0,
}: Props) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = "width:100%;height:100%;display:block";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, distance);

    const baseLight = new THREE.Vector3(...light).normalize();
    const uLight = { value: baseLight.clone() };
    const atm = new THREE.Color(atmosphere);

    const body = new THREE.Group();
    body.rotation.z = tilt;
    scene.add(body);

    const surface = new THREE.Mesh(
      new THREE.SphereGeometry(1, 160, 160),
      new THREE.ShaderMaterial({
        vertexShader: surfaceVert,
        fragmentShader: surfaceFrag,
        uniforms: { uLight, uAtm: { value: atm }, uKind: { value: kind === "moon" ? 0 : 1 }, uTime: { value: 0 } },
      }),
    );
    body.add(surface);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(1.14, 96, 96),
      new THREE.ShaderMaterial({
        vertexShader: atmVert,
        fragmentShader: atmFrag,
        uniforms: { uLight, uAtm: { value: atm }, uStrength: { value: kind === "moon" ? 0.4 : 0.9 } },
        side: THREE.BackSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    scene.add(glow);

    let ringMesh: THREE.Mesh | null = null;
    if (ring) {
      const inner = 1.35;
      const outer = 2.25;
      ringMesh = new THREE.Mesh(
        new THREE.RingGeometry(inner, outer, 256, 1),
        new THREE.ShaderMaterial({
          vertexShader: ringVert,
          fragmentShader: ringFrag,
          uniforms: { uLight, uInner: { value: inner }, uOuter: { value: outer } },
          side: THREE.DoubleSide,
          transparent: true,
          depthWrite: false,
        }),
      );
      ringMesh.rotation.x = -Math.PI / 2 + 0.32;
      ringMesh.rotation.y = 0.18;
      scene.add(ringMesh);
    }

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const mouse = new THREE.Vector2(0, 0);
    const onMove = (e: MouseEvent) => mouse.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    window.addEventListener("mousemove", onMove);

    let visible = true;
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting), { rootMargin: "100px" });
    io.observe(el);

    const target = new THREE.Vector3();
    let raf = 0;
    const t0 = performance.now();
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      const t = reduce ? 0 : (performance.now() - t0) / 1000;
      (surface.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
      surface.rotation.y = t * spin + (scrollSpin * window.scrollY) / window.innerHeight;
      if (followMouse) {
        target.set(baseLight.x + mouse.x * 0.7, baseLight.y + mouse.y * 0.5, baseLight.z + mouse.x * 0.25).normalize();
        uLight.value.lerp(target, 0.04).normalize();
      }
      body.rotation.x = mouse.y * 0.05;
      body.rotation.y = mouse.x * 0.08;
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.geometry.dispose();
          (o.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [kind, ring, followMouse, light, atmosphere, spin, distance, tilt, scrollSpin]);

  return <div ref={host} className={className} aria-hidden />;
}
