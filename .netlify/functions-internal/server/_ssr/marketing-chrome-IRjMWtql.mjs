import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/marketing-chrome-IRjMWtql.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LANGS = [
	{
		code: "en",
		label: "English"
	},
	{
		code: "hi",
		label: "हिन्दी"
	},
	{
		code: "ta",
		label: "தமிழ்"
	}
];
function LanguageSwitcher({ variant = "light" }) {
	const { lang, setLang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `inline-flex items-center gap-1 rounded-full p-1 ring-1 ${variant === "dark" ? "bg-white/10 text-white ring-white/20" : "bg-white text-navy ring-navy/10"}`,
		children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setLang(l.code),
			className: `rounded-full px-3 py-1 text-xs font-medium transition-colors ${lang === l.code ? "bg-teal text-teal-foreground shadow-sm" : variant === "dark" ? "text-white/80 hover:text-white" : "text-navy/70 hover:text-navy"}`,
			"aria-pressed": lang === l.code,
			children: l.label
		}, l.code))
	});
}
function MarketingNav() {
	const { t } = useI18n();
	const [signedIn, setSignedIn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		supabase.auth.getSession().then(({ data }) => {
			if (mounted) setSignedIn(!!data.session);
		});
		const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSignedIn(!!s));
		return () => {
			mounted = false;
			sub.subscription.unsubscribe();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-navy text-navy-foreground font-bold",
						children: "F"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold text-navy text-lg tracking-tight",
						children: ["FinSage ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-teal",
							children: "AI"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#features",
							className: "hover:text-navy transition-colors",
							children: t("nav_features")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#how",
							className: "hover:text-navy transition-colors",
							children: t("nav_how")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#pricing",
							className: "hover:text-navy transition-colors",
							children: t("nav_pricing")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#faq",
							className: "hover:text-navy transition-colors",
							children: t("nav_faq")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden sm:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {})
					}), signedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/dashboard",
						className: "rounded-full bg-navy px-4 py-2 text-sm font-semibold text-navy-foreground hover:bg-navy/90 transition-colors",
						children: t("dash_welcome")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						search: { mode: "signin" },
						className: "hidden sm:inline text-sm font-medium text-navy hover:text-teal transition-colors",
						children: t("nav_login")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						search: { mode: "signup" },
						className: "rounded-full bg-navy px-4 py-2 text-sm font-semibold text-navy-foreground hover:bg-navy/90 transition-colors",
						children: t("nav_get_started")
					})] })]
				})
			]
		})
	});
}
function MarketingFooter() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row gap-8 justify-between items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-8 w-8 place-items-center rounded-lg bg-navy text-navy-foreground font-bold",
					children: "F"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-bold text-navy text-lg",
					children: ["FinSage ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-teal",
						children: "AI"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xs text-sm text-muted-foreground",
				children: t("footer_tagline")
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-8 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "text-muted-foreground hover:text-navy",
						children: t("footer_privacy")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "text-muted-foreground hover:text-navy",
						children: t("footer_terms")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "text-muted-foreground hover:text-navy",
						children: t("footer_contact")
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-7xl px-6 py-4 text-xs text-muted-foreground",
				children: t("footer_copy")
			})
		})]
	});
}
//#endregion
export { MarketingFooter as n, MarketingNav as r, LanguageSwitcher as t };
