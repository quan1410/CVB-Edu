import { jobFieldSeed } from "@/lib/content";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const jobFields = await prisma.jobField.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "asc" },
    });
    return Response.json(jobFields.length ? jobFields : jobFieldSeed);
  } catch {
    return Response.json(jobFieldSeed);
  }
}
