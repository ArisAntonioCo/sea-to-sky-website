"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/motion";

import { revenuePillars } from "./homepage-content";

const shapeAssets = [
  "/svg shapes/shape.svg",
  "/svg shapes/shape1.svg",
  "/svg shapes/shape2.svg",
  "/svg shapes/shape3.svg",
];

const cardStyles = [
  "bg-[#e7eeeb]",
  "bg-[#d9e5e6]",
  "bg-[#e9e0d3]",
  "bg-[#c9d9d8]",
];

function RevenueCard({ index }: { index: number }) {
  const pillar = revenuePillars[index];

  return (
    <article
      className={`group/card relative flex h-[clamp(32rem,76vh,48rem)] w-[clamp(21rem,29vw,38rem)] shrink-0 flex-col overflow-hidden rounded-[1.5rem] p-8 transition-colors duration-500 sm:p-10 ${cardStyles[index]} hover:bg-sea-950`}
    >
      <div className="relative z-10 flex items-start justify-between gap-6">
        <span className="text-sm tabular-nums text-sea-700 transition-colors duration-500 group-hover/card:text-white/55">
          0{index + 1}
        </span>
        <ArrowUpRight className="size-5 text-sea-700 transition-all duration-500 group-hover/card:-translate-y-1 group-hover/card:translate-x-1 group-hover/card:text-white/70" />
      </div>

      <div className="relative z-10 max-w-xl">
        <h3 className="mt-7 text-3xl font-medium text-ink-950 transition-colors duration-500 sm:text-4xl group-hover/card:text-white">
          {pillar.title}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-8 text-ink-700 transition-colors duration-500 sm:text-lg group-hover/card:text-white/62">
          {pillar.description}
        </p>
      </div>

      <Image
        src={shapeAssets[index]}
        alt=""
        width={256}
        height={256}
        className="pointer-events-none absolute bottom-8 left-1/2 size-[clamp(13rem,22vw,19rem)] -translate-x-1/2 opacity-45 mix-blend-multiply transition-all duration-700 ease-out group-hover/card:-translate-y-3 group-hover/card:rotate-3 group-hover/card:opacity-30 group-hover/card:brightness-0 group-hover/card:invert"
      />
    </article>
  );
}

export function RevenueSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragDistance, setDragDistance] = useState(0);
  const [showDragCursor, setShowDragCursor] = useState(false);
  const dragX = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const updateBounds = () => {
      if (!viewportRef.current || !trackRef.current) return;
      const nextDistance = Math.max(
        trackRef.current.scrollWidth - viewportRef.current.clientWidth,
        0,
      );
      setDragDistance(nextDistance);
      dragX.set(Math.max(dragX.get(), -nextDistance));
    };

    const observer = new ResizeObserver(updateBounds);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);

    return () => observer.disconnect();
  }, [dragX]);

  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-36">
      <Reveal className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl">
          More revenue without losing the human touch.
        </h2>
        <p className="max-w-xl text-lg leading-8 text-ink-700 lg:justify-self-end">
          Data informs every decision, while local knowledge and responsive guest care turn those decisions into stronger stays.
        </p>
      </Reveal>

      <div
        ref={viewportRef}
        className="mt-14 cursor-grab overflow-hidden active:cursor-grabbing sm:mt-16"
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setShowDragCursor(true);
        }}
        onPointerLeave={() => setShowDragCursor(false)}
        onPointerMove={(event) => {
          cursorX.set(event.clientX + 14);
          cursorY.set(event.clientY + 14);
        }}
      >
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -dragDistance, right: 0 }}
          dragElastic={0.06}
          dragMomentum
          style={{ x: dragX }}
          className="flex w-max gap-5 pl-[max(1.25rem,calc((100vw-90rem)/2+3rem))] pr-5 sm:pl-[max(2rem,calc((100vw-90rem)/2+3rem))] sm:pr-8 lg:pr-12"
        >
          {revenuePillars.map((pillar, index) => (
            <RevenueCard key={pillar.title} index={index} />
          ))}
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        style={{ x: cursorX, y: cursorY }}
        animate={{ opacity: showDragCursor ? 1 : 0, scale: showDragCursor ? 1 : 0.85 }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden rounded-full bg-sea-950 px-4 py-2 text-sm text-white shadow-sm lg:block"
      >
        Drag
      </motion.div>
    </section>
  );
}
