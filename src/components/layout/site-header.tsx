"use client";

import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 32);

      if (currentScrollY <= 8) {
        setIsHidden(false);
      } else if (scrollDifference > 8 && currentScrollY > 96) {
        setIsHidden(true);
      } else if (scrollDifference < -8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) {
        return;
      }

      ticking.current = true;
      window.requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        opacity: isHidden ? 0 : 1,
        y: isHidden ? "-112%" : "0%",
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 520, damping: 44, mass: 0.8 }
      }
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none",
        isScrolled
          ? "border-sea-900/10 bg-white"
          : "border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between px-7 transition-[height,padding] duration-300 ease-out motion-reduce:transition-none sm:px-11 lg:px-16",
          isScrolled ? "h-16 sm:h-20" : "h-20 sm:h-24",
        )}
      >
        <Link
          href="/#home"
          className="inline-flex min-h-11 items-center transition-transform duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sea-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <Image
            src="/sea-to-sky-logo.png"
            alt="Sea to Sky"
            width={1082}
            height={284}
            priority
            loading="eager"
            className={cn(
              "h-auto mix-blend-multiply transition-[width,opacity] duration-300 ease-out motion-reduce:transition-none",
              isScrolled ? "w-32 opacity-90 sm:w-40" : "w-36 opacity-100 sm:w-44",
            )}
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className={cn(
            "hidden items-center text-base text-ink-700 transition-[gap,opacity,transform] duration-300 ease-out motion-reduce:transition-none lg:flex",
            isScrolled ? "gap-7 opacity-90" : "gap-9 opacity-100",
          )}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              className="relative py-3 transition-[color,transform] duration-200 after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-sea-700 after:transition-transform hover:-translate-y-0.5 hover:text-sea-800 hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sea-500 motion-reduce:hover:translate-y-0"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className={cn(
              "hidden rounded-full bg-sea-800 text-base font-normal !text-white transition-[height,padding,background-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:bg-sea-700 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:inline-flex",
              isScrolled ? "h-11 px-6" : "h-12 px-7",
            )}
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
                  className="size-11 rounded-full text-sea-900 transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 lg:hidden"
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
                    nativeButton={false}
                    className="flex min-h-16 items-center justify-between border-b border-sea-900/10 text-2xl text-sea-950"
                  >
                    <span>{item.label}</span>
                    <span className="text-sm text-sea-700">0{index + 1}</span>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto p-6">
                <SheetClose
                  render={<Link href="/contact" />}
                  nativeButton={false}
                  className="flex min-h-12 w-full items-center justify-center rounded-full bg-sea-800 px-6 font-medium !text-white"
                >
                  Get an estimate
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
