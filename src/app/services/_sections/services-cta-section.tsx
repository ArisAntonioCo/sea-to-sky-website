import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function ServicesCtaSection() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="section-shell flex justify-center text-center">
        <Reveal className="flex flex-col items-center">
          <h2 className="max-w-4xl text-5xl font-medium leading-[1.02] text-ink-950 sm:text-7xl lg:text-8xl">
            Looking to grow your short-term rental?
          </h2>
          <Button
            render={<Link href="/#contact" />}
            nativeButton={false}
            className="mt-8 h-13 rounded-full bg-sea-800 px-7 text-base font-normal !text-white hover:bg-sea-700"
          >
            Contact us
            <ArrowUpRight className="size-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
