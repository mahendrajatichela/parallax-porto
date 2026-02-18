"use client";
import { useEffect, MouseEvent as ReactMouseEvent } from "react";
import styles from "@/src/app/cursor.module.scss";
import {
  motion,
  useMotionValue,
  useSpring,
  SpringOptions,
} from "framer-motion";

interface IndexProps {
  stickyElement?: React.RefObject<HTMLElement | null>;
}

export default function StickyCursor({ stickyElement }: IndexProps) {
  const cursorSize = 15;

  // Initialize motion values with explicit types
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions: SpringOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  // Type the event as a standard MouseEvent since it's attached to the window
  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className={styles.cursor}
      ></motion.div>
    </div>
  );
}
