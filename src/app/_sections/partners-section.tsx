import Image from "next/image";

const partnerLogos = [
  "/Partners/image.png",
  "/Partners/image copy.png",
  "/Partners/image copy 2.png",
  "/Partners/image copy 3.png",
  "/Partners/image copy 4.png",
  "/Partners/image copy 5.png",
];

export function PartnersSection() {
  return (
    <section
      aria-labelledby="partners-heading"
      className="grid overflow-hidden bg-white py-3 text-ink-950 sm:grid-cols-[10rem_1fr] sm:items-center sm:py-4 lg:grid-cols-[12rem_1fr]"
    >
      <div className="px-6 sm:px-8">
        <h2 id="partners-heading" className="text-base font-normal text-ink-950 sm:text-lg">
          Our partners
        </h2>
      </div>
      <div className="relative mt-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:mt-0">
        <div className="partner-marquee flex items-center">
          {[0, 1].map((group) => (
            <div key={group} aria-hidden={group === 1} className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6 lg:gap-8 lg:pr-8">
              {partnerLogos.map((logo) => (
                <div key={`${group}-${logo}`} className="flex h-14 w-40 shrink-0 items-center justify-center sm:h-16 sm:w-44">
                  <Image
                    src={logo}
                    alt={group === 0 ? "Sea to Sky partner" : ""}
                    width={250}
                    height={180}
                    loading={group === 0 ? "eager" : "lazy"}
                    className="max-h-20 w-auto max-w-40 object-contain brightness-0 opacity-65 transition-opacity duration-300 hover:opacity-100 sm:max-h-24 sm:max-w-44"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
