import type { LeadStatus } from "@/lib/validations";

export const serviceLabels = {
  DU_HOC_NGHE: "Du học nghề Đức",
  CONG_NHAN_BANG: "Công nhận/chuyển đổi bằng",
  HOC_TIENG_DUC: "Học tiếng Đức",
  TU_VAN_VISA: "Tư vấn visa",
} as const;

export const germanLevelLabels = {
  CHUA_HOC: "Chưa học",
  A1: "A1",
  A2: "A2",
  B1: "B1",
  B2: "B2",
  KHAC: "Khác",
} as const;

export const statusLabels: Record<LeadStatus, string> = {
  MOI: "Mới",
  DA_LIEN_HE: "Đã liên hệ",
  DANG_TU_VAN: "Đang tư vấn",
  TIEM_NANG: "Tiềm năng",
  KHONG_PHU_HOP: "Không phù hợp",
  DA_CHOT: "Đã chốt",
};
