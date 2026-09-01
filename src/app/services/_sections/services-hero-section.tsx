import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function ServicesHeroSection() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-white px-2 pb-2 pt-20 text-white sm:px-3 sm:pb-3 sm:pt-24 lg:px-4 lg:pb-4">
      <div className="relative isolate flex min-h-[calc(100svh-5.5rem)] items-end overflow-hidden rounded-[1.5rem] bg-sea-950 px-6 py-12 sm:min-h-[calc(100svh-6.75rem)] sm:rounded-[2rem] sm:px-10 sm:py-16 lg:min-h-[calc(100svh-7rem)] lg:px-12 lg:py-20">
        <Image
          src="/Images/properties/tulum-mexico.png"
          alt="A Sea to Sky managed rental property"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,27,33,0.88)_0%,rgba(7,27,33,0.46)_62%,rgba(7,27,33,0.2)_100%)]" />

        <Reveal>
          <p className="text-base text-white/70">Our services</p>
          <h1 className="mt-5 max-w-5xl text-6xl font-semibold leading-[0.95] sm:text-7xl lg:text-[5.75rem]">
            We protect your property.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
            Your property is our priority. We ensure it’s well-maintained, secure, and cared for, so you can enjoy peace of mind while maximizing its potential. From routine checks to professional care, we’ve got you covered.
          </p>
          <Button
            render={<Link href="/#contact" />}
            nativeButton={false}
            className="mt-8 h-13 rounded-full bg-white px-7 text-base font-normal !text-sea-950 hover:bg-sand-100"
          >
            Talk to our team
            <ArrowDownRight className="size-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
