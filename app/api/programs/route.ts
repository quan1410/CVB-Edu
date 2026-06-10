import { programSeed } from "@/lib/content";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const programs = await prisma.program.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "asc" },
    });
    return Response.json(programs.length ? programs : programSeed);
  } catch {
    return Response.json(programSeed);
  }
}
