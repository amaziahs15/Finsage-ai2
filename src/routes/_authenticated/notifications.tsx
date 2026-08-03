import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";
import { Bell, AlertCircle, FileText, CalendarClock } from "lucide-react";
import { format, isPast, isToday, addDays } from "date-fns";

export const Route = createFileRoute("/_authenticated/notifications")({
  component: NotificationsPage,
});

type NotificationItem = {
  id: string;
  type: "invoice" | "compliance";
  title: string;
  subtitle: string;
  date: string;
  isUrgent: boolean;
  amount?: number;
};

function NotificationsPage() {
  const { t } = useI18n();
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;

      const [invoicesRes, complianceRes] = await Promise.all([
        supabase
          .from("invoices")
          .select("*")
          .eq("user_id", userData.user.id)
          .neq("status", "paid")
          .order("due_date", { ascending: true }),
        supabase
          .from("compliance_deadlines")
          .select("*")
          .eq("user_id", userData.user.id)
          .eq("status", "pending")
          .order("due_date", { ascending: true }),
      ]);

      const items: NotificationItem[] = [];

      if (invoicesRes.data) {
        invoicesRes.data.forEach((inv) => {
          if (!inv.due_date) return;
          const dueDate = new Date(inv.due_date);
          const isUrgent = isPast(dueDate) && !isToday(dueDate);
          items.push({
            id: `inv-${inv.id}`,
            type: "invoice",
            title: `Payment due from ${inv.customer_name}`,
            subtitle: inv.invoice_number,
            date: inv.due_date,
            isUrgent,
            amount: inv.total_amount,
          });
        });
      }

      if (complianceRes.data) {
        complianceRes.data.forEach((comp) => {
          if (!comp.due_date) return;
          const dueDate = new Date(comp.due_date);
          const isUrgent = isPast(dueDate) || dueDate <= addDays(new Date(), 7);
          items.push({
            id: `comp-${comp.id}`,
            type: "compliance",
            title: comp.title,
            subtitle: comp.kind.toUpperCase(),
            date: comp.due_date,
            isUrgent,
          });
        });
      }

      items.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      setNotifications(items);
      setLoading(false);
    }
    fetchNotifications();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{t("app_notifications")}</h1>
        <p className="text-muted-foreground">Alerts for pending payments and upcoming compliance deadlines.</p>
      </div>

      {loading ? (
        <div className="flex justify-center p-8 text-muted-foreground">{t("loading")}</div>
      ) : notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-card rounded-xl border">
          <Bell className="h-12 w-12 text-muted-foreground/30 mb-4" />
          <h3 className="font-semibold text-lg">All caught up!</h3>
          <p className="text-muted-foreground text-sm">You have no pending notifications.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                n.isUrgent ? "bg-red-500/10 border-red-500/30" : "bg-card hover:bg-muted/50"
              }`}
            >
              <div
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                  n.isUrgent
                    ? "bg-red-500 text-white"
                    : n.type === "invoice"
                    ? "bg-teal/20 text-teal"
                    : "bg-navy/20 text-navy dark:bg-white/10 dark:text-white"
                }`}
              >
                {n.type === "invoice" ? <FileText className="h-5 w-5" /> : <CalendarClock className="h-5 w-5" />}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className={`font-semibold ${n.isUrgent ? "text-red-600 dark:text-red-400" : ""}`}>
                    {n.title}
                  </h4>
                  {n.amount && (
                    <span className="font-semibold tabular-nums whitespace-nowrap">
                      ₹{n.amount.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{n.subtitle}</span>
                  <span>•</span>
                  <span className={`font-medium ${n.isUrgent ? "text-red-600 dark:text-red-400" : ""}`}>
                    {n.isUrgent ? "Overdue: " : "Due: "}
                    {format(new Date(n.date), "MMM d, yyyy")}
                  </span>
                </div>
              </div>
              {n.isUrgent && <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
