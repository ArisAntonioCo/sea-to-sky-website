import { SiteFooter, SiteHeader } from "@/components/layout";

import { ContactHeroSection } from "../_sections";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      <SiteHeader />
      <main className="pb-24 pt-10">
        <ContactHeroSection />
      </main>
      <SiteFooter />
    </div>
  );
}
