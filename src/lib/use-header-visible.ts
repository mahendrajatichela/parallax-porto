"use client";

import { useEffect, useState } from "react";

/** True once the user scrolls past ~70% of the first screen (when the header appears). */
export function useHeaderVisible() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
}
