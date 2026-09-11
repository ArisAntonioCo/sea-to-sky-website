import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

import { differences } from "./about-content";

const columnOffsets = ["lg:pt-0", "lg:pt-24", "lg:pt-12"];

export function DifferenceSection() {
  return (
    <section className="relative overflow-hidden bg-sea-950 py-24 text-white sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(117,153,162,0.12),transparent_62%)]" />

      <div className="section-shell relative">
        <Reveal className="max-w-5xl">
          <p className="text-base font-medium text-white/58">What makes us different</p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
            Local care. Professional performance.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 sm:mt-20 lg:grid-cols-3 lg:gap-10 xl:gap-14">
          {differences.map((item, index) => (
            <Reveal
              key={item.title}
              className={cn("min-w-0", columnOffsets[index])}
              delay={index * 0.07}
            >
              <article className="relative min-h-[25rem] border-t border-white/18 pt-6 sm:min-h-[27rem] sm:pt-8">
                <p
                  aria-hidden="true"
                  className="text-[6.5rem] font-medium leading-none tabular-nums text-white/[0.07] sm:text-[8rem] xl:text-[9.5rem]"
                >
                  0{index + 1}
                </p>
                <div className="mt-8 sm:mt-10">
                  <h3 className="text-3xl font-medium leading-tight">{item.title}</h3>
                  <p className="mt-5 max-w-md text-base leading-8 text-white/65 sm:text-lg">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
