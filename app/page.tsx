import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyContact } from "@/components/layout/sticky-contact";
import { HomeLandingPage } from "@/components/sections/home-landing-page";
import { contactConfig } from "@/lib/content";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: contactConfig.brand,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cvbedu.vn",
    telephone: contactConfig.hotline,
    email: contactConfig.email,
    address: contactConfig.address,
    areaServed: ["Việt Nam", "Đức"],
    serviceType: [
      "Du học nghề Đức",
      "Công nhận bằng CHLB Đức",
      "Đào tạo tiếng Đức",
      "Tư vấn hồ sơ visa",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <HomeLandingPage />
      <Footer />
      <StickyContact />
    </>
  );
}
