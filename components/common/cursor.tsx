// Copyright Harshit Kudhial 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaharshit/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import styles from "./Cursor.module.scss";
import { MutableRefObject, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import type { IDesktop } from "../../types/device";
import { isSmallScreen } from "../../utils/isSmallScreen";

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursor: MutableRefObject<HTMLDivElement> = useRef(null);
  const follower: MutableRefObject<HTMLDivElement> = useRef(null);

  const onHover = useCallback(() => {
    gsap.to(cursor.current, {
      scale: 0.5,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 2,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      duration: 0.3,
    });
  }, []);

  const onUnhover = useCallback(() => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      duration: 0.3,
    });
  }, []);

  const moveCircle = useCallback((e: MouseEvent) => {
    // Direct update for cursor (instant)
    gsap.set(cursor.current, {
      x: e.clientX - 4, // Offset by half width (8px/2)
      y: e.clientY - 4,
    });

    // Smooth delay for follower
    gsap.to(follower.current, {
      x: e.clientX - 20, // Offset by half width (40px/2)
      y: e.clientY - 20,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const initCursorAnimation = useCallback(() => {
    follower.current.classList.remove("hidden");
    cursor.current.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);

    document.querySelectorAll(".link").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });
  }, [moveCircle, onHover, onUnhover]);

  useEffect(() => {
    if (isDesktop && !isSmallScreen()) {
      initCursorAnimation();
    }
  }, [isDesktop, initCursorAnimation]);

  return (
    <>
      <div ref={cursor} className={`${styles.cursor} hidden`}></div>
      <div ref={follower} className={`${styles.cursorFollower} hidden`}></div>
    </>
  );
};

export default Cursor;
