"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { contactConfig, navItems } from "@/lib/content";
import { trackEvent } from "@/lib/tracking";

export function Header() {
  const [open, setOpen] = useState(false);
  const phoneHref = contactConfig.hotline.replaceAll(" ", "");
  const phoneDisplay = "0774 300 969";

  const nav = (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          className="rounded-md px-2 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 hover:text-red-700"
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[112px] max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="CVB EDU trang chủ">
          <Image
            src={contactConfig.logo}
            alt={`${contactConfig.brand} logo`}
            width={240}
            height={105}
            priority
            className="h-[83px] w-auto rounded-md object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">{nav}</nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href={`tel:${phoneHref}`} onClick={() => trackEvent("click_hotline")}>
              <Phone className="h-4 w-4" />
              Hotline: {phoneDisplay}
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#lien-he" onClick={() => trackEvent("click_cta", { position: "header" })}>
              Tư vấn miễn phí
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-neutral-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Mở menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
          <nav className="grid gap-1">{nav}</nav>
          <Button asChild className="mt-3 w-full" variant="outline">
            <a href={`tel:${phoneHref}`} onClick={() => setOpen(false)}>
              <Phone className="h-4 w-4" />
              Hotline: {phoneDisplay}
            </a>
          </Button>
          <Button asChild className="mt-3 w-full">
            <a href="#lien-he" onClick={() => setOpen(false)}>
              Tư vấn miễn phí
            </a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
