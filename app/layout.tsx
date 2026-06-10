import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://cvbedu.vn"),
  title: "Du Học Nghề Đức & Công Nhận Bằng CHLB Đức | Tư Vấn Lộ Trình A-Z",
  description:
    "Tư vấn du học nghề Đức, đào tạo tiếng Đức, hồ sơ visa và công nhận chuyển đổi bằng CHLB Đức. Lộ trình rõ ràng, minh bạch, đồng hành từ Việt Nam đến Đức.",
  keywords: [
    "du học nghề Đức",
    "công nhận bằng Đức",
    "chuyển đổi bằng CHLB Đức",
    "học tiếng Đức",
    "visa du học nghề Đức",
    "tư vấn du học Đức",
    "Ausbildung Đức",
  ],
  openGraph: {
    title: "Du Học Nghề Đức & Công Nhận Bằng CHLB Đức",
    description:
      "Tư vấn lộ trình A-Z: học tiếng Đức, hồ sơ, visa, ngành nghề và công nhận bằng.",
    type: "website",
    locale: "vi_VN",
    url: "/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Tư vấn lộ trình học tập và làm việc tại Đức",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {process.env.NEXT_PUBLIC_GTM_ID ? (
          <Script id="gtm" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            `}
          </Script>
        ) : null}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
