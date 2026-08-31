import type { Metadata } from "next";
import { AppShell } from "./_layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sea to Sky | Short-Term Rental Management",
  description:
    "A prototype redesign for Sea to Sky short-term rental and property management.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <AppShell>{children}</AppShell>;
}
