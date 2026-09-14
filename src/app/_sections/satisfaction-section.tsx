import {
  ChartBarIcon,
  ClockIcon,
  FaceSmileIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import { AnimatedCounter, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

import { satisfactionStats } from "./homepage-content";

const satisfactionIcons = [FaceSmileIcon, LifebuoyIcon, ClockIcon, ChartBarIcon];

export function SatisfactionSection() {
  return (
    <section className="relative isolate overflow-hidden bg-sea-950 py-24 text-white sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/Images/hero-image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 [filter:saturate(0.72)_contrast(1.05)]"
        />
        <div className="absolute inset-0 bg-sea-950/68" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,33,0.72)_0%,rgba(7,27,33,0.38)_55%,rgba(7,27,33,0.6)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sea-950/72 to-transparent" />
      </div>

      <div className="section-shell relative z-10">
        <Reveal className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-base font-medium text-sea-400">Care you can measure</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
              Better stays. Stronger returns.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/68 lg:justify-self-end">
            Reliable operations, thoughtful communication, and responsive support create happier guests, stronger reviews, and better-performing properties.
          </p>
        </Reveal>

        <div className="mt-20 grid border-t border-white/18 sm:grid-cols-2 lg:grid-cols-4">
          {satisfactionStats.map((item, index) => {
            const Icon = satisfactionIcons[index];

            return (
              <Reveal key={item.label} delay={index * 0.06}>
                <article
                  className={cn(
                    "min-h-48 px-5 py-8 sm:min-h-52 sm:px-6 lg:px-7",
                    index < satisfactionStats.length - 1 ? "border-b border-white/18" : "border-b-0",
                    index % 2 === 0 && "sm:border-r sm:border-white/18",
                    index >= 2 && "sm:border-b-0",
                    "lg:border-b-0",
                    index < satisfactionStats.length - 1 ? "lg:border-r lg:border-white/18" : "lg:border-r-0",
                  )}
                >
                  <Icon aria-hidden="true" className="mb-8 size-7 stroke-[1.5] text-sea-400" />
                  <p aria-label={item.display} className="text-4xl font-medium sm:text-5xl">
                    <AnimatedCounter target={item.target} suffix={item.suffix} />
                  </p>
                  <p className="mt-5 max-w-40 text-sm leading-6 text-white/62">{item.label}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-7 max-w-3xl text-sm italic leading-6 text-white/48">
          Based on the performance of properties managed by Sea to Sky. Individual results vary by property, location, and season.
        </p>
      </div>
    </section>
  );
}
