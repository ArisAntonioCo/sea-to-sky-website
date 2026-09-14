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
import { cn } from "@/lib/utils";

import { includedServices } from "./services-content";

const serviceIcons = [
  PaintBrushIcon,
  CameraIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
];

const serviceCardSpans = [
  "lg:col-span-5",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-3",
];

const lightServiceCards = new Set([0, 4]);

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

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-12">
          {includedServices.map((service, index) => {
            const Icon = serviceIcons[index];
            const isLight = lightServiceCards.has(index);

            return (
              <Reveal
                key={service.title}
                delay={(index % 3) * 0.06}
                className={cn("md:col-span-1", serviceCardSpans[index])}
              >
                <article
                  className={cn(
                    "relative flex min-h-[17rem] h-full flex-col overflow-hidden rounded-lg p-6 shadow-[0_20px_60px_rgba(0,0,0,0.16)] ring-1 ring-inset backdrop-blur-xl sm:min-h-[18rem] sm:p-7",
                    isLight
                      ? "bg-white/[0.9] text-sea-950 ring-white/80"
                      : "bg-sea-950/58 text-white ring-white/16",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute right-5 top-2 text-[5rem] font-medium leading-none tracking-normal",
                      isLight ? "text-sea-950/[0.055]" : "text-white/[0.075]",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={cn(
                      "relative flex size-11 items-center justify-center rounded-full ring-1 ring-inset",
                      isLight ? "bg-sea-950/[0.055] ring-sea-950/10" : "bg-white/10 ring-white/14",
                    )}
                  >
                    <Icon
                      aria-hidden="true"
                      className={cn("size-5 stroke-[1.5]", isLight ? "text-sea-800" : "text-sea-300")}
                    />
                  </div>

                  <div className="relative mt-auto max-w-xl pt-8">
                    <h3 className="text-2xl font-medium leading-tight sm:text-[1.7rem]">{service.title}</h3>
                    <p className={cn("mt-3 text-base leading-6", isLight ? "text-sea-950/64" : "text-white/68")}>
                      {service.description}
                    </p>
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
