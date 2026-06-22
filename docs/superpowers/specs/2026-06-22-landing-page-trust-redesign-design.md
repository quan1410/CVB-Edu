# Landing Page Trust Redesign

Date: 2026-06-22

## Goal

Rework the CVB Edu landing page so it feels like a real education and hồ sơ consulting service, not a generic AI/template page. The page should help students and parents understand whether their situation fits du học nghề Đức, học tiếng Đức, hồ sơ visa, or công nhận bằng before submitting a consultation form.

## Design Direction

Use an editorial, trust-first layout with restrained motion and fewer decorative cards. Keep the page practical: explain what is checked, what the consultant does, what the learner receives, and what depends on personal hồ sơ or German authorities.

The visual system should move toward white/off-white backgrounds, navy/near-black text, light borders, and one consistent red CTA color. Yellow can appear only as a small accent. Avoid heavy gradients, repeated large icons, fake testimonials, or exaggerated claims.

## Page Structure

1. Hero
   - Headline: “Du học nghề Đức & công nhận bằng: bắt đầu bằng việc kiểm tra hồ sơ thật của bạn”.
   - Explain the audience and scope: students, parents, people with Vietnamese degrees, German learners.
   - Primary CTA: “Kiểm tra hồ sơ ban đầu miễn phí”.
   - Secondary CTA: “Xem quy trình tư vấn”.
   - Trust signals: case-by-case review, German learning and paperwork support, transparent scope/cost/timeline, Zalo/hotline tracking.

2. “Bạn đang ở trường hợp nào?”
   - Replace generic pain points with real user situations.
   - Each item includes the situation, what CVB Edu checks, and what the user receives.

3. “CVB Edu hỗ trợ những gì?”
   - Four service groups: du học nghề Đức, tiếng Đức/chứng chỉ, hồ sơ/visa/giấy tờ, công nhận bằng/làm việc tại Đức.
   - Use concrete action lists, not broad slogans.

4. “Quy trình làm việc”
   - Five practical steps from initial information check to paperwork follow-up and pre-flight or recognition preparation.

5. “Các chương trình phù hợp”
   - Keep program groups but rewrite copy: điều dưỡng, nhà hàng - khách sạn, cơ khí/kỹ thuật, công nhận bằng điều dưỡng/y tế, tiếng Đức A1-B1/B2.
   - Use a clean list/table-like layout rather than icon-heavy cards.

6. “Một số trường hợp thường gặp”
   - Replace seeded testimonials with anonymous cases.
   - Each case includes initial state, key issue, and consultation direction.

7. “Vì sao nên kiểm tra hồ sơ trước?”
   - Educate users about age, qualifications, German level, chosen profession, paperwork order, and risk of wasting time/cost.

8. Consultation form
   - Keep existing form fields.
   - Rewrite microcopy to say the user does not need to submit documents at the first step.
   - CTA: “Nhận tư vấn lộ trình sơ bộ”.
   - Privacy note: information is only used for consultation and not shared with third parties.

9. FAQ
   - Use practical questions: no German yet, when to start paperwork, B1 requirement, parent registration, visa claims, recognition paperwork.
   - Answers must be cautious and avoid promising visa or recognition outcomes.

## Component and Data Changes

- Update `lib/content.ts` to replace generic seed arrays with situation, service, process, program, case, education, and FAQ content.
- Refactor `components/sections/home-landing-page.tsx` to follow the new flow and reduce repetitive card patterns.
- Update `components/forms/lead-form.tsx` copy and submit CTA.
- Adjust header nav labels in `lib/content.ts` to match the new flow.
- Keep existing database, lead submission API, job orders API, tracking calls, contact config, assets, footer disclaimer, and sticky contact.

## Motion

Keep Framer Motion but make it quieter: subtle fade/slide on sections and small hover movement only. Avoid large parallax or overly animated SaaS-like effects.

## Risks and Boundaries

- Do not invent real testimonials.
- Do not claim guaranteed visa, guaranteed German entry, guaranteed recognition, or guaranteed income.
- Preserve lead form behavior and existing field validation.
- Preserve mobile sticky contact and contact information.
- Keep the page responsive on desktop and mobile and avoid horizontal overflow.

## Verification

Run:

- `npx tsc --noEmit --pretty false`
- `npm run lint`
- `npm test`
- `npm run build`

Also verify the rendered page locally at desktop and mobile widths for nonblank hero, visible form, no console errors, and no horizontal overflow.
