import Link from "next/link";
import Image from "next/image";

import { contactConfig, navItems } from "@/lib/content";

export function Footer() {
  const phoneHref = contactConfig.hotline.replaceAll(" ", "");
  const phoneDisplay = "0774 300 969";

  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 pb-24 sm:px-6 md:grid-cols-4 md:pb-10 lg:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src={contactConfig.logo}
              alt={`${contactConfig.brand} logo`}
              width={170}
              height={74}
              className="h-[60px] w-auto rounded-md bg-white object-contain"
            />
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-300">
            Tư vấn du học nghề Đức, công nhận bằng CHLB Đức, đào tạo tiếng Đức và hồ sơ visa theo lộ trình minh bạch, phù hợp năng lực thực tế.
          </p>
          <p className="mt-3 max-w-xl text-sm italic leading-6 text-neutral-400">
            Chúng tôi là ủy quyền, không phải trang web chính thức của CVB EDU.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-neutral-300">
          <p className="font-semibold text-white">Menu nhanh</p>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#FFCE00]">
              {item.label}
            </a>
          ))}
        </div>
        <div className="grid gap-2 text-sm text-neutral-300">
          <p className="font-semibold text-white">Liên hệ</p>
          <a href={`tel:${phoneHref}`} className="transition hover:text-[#FFCE00]">Hotline: {phoneDisplay}</a>
          <a href={`mailto:${contactConfig.email}`}>Email: {contactConfig.email}</a>
          <p>{contactConfig.address}</p>
        </div>
        <div className="grid gap-2 text-sm text-neutral-300">
          <p className="font-semibold text-white">Kênh kết nối</p>
          <a href={contactConfig.zalo} className="transition hover:text-[#FFCE00]">Zalo</a>
          <a href={contactConfig.facebook} className="transition hover:text-[#FFCE00]">Facebook</a>
          {contactConfig.tiktok ? <a href={contactConfig.tiktok}>TikTok</a> : null}
          <Link href="/privacy">Chính sách bảo mật</Link>
          <Link href="/terms">Điều khoản sử dụng</Link>
          <Image
            src={contactConfig.zaloQr}
            alt="QR Zalo CVB Edu"
            width={110}
            height={160}
            className="mt-2 h-[160px] w-auto rounded-md bg-white object-cover"
          />
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} CVB EDU. Thông tin tư vấn phụ thuộc điều kiện hồ sơ thực tế.
      </div>
    </footer>
  );
}
