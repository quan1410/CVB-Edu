"use client";

export type TrackingEvent =
  | "lead_form_started"
  | "lead_submitted"
  | "click_cta"
  | "program_selected"
  | "job_field_selected"
  | "job_order_selected"
  | "click_hotline"
  | "click_zalo"
  | "click_messenger";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
    ttq?: {
      track: (event: string, payload?: Record<string, unknown>) => void;
    };
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: TrackingEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({ event, ...payload });
  window.gtag?.("event", event, payload);
  window.fbq?.("trackCustom", event, payload);
  window.ttq?.track(event, payload);
}

export function readUtmParams() {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
    utmContent: params.get("utm_content") ?? undefined,
    utmTerm: params.get("utm_term") ?? undefined,
  };
}
