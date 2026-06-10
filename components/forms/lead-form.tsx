"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { germanLevelLabels, serviceLabels } from "@/lib/labels";
import { readUtmParams, trackEvent } from "@/lib/tracking";
import {
  germanLevels,
  interestedServices,
  leadFormSchema,
  type LeadFormData,
  type LeadFormInput,
} from "@/lib/validations";

type FormStatus = "idle" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [started, setStarted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormInput, unknown, LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      age: "",
      city: "",
      interestedService: undefined,
      germanLevel: "CHUA_HOC",
      message: "",
      consent: false,
    },
  });

  function markStarted() {
    if (!started) {
      trackEvent("lead_form_started");
      setStarted(true);
    }
  }

  async function onSubmit(values: LeadFormData) {
    setStatus("idle");
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        ...readUtmParams(),
        source: "landing_page",
      }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    trackEvent("lead_submitted", {
      interestedService: values.interestedService,
    });
    setStatus("success");
    reset();
  }

  return (
    <form
      onFocus={markStarted}
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Họ và tên" error={errors.fullName?.message}>
          <Input placeholder="Nguyễn Văn A" {...register("fullName")} />
        </Field>
        <Field label="Số điện thoại" error={errors.phone?.message}>
          <Input placeholder="0912345678" {...register("phone")} />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Field label="Email" error={errors.email?.message}>
          <Input placeholder="email@example.com" {...register("email")} />
        </Field>
        <Field label="Độ tuổi" error={errors.age?.message}>
          <Input placeholder="22" {...register("age")} />
        </Field>
        <Field label="Tỉnh/thành phố" error={errors.city?.message}>
          <Input placeholder="Hà Nội" {...register("city")} />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Dịch vụ quan tâm" error={errors.interestedService?.message}>
          <Select {...register("interestedService")}>
            <option value="">Chọn dịch vụ</option>
            {interestedServices.map((service) => (
              <option key={service} value={service}>
                {serviceLabels[service]}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Trình độ tiếng Đức hiện tại" error={errors.germanLevel?.message}>
          <Select {...register("germanLevel")}>
            {germanLevels.map((level) => (
              <option key={level} value={level}>
                {germanLevelLabels[level]}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Ghi chú thêm" error={errors.message?.message}>
        <Textarea
          placeholder="Bạn muốn tư vấn ngành nghề, visa hay công nhận bằng?"
          {...register("message")}
        />
      </Field>

      <label className="flex items-start gap-3 rounded-md bg-neutral-50 p-3 text-sm text-neutral-700">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-red-600"
          {...register("consent")}
        />
        <span>
          Tôi đồng ý để CVB EDU liên hệ tư vấn lộ trình và xử lý thông tin theo chính sách bảo mật.
          {errors.consent?.message ? (
            <span className="mt-1 block text-xs font-semibold text-red-600">
              {errors.consent.message}
            </span>
          ) : null}
        </span>
      </label>

      {status === "success" ? (
        <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          Thông tin đã được gửi. Đội tư vấn sẽ liên hệ với bạn trong thời gian sớm nhất.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Chưa thể gửi thông tin. Vui lòng kiểm tra lại hoặc gọi hotline để được hỗ trợ.
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        <Send className="h-4 w-4" />
        {isSubmitting ? "Đang gửi..." : "Gửi thông tin tư vấn"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-xs font-semibold text-red-600">{error}</p> : null}
    </div>
  );
}
