"use client";

import { signIn } from "next-auth/react";
import { Lock } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AdminLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError("");
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    setLoading(false);

    if (result?.error) {
      setError("Email hoặc mật khẩu admin chưa đúng.");
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <main className="grid min-h-screen place-items-center bg-neutral-100 px-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <div className="mb-6 grid h-12 w-12 place-items-center rounded-md bg-red-600 text-white">
            <Lock className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-black">Đăng nhập admin</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Quản lý lead tư vấn, ghi chú và xuất dữ liệu CRM.
          </p>
          <form action={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input name="email" type="email" required placeholder="admin@cvbedu.vn" />
            </div>
            <div className="grid gap-2">
              <Label>Mật khẩu</Label>
              <Input name="password" type="password" required />
            </div>
            {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
            <Button disabled={loading} type="submit">
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
