import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as MarketingFooter, r as MarketingNav, t as LanguageSwitcher } from "./marketing-chrome-IRjMWtql.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B33KhbCo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LandingPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HonestyExplainer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketingFooter, {})
		]
	});
}
function Hero() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-navy-gradient text-navy-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 opacity-30 pointer-events-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal/40 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-teal/20 blur-3xl" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-teal animate-pulse" }), t("hero_eyebrow")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]",
					children: t("hero_title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-white/80 max-w-xl leading-relaxed",
					children: t("hero_sub")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						search: { mode: "signup" },
						className: "rounded-full bg-teal text-teal-foreground px-6 py-3 font-semibold shadow-lg shadow-teal/20 hover:shadow-xl hover:shadow-teal/30 transition-all hover:-translate-y-0.5",
						children: t("hero_cta")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#features",
						className: "rounded-full bg-white/10 px-6 py-3 font-semibold ring-1 ring-white/20 hover:bg-white/20 transition-colors",
						children: t("hero_cta_secondary")
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardMockup, {})
			})]
		})]
	});
}
function DashboardMockup() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-dark rounded-2xl p-5 md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-xs text-white/60 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-red-400/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2.5 w-2.5 rounded-full bg-green-400/70" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "finsage.ai / dashboard" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-3 mb-4",
				children: [
					{
						label: "Income",
						value: "₹4.2L"
					},
					{
						label: "Expenses",
						value: "₹2.8L"
					},
					{
						label: "Savings",
						value: "33%"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-white/5 ring-1 ring-white/10 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-wide text-white/50",
						children: s.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-lg font-semibold",
						children: s.value
					})]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-white/5 ring-1 ring-white/10 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: t("honesty_score_label")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl font-bold text-teal",
							children: ["94", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-white/50",
								children: "/100"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-2 rounded-full bg-white/10 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-gradient-to-r from-teal to-emerald-300",
							style: { width: "94%" }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-white/60 leading-relaxed",
						children: [
							"Answer backed by ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal",
								children: "3 official sources"
							}),
							" from gst.gov.in and cbic.gov.in."
						]
					})
				]
			})
		]
	});
}
function TrustBar() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6",
			children: [
				"trust_evidence",
				"trust_deadlines",
				"trust_security"
			].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-10 w-10 place-items-center rounded-full bg-teal/10 text-teal",
					children: "✓"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-navy",
					children: t(k)
				})]
			}, k))
		})
	});
}
function Features() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-5xl font-bold tracking-tight text-navy",
					children: t("features_title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: t("features_sub")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						title: "feat_qa_title",
						desc: "feat_qa_desc",
						icon: "💬"
					},
					{
						title: "feat_compliance_title",
						desc: "feat_compliance_desc",
						icon: "📅"
					},
					{
						title: "feat_txn_title",
						desc: "feat_txn_desc",
						icon: "💳"
					},
					{
						title: "feat_doc_title",
						desc: "feat_doc_desc",
						icon: "📸"
					},
					{
						title: "feat_schemes_title",
						desc: "feat_schemes_desc",
						icon: "🏛️"
					},
					{
						title: "feat_lang_title",
						desc: "feat_lang_desc",
						icon: "🌐"
					}
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card p-6 ring-1 ring-border hover:ring-teal/40 hover:-translate-y-1 transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl",
							children: f.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-semibold text-navy text-lg",
							children: t(f.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: t(f.desc)
						})
					]
				}, f.title))
			})]
		})
	});
}
function HonestyExplainer() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "bg-navy-gradient text-navy-foreground py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-teal font-semibold uppercase text-xs tracking-widest",
					children: t("honesty_eyebrow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl md:text-5xl font-bold tracking-tight",
					children: t("honesty_title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-white/80 leading-relaxed",
					children: t("honesty_sub")
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-dark rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-white/70",
							children: t("honesty_score_label")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-5xl font-bold text-teal",
							children: ["94", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl text-white/40",
								children: "/100"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-3",
						children: [
							{
								key: "honesty_source_authority",
								value: 24,
								max: 25
							},
							{
								key: "honesty_relevance",
								value: 19,
								max: 20
							},
							{
								key: "honesty_evidence",
								value: 18,
								max: 20
							},
							{
								key: "honesty_recency",
								value: 14,
								max: 15
							},
							{
								key: "honesty_agreement",
								value: 10,
								max: 10
							},
							{
								key: "honesty_grounded",
								value: 9,
								max: 10
							}
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/70",
								children: t(r.key)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-white/50",
								children: [
									r.value,
									"/",
									r.max
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 rounded-full bg-white/10 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-teal",
								style: { width: `${r.value / r.max * 100}%` }
							})
						})] }, r.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 pt-4 border-t border-white/10 text-xs text-white/70",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-full bg-teal/20 text-teal px-2 py-0.5 font-medium",
							children: t("honesty_legal_weight")
						})
					})
				]
			})]
		})
	});
}
function Testimonials() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl md:text-5xl font-bold tracking-tight text-navy max-w-2xl",
				children: t("testimonials_title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: [
					{
						q: "t1_quote",
						n: "t1_name",
						r: "t1_role"
					},
					{
						q: "t2_quote",
						n: "t2_name",
						r: "t2_role"
					},
					{
						q: "t3_quote",
						n: "t3_name",
						r: "t3_role"
					}
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card p-6 ring-1 ring-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block rounded-full bg-teal/10 text-teal text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5",
							children: t("testimonial_label")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-navy leading-relaxed",
							children: [
								"\"",
								t(it.q),
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 pt-4 border-t border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-navy",
								children: t(it.n)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: t(it.r)
							})]
						})
					]
				}, i))
			})]
		})
	});
}
function FAQ() {
	const { t } = useI18n();
	const items = [
		{
			q: "faq_q1",
			a: "faq_a1"
		},
		{
			q: "faq_q2",
			a: "faq_a2"
		},
		{
			q: "faq_q3",
			a: "faq_a3"
		},
		{
			q: "faq_q4",
			a: "faq_a4"
		},
		{
			q: "faq_q5",
			a: "faq_a5"
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "bg-muted/40 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl md:text-5xl font-bold tracking-tight text-navy text-center",
				children: t("faq_title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-3",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card ring-1 ring-border overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(open === i ? null : i),
						className: "w-full flex items-center justify-between p-5 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-navy",
							children: t(it.q)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-teal text-xl transition-transform ${open === i ? "rotate-45" : ""}`,
							children: "+"
						})]
					}), open === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 pb-5 text-muted-foreground leading-relaxed",
						children: t(it.a)
					})]
				}, i))
			})]
		})
	});
}
function CTA() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-5xl font-bold tracking-tight text-navy",
					children: t("hero_title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted-foreground max-w-2xl mx-auto",
					children: t("hero_sub")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						search: { mode: "signup" },
						className: "rounded-full bg-navy text-navy-foreground px-6 py-3 font-semibold shadow-lg hover:bg-navy/90 transition-colors",
						children: t("hero_cta")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {})]
				})
			]
		})
	});
}
//#endregion
export { LandingPage as component };
