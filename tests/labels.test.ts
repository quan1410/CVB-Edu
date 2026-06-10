import { describe, expect, it } from "vitest";

import { getGermanLevelLabel, getServiceLabel, getStatusLabel } from "@/lib/labels";

describe("label helpers", () => {
  it("returns labels for valid lead values passed as unknown strings", () => {
    const status: unknown = "MOI";
    const service: unknown = "DU_HOC_NGHE";
    const germanLevel: unknown = "B1";

    expect(getStatusLabel(status)).toBe("Mới");
    expect(getServiceLabel(service)).toBe("Du học nghề Đức");
    expect(getGermanLevelLabel(germanLevel)).toBe("B1");
  });

  it("returns a readable fallback for unexpected values", () => {
    expect(getStatusLabel("UNKNOWN")).toBe("UNKNOWN");
    expect(getServiceLabel(null)).toBe("-");
    expect(getGermanLevelLabel(undefined)).toBe("-");
  });
});
