import { PrismaClient } from "@prisma/client";
import { courseSeed, faqSeed, jobFieldSeed, programSeed, testimonialSeed } from "../lib/content";

const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    programSeed.map((program) =>
      prisma.program.upsert({
        where: { slug: program.slug },
        update: program,
        create: program,
      }),
    ),
  );

  await Promise.all(
    courseSeed.map((course) =>
      prisma.course.upsert({
        where: { slug: course.slug },
        update: course,
        create: course,
      }),
    ),
  );

  await Promise.all(
    jobFieldSeed.map((field) =>
      prisma.jobField.upsert({
        where: { slug: field.slug },
        update: field,
        create: field,
      }),
    ),
  );

  await Promise.all(
    faqSeed.map((faq) =>
      prisma.fAQ.upsert({
        where: { id: `faq-${faq.order}` },
        update: faq,
        create: { id: `faq-${faq.order}`, ...faq },
      }),
    ),
  );

  await Promise.all(
    testimonialSeed.map((testimonial, index) =>
      prisma.testimonial.upsert({
        where: { id: `testimonial-${index + 1}` },
        update: testimonial,
        create: { id: `testimonial-${index + 1}`, ...testimonial },
      }),
    ),
  );

  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL ?? "admin@cvbedu.vn" },
    update: { role: "ADMIN", name: "CVB EDU Admin" },
    create: {
      email: process.env.ADMIN_EMAIL ?? "admin@cvbedu.vn",
      name: "CVB EDU Admin",
      role: "ADMIN",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
