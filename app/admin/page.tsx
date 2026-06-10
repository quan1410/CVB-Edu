import { getServerSession } from "next-auth";

import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { AdminLogin } from "@/components/admin/admin-login";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
}
