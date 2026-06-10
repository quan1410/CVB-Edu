import { testimonialSeed } from "@/lib/content";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "asc" },
    });
    return Response.json(testimonials.length ? testimonials : testimonialSeed);
  } catch {
    return Response.json(testimonialSeed);
  }
}
