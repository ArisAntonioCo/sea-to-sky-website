"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState, type RefObject } from "react";

type HeroIntroProps = {
  onComplete: () => void;
  targetRef: RefObject<HTMLDivElement | null>;
};

type TargetBounds = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export function HeroIntro({ onComplete, targetRef }: HeroIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const [targetBounds, setTargetBounds] = useState<TargetBounds | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) {
      const completionTimer = window.setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 0);

      return () => window.clearTimeout(completionTimer);
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const measurementFrame = window.requestAnimationFrame(() => {
      const target = targetRef.current?.getBoundingClientRect();

      if (target) {
        setTargetBounds({
          top: target.top,
          left: target.left,
          width: target.width,
          height: target.height,
        });
      }
    });

    return () => {
      window.cancelAnimationFrame(measurementFrame);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete, shouldReduceMotion, targetRef]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed z-[60] overflow-hidden bg-sea-950 will-change-[top,left,width,height,border-radius]"
      initial={{ top: 0, left: 0, width: "100vw", height: "100dvh", borderRadius: 0 }}
      animate={targetBounds ? { ...targetBounds, borderRadius: 32 } : undefined}
      transition={{
        duration: 1.15,
        delay: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => {
        if (!targetBounds) return;
        setIsVisible(false);
        onComplete();
      }}
    >
      <Image
        src="/Images/hero-image.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-sea-950/48" />
      <motion.p
        aria-label="Sea to Sky"
        className="absolute inset-0 flex items-center justify-center px-6 text-center text-6xl font-semibold leading-none text-white sm:text-8xl lg:text-[8rem]"
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.97, 1, 1, 0.99], y: [16, 0, 0, -12] }}
        transition={{ duration: 1.55, times: [0, 0.28, 0.66, 1], ease: [0.22, 1, 0.36, 1] }}
      >
        Sea to Sky
      </motion.p>
    </motion.div>
  );
}
