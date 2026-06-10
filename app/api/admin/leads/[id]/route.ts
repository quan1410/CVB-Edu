import { NextRequest } from "next/server";

import { requireAdminSession } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { leadUpdateSchema } from "@/lib/validations";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: NextRequest, context: RouteContext) {
  const session = await requireAdminSession();
  if (!session) return Response.json({ message: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const lead = await prisma.lead.findUnique({
    where: { id },
    include: { notes: { orderBy: { createdAt: "desc" } }, appointments: true },
  });

  if (!lead) return Response.json({ message: "Không tìm thấy lead" }, { status: 404 });
  return Response.json(lead);
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  const session = await requireAdminSession();
  if (!session) return Response.json({ message: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const parsed = leadUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ message: "Dữ liệu chưa hợp lệ" }, { status: 400 });
  }

  const { id } = await context.params;
  const lead = await prisma.lead.update({
    where: { id },
    data: parsed.data,
  });
  return Response.json(lead);
}

export async function DELETE(_request: NextRequest, context: RouteContext) {
  const session = await requireAdminSession();
  if (!session) return Response.json({ message: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  await prisma.lead.delete({ where: { id } });
  return Response.json({ message: "Đã xóa lead" });
}
