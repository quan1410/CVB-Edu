import { NextRequest } from "next/server";
import { InterestedService, LeadStatus, type Prisma } from "@prisma/client";

import { requireAdminSession } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const session = await requireAdminSession();
  if (!session) return Response.json({ message: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();
  const status = searchParams.get("status")?.trim();
  const service = searchParams.get("service")?.trim();

  const where: Prisma.LeadWhereInput = {};
  if (status && isLeadStatus(status)) where.status = status;
  if (service && isInterestedService(service)) where.interestedService = service;
  if (q) {
    where.OR = [
      { fullName: { contains: q, mode: "insensitive" } },
      { phone: { contains: q } },
      { email: { contains: q, mode: "insensitive" } },
    ];
  }

  const leads = await prisma.lead.findMany({
    where,
    include: { notes: { orderBy: { createdAt: "desc" } } },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return Response.json(leads);
}

function isLeadStatus(value: string): value is LeadStatus {
  return Object.values(LeadStatus).includes(value as LeadStatus);
}

function isInterestedService(value: string): value is InterestedService {
  return Object.values(InterestedService).includes(value as InterestedService);
}
