"use client";

import { Download, Eye, LogOut, RefreshCw, Search, Trash2 } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { germanLevelLabels, serviceLabels, statusLabels } from "@/lib/labels";
import { formatDateTime } from "@/lib/utils";
import { interestedServices, leadStatuses, type LeadStatus } from "@/lib/validations";

type Lead = {
  id: string;
  fullName: string;
  phone: string;
  email?: string | null;
  city?: string | null;
  interestedService: keyof typeof serviceLabels;
  germanLevel: keyof typeof germanLevelLabels;
  message?: string | null;
  status: LeadStatus;
  source: string;
  createdAt: string;
  notes: { id: string; content: string; createdAt: string; createdBy: string }[];
};

export function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const query = useMemo(() => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (status) params.set("status", status);
    if (service) params.set("service", service);
    return params.toString();
  }, [q, status, service]);

  const loadLeads = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`/api/admin/leads${query ? `?${query}` : ""}`);
    if (response.ok) {
      setLeads(await response.json());
    }
    setLoading(false);
  }, [query]);

  useEffect(() => {
    const timeout = window.setTimeout(loadLeads, 250);
    return () => window.clearTimeout(timeout);
  }, [loadLeads]);

  async function updateStatus(id: string, nextStatus: LeadStatus) {
    const response = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });
    if (response.ok) {
      setMessage("Đã cập nhật trạng thái lead.");
      await loadLeads();
    }
  }

  async function addNote(id: string, content: string) {
    if (!content.trim()) return;
    const response = await fetch(`/api/admin/leads/${id}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    if (response.ok) {
      setMessage("Đã thêm ghi chú tư vấn.");
      await loadLeads();
    }
  }

  async function deleteLead(id: string) {
    const response = await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    if (response.ok) {
      setMessage("Đã xóa lead.");
      await loadLeads();
    }
  }

  return (
    <main className="min-h-screen bg-neutral-100 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-neutral-200 pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-black">Admin CRM</h1>
            <p className="mt-1 text-sm text-neutral-600">Quản lý lead đăng ký tư vấn CVB EDU.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild variant="outline">
              <a href="/api/admin/export-leads">
                <Download className="h-4 w-4" />
                Export CSV
              </a>
            </Button>
            <Button variant="outline" onClick={loadLeads}>
              <RefreshCw className="h-4 w-4" />
              Làm mới
            </Button>
            <Button variant="dark" onClick={() => signOut({ callbackUrl: "/admin" })}>
              <LogOut className="h-4 w-4" />
              Đăng xuất
            </Button>
          </div>
        </div>

        <Card className="mt-6">
          <CardContent>
            <div className="grid gap-3 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-neutral-400" />
                <Input
                  className="pl-9"
                  placeholder="Tìm theo tên, số điện thoại, email"
                  value={q}
                  onChange={(event) => setQ(event.target.value)}
                />
              </div>
              <Select value={status} onChange={(event) => setStatus(event.target.value)}>
                <option value="">Tất cả trạng thái</option>
                {leadStatuses.map((item) => (
                  <option key={item} value={item}>
                    {statusLabels[item]}
                  </option>
                ))}
              </Select>
              <Select value={service} onChange={(event) => setService(event.target.value)}>
                <option value="">Tất cả dịch vụ</option>
                {interestedServices.map((item) => (
                  <option key={item} value={item}>
                    {serviceLabels[item]}
                  </option>
                ))}
              </Select>
            </div>
            {message ? (
              <div className="mt-4 rounded-md border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                {message}
              </div>
            ) : null}
          </CardContent>
        </Card>

        <div className="mt-5 grid gap-4">
          {loading ? (
            <Card>
              <CardContent className="text-sm text-neutral-600">Đang tải lead...</CardContent>
            </Card>
          ) : leads.length === 0 ? (
            <Card>
              <CardContent className="text-sm text-neutral-600">Chưa có lead phù hợp bộ lọc.</CardContent>
            </Card>
          ) : (
            leads.map((lead) => (
              <LeadRow
                key={lead.id}
                lead={lead}
                onStatus={updateStatus}
                onNote={addNote}
                onDelete={deleteLead}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}

function LeadRow({
  lead,
  onStatus,
  onNote,
  onDelete,
}: {
  lead: Lead;
  onStatus: (id: string, status: LeadStatus) => void;
  onNote: (id: string, content: string) => void;
  onDelete: (id: string) => void;
}) {
  const [note, setNote] = useState("");

  return (
    <Card>
      <CardContent>
        <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-black">{lead.fullName}</h2>
              <Badge>{statusLabels[lead.status]}</Badge>
              <Badge className="bg-yellow-50 text-neutral-800">{serviceLabels[lead.interestedService]}</Badge>
            </div>
            <div className="mt-3 grid gap-1 text-sm text-neutral-600 sm:grid-cols-2">
              <p>Điện thoại: <strong>{lead.phone}</strong></p>
              <p>Email: {lead.email ?? "Không cung cấp"}</p>
              <p>Tỉnh/thành: {lead.city ?? "Không cung cấp"}</p>
              <p>Tiếng Đức: {germanLevelLabels[lead.germanLevel]}</p>
              <p>Nguồn: {lead.source}</p>
              <p>Ngày tạo: {formatDateTime(lead.createdAt)}</p>
            </div>
            {lead.message ? <p className="mt-3 text-sm text-neutral-700">Ghi chú khách: {lead.message}</p> : null}
            {lead.notes[0] ? (
              <p className="mt-3 rounded-md bg-neutral-50 p-3 text-sm text-neutral-700">
                Ghi chú mới nhất: {lead.notes[0].content}
              </p>
            ) : null}
          </div>
          <div className="grid content-start gap-2">
            <Select value={lead.status} onChange={(event) => onStatus(lead.id, event.target.value as LeadStatus)}>
              {leadStatuses.map((item) => (
                <option key={item} value={item}>
                  {statusLabels[item]}
                </option>
              ))}
            </Select>
            <Button asChild variant="outline">
              <Link href={`/admin/leads/${lead.id}`}>
                <Eye className="h-4 w-4" />
                Xem chi tiết
              </Link>
            </Button>
            <Button variant="ghost" onClick={() => onDelete(lead.id)}>
              <Trash2 className="h-4 w-4" />
              Xóa lead
            </Button>
          </div>
          <div className="grid content-start gap-2">
            <Textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Thêm ghi chú tư vấn" />
            <Button
              variant="outline"
              onClick={() => {
                onNote(lead.id, note);
                setNote("");
              }}
            >
              Thêm ghi chú
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
