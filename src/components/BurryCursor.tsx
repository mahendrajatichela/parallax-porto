"use client";

import { useEffect, useRef } from "react";

interface BlurryCursorProps {
  isActive: boolean;
}

export default function BlurryCursor({ isActive }: BlurryCursorProps) {
  const circle = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);

  const size = isActive ? 350 : 0;

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    if (!circle.current) return;

    circle.current.style.transform = `translate(
      ${clientX - size / 2}px,
      ${clientY - size / 2}px
    )`;
  };

  const animate = () => {
    rafId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isActive, size]);

  return (
    <div className="relative h-screen">
      <div
        ref={circle}
        className="fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none"
        style={{
          backgroundColor: "#ffceef",
          width: size,
          height: size,
          filter: `blur(${isActive ? 30 : 0}px)`,
          transition:
            "height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out",
        }}
      />
    </div>
  );
}
