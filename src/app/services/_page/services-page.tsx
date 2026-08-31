import { SiteFooter, SiteHeader } from "@/components/layout";

import { ServicesHeroSection } from "../_sections";

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      <SiteHeader />
      <main className="pb-24 pt-10">
        <ServicesHeroSection />
      </main>
      <SiteFooter />
    </div>
  );
}
