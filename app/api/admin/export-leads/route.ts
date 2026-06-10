import { requireAdminSession } from "@/lib/admin";
import { getServiceLabel, getStatusLabel } from "@/lib/labels";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await requireAdminSession();
  if (!session) return Response.json({ message: "Unauthorized" }, { status: 401 });

  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  const headers = [
    "Họ tên",
    "Điện thoại",
    "Email",
    "Dịch vụ",
    "Trình độ Đức",
    "Trạng thái",
    "Nguồn",
    "Ngày tạo",
  ];
  const rows = leads.map((lead) => [
    lead.fullName,
    lead.phone,
    lead.email ?? "",
    getServiceLabel(lead.interestedService),
    lead.germanLevel,
    getStatusLabel(lead.status),
    lead.source,
    lead.createdAt.toISOString(),
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","))
    .join("\n");

  return new Response(`\uFEFF${csv}`, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": "attachment; filename=cvbedu-leads.csv",
    },
  });
}
