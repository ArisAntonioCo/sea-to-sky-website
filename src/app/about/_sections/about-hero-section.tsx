import Image from "next/image";

import { Reveal } from "@/components/motion";

export function AboutHeroSection() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-white px-2 pb-2 pt-20 sm:px-3 sm:pb-3 sm:pt-24 lg:px-4 lg:pb-4">
      <div className="grid min-h-[calc(100svh-5.5rem)] overflow-hidden rounded-[1.5rem] bg-sea-950 text-white sm:min-h-[calc(100svh-6.75rem)] sm:rounded-[2rem] lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex items-end px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
          <Reveal>
            <p className="text-base text-white/65">About Sea to Sky</p>
            <p className="mt-10 text-7xl font-medium leading-none sm:text-8xl lg:text-[9rem]">10</p>
            <h1 className="mt-4 max-w-xl text-4xl font-medium leading-[1.05] sm:text-6xl">
              Years of experience.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/72">
              With over a decade of experience, we understand the unique dynamics of the short-term rental industry. Our hands-off, full-service approach allows property owners to enjoy the benefits of their vacation rentals without the hassle.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
              Specializing in Airbnb property management, we focus on optimizing rental performance to help owners achieve higher earnings.
            </p>
          </Reveal>
        </div>

        <div className="relative min-h-[24rem] lg:min-h-full">
          <Image
            src="/Images/About.png"
            alt="A property manager reviewing a short-term rental"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sea-950/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-sea-950/35 lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
