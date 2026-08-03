import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { a as TrendingUp, g as Plus, o as TrendingDown, s as Trash2, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transactions-DpycQ_si.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function inr(n) {
	return "₹" + n.toLocaleString("en-IN");
}
function TxnPage() {
	const { t } = useI18n();
	const [items, setItems] = (0, import_react.useState)([]);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		kind: "income",
		amount: "",
		category: "",
		description: "",
		txn_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
	});
	const load = (0, import_react.useCallback)(async () => {
		const { data } = await supabase.from("transactions").select("*").order("txn_date", { ascending: false });
		setItems(data ?? []);
	}, []);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	async function save() {
		const { data: u } = await supabase.auth.getUser();
		const amt = parseFloat(form.amount);
		if (!u.user || !amt || amt <= 0) return;
		await supabase.from("transactions").insert({
			user_id: u.user.id,
			kind: form.kind,
			amount: amt,
			category: form.category || null,
			description: form.description || null,
			txn_date: form.txn_date
		});
		setOpen(false);
		setForm({
			kind: "income",
			amount: "",
			category: "",
			description: "",
			txn_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
		});
		load();
	}
	async function remove(id) {
		await supabase.from("transactions").delete().eq("id", id);
		load();
	}
	const income = items.filter((x) => x.kind === "income").reduce((s, x) => s + Number(x.amount), 0);
	const expense = items.filter((x) => x.kind === "expense").reduce((s, x) => s + Number(x.amount), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 md:px-8 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl md:text-3xl font-bold text-navy",
					children: t("txn_title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: t("txn_sub")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(true),
					className: "inline-flex items-center gap-2 rounded-lg bg-teal text-white px-4 py-2.5 text-sm font-semibold hover:bg-teal/90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
						" ",
						t("txn_add")
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card border border-border p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: t("txn_income")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-teal" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-2xl font-bold text-teal",
							children: inr(income)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card border border-border p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: t("txn_expense")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-4 w-4 text-red-500" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-2xl font-bold text-red-500",
							children: inr(expense)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-navy text-white p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-white/70",
							children: t("txn_net")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-2xl font-bold",
							children: inr(income - expense)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-card border border-border",
				children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-12 text-center text-sm text-muted-foreground",
					children: t("txn_empty")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border",
					children: items.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid h-9 w-9 place-items-center rounded-full ${x.kind === "income" ? "bg-teal/15 text-teal" : "bg-red-100 text-red-500"}`,
								children: x.kind === "income" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium text-sm truncate",
									children: x.description || x.category || x.kind
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [x.category ? `${x.category} · ` : "", new Date(x.txn_date).toLocaleDateString("en-IN", {
										day: "numeric",
										month: "short",
										year: "numeric"
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `font-semibold text-sm ${x.kind === "income" ? "text-teal" : "text-red-500"}`,
								children: [x.kind === "income" ? "+" : "−", inr(Number(x.amount))]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => remove(x.id),
								className: "text-muted-foreground hover:text-red-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						})]
					}, x.id))
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
							children: t("txn_add")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setForm({
										...form,
										kind: "income"
									}),
									className: `rounded-lg py-2 text-sm font-medium ${form.kind === "income" ? "bg-teal text-white" : "bg-muted"}`,
									children: t("txn_income")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setForm({
										...form,
										kind: "expense"
									}),
									className: `rounded-lg py-2 text-sm font-medium ${form.kind === "expense" ? "bg-red-500 text-white" : "bg-muted"}`,
									children: t("txn_expense")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								step: "0.01",
								placeholder: t("txn_amount"),
								value: form.amount,
								onChange: (e) => setForm({
									...form,
									amount: e.target.value
								}),
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: t("txn_category"),
								value: form.category,
								onChange: (e) => setForm({
									...form,
									category: e.target.value
								}),
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: t("txn_description"),
								value: form.description,
								onChange: (e) => setForm({
									...form,
									description: e.target.value
								}),
								className: "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: form.txn_date,
								onChange: (e) => setForm({
									...form,
									txn_date: e.target.value
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
//#endregion
export { TxnPage as component };
