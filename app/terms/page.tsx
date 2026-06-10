import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Button asChild variant="outline">
        <Link href="/">Về trang chủ</Link>
      </Button>
      <h1 className="mt-8 text-3xl font-black">Điều khoản sử dụng</h1>
      <p className="mt-4 leading-7 text-neutral-700">
        Nội dung trên website mang tính tư vấn định hướng và phụ thuộc vào điều kiện hồ sơ thực tế, quy định của cơ quan Đức và thời điểm xử lý. CVB EDU không đưa ra cam kết sai sự thật về visa, định cư hoặc kết quả công nhận bằng.
      </p>
    </main>
  );
}
