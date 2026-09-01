"use client";

import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { Reveal } from "@/components/motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { testimonials } from "./homepage-content";

function TestimonialAvatar({ name, src }: { name: string; src: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <Avatar className="size-14" aria-label={name}>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback className="bg-sea-700 text-sm font-medium text-white">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!api) return;

    const updateSelection = () => setSelectedIndex(api.selectedScrollSnap());
    updateSelection();
    api.on("select", updateSelection);

    return () => {
      api.off("select", updateSelection);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused || shouldReduceMotion) return;

    const rotationTimer = window.setInterval(() => api.scrollNext(), 6500);
    return () => window.clearInterval(rotationTimer);
  }, [api, isPaused, shouldReduceMotion]);

  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-36">
      <div className="section-shell">
        <Reveal>
          <h2 className="mx-auto max-w-[68rem] text-center text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[1.02] text-ink-950">
            <span className="block">A partner you can trust.</span>
            <span className="mt-3 block text-sea-900/34">Better stays. Stronger returns.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid min-w-0 gap-5 lg:mt-24 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal className="min-w-0">
            <aside className="flex min-h-80 flex-col rounded-[1.5rem] bg-sand-100 p-8 text-ink-950 sm:p-10 lg:h-[33rem]">
              <Quote className="size-24 text-sea-900/[0.09] sm:size-32" fill="currentColor" strokeWidth={0} />
              <div className="mt-auto">
                <p className="max-w-sm text-3xl font-medium leading-tight">
                  Trusted where it matters most.
                </p>
                <p className="mt-5 text-base text-ink-700">Why owners rely on Sea to Sky</p>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0">
            <div
              className="relative min-h-[32rem] min-w-0 overflow-hidden rounded-[1.5rem] bg-[#e7eeeb] text-ink-950 lg:h-[33rem]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={() => setIsPaused(false)}
            >
              <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="h-full min-w-0">
                <CarouselContent className="h-full">
                  {testimonials.map((item, index) => (
                    <CarouselItem key={item.name} className="h-full">
                      <motion.article
                        animate={{
                          opacity: selectedIndex === index ? 1 : 0.22,
                          y: selectedIndex === index ? 0 : 18,
                        }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="flex min-h-[32rem] min-w-0 flex-col p-8 pt-24 sm:p-10 sm:pt-24 lg:h-[33rem] lg:p-12 lg:pt-24"
                      >
                        <blockquote className="max-w-4xl text-2xl font-light leading-[1.25] text-ink-700 sm:text-3xl lg:text-4xl">
                          <span className="text-ink-950">“{item.quote}”</span>
                        </blockquote>

                        <footer className="mt-auto flex items-center gap-4 pt-14">
                          <TestimonialAvatar name={item.name} src={item.avatar} />
                          <div>
                            <p className="text-lg font-medium text-ink-950">{item.name}</p>
                            <p className="mt-1 text-base text-ink-700">{item.location}</p>
                          </div>
                        </footer>
                      </motion.article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <div className="absolute left-8 top-8 z-10 flex gap-2 sm:left-10 sm:top-10 lg:left-14 lg:top-14">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show testimonial from ${item.name}`}
                    aria-current={selectedIndex === index ? "true" : undefined}
                    onClick={() => api?.scrollTo(index)}
                    className={`size-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sea-700 ${
                      selectedIndex === index ? "scale-110 bg-sea-800" : "bg-sea-900/20 hover:bg-sea-900/45"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
