"use client";
import React, { useRef, useEffect } from "react";
import styles from "./../../app/profile.module.scss";
import Image from "next/image";
import gsap from "gsap";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
} from "@/src/photos";
import { motion } from "framer-motion";
import { MessageCircleCode } from "lucide-react";

export default function Profile() {
  const plane1 = useRef<HTMLDivElement>(null);
  const plane2 = useRef<HTMLDivElement>(null);
  const plane3 = useRef<HTMLDivElement>(null);

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

    gsap.set(plane1.current, {
      x: `+=${xForce.current}`,
      y: `+=${yForce.current}`,
    });
    gsap.set(plane2.current, {
      x: `+=${xForce.current * 0.9}`,
      y: `+=${yForce.current * 0.5}`,
    });
    gsap.set(plane3.current, {
      x: `+=${xForce.current * 0.1}`,
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

  useEffect(() => {
    return () => {
      if (requestAnimationFrameId.current) {
        cancelAnimationFrame(requestAnimationFrameId.current);
      }
    };
  }, []);

  return (
    <main onMouseMove={manageMouseMove} className={styles.main}>
      <motion.div
        key="profile"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="border-2 border-emerald-500 w-[90vw] h-[90vh] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50"></div>
        <div className="border-2 border-emerald-900 w-[90vw] h-[90vh] absolute -translate-x-1/2 -translate-y-1/2 top-[calc(50%+20px)] left-[calc(50%+10px)] z-50"></div>

        <MessageCircleCode className=" opacity-25 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-48 h-48 text-emerald-400" />
        <div className={styles.title}>
          <p className="z-2 text-emerald-900 font-semibold">
            Over 4 years, I design and build scalable, high-performance web
            applications using Next.js, React, Vue.js, and TypeScript. With
            strong expertise in RESTful API integration, frontend architecture,
            and performance optimization,
          </p>
        </div>

        {/* Plane 1: Gerakan paling cepat (depan) */}
        <div ref={plane1} className={`${styles.plane} hidden lg:block`}>
          <Image
            src={photo2}
            alt="image 1"
            width={150}
            placeholder="blur"
            className="bottom-0 left-20"
          />
          <Image
            src={photo1}
            alt="image 2"
            width={170}
            placeholder="blur"
            className="bottom-1 left-2/3"
          />
          <Image
            src={photo7}
            alt="image 3"
            width={125}
            placeholder="blur"
            className="bottom-3 left-1/2"
          />
        </div>
        {/* Plane 2: Gerakan sedang (tengah) */}
        <div ref={plane2} className={`${styles.plane} hidden lg:block`}>
          <Image
            src={photo8}
            alt="image 4"
            width={170}
            placeholder="blur"
            className="top-6 right-10"
          />
          <Image
            src={photo4}
            alt="image 5"
            width={150}
            placeholder="blur"
            className=" bottom-0 right-4"
          />
          <Image
            src={photo5}
            alt="image 8"
            width={200}
            placeholder="blur"
            className="left-72 -top-32"
          />
        </div>
        {/* Plane 3: Gerakan lambat (belakang/parallax jauh) */}
        <div ref={plane3} className={`${styles.plane} hidden lg:block`}>
          <Image
            src={photo3}
            alt="image 7"
            width={150}
            placeholder="blur"
            className="top-6 left-4"
          />
          <Image
            src={photo6}
            alt="image 6"
            width={150}
            placeholder="blur"
            className="-top-32 left-1/2"
          />
        </div>
      </motion.div>
    </main>
  );
}
