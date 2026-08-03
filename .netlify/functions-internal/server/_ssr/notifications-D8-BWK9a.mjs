import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { B as CalendarClock, F as CircleAlert, O as FileText, U as Bell } from "../_libs/lucide-react.mjs";
import { i as addDays, n as isPast, r as format, t as isToday } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-D8-BWK9a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NotificationsPage() {
	const { t } = useI18n();
	const [notifications, setNotifications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		async function fetchNotifications() {
			const { data: userData } = await supabase.auth.getUser();
			if (!userData.user) return;
			const [invoicesRes, complianceRes] = await Promise.all([supabase.from("invoices").select("*").eq("user_id", userData.user.id).neq("status", "paid").order("due_date", { ascending: true }), supabase.from("compliance_deadlines").select("*").eq("user_id", userData.user.id).eq("status", "pending").order("due_date", { ascending: true })]);
			const items = [];
			if (invoicesRes.data) invoicesRes.data.forEach((inv) => {
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
					amount: inv.total_amount
				});
			});
			if (complianceRes.data) complianceRes.data.forEach((comp) => {
				if (!comp.due_date) return;
				const dueDate = new Date(comp.due_date);
				const isUrgent = isPast(dueDate) || dueDate <= addDays(/* @__PURE__ */ new Date(), 7);
				items.push({
					id: `comp-${comp.id}`,
					type: "compliance",
					title: comp.title,
					subtitle: comp.kind.toUpperCase(),
					date: comp.due_date,
					isUrgent
				});
			});
			items.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
			setNotifications(items);
			setLoading(false);
		}
		fetchNotifications();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: t("app_notifications")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Alerts for pending payments and upcoming compliance deadlines."
			})]
		}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center p-8 text-muted-foreground",
			children: t("loading")
		}) : notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center p-12 text-center bg-card rounded-xl border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-12 w-12 text-muted-foreground/30 mb-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-lg",
					children: "All caught up!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: "You have no pending notifications."
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: notifications.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-start gap-4 p-4 rounded-xl border transition-all ${n.isUrgent ? "bg-red-500/10 border-red-500/30" : "bg-card hover:bg-muted/50"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid h-10 w-10 shrink-0 place-items-center rounded-full ${n.isUrgent ? "bg-red-500 text-white" : n.type === "invoice" ? "bg-teal/20 text-teal" : "bg-navy/20 text-navy dark:bg-white/10 dark:text-white"}`,
						children: n.type === "invoice" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: `font-semibold ${n.isUrgent ? "text-red-600 dark:text-red-400" : ""}`,
								children: n.title
							}), n.amount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold tabular-nums whitespace-nowrap",
								children: ["₹", n.amount.toLocaleString("en-IN")]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.subtitle }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `font-medium ${n.isUrgent ? "text-red-600 dark:text-red-400" : ""}`,
									children: [n.isUrgent ? "Overdue: " : "Due: ", format(new Date(n.date), "MMM d, yyyy")]
								})
							]
						})]
					}),
					n.isUrgent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 text-red-500 shrink-0 mt-0.5" })
				]
			}, n.id))
		})]
	});
}
//#endregion
export { NotificationsPage as component };
