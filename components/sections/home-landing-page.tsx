"use client";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Plane,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import { LeadForm } from "@/components/forms/lead-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  commitments,
  courseSeed,
  faqSeed,
  heroImage,
  jobFieldSeed,
  jobIcons,
  painPoints,
  programSeed,
  recognitionSteps,
  services,
  testimonialSeed,
  timeline,
  trustStats,
} from "@/lib/content";
import { trackEvent } from "@/lib/tracking";

export function HomeLandingPage() {
  return (
    <main className="bg-white text-neutral-950">
      <HeroSection />
      <PainPointSection />
      <SolutionSection />
      <TimelineSection />
      <ProgramsSection />
      <JobFieldsSection />
      <TrainingSection />
      <RecognitionSection />
      <CommitmentSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B0B0B]">
      <Image
        src={heroImage}
        alt="Thành phố Đức và kiến trúc châu Âu"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl content-center gap-10 px-4 py-14 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-white"
        >
          <div className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-[#FFCE00] backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Du học nghề Đức 2026 · Tư vấn lộ trình miễn phí
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Lộ trình sang Đức rõ ràng từ hồ sơ đầu tiên
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-100 sm:text-lg">
            CVB Edu tư vấn du học nghề Đức, học tiếng Đức, visa và công nhận bằng CHLB Đức theo năng lực thực tế của từng học viên.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" onClick={() => trackEvent("click_cta", { position: "hero" })}>
              <a href="#lien-he">
                Kiểm tra lộ trình miễn phí
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#chuong-trinh">Xem chương trình phù hợp</a>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FFCE00]" />
                <p className="text-sm font-semibold leading-6 text-neutral-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="self-center rounded-lg border border-white/15 bg-white/95 p-5 shadow-2xl shadow-black/30"
        >
          <div className="relative overflow-hidden rounded-md">
            <Image
              src={heroImage}
              alt="Cảnh quan Đức đại diện cho hành trình học tập và làm việc"
              width={720}
              height={430}
              className="aspect-[16/10] w-full object-cover"
              priority
            />
            <div className="absolute left-4 top-4 rounded-md bg-[#DD0000] px-3 py-2 text-sm font-black text-white">
              Hồ sơ 1:1
            </div>
          </div>
          <div className="mt-5 grid gap-3">
            {[
              "Kiểm tra điều kiện ngành nghề",
              "Ước tính mốc tiếng Đức cần đạt",
              "Rà soát rủi ro hồ sơ và visa",
              "Gợi ý bước tiếp theo trong 15 phút",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-md bg-neutral-50 p-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <p className="text-sm font-semibold leading-6 text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PainPointSection() {
  return (
    <Section id="van-de" eyebrow="Điểm bắt đầu" title="Bạn đang băn khoăn điều gì?">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {painPoints.map((item) => (
          <Card key={item.title} className="transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
            <CardContent className="p-6">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-red-50 text-red-700">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function SolutionSection() {
  return (
    <Section
      id="giai-phap"
      eyebrow="Giải pháp"
      title="Xây dựng lộ trình sang Đức rõ ràng và thực tế"
      className="bg-neutral-50"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="border-t-4 border-t-red-600 transition hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-[#FFCE00]/25 text-red-700">
                <service.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-2xl font-black">{service.title}</h3>
              <ul className="mt-5 grid gap-3">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6" variant="dark">
                <a href="#lien-he" onClick={() => trackEvent("click_cta", { position: `service_${service.title}` })}>
                  Nhận lộ trình phù hợp
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function TimelineSection() {
  return (
    <Section id="lo-trinh" eyebrow="Quy trình" title="Lộ trình từ Việt Nam đến Đức">
      <div className="grid gap-4 lg:grid-cols-5">
        {timeline.map((step, index) => (
          <div key={step.title} className="relative rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-[#0B0B0B] text-sm font-black text-white">
              {index + 1}
            </div>
            <h3 className="text-base font-black leading-6 text-neutral-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{step.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild>
          <a href="#lien-he" onClick={() => trackEvent("click_cta", { position: "timeline" })}>
            Bắt đầu kiểm tra hồ sơ
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </Section>
  );
}

function ProgramsSection() {
  return (
    <Section
      id="chuong-trinh"
      eyebrow="Chương trình"
      title="Các chương trình phù hợp với bạn"
      className="bg-neutral-50"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {programSeed.map((program) => (
          <Card key={program.slug} className="transition hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex h-full flex-col p-6">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-red-50 text-red-700">
                <GraduationCap className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-xl font-black">{program.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{program.description}</p>
              <ul className="mt-4 grid gap-2">
                {program.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2 text-sm text-neutral-700">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-fit" variant="outline">
                <a
                  href="#lien-he"
                  onClick={() => trackEvent("program_selected", { program: program.slug })}
                >
                  Nhận tư vấn
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function JobFieldsSection() {
  return (
    <Section id="nganh-nghe" eyebrow="Ngành nghề" title="Ngành nghề du học nghề Đức được quan tâm">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {jobFieldSeed.map((field) => {
          const Icon = jobIcons[field.icon as keyof typeof jobIcons] ?? BookOpen;
          return (
            <Card key={field.slug} className="transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
              <CardContent className="flex h-full flex-col p-4">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-red-50 text-red-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-3 text-base font-black">{field.name}</h3>
                <p className="mt-2 text-sm leading-5 text-neutral-600">{field.description}</p>
                <div className="mt-4 grid gap-2 text-xs text-neutral-700">
                  <InfoRow label="Lương tham khảo" value={field.salary} />
                  <InfoRow label="Tiếng Đức" value={field.germanLevel} />
                  <InfoRow label="Mức phù hợp" value={field.fit} />
                </div>
                <Button asChild className="mt-4 w-full" size="sm" variant="outline">
                  <a
                    href="#lien-he"
                    onClick={() => trackEvent("job_field_selected", { jobField: field.slug })}
                  >
                    Tư vấn ngành này
                  </a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

function TrainingSection() {
  return (
    <Section id="dao-tao" eyebrow="Đào tạo" title="Lộ trình học tiếng Đức gắn với mục tiêu hồ sơ" className="bg-neutral-50">
      <div className="grid gap-5 md:grid-cols-2">
        {courseSeed.map((course) => (
          <Card key={course.slug}>
            <CardContent>
              <BookOpen className="h-8 w-8 text-red-600" />
              <h3 className="mt-4 text-xl font-black">{course.title}</h3>
              <p className="mt-2 text-sm font-semibold text-neutral-500">{course.duration}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{course.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function RecognitionSection() {
  return (
    <section id="cong-nhan-bang" className="bg-[#0B0B0B] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-md bg-[#FFCE00] px-3 py-2 text-sm font-black text-black">
            Công nhận bằng CHLB Đức
          </div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Đã có bằng tại Việt Nam? Hãy kiểm tra khả năng công nhận tại Đức
          </h2>
          <p className="mt-5 text-sm leading-7 text-neutral-300">
            Không phải ai cũng cần bắt đầu lại từ đầu. Nếu bạn đã có bằng cấp hoặc kinh nghiệm làm việc tại Việt Nam, chúng tôi sẽ giúp bạn kiểm tra khả năng công nhận bằng, chuyển đổi văn bằng và xây dựng lộ trình phù hợp để học tập hoặc làm việc tại Đức.
          </p>
          <Button asChild className="mt-6" variant="secondary">
            <a href="#lien-he" onClick={() => trackEvent("click_cta", { position: "recognition" })}>
              Kiểm tra khả năng công nhận bằng
            </a>
          </Button>
        </div>
        <div className="grid gap-3">
          {recognitionSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white text-sm font-black text-black">
                {index + 1}
              </span>
              <p className="text-sm font-semibold leading-6 text-neutral-100">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <Section id="cam-ket" eyebrow="Cam kết" title="Vì sao nên chọn chúng tôi?">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {commitments.map((commitment) => (
          <div key={commitment.title} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-red-50 text-red-700">
              <commitment.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-black">{commitment.title}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{commitment.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  return (
    <Section
      id="thanh-cong"
      eyebrow="Feedback"
      title="Học viên đã tin tưởng lựa chọn chúng tôi"
      className="bg-neutral-50"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonialSeed.map((item) => (
          <Card key={item.studentName} className="transition hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#0B0B0B] text-lg font-black text-[#FFCE00]">
                  {item.studentName.charAt(0)}
                </div>
                <div>
                  <p className="font-black">{item.studentName}</p>
                  <p className="text-sm text-neutral-500">{item.program}</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-neutral-700">“{item.content}”</p>
              <div className="mt-5 border-t border-neutral-200 pt-4">
                <Badge>{item.status}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function FaqSection() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Câu hỏi thường gặp">
      <div className="mx-auto grid max-w-4xl gap-3">
        {faqSeed.map((faq) => (
          <details key={faq.question} className="rounded-lg border border-neutral-200 bg-white p-4 open:border-red-200 open:bg-red-50/40">
            <summary className="cursor-pointer text-sm font-black text-neutral-900">{faq.question}</summary>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <section id="lien-he" className="bg-neutral-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            Đăng ký kiểm tra lộ trình miễn phí
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-600">
            Để lại thông tin ngắn gọn. Tư vấn viên sẽ liên hệ, đánh giá hồ sơ ban đầu và gợi ý lộ trình phù hợp với năng lực thực tế của bạn.
          </p>
          <div className="mt-6 grid gap-3">
            {["Form ngắn, không yêu cầu hồ sơ ngay", "Tư vấn minh bạch chi phí và tiến độ", "Phù hợp học viên và phụ huynh cùng theo dõi"].map((item) => (
              <p key={item} className="flex gap-3 text-sm font-semibold text-neutral-700">
                <CheckCircle2 className="h-5 w-5 text-red-600" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="dark">
              <a href="tel:0774300969" onClick={() => trackEvent("click_hotline", { position: "contact" })}>
                <Plane className="h-4 w-4" />
                Gọi tư vấn nhanh
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#cong-nhan-bang">
                Kiểm tra công nhận bằng
              </a>
            </Button>
          </div>
        </div>
        <Card>
          <CardContent className="p-5 sm:p-6">
            <LeadForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow: _eyebrow,
  title,
  className = "",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  void _eyebrow;

  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-9 max-w-3xl">
          <h2 className="text-3xl font-black leading-tight tracking-normal sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-neutral-50 p-2">
      <p className="font-semibold text-neutral-500">{label}</p>
      <p className="mt-1 font-bold leading-5 text-neutral-900">{value}</p>
    </div>
  );
}
