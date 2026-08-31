import Image from "next/image";
import Link from "next/link";

const footerNavigation = [
  { label: "Our approach", href: "/#approach" },
  { label: "Properties", href: "/#properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-sea-950 text-white">
      <div className="section-shell grid gap-14 py-14 md:grid-cols-[1fr_auto] md:items-end md:py-18">
        <div>
          <Image
            src="/sea-to-sky-logo.png"
            alt="Sea to Sky"
            width={1082}
            height={284}
            className="h-auto w-40 brightness-0 invert"
          />
          <p className="mt-6 max-w-md text-base leading-7 text-white/65">
            Thoughtful short-term rental management, from the coast to the mountains.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/72"
        >
          {footerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 py-3 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="section-shell flex flex-col gap-2 border-t border-white/12 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>Sea to Sky short-term rental management</p>
        <p>Prototype experience</p>
      </div>
    </footer>
  );
}
