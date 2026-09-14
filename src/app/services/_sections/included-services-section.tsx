import {
  ArchiveBoxIcon,
  BookOpenIcon,
  CameraIcon,
  CurrencyDollarIcon,
  PaintBrushIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

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
    <section className="relative isolate overflow-hidden bg-sea-950 py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/Images/properties/mid-century-1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-sea-950/66" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,33,0.76)_0%,rgba(7,27,33,0.5)_52%,rgba(7,27,33,0.62)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-sea-950/82 via-sea-950/34 to-transparent" />
      </div>

      <div className="section-shell relative z-10">
        <Reveal className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-base font-medium text-white/58">What we include</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
              Turn-key support, thoughtfully delivered.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/65 lg:justify-self-end">
            We enable turn-key, hands-off service to our short-term rental customers. These are the most common areas where we go above and beyond.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {includedServices.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <Reveal key={service.title} delay={(index % 3) * 0.06}>
                <article className="flex min-h-[17rem] flex-col rounded-[1.25rem] bg-sea-950/42 p-6 text-white ring-1 ring-inset ring-white/12 backdrop-blur-[3px] sm:min-h-[18rem] sm:p-7">
                  <Icon aria-hidden="true" className="size-7 stroke-[1.35] text-sea-400" />
                  <div className="mt-auto pt-8">
                    <h3 className="text-2xl font-medium leading-tight">{service.title}</h3>
                    <p className="mt-3 text-base leading-6 text-white/62">{service.description}</p>
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
