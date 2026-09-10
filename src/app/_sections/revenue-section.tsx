import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion";

import { managementServices } from "./homepage-content";

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
  const service = managementServices[index];

  return (
    <article
      className={`group/card relative flex min-h-[30rem] flex-col overflow-hidden rounded-[1.5rem] p-8 transition-colors duration-500 sm:min-h-[32rem] sm:p-10 ${cardStyles[index % cardStyles.length]} hover:bg-sea-950`}
    >
      <div className="relative z-10 flex items-start justify-between gap-6">
        <span className="text-sm tabular-nums text-sea-700 transition-colors duration-500 group-hover/card:text-white/55">
          0{index + 1}
        </span>
        <ArrowUpRight className="size-5 text-sea-700 transition-all duration-500 group-hover/card:-translate-y-1 group-hover/card:translate-x-1 group-hover/card:text-white/70" />
      </div>

      <div className="relative z-10 max-w-xl">
        <h3 className="mt-7 text-3xl font-medium text-ink-950 transition-colors duration-500 sm:text-4xl group-hover/card:text-white">
          {service.title}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-8 text-ink-700 transition-colors duration-500 sm:text-lg group-hover/card:text-white/62">
          {service.description}
        </p>
      </div>

      <Image
        src={shapeAssets[index % shapeAssets.length]}
        alt=""
        width={256}
        height={256}
        className="pointer-events-none absolute bottom-8 left-1/2 size-[clamp(13rem,22vw,19rem)] -translate-x-1/2 opacity-45 mix-blend-multiply transition-all duration-700 ease-out group-hover/card:-translate-y-3 group-hover/card:rotate-3 group-hover/card:opacity-30 group-hover/card:brightness-0 group-hover/card:invert"
      />
    </article>
  );
}

export function RevenueSection() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-36">
      <Reveal className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="text-base font-medium text-sea-700">Complete property management</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl">
            Everything handled. Nothing overlooked.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-ink-700 lg:justify-self-end">
          From the first booking inquiry to the final quality check, we manage the details that protect your property, strengthen reviews, and grow revenue.
        </p>
      </Reveal>

      <div className="section-shell mt-14 sm:mt-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {managementServices.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.06}>
              <RevenueCard index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
