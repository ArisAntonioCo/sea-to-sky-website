import Link from "next/link";

import { primaryNavigation } from "@/config/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/6 bg-white/80">
      <div className="section-shell flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-sea-700">
            Prototype Footer
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            This prototype is intentionally lightweight. Content, imagery, forms,
            and integrations can be layered in once the redesign direction is approved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-700">
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
      </div>
    </footer>
  );
}
