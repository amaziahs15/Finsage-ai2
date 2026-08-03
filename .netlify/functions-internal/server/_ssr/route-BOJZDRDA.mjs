import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { _ as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as LanguageSwitcher } from "./marketing-chrome-IRjMWtql.mjs";
import { C as LoaderCircle, H as Calculator, M as Copy, O as FileText, R as ChartColumn, S as LogOut, T as Landmark, U as Bell, V as CalendarCheck, a as TrendingUp, b as Mic, c as Square, d as Settings, f as Send, h as Receipt, k as ExternalLink, l as Sparkles, m as Scale, n as Wallet, r as Volume2, t as X, u as ShieldCheck, w as LayoutDashboard, x as MessageSquare } from "../_libs/lucide-react.mjs";
import { t as FlowchartRenderer } from "./flowchart-renderer-BqCGkKJ8.mjs";
import { t as Markdown } from "../_libs/react-markdown+[...].mjs";
import { t as remarkGfm } from "../_libs/remark-gfm.mjs";
import { n as useServerFn } from "./createSsrRpc-D9KmXbHC.mjs";
import { t as toggleDemoMode } from "./demo.functions-ky4UaANg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-BOJZDRDA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/dashboard",
		icon: LayoutDashboard,
		key: "app_dashboard"
	},
	{
		to: "/chat",
		icon: MessageSquare,
		key: "app_chat"
	},
	{
		to: "/compliance",
		icon: CalendarCheck,
		key: "app_compliance"
	},
	{
		to: "/transactions",
		icon: Receipt,
		key: "app_transactions"
	},
	{
		to: "/invoices",
		icon: FileText,
		key: "app_invoices"
	},
	{
		to: "/reports",
		icon: ChartColumn,
		key: "app_reports"
	},
	{
		to: "/budget",
		icon: Wallet,
		key: "app_budget"
	},
	{
		to: "/investment",
		icon: TrendingUp,
		key: "app_investment"
	},
	{
		to: "/schemes",
		icon: Landmark,
		key: "app_schemes"
	},
	{
		to: "/regulatory",
		icon: Scale,
		key: "app_regulatory"
	},
	{
		to: "/calculator",
		icon: Calculator,
		key: "app_calculator"
	},
	{
		to: "/notifications",
		icon: Bell,
		key: "app_notifications"
	},
	{
		to: "/settings",
		icon: Settings,
		key: "app_settings"
	}
];
function AppSidebar() {
	const { t } = useI18n();
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [email, setEmail] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(({ data }) => {
			setEmail(data.user?.email ?? null);
		});
	}, []);
	async function signOut() {
		await supabase.auth.signOut();
		navigate({
			to: "/",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-navy text-navy-foreground border-r border-navy/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 px-6 py-5 border-b border-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-9 w-9 place-items-center rounded-lg bg-teal text-white font-bold",
					children: "F"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-bold text-lg",
					children: ["FinSage ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-teal",
						children: "AI"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 px-3 py-4 space-y-1",
				children: nav.map((item) => {
					const active = pathname === item.to || pathname.startsWith(item.to + "/");
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${active ? "bg-teal text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), t(item.key)]
					}, item.to);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-white/10 p-4 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-white/60 truncate",
						children: email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: signOut,
						className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), t("auth_signout")]
					})
				]
			})
		]
	});
}
function MobileTopBar() {
	const { t } = useI18n();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "md:hidden sticky top-0 z-30 bg-navy text-white border-b border-white/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-3 gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-7 w-7 place-items-center rounded-md bg-teal text-white text-xs font-bold",
					children: "F"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-bold",
					children: ["FinSage ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-teal",
						children: "AI"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, { variant: "dark" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex overflow-x-auto border-t border-white/10",
			children: nav.map((item) => {
				const active = pathname === item.to;
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.to,
					className: `flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium whitespace-nowrap ${active ? "text-teal border-b-2 border-teal" : "text-white/70"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }), t(item.key)]
				}, item.to);
			})
		})]
	});
}
var PAGE_TOPIC = {
	"/dashboard": "Dashboard (financial overview)",
	"/budget": "Budgets (category limits vs actuals)",
	"/transactions": "Transactions (income & expenses)",
	"/investment": "Investment basics & calculator",
	"/compliance": "Compliance deadlines (GST/TDS/ROC)",
	"/schemes": "Government schemes for MSMEs",
	"/settings": "Account settings"
};
function ChatWidget() {
	const { t, lang } = useI18n();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [convoId, setConvoId] = (0, import_react.useState)(null);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [sending, setSending] = (0, import_react.useState)(false);
	const scrollRef = (0, import_react.useRef)(null);
	const [speakingId, setSpeakingId] = (0, import_react.useState)(null);
	const [loadingAudioId, setLoadingAudioId] = (0, import_react.useState)(null);
	const audioRef = (0, import_react.useRef)(null);
	function stopAudio() {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.src = "";
			window.speechSynthesis.cancel();
		}
		setSpeakingId(null);
		setLoadingAudioId(null);
	}
	async function speak(id, text) {
		if (speakingId === id) {
			stopAudio();
			return;
		}
		stopAudio();
		const clean = text.replace(/```[\s\S]*?```/g, "").replace(/[#>*_`\[\]()]/g, "").trim();
		if (!clean) return;
		const autoLang = /[\u0B80-\u0BFF]/.test(clean) ? "ta-IN" : /[\u0900-\u097F]/.test(clean) ? "hi-IN" : "en-IN";
		const utterance = new SpeechSynthesisUtterance(clean);
		utterance.lang = autoLang;
		utterance.onend = () => setSpeakingId(null);
		utterance.onerror = () => setSpeakingId(null);
		setSpeakingId(id);
		window.speechSynthesis.speak(utterance);
	}
	(0, import_react.useEffect)(() => () => stopAudio(), []);
	const hidden = pathname.startsWith("/chat");
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, open]);
	async function ensureConvo() {
		if (convoId) return convoId;
		const { data: u } = await supabase.auth.getUser();
		if (!u.user) return null;
		const { data } = await supabase.from("chat_conversations").insert({
			user_id: u.user.id,
			title: "Quick chat"
		}).select().single();
		if (!data) return null;
		setConvoId(data.id);
		return data.id;
	}
	async function send() {
		const msg = input.trim();
		if (!msg || sending) return;
		setSending(true);
		setInput("");
		const cid = await ensureConvo();
		if (!cid) {
			setSending(false);
			return;
		}
		const userMsg = {
			id: crypto.randomUUID(),
			role: "user",
			content: msg
		};
		const asstMsg = {
			id: crypto.randomUUID(),
			role: "assistant",
			content: "",
			streaming: true
		};
		setMessages((m) => [
			...m,
			userMsg,
			asstMsg
		]);
		const { data: sess } = await supabase.auth.getSession();
		const token = sess.session?.access_token;
		if (!token) {
			setSending(false);
			return;
		}
		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify({
					conversation_id: cid,
					message: msg,
					language: lang,
					page_context: PAGE_TOPIC[pathname] ?? void 0
				})
			});
			if (!res.ok || !res.body) {
				const errText = await res.text().catch(() => "");
				setMessages((m) => m.map((x) => x.id === asstMsg.id ? {
					...x,
					content: `⚠️ ${res.status === 429 ? "Rate limited — please retry in a moment." : res.status === 402 ? "AI credits exhausted." : errText || "Something went wrong."}`,
					streaming: false
				} : x));
				return;
			}
			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let buffer = "";
			let acc = "";
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				buffer += decoder.decode(value, { stream: true });
				const parts = buffer.split("\n\n");
				buffer = parts.pop() || "";
				for (const p of parts) {
					const line = p.trim();
					if (!line.startsWith("data:")) continue;
					try {
						const json = JSON.parse(line.slice(5).trim());
						if (json.type === "delta") {
							acc += json.text;
							setMessages((m) => m.map((x) => x.id === asstMsg.id ? {
								...x,
								content: acc
							} : x));
						} else if (json.type === "done") setMessages((m) => m.map((x) => x.id === asstMsg.id ? {
							...x,
							streaming: false,
							honesty_score: json.honesty_score,
							sources: json.sources
						} : x));
					} catch {}
				}
			}
		} finally {
			setSending(false);
		}
	}
	if (hidden) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setOpen(true),
		"aria-label": t("chat_title"),
		className: "fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-teal text-white shadow-lg hover:bg-teal/90 transition-colors md:bottom-6 md:right-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-6 w-6" })
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-2 bottom-2 z-40 flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:inset-x-auto md:right-6 md:bottom-6 md:w-96 md:h-[560px] h-[80vh]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border bg-navy px-4 py-3 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-teal shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-sm truncate",
						children: t("chat_title")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/chat",
						className: "rounded p-1.5 text-white/80 hover:bg-white/10",
						"aria-label": t("app_chat"),
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						"aria-label": "Close",
						className: "rounded p-1.5 text-white/80 hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollRef,
				className: "flex-1 overflow-y-auto px-3 py-3 space-y-3",
				children: [messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-8 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-2 grid h-10 w-10 place-items-center rounded-xl bg-teal/15 text-teal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("chat_empty_sub") })]
				}), messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `max-w-[85%] text-sm ${m.role === "user" ? "bg-navy text-white rounded-2xl rounded-br-md px-3 py-2" : "text-foreground"}`,
						children: m.role === "user" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "whitespace-pre-wrap",
								children: m.content
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									navigator.clipboard.writeText(m.content);
								},
								className: "absolute -left-6 top-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 text-white/50 hover:text-white",
								title: "Copy message",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" })
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "prose prose-sm dark:prose-invert max-w-none prose-a:text-teal prose-code:text-teal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
									remarkPlugins: [remarkGfm],
									components: { code({ className, children }) {
										if (/language-(\w+)/.exec(className || "")?.[1] === "flowchart") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowchartRenderer, { raw: String(children).trim() });
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className,
											children
										});
									} },
									children: m.content || ""
								}), m.streaming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-1.5 h-3 bg-teal ml-1 animate-pulse align-middle" })]
							}),
							!m.streaming && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap items-center gap-2",
								children: [
									typeof m.honesty_score === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-1 rounded-full bg-teal/10 border border-teal/30 px-2 py-0.5 text-xs text-teal font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }),
											" ",
											m.honesty_score,
											"/100"
										]
									}),
									m.content && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											navigator.clipboard.writeText(m.content);
										},
										className: "inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground hover:bg-muted",
										title: "Copy reply",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" }), " Copy"]
									}),
									m.content && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => speak(m.id, m.content),
										className: "inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground hover:bg-muted",
										"aria-label": speakingId === m.id ? "Stop audio" : "Listen",
										title: speakingId === m.id ? "Stop" : "Listen",
										children: loadingAudioId === m.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), " Loading"] }) : speakingId === m.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "h-3 w-3" }), " Stop"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-3 w-3" }), " Listen"] })
									})
								]
							}),
							!m.streaming && m.sources && m.sources.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-1.5 space-y-0.5",
								children: m.sources.slice(0, 3).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.startsWith("http") ? s : `https://${s}`,
									target: "_blank",
									rel: "noreferrer",
									className: "text-xs text-teal hover:underline",
									children: s
								}) }, i))
							})
						] })
					})
				}, m.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border p-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-2 rounded-xl border border-border bg-background p-2 focus-within:border-teal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: input,
						onChange: (e) => setInput(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter" && !e.shiftKey) {
								e.preventDefault();
								send();
							}
						},
						rows: 1,
						placeholder: t("chat_placeholder"),
						className: "flex-1 resize-none bg-transparent outline-none text-sm placeholder:text-muted-foreground max-h-28"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: send,
						disabled: sending || !input.trim(),
						className: "rounded-lg bg-teal text-white p-2 disabled:opacity-50 hover:bg-teal/90",
						"aria-label": t("chat_send"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
					})]
				})
			})
		]
	})] });
}
function GlobalVoiceListener() {
	const { lang, setLang, t } = useI18n();
	const navigate = useNavigate();
	const toggleDemo = useServerFn(toggleDemoMode);
	const [listening, setListening] = (0, import_react.useState)(false);
	const [speaking, setSpeaking] = (0, import_react.useState)(false);
	const recognitionRef = (0, import_react.useRef)(null);
	const stopAudio = (0, import_react.useCallback)(() => {
		window.speechSynthesis.cancel();
		setSpeaking(false);
	}, []);
	const speak = (0, import_react.useCallback)(async (text) => {
		stopAudio();
		const clean = text.replace(/```[\s\S]*?```/g, "").replace(/[#>*_`\[\]()]/g, "").trim();
		if (!clean) return;
		const autoLang = /[\u0B80-\u0BFF]/.test(clean) ? "ta-IN" : /[\u0900-\u097F]/.test(clean) ? "hi-IN" : "en-IN";
		const utterance = new SpeechSynthesisUtterance(clean);
		utterance.lang = autoLang;
		utterance.onend = () => setSpeaking(false);
		utterance.onerror = () => setSpeaking(false);
		setSpeaking(true);
		window.speechSynthesis.speak(utterance);
	}, [stopAudio]);
	(0, import_react.useEffect)(() => () => stopAudio(), [stopAudio]);
	const processCommand = async (text) => {
		const lower = text.toLowerCase().trim();
		const strippedLower = lower.replace(/\s+/g, "");
		if (!lower) {
			speak("Sorry, I didn't catch that — try again.");
			return;
		}
		if (lower.includes("change language to english") || lower.includes("english")) {
			setLang("en");
			speak("Language changed to English");
			return;
		}
		if (lower.includes("change language to tamil") || lower.includes("தமிழ்") || lower.includes("tamil")) {
			setLang("ta");
			speak("மொழி தமிழுக்கு மாற்றப்பட்டது");
			return;
		}
		if (lower.includes("change language to hindi") || lower.includes("hindi") || lower.includes("हिंदी")) {
			setLang("hi");
			speak("भाषा हिंदी में बदल दी गई है");
			return;
		}
		if (lower.includes("activate demo mode")) {
			speak("Demo mode activated");
			await toggleDemo({ data: { enable: true } });
			window.location.reload();
			return;
		}
		if (lower.includes("deactivate demo mode")) {
			speak("Demo mode deactivated");
			await toggleDemo({ data: { enable: false } });
			window.location.reload();
			return;
		}
		const dynamicRoutes = [
			{
				to: "/dashboard",
				words: [
					"dashboard",
					"overview",
					"டேஷ்போர்டு",
					"கண்ணோட்டம்",
					"dash",
					t("app_dashboard").toLowerCase()
				]
			},
			{
				to: "/chat",
				words: [
					"chat",
					"assistant",
					"ai",
					"உதவியாளர்",
					"சாட்",
					"uraiyadal",
					t("app_chat").toLowerCase()
				]
			},
			{
				to: "/compliance",
				words: [
					"compliance",
					"deadline",
					"inakkam",
					"inakam",
					"anupalan",
					"இணக்கம்",
					"கம்ப்ளையன்ஸ்",
					t("app_compliance").toLowerCase()
				]
			},
			{
				to: "/transactions",
				words: [
					"transaction",
					"parivarthan",
					"parivartan",
					"lenden",
					"len-den",
					"பரிவர்த்தனை",
					"டிரான்சாக்ஷன்",
					t("app_transactions").toLowerCase()
				]
			},
			{
				to: "/invoices",
				words: [
					"invoice",
					"bill",
					"vilaippat",
					"vilaipat",
					"villapat",
					"பட்டியல்",
					"இன்வாய்ஸ்",
					t("app_invoices").toLowerCase()
				]
			},
			{
				to: "/reports",
				words: [
					"report",
					"chart",
					"arikkai",
					"arikai",
					"அறிக்கை",
					"ரிப்போர்ட்",
					t("app_reports").toLowerCase()
				]
			},
			{
				to: "/budget",
				words: [
					"budget",
					"badjet",
					"பட்ஜெட்",
					t("app_budget").toLowerCase()
				]
			},
			{
				to: "/investment",
				words: [
					"investment",
					"mudhaleed",
					"muthaleed",
					"motherleed",
					"nivesh",
					"முதலீடு",
					"இன்வெஸ்ட்மென்ட்",
					t("app_investment").toLowerCase()
				]
			},
			{
				to: "/schemes",
				words: [
					"scheme",
					"government scheme",
					"thittang",
					"thitang",
					"thittam",
					"thitam",
					"yojana",
					"திட்டம்",
					"ஸ்கீம்",
					t("app_schemes").toLowerCase()
				]
			},
			{
				to: "/regulatory",
				words: [
					"regulatory",
					"regulation",
					"update",
					"ozhungumurai",
					"olungumurai",
					"niyamak",
					"ஒழுங்குமுறை",
					"ரெகுலேட்டரி",
					t("app_regulatory").toLowerCase()
				]
			},
			{
				to: "/calculator",
				words: [
					"calculator",
					"kanippori",
					"kanipori",
					"canipori",
					"kanippan",
					"கணிப்பொறி",
					"கால்குலேட்டர்",
					t("app_calculator").toLowerCase()
				]
			},
			{
				to: "/settings",
				words: [
					"setting",
					"profile",
					"amaippu",
					"amaipu",
					"அமைப்பு",
					"செட்டிங்ஸ்",
					"புரொபைல்",
					t("app_settings").toLowerCase()
				]
			},
			{
				to: "/notifications",
				words: [
					"notification",
					"alert",
					"arivippu",
					"arivipu",
					"suchna",
					"அறிவிப்பு",
					"நோட்டிபிகேஷன்",
					t("app_notifications").toLowerCase()
				]
			}
		];
		const isNavCommand = [
			"open",
			"go to",
			"show",
			"kholo",
			"dikhao",
			"திற",
			"காட்டு",
			"செய்",
			"ஓபன்",
			"பண்ணு",
			"போ",
			"பார்",
			"thira",
			"kaatu",
			"pannu",
			"sei",
			"say"
		].some((k) => lower.includes(k) || strippedLower.includes(k));
		const isShortCommand = lower.split(/\s+/).length <= 4;
		for (const route of dynamicRoutes) if (route.words.some((w) => lower.includes(w) || strippedLower.includes(w))) {
			if (isNavCommand || isShortCommand || route.words.some((w) => lower === w || strippedLower === w)) {
				speak(lang === "ta" ? "திறக்கிறேன்" : lang === "hi" ? "खोल रहा हूँ" : `Opening ${route.words[0]}`);
				navigate({ to: route.to });
				return;
			}
		}
		speak("Let me check that for you...");
		try {
			const { data: u } = await supabase.auth.getUser();
			if (!u.user) throw new Error("No user");
			const { data: convoList } = await supabase.from("chat_conversations").select("id").eq("user_id", u.user.id).order("updated_at", { ascending: false }).limit(1);
			let cid = convoList?.[0]?.id;
			if (!cid) {
				const { data: newC } = await supabase.from("chat_conversations").insert({
					user_id: u.user.id,
					title: "Voice chat"
				}).select().single();
				cid = newC?.id;
			}
			const { data: sess } = await supabase.auth.getSession();
			const token = sess.session?.access_token;
			if (!token || !cid) throw new Error("Auth failed");
			const validCid = cid && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(cid) ? cid : crypto.randomUUID();
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify({
					conversation_id: validCid,
					message: text,
					language: lang,
					is_voice_command: true
				})
			});
			if (!res.ok) {
				speak("Sorry, I had trouble answering that.");
				return;
			}
			const reader = res.body?.getReader();
			if (!reader) return;
			const decoder = new TextDecoder();
			let acc = "";
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				const parts = decoder.decode(value, { stream: true }).split("\n\n");
				for (const p of parts) {
					const line = p.trim();
					if (line.startsWith("data:")) try {
						const json = JSON.parse(line.slice(5).trim());
						if (json.type === "delta") {
							acc += json.text;
							if (acc.includes("NAVIGATE_TO:")) {}
						} else if (json.type === "done") {
							if (acc.includes("NAVIGATE_TO:")) {
								const match = acc.match(/NAVIGATE_TO:(\/[a-z0-9-]+)/i);
								if (match && match[1]) {
									const targetRoute = match[1];
									speak(lang === "ta" ? "திறக்கிறேன்" : lang === "hi" ? "खोल रहा हूँ" : `Opening ${targetRoute.slice(1)}`);
									navigate({ to: targetRoute });
								} else speak("Sorry, I couldn't find that page.");
							} else if (acc.includes("CHANGE_LANG:")) {
								const match = acc.match(/CHANGE_LANG:(en|hi|ta)/i);
								if (match && match[1]) {
									const newLang = match[1];
									setLang(newLang);
									speak(newLang === "ta" ? "மொழி தமிழுக்கு மாற்றப்பட்டது" : newLang === "hi" ? "भाषा हिंदी में बदल दी गई है" : "Language changed to English");
								}
							} else speak(acc);
							return;
						}
					} catch {}
				}
			}
		} catch (e) {
			speak("Sorry, something went wrong.");
		}
	};
	const toggleVoice = (0, import_react.useCallback)(() => {
		const w = window;
		const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
		if (!SR) {
			alert("Voice input not supported in this browser.");
			return;
		}
		if (listening) {
			recognitionRef.current?.stop();
			return;
		}
		stopAudio();
		const rec = new SR();
		rec.lang = lang === "hi" ? "hi-IN" : lang === "ta" ? "ta-IN" : "en-IN";
		rec.continuous = false;
		rec.interimResults = false;
		rec.onresult = (e) => {
			let final = "";
			for (let i = e.resultIndex; i < e.results.length; i++) final += e.results[i][0].transcript;
			if (final.trim()) processCommand(final);
		};
		rec.onend = () => setListening(false);
		rec.onerror = (e) => {
			setListening(false);
			if (e.error === "aborted" || e.error === "no-speech") return;
			speak("Sorry, I didn't catch that.");
		};
		recognitionRef.current = rec;
		const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
		const osc = audioCtx.createOscillator();
		osc.type = "sine";
		osc.frequency.setValueAtTime(440, audioCtx.currentTime);
		osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + .1);
		osc.connect(audioCtx.destination);
		osc.start();
		osc.stop(audioCtx.currentTime + .1);
		rec.start();
		setListening(true);
	}, [
		listening,
		lang,
		processCommand,
		speak
	]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape" && speaking) stopAudio();
			if (e.ctrlKey && e.altKey && !listening && !e.repeat) {
				if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) e.preventDefault();
				toggleVoice();
			}
		};
		const handleKeyUp = (e) => {
			if ((e.key === "Control" || e.key === "Alt") && listening) recognitionRef.current?.stop();
		};
		window.addEventListener("keydown", handleKeyDown, { capture: true });
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown, { capture: true });
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [
		listening,
		speaking,
		toggleVoice,
		stopAudio
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-4 right-20 z-50 md:bottom-6 md:right-24 flex flex-col items-center gap-2",
		children: [
			speaking && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: stopAudio,
				className: "grid h-10 w-10 place-items-center rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 transition-colors",
				"aria-label": "Stop speaking",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "h-4 w-4 fill-current" })
			}),
			listening && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-full bg-red-500 text-white px-3 py-1 text-xs font-medium animate-pulse shadow-lg",
				children: "Listening..."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onMouseDown: toggleVoice,
				onMouseUp: () => {
					if (listening) recognitionRef.current?.stop();
				},
				onTouchStart: toggleVoice,
				onTouchEnd: () => {
					if (listening) recognitionRef.current?.stop();
				},
				onKeyDown: (e) => {
					if (e.key === "Enter" || e.key === " ") toggleVoice();
				},
				onKeyUp: (e) => {
					if ((e.key === "Enter" || e.key === " ") && listening) recognitionRef.current?.stop();
				},
				"aria-label": "Hold to give a voice command",
				className: `grid h-14 w-14 place-items-center rounded-full shadow-lg transition-colors ${listening ? "bg-red-500 text-white hover:bg-red-600" : "bg-navy text-white hover:bg-navy/90"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-6 w-6" })
			})
		]
	});
}
function Layout() {
	const navigate = useNavigate();
	async function handleSignOut() {
		await supabase.auth.signOut();
		navigate({
			to: "/",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileTopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:pl-64",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "sticky top-0 z-20 flex h-14 items-center justify-end px-4 border-b border-border bg-background/80 backdrop-blur-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleSignOut,
						className: "flex items-center gap-2 rounded-md bg-red-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Sign out"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "p-4 md:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatWidget, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalVoiceListener, {})
		]
	});
}
//#endregion
export { Layout as component };
