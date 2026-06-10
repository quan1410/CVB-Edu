import nodemailer from "nodemailer";
import { Resend } from "resend";

import type { LeadFormData } from "@/lib/validations";
import { serviceLabels } from "@/lib/labels";

export async function sendLeadNotification(lead: LeadFormData) {
  const to = process.env.ADMIN_NOTIFY_EMAIL;
  if (!to) return;

  const subject = `Lead mới: ${lead.fullName} - ${serviceLabels[lead.interestedService]}`;
  const text = [
    `Họ tên: ${lead.fullName}`,
    `Số điện thoại: ${lead.phone}`,
    `Email: ${lead.email ?? "Không cung cấp"}`,
    `Dịch vụ: ${serviceLabels[lead.interestedService]}`,
    `Trình độ tiếng Đức: ${lead.germanLevel}`,
    `Tỉnh/thành: ${lead.city ?? "Không cung cấp"}`,
    `Ghi chú: ${lead.message ?? "Không có"}`,
  ].join("\n");

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.EMAIL_FROM ?? "CVB EDU <onboarding@resend.dev>",
      to,
      subject,
      text,
    });
    return;
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM ?? process.env.SMTP_USER,
      to,
      subject,
      text,
    });
  }
}
