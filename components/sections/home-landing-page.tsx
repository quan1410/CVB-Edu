"use client";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Plane,
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
    <section className="relative isolate overflow-hidden bg-black">
      <Image
        src={heroImage}
        alt="Thành phố Đức và kiến trúc châu Âu"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl content-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-white"
        >
          <Badge className="border-yellow-300/50 bg-yellow-300/15 text-yellow-200">
            Mở hồ sơ 2025 - 2026
          </Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Du Học Nghề Đức & Công Nhận Bằng CHLB Đức
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-100 sm:text-lg">
            Lộ trình rõ ràng, tư vấn hồ sơ từ A-Z, đồng hành cùng bạn từ học tiếng Đức đến visa, học nghề, làm việc và định cư tại Đức.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" onClick={() => trackEvent("click_cta", { position: "hero" })}>
              <a href="#lien-he">
                Tư vấn miễn phí ngay
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#lo-trinh">Xem lộ trình</a>
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-3 self-end sm:grid-cols-2">
          {trustStats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/15 bg-white/10 p-4 text-white backdrop-blur">
              <p className="text-2xl font-black text-[#FFCE00]">{stat.value}</p>
              <p className="mt-1 text-sm leading-5 text-neutral-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PainPointSection() {
  return (
    <Section id="van-de" eyebrow="Điểm bắt đầu" title="Bạn đang băn khoăn điều gì?">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {painPoints.map((item) => (
          <Card key={item.title}>
            <CardContent>
              <item.icon className="h-7 w-7 text-red-600" />
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
      title="Chúng tôi giúp bạn xây dựng lộ trình sang Đức rõ ràng và thực tế"
      className="bg-neutral-50"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="border-t-4 border-t-red-600">
            <CardContent>
              <service.icon className="h-8 w-8 text-red-600" />
              <h3 className="mt-4 text-2xl font-black">{service.title}</h3>
              <ul className="mt-5 grid gap-3">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    {item}
                  </li>
                ))}
              </ul>
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
      <div className="grid gap-4 lg:grid-cols-6">
        {timeline.map((step, index) => (
          <div key={step} className="relative rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-md bg-[#0B0B0B] text-sm font-black text-white">
              {index + 1}
            </div>
            <p className="text-sm font-semibold leading-6 text-neutral-800">{step}</p>
          </div>
        ))}
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
          <Card key={program.slug}>
            <CardContent>
              <GraduationCap className="h-8 w-8 text-red-600" />
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
              <Button asChild className="mt-5" variant="outline">
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {jobFieldSeed.map((field, index) => {
          const Icon = jobIcons[field.icon as keyof typeof jobIcons] ?? BookOpen;
          return (
            <Card key={field.slug}>
              <CardContent className="p-4">
                <Icon className="h-7 w-7 text-red-600" />
                <h3 className="mt-3 text-base font-black">{field.name}</h3>
                <p className="mt-2 min-h-20 text-sm leading-5 text-neutral-600">{field.description}</p>
                <Badge className="mt-3 bg-yellow-50 text-neutral-800">
                  Phù hợp: {index % 2 === 0 ? "cao" : "trung bình - cao"}
                </Badge>
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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Badge className="border-yellow-300/40 bg-yellow-300/10 text-yellow-200">Công nhận bằng</Badge>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Đã có bằng tại Việt Nam? Hãy kiểm tra khả năng công nhận tại Đức
          </h2>
          <p className="mt-5 text-sm leading-7 text-neutral-300">
            Không phải ai cũng cần bắt đầu lại từ đầu. Nếu bạn đã có bằng cấp hoặc kinh nghiệm làm việc tại Việt Nam, chúng tôi sẽ giúp bạn kiểm tra khả năng công nhận bằng, chuyển đổi văn bằng và xây dựng lộ trình phù hợp để học tập hoặc làm việc tại Đức.
          </p>
          <Button asChild className="mt-6" variant="secondary">
            <a href="#lien-he">Kiểm tra bằng của tôi</a>
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {recognitionSteps.map((step, index) => (
            <div key={step} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-black text-[#FFCE00]">Bước {index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-100">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  return (
    <Section id="cam-ket" eyebrow="Cam kết" title="Cam kết đồng hành minh bạch">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {commitments.map((commitment) => (
          <div key={commitment} className="flex gap-3 rounded-lg border border-neutral-200 bg-white p-4">
            <ShieldIcon />
            <p className="text-sm font-semibold leading-6 text-neutral-800">{commitment}</p>
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
          <Card key={item.studentName}>
            <CardContent>
              <p className="text-sm leading-7 text-neutral-700">“{item.content}”</p>
              <div className="mt-5 border-t border-neutral-200 pt-4">
                <p className="font-black">{item.studentName}</p>
                <p className="text-sm text-neutral-500">{item.program}</p>
                <Badge className="mt-3">{item.status}</Badge>
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
          <Badge>Đăng ký tư vấn</Badge>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Đăng ký tư vấn miễn phí
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
        </div>
        <Card>
          <CardContent>
            <LeadForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
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
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-9 max-w-3xl">
          <Badge>{eyebrow}</Badge>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-red-50 text-red-700">
      <Plane className="h-4 w-4" />
    </span>
  );
}
