import { SiteFooter, SiteHeader } from "@/components/layout";

import { ContactHeroSection } from "../_sections";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <ContactHeroSection />
      </main>
      <SiteFooter />
    </div>
  );
}
