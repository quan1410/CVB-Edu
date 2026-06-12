import { NextRequest } from "next/server";
import { leadFormSchema } from "@/lib/validations";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = leadFormSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { success: false, message: "Dữ liệu chưa hợp lệ", errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const payload = {
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      age: parsed.data.age ? parseInt(String(parsed.data.age), 10) : null,
      city: parsed.data.city,
      interestedService: parsed.data.interestedService,
      germanLevel: parsed.data.germanLevel,
      message: parsed.data.message,
    };

    const backendResponse = await fetch(`${BACKEND_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await backendResponse.json();
    return Response.json(data, { status: backendResponse.status });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: "Không thể xử lý đăng ký tư vấn" },
      { status: 500 },
    );
  }
}
