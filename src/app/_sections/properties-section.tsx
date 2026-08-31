"use client";

import { ArrowUpRight, CornerDownRight } from "lucide-react";
import { motion, useInView, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

import { properties } from "./homepage-content";

type Property = (typeof properties)[number];

function PropertyStory({ index, property }: { index: number; property: Property }) {
  const cardRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.84, 1, 0.84]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.58, 1, 0.58]);

  return (
    <article
      ref={cardRef}
      id={`property-${index + 1}`}
      className="flex min-h-[78svh] scroll-mt-28 items-center py-8 first:pt-0 last:min-h-0 last:pb-0 lg:min-h-[88svh] lg:py-12"
    >
      <motion.div
        className="w-full origin-center"
        style={shouldReduceMotion ? undefined : { opacity, scale }}
      >
        <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-sea-950 sm:aspect-[16/10]">
          <Image
            src={property.image}
            alt={`${property.type} in ${property.location}`}
            fill
            sizes="(min-width: 1280px) 68vw, (min-width: 1024px) 72vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sea-950/68 via-transparent to-transparent" />
          <span className="absolute right-5 top-5 rounded-full border border-white/35 bg-white/14 p-3 text-white backdrop-blur-md">
            <ArrowUpRight className="size-5" />
          </span>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-white sm:p-8">
            <div>
              <p className="text-sm text-white/70">{property.type}</p>
              <h3 className="mt-1 text-3xl font-medium sm:text-4xl">{property.location}</h3>
            </div>
            <span className="text-sm text-white/70">0{index + 1}</span>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

export function PropertiesSection() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isShowcaseInView = useInView(showcaseRef, { margin: "-20% 0px -20% 0px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      properties.length - 1,
      Math.max(0, Math.floor(latest * properties.length)),
    );
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <section id="properties" className="scroll-mt-24 bg-sand-100 py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-base font-medium text-sea-700">A selection of stays</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl lg:text-7xl">
              Properties with a strong sense of place.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-ink-700">
            Scroll through a considered portfolio spanning coastal escapes, mountain homes, and city stays.
          </p>
        </Reveal>

        <div ref={showcaseRef} className="relative mt-16 lg:grid lg:grid-cols-[17rem_1fr] lg:gap-16 xl:grid-cols-[20rem_1fr] xl:gap-24">
          <nav aria-label="Property showcase progress" className="sticky top-24 z-20 -mx-5 overflow-x-auto border-y border-sea-900/12 bg-sand-100/94 px-5 py-4 [scrollbar-width:none] backdrop-blur-md [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 lg:mx-0 lg:h-fit lg:overflow-visible lg:border-0 lg:bg-transparent lg:px-0 lg:py-8 lg:backdrop-blur-none">
            <ol className="flex min-w-max gap-7 lg:min-w-0 lg:flex-col lg:gap-2">
              {properties.map((property, index) => {
                const isActive = isShowcaseInView && activeIndex === index;

                return (
                  <li key={`${property.type}-${property.location}`}>
                    <a
                      href={`#property-${index + 1}`}
                      aria-current={isActive ? "step" : undefined}
                      className={cn(
                        "relative flex min-h-11 items-center py-2 text-xl leading-tight text-ink-700 transition-[color,opacity,padding] duration-300 lg:text-2xl xl:text-3xl",
                        isActive ? "pl-10 text-sea-950 opacity-100 lg:pl-12" : "opacity-20 hover:opacity-45",
                      )}
                    >
                      <motion.span
                        aria-hidden="true"
                        animate={shouldReduceMotion ? undefined : { opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                        className="absolute left-0 inline-flex shrink-0"
                        transition={{ duration: 0.25 }}
                      >
                        <CornerDownRight className="size-6 lg:size-7" strokeWidth={1.5} />
                      </motion.span>
                      <span>{property.location}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div>
            {properties.map((property, index) => (
              <PropertyStory
                key={`${property.location}-${property.image}`}
                index={index}
                property={property}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
