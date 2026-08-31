import { SiteFooter, SiteHeader } from "@/components/layout";

import { AboutHeroSection } from "../_sections";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      <SiteHeader />
      <main className="pb-24 pt-10">
        <AboutHeroSection />
      </main>
      <SiteFooter />
    </div>
  );
}
