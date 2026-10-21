type Theme = "light" | "dark" | "system";

const EDGE = 110; // width of the contour fringe on the reveal's leading edge, px

/**
 * Switch theme with a "contour reveal": the new theme spreads outward from the
 * point you clicked, and its leading edge is drawn as fine concentric survey
 * rings that thin out, like the topographic background being redrawn. Uses
 * View Transitions; falls back to an instant switch without them or under
 * reduced motion.
 */
export function switchTheme(next: Theme, setTheme: (t: string) => void, origin?: { x: number; y: number }) {
  const root = document.documentElement;
  const resolved =
    next === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : next;

  // Apply the class synchronously so the transition captures the finished new state.
  const apply = () => {
    root.classList.remove("light", "dark");
    root.classList.add(resolved);
    root.style.colorScheme = resolved;
    setTheme(next);
  };

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => { ready: Promise<void>; finished: Promise<void> };
  };
  if (!doc.startViewTransition || reduce || root.classList.contains(resolved)) {
    apply();
    return;
  }

  const w = window.innerWidth;
  const h = window.innerHeight;
  const x = origin?.x ?? w / 2;
  const y = origin?.y ?? 0;
  const reach = Math.hypot(Math.max(x, w - x), Math.max(y, h - y)) + EDGE;
  root.style.setProperty("--vt-x", `${x}px`);
  root.style.setProperty("--vt-y", `${y}px`);
  root.style.setProperty("--vt-edge", `${EDGE}px`);

  // Freeze CSS colour transitions so the "after" snapshot is the final colours.
  root.classList.add("theme-sweeping");
  const transition = doc.startViewTransition(apply);
  transition.ready
    .then(() => {
      root.animate(
        { "--vt-r": ["0px", `${reach}px`] } as unknown as Keyframe[],
        {
          duration: 1400,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          fill: "both",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    })
    .catch(() => {});
  transition.finished.finally(() => root.classList.remove("theme-sweeping"));
}
