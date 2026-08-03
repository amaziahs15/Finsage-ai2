import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { g as Plus, i as TriangleAlert, n as Wallet, s as Trash2, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/budget-DaGs4xKM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function inr(n) {
	return "₹" + Math.round(n).toLocaleString("en-IN");
}
function BudgetPage() {
	const { t } = useI18n();
	const [items, setItems] = (0, import_react.useState)([]);
	const [spendByCat, setSpendByCat] = (0, import_react.useState)({});
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		category: "",
		monthly_limit: ""
	});
	const load = (0, import_react.useCallback)(async () => {
		const { data: b } = await supabase.from("budgets").select("id, category, monthly_limit").order("category");
		setItems(b ?? []);
		const now = /* @__PURE__ */ new Date();
		const from = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10);
		const { data: tx } = await supabase.from("transactions").select("amount, category, kind, txn_date").gte("txn_date", from);
		const acc = {};
		for (const x of tx ?? []) {
			if (x.kind !== "expense" || !x.category) continue;
			acc[x.category] = (acc[x.category] ?? 0) + Number(x.amount);
		}
		setSpendByCat(acc);
	}, []);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	async function save() {
		const limit = parseFloat(form.monthly_limit);
		const cat = form.category.trim();
		if (!cat || !limit || limit <= 0) return;
		const { data: u } = await supabase.auth.getUser();
		if (!u.user) return;
		await supabase.from("budgets").upsert({
			user_id: u.user.id,
			category: cat,
			monthly_limit: limit
		}, { onConflict: "user_id,category" });
		setOpen(false);
		setForm({
			category: "",
			monthly_limit: ""
		});
		load();
	}
	async function remove(id) {
		await supabase.from("budgets").delete().eq("id", id);
		load();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 md:px-8 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl md:text-3xl font-bold text-navy",
					children: t("budget_title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: t("budget_sub")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(true),
					className: "inline-flex items-center gap-2 rounded-lg bg-teal text-white px-4 py-2.5 text-sm font-semibold hover:bg-teal/90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
						" ",
						t("budget_add")
					]
				})]
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border p-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-10 w-10 text-muted-foreground mx-auto mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t("budget_empty")
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: items.map((b) => {
					const spent = spendByCat[b.category] ?? 0;
					const pct = Math.min(200, Math.round(spent / Number(b.monthly_limit) * 100));
					const over = spent > Number(b.monthly_limit);
					const warn = pct >= 80;
					const barColor = over ? "bg-red-500" : pct >= 80 ? "bg-yellow-500" : "bg-teal";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card border border-border p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-navy",
									children: b.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: t("budget_spent")
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => remove(b.id),
									className: "text-muted-foreground hover:text-red-500",
									"aria-label": t("budget_delete"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-baseline gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-2xl font-bold ${over ? "text-red-500" : "text-navy"}`,
									children: inr(spent)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted-foreground",
									children: [
										t("budget_of"),
										" ",
										inr(Number(b.monthly_limit))
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 h-2 w-full rounded-full bg-muted overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `h-full ${barColor} transition-all`,
									style: { width: `${Math.min(100, pct)}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [pct, "%"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: over ? "text-red-500 font-medium" : "text-muted-foreground",
									children: over ? `${inr(spent - Number(b.monthly_limit))} ${t("budget_over")}` : `${inr(Number(b.monthly_limit) - spent)} ${t("budget_remaining")}`
								})]
							}),
							warn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `mt-3 flex items-start gap-2 rounded-lg p-2.5 text-xs ${over ? "bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-300" : "bg-yellow-50 text-yellow-800 dark:bg-yellow-950/30 dark:text-yellow-200"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: over ? t("budget_warning_100") : t("budget_warning_80") })]
							})
						]
					}, b.id);
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/50 grid place-items-center p-4",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: (e) => e.stopPropagation(),
					className: "glass w-full max-w-md rounded-2xl bg-card border border-border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-navy",
							children: t("budget_add")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: t("budget_category"),
								value: form.category,
								onChange: (e) => setForm({
									...form,
									category: e.target.value
								}),
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								step: "0.01",
								placeholder: t("budget_limit"),
								value: form.monthly_limit,
								onChange: (e) => setForm({
									...form,
									monthly_limit: e.target.value
								}),
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: save,
								className: "w-full rounded-lg bg-navy text-white py-2.5 text-sm font-semibold hover:bg-navy/90",
								children: t("budget_save")
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { BudgetPage as component };
