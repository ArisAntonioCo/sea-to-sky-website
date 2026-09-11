import type { CSSProperties } from "react";
import { Quote } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import { aboutTestimonials } from "./about-content";

const avatarStyles = [
  "bg-[#d8e4df] text-sea-950",
  "bg-[#d8c8b2] text-ink-950",
  "bg-[#9bb4b3] text-sea-950",
  "bg-sea-800 text-white",
];

const columnOrders = [
  [0, 1, 2, 3],
  [2, 3, 0, 1],
  [1, 0, 3, 2],
];

const columnDurations = [28, 34, 31];

function TestimonialCard({ index }: { index: number }) {
  const item = aboutTestimonials[index];
  const initials = item.name.split(" ").map((part) => part[0]).join("");

  return (
    <article className="group flex min-h-64 flex-col rounded-[1.5rem] border border-sea-900/10 bg-white p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
      <Quote className="size-7 text-sea-500" strokeWidth={1.5} />
      <blockquote className="mt-6 text-lg font-light leading-8 text-ink-950">
        “{item.quote}”
      </blockquote>
      <footer className="mt-auto flex items-center gap-4 pt-8">
        <Avatar className="size-11" aria-label={item.name}>
          <AvatarImage src={item.avatar} alt={item.name} />
          <AvatarFallback className={`text-sm font-medium ${avatarStyles[index]}`}>
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-ink-950">{item.name}</p>
          <p className="mt-0.5 text-sm text-ink-700">{item.location}</p>
        </div>
      </footer>
    </article>
  );
}

function TestimonialColumn({ columnIndex }: { columnIndex: number }) {
  const style = {
    "--owner-scroll-duration": `${columnDurations[columnIndex]}s`,
  } as CSSProperties;

  return (
    <div
      className={cn(
        "about-owner-column max-h-[42rem] overflow-hidden",
        columnIndex === 1 && "hidden md:block",
        columnIndex === 2 && "hidden lg:block",
      )}
    >
      <div className="about-owner-track" style={style}>
        {[0, 1].map((repeatIndex) => (
          <div
            key={repeatIndex}
            className="about-owner-group flex flex-col gap-5 pb-5"
            aria-hidden={columnIndex > 0 || repeatIndex === 1}
          >
            {columnOrders[columnIndex].map((testimonialIndex) => (
              <TestimonialCard
                key={`${repeatIndex}-${testimonialIndex}`}
                index={testimonialIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AboutTestimonialsSection() {
  return (
    <section className="overflow-hidden bg-sea-50 py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-base font-medium text-sea-700">Owner stories</p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl lg:text-7xl">
            Measured in better outcomes.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-ink-700 sm:text-lg sm:leading-8">
            What property owners say after Sea to Sky takes care of the details.
          </p>
        </Reveal>

        <div
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          role="region"
          aria-label="Scrolling owner testimonials"
        >
          {[0, 1, 2].map((columnIndex) => (
            <TestimonialColumn key={columnIndex} columnIndex={columnIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
