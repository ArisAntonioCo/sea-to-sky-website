"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Our approach", href: "/#approach" },
  { label: "Properties", href: "/#properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 32);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        isScrolled
          ? "border-sea-900/10 bg-white shadow-[0_8px_32px_rgba(17,41,48,0.08)]"
          : "border-transparent bg-white",
      )}
    >
      <div
        className="mx-auto flex h-20 w-full max-w-[100rem] items-center justify-between px-5 sm:h-24 sm:px-8 lg:px-12"
      >
        <Link
          href="/"
          className="inline-flex min-h-11 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sea-500 focus-visible:ring-offset-2"
        >
          <Image
            src="/sea-to-sky-logo.png"
            alt="Sea to Sky"
            width={1082}
            height={284}
            priority
            loading="eager"
            className="h-auto w-36 mix-blend-multiply sm:w-44"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-9 text-base text-ink-700 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              className="relative py-3 transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-sea-700 after:transition-transform hover:text-sea-800 hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sea-500"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/#estimate" />}
            nativeButton={false}
            className="hidden h-12 rounded-full bg-sea-800 px-7 text-base font-normal !text-white hover:bg-sea-700 sm:inline-flex"
          >
            Get an estimate
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  aria-label="Open navigation"
                  variant="ghost"
                  size="icon"
                  className="size-11 rounded-full text-sea-900 lg:hidden"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent className="w-full border-none bg-white p-0 sm:max-w-md">
              <SheetHeader className="border-b border-sea-900/10 px-6 py-6">
                <SheetTitle className="sr-only">Site navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate the Sea to Sky website.
                </SheetDescription>
                <Image
                  src="/sea-to-sky-logo.png"
                  alt="Sea to Sky"
                  width={1082}
                  height={284}
                  loading="eager"
                  className="h-auto w-36 mix-blend-multiply"
                />
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-8">
                {navigation.map((item, index) => (
                  <SheetClose
                    key={item.href}
                    render={<Link href={item.href} />}
                    className="flex min-h-16 items-center justify-between border-b border-sea-900/10 text-2xl text-sea-950"
                  >
                    <span>{item.label}</span>
                    <span className="text-sm text-sea-700">0{index + 1}</span>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto p-6">
                <SheetClose
                  render={<Link href="/#estimate" />}
                  className="flex min-h-12 w-full items-center justify-center rounded-full bg-sea-800 px-6 font-medium !text-white"
                >
                  Get an estimate
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
