"use client";

import React, { useEffect, useRef } from "react";

/*
 * Contour Field — the sheet's background, drawn as a live survey map.
 *
 * A slow, domain-warped terrain is traced with hairline isolines (every fifth
 * one heavier, like an index contour on a topographic plate) and registration
 * crosses in the gutters. The cursor raises a hill: rings gather around it and
 * take on the ink colour. A click sends a wave through the terrain; scrolling
 * drifts the land underneath. The reading column keeps only a whisper of it.
 *
 * Two passes: a quarter-resolution half-float height field (the expensive
 * noise), then a full-resolution pass that draws anti-aliased contours.
 */

const VERT = /* glsl */ `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const NOISE = /* glsl */ `
  // Simplex noise (Ashima / Stefan Gustavson, MIT)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
`;

const HEIGHT_FRAG = /* glsl */ `
  precision highp float;
  uniform vec2  uView;     // CSS px
  uniform vec2  uSize;     // target texels
  ${NOISE}

  float fbm(vec3 p) {
    float s = 0.0;
    float a = 0.6;
    for (int i = 0; i < 3; i++) {
      s += a * snoise(p);
      p = p * 1.9 + vec3(3.1, 7.4, 1.3);
      a *= 0.38;
    }
    return s;
  }

  void main() {
    vec2 css = vec2(gl_FragCoord.x, uSize.y - gl_FragCoord.y) / uSize * uView;
    // Static base terrain: no scroll drift, stays permanently fixed in place
    vec2 p = css / 760.0;
    const float t = 0.32;
    vec2 warp = vec2(fbm(vec3(p * 0.7, t)), fbm(vec3(p * 0.7 + 4.3, t)));
    float h = fbm(vec3(p + warp * 0.45, t * 0.8));
    gl_FragColor = vec4(h, 0.0, 0.0, 1.0);
  }
`;

const CONTOUR_FRAG = /* glsl */ `
  precision highp float;
  uniform sampler2D uHeight;
  uniform vec2  uView;      // CSS px
  uniform float uDpr;
  uniform vec2  uMouse;     // CSS px
  uniform float uPresence;
  uniform vec3  uFg;
  uniform vec3  uInk;
  uniform float uDark;
  uniform float uWide;
  uniform float uGuideX;    // CSS x of the left column guide

  const float DENSITY = 9.0;

  float contour(float f, float widthPx) {
    float w = fwidth(f);
    float d = abs(fract(f - 0.5) - 0.5) / max(w, 1e-4);
    float line = 1.0 - smoothstep(widthPx * 0.5 - 0.5, widthPx * 0.5 + 0.5, d);
    return line * (1.0 - smoothstep(0.22, 0.45, w)); // fade where lines would crowd
  }

  void main() {
    vec2 css = vec2(gl_FragCoord.x, uView.y * uDpr - gl_FragCoord.y) / uDpr;
    vec2 uv = vec2(css.x / uView.x, 1.0 - css.y / uView.y);
    float h = texture2D(uHeight, uv).r;

    // Hover effect only: cursor raises a gentle topographic hill and glow rings gather around it
    vec2 dm = css - uMouse;
    float r2 = dot(dm, dm);
    float hill = exp(-r2 / (2.0 * 140.0 * 140.0)) * uPresence;
    float lamp = exp(-r2 / (2.0 * 240.0 * 240.0)) * uPresence;
    h += hill * 0.32;

    float f = h * DENSITY;
    float idx = floor(f + 0.5);
    bool major = mod(idx, 5.0) < 0.5;
    float line = contour(f, (major ? 1.7 : 1.0) * uDpr);

    // Registration crosses on a 96px lattice, aligned to the column guide.
    vec2 g = mod(css - vec2(uGuideX, 0.0) + 48.0, 96.0) - 48.0;
    float arm = 4.5;
    float reg = max(
      step(abs(g.x), 0.5) * step(abs(g.y), arm),
      step(abs(g.y), 0.5) * step(abs(g.x), arm)
    );

    // Column: the land fades under the reading column.
    float x = uv.x;
    float column = uWide > 0.5
      ? smoothstep(0.27, 0.31, x) * (1.0 - smoothstep(0.69, 0.73, x))
      : 0.0;
    float quiet = mix(1.0, 0.28, column);

    float baseA = uDark > 0.5 ? (major ? 0.15 : 0.075) : (major ? 0.17 : 0.085);
    float litA = uDark > 0.5 ? 0.42 : 0.38;
    float a = line * mix(baseA, litA, lamp) * quiet;
    a = max(a, reg * (uDark > 0.5 ? 0.16 : 0.2) * (1.0 - column) * uWide);

    vec3 col = mix(uFg, uInk, clamp(lamp * 0.9, 0.0, 1.0));
    gl_FragColor = vec4(col * a, a);
  }
