export const isSmallScreen = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
};