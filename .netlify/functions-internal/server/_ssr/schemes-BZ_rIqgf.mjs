import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { T as Landmark, k as ExternalLink, p as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schemes-BZ_rIqgf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var OFFICIAL_RESOURCES = [
	{
		label: "GST Portal",
		url: "https://www.gst.gov.in"
	},
	{
		label: "Income Tax e-Filing",
		url: "https://www.incometax.gov.in"
	},
	{
		label: "Ministry of Corporate Affairs (ROC)",
		url: "https://www.mca.gov.in"
	},
	{
		label: "Reserve Bank of India (RBI)",
		url: "https://www.rbi.org.in"
	},
	{
		label: "SEBI",
		url: "https://www.sebi.gov.in"
	},
	{
		label: "Udyam Registration (MSME)",
		url: "https://udyamregistration.gov.in"
	},
	{
		label: "Ministry of MSME",
		url: "https://msme.gov.in"
	},
	{
		label: "Startup India",
		url: "https://www.startupindia.gov.in"
	},
	{
		label: "EPFO",
		url: "https://www.epfindia.gov.in"
	},
	{
		label: "DPIIT",
		url: "https://dpiit.gov.in"
	}
];
function SchemesPage() {
	const { t, lang } = useI18n();
	const [schemes, setSchemes] = (0, import_react.useState)(null);
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		(async () => {
			const { data } = await supabase.from("government_schemes").select("*").order("sort_order", { ascending: true });
			setSchemes(data ?? []);
		})();
	}, []);
	const categories = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		(schemes ?? []).forEach((s) => set.add(s.category));
		return Array.from(set).sort();
	}, [schemes]);
	const filtered = (0, import_react.useMemo)(() => {
		if (!schemes) return [];
		const term = q.trim().toLowerCase();
		return schemes.filter((s) => {
			if (cat && s.category !== cat) return false;
			if (!term) return true;
			return `${pick(s, "name", lang)} ${pick(s, "description", lang)} ${s.category}`.toLowerCase().includes(term);
		});
	}, [
		schemes,
		q,
		cat,
		lang
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 md:px-8 py-8 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						t("breadcrumb_home"),
						" / ",
						t("app_schemes")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl md:text-3xl font-bold text-navy",
					children: t("schemes_title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground max-w-2xl",
					children: t("schemes_sub")
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold text-navy",
						children: "Official Government Resources"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: "Jump to the official portals for filings, verification, and registration."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: OFFICIAL_RESOURCES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: r.url,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-navy hover:border-teal hover:text-teal transition-colors",
							children: [
								r.label,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })
							]
						}, r.url))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: t("schemes_search"),
						className: "w-full rounded-full border border-border bg-card pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: cat,
					onChange: (e) => setCat(e.target.value),
					className: "rounded-full border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: t("schemes_all")
					}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: c,
						children: c
					}, c))]
				})]
			}),
			schemes === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [...Array(4)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-72 rounded-2xl bg-muted animate-pulse" }, i))
			}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground py-12 text-center",
				children: t("schemes_empty")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-5",
				children: filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-border bg-card p-6 flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-lg bg-teal/10 text-teal shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium rounded-full bg-navy/10 text-navy px-2.5 py-1",
								children: s.category
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-semibold text-navy leading-snug text-lg",
							children: pick(s, "name", lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: pick(s, "description", lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-1 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-navy text-xs uppercase tracking-wide",
								children: t("schemes_eligibility")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground",
								children: pickList(s, "eligibility", lang).map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: it }, i))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-navy text-xs uppercase tracking-wide",
								children: t("schemes_benefits")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground",
								children: pickList(s, "benefits", lang).map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: it }, i))
							})] })]
						}),
						s.deadline && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-navy",
								children: [t("schemes_deadline"), ": "]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: s.deadline
							})]
						}),
						s.official_url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: s.official_url,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-teal hover:bg-teal/90 text-white font-semibold px-5 py-2.5 text-sm transition-colors",
							children: [
								t("schemes_visit"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })
							]
						})
					]
				}, s.id))
			})
		]
	});
}
function pick(s, field, lang) {
	return s[`${field}_${lang}`] || s[`${field}_en`];
}
function pickList(s, field, lang) {
	const v = s[`${field}_${lang}`];
	if (Array.isArray(v) && v.length > 0) return v;
	return s[`${field}_en`] ?? [];
}
//#endregion
export { SchemesPage as component };