`;

const hexToRgb = (value: string, fallback: [number, number, number]): [number, number, number] => {
  const m = /^#?([0-9a-f]{6})$/i.exec(value.trim());
  if (!m) return fallback;
  const n = parseInt(m[1], 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

export function ContourField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      if (disposed) return;

      const root = document.documentElement;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: false,
          premultipliedAlpha: true,
          powerPreference: "low-power",
        });
      } catch {
        return; // No WebGL: the plain sheet still reads well.
      }
      renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
      renderer.setClearColor(0x000000, 0);

      const shared = {
        uView: { value: new THREE.Vector2(1, 1) },
      };

      const heightTarget = new THREE.WebGLRenderTarget(1, 1, {
        type: THREE.HalfFloatType,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        depthBuffer: false,
      });

      const heightUniforms = {
        ...shared,
        uSize: { value: new THREE.Vector2(1, 1) },
      };

      const uniforms = {
        ...shared,
        uHeight: { value: heightTarget.texture },
        uDpr: { value: 1 },
        uMouse: { value: new THREE.Vector2(-9999, -9999) },
        uPresence: { value: 0 },
        uFg: { value: new THREE.Vector3() },
        uInk: { value: new THREE.Vector3() },
        uDark: { value: 0 },
        uWide: { value: 0 },
        uGuideX: { value: 0 },
      };

      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geometry = new THREE.PlaneGeometry(2, 2);
      const heightMaterial = new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: HEIGHT_FRAG,
        uniforms: heightUniforms,
        depthTest: false,
        depthWrite: false,
      });
      const material = new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: CONTOUR_FRAG,
        uniforms,
        blending: THREE.NoBlending,
        depthTest: false,
        depthWrite: false,
      });
      const heightScene = new THREE.Scene();
      heightScene.add(new THREE.Mesh(geometry, heightMaterial));
      const scene = new THREE.Scene();
      scene.add(new THREE.Mesh(geometry, material));

      const drawHeight = () => {
        renderer.setRenderTarget(heightTarget);
        renderer.render(heightScene, camera);
        renderer.setRenderTarget(null);
      };

      const draw = () => {
        renderer.render(scene, camera);
      };

      const readTheme = () => {
        const cs = getComputedStyle(root);
        const dark = root.classList.contains("dark");
        uniforms.uFg.value.set(...hexToRgb(cs.getPropertyValue("--fg"), dark ? [0.98, 0.98, 0.98] : [0.09, 0.09, 0.1]));
        uniforms.uInk.value.set(...hexToRgb(cs.getPropertyValue("--ink"), [0.18, 0.38, 0.68]));
        uniforms.uDark.value = dark ? 1 : 0;
      };

      const resize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const dpr = Math.min(fine ? 2 : 1.5, window.devicePixelRatio || 1);
        renderer.setPixelRatio(dpr);
        renderer.setSize(w, h, false);
        shared.uView.value.set(w, h);
        uniforms.uDpr.value = dpr;
        uniforms.uWide.value = w >= 768 ? 1 : 0;
        uniforms.uGuideX.value = root.clientWidth * 0.3;
        const tw = Math.max(64, Math.ceil(w / 4));
        const th = Math.max(64, Math.ceil(h / 4));
        heightTarget.setSize(tw, th);
        heightUniforms.uSize.value.set(tw, th);
        drawHeight();
      };

      // ---- Input (Hover only) -------------------------------------------
      const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, presence: 0, target: 0 };
      let lastInput = performance.now();

      const onMove = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        if (mouse.x < -9000) {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
        }
        mouse.tx = e.clientX;
        mouse.ty = e.clientY;
        mouse.target = 1;
        lastInput = performance.now();
        wake();
      };
      const onLeave = () => {
        mouse.target = 0;
        wake();
      };

      // ---- Loop ---------------------------------------------------------
      let raf = 0;
      let lastDraw = 0;
      let running = false;

      const sync = (dt: number) => {
        const follow = 1 - Math.pow(0.3, dt);
        mouse.x += (mouse.tx - mouse.x) * follow;
        mouse.y += (mouse.ty - mouse.y) * follow;
        mouse.presence += (mouse.target - mouse.presence) * (1 - Math.pow(0.2, dt));
        if (Math.abs(mouse.presence - mouse.target) < 0.003) mouse.presence = mouse.target;
        uniforms.uMouse.value.set(mouse.x, mouse.y);
        uniforms.uPresence.value = mouse.presence;
      };

      const step = (now: number) => {
        raf = requestAnimationFrame(step);
        const active = now - lastInput < 2000 || mouse.presence !== mouse.target;
        if (!active && mouse.presence === 0) {
          sleep();
          return;
        }
        const dt = Math.min(0.1, (now - lastDraw) / 1000);
        lastDraw = now;
        sync(dt);
        draw();
      };

      const wake = () => {
        if (reduce) {
          mouse.x = mouse.tx;
          mouse.y = mouse.ty;
          sync(1);
          draw();
          return;
        }
        if (running || document.hidden) return;
        running = true;
        lastDraw = performance.now() - 16;
        raf = requestAnimationFrame(step);
      };

      const sleep = () => {
        cancelAnimationFrame(raf);
        running = false;
      };

      const onVisibility = () => (document.hidden ? sleep() : wake());

      let resizeRaf = 0;
      const onResize = () => {
        cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(() => {
          resize();
          draw();
        });
      };

      const themeObserver = new MutationObserver(() => {
        readTheme();
        draw();
      });

      readTheme();
      resize();
      draw();
      canvas.style.opacity = "1";
      wake();

      themeObserver.observe(root, { attributes: true, attributeFilter: ["class"] });
      window.addEventListener("resize", onResize);
      document.addEventListener("visibilitychange", onVisibility);
      if (fine) {
        window.addEventListener("pointermove", onMove, { passive: true });
        root.addEventListener("mouseleave", onLeave);
        window.addEventListener("blur", onLeave);
      }

      cleanup = () => {
        sleep();
        cancelAnimationFrame(resizeRaf);
        themeObserver.disconnect();
        window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVisibility);
        window.removeEventListener("pointermove", onMove);
        root.removeEventListener("mouseleave", onLeave);
        window.removeEventListener("blur", onLeave);
        geometry.dispose();
        heightMaterial.dispose();
        material.dispose();
        heightTarget.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-0 transition-opacity duration-1000"
    />
  );
}
