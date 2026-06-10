import { NextRequest } from "next/server";

import { requireAdminSession } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { leadNoteSchema } from "@/lib/validations";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function POST(request: NextRequest, context: RouteContext) {
  const session = await requireAdminSession();
  if (!session) return Response.json({ message: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const parsed = leadNoteSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ message: "Ghi chú chưa hợp lệ" }, { status: 400 });
  }

  const { id } = await context.params;
  const note = await prisma.leadNote.create({
    data: {
      leadId: id,
      content: parsed.data.content,
      createdBy: session.user?.email ?? "admin",
    },
  });

  return Response.json(note);
}
