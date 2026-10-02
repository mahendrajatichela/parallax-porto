"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export function ParallaxSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Fixed Background with Parallax */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
            alt="Parallax Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative w-full z-10 text-center text-white px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="flex w-full h-full">
            <div className="basis-1/3 items-center w-full h-full flex-row space-y-5">
              <div>
                <Button id="button-1" variant="secondary" className="w-1/2 rounded-full text-green-100 bg-green-700/50 hover:bg-green-700/80">
                  Login
                </Button>
              </div>
              <div>
                <Button id="button-2" variant="default" className="w-1/2 rounded-full text-green-100 bg-green-700/50 hover:bg-green-700/80">
                  Form
                </Button>
              </div>
              <div>
                <Button id="button-3" variant="secondary" className="w-1/2 rounded-full text-green-100 bg-green-700/50 hover:bg-green-700/80">
                  Form
                </Button>
              </div>
            </div>
            <div className="basis-2/3 items-center w-full h-full bg-gray-900/40 rounded-xl p-4">
              2
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
