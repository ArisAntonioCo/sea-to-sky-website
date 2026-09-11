import Image from "next/image";

import { Reveal } from "@/components/motion";
import { MarqueeAlongSvgPath } from "@/components/ui/marquee-along-svg-path";

const heroImages = [
  { src: "/about-1.png", alt: "Designed living room" },
  { src: "/Images/properties/tulum-2.png", alt: "Villa in Tulum" },
  { src: "/Images/properties/Vancouver-bc.png", alt: "Vancouver property" },
  { src: "/Images/properties/Squamish.png", alt: "Squamish home" },
  { src: "/Images/properties/Playas.png", alt: "Villa in Playa del Carmen" },
  { src: "/Images/properties/Condo-2.png", alt: "Vancouver condo" },
  { src: "/Images/properties/town-homes.png", alt: "Townhome property" },
];

const heroTiles = Array.from({ length: 48 }, (_, index) => ({
  ...heroImages[index % heroImages.length],
  key: `${heroImages[index % heroImages.length].src}-${index}`,
}));

const heroPath =
  "M1.12756 531.57C28.0893 516.8 74.8013 483.241 115.862 435.167M115.862 435.167C142.71 403.734 167.142 366.095 182.056 323.447C229.212 188.604 -65.6747 303.582 53.6794 397.09C73.8056 412.858 94.5052 425.626 115.862 435.167ZM115.862 435.167C221.157 482.211 342.426 450.85 489.709 314.125C517.752 288.093 540.139 265.319 557.876 245.305M557.876 245.305C652.19 138.884 615.024 110.493 597.546 85.1004C576.782 54.9327 401.867 14.2899 417.559 188.351C424.308 263.214 481.985 261.608 557.876 245.305ZM557.876 245.305C646.667 226.232 760.389 187.041 846.65 226.667M846.65 226.667C858.081 231.918 869.031 238.554 879.376 246.804C1034.5 370.518 957.576 540.884 843.253 562.658C768.137 576.964 767.606 395.943 846.65 226.667ZM846.65 226.667C887.908 138.309 950.848 53.1511 1036.18 0.642822";

export function AboutHeroSection() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-white px-2 pb-2 pt-20 sm:px-3 sm:pb-3 sm:pt-24 lg:px-4 lg:pb-4">
      <div className="relative isolate min-h-[calc(100svh-5.5rem)] overflow-hidden rounded-[1.5rem] border border-sea-900/5 bg-white text-sea-950 sm:min-h-[calc(100svh-6.75rem)] sm:rounded-[2rem] lg:min-h-[calc(100svh-7rem)]">
        <div className="absolute inset-0">
          <MarqueeAlongSvgPath
            path={heroPath}
            baseVelocity={1.65}
            className="size-full translate-y-[10%]"
            height={570}
            rotateItems
            slowdownOnHover
            viewBox="0 0 1040 570"
            width={1040}
          >
            {heroTiles.map((image) => (
              <div
                key={image.key}
                className="relative size-[4.25rem] overflow-hidden bg-sea-50 ring-1 ring-sea-900/10"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                  draggable={false}
                  quality={65}
                />
              </div>
            ))}
          </MarqueeAlongSvgPath>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[66%] bg-gradient-to-b from-white from-[82%] to-transparent sm:h-1/2" />

        <Reveal className="pointer-events-none absolute inset-x-[7%] top-[7%] z-20 grid gap-5 sm:top-[8%] md:grid-cols-[0.9fr_1fr] md:gap-16 lg:gap-24">
          <div>
            <p className="text-sm font-medium text-sea-700 sm:text-base">About Sea to Sky</p>
            <h1 className="mt-4 max-w-lg text-5xl font-medium leading-[0.98] sm:text-6xl lg:text-7xl">
              10 years of experience
            </h1>
          </div>
          <div className="max-w-xl md:pt-1">
            <p className="text-base leading-7 text-sea-800/75">
              With over a decade of experience, we understand the unique dynamics of the short-term rental industry. Our hands-off, full-service approach allows property owners to enjoy the benefits of their vacation rentals without the hassle.
            </p>
            <p className="mt-3 hidden text-base leading-7 text-sea-800/75 sm:block">
              Specializing in Airbnb property management, we focus on optimizing rental performance to help owners achieve higher earnings.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
