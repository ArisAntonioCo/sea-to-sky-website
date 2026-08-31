"use client";

import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";

import { heroContent } from "./homepage-content";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "14%"],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 90],
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-svh overflow-hidden bg-sea-950 text-white"
    >
      <motion.div
        aria-label="Hero media placeholder for scenic Sea to Sky footage"
        role="img"
        className="media-placeholder absolute -inset-x-8 -top-[14%] h-[128%] will-change-transform"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,31,38,0.66)_0%,rgba(10,31,38,0.26)_56%,rgba(10,31,38,0.48)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(150deg,transparent_0_26%,rgba(12,45,51,0.66)_26.2%_43%,rgba(10,35,42,0.9)_43.2%)] [clip-path:polygon(0_12%,31%_47%,50%_30%,72%_58%,100%_28%,100%_100%,0_100%)]" />
        <div className="absolute -right-[8%] top-[18%] h-[48vw] w-[48vw] rounded-full border border-white/14" />
        <div className="absolute -right-[2%] top-[24%] h-[36vw] w-[36vw] rounded-full border border-white/10" />
      </motion.div>

      <motion.div
        className="section-shell relative z-10 flex min-h-svh flex-col justify-end pb-12 pt-32 sm:pb-16 lg:pb-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-5xl">
          <motion.p
            className="mb-5 text-base font-medium text-white/74"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {heroContent.eyebrow}
          </motion.p>
          <motion.h1
            aria-label={`${heroContent.titleTop} ${heroContent.titleBottom.join(" ")}`}
            className="text-6xl font-medium leading-[0.9] sm:text-8xl lg:text-9xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">{heroContent.titleTop}</span>
            <span className="block font-light text-white/88">
              {heroContent.titleBottom.map((line, index) => (
                <span key={line} className="block sm:inline">
                  {line}
                  {index === 0 ? " " : null}
                </span>
              ))}
            </span>
          </motion.h1>
        </div>

        <motion.div
          className="mt-8 grid gap-7 border-t border-white/28 pt-6 md:grid-cols-[1fr_auto] md:items-end"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.58 }}
        >
          <p className="max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {heroContent.description}
          </p>
          <Button
            render={<Link href="#contact" />}
            nativeButton={false}
            className="h-13 w-fit rounded-full bg-white px-6 !text-sea-950 hover:bg-sand-100"
          >
            {heroContent.cta}
            <ArrowDownRight className="size-4" />
          </Button>
        </motion.div>
      </motion.div>

      <p className="absolute bottom-3 right-5 z-10 text-xs text-white/42 sm:bottom-5 sm:right-8">
        Scenic hero media placeholder
      </p>
    </section>
  );
}
