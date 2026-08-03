import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { R as ChartColumn } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reports-DxP09YFE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function fmt(n) {
	return "₹" + Math.round(n).toLocaleString("en-IN");
}
function ReportsPage() {
	const { t } = useI18n();
	const [txns, setTxns] = (0, import_react.useState)([]);
	const [invs, setInvs] = (0, import_react.useState)([]);
	const [month, setMonth] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
	(0, import_react.useEffect)(() => {
		(async () => {
			const [tRes, iRes] = await Promise.all([supabase.from("transactions").select("kind, amount, category, txn_date, gst_amount, itc_eligible").limit(1e3), supabase.from("invoices").select("total_amount, cgst_amount, sgst_amount, igst_amount, taxable_amount, created_at, status").limit(500)]);
			setTxns(tRes.data ?? []);
			setInvs(iRes.data ?? []);
		})();
	}, []);
	const report = (0, import_react.useMemo)(() => {
		const monthTxns = txns.filter((t) => t.txn_date.startsWith(month));
		const monthInvs = invs.filter((i) => i.created_at.startsWith(month));
		const income = monthTxns.filter((t) => t.kind === "income").reduce((s, t) => s + Number(t.amount), 0);
		const expense = monthTxns.filter((t) => t.kind === "expense").reduce((s, t) => s + Number(t.amount), 0);
		const gstOutput = monthInvs.reduce((s, i) => s + Number(i.cgst_amount) + Number(i.sgst_amount) + Number(i.igst_amount), 0);
		const gstInputEligible = monthTxns.filter((t) => t.kind === "expense" && t.itc_eligible && t.gst_amount).reduce((s, t) => s + Number(t.gst_amount || 0), 0);
		const gstPayable = Math.max(0, gstOutput - gstInputEligible);
		const taxableSales = monthInvs.reduce((s, i) => s + Number(i.taxable_amount), 0);
		return {
			income,
			expense,
			profit: income - expense,
			gstOutput,
			gstInputEligible,
			gstPayable,
			taxableSales,
			count: monthTxns.length
		};
	}, [
		txns,
		invs,
		month
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 md:px-8 py-8 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl md:text-3xl font-bold text-navy",
				children: t("reports_title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground max-w-2xl",
				children: t("reports_sub")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "Month"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "month",
					value: month,
					onChange: (e) => setMonth(e.target.value),
					className: "rounded-md border border-input bg-background px-3 py-1.5"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-navy font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4" }), " Profit & Loss"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Total income",
								value: fmt(report.income)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Total expenses",
								value: fmt(report.expense)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Net profit",
								value: fmt(report.profit),
								strong: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Transactions",
								value: String(report.count)
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-border bg-card p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-navy font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4" }), " GST Summary"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Taxable sales (invoiced)",
									value: fmt(report.taxableSales)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "GST output (collected)",
									value: fmt(report.gstOutput)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "ITC eligible (input)",
									value: fmt(report.gstInputEligible)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "GST payable",
									value: fmt(report.gstPayable),
									strong: true
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground",
							children: "Estimates only. Verify against your GSTR-3B on gst.gov.in. ITC counted where you marked expenses as ITC-eligible."
						})
					]
				})]
			})
		]
	});
}
function Row({ label, value, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex justify-between border-b border-border/50 pb-1 ${strong ? "font-semibold text-navy" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })]
	});
}
//#endregion
export { ReportsPage as component };
