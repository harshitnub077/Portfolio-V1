// Copyright Harshit Kudhial 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaharshit/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { IDesktop } from "../../types/device";
import { isSmallScreen } from "../../utils/isSmallScreen";

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktop || isSmallScreen()) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use quickTo for high performance mouse tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3", skewX: 0 });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3", skewY: 0 });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    // Hover states
    const onMouseEnter = () => {
      gsap.to(cursorInnerRef.current, {
        scale: 2.5,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(cursor, {
        mixBlendMode: "difference",
        duration: 0.3,
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursorInnerRef.current, {
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 0)", // transparent center
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(cursor, {
        mixBlendMode: "difference",
        duration: 0.3,
      });
    };

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, .cursor-pointer, [role='button']"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [isDesktop]);

  if (!isDesktop || isSmallScreen()) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
    >
      <div
        ref={cursorInnerRef}
        className="w-4 h-4 border border-white rounded-full transition-transform duration-300 ease-out"
      />
    </div>
  );
};

export default Cursor;
