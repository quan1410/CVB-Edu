import { NextRequest } from "next/server";

import { sendLeadNotification } from "@/lib/email";
import { prisma } from "@/lib/prisma";
import { leadFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = leadFormSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { message: "Dữ liệu chưa hợp lệ", errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const source = typeof body.source === "string" && body.source ? body.source : "website";
    const lead = await prisma.lead.create({
      data: {
        fullName: parsed.data.fullName,
        phone: parsed.data.phone,
        email: parsed.data.email,
        age: parsed.data.age,
        city: parsed.data.city,
        interestedService: parsed.data.interestedService,
        germanLevel: parsed.data.germanLevel,
        message: parsed.data.message,
        source,
        utmSource: body.utmSource,
        utmMedium: body.utmMedium,
        utmCampaign: body.utmCampaign,
        utmContent: body.utmContent,
        utmTerm: body.utmTerm,
      },
    });

    await sendLeadNotification(parsed.data).catch((error) => {
      console.error("Lead email notification failed", error);
    });

    return Response.json({ message: "Lead đã được ghi nhận", leadId: lead.id });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Không thể xử lý đăng ký tư vấn" }, { status: 500 });
  }
}
