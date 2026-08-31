import type { Metadata } from "next";
import { AppShell } from "./_layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sea to Sky Rental Prototype",
  description: "Prototype redesign for the Sea to Sky Rental marketing website.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <AppShell>{children}</AppShell>;
}
