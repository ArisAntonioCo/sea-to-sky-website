import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

const imageFilter =
  "[filter:hue-rotate(-28deg)_saturate(0.48)_contrast(0.96)]";

export function EstimateSection() {
  return (
    <section
      id="estimate"
      className="relative isolate min-h-[34rem] scroll-mt-24 overflow-hidden bg-white py-28 sm:min-h-[40rem] sm:py-36 lg:min-h-[44rem] lg:py-44"
    >
      <div
        className="contact-float pointer-events-none absolute -left-12 top-20 hidden size-52 sm:block lg:left-[5%] lg:top-16 lg:size-72"
        aria-hidden="true"
      >
        <Image
          src="/Images/Section/revenue.png"
          alt=""
          fill
          sizes="288px"
          className={`object-contain ${imageFilter}`}
        />
      </div>

      <div
        className="contact-float contact-float-delayed pointer-events-none absolute bottom-6 left-[14%] hidden size-44 md:block lg:bottom-4 lg:left-[20%] lg:size-56"
        aria-hidden="true"
      >
        <Image
          src="/Images/Section/guest-exp.png"
          alt=""
          fill
          sizes="224px"
          className={`object-contain ${imageFilter}`}
        />
      </div>

      <div
        className="contact-float contact-float-reverse pointer-events-none absolute -right-12 top-16 hidden size-56 sm:block lg:right-[5%] lg:top-12 lg:size-80"
        aria-hidden="true"
      >
        <Image
          src="/Images/House.png"
          alt=""
          fill
          sizes="320px"
          className={`object-contain ${imageFilter}`}
        />
      </div>

      <div className="section-shell relative z-10 flex min-h-[20rem] items-center justify-center sm:min-h-[24rem] lg:min-h-[26rem]">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-4xl text-5xl font-medium leading-[0.98] text-ink-950 sm:text-7xl lg:text-8xl">
            See what your property could earn
          </h2>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="mt-10 h-14 rounded-full bg-sea-800 px-8 text-base font-normal !text-white hover:bg-sea-700"
          >
            Get a Free Revenue Estimate
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-white/75 backdrop-blur-[3px] [mask-image:linear-gradient(to_bottom,transparent,black_78%)]"
        aria-hidden="true"
      />
    </section>
  );
}
