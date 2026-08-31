import Link from "next/link";

import { primaryNavigation } from "@/config/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/6 bg-sand-50/90 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em]">
          Sea to Sky
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              className="transition-colors hover:text-slate-950"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-sea-700 px-4 py-2 text-sm font-medium text-sea-700 transition-colors hover:bg-sea-700 hover:text-white"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
