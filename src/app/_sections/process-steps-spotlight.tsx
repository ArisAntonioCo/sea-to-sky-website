"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

import { processSteps } from "./homepage-content";

type SpotlightStyle = CSSProperties & {
  "--spotlight-x": string;
  "--spotlight-y": string;
};

export function ProcessStepsSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);

  function updateSpotlight(event: PointerEvent<HTMLDivElement>) {
    const container = containerRef.current;
    if (!container) return;

    const bounds = container.getBoundingClientRect();
    container.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    container.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={updateSpotlight}
      className="group/steps relative"
      style={{ "--spotlight-x": "50%", "--spotlight-y": "30%" } as SpotlightStyle}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-0 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(117,153,162,0.18),transparent_72%)] opacity-0 transition-opacity duration-500 group-hover/steps:opacity-100"
        style={{ left: "var(--spotlight-x)", top: "var(--spotlight-y)" }}
      />

      {processSteps.map((item, index) => (
        <Reveal key={item.step} delay={index * 0.08}>
          <article
            className={`relative z-10 grid gap-5 py-9 transition-opacity duration-300 hover:!opacity-100 group-hover/steps:opacity-50 sm:grid-cols-[5rem_1fr] sm:py-11 ${index > 0 ? "border-t border-sea-900/18" : ""}`}
          >
            <p className="text-sm text-sea-700">{item.step}</p>
            <div>
              <h3 className="text-3xl font-medium text-ink-950">{item.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-ink-700 sm:text-lg">
                {item.description}
              </p>
            </div>
          </article>
        </Reveal>
      ))}

      <Reveal delay={0.24}>
        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          className="mt-7 h-13 rounded-full bg-sea-800 px-7 text-base font-normal !text-white hover:bg-sea-700"
        >
          Get Your Free Revenue Estimate
          <ArrowUpRight className="size-4" />
        </Button>
      </Reveal>
    </div>
  );
}
