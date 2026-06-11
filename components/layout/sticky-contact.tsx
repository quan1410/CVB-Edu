"use client";

import { MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { contactConfig } from "@/lib/content";
import { trackEvent } from "@/lib/tracking";

export function StickyContact() {
  const phoneHref = contactConfig.hotline.replaceAll(" ", "");

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 hidden flex-col gap-2 md:flex">
        <ContactButton
          href={contactConfig.zalo}
          label="Zalo"
          title="Liên hệ Zalo"
          className="bg-[#0068FF] text-white hover:bg-[#0056d6]"
          onClick={() => trackEvent("click_zalo")}
        />
        <ContactButton
          href={`tel:${phoneHref}`}
          label={<Phone className="h-5 w-5" />}
          title="Gọi hotline"
          className="bg-[#DD0000] text-white hover:bg-[#b80000]"
          onClick={() => trackEvent("click_hotline")}
        />
        <ContactButton
          href={contactConfig.messenger}
          label={<MessageCircle className="h-5 w-5" />}
          title="Nhắn tin Messenger"
          className="bg-[#0B0B0B] text-white hover:bg-neutral-800"
          onClick={() => trackEvent("click_messenger")}
        />
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-neutral-200 bg-white/95 p-3 shadow-2xl shadow-black/20 backdrop-blur md:hidden">
        <a
          href={`tel:${phoneHref}`}
          aria-label="Gọi ngay hotline CVB Edu"
          onClick={() => trackEvent("click_hotline", { position: "mobile_sticky" })}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#DD0000] px-4 text-sm font-black text-white"
        >
          <Phone className="h-5 w-5" />
          Gọi ngay
        </a>
        <a
          href={contactConfig.zalo}
          aria-label="Nhắn Zalo CVB Edu"
          onClick={() => trackEvent("click_zalo", { position: "mobile_sticky" })}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0068FF] px-4 text-sm font-black text-white"
        >
          <MessageCircle className="h-5 w-5" />
          Nhắn Zalo
        </a>
      </div>
    </>
  );
}

function ContactButton({
  href,
  label,
  title,
  className,
  onClick,
}: {
  href: string;
  label: ReactNode;
  title: string;
  className: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      title={title}
      aria-label={title}
      onClick={onClick}
      className={`grid h-12 w-12 place-items-center rounded-full text-[13px] font-black shadow-lg shadow-black/20 ring-1 ring-white/60 transition ${className}`}
    >
      {label}
    </a>
  );
}
