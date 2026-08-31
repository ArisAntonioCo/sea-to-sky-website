import { Quote } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { testimonials } from "./homepage-content";

const avatarStyles = [
  "bg-sea-800 text-white",
  "bg-[#d8e4df] text-sea-950",
  "bg-[#d8c8b2] text-ink-950",
  "bg-[#9bb4b3] text-sea-950",
];

function TestimonialAvatar({ name, index }: { name: string; index: number }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <Avatar className="size-12" aria-label={`${name} placeholder avatar`}>
      <AvatarFallback className={`text-sm font-medium ${avatarStyles[index % avatarStyles.length]}`}>
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}

export function TestimonialsSection() {
  const [featuredTestimonial, ...supportingTestimonials] = testimonials;

  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="section-shell">
        <Reveal>
          <p className="text-base font-medium text-sea-700">Owner stories</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] text-ink-950 sm:text-6xl lg:text-7xl">
            Trusted with the places that matter.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <Reveal>
            <article className="lg:sticky lg:top-32">
              <Quote className="size-9 text-sea-500" strokeWidth={1.5} />
              <blockquote className="mt-8 text-3xl font-light leading-[1.28] text-ink-950 sm:text-4xl lg:text-5xl">
                “{featuredTestimonial.quote}”
              </blockquote>
              <footer className="mt-9 flex items-center gap-4 border-t border-sea-900/16 pt-5">
                <TestimonialAvatar name={featuredTestimonial.name} index={0} />
                <div>
                  <p className="font-medium text-ink-950">{featuredTestimonial.name}</p>
                  <p className="mt-1 text-sm text-ink-700">{featuredTestimonial.location}</p>
                </div>
              </footer>
            </article>
          </Reveal>

          <div>
            {supportingTestimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.06}>
                <article className="border-t border-sea-900/16 py-8 sm:py-10">
                  <blockquote className="text-xl font-light leading-8 text-ink-950 sm:text-2xl sm:leading-9">
                    “{item.quote}”
                  </blockquote>
                  <footer className="mt-6 flex items-center gap-4 text-sm">
                    <TestimonialAvatar name={item.name} index={index + 1} />
                    <div>
                      <p className="font-medium text-ink-950">{item.name}</p>
                      <p className="mt-1 text-ink-700">{item.location}</p>
                    </div>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
