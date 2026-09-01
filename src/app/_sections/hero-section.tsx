"use client";

import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

import { heroContent } from "./homepage-content";
import { HeroIntro } from "./hero-intro";
import { PartnersSection } from "./partners-section";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [introComplete, setIntroComplete] = useState(false);
  const heroFrameRef = useRef<HTMLDivElement>(null);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <section
      id="home"
      className="relative min-h-svh scroll-mt-24 overflow-hidden bg-white px-2 pt-20 text-white sm:px-3 sm:pt-24 lg:px-4"
    >
      <HeroIntro onComplete={handleIntroComplete} targetRef={heroFrameRef} />
      <div className="flex min-h-[calc(100svh-5rem)] w-full flex-col sm:min-h-[calc(100svh-6rem)]">
        <div ref={heroFrameRef} className="relative isolate flex min-h-[36rem] flex-1 overflow-hidden rounded-[1.5rem] bg-sea-950 [clip-path:inset(0_round_1.5rem)] sm:min-h-[39rem] sm:rounded-[2rem] sm:[clip-path:inset(0_round_2rem)]">
          <motion.div
            data-media-slot="hero"
            className="absolute inset-0"
            initial={false}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/Images/hero-image.png"
              alt="The Sea to Sky corridor winding along the British Columbia coast"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,33,0.76)_0%,rgba(7,27,33,0.28)_60%,rgba(7,27,33,0.16)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sea-950/70 to-transparent" />
          </motion.div>

          <motion.div
            className="relative z-10 flex min-h-full w-full flex-col justify-end px-5 py-9 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-12"
          >
            <div className="max-w-6xl">
              <motion.p
                className="mb-4 text-base font-normal text-white/74 sm:text-lg"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.55, delay: 0 }}
              >
                {heroContent.eyebrow}
              </motion.p>
              <motion.h1
                aria-label={`${heroContent.titleTop} ${heroContent.titleBottom.join(" ")}`}
                className="text-6xl font-semibold leading-[0.94] sm:text-7xl lg:text-[5.5rem] xl:text-[5.75rem]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
                animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{ duration: 0.75, delay: 0.03, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block">{heroContent.titleTop}.</span>
                <span className="block md:whitespace-nowrap">{heroContent.titleBottom.join(" ")}.</span>
              </motion.h1>
            </div>

            <motion.div
              className="mt-6 max-w-2xl sm:mt-8"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <p className="max-w-xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
                {heroContent.description}
              </p>
              <Button
                render={<Link href="#contact" />}
                nativeButton={false}
                className="mt-7 h-13 w-fit rounded-full bg-white px-7 text-base font-normal !text-sea-950 hover:bg-sand-100"
              >
                {heroContent.cta}
                <ArrowDownRight className="size-4" />
              </Button>
            </motion.div>
          </motion.div>

        </div>

        <PartnersSection />
      </div>
    </section>
  );
}
