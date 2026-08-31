import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-sea-700 py-24 text-white sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-base font-medium text-white/68">Let’s work together</p>
              <h2 className="mt-5 max-w-5xl text-5xl font-medium leading-[0.95] sm:text-7xl lg:text-8xl">
                Ready for a better way to host?
              </h2>
            </div>
            <Button
              render={<Link href="mailto:hello@seatoskyrental.com" />}
              nativeButton={false}
              className="size-28 rounded-full bg-white !text-sea-900 hover:bg-sand-100 sm:size-36"
              aria-label="Email Sea to Sky"
            >
              <ArrowUpRight className="size-7 sm:size-9" />
            </Button>
          </div>
          <div className="mt-16 flex flex-col gap-5 border-t border-white/24 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg leading-8 text-white/72">
              Tell us about your property and where you’d like its performance to go next.
            </p>
            <Link href="mailto:hello@seatoskyrental.com" className="inline-flex min-h-11 items-center gap-2 py-2 text-base hover:text-white/72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <Mail className="size-4" />
              hello@seatoskyrental.com
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
