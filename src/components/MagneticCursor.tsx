import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function MagneticCursor({ children }: { children: React.ReactElement }) {
    const magnetic = useRef<HTMLElement>(null);

    useEffect(() => {
        // Menggunakan elastic ease agar terasa lebih "kenyal" dan futuristik
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 0.8, ease: "elastic.out(1, 0.3)" })
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 0.8, ease: "elastic.out(1, 0.3)" })

        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const rect = magnetic.current?.getBoundingClientRect();
            if (!rect) return;
            
            const { height, width, left, top } = rect;
            // Menghitung jarak dari pusat elemen
            const x = (clientX - (left + width / 2)) * 0.35; // Multiplier 0.35 agar tidak terlalu jauh
            const y = (clientY - (top + height / 2)) * 0.35;
            
            xTo(x);
            yTo(y);
        }

        const mouseLeave = () => {
            // Mengembalikan ke posisi semula dengan smooth
            xTo(0);
            yTo(0);
        }

        const el = magnetic.current;
        if (el) {
            el.addEventListener("mousemove", mouseMove);
            el.addEventListener("mouseleave", mouseLeave);

            return () => {
                el.removeEventListener("mousemove", mouseMove);
                el.removeEventListener("mouseleave", mouseLeave);
            }
        }
    }, []);

    return React.cloneElement(children, { ref: magnetic });
}