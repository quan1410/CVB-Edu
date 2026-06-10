import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { authOptions } from "@/lib/auth";
import { getGermanLevelLabel, getServiceLabel, getStatusLabel } from "@/lib/labels";
import { prisma } from "@/lib/prisma";
import { formatDateTime } from "@/lib/utils";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

type LeadNoteView = {
  id: string;
  content: string;
  createdBy: string;
  createdAt: Date | string;
};

export default async function LeadDetailPage({ params }: PageProps) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin");

  const { id } = await params;
  const lead = await prisma.lead.findUnique({
    where: { id },
    include: {
      notes: { orderBy: { createdAt: "desc" } },
      appointments: { orderBy: { appointmentDate: "desc" } },
    },
  });

  if (!lead) redirect("/admin");

  return (
    <main className="min-h-screen bg-neutral-100 p-4 sm:p-6">
      <div className="mx-auto max-w-4xl">
        <Button asChild variant="outline">
          <Link href="/admin">Quay lại CRM</Link>
        </Button>
        <Card className="mt-5">
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-black">{lead.fullName}</h1>
              <Badge>{getStatusLabel(lead.status)}</Badge>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-neutral-700 md:grid-cols-2">
              <p>Điện thoại: <strong>{lead.phone}</strong></p>
              <p>Email: {lead.email ?? "Không cung cấp"}</p>
              <p>Tuổi: {lead.age ?? "Không cung cấp"}</p>
              <p>Tỉnh/thành: {lead.city ?? "Không cung cấp"}</p>
              <p>Dịch vụ: {getServiceLabel(lead.interestedService)}</p>
              <p>Tiếng Đức: {getGermanLevelLabel(lead.germanLevel)}</p>
              <p>Nguồn: {lead.source}</p>
              <p>Ngày tạo: {formatDateTime(lead.createdAt)}</p>
              <p>UTM source: {lead.utmSource ?? "-"}</p>
              <p>UTM campaign: {lead.utmCampaign ?? "-"}</p>
            </div>
            {lead.message ? (
              <div className="mt-5 rounded-md bg-neutral-50 p-4 text-sm text-neutral-700">
                {lead.message}
              </div>
            ) : null}
          </CardContent>
        </Card>

        <Card className="mt-5">
          <CardContent>
            <h2 className="text-lg font-black">Ghi chú tư vấn</h2>
            <div className="mt-4 grid gap-3">
              {lead.notes.length ? (
                lead.notes.map((note: LeadNoteView) => (
                  <div key={note.id} className="rounded-md border border-neutral-200 p-3 text-sm">
                    <p>{note.content}</p>
                    <p className="mt-2 text-xs text-neutral-500">
                      {note.createdBy} - {formatDateTime(note.createdAt)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-neutral-600">Chưa có ghi chú.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
