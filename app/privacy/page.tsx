import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Button asChild variant="outline">
        <Link href="/">Về trang chủ</Link>
      </Button>
      <h1 className="mt-8 text-3xl font-black">Chính sách bảo mật</h1>
      <p className="mt-4 leading-7 text-neutral-700">
        CVB EDU chỉ thu thập thông tin bạn gửi qua form tư vấn để liên hệ, đánh giá nhu cầu và hỗ trợ lộ trình học tập/làm việc tại Đức. Thông tin cá nhân không được bán hoặc chia sẻ cho bên thứ ba ngoài phạm vi xử lý hồ sơ khi có sự đồng ý của bạn.
      </p>
    </main>
  );
}
