import { Quote } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { testimonials } from "./homepage-content";

type Testimonial = (typeof testimonials)[number];

function TestimonialAvatar({ name, src }: { name: string; src: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <Avatar className="size-12" aria-label={name}>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback className="bg-sea-700 text-sm font-medium text-white">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex min-h-[20rem] w-[19.5rem] shrink-0 flex-col rounded-[1.5rem] border border-sea-900/8 bg-[#f4f6f5] p-7 sm:w-[28rem] sm:p-9">
      <Quote
        className="size-10 text-sea-700 sm:size-12"
        fill="currentColor"
        strokeWidth={0}
        aria-hidden="true"
      />
      <blockquote className="mt-7 text-xl font-medium leading-[1.45] text-ink-950 sm:text-2xl">
        “{item.quote}”
      </blockquote>
      <footer className="mt-auto flex items-center gap-4 pt-10">
        <TestimonialAvatar name={item.name} src={item.avatar} />
        <div>
          <p className="font-medium text-ink-950">{item.name}</p>
          <p className="mt-0.5 text-sm text-ink-700">{item.location}</p>
        </div>
      </footer>
    </article>
  );
}

function TestimonialTrack({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...testimonials].reverse() : testimonials;

  return (
    <div className={`testimonial-track ${reverse ? "testimonial-track-reverse" : ""}`}>
      {[0, 1].map((group) => (
        <div
          key={group}
          className="testimonial-track-group"
          aria-hidden={group === 1 ? "true" : undefined}
        >
          {items.map((item) => (
            <TestimonialCard key={`${group}-${item.name}`} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-36">
      <div className="section-shell">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-4xl text-[clamp(2.75rem,5vw,5.25rem)] font-medium leading-[0.98] text-ink-950">
            A partner you can trust.
            <span className="mt-2 block text-sea-900/38">Better stays. Stronger returns.</span>
          </h2>
        </Reveal>
      </div>

      <Reveal className="testimonial-marquee-shell mt-16 space-y-5 sm:mt-20" delay={0.08}>
        <TestimonialTrack />
        <TestimonialTrack reverse />
      </Reveal>
    </section>
  );
}
