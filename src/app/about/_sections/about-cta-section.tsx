import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function AboutCtaSection() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="section-shell flex justify-center text-center">
        <Reveal className="flex flex-col items-center">
          <p className="text-base font-medium text-sea-700">The next step</p>
          <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.02] text-ink-950 sm:text-7xl lg:text-8xl">
            Increase your revenue.
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
