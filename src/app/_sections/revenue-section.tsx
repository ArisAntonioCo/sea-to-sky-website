import Image from "next/image";

import { Reveal } from "@/components/motion";

import { managementServices } from "./homepage-content";

const serviceMedia = [
  {
    src: "/Images/Section/revenue.png",
    alt: "Revenue growth price tag illustration",
    scaleClass: "scale-[1.02]",
  },
  {
    src: "/Images/Section/guest-exp.png",
    alt: "Property keys illustration",
    scaleClass: "scale-[1.28]",
  },
  {
    src: "/Images/Section/property-care.png",
    alt: "Property maintenance drill illustration",
    scaleClass: "scale-[0.98]",
  },
  {
    src: "/Images/Section/listing-management.png",
    alt: "Mobile property listing illustration",
    scaleClass: "scale-[1.02]",
  },
  {
    src: "/Images/Section/cleaning.png",
    alt: "Cleaning and restocking illustration",
    scaleClass: "scale-[1.02]",
  },
  {
    src: "/Images/Section/reporting.png",
    alt: "Owner reporting illustration",
    scaleClass: "scale-[1.02]",
  },
];

function RevenueCard({ index }: { index: number }) {
  const service = managementServices[index];
  const media = serviceMedia[index];

  return (
    <article
      className="group/card relative flex min-h-[32rem] flex-col overflow-hidden rounded-[1.5rem] bg-[#f7f8f7] p-8 ring-1 ring-sea-900/[0.04] sm:min-h-[35rem] sm:p-10"
    >
      <span className="relative z-10 text-sm tabular-nums text-sea-700">0{index + 1}</span>

      <div className="relative z-10 max-w-xl">
        <h3 className="mt-7 text-3xl font-medium text-ink-950 sm:text-4xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-8 text-ink-700 sm:text-lg">
          {service.description}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-14 h-[19rem] sm:h-[21rem]">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 90vw"
          className={`object-contain transition-transform duration-700 ease-out group-hover/card:-translate-y-2 ${media.scaleClass}`}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f8f7] via-[#f7f8f7]/80 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_0%,black_55%,transparent_100%)]"
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
