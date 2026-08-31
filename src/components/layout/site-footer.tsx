import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerNavigation = [
  { label: "Home", href: "/#home" },
  { label: "Our approach", href: "/#approach" },
  { label: "Properties", href: "/#properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative isolate flex min-h-[90svh] flex-col overflow-hidden bg-sea-950 text-white">
      <Image
        src="/Images/hero-image.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(4,20,25,0.96)_0%,rgba(7,28,34,0.88)_52%,rgba(7,28,34,0.72)_100%)]" />

      <div className="section-shell grid gap-14 pt-20 sm:pt-28 lg:grid-cols-[1fr_auto] lg:gap-24 lg:pt-32">
        <div>
          <h2 className="max-w-lg text-4xl font-medium leading-tight sm:text-5xl">
            Better stays. Stronger returns.
          </h2>
          <Link
            href="mailto:hello@seatoskyrental.com"
            className="mt-8 inline-flex min-h-11 items-center gap-3 py-2 text-base text-white/68 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Mail className="size-5" />
            hello@seatoskyrental.com
          </Link>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-12 gap-y-1 text-base text-white/62 sm:gap-x-20">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-auto flex w-full justify-center overflow-hidden px-3 pt-16 sm:px-5">
        <p
          aria-label="Sea to Sky"
          className="w-full whitespace-nowrap pb-[0.16em] text-center text-[16vw] font-medium leading-none text-white/55"
        >
          Sea to Sky
        </p>
      </div>

      <div className="section-shell flex flex-col gap-2 pb-6 pt-8 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Sea to Sky. All rights reserved.</p>
        <p>Short-term rental management</p>
      </div>
    </footer>
  );
}
