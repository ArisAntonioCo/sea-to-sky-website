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
    <section aria-labelledby="partners-heading" className="overflow-hidden border-y border-sea-900/10 bg-white py-10 sm:py-12">
      <div className="section-shell">
        <h2 id="partners-heading" className="text-center text-base font-medium text-ink-700">
          Our partners
        </h2>
      </div>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="partner-marquee flex items-center">
          {[0, 1].map((group) => (
            <div key={group} aria-hidden={group === 1} className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16 lg:gap-24 lg:pr-24">
              {partnerLogos.map((logo) => (
                <div key={`${group}-${logo}`} className="flex h-16 w-36 shrink-0 items-center justify-center sm:w-44">
                  <Image
                    src={logo}
                    alt={group === 0 ? "Sea to Sky partner" : ""}
                    width={250}
                    height={180}
                    className="max-h-14 w-auto max-w-36 object-contain opacity-65 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
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
