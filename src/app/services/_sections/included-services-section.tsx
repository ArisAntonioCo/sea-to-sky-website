import {
  ArchiveBoxIcon,
  BookOpenIcon,
  CameraIcon,
  CurrencyDollarIcon,
  PaintBrushIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

import { Reveal } from "@/components/motion";

import { includedServices } from "./services-content";

const serviceIcons = [
  PaintBrushIcon,
  CameraIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
];

export function IncludedServicesSection() {
  return (
    <section className="relative overflow-hidden bg-sea-950 py-24 text-white sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute -right-48 -top-48 size-[34rem] rounded-full border border-white/10" />
      <div className="section-shell relative">
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-base font-medium text-white/58">What we include</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
              Turn-key support, thoughtfully delivered.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/65 lg:justify-self-end">
            We enable turn-key, hands-off service to our short-term rental customers. These are the most common areas where we go above and beyond.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {includedServices.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <Reveal key={service.title} delay={(index % 3) * 0.06}>
                <article className="flex min-h-[22rem] flex-col rounded-[1.5rem] bg-white/[0.045] p-7 text-white ring-1 ring-inset ring-white/[0.07] sm:min-h-[24rem] sm:p-9">
                  <Icon aria-hidden="true" className="size-8 stroke-[1.35] text-sea-400" />
                  <div className="mt-auto pt-14">
                    <h3 className="text-3xl font-medium leading-tight">{service.title}</h3>
                    <p className="mt-4 text-base leading-7 text-white/62">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
