"use client";

import { MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { contactConfig } from "@/lib/content";
import { trackEvent } from "@/lib/tracking";

export function StickyContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <ContactButton
        href={contactConfig.zalo}
        label="Zalo"
        title="Liên hệ Zalo"
        className="bg-[#0068FF] text-white hover:bg-[#0056d6]"
        onClick={() => trackEvent("click_zalo")}
      />
      <ContactButton
        href={`tel:${contactConfig.hotline.replaceAll(" ", "")}`}
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
