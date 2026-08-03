import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./auth-DUAAEZRw.mjs";
import { t as LanguageSwitcher } from "./marketing-chrome-IRjMWtql.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BANa7o_l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PASSWORD_RE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
function AuthPage() {
	const { mode } = Route.useSearch();
	const isSignup = mode === "signup";
	const { t, lang, setLang } = useI18n();
	const navigate = useNavigate();
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({
				to: "/dashboard",
				replace: true
			});
		});
	}, [navigate]);
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [businessName, setBusinessName] = (0, import_react.useState)("");
	const [gstin, setGstin] = (0, import_react.useState)("");
	const [employeeCount, setEmployeeCount] = (0, import_react.useState)("emp_1");
	const [businessType, setBusinessType] = (0, import_react.useState)("bt_retail");
	const [preferredLanguage, setPreferredLanguage] = (0, import_react.useState)(lang);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setLoading(true);
		try {
			if (isSignup) {
				if (!PASSWORD_RE.test(password)) {
					setError(t("auth_err_weak_password"));
					setLoading(false);
					return;
				}
				const { data, error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: `${window.location.origin}/dashboard`,
						data: {
							full_name: fullName,
							business_name: businessName || null,
							gstin: gstin || null,
							employee_count: employeeCount,
							business_type: businessType,
							preferred_language: preferredLanguage,
							onboarding_completed: true
						}
					}
				});
				if (error) {
					if (/registered|exists|already/i.test(error.message)) setError(t("auth_err_email_exists"));
					else setError(error.message || t("auth_err_generic"));
					return;
				}
				if (data.session) {
					setLang(preferredLanguage);
					navigate({
						to: "/dashboard",
						replace: true
					});
				} else setError("Check your email to confirm your account, then sign in.");
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) {
					setError(/invalid|credentials/i.test(error.message) ? t("auth_err_invalid_creds") : error.message);
					return;
				}
				navigate({
					to: "/dashboard",
					replace: true
				});
			}
		} catch (err) {
			console.error(err);
			setError(t("auth_err_generic"));
		} finally {
			setLoading(false);
		}
	}
	async function handleGoogle() {
		setError(null);
		setLoading(true);
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: { redirectTo: `${window.location.origin}/dashboard` }
			});
			if (error) {
				setError(error.message || t("auth_err_generic"));
				setLoading(false);
			}
		} catch (err) {
			console.error(err);
			setError(t("auth_err_generic"));
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-navy-gradient text-navy-foreground flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl w-full px-6 py-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-8 w-8 place-items-center rounded-lg bg-white/10 ring-1 ring-white/20 font-bold",
					children: "F"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-bold text-lg",
					children: ["FinSage ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-teal",
						children: "AI"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, { variant: "dark" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 grid place-items-center px-4 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-2xl p-8 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold text-navy tracking-tight",
							children: isSignup ? t("auth_create_account") : t("auth_welcome_back")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: isSignup ? t("auth_signup_sub") : t("auth_signin_sub")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleGoogle,
							disabled: loading,
							className: "mt-6 w-full inline-flex items-center justify-center gap-3 rounded-lg bg-white ring-1 ring-navy/10 py-2.5 text-sm font-semibold text-navy hover:bg-white/90 transition-colors disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleIcon, {}), t("auth_google")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-6 flex items-center gap-3 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("auth_or") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-3",
							children: [
								isSignup && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("auth_full_name"),
										value: fullName,
										onChange: setFullName,
										required: true,
										autoComplete: "name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("auth_business_name"),
										value: businessName,
										onChange: setBusinessName,
										autoComplete: "organization"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("auth_gstin"),
										value: gstin,
										onChange: setGstin
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: t("auth_business_type"),
											value: businessType,
											onChange: setBusinessType,
											options: [
												["bt_retail", "bt_retail"],
												["bt_service", "bt_service"],
												["bt_manufacturing", "bt_manufacturing"],
												["bt_trading", "bt_trading"],
												["bt_freelance", "bt_freelance"],
												["bt_other", "bt_other"]
											],
											t
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
											label: t("auth_employees"),
											value: employeeCount,
											onChange: setEmployeeCount,
											options: [
												["emp_1", "emp_1"],
												["emp_2_10", "emp_2_10"],
												["emp_11_50", "emp_11_50"],
												["emp_50p", "emp_50p"]
											],
											t
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-navy/70",
										children: t("auth_language")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: preferredLanguage,
										onChange: (e) => setPreferredLanguage(e.target.value),
										className: "mt-1 w-full rounded-lg bg-white ring-1 ring-navy/10 px-3 py-2 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "en",
												children: "English"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "hi",
												children: "हिन्दी"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "ta",
												children: "தமிழ்"
											})
										]
									})] })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("auth_email"),
									type: "email",
									value: email,
									onChange: setEmail,
									required: true,
									autoComplete: "email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("auth_password"),
									type: "password",
									value: password,
									onChange: setPassword,
									required: true,
									autoComplete: isSignup ? "new-password" : "current-password"
								}),
								isSignup && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground",
									children: t("auth_password_hint")
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg bg-destructive/10 ring-1 ring-destructive/20 px-3 py-2 text-sm text-destructive",
									children: error
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: loading,
									className: "w-full rounded-lg bg-navy text-navy-foreground py-2.5 font-semibold hover:bg-navy/90 transition-colors disabled:opacity-60",
									children: loading ? "…" : isSignup ? t("auth_signup_btn") : t("auth_signin_btn")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 text-center text-sm text-muted-foreground",
							children: isSignup ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								t("auth_have_account"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/auth",
									search: { mode: "signin" },
									className: "font-semibold text-teal hover:underline",
									children: t("auth_signin_link")
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								t("auth_no_account"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/auth",
									search: { mode: "signup" },
									className: "font-semibold text-teal hover:underline",
									children: t("auth_signup_link")
								})
							] })
						})
					]
				})
			})
		})]
	});
}
function Field({ label, value, onChange, type = "text", required, autoComplete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-medium text-navy/70",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		value,
		onChange: (e) => onChange(e.target.value),
		required,
		autoComplete,
		className: "mt-1 w-full rounded-lg bg-white ring-1 ring-navy/10 px-3 py-2 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-teal"
	})] });
}
function SelectField({ label, value, onChange, options, t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-medium text-navy/70",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value,
		onChange: (e) => onChange(e.target.value),
		className: "mt-1 w-full rounded-lg bg-white ring-1 ring-navy/10 px-3 py-2 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal",
		children: options.map(([v, k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: v,
			children: t(k)
		}, v))
	})] });
}
function GoogleIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "18",
		height: "18",
		viewBox: "0 0 48 48",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC05",
				d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
			})
		]
	});
}
//#endregion
export { AuthPage as component };
