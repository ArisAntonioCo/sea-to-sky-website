import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function AboutCtaSection() {
  return (
    <section className="bg-white px-2 py-2 sm:px-3 sm:py-3 lg:px-4 lg:py-4">
      <div className="relative isolate flex min-h-[70svh] items-end overflow-hidden rounded-[1.5rem] bg-sea-950 px-6 py-12 text-white sm:rounded-[2rem] sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <Image
          src="/Images/hero-image.png"
          alt="The Sea to Sky coastline"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,27,33,0.9)_0%,rgba(7,27,33,0.38)_72%,rgba(7,27,33,0.22)_100%)]" />
        <Reveal>
          <p className="text-base text-white/65">The next step</p>
          <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.02] sm:text-7xl lg:text-8xl">
            Increase your revenue.
          </h2>
          <Button
            render={<Link href="/#contact" />}
            nativeButton={false}
            className="mt-8 h-13 rounded-full bg-white px-7 text-base font-normal !text-sea-950 hover:bg-sand-100"
          >
            Contact us
            <ArrowUpRight className="size-4" />
          </Button>
        </Reveal>
        <p className="absolute bottom-5 right-6 text-xs text-white/55">Media credit</p>
      </div>
    </section>
  );
}
