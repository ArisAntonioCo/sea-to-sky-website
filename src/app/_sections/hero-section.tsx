import { Button } from "@/components/ui/button";

import { heroContent, topNavigation } from "./homepage-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(140deg,#1b2d39_0%,#355a6c_38%,#7ca1b8_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#9ac3e6_0%,transparent_36%),linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.32))]" />
      <div className="relative min-h-[860px]">
        <div className="absolute left-0 top-0 z-10 hidden h-full w-24 border-r border-white/15 bg-white/94 text-slate-700 lg:flex lg:flex-col lg:items-center">
          <div className="flex h-32 w-full items-center justify-center border-b border-slate-200">
            <span className="text-[1.9rem] font-semibold tracking-[-0.05em] text-sea-700">
              sea to sky
            </span>
          </div>
          <p className="mb-auto mt-auto [writing-mode:vertical-rl] rotate-180 text-xs font-medium uppercase tracking-[0.5em] text-slate-500">
            {heroContent.railLabel}
          </p>
        </div>
        <div className="section-shell relative flex min-h-[860px] flex-col px-6 pt-8 sm:px-8 lg:pl-32">
          <div className="flex items-center justify-between">
            <div className="rounded-2xl bg-white/94 px-6 py-5 text-sea-700 shadow-lg lg:hidden">
              <span className="text-2xl font-semibold tracking-[-0.05em]">sea to sky</span>
            </div>
            <nav className="ml-auto hidden gap-10 text-lg font-semibold md:flex">
              {topNavigation.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </nav>
          </div>
          <div className="mx-auto flex flex-1 max-w-5xl flex-col items-center justify-center text-center">
            <h1 className="max-w-5xl text-6xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[7.25rem] lg:leading-[0.92]">
              <span className="block">{heroContent.titleTop}</span>
              <span className="mt-2 block font-normal">{heroContent.titleBottom}</span>
            </h1>
            <div className="mt-8 space-y-4 text-lg leading-8 text-white/92 sm:text-2xl sm:leading-10">
              {heroContent.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <Button
              size="lg"
              className="mt-12 h-14 min-w-48 rounded-none bg-sea-700 px-10 text-base font-semibold text-white hover:bg-sea-500"
            >
              {heroContent.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
