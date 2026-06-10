import { describe, expect, it } from "vitest";

import { leadFormSchema } from "@/lib/validations";

const validLead = {
  fullName: "Nguyen Van An",
  phone: "0912345678",
  email: "",
  age: "22",
  city: "Ha Noi",
  interestedService: "DU_HOC_NGHE",
  germanLevel: "A1",
  message: "Can tu van lo trinh",
  consent: true,
};

describe("leadFormSchema", () => {
  it("accepts a Vietnamese mobile number and optional empty email", () => {
    const result = leadFormSchema.safeParse(validLead);

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBeUndefined();
      expect(result.data.phone).toBe("0912345678");
    }
  });

  it("rejects an invalid Vietnamese phone number", () => {
    const result = leadFormSchema.safeParse({
      ...validLead,
      phone: "12345",
    });

    expect(result.success).toBe(false);
  });

  it("requires interested service and consultation consent", () => {
    const result = leadFormSchema.safeParse({
      ...validLead,
      interestedService: "",
      consent: false,
    });

    expect(result.success).toBe(false);
  });
});
