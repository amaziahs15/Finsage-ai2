import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { E as Info, _ as PiggyBank, a as TrendingUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/investment-Ubm7hwbB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function inr(n) {
	return "₹" + Math.round(n).toLocaleString("en-IN");
}
function InvestmentPage() {
	const { t } = useI18n();
	const [netSavings, setNetSavings] = (0, import_react.useState)(0);
	const [amount, setAmount] = (0, import_react.useState)("50000");
	const [years, setYears] = (0, import_react.useState)("5");
	const [rate, setRate] = (0, import_react.useState)("7");
	(0, import_react.useEffect)(() => {
		(async () => {
			const { data } = await supabase.from("transactions").select("amount, kind");
			const net = (data ?? []).reduce((s, r) => s + (r.kind === "income" ? Number(r.amount) : -Number(r.amount)), 0);
			setNetSavings(Math.max(0, net));
			if (net > 0) setAmount(String(Math.round(net)));
		})();
	}, []);
	const P = parseFloat(amount) || 0;
	const n = parseFloat(years) || 0;
	const r = (parseFloat(rate) || 0) / 100;
	const fv = P * Math.pow(1 + r, n);
	const gain = fv - P;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 md:px-8 py-8 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl md:text-3xl font-bold text-navy",
				children: t("inv_title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground mt-1",
				children: t("inv_sub")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-navy-gradient text-white p-6 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-12 w-12 place-items-center rounded-xl bg-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PiggyBank, { className: "h-6 w-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-white/70",
					children: t("inv_savings_label")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-2xl font-bold",
					children: inr(netSavings)
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl bg-card border border-border p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold text-navy",
							children: t("inv_calc_title")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-4",
						children: t("inv_calc_sub")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("inv_amount"),
								value: amount,
								onChange: setAmount,
								type: "number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("inv_years"),
								value: years,
								onChange: setYears,
								type: "number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("inv_return"),
								value: rate,
								onChange: setRate,
								type: "number"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-1 md:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: t("inv_future_value"),
							value: inr(fv),
							accent: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Gain",
							value: inr(gain)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold text-navy mb-3",
				children: t("inv_edu_title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					{ key: "fd" },
					{ key: "liq" },
					{ key: "ppf" },
					{ key: "sgb" },
					{ key: "msme" }
				].map(({ key }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card border border-border p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-navy",
						children: t(`inv_edu_${key}_t`)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: t(`inv_edu_${key}_d`)
					})]
				}, key))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2 rounded-xl border border-border bg-muted p-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("inv_disclaimer") })]
			})
		]
	});
}
function Field({ label, value, onChange, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40"
		})]
	});
}
function Stat({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl p-4 ${accent ? "bg-teal/10 border border-teal/30" : "bg-muted"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-1 text-2xl font-bold ${accent ? "text-teal" : "text-navy"}`,
			children: value
		})]
	});
}
//#endregion
export { InvestmentPage as component };
