"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Phone,
  Search,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import useSWR from "swr";

import { LeadForm } from "@/components/forms/lead-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  anonymousCases,
  audienceSituations,
  contactConfig,
  educationReasons,
  faqSeed,
  heroImage,
  heroTrustSignals,
  processSteps,
  programTracks,
  serviceGroups,
} from "@/lib/content";
import { trackEvent } from "@/lib/tracking";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type JobOrderCard = {
  id: number | string;
  title: string;
  titleGerman?: string;
  description?: string;
  salaryNote?: string;
  locationCity?: string;
  locationState?: string;
  slots?: number;
  filledSlots?: number;
};

const viewport = { once: true, amount: 0.18 };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerGrid = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function HomeLandingPage() {
  return (
    <main className="overflow-x-hidden bg-[#fbfaf7] text-[#162033]">
      <HeroSection />
      <AudienceSection />
      <ServicesSection />
      <ProcessSection />
      <ProgramsSection />
      <JobOrdersSection />
      <CasesSection />
      <EducationSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  const reduceMotion = useReducedMotion();
  const phoneHref = contactConfig.hotline.replaceAll(" ", "");

  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#f7f4ee]">
      <motion.div
        className="absolute inset-y-0 right-0 hidden w-[48%] lg:block"
        animate={reduceMotion ? undefined : { scale: [1.01, 1.035, 1.01] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={heroImage}
          alt="Thành phố Đức và kiến trúc châu Âu"
          fill
          priority
          sizes="48vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ee] via-[#f7f4ee]/55 to-transparent" />
      </motion.div>

      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl content-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-sm font-semibold uppercase tracking-normal text-red-700">
            Tư vấn du học nghề Đức, học tiếng Đức, visa và công nhận bằng
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-normal text-[#111827] sm:text-5xl lg:text-[60px]">
            Du học nghề Đức & công nhận bằng: bắt đầu bằng việc kiểm tra hồ sơ thật của bạn
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
            CVB Edu tư vấn lộ trình học tiếng, chọn ngành, chuẩn bị hồ sơ, visa và công nhận bằng tại Đức dựa trên độ tuổi, bằng cấp, trình độ tiếng và mục tiêu nghề nghiệp của từng học viên.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" onClick={() => trackEvent("click_cta", { position: "hero" })}>
              <a href="#lien-he">
                Kiểm tra hồ sơ ban đầu miễn phí
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#quy-trinh">Xem quy trình tư vấn</a>
            </Button>
          </div>

          <motion.div
            className="mt-8 grid gap-3 sm:grid-cols-2"
            variants={staggerGrid}
            initial="hidden"
            animate="visible"
          >
            {heroTrustSignals.map((signal) => (
              <motion.div
                key={signal}
                variants={cardReveal}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="flex gap-3 rounded-md border border-slate-200 bg-white/80 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                <p className="text-sm font-medium leading-6 text-slate-700">{signal}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
            <a className="inline-flex items-center gap-2 font-semibold text-[#111827]" href={`tel:${phoneHref}`}>
              <Phone className="h-4 w-4 text-red-700" />
              Hotline: 0774 300 969
            </a>
            <span>{contactConfig.address}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="self-center"
        >
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <Image
              src={contactConfig.consultantAvatar}
              alt="Chuyên viên tư vấn CVB Edu"
              width={620}
              height={620}
              className="w-full rounded-md bg-white object-contain"
              priority
            />
            <div className="mt-4 border-t border-slate-200 pt-4">
              <p className="text-sm font-black text-[#111827]">Tư vấn ban đầu không yêu cầu nộp giấy tờ.</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tư vấn viên sẽ hỏi thông tin học tập, bằng cấp, tiếng Đức và mục tiêu trước khi đề xuất bước tiếp theo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <Section
      id="truong-hop"
      title="Bạn đang ở trường hợp nào?"
      description="Mỗi hồ sơ có điểm xuất phát khác nhau. Trước khi chọn ngành hoặc đóng phí học, nên kiểm tra tình trạng thật để biết việc nào cần làm trước."
    >
      <motion.div
        className="grid gap-4 lg:grid-cols-5"
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {audienceSituations.map((item, index) => (
          <motion.article
            key={item.title}
            variants={cardReveal}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:col-span-1"
          >
            <span className="text-xs font-black text-red-700">0{index + 1}</span>
            <h3 className="mt-3 text-lg font-black leading-6 text-[#111827]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.situation}</p>
            <div className="mt-5 space-y-3 border-t border-slate-200 pt-4 text-sm leading-6">
              <p><strong>CVB Edu kiểm tra:</strong> {item.checks}</p>
              <p><strong>Bạn nhận được:</strong> {item.result}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function ServicesSection() {
  return (
    <Section
      id="ho-tro"
      title="CVB Edu hỗ trợ những gì?"
      description="Nội dung tư vấn tập trung vào việc ra quyết định đúng thứ tự: học tiếng, chọn ngành, chuẩn bị giấy tờ, visa hoặc công nhận bằng."
      className="bg-white"
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {serviceGroups.map((service) => (
          <motion.article
            key={service.title}
            variants={cardReveal}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-lg border border-slate-200 bg-[#fbfaf7] p-6"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-red-50 text-red-700">
                <ClipboardCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-black text-[#111827]">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.summary}</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-3">
              {service.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function ProcessSection() {
  return (
    <Section
      id="quy-trinh"
      title="Quy trình làm việc"
      description="Quy trình được thiết kế để học viên và phụ huynh biết rõ mốc nào đang xử lý, ai phụ trách và bước tiếp theo là gì."
    >
      <motion.div
        className="relative grid gap-4 lg:grid-cols-5"
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {processSteps.map((step, index) => (
          <motion.article
            key={step.title}
            variants={cardReveal}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="grid h-10 w-10 place-items-center rounded-md bg-[#162033] text-sm font-black text-white">
              {index + 1}
            </div>
            <h3 className="mt-4 text-base font-black leading-6 text-[#111827]">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
          </motion.article>
        ))}
      </motion.div>
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Button asChild variant="outline">
          <a href="#lien-he" onClick={() => trackEvent("click_cta", { position: "process" })}>
            Gửi thông tin để kiểm tra bước đầu
          </a>
        </Button>
      </motion.div>
    </Section>
  );
}

function ProgramsSection() {
  return (
    <Section
      id="chuong-trinh"
      title="Các chương trình phù hợp"
      description="Danh sách dưới đây giúp bạn định hướng trước. Khi tư vấn, CVB Edu sẽ kiểm tra lại hồ sơ thật trước khi khuyến nghị hướng đi."
      className="bg-white"
    >
      <motion.div
        className="overflow-hidden rounded-lg border border-slate-200 bg-white"
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {programTracks.map((program, index) => (
          <motion.article
            key={program.title}
            variants={cardReveal}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid gap-4 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[0.75fr_1.25fr]"
          >
            <div>
              <p className="text-xs font-black text-red-700">Chương trình {index + 1}</p>
              <h3 className="mt-2 text-xl font-black text-[#111827]">{program.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{program.fit}</p>
            </div>
            <ul className="grid gap-3">
              {program.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function JobOrdersSection() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(0);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const queryParams = new URLSearchParams({
    status: "OPEN",
    page: page.toString(),
    size: "8",
  });
  if (debouncedSearch) {
    queryParams.append("keyword", debouncedSearch);
  }

  const { data, error, isLoading } = useSWR(
    `/api/job-orders?${queryParams.toString()}`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false },
  );

  const jobOrders: JobOrderCard[] = data?.data?.content ?? [];
  const totalPages = data?.data?.totalPages ?? 0;

  return (
    <Section
      id="nganh-nghe"
      title="Vị trí du học nghề đang mở"
      description="Nếu có vị trí đang mở, bạn có thể xem để hình dung nhóm ngành và địa điểm. Thông tin chi tiết vẫn cần được đối chiếu với hồ sơ cá nhân."
    >
      <motion.div
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="max-w-xl text-sm leading-6 text-slate-600">
          Tìm nhanh theo ngành hoặc thành phố để xem các vị trí hiện có trong hệ thống.
        </p>
        <div className="relative w-full sm:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="search"
            placeholder="Tìm theo tên ngành, thành phố..."
            className="bg-white pl-9"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </motion.div>

      {isLoading ? (
        <motion.div
          className="flex justify-center py-10 text-sm font-medium text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Đang tải danh sách vị trí...
        </motion.div>
      ) : error ? (
        <motion.div
          className="py-10 text-center text-sm font-medium text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Không thể tải danh sách vị trí. Vui lòng thử lại sau.
        </motion.div>
      ) : jobOrders.length === 0 ? (
        <motion.div
          className="py-10 text-center text-sm font-medium text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Không tìm thấy vị trí nào phù hợp với &quot;{debouncedSearch}&quot;.
        </motion.div>
      ) : (
        <>
          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {jobOrders.map((job) => (
              <motion.div key={job.id} variants={cardReveal} transition={{ duration: 0.4, ease: "easeOut" }}>
                <Card className="h-full border-slate-200 shadow-none transition hover:border-red-200">
                  <CardContent className="flex h-full flex-col p-5">
                    <h3 className="text-base font-black leading-6 text-[#111827]">{job.title}</h3>
                    {job.titleGerman ? (
                      <p className="mt-1 text-xs font-semibold text-slate-500">{job.titleGerman}</p>
                    ) : null}
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{job.description}</p>
                    <Button asChild className="mt-5 w-fit" size="sm" variant="outline">
                      <a
                        href={`/job-orders/${job.id}`}
                        onClick={() => trackEvent("job_order_details_viewed", { jobOrderId: job.id, jobTitle: job.title })}
                      >
                        Xem chi tiết
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {totalPages > 1 && (
            <motion.div
              className="mt-8 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((currentPage) => Math.max(0, currentPage - 1))}
                disabled={page === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="text-sm font-semibold text-slate-600">
                Trang {page + 1} / {totalPages}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((currentPage) => Math.min(totalPages - 1, currentPage + 1))}
                disabled={page >= totalPages - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </>
      )}
    </Section>
  );
}

function CasesSection() {
  return (
    <Section
      id="truong-hop-thuong-gap"
      title="Một số trường hợp thường gặp"
      description="Chưa có testimonial thật được xác minh, nên phần này dùng case ẩn danh để bạn hình dung cách tư vấn viên xử lý từng tình huống."
      className="bg-white"
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2"
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {anonymousCases.map((item) => (
          <motion.article
            key={item.profile}
            variants={cardReveal}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="rounded-lg border border-slate-200 bg-[#fbfaf7] p-6"
          >
            <h3 className="text-lg font-black text-[#111827]">{item.profile}</h3>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
              <p><strong>Tình trạng ban đầu:</strong> {item.initialState}</p>
              <p><strong>Vấn đề chính:</strong> {item.issue}</p>
              <p><strong>Hướng xử lý được tư vấn:</strong> {item.direction}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

function EducationSection() {
  return (
    <section id="kiem-tra-ho-so" className="bg-[#162033] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-normal text-[#f4c542]">Trước khi đăng ký</p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal sm:text-4xl">
            Vì sao nên kiểm tra hồ sơ trước?
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-200">
            Tư vấn ban đầu giúp bạn tránh chọn sai ngành, chuẩn bị giấy tờ sai thứ tự hoặc đặt kỳ vọng không phù hợp với điều kiện hồ sơ.
          </p>
          <Button asChild className="mt-7" variant="secondary">
            <a href="#lien-he" onClick={() => trackEvent("click_cta", { position: "education" })}>
              Kiểm tra tình trạng hồ sơ
            </a>
          </Button>
        </motion.div>
        <motion.div
          className="grid gap-3"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {educationReasons.map((reason) => (
            <motion.article
              key={reason.title}
              variants={cardReveal}
              transition={{ duration: 0.42, ease: "easeOut" }}
              className="rounded-lg border border-white/10 bg-white/5 p-5"
            >
              <h3 className="font-black text-white">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">{reason.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <Section
      id="faq"
      title="Câu hỏi thường gặp"
      description="Các câu trả lời dưới đây chỉ mang tính định hướng ban đầu. Điều kiện cụ thể vẫn cần kiểm tra theo từng hồ sơ."
    >
      <motion.div
        className="mx-auto grid max-w-4xl gap-3"
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {faqSeed.map((faq) => (
          <motion.details
            key={faq.question}
            variants={cardReveal}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-lg border border-slate-200 bg-white p-4 open:border-red-200 open:bg-red-50/30"
          >
            <summary className="cursor-pointer text-sm font-black text-[#111827]">{faq.question}</summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
          </motion.details>
        ))}
      </motion.div>
    </Section>
  );
}

function ContactSection() {
  return (
    <section id="lien-he" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-normal text-red-700">Đăng ký tư vấn</p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal text-[#111827] sm:text-4xl">
            Nhận tư vấn lộ trình sơ bộ
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Sau khi gửi thông tin, tư vấn viên sẽ liên hệ để hỏi nhanh tình trạng học tập/bằng cấp, trình độ tiếng Đức và mục tiêu của bạn. Bạn chưa cần nộp giấy tờ ở bước đầu.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              "Thông tin chỉ dùng để tư vấn hồ sơ và không chia sẻ cho bên thứ ba.",
              "Có thể để phụ huynh cùng trao đổi về chi phí và tiến độ.",
              "Kết quả tư vấn phụ thuộc vào điều kiện hồ sơ thực tế.",
            ].map((item) => (
              <p key={item} className="flex gap-3 text-sm font-medium leading-6 text-slate-700">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-red-700" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline">
              <a href={`tel:${contactConfig.hotline.replaceAll(" ", "")}`} onClick={() => trackEvent("click_hotline", { position: "contact" })}>
                <Phone className="h-4 w-4" />
                Gọi hotline
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={contactConfig.zalo} onClick={() => trackEvent("click_zalo", { position: "contact" })}>
                Nhắn Zalo
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-5 sm:p-6">
              <LeadForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Section({
  id,
  title,
  description,
  className = "",
  children,
}: {
  id: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="mb-9 max-w-3xl"
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-black leading-tight tracking-normal text-[#111827] sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </motion.section>
  );
}
