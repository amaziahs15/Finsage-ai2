import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { F as CircleAlert, P as CircleCheck, g as Plus, t as X, z as Calendar } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compliance-C_L8RIMP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CompliancePage() {
	const { t } = useI18n();
	const [items, setItems] = (0, import_react.useState)([]);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		kind: "GST",
		title: "",
		description: "",
		due_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
	});
	const load = (0, import_react.useCallback)(async () => {
		const { data } = await supabase.from("compliance_deadlines").select("*").order("due_date", { ascending: true });
		const now = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
		const updated = (data ?? []).map((d) => d.status === "upcoming" && d.due_date < now ? {
			...d,
			status: "overdue"
		} : d);
		setItems(updated);
	}, []);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	async function markDone(id) {
		await supabase.from("compliance_deadlines").update({ status: "completed" }).eq("id", id);
		load();
	}
	async function save() {
		const { data: u } = await supabase.auth.getUser();
		if (!u.user || !form.title.trim()) return;
		await supabase.from("compliance_deadlines").insert({
			...form,
			user_id: u.user.id,
			status: "upcoming"
		});
		setOpen(false);
		setForm({
			kind: "GST",
			title: "",
			description: "",
			due_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
		});
		load();
	}
	const groups = {
		overdue: items.filter((i) => i.status === "overdue"),
		upcoming: items.filter((i) => i.status === "upcoming"),
		completed: items.filter((i) => i.status === "completed")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 md:px-8 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl md:text-3xl font-bold text-navy",
					children: t("comp_title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: t("comp_sub")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(true),
					className: "inline-flex items-center gap-2 rounded-lg bg-teal text-white px-4 py-2.5 text-sm font-semibold hover:bg-teal/90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
						" ",
						t("comp_add")
					]
				})]
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border p-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-10 w-10 text-muted-foreground mx-auto mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t("comp_empty")
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					groups.overdue.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: t("comp_overdue"),
						color: "text-red-500",
						items: groups.overdue,
						onDone: markDone
					}),
					groups.upcoming.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: t("comp_upcoming"),
						color: "text-navy",
						items: groups.upcoming,
						onDone: markDone
					}),
					groups.completed.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: t("comp_completed"),
						color: "text-teal",
						items: groups.completed
					})
				]
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
							children: t("comp_add")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.kind,
								onChange: (e) => setForm({
									...form,
									kind: e.target.value
								}),
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "GST" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "TDS" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ROC" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Income Tax" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: t("comp_field_title"),
								value: form.title,
								onChange: (e) => setForm({
									...form,
									title: e.target.value
								}),
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								placeholder: t("comp_field_desc"),
								value: form.description,
								onChange: (e) => setForm({
									...form,
									description: e.target.value
								}),
								rows: 2,
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: form.due_date,
								onChange: (e) => setForm({
									...form,
									due_date: e.target.value
								}),
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: save,
								className: "w-full rounded-lg bg-navy text-white py-2.5 text-sm font-semibold hover:bg-navy/90",
								children: t("txn_save")
							})
						]
					})]
				})
			})
		]
	});
}
function Section({ title, color, items, onDone }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
		className: `font-semibold mb-3 ${color}`,
		children: [
			title,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-muted-foreground",
				children: [
					"(",
					items.length,
					")"
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl bg-card border border-border divide-y divide-border",
		children: items.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 flex items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 min-w-0",
				children: [d.status === "overdue" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 text-red-500 shrink-0" }) : d.status === "completed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-teal shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-5 w-5 text-navy shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium text-sm",
						children: d.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							d.kind,
							" · Due ",
							new Date(d.due_date).toLocaleDateString("en-IN", {
								day: "numeric",
								month: "short",
								year: "numeric"
							}),
							d.description ? ` · ${d.description}` : ""
						]
					})]
				})]
			}), onDone && d.status !== "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onDone(d.id),
				className: "text-xs font-medium text-teal hover:underline shrink-0",
				children: t("comp_mark_done")
			})]
		}, d.id))
	})] });
}
//#endregion
export { CompliancePage as component };
