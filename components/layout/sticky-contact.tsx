"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { contactConfig } from "@/lib/content";
import { trackEvent } from "@/lib/tracking";

export function StickyContact() {
  const phoneHref = contactConfig.hotline.replaceAll(" ", "");
  const reduceMotion = useReducedMotion();

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
          pulse={!reduceMotion}
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
        <motion.a
          href={`tel:${phoneHref}`}
          aria-label="Gọi ngay hotline CVB Edu"
          onClick={() => trackEvent("click_hotline", { position: "mobile_sticky" })}
          animate={reduceMotion ? undefined : { scale: [1, 1.025, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#DD0000] px-4 text-sm font-black text-white"
        >
          <Phone className="h-5 w-5" />
          Gọi ngay
        </motion.a>
        <motion.a
          href={contactConfig.zalo}
          aria-label="Nhắn Zalo CVB Edu"
          onClick={() => trackEvent("click_zalo", { position: "mobile_sticky" })}
          whileTap={{ scale: 0.98 }}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0068FF] px-4 text-sm font-black text-white"
        >
          <MessageCircle className="h-5 w-5" />
          Nhắn Zalo
        </motion.a>
      </div>
    </>
  );
}

function ContactButton({
  href,
  label,
  title,
  className,
  pulse = false,
  onClick,
}: {
  href: string;
  label: ReactNode;
  title: string;
  className: string;
  pulse?: boolean;
  onClick: () => void;
}) {
  return (
    <motion.a
      href={href}
      title={title}
      aria-label={title}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      animate={pulse ? { scale: [1, 1.08, 1] } : undefined}
      transition={{ duration: 2.4, repeat: pulse ? Infinity : 0, ease: "easeInOut" }}
      className={`grid h-12 w-12 place-items-center rounded-full text-[13px] font-black shadow-lg shadow-black/20 ring-1 ring-white/60 transition ${className}`}
    >
      {label}
    </motion.a>
  );
}
