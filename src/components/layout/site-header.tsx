"use client";

import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  { label: "Contact", href: "/#contact" },
];

const companyNavigation = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Services", href: "/services" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const companyCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openCompanyMenu = () => {
    if (companyCloseTimer.current) clearTimeout(companyCloseTimer.current);
    setIsCompanyOpen(true);
  };

  const closeCompanyMenu = () => {
    companyCloseTimer.current = setTimeout(() => setIsCompanyOpen(false), 120);
  };

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 32);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateHeader);
      if (companyCloseTimer.current) clearTimeout(companyCloseTimer.current);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        isScrolled
          ? "border-sea-900/10 bg-white"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className="flex h-20 w-full items-center justify-between px-7 sm:h-24 sm:px-11 lg:px-16"
      >
        <Link
          href="/#home"
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
          <DropdownMenu open={isCompanyOpen} onOpenChange={setIsCompanyOpen}>
            <DropdownMenuTrigger
              onMouseEnter={openCompanyMenu}
              onMouseLeave={closeCompanyMenu}
              className="inline-flex min-h-11 items-center gap-1 py-3 outline-none transition-colors hover:text-sea-800 focus-visible:ring-2 focus-visible:ring-sea-500"
            >
              Company
              <ChevronDown className="size-3.5" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              sideOffset={10}
              onMouseEnter={openCompanyMenu}
              onMouseLeave={closeCompanyMenu}
              className="min-w-44 rounded-xl border-sea-900/10 bg-white p-2 shadow-none"
            >
              {companyNavigation.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  render={<Link href={item.href} />}
                  className="min-h-11 cursor-pointer rounded-lg px-3 text-base text-ink-700 focus:bg-sea-50 focus:text-sea-900"
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
                {navigation.slice(0, 2).map((item, index) => (
                  <SheetClose
                    key={item.href}
                    render={<Link href={item.href} />}
                    className="flex min-h-16 items-center justify-between border-b border-sea-900/10 text-2xl text-sea-950"
                  >
                    <span>{item.label}</span>
                    <span className="text-sm text-sea-700">0{index + 1}</span>
                  </SheetClose>
                ))}
                <div className="border-b border-sea-900/10 py-5">
                  <p className="text-sm text-sea-700">Company</p>
                  <div className="mt-3 flex flex-col">
                    {companyNavigation.map((item) => (
                      <SheetClose
                        key={item.href}
                        render={<Link href={item.href} />}
                        className="flex min-h-12 items-center text-xl text-sea-950"
                      >
                        {item.label}
                      </SheetClose>
                    ))}
                  </div>
                </div>
                <SheetClose
                  render={<Link href="/#contact" />}
                  className="flex min-h-16 items-center justify-between border-b border-sea-900/10 text-2xl text-sea-950"
                >
                  <span>Contact</span>
                  <span className="text-sm text-sea-700">03</span>
                </SheetClose>
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
