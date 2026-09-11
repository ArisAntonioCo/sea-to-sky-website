import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FooterSignupForm } from "@/components/marketing/footer-signup-form";

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
    <footer className="overflow-hidden bg-white px-3 pt-16 text-ink-950 sm:px-5 sm:pt-20 lg:pt-24">
      <div className="relative mx-auto flex min-h-[15rem] max-w-[100rem] items-center justify-center overflow-hidden text-center sm:min-h-[18rem] lg:min-h-[21rem]">
        <div className="pointer-events-none absolute bottom-8 -left-6 size-28 sm:bottom-10 sm:-left-5 sm:size-52 lg:bottom-12 lg:left-2 lg:size-68">
          <Image
            src="/Images/Section/guest-exp.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 272px, (min-width: 640px) 208px, 112px"
            className="scale-150 object-contain object-bottom [filter:hue-rotate(-28deg)_saturate(0.48)_contrast(0.96)]"
          />
          <Image
            src="/Images/Section/guest-exp.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 272px, (min-width: 640px) 208px, 112px"
            className="scale-[1.53] object-contain object-bottom blur-[10px] [filter:hue-rotate(-28deg)_saturate(0.48)_contrast(0.96)] [mask-image:linear-gradient(to_bottom,transparent_55%,black_88%)]"
          />
        </div>

        <div className="pointer-events-none absolute -bottom-5 -right-6 size-28 sm:-bottom-8 sm:-right-5 sm:size-52 lg:right-2 lg:size-68">
          <Image
            src="/Images/House.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 272px, (min-width: 640px) 208px, 112px"
            className="object-contain object-bottom [filter:hue-rotate(-28deg)_saturate(0.48)_contrast(0.96)]"
          />
          <Image
            src="/Images/House.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 272px, (min-width: 640px) 208px, 112px"
            className="scale-[1.02] object-contain object-bottom blur-[10px] [filter:hue-rotate(-28deg)_saturate(0.48)_contrast(0.96)] [mask-image:linear-gradient(to_bottom,transparent_55%,black_88%)]"
          />
        </div>

        <div className="relative z-10 w-full px-10 sm:px-36 lg:px-72">
          <p className="text-[clamp(2.25rem,6.8vw,7rem)] font-medium leading-[0.84] tracking-normal">
          <span className="block text-ink-950/72">Better stays</span>
          <span className="block whitespace-nowrap bg-gradient-to-b from-ink-950/38 to-transparent bg-clip-text text-transparent">
            Stronger returns
          </span>
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_0%,black_48%,transparent_100%)]" />
      </div>

      <div className="relative isolate mx-auto flex max-w-[110rem] flex-col overflow-hidden rounded-xl bg-[#171a19] px-7 py-8 text-white sm:px-10 sm:py-9 lg:min-h-[29rem] lg:px-14 lg:py-10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/Images/properties/Vancouver-bc.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.38] [filter:saturate(0.6)_contrast(1.05)] [mask-image:linear-gradient(to_bottom,transparent_5%,black_58%,black_100%)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#171a19] via-[#171a19]/62 to-[#171a19]/28" />
        </div>

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.45fr_0.45fr_0.7fr] lg:gap-16">
          <div>
            <Link
              href="/#home"
              className="inline-flex min-h-11 items-center text-2xl font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Sea to Sky
            </Link>

            <div className="mt-8 max-w-md sm:mt-10">
              <h2 className="text-2xl font-medium leading-tight sm:text-3xl">
                Thoughtful management for better-performing stays
              </h2>
              <FooterSignupForm />
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm text-white/38">Explore</p>
            <ul className="mt-4 space-y-1 text-base text-white/78">
              {exploreNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-8 items-center transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <p className="text-sm text-white/38">Company</p>
            <ul className="mt-4 space-y-1 text-base text-white/78">
              {companyNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-8 items-center transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm text-white/38">Contact</p>
            <Link
              href="mailto:hello@seatoskyrental.com"
              className="mt-4 inline-flex min-h-10 items-center gap-2 text-base text-white/78 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail className="size-4" />
              hello@seatoskyrental.com
            </Link>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-10 text-sm text-white/38 sm:flex-row sm:items-end sm:justify-between">
          <p>© 2026 Sea to Sky. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
            <span>Short-term rental management</span>
          </div>
        </div>
      </div>

      <div className="h-3 sm:h-5" />
    </footer>
  );
}
