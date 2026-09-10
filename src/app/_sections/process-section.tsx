import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

import { processSteps } from "./homepage-content";

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

        <div>
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <article className={`grid gap-5 py-9 sm:grid-cols-[5rem_1fr] sm:py-11 ${index > 0 ? "border-t border-sea-900/18" : ""}`}>
                <p className="text-sm text-sea-700">{item.step}</p>
                <div>
                  <h3 className="text-3xl font-medium text-ink-950">
                    {item.title}
                  </h3>
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
      </div>
    </section>
  );
}
