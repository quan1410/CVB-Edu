import { faqSeed } from "@/lib/content";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const faqs = await prisma.fAQ.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
    return Response.json(faqs.length ? faqs : faqSeed);
  } catch {
    return Response.json(faqSeed);
  }
}
