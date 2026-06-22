import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyContact } from "@/components/layout/sticky-contact";
import { Button } from "@/components/ui/button";
import { MapPin, Banknote, Users, Calendar, CheckCircle2, ListChecks } from "lucide-react";
import Link from "next/link";
import { LeadForm } from "@/components/forms/lead-form";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";

async function getJobOrder(id: string) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/job-orders/${id}`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function getRelatedJobOrders(currentId: string) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/job-orders?status=OPEN&page=0&size=5`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const items = data?.data?.content || [];
    return items.filter((item: { id: string | number }) => String(item.id) !== currentId).slice(0, 4);
  } catch {
    return [];
  }
}

export default async function JobOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const data = await getJobOrder(resolvedParams.id);
  const job = data?.data;

  if (!job) {
    notFound();
  }

  const relatedJobs = await getRelatedJobOrders(resolvedParams.id);

  return (
    <>
      <Header />
      <main className="bg-neutral-50 text-neutral-950 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-neutral-500 flex gap-2">
            <Link href="/" className="hover:text-red-600 transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/#nganh-nghe" className="hover:text-red-600 transition-colors">Tuyển dụng</Link>
            <span>/</span>
            <span className="text-neutral-900 truncate max-w-xs">{job.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content (2/3) */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-neutral-200">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-neutral-500">
                      Mã vị trí: <span className="text-neutral-900">{job.id}</span>
                    </span>
                    <span className="text-neutral-300">•</span>
                    {job.status === "OPEN" && (
                      <div className="flex items-center gap-1.5 text-sm font-medium text-green-600">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Đang nhận hồ sơ
                      </div>
                    )}
                    {job.status === "CLOSED" && (
                      <div className="flex items-center gap-1.5 text-sm font-medium text-neutral-500">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-400"></span>
                        Đã đóng
                      </div>
                    )}
                  </div>
                  <h1 className="text-3xl font-black text-neutral-900 leading-tight">
                    {job.title}
                  </h1>
                  {job.titleGerman && (
                    <p className="text-lg font-semibold text-neutral-500 mt-1">
                      {job.titleGerman}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6 pb-6 border-b border-neutral-100">
                  {job.salaryNote && (
                    <div className="flex items-center gap-2 text-sm text-neutral-700 bg-neutral-50 px-3 py-2 rounded-md">
                      <Banknote className="h-5 w-5 text-red-600" />
                      <span>Lương cơ bản: <span className="font-black">{job.salaryNote}</span></span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-neutral-700 bg-neutral-50 px-3 py-2 rounded-md">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <span>Địa điểm: <span className="font-bold">{(job.locationCity || job.locationState) ? [job.locationCity, job.locationState].filter(Boolean).join(', ') : "Đang cập nhật"}</span></span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-700 bg-neutral-50 px-3 py-2 rounded-md">
                    <Users className="h-5 w-5 text-red-600" />
                    <span>Chỉ tiêu: <span className="font-bold">Còn {Math.max((job.slots ?? 0) - (job.filledSlots ?? 0), 0)}/{job.slots ?? 0} suất</span></span>
                  </div>
                  {job.enrollmentDate && (
                    <div className="flex items-center gap-2 text-sm text-neutral-700 bg-neutral-50 px-3 py-2 rounded-md">
                      <Calendar className="h-5 w-5 text-red-600" />
                      <span>Kỳ nhập học: <span className="font-bold">{job.enrollmentDate}</span></span>
                    </div>
                  )}
                </div>

                <div className="mt-8 space-y-8">
                  {job.description && (
                    <div>
                      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        Mô tả công việc
                      </h2>
                      <div className="prose prose-neutral max-w-none">
                        <p className="whitespace-pre-wrap text-neutral-700 leading-relaxed text-[15px]">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {job.benefits && job.benefits.length > 0 && (
                    <div>
                      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Banknote className="h-5 w-5 text-red-600" />
                        Lương và Phúc lợi
                      </h2>
                      <ul className="grid gap-3">
                        {job.benefits.map((benefit: string, index: number) => (
                          <li key={index} className="flex gap-3 text-neutral-700 text-[15px]">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.mainTasks && job.mainTasks.length > 0 && (
                    <div>
                      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <ListChecks className="h-5 w-5 text-red-600" />
                        Nhiệm vụ chính
                      </h2>
                      <ul className="grid gap-3">
                        {job.mainTasks.map((task: string, index: number) => (
                          <li key={index} className="flex gap-3 text-neutral-700 text-[15px]">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.requirements && job.requirements.length > 0 && (
                    <div>
                      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <ListChecks className="h-5 w-5 text-red-600" />
                        Yêu cầu hồ sơ
                      </h2>
                      <ul className="grid gap-3">
                        {job.requirements.map((req: string, index: number) => (
                          <li key={index} className="flex gap-3 text-neutral-700 text-[15px]">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div id="ung-tuyen" className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-neutral-200 scroll-m-24">
                <h2 className="text-2xl font-black mb-2">Đăng ký tư vấn vị trí này</h2>
                <p className="text-sm text-neutral-600 mb-6">Để lại thông tin ngắn gọn, tư vấn viên sẽ liên hệ và đánh giá hồ sơ của bạn cho vị trí <strong>{job.title}</strong>.</p>
                <LeadForm />
              </div>
            </div>

            {/* Sidebar (1/3) */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-24 bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                <h3 className="text-lg font-black mb-4 pb-2 border-b border-neutral-100">Các vị trí liên quan</h3>
                <div className="space-y-3">
                  {relatedJobs.length > 0 ? (
                    relatedJobs.map((relatedJob: { id: string | number; title: string; salaryNote?: string; locationCity?: string }) => (
                      <Link href={`/job-orders/${relatedJob.id}`} key={relatedJob.id} className="block group">
                        <div className="transition-colors group-hover:bg-red-50/50 -mx-3 p-3 rounded-lg border border-transparent group-hover:border-red-100">
                          <h4 className="font-bold text-sm text-neutral-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                            {relatedJob.title}
                          </h4>
                          <div className="mt-2 flex items-center gap-3 text-xs text-neutral-500">
                            <span className="flex items-center gap-1 font-medium bg-neutral-100 px-1.5 py-0.5 rounded">
                              <Banknote className="h-3 w-3 text-neutral-400" />
                              {relatedJob.salaryNote || "Thỏa thuận"}
                            </span>
                            <span className="flex items-center gap-1 truncate">
                              <MapPin className="h-3 w-3 text-neutral-400" />
                              <span className="truncate">{relatedJob.locationCity || "N/A"}</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-neutral-500">Chưa có vị trí liên quan nào.</p>
                  )}
                </div>
                <Button asChild className="w-full mt-6" variant="outline">
                  <Link href="/#nganh-nghe">Xem tất cả vị trí</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const data = await getJobOrder(resolvedParams.id);
  const job = data?.data;

  if (!job) {
    return { title: "Không tìm thấy vị trí | CVB Edu" };
  }

  return {
    title: `${job.title} - Du học nghề Đức | CVB Edu`,
    description: job.description?.substring(0, 160) || `Tuyển dụng ${job.title} tại Đức. Lương cơ bản: ${job.salaryNote || "Thỏa thuận"}.`,
  };
}
