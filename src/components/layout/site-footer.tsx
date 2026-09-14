import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const exploreNavigation = [
  { label: "Home", href: "/#home" },
  { label: "How it works", href: "/#approach" },
  { label: "Properties", href: "/#properties" },
];

const companyNavigation = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Services", href: "/services" },
];

export function SiteFooter() {
  return (
    <footer className="w-full overflow-hidden bg-[#0c0e0d] text-white">
      <div className="px-6 pb-8 pt-12 sm:px-10 sm:pb-10 sm:pt-16 lg:px-16 xl:px-20 2xl:px-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-[1fr_1fr_2.2fr] lg:gap-x-12">
          <nav aria-label="Footer navigation">
            <p className="text-sm text-white/60">Explore</p>
            <ul className="mt-4 space-y-1 text-xl font-medium sm:text-2xl">
              {exploreNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center transition-colors hover:text-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <p className="text-sm text-white/60">Company</p>
            <ul className="mt-4 space-y-1 text-xl font-medium sm:text-2xl">
              {companyNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center transition-colors hover:text-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 min-w-0 lg:col-span-1 lg:justify-self-end lg:text-right">
            <p className="text-sm text-white/60">Get in touch</p>
            <Link
              href="mailto:hello@seatoskyrental.com"
              className="mt-4 inline-flex min-h-11 max-w-full items-center break-all text-2xl font-medium leading-tight transition-colors hover:text-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-3xl xl:text-4xl"
            >
              hello@seatoskyrental.com
            </Link>
            <div className="mt-3 flex max-w-2xl flex-col gap-5 lg:items-end">
              <h2 className="text-base leading-relaxed text-white/65">
                Thoughtful management for better-performing stays
              </h2>
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                className="h-12 w-fit shrink-0 rounded-full bg-white px-6 text-base font-medium !text-sea-950 hover:bg-white/85 lg:ml-auto"
              >
                Get in touch
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        <Link
          href="/#home"
          aria-label="Sea to Sky home"
          className="relative mt-10 block aspect-[4/1] w-full overflow-hidden transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:mt-12"
        >
          <Image
            src="/sea-logo-1.png"
            alt="Sea to Sky"
            fill
            sizes="100vw"
            className="object-cover object-[center_43%]"
          />
        </Link>
      </div>

      <div className="relative isolate flex min-h-36 flex-col items-start justify-between gap-5 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:gap-8 lg:px-16 xl:px-20 2xl:px-28">
        <Image
          src="/Images/properties/Vancouver-bc.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[center_55%]"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-black/45" />
        <span className="text-sm text-white/90">Short-term rental management</span>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center gap-3 text-2xl font-medium transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-3xl"
        >
          Let&apos;s talk about your property
          <ArrowUpRight className="size-6 shrink-0" />
        </Link>
        <p className="text-sm text-white/90">© 2026 Sea to Sky. All rights reserved.</p>
      </div>
    </footer>
  );
}
