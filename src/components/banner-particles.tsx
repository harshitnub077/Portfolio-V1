"use client";

import React, { useRef, useEffect } from "react";

const config = {
  minSize: 6,
  maxSize: 18,
  minWind: 1.2,
  maxWind: 4.8,
  tiltRad: 0,
};

function project(
  x: number,
  y: number,
  z: number,
  angleX: number,
  angleY: number,
  angleZ: number
) {
  const cosZ = Math.cos(angleZ);
  const sinZ = Math.sin(angleZ);
  const rotX = x * cosZ - y * sinZ;
  const rotY = x * sinZ + y * cosZ;

  const cosY = Math.cos(angleY);
  const sinY = Math.sin(angleY);
  const projX = rotX * cosY + z * sinY;
  const projZ = -rotX * sinY + z * cosY;

  const cosX = Math.cos(angleX);
  const sinX = Math.sin(angleX);
  return {
    x: projX,
    y: rotY * cosX - projZ * sinX,
    z: rotY * sinX + projZ * cosX,
  };
}

export function BannerParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let destroyed = false;
    let isIntersecting = true;
    let isVisible = !document.hidden;
    let isRunning = false;
    let lastTime = 0;

    // Create offscreen leaf canvas
    let leafImg: HTMLImageElement | null = null;
    if (typeof document !== "undefined") {
      const offCanvas = document.createElement("canvas");
      offCanvas.width = 128;
      offCanvas.height = 128;
      const offCtx = offCanvas.getContext("2d");
      if (offCtx) {
        offCtx.scale(2, 2);
        offCtx.beginPath();
        offCtx.moveTo(32, 5);
        offCtx.quadraticCurveTo(5, 32, 32, 59);
        offCtx.quadraticCurveTo(59, 32, 32, 5);
        offCtx.fillStyle = "#bfdbfe";
        offCtx.fill();
        offCtx.strokeStyle = "#60a5fa";
        offCtx.lineWidth = 1;
        offCtx.stroke();
        offCtx.beginPath();
        offCtx.moveTo(32, 5);
        offCtx.lineTo(32, 59);
        offCtx.stroke();
        leafImg = new Image();
        leafImg.src = offCanvas.toDataURL();
      }
    }

    if (!leafImg) return;

    class Particle {
      x = 0;
      y = 0;
      width = 0;
      height = 0;
      windFactor = 0;
      vx = 0;
      vy = 0;
      waveOffset = 0;
      angleZ = 0;
      spinZ = 0;
      angleX = 0;
      angleY = 0;
      spinX = 0;
      spinY = 0;

      constructor(initial = false) {
        this.reset(initial);
      }

      reset(initial = false) {
        this.width =
          config.minSize + Math.random() * (config.maxSize - config.minSize);
        this.height = this.width;
        const midY = 0.2 * height;
        const spreadY = 0.9 * height;
        const minY = midY - spreadY / 2;
        this.y = minY + Math.random() * (midY + spreadY / 2 - minY);

        if (initial) {
          this.x = Math.random() * width;
        } else {
          const off = Math.min(0.12 * width, 80);
          this.x = -this.width - Math.random() * off;
        }

        const sizeNorm =
          (this.width - config.minSize) /
          (config.maxSize - config.minSize || 1);
        this.windFactor = 1 - (0.5 * sizeNorm + 0.5 * Math.random());
        this.windFactor = Math.max(0.1, Math.min(1, this.windFactor));
        this.vx = 0;
        this.vy = 0;
        this.waveOffset = Math.random() * Math.PI * 2;
        this.angleZ = Math.random() * Math.PI * 2;
        this.spinZ = (Math.random() - 0.5) * 0;
        this.angleX = 0;
        this.angleY = 0;
        this.spinX = (Math.random() - 0.5) * 0.1;
        this.spinY = (Math.random() - 0.5) * 0.1;
      }

      update() {
        const wind =
          config.minWind +
          (config.maxWind - config.minWind) * this.windFactor;
        this.vx += (wind - this.vx) * 0.1;
        this.x += this.vx;

        const fallSpeed = 1.5 - this.windFactor;
        this.vy += 0.015 * fallSpeed;
        const wave = Math.sin(0.01 * this.x + this.waveOffset);
        this.vy += 0.5 * wave * 0.05;
        this.vy *= 0.98;
        this.y += this.vy;

        this.angleZ += this.spinZ + 0.002 * this.vx;
        this.angleX += 0.3 * this.spinX;
        this.angleY += 0.3 * this.spinY;

        if (this.x > width + 200 || this.y > height + 200 || this.y < -200) {
          this.reset(false);
        }
      }

      draw() {
        if (!ctx || !leafImg) return;
        const p1 = project(
          1,
          0,
          0,
          this.angleX,
          this.angleY + config.tiltRad,
          this.angleZ
        );
        const p2 = project(
          0,
          1,
          0,
          this.angleX,
          this.angleY + config.tiltRad,
          this.angleZ
        );

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.transform(p1.x, p1.y, p2.x, p2.y, 0, 0);
        ctx.globalAlpha = 0.6;
        ctx.drawImage(
          leafImg,
          -this.width / 2,
          -this.height / 2,
          this.width,
          this.height
        );
        ctx.restore();
      }
    }

    const particles: Particle[] = [];

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = canvas.width = parent.clientWidth;
        height = canvas.height = parent.clientHeight;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.update();
        p.draw();
      }
    };

    const loop = (timestamp: number) => {
      if (destroyed || !isRunning) return;
      animId = requestAnimationFrame(loop);
      if (timestamp - lastTime >= 1000 / 30) {
        lastTime = timestamp;
        render();
      }
    };

    const stop = () => {
      isRunning = false;
      cancelAnimationFrame(animId);
    };

    const start = () => {
      if (destroyed || isRunning || !isIntersecting || !isVisible || reducedMotion)
        return;
      isRunning = true;
      animId = requestAnimationFrame(loop);
    };

    const reducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    handleResize();
    const count = Math.min(
      56,
      Math.max(32, Math.round((width * height) / 2500))
    );
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(true));
    }

    if (reducedMotion) {
      render();
    } else {
      start();
    }

    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      if (isIntersecting) start();
      else stop();
    });
    observer.observe(canvas);

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) start();
      else stop();
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      destroyed = true;
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      stop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[4]"
    />
  );
}
