import Image from "next/image";

import { Reveal } from "@/components/motion";

import { ProcessStepsSpotlight } from "./process-steps-spotlight";

export function ProcessSection() {
  return (
    <section id="approach" className="scroll-mt-24 bg-white pb-24 pt-8 sm:pb-28 sm:pt-8 lg:pb-32 lg:pt-10">
      <div className="section-shell grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <Reveal>
            <p className="text-base font-medium text-sea-700">How it works</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-5xl lg:text-[3.5rem]">
              From first conversation to effortless ownership.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-700">
              A clear, hands-on process tailored to your property, your goals, and the experience you want to provide.
            </p>
          </Reveal>

          <Reveal className="mt-10 sm:mt-12" delay={0.08}>
            <div className="relative aspect-[4/3] min-h-64 overflow-hidden rounded-[1.75rem] bg-sea-950">
              <Image
                src="/Images/how.png"
                alt="Sea to Sky property management process"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sea-950/28 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <ProcessStepsSpotlight />
      </div>
    </section>
  );
}
