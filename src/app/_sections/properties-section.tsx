import Image from "next/image";

import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

import { properties } from "./homepage-content";

type Property = (typeof properties)[number];

const galleryProperties = [
  properties[3],
  properties[1],
  properties[4],
  properties[2],
  properties[0],
];

const galleryLayout = [
  "md:col-span-2 lg:col-span-6 lg:row-span-3",
  "lg:col-span-3 lg:row-span-1",
  "lg:col-span-3 lg:row-span-2",
  "lg:col-span-3 lg:row-span-2",
  "lg:col-span-3 lg:row-span-1",
];

function PropertyTile({
  className,
  delay,
  priority = false,
  property,
}: {
  className: string;
  delay: number;
  priority?: boolean;
  property: Property;
}) {
  return (
    <Reveal className={cn("min-h-0", className)} delay={delay} distance={18}>
      <article className="group relative h-full min-h-[18rem] overflow-hidden rounded-[1.25rem] bg-sea-950 md:min-h-[22rem] lg:min-h-0">
        <Image
          src={property.image}
          alt={`${property.type} in ${property.location}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sea-950/75 via-sea-950/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
          <p className="text-sm text-white/70">{property.type}</p>
          <h3 className="mt-1 text-xl font-medium sm:text-2xl">{property.location}</h3>
        </div>
      </article>
    </Reveal>
  );
}

export function PropertiesSection() {
  return (
    <section id="properties" className="scroll-mt-24 bg-sand-100 py-24 sm:py-32 lg:py-36">
      <div className="section-shell">
        <Reveal className="grid gap-6 md:grid-cols-[minmax(0,1fr)_22rem] md:items-end md:gap-12">
          <div>
            <p className="text-base font-medium text-sea-700">A selection of stays</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl lg:text-7xl">
              Properties with a strong sense of place.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-ink-700 md:pb-1">
            A considered portfolio spanning coastal escapes, mountain homes, and city stays.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:h-[42rem] lg:grid-cols-12 lg:grid-rows-3 lg:gap-3 xl:h-[46rem]">
          {galleryProperties.map((property, index) => (
            <PropertyTile
              key={`${property.location}-${property.image}`}
              property={property}
              className={galleryLayout[index]}
              delay={index * 0.06}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
