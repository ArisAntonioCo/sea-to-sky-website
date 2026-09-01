import { SiteFooter, SiteHeader } from "@/components/layout";

import { FaqListSection } from "../_sections";

export function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <FaqListSection />
      </main>
      <SiteFooter />
    </div>
  );
}
