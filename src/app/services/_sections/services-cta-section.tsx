import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function ServicesCtaSection() {
  return (
    <Reveal className="relative min-h-[21rem] w-full overflow-hidden sm:min-h-[23rem] lg:min-h-[25rem]">
      <Image
        src="/Images/properties/midcentury-2.png"
        alt="Bright mid-century living room managed by Sea to Sky"
        fill
        quality={75}
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-[58%_center] lg:object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,7,0.96)_0%,rgba(5,8,7,0.82)_38%,rgba(5,8,7,0.26)_66%,rgba(5,8,7,0.04)_100%)] sm:bg-[linear-gradient(90deg,rgba(5,8,7,0.94)_0%,rgba(5,8,7,0.76)_34%,rgba(5,8,7,0.18)_62%,rgba(5,8,7,0)_84%)]"
      />

      <div className="section-shell relative z-10 flex min-h-[21rem] items-center py-10 sm:min-h-[23rem] sm:py-12 lg:min-h-[25rem]">
        <div className="max-w-3xl text-white">
          <h2 className="text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl">
            Looking to grow your short-term rental?
          </h2>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="mt-7 h-13 rounded-full bg-white px-7 text-base font-medium !text-ink-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/90 motion-reduce:transform-none motion-reduce:transition-none"
          >
            Contact us
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
