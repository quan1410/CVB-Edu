# Landing Page Trust Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the CVB Edu landing page copy and layout into a calmer, trust-first consultation page for du học nghề Đức, học tiếng Đức, visa paperwork, and công nhận bằng.

**Architecture:** Keep the existing Next.js app and component structure. Put page copy and reusable content arrays in `lib/content.ts`; render the new page flow in `components/sections/home-landing-page.tsx`; keep lead submission and admin/database behavior unchanged.

**Tech Stack:** Next.js 16 app router, React 19, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod.

---

### Task 1: Replace Landing Page Content Seeds

**Files:**
- Modify: `D:\Wordpress for CVBEDU\lib\content.ts`

- [ ] **Step 1: Replace generic nav and content arrays**

Update exported arrays so the landing page can render:
- `audienceSituations`: situation, checks, result
- `serviceGroups`: title, summary, items
- `processSteps`: title, text
- `programTracks`: title, fit, details
- `anonymousCases`: profile, initialState, issue, direction
- `educationReasons`: title, text
- `faqSeed`: cautious practical FAQ

- [ ] **Step 2: Preserve contact and assets**

Keep `contactConfig`, `heroImage`, existing logo/avatar/QR paths, and social links unchanged.

- [ ] **Step 3: Run typecheck**

Run: `npx tsc --noEmit --pretty false`

Expected: no missing exports after the landing component is updated in Task 2.

### Task 2: Rebuild Landing Page Flow

**Files:**
- Modify: `D:\Wordpress for CVBEDU\components\sections\home-landing-page.tsx`

- [ ] **Step 1: Update imports**

Remove no-longer-used content imports and icon imports. Add imports for the new arrays from `lib/content.ts`.

- [ ] **Step 2: Reorder page sections**

Render:
`HeroSection`, `AudienceSection`, `ServicesSection`, `ProcessSection`, `ProgramsSection`, `JobOrdersSection`, `CasesSection`, `EducationSection`, `FaqSection`, `ContactSection`.

- [ ] **Step 3: Rewrite hero**

Use the approved headline, practical subheadline, CTA labels, and trust signals. Use the existing consultant avatar as a real-person signal, but reduce decorative treatment.

- [ ] **Step 4: Replace repetitive cards**

Use restrained bordered panels, numbered lists, and split editorial layouts. Keep motion subtle with fade-up/stagger variants.

- [ ] **Step 5: Convert testimonials to anonymous cases**

Do not render seeded personal names or fake visa statuses. Render anonymous case cards with initial state, main issue, and consultation direction.

- [ ] **Step 6: Keep job orders**

Keep the existing `/api/job-orders` SWR section working, but rewrite its intro copy to fit the calmer tone.

### Task 3: Update Form and UI Tone

**Files:**
- Modify: `D:\Wordpress for CVBEDU\components\forms\lead-form.tsx`
- Modify: `D:\Wordpress for CVBEDU\components\layout\header.tsx`
- Modify: `D:\Wordpress for CVBEDU\components\ui\button.tsx`
- Modify: `D:\Wordpress for CVBEDU\app\globals.css`

- [ ] **Step 1: Update form copy**

Set form title to “Nhận tư vấn lộ trình sơ bộ”; explain that the first step does not require document submission.

- [ ] **Step 2: Update submit CTA**

Set submit button text to “Nhận tư vấn lộ trình sơ bộ”.

- [ ] **Step 3: Calm down CTA styling**

Keep red as the primary CTA, but reduce aggressive black/yellow usage where it feels promotional. Use navy/near-black for serious sections.

- [ ] **Step 4: Update nav labels**

Use labels aligned to the new flow: “Trường hợp”, “Hỗ trợ”, “Quy trình”, “Chương trình”, “FAQ”, “Liên hệ”.

### Task 4: Verify and Polish

**Files:**
- Modify if needed: `D:\Wordpress for CVBEDU\components\sections\home-landing-page.tsx`
- Modify if needed: `D:\Wordpress for CVBEDU\lib\content.ts`

- [ ] **Step 1: Static checks**

Run:
`npx tsc --noEmit --pretty false`
`npm run lint`
`npm test`
`npm run build`

- [ ] **Step 2: Browser checks**

Start local production server on port `3001`.
Verify desktop and mobile:
- hero and form render
- images load
- no console errors
- no horizontal overflow
- page copy does not include fake testimonials or forbidden claims

- [ ] **Step 3: Commit and push**

Commit implementation and push to `origin main`.
