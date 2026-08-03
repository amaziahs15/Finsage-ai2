import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as CircleAlert, P as CircleCheck, a as TrendingUp, l as Sparkles, n as Wallet, o as TrendingDown, z as Calendar } from "../_libs/lucide-react.mjs";
import { n as useServerFn } from "./createSsrRpc-D9KmXbHC.mjs";
import { t as toggleDemoMode } from "./demo.functions-ky4UaANg.mjs";
import { a as CartesianGrid, c as Tooltip, i as Line, l as Legend, n as YAxis, o as Bar, r as XAxis, s as ResponsiveContainer, t as ComposedChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-D3hsFvAa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function monthKey(d) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function monthLabel(d, lang) {
	const locale = lang === "hi" ? "hi-IN" : lang === "ta" ? "ta-IN" : "en-IN";
	return d.toLocaleDateString(locale, { month: "short" });
}
function SpentVsSavedChart({ txns }) {
	const { t, lang } = useI18n();
	const data = (0, import_react.useMemo)(() => {
		const now = /* @__PURE__ */ new Date();
		const buckets = [];
		for (let i = 5; i >= 0; i--) {
			const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
			buckets.push({
				key: monthKey(d),
				label: monthLabel(d, lang),
				spent: 0,
				income: 0
			});
		}
		const idx = new Map(buckets.map((b, i) => [b.key, i]));
		for (const x of txns) {
			const d = new Date(x.txn_date);
			const i = idx.get(monthKey(d));
			if (i === void 0) continue;
			const amt = Number(x.amount) || 0;
			if (x.kind === "expense") buckets[i].spent += amt;
			else if (x.kind === "income") buckets[i].income += amt;
		}
		return buckets.map((b) => ({
			label: b.label,
			spent: b.spent,
			saved: Math.max(0, b.income - b.spent)
		}));
	}, [txns, lang]);
	const hasData = data.some((d) => d.spent > 0 || d.saved > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-card border border-border p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-start justify-between gap-4 mb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-navy",
				children: t("chart_title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-0.5",
				children: t("chart_sub")
			})] })
		}), !hasData ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground py-16 text-center",
			children: t("chart_empty")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-72 w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
				data,
				margin: {
					top: 10,
					right: 20,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						strokeDasharray: "3 3",
						stroke: "hsl(var(--border))"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "label",
						tick: { fontSize: 12 },
						stroke: "hsl(var(--muted-foreground))"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						yAxisId: "left",
						tick: { fontSize: 11 },
						stroke: "hsl(var(--muted-foreground))",
						tickFormatter: (v) => "₹" + Math.round(v / 1e3) + "k"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						yAxisId: "right",
						orientation: "right",
						tick: { fontSize: 11 },
						stroke: "hsl(var(--muted-foreground))",
						tickFormatter: (v) => "₹" + Math.round(v / 1e3) + "k"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						formatter: (value) => "₹" + Number(value).toLocaleString("en-IN"),
						contentStyle: {
							borderRadius: 8,
							border: "1px solid hsl(var(--border))",
							background: "hsl(var(--card))",
							fontSize: 12
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: { fontSize: 12 } }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						yAxisId: "left",
						dataKey: "spent",
						name: t("chart_spent"),
						fill: "#0B1D3A",
						radius: [
							6,
							6,
							0,
							0
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						yAxisId: "right",
						type: "monotone",
						dataKey: "saved",
						name: t("chart_saved"),
						stroke: "#14B8A6",
						strokeWidth: 3,
						dot: {
							r: 4,
							fill: "#14B8A6"
						}
					})
				]
			}) })
		})]
	});
}
function inr(n) {
	return "₹" + n.toLocaleString("en-IN");
}
function Dashboard() {
	const { t } = useI18n();
	const navigate = useNavigate();
	const toggle = useServerFn(toggleDemoMode);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [txns, setTxns] = (0, import_react.useState)([]);
	const [deadlines, setDeadlines] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const load = (0, import_react.useCallback)(async () => {
		const { data: u } = await supabase.auth.getUser();
		if (!u.user) {
			navigate({
				to: "/auth",
				search: { mode: "signin" }
			});
			return;
		}
		const [{ data: p }, { data: tx }, { data: dl }] = await Promise.all([
			supabase.from("profiles").select("full_name, business_name, demo_mode, financial_health_score").eq("user_id", u.user.id).maybeSingle(),
			supabase.from("transactions").select("id, kind, amount, category, description, txn_date").order("txn_date", { ascending: false }).limit(500),
			supabase.from("compliance_deadlines").select("id, kind, title, due_date, status").order("due_date", { ascending: true }).limit(10)
		]);
		setProfile(p);
		setTxns(tx ?? []);
		setDeadlines(dl ?? []);
	}, [navigate]);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	async function onToggleDemo() {
		setLoading(true);
		try {
			await toggle({ data: { enable: !profile?.demo_mode } });
			await load();
		} finally {
			setLoading(false);
		}
	}
	const income = txns.filter((x) => x.kind === "income").reduce((s, x) => s + Number(x.amount), 0);
	const expense = txns.filter((x) => x.kind === "expense").reduce((s, x) => s + Number(x.amount), 0);
	const net = income - expense;
	const health = profile?.financial_health_score ?? (txns.length ? Math.max(35, Math.min(95, Math.round(50 + net / Math.max(income, 1) * 50))) : null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 md:px-8 py-8 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					t("breadcrumb_home"),
					" / ",
					t("app_dashboard")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-navy-gradient text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/70 text-sm",
						children: t("dash_greeting")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-2xl md:text-3xl font-bold",
						children: profile?.full_name || profile?.business_name || "FinSage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-white/80 text-sm max-w-xl",
						children: t("dash_demo_hint")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [profile?.demo_mode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full bg-teal/20 border border-teal/50 px-3 py-1 text-xs text-teal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
							" ",
							t("dash_demo_active")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onToggleDemo,
						disabled: loading,
						className: "rounded-full bg-teal hover:bg-teal/90 text-white font-semibold px-5 py-2.5 text-sm disabled:opacity-60 transition-colors",
						children: profile?.demo_mode ? t("dash_deactivate_demo") : t("dash_activate_demo")
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5 text-teal" }),
						label: t("dash_income_30"),
						value: inr(income)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingDown, { className: "h-5 w-5 text-red-500" }),
						label: t("dash_expense_30"),
						value: inr(expense)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-5 w-5 text-navy" }),
						label: t("dash_savings_30"),
						value: inr(net),
						highlight: net >= 0
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpentVsSavedChart, { txns }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-1 rounded-2xl glass p-6 border border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-navy",
							children: t("dash_health")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: t("dash_health_sub")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 relative flex items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 120 120",
								className: "w-40 h-40 -rotate-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "60",
									cy: "60",
									r: "52",
									fill: "none",
									stroke: "hsl(var(--muted))",
									strokeWidth: "10"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "60",
									cy: "60",
									r: "52",
									fill: "none",
									stroke: "hsl(var(--teal))",
									strokeWidth: "10",
									strokeDasharray: `${(health ?? 0) / 100 * 326.7} 326.7`,
									strokeLinecap: "round"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col items-center justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-4xl font-bold text-navy",
									children: health ?? "—"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "/ 100"
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 rounded-2xl bg-card border border-border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-semibold text-navy flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-teal" }),
								" ",
								t("dash_upcoming")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/compliance",
							className: "text-xs font-medium text-teal hover:underline",
							children: t("dash_view_all")
						})]
					}), deadlines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t("dash_no_deadlines")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-border",
						children: deadlines.slice(0, 5).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "py-3 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 min-w-0",
								children: [d.status === "overdue" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-5 w-5 text-red-500 shrink-0" }) : d.status === "completed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-teal shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-5 w-5 text-navy shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium text-sm truncate",
										children: d.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground",
										children: [
											d.kind,
											" · ",
											new Date(d.due_date).toLocaleDateString("en-IN", {
												day: "numeric",
												month: "short"
											})
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xs font-medium rounded-full px-2.5 py-1 ${d.status === "overdue" ? "bg-red-100 text-red-700" : d.status === "completed" ? "bg-teal/15 text-teal" : "bg-navy/10 text-navy"}`,
								children: d.status
							})]
						}, d.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-navy",
						children: t("dash_recent_txn")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/transactions",
						className: "text-xs font-medium text-teal hover:underline",
						children: t("dash_view_all")
					})]
				}), txns.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t("dash_no_txn")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: txns.slice(0, 6).map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "py-3 flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium truncate",
								children: x.description || x.category || x.kind
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [
									x.category,
									" · ",
									new Date(x.txn_date).toLocaleDateString("en-IN", {
										day: "numeric",
										month: "short"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `text-sm font-semibold ${x.kind === "income" ? "text-teal" : "text-red-500"}`,
							children: [x.kind === "income" ? "+" : "−", inr(Number(x.amount))]
						})]
					}, x.id))
				})]
			})
		]
	});
}
function SummaryCard({ icon, label, value, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-card border border-border p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted-foreground",
				children: label
			}), icon]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-2 text-2xl font-bold ${highlight === false ? "text-red-500" : "text-navy"}`,
			children: value
		})]
	});
}
//#endregion
export { Dashboard as component };
