# CVB EDU Landing Page / Mini CRM

Website Next.js cho tư vấn du học nghề Đức, công nhận bằng CHLB Đức, đào tạo tiếng Đức và hồ sơ visa. Dự án gồm landing page conversion, form lead, Prisma/PostgreSQL, API, admin CRM, SEO metadata, sitemap, robots và seed data mẫu.

## Kiến trúc

- `app/`: App Router, public pages, admin pages, route handlers API, SEO files.
- `components/sections`: landing page sections.
- `components/forms`: form đăng ký tư vấn dùng React Hook Form + Zod.
- `components/admin`: login và dashboard CRM.
- `components/ui`: component UI phong cách shadcn nhẹ.
- `lib`: Prisma client, auth, validation, email, tracking, labels, content seed.
- `prisma`: schema và seed data.

## Cài đặt

```bash
npm install
cp .env.example .env
npm run db:generate
```

## Cấu hình `.env`

Các biến bắt buộc:

- `DATABASE_URL`: connection string PostgreSQL.
- `NEXTAUTH_URL`: URL local hoặc production.
- `NEXTAUTH_SECRET`: chuỗi random dài.
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`: tài khoản đăng nhập `/admin`.

Email thông báo lead:

- Dùng Resend: điền `RESEND_API_KEY`, `EMAIL_FROM`, `ADMIN_NOTIFY_EMAIL`.
- Hoặc SMTP/Nodemailer: điền `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`.

Tracking có thể bật qua:

- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_TIKTOK_PIXEL_ID`

## Chạy local

```bash
npm run dev
```

Mở `http://localhost:3000`. Admin ở `http://localhost:3000/admin`.

## Migrate database

```bash
npm run db:migrate
```

Prisma 7 đọc `DATABASE_URL` qua `prisma.config.ts`.

## Seed data

```bash
npm run db:seed
```

Seed tạo chương trình, khóa học, ngành nghề, FAQ, testimonial và user admin mẫu.

## Deploy Vercel

1. Push source lên GitHub/GitLab.
2. Import project vào Vercel.
3. Thêm các biến môi trường trong `.env.example`.
4. Chạy `npm run db:migrate` với database production trước lần deploy chính thức.
5. Deploy bằng preset Next.js mặc định.

## Kết nối Supabase PostgreSQL

1. Tạo project Supabase.
2. Vào Project Settings -> Database -> Connection string.
3. Chọn URI, thay password thật.
4. Đặt vào `DATABASE_URL`.
5. Chạy `npm run db:migrate` và `npm run db:seed`.

## Thay logo, hotline, email, Zalo, Facebook, TikTok

Sửa file `lib/content.ts`:

- `contactConfig.brand`
- `contactConfig.hotline`
- `contactConfig.email`
- `contactConfig.address`
- `contactConfig.zalo`
- `contactConfig.facebook`
- `contactConfig.tiktok`
- `contactConfig.messenger`

Logo hiện là text mark `CVB` trong `components/layout/header.tsx` và `components/layout/footer.tsx`; có thể thay bằng `next/image` nếu có file logo trong `public/`.

## API chính

- `POST /api/leads`: nhận form tư vấn, validate Zod, lưu DB, gửi email admin.
- `GET /api/programs`
- `GET /api/job-fields`
- `GET /api/faqs`
- `GET /api/testimonials`
- `GET /api/admin/leads`
- `GET /api/admin/leads/:id`
- `PATCH /api/admin/leads/:id`
- `DELETE /api/admin/leads/:id`
- `POST /api/admin/leads/:id/notes`
- `GET /api/admin/export-leads`

## Kiểm tra

```bash
npm test
npm run lint
npm run build
```
