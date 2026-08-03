import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { i as stringType, r as objectType } from "../_libs/zod.mjs";
import { F as CircleAlert, P as CircleCheck, k as ExternalLink, m as Scale } from "../_libs/lucide-react.mjs";
import { c as createServerFn } from "./createServerFn-BFFE07zL.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-D9KmXbHC.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BwdutfJC.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/regulatory-CwqAhx2G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
createServerFn({ method: "GET" }).handler(createSsrRpc("2419642054c266459611a4774468c955dfb08a69d9a82d56eb5265e2ad11dc62"));
var listRegulatoryForMe = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("6f64dfdecddc0c7437d3b389f826190cdc5ee1d39d1987312b86dd46b2f2d3e3"));
var AnalyzeUpdateInput = objectType({
	original_content: stringType().min(20).max(2e4),
	source_url: stringType().url().optional().nullable(),
	source_name: stringType().max(200).optional().nullable(),
	document_title: stringType().max(300).optional().nullable()
});
createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => AnalyzeUpdateInput.parse(d)).handler(createSsrRpc("37334f936acf3780337b86536f954cd1705d36a028f1cf8359c1044e64bb1b97"));
function RegulatoryPage() {
	const { t, lang } = useI18n();
	const list = useServerFn(listRegulatoryForMe);
	const q = useQuery({
		queryKey: ["reg-updates"],
		queryFn: () => list()
	});
	const [selected, setSelected] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 md:px-8 py-8 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl md:text-3xl font-bold text-navy",
				children: t("regulatory_title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground max-w-3xl",
				children: t("regulatory_sub")
			})] }),
			(q.data?.length ?? 0) === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "mx-auto h-8 w-8 opacity-40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: t("regulatory_empty")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs",
						children: "Admins can ingest notifications via the Analyze API. Every analysis includes an Honesty Score, MSME Impact Score and personalised relevance."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: q.data.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setSelected(u),
					className: "text-left rounded-2xl border border-border bg-card p-5 hover:border-teal transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block rounded-full bg-muted text-xs px-2 py-0.5 mb-2",
								children: u.category ?? "Regulation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-navy",
								children: u.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-1 line-clamp-2",
								children: u.summary
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactBadge, { score: u.msme_impact_score })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: u.action_required ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-amber-700",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-3 w-3" }),
									" ",
									t("regulatory_action_required")
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-green-700",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }),
									" ",
									t("regulatory_no_action")
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-teal",
							children: [
								t("regulatory_relevance"),
								": ",
								u._relevance,
								"/100"
							]
						})]
					})]
				}, u.id))
			}),
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailModal, {
				update: selected,
				lang,
				onClose: () => setSelected(null),
				t
			})
		]
	});
}
function ImpactBadge({ score }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-lg px-2 py-1 text-center ${score >= 70 ? "bg-red-100 text-red-800" : score >= 40 ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-lg font-bold leading-none",
			children: score
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-wide",
			children: score >= 70 ? "High" : score >= 40 ? "Medium" : "Low"
		})]
	});
}
function DetailModal({ update, lang, onClose, t }) {
	const analysis = update["analysis_" + lang] ?? update.analysis_en;
	const laws = Array.isArray(update.affected_laws) ? update.affected_laws.map(String) : [];
	const steps = Array.isArray(update.action_steps) ? update.action_steps.map(String) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 bg-black/50 flex items-start md:items-center justify-center p-4 overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-3xl rounded-2xl bg-card border border-border shadow-lg p-6 space-y-4 my-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-full bg-muted text-xs px-2 py-0.5",
							children: update.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-xl font-bold text-navy",
							children: update.title
						}),
						update.source_url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: update.source_url,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-1 inline-flex items-center gap-1 text-xs text-teal hover:underline",
							children: [
								update.source_name || update.source_url,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "text-muted-foreground hover:text-foreground",
						children: "✕"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBadge, {
							label: "MSME " + t("regulatory_impact"),
							value: update.msme_impact_score + "/100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBadge, {
							label: "Honesty",
							value: (update.honesty_score ?? 0) + "/100"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBadge, {
							label: t("regulatory_effective"),
							value: update.effective_date ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBadge, {
							label: t("regulatory_deadline"),
							value: update.compliance_deadline ?? "—"
						})
					]
				}),
				analysis && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Plain-language summary",
							children: analysis.plain_english
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Who is affected",
							children: analysis.who_is_affected
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "What to do",
							children: analysis.what_to_do
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 md:grid-cols-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Previous requirement",
						children: update.previous_requirement || "—"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "New requirement",
						children: update.new_requirement || "—"
					})]
				}),
				laws.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold text-muted-foreground uppercase mb-1",
					children: "Affected laws / rules"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1",
					children: laws.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-muted text-xs px-2 py-0.5",
						children: l
					}, i))
				})] }),
				steps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold text-muted-foreground uppercase mb-1",
					children: "Action steps"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "list-decimal pl-5 text-sm space-y-1",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, i))
				})] })
			]
		})
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-semibold text-muted-foreground uppercase mb-1",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-foreground/90 whitespace-pre-wrap",
		children: children || "—"
	})] });
}
function StatBadge({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-muted/30 p-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-semibold text-navy",
			children: value
		})]
	});
}
//#endregion
export { RegulatoryPage as component };
