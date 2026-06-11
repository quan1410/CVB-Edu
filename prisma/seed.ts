import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { courseSeed, faqSeed, jobFieldSeed, programSeed, testimonialSeed } from "../lib/content";

function createPoolConfig(connectionString: string | undefined) {
  if (!connectionString) {
    throw new Error("DATABASE_URL is required");
  }

  const url = new URL(connectionString);

  return {
    host: url.hostname,
    port: Number(url.port || 5432),
    database: url.pathname.slice(1),
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    ssl: url.searchParams.get("sslmode") === "require" ? { rejectUnauthorized: false } : undefined,
  };
}

const pool = new Pool(createPoolConfig(process.env.DATABASE_URL));
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

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
    jobFieldSeed.map((field) => {
      const jobField = {
        name: field.name,
        slug: field.slug,
        description: field.description,
        icon: field.icon,
      };

      return prisma.jobField.upsert({
        where: { slug: jobField.slug },
        update: jobField,
        create: jobField,
      });
    }),
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
