import { Quote } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { aboutTestimonials } from "./about-content";

const avatarStyles = [
  "bg-[#d8e4df] text-sea-950",
  "bg-[#d8c8b2] text-ink-950",
  "bg-[#9bb4b3] text-sea-950",
  "bg-sea-800 text-white",
];

export function AboutTestimonialsSection() {
  return (
    <section className="bg-sea-50 py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal>
          <p className="text-base font-medium text-sea-700">Owner stories</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl lg:text-7xl">
            Measured in better outcomes.
          </h2>
        </Reveal>

        <div className="mt-16 grid border-t border-sea-900/16 md:grid-cols-2">
          {aboutTestimonials.map((item, index) => {
            const initials = item.name.split(" ").map((part) => part[0]).join("");

            return (
              <Reveal key={item.name} delay={(index % 2) * 0.07}>
                <article className="flex h-full flex-col border-b border-sea-900/16 py-9 md:min-h-80 md:px-8 md:even:border-l lg:p-12">
                  <Quote className="size-7 text-sea-500" strokeWidth={1.5} />
                  <blockquote className="mt-7 text-xl font-light leading-8 text-ink-950 sm:text-2xl sm:leading-9">
                    “{item.quote}”
                  </blockquote>
                  <footer className="mt-auto flex items-center gap-4 pt-9">
                    <Avatar className="size-12" aria-label={`${item.name} placeholder avatar`}>
                      <AvatarFallback className={`text-sm font-medium ${avatarStyles[index]}`}>
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-ink-950">{item.name}</p>
                      <p className="mt-1 text-sm text-ink-700">{item.location}</p>
                    </div>
                  </footer>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
