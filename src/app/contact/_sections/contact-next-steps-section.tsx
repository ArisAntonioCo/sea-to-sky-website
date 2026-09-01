import { Reveal } from "@/components/motion";

const steps = [
  { title: "Share the essentials", description: "Tell us about the property, its location, and what you want management to improve." },
  { title: "Review the opportunity", description: "We assess fit, market potential, and the operational support your property needs." },
  { title: "Build the right plan", description: "You receive a clear recommendation with practical next steps and no unnecessary complexity." },
];

export function ContactNextStepsSection() {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-36">
      <div className="section-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-base font-medium text-sea-700">What happens next</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.04] text-ink-950 sm:text-6xl">Clear from the first conversation.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink-700 lg:justify-self-end">A considered process that respects your time and gives you the information needed to make the right decision.</p>
        </Reveal>

        <div className="mt-16 grid border-t border-sea-900/15 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07}>
              <article className="h-full border-b border-sea-900/15 py-8 md:min-h-72 md:border-r md:px-8 md:last:border-r-0 lg:p-10">
                <p className="text-sm text-sea-600">0{index + 1}</p>
                <h3 className="mt-16 text-2xl font-medium text-ink-950">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-ink-700">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
