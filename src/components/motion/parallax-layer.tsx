"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  distance?: number;
};

export function ParallaxLayer({
  children,
  className,
  distance = 56,
}: ParallaxLayerProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-distance, distance],
  );

  return (
    <div ref={targetRef} className={cn("overflow-hidden", className)}>
      <motion.div className="h-full w-full will-change-transform" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
