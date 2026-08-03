import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as Check, S as LogOut } from "../_libs/lucide-react.mjs";
import { n as useServerFn } from "./createSsrRpc-D9KmXbHC.mjs";
import { t as toggleDemoMode } from "./demo.functions-ky4UaANg.mjs";
import { n as useTheme } from "./theme-CeZYkCYY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-3qGK1r9m.js
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
function SettingsPage() {
	const { t, setLang, lang } = useI18n();
	const { theme, setTheme } = useTheme();
	const navigate = useNavigate();
	const toggle = useServerFn(toggleDemoMode);
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [savedAt, setSavedAt] = (0, import_react.useState)(null);
	const [demoBusy, setDemoBusy] = (0, import_react.useState)(false);
	const [loadError, setLoadError] = (0, import_react.useState)(null);
	const [loadNonce, setLoadNonce] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			setLoadError(null);
			const { data: u, error: uErr } = await supabase.auth.getUser();
			if (cancelled) return;
			if (uErr || !u.user) {
				setLoadError(uErr?.message || "Not signed in.");
				return;
			}
			const cols = "full_name, business_name, gstin, employee_count, business_type, preferred_language, demo_mode, notify_deadlines, notify_weekly_summary, theme";
			const { data, error } = await supabase.from("profiles").select(cols).eq("user_id", u.user.id).maybeSingle();
			if (cancelled) return;
			if (error) {
				setLoadError(error.message);
				return;
			}
			if (data) {
				setProfile(data);
				return;
			}
			const { data: created, error: insErr } = await supabase.from("profiles").insert({
				user_id: u.user.id,
				preferred_language: lang
			}).select(cols).single();
			if (cancelled) return;
			if (insErr || !created) {
				setLoadError(insErr?.message || "Could not initialize profile.");
				return;
			}
			setProfile(created);
		})();
		return () => {
			cancelled = true;
		};
	}, [loadNonce, lang]);
	function update(k, v) {
		setProfile((p) => p ? {
			...p,
			[k]: v
		} : p);
	}
	async function onSave() {
		if (!profile) return;
		setSaving(true);
		const { data: u } = await supabase.auth.getUser();
		if (!u.user) {
			setSaving(false);
			return;
		}
		await supabase.from("profiles").update({
			full_name: profile.full_name,
			business_name: profile.business_name,
			gstin: profile.gstin,
			employee_count: profile.employee_count,
			business_type: profile.business_type,
			preferred_language: profile.preferred_language,
			notify_deadlines: profile.notify_deadlines,
			notify_weekly_summary: profile.notify_weekly_summary,
			theme: profile.theme
		}).eq("user_id", u.user.id);
		setSaving(false);
		setSavedAt(Date.now());
		setTimeout(() => setSavedAt(null), 2e3);
	}
	async function onToggleDemo() {
		if (!profile) return;
		setDemoBusy(true);
		try {
			await toggle({ data: { enable: !profile.demo_mode } });
			update("demo_mode", !profile.demo_mode);
		} finally {
			setDemoBusy(false);
		}
	}
	async function onLogout() {
		await supabase.auth.signOut();
		navigate({
			to: "/",
			replace: true
		});
	}
	if (loadError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-4xl px-4 md:px-8 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-bold text-navy",
					children: t("settings_title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-red-600",
					children: loadError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setLoadNonce((n) => n + 1),
					className: "mt-4 rounded-full bg-teal hover:bg-teal/90 text-white font-semibold px-5 py-2 text-sm",
					children: t("settings_retry")
				})
			]
		})
	});
	if (!profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-4xl px-4 md:px-8 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "animate-pulse space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-48 rounded bg-muted" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32 rounded-2xl bg-muted" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 rounded-2xl bg-muted" })
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-4xl px-4 md:px-8 py-8 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						t("breadcrumb_home"),
						" / ",
						t("app_settings")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl md:text-3xl font-bold text-navy",
					children: t("settings_title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t("settings_sub")
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: t("settings_language"),
				sub: t("settings_language_sub"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setLang(l.code);
							update("preferred_language", l.code);
						},
						className: `rounded-full px-4 py-2 text-sm font-medium border transition-colors ${lang === l.code ? "bg-teal text-white border-teal" : "bg-card text-navy border-border hover:border-teal"}`,
						children: l.label
					}, l.code))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: t("settings_profile"),
				sub: t("settings_profile_sub"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("auth_full_name"),
							value: profile.full_name ?? "",
							onChange: (v) => update("full_name", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("auth_business_name"),
							value: profile.business_name ?? "",
							onChange: (v) => update("business_name", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("auth_gstin"),
							value: profile.gstin ?? "",
							onChange: (v) => update("gstin", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: t("auth_employees"),
							value: profile.employee_count ?? "",
							onChange: (v) => update("employee_count", v),
							options: [
								["", "—"],
								["1", t("emp_1")],
								["2-10", t("emp_2_10")],
								["11-50", t("emp_11_50")],
								["50+", t("emp_50p")]
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							label: t("auth_business_type"),
							value: profile.business_type ?? "",
							onChange: (v) => update("business_type", v),
							options: [
								["", "—"],
								["retail", t("bt_retail")],
								["service", t("bt_service")],
								["manufacturing", t("bt_manufacturing")],
								["trading", t("bt_trading")],
								["freelance", t("bt_freelance")],
								["other", t("bt_other")]
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: t("settings_notifications"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					label: t("settings_notif_deadlines"),
					value: profile.notify_deadlines,
					onChange: (v) => update("notify_deadlines", v)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					label: t("settings_notif_weekly"),
					value: profile.notify_weekly_summary,
					onChange: (v) => update("notify_weekly_summary", v)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: t("settings_demo"),
				sub: t("settings_demo_sub"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onToggleDemo,
					disabled: demoBusy,
					className: `rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${profile.demo_mode ? "bg-navy text-white hover:bg-navy/90" : "bg-teal text-white hover:bg-teal/90"} disabled:opacity-60`,
					children: profile.demo_mode ? t("dash_deactivate_demo") : t("dash_activate_demo")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: t("settings_theme"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: ["light", "dark"].map((th) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setTheme(th);
							update("theme", th);
						},
						className: `rounded-full px-4 py-2 text-sm font-medium border transition-colors ${theme === th ? "bg-teal text-white border-teal" : "bg-card text-navy border-border hover:border-teal"}`,
						children: th === "light" ? t("settings_theme_light") : t("settings_theme_dark")
					}, th))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3 pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onSave,
						disabled: saving,
						className: "rounded-full bg-teal hover:bg-teal/90 text-white font-semibold px-6 py-2.5 text-sm disabled:opacity-60 transition-colors",
						children: saving ? t("loading") : t("settings_save")
					}),
					savedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 text-sm text-teal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
							" ",
							t("settings_saved")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onLogout,
						className: "ml-auto inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-navy hover:bg-muted transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }),
							" ",
							t("settings_logout")
						]
					})
				]
			})
		]
	});
}
function Section({ title, sub, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl bg-card border border-border p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold text-navy",
				children: title
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-1 mb-4",
				children: sub
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: sub ? "" : "mt-4",
				children
			})
		]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40"
		})]
	});
}
function Select({ label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal/40",
			children: options.map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: v,
				children: l
			}, v))
		})]
	});
}
function Toggle({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center justify-between gap-4 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-navy",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(!value),
			className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${value ? "bg-teal" : "bg-muted"}`,
			"aria-pressed": value,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${value ? "translate-x-5" : "translate-x-1"}` })
		})]
	});
}
//#endregion
export { SettingsPage as component };
