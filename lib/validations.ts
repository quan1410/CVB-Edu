import { z } from "zod";

export const interestedServices = [
  "DU_HOC_NGHE",
  "CONG_NHAN_BANG",
  "HOC_TIENG_DUC",
  "TU_VAN_VISA",
] as const;

export const germanLevels = [
  "CHUA_HOC",
  "A1",
  "A2",
  "B1",
  "B2",
  "KHAC",
] as const;

export const leadStatuses = [
  "MOI",
  "DA_LIEN_HE",
  "DANG_TU_VAN",
  "TIEM_NANG",
  "KHONG_PHU_HOP",
  "DA_CHOT",
] as const;

const optionalEmail = z
  .string()
  .trim()
  .transform((value) => (value === "" ? undefined : value))
  .pipe(z.email("Email không hợp lệ").optional());

export const vietnamesePhoneSchema = z
  .string()
  .trim()
  .regex(/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/, "Số điện thoại Việt Nam không hợp lệ");

export const leadFormSchema = z.object({
  fullName: z.string().trim().min(2, "Vui lòng nhập họ và tên"),
  phone: vietnamesePhoneSchema,
  email: optionalEmail,
  age: z.string().trim().optional(),
  city: z.string().trim().optional(),
  interestedService: z.enum(interestedServices, {
    error: "Vui lòng chọn dịch vụ quan tâm",
  }),
  germanLevel: z.enum(germanLevels).default("CHUA_HOC"),
  message: z.string().trim().max(1000, "Ghi chú tối đa 1000 ký tự").optional(),
  consent: z.boolean().refine((value) => value, "Bạn cần đồng ý nhận tư vấn"),
});

export const leadUpdateSchema = z.object({
  status: z.enum(leadStatuses).optional(),
  source: z.string().trim().optional(),
});

export const leadNoteSchema = z.object({
  content: z.string().trim().min(2, "Ghi chú cần ít nhất 2 ký tự"),
});

export type LeadFormInput = z.input<typeof leadFormSchema>;
export type LeadFormData = z.output<typeof leadFormSchema>;
export type LeadStatus = (typeof leadStatuses)[number];
