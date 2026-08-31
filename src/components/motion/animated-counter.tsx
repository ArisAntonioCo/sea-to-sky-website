"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  prefix?: string;
  suffix?: string;
  target: number;
};

export function AnimatedCounter({ prefix = "", suffix = "", target }: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(counterRef, { amount: 0.6, once: true });
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);
  const displayValue = shouldReduceMotion ? target : value;

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      return;
    }

    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, target]);

  return (
    <span ref={counterRef} aria-hidden="true">
      {prefix}{displayValue}{suffix}
    </span>
  );
}
