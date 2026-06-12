import { NextRequest } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const backendResponse = await fetch(`${BACKEND_URL}/api/job-orders/${resolvedParams.id}`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    const text = await backendResponse.text();
    const data = parseBackendJson(text);

    return Response.json(data, { status: backendResponse.status });
  } catch {
    return Response.json({ success: false, message: "Không thể lấy chi tiết", data: null }, { status: 500 });
  }
}

function parseBackendJson(text: string) {
  const trimmed = text.trim();
  if (!trimmed) {
    return { success: false, message: "Server không trả về dữ liệu", data: null };
  }

  try {
    let data: unknown = JSON.parse(trimmed);
    if (typeof data === "string") {
      data = JSON.parse(data);
    }
    return data;
  } catch (error) {
    console.error("Lỗi parse JSON. Nội dung trả về:", text);
    return { success: false, message: "Backend trả về định dạng không hợp lệ", data: null };
  }
}
