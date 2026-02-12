"use client";
import React, { useRef, useEffect } from "react";
import styles from "./../../app/profile.module.scss";
import Image from "next/image";
import gsap from "gsap";
import {
  photo1, photo2, photo3, photo4,
  photo5, photo6, photo7, photo8,
} from "@/src/photos";

export default function Profile() {
  // 1. Definisikan Refs dengan tipe HTMLDivElement
  const plane1 = useRef<HTMLDivElement>(null);
  const plane2 = useRef<HTMLDivElement>(null);
  const plane3 = useRef<HTMLDivElement>(null);

  // 2. Gunakan useRef untuk variabel mutable agar tidak memicu re-render
  const requestAnimationFrameId = useRef<number | null>(null);
  const xForce = useRef(0);
  const yForce = useRef(0);
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e: React.MouseEvent) => {
    const { movementX, movementY } = e;
    xForce.current += movementX * speed;
    yForce.current += movementY * speed;

    if (requestAnimationFrameId.current === null) {
      requestAnimationFrameId.current = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce.current = lerp(xForce.current, 0, easing);
    yForce.current = lerp(yForce.current, 0, easing);

    // GSAP Set untuk performa transform yang mulus
    gsap.set(plane1.current, { x: `+=${xForce.current}`, y: `+=${yForce.current}` });
    gsap.set(plane2.current, {
      x: `+=${xForce.current * 0.5}`,
      y: `+=${yForce.current * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce.current * 0.25}`,
      y: `+=${yForce.current * 0.25}`,
    });

    if (Math.abs(xForce.current) < 0.01) xForce.current = 0;
    if (Math.abs(yForce.current) < 0.01) yForce.current = 0;

    if (xForce.current !== 0 || yForce.current !== 0) {
      requestAnimationFrameId.current = requestAnimationFrame(animate);
    } else {
      requestAnimationFrameId.current = null;
    }
  };

  // 3. Cleanup saat komponen unmount
  useEffect(() => {
    return () => {
      if (requestAnimationFrameId.current) {
        cancelAnimationFrame(requestAnimationFrameId.current);
      }
    };
  }, []);

  return (
    <main onMouseMove={manageMouseMove} className={styles.main}>
      <div className={styles.title}>
        <h1>Floating Images Gallery</h1>
        <p>Next.js and GSAP</p>
      </div>

      {/* Plane 1: Gerakan paling cepat (depan) */}
      <div ref={plane1} className={styles.plane}>
        <Image src={photo1} alt="image" width={300} placeholder="blur" />
        <Image src={photo2} alt="image" width={200} placeholder="blur" />
        <Image src={photo7} alt="image" width={225} placeholder="blur" />
      </div>

      {/* Plane 2: Gerakan sedang (tengah) */}
      <div ref={plane2} className={styles.plane}>
        <Image src={photo4} alt="image" width={250} placeholder="blur" />
        <Image src={photo6} alt="image" width={200} placeholder="blur" />
        <Image src={photo8} alt="image" width={225} placeholder="blur" />
      </div>

      {/* Plane 3: Gerakan lambat (belakang/parallax jauh) */}
      <div ref={plane3} className={styles.plane}>
        <Image src={photo3} alt="image" width={250} placeholder="blur" />
        <Image src={photo5} alt="image" width={300} placeholder="blur" />
      </div>
    </main>
  );
}