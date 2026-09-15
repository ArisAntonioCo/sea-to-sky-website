"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

import { properties } from "./homepage-content";

const AUTOPLAY_DELAY = 3000;
const CARD_WIDTH = "clamp(260px, 30vw, 480px)";
const GAP = 0.09;
const ROTATE = 42;
const DEPTH = 0.58;
const PERSPECTIVE = 3.25;
const FALLOFF = 0.56;

const coverflowProperties = [
  properties[3],
  properties[1],
  properties[4],
  properties[2],
  properties[0],
];

export type CoverflowItem = {
  description?: string;
  image: string;
  location: string;
  type: string;
};

type PropertiesCoverflowProps = {
  ariaLabel?: string;
  items?: readonly CoverflowItem[];
};

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function PropertiesCoverflow({
  ariaLabel = "Featured properties",
  items = coverflowProperties,
}: PropertiesCoverflowProps = {}) {
  const shouldReduceMotion = useReducedMotion();
  const count = items.length;
  const frameRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const positionRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const animationFrameRef = React.useRef<number | null>(null);
  const didDragRef = React.useRef(false);
  const dragRef = React.useRef<{
    id: number;
    startX: number;
    startPosition: number;
    velocity: number;
    time: number;
    moved: boolean;
  } | null>(null);
  const [selected, setSelected] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const indexAt = React.useCallback(
    (position: number) => ((Math.round(position) % count) + count) % count,
    [count],
  );

  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width) {
      return;
    }

    const pitch = width * (1 + GAP);
    const position = positionRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) {
        return;
      }

      let offset = index - position;
      offset = ((offset % count) + count) % count;
      if (offset > count / 2) {
        offset -= count;
      }

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, FALLOFF);
      const tilt = shouldReduceMotion
        ? 0
        : Math.min(ROTATE * ramp, 82) * Math.sign(offset);
      const depth = shouldReduceMotion ? 0 : -DEPTH * width * ramp;
      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${depth}px) rotateY(${-tilt}deg)`;
      card.style.opacity = "1";
      card.style.zIndex = String(100 - Math.round(distance));
      card.style.pointerEvents = "auto";
    });
  }, [count, shouldReduceMotion]);

  const settle = React.useCallback(
    (target: number) => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      targetRef.current = target;
      setSelected(indexAt(target));

      if (shouldReduceMotion) {
        positionRef.current = target;
        paint();
        animationFrameRef.current = null;
        return;
      }

      const step = () => {
        const remaining = target - positionRef.current;
        if (Math.abs(remaining) < 0.0004) {
          positionRef.current = target;
          paint();
          animationFrameRef.current = null;
          return;
        }

        positionRef.current += remaining * 0.16;
        paint();
        animationFrameRef.current = requestAnimationFrame(step);
      };

      animationFrameRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint, shouldReduceMotion],
  );

  const goTo = React.useCallback(
    (index: number) => {
      const target = index + Math.round((targetRef.current - index) / count) * count;
      settle(target);
    },
    [count, settle],
  );

  const nudge = React.useCallback(
    (amount: number) => settle(Math.round(targetRef.current) + amount),
    [settle],
  );

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = positionRef.current;
    setIsPaused(true);
    dragRef.current = {
      id: event.pointerId,
      startX: event.clientX,
      startPosition: positionRef.current,
      velocity: 0,
      time: performance.now(),
      moved: false,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) {
      return;
    }

    const pitch = widthRef.current * (1 + GAP);
    if (!pitch) {
      return;
    }

    const now = performance.now();
    const previousPosition = positionRef.current;
    const distance = event.clientX - drag.startX;
    positionRef.current = drag.startPosition - distance / pitch;
    drag.velocity =
      ((positionRef.current - previousPosition) / Math.max(now - drag.time, 1)) * 1000;
    drag.time = now;
    drag.moved = drag.moved || Math.abs(distance) > 5;

    const currentIndex = indexAt(positionRef.current);
    if (currentIndex !== selected) {
      setSelected(currentIndex);
    }
    paint();
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) {
      return;
    }

    dragRef.current = null;
    didDragRef.current = drag.moved;
    requestAnimationFrame(() => {
      didDragRef.current = false;
    });

    const carried = Math.max(-2, Math.min(2, drag.velocity * 0.18));
    settle(Math.round(positionRef.current + carried));

    if (event.pointerType !== "mouse") {
      setIsPaused(false);
    }
  };

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) {
        return;
      }

      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  React.useEffect(() => {
    if (isPaused || shouldReduceMotion) {
      return;
    }

    const intervalId = window.setInterval(() => nudge(1), AUTOPLAY_DELAY);
    return () => window.clearInterval(intervalId);
  }, [isPaused, nudge, shouldReduceMotion]);

  React.useEffect(
    () => () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    },
    [],
  );

  return (
    <div
      className="w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      style={{ ["--property-card" as string]: CARD_WIDTH }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div>
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="cursor-grab overflow-hidden py-8 outline-none focus-visible:ring-2 focus-visible:ring-sea-700 active:cursor-grabbing sm:py-10"
          style={{
            perspective: `calc(var(--property-card) * ${PERSPECTIVE})`,
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "var(--property-card)",
              transformStyle: "preserve-3d",
            }}
          >
            {items.map((property, index) => (
              <button
                key={property.image}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                type="button"
                tabIndex={index === selected ? 0 : -1}
                onClick={() => {
                  if (!didDragRef.current) {
                    goTo(index);
                  }
                }}
                aria-label={`${index + 1} of ${count}: ${property.type} in ${property.location}`}
                aria-current={index === selected ? "true" : undefined}
                className="group absolute left-1/2 top-0 aspect-square cursor-pointer overflow-hidden rounded-[1.25rem] bg-sea-950 text-left will-change-transform focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-sea-950"
                style={{ width: "var(--property-card)" }}
              >
                <Image
                  src={property.image}
                  alt={`${property.type} in ${property.location}`}
                  fill
                  quality={65}
                  draggable={false}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 34vw, 60vw"
                  className="select-none object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sea-950/88 via-sea-950/8 to-transparent" />
                <motion.span
                  className="absolute inset-x-0 bottom-0 block p-5 text-white sm:p-6"
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                >
                  <span className="block text-sm text-white/72">{property.type}</span>
                  <span className="mt-1 block text-xl font-medium leading-tight sm:text-2xl">
                    {property.location}
                  </span>
                  {property.description ? (
                    <span className="mt-3 line-clamp-3 block max-w-sm text-sm leading-6 text-white/78 sm:text-base">
                      {property.description}
                    </span>
                  ) : null}
                </motion.span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1">
        <button
          type="button"
          aria-label="Previous property"
          title="Previous property"
          onClick={() => nudge(-1)}
          className="grid size-11 cursor-pointer place-items-center rounded-full text-sea-950/60 transition-colors duration-200 hover:text-sea-950 focus-visible:ring-2 focus-visible:ring-sea-700"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>

        {items.map((property, index) => (
          <button
            key={property.image}
            type="button"
            aria-label={`Go to ${property.type} in ${property.location}`}
            aria-current={index === selected ? "true" : undefined}
            onClick={() => goTo(index)}
            className="grid size-11 cursor-pointer place-items-center rounded-full focus-visible:ring-2 focus-visible:ring-sea-700"
          >
            <span
              className={`block h-1.5 rounded-full bg-sea-950 transition-[width,opacity] duration-300 ${
                index === selected ? "w-7 opacity-100" : "w-1.5 opacity-25"
              }`}
            />
          </button>
        ))}

        <button
          type="button"
          aria-label="Next property"
          title="Next property"
          onClick={() => nudge(1)}
          className="grid size-11 cursor-pointer place-items-center rounded-full text-sea-950/60 transition-colors duration-200 hover:text-sea-950 focus-visible:ring-2 focus-visible:ring-sea-700"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
