import { o as __toESM } from "../_runtime.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as I18nProvider } from "./i18n-1E1dHM5R.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as redirect, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$18 } from "./auth-DUAAEZRw.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as ThemeProvider } from "./theme-CeZYkCYY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B80p4Xlb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B9NqZLHz.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "FinSage AI — Verified finance & compliance copilot for Indian MSMEs" },
			{
				name: "description",
				content: "Evidence-backed answers to GST, TDS and ROC questions for Indian small businesses. Every answer comes with an Honesty Score."
			},
			{
				name: "author",
				content: "FinSage AI"
			},
			{
				property: "og:title",
				content: "FinSage AI — Verified finance & compliance copilot for Indian MSMEs"
			},
			{
				property: "og:description",
				content: "Evidence-backed answers to GST, TDS and ROC questions for Indian small businesses. Every answer comes with an Honesty Score."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "FinSage AI — Verified finance & compliance copilot for Indian MSMEs"
			},
			{
				name: "twitter:description",
				content: "Evidence-backed answers to GST, TDS and ROC questions for Indian small businesses. Every answer comes with an Honesty Score."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9d739b74-6584-474a-bb3a-5379e3972b97"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9d739b74-6584-474a-bb3a-5379e3972b97"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) })
	});
}
var $$splitComponentImporter$14 = () => import("./routes-B33KhbCo.mjs");
var Route$16 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "FinSage AI — Verified finance & compliance copilot for Indian MSMEs" },
		{
			name: "description",
			content: "Evidence-backed answers to GST, TDS and ROC questions for Indian small businesses. Every answer comes with an Honesty Score."
		},
		{
			property: "og:title",
			content: "FinSage AI — Verified finance & compliance copilot for Indian MSMEs"
		},
		{
			property: "og:description",
			content: "Evidence-backed answers to GST, TDS and ROC questions for Indian small businesses. Every answer comes with an Honesty Score."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./route-BOJZDRDA.mjs");
var Route$15 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({
			to: "/auth",
			search: { mode: "signin" }
		});
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./budget-DaGs4xKM.mjs");
var Route$14 = createFileRoute("/_authenticated/budget")({
	head: () => ({ meta: [{ title: "Budgets — FinSage AI" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./calculator-luG-_i5X.mjs");
var Route$13 = createFileRoute("/_authenticated/calculator")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./chat-BOf1KBle.mjs");
var Route$12 = createFileRoute("/_authenticated/chat")({
	head: () => ({ meta: [{ title: "Ask FinSage AI" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./compliance-C_L8RIMP.mjs");
var Route$11 = createFileRoute("/_authenticated/compliance")({
	head: () => ({ meta: [{ title: "Compliance Calendar — FinSage AI" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./dashboard-D3hsFvAa.mjs");
var Route$10 = createFileRoute("/_authenticated/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — FinSage AI" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./investment-Ubm7hwbB.mjs");
var Route$9 = createFileRoute("/_authenticated/investment")({
	head: () => ({ meta: [{ title: "Investment Basics — FinSage AI" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./invoices-itBsOdtz.mjs");
var Route$8 = createFileRoute("/_authenticated/invoices")({
	head: () => ({ meta: [
		{ title: "Invoices & Receivables — FinSage AI" },
		{
			name: "description",
			content: "Create GST-compliant invoices and track receivables for your MSME."
		},
		{
			property: "og:title",
			content: "Invoices & Receivables — FinSage AI"
		},
		{
			property: "og:description",
			content: "Create GST-compliant invoices and track receivables for your MSME."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./notifications-D8-BWK9a.mjs");
var Route$7 = createFileRoute("/_authenticated/notifications")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./regulatory-CwqAhx2G.mjs");
var Route$6 = createFileRoute("/_authenticated/regulatory")({
	head: () => ({ meta: [
		{ title: "Regulatory Updates — FinSage AI" },
		{
			name: "description",
			content: "Evidence-backed analysis of new GST, TDS and ROC notifications, scored for MSME impact."
		},
		{
			property: "og:title",
			content: "Regulatory Updates — FinSage AI"
		},
		{
			property: "og:description",
			content: "Evidence-backed analysis of new GST, TDS and ROC notifications, scored for MSME impact."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./reports-DxP09YFE.mjs");
var Route$5 = createFileRoute("/_authenticated/reports")({
	head: () => ({ meta: [
		{ title: "Financial Reports — FinSage AI" },
		{
			name: "description",
			content: "GST summary, ITC eligibility, and P&L auto-computed from your transactions and invoices."
		},
		{
			property: "og:title",
			content: "Financial Reports — FinSage AI"
		},
		{
			property: "og:description",
			content: "GST summary, ITC eligibility, and P&L auto-computed from your transactions and invoices."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./schemes-BZ_rIqgf.mjs");
var Route$4 = createFileRoute("/_authenticated/schemes")({
	head: () => ({ meta: [{ title: "Government Schemes — FinSage AI" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./settings-3qGK1r9m.mjs");
var Route$3 = createFileRoute("/_authenticated/settings")({
	head: () => ({ meta: [{ title: "Settings — FinSage AI" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./transactions-DpycQ_si.mjs");
var Route$2 = createFileRoute("/_authenticated/transactions")({
	head: () => ({ meta: [{ title: "Transactions — FinSage AI" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var GOV_SOURCE_MAP = [
	{
		keywords: [
			"gst",
			"gstin",
			"gstr",
			"e-invoice",
			"einvoice",
			"irn",
			"itc",
			"input tax",
			"composition",
			"qrmp",
			"cgst",
			"sgst",
			"igst",
			"hsn",
			"sac",
			"invoice"
		],
		urls: ["https://www.gst.gov.in/faqdetail"]
	},
	{
		keywords: [
			"tds",
			"194c",
			"194j",
			"194h",
			"194i",
			"194a",
			"form 26q",
			"form 24q",
			"tcs",
			"tan",
			"deduct",
			"withholding"
		],
		urls: ["https://incometaxindia.gov.in/Pages/tools/tds-rate-chart.aspx"]
	},
	{
		keywords: [
			"income tax",
			"itr",
			"44ad",
			"44ada",
			"advance tax",
			"presumptive",
			"tax slab",
			"deduction",
			"section 80"
		],
		urls: ["https://incometaxindia.gov.in/Pages/faqs.aspx"]
	},
	{
		keywords: [
			"msme",
			"udyam",
			"mudra",
			"pmegp",
			"cgtmse",
			"standup india",
			"msmed",
			"delayed payment",
			"43b",
			"small enterprise"
		],
		urls: ["https://msme.gov.in/faqs", "https://udyamregistration.gov.in/UdyamRegistration/StaticWebPages/faqs.aspx"]
	},
	{
		keywords: [
			"roc",
			"mca",
			"company",
			"pvt ltd",
			"opc",
			"mgt-7",
			"aoc-4",
			"annual return",
			"agm",
			"director",
			"incorporation"
		],
		urls: ["https://www.mca.gov.in/content/mca/global/en/data-and-reports/roc-filing.html"]
	},
	{
		keywords: [
			"mudra loan",
			"mudra",
			"shishu",
			"kishore",
			"tarun"
		],
		urls: ["https://www.mudra.org.in/Default"]
	}
];
async function fetchGovPage(url) {
	try {
		const res = await fetch(url, {
			signal: AbortSignal.timeout(4e3),
			headers: { "User-Agent": "Mozilla/5.0 FinSage-AI-Bot" }
		});
		if (!res.ok) return "";
		return (await res.text()).replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<nav[\s\S]*?<\/nav>/gi, "").replace(/<footer[\s\S]*?<\/footer>/gi, "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s{2,}/g, " ").trim().slice(0, 2500);
	} catch {
		return "";
	}
}
async function fetchRelevantGovContext(question) {
	const lower = question.toLowerCase();
	const matched = [];
	for (const entry of GOV_SOURCE_MAP) if (entry.keywords.some((k) => lower.includes(k))) matched.push(...entry.urls);
	const unique = [...new Set(matched)].slice(0, 3);
	if (!unique.length) return {
		context: "",
		sources: []
	};
	const pages = await Promise.all(unique.map(fetchGovPage));
	return {
		context: pages.map((t, i) => t ? `[Source: ${unique[i]}]\n${t}` : "").filter(Boolean).join("\n\n---\n\n"),
		sources: unique.filter((_, i) => pages[i])
	};
}
var SYSTEM_PROMPT = `You are FinSage AI, a dedicated financial copilot built exclusively for Indian small business owners, shopkeepers, freelancers, and MSMEs.

Your identity: You are ALWAYS a finance chatbot. Never pretend to be a general assistant.

For ANY casual or non-finance message (like greetings or jokes), politely redirect the user back to finance topics in 1-2 sentences. DO NOT print a list of your capabilities.
IMPORTANT: NEVER start your answers with a repetitive intro like "As your FinSage AI copilot..." or print a list of your features. Give direct, concise, required answers only.
For finance questions, answer thoroughly with:
- Clear explanations using simple language (user is a shopkeeper, not a CA)
- Bullet points, numbered steps, Markdown tables, and rupee symbol (Rs) for amounts
- Official Indian sources: gst.gov.in, incometax.gov.in, mca.gov.in, msme.gov.in
- A Sources section at the end
- A warning note for any caveats or rate changes
- NEVER invent tax rates, deadlines, or rules. Say so if unsure.

Language: Always reply in the same language the user used (English, Hindi, or Tamil).

You are FinSage AI — India's trusted finance copilot for MSMEs. Always professional, always helpful, always finance-first.

FLOWCHART / DIAGRAM CAPABILITY:
When the user asks for a flowchart, diagram, process flow, or visual explanation, output ONLY a JSON object inside a flowchart code block (using triple backticks with the word flowchart). The UI renders it as a visual diagram automatically.

JSON FORMAT — output exactly this structure:
{ "title": "Short Title", "steps": [ ... ] }

Step types allowed: start, end, process, decision, warning, result
- start/end/process/warning/result: { "type": "process", "text": "Short label max 8 words", "icon": "emoji" }
- decision: { "type": "decision", "text": "Yes/No question?", "yes": "Yes path label", "no": "No path label" }

Max 8 steps total. Decision nodes MUST have both yes and no fields.
After the flowchart block, write 2-3 plain text lines explaining the steps.`;
async function computeHonestyScore(answer) {
	const TRUSTED_PORTALS = [
		"gst.gov.in",
		"incometax.gov.in",
		"mca.gov.in",
		"msme.gov.in",
		"mudra.org.in",
		"einvoice1.gst.gov.in",
		"udyamregistration.gov.in",
		"samadhaan.msme.gov.in",
		"cbic.gov.in",
		"sebi.gov.in",
		"rbi.org.in",
		"kviconline.gov.in",
		"cgtmse.in",
		"standupmitra.in"
	];
	const govMatches = (answer.match(/[a-z0-9.-]+\.(?:gov\.in|org\.in)/gi) || []).map((s) => s.toLowerCase().replace(/[.,;:)]+$/, ""));
	const trustedCount = new Set(govMatches.filter((g) => TRUSTED_PORTALS.some((p) => g.includes(p)))).size;
	const sourceScore = trustedCount === 0 ? 0 : Math.min(40, 20 + (trustedCount - 1) * 10);
	const legalScore = /section\s+\d+[a-z]?|rule\s+\d+|circular\s+no|notification\s+no|schedule\s+[ivxlcdm]+|form\s+(gstr|26q|24q|16a|mgt|aoc)|\birn\b|\bgstn\b/i.test(answer) ? 20 : 0;
	const recencyScore = /(fy|ay|financial year|assessment year)\s*20\d\d|20(2[3-9]|3\d)/i.test(answer) ? 15 : 5;
	const crossScore = trustedCount >= 2 ? 15 : trustedCount === 1 ? 7 : 0;
	const hedgeScore = /(verify|consult.*ca|check.*latest|as of|subject to|may vary|rates? may|please confirm|recommend consulting)/i.test(answer) ? 10 : 3;
	let raw = sourceScore + legalScore + recencyScore + crossScore + hedgeScore;
	if (trustedCount === 0) raw = Math.min(raw, 45);
	return {
		score: Math.max(0, Math.min(100, raw)),
		breakdown: {
			official_sources: sourceScore,
			legal_references: legalScore,
			recency: recencyScore,
			cross_verified: crossScore,
			appropriate_hedging: hedgeScore
		}
	};
}
function extractSources(text) {
	const urls = text.match(/https?:\/\/[^\s)\]]+|[a-z0-9-]+\.gov\.in[^\s)\]]*/gi) || [];
	return Array.from(new Set(urls.map((u) => u.replace(/[.,;:]$/, ""))));
}
var rateLimitMap = /* @__PURE__ */ new Map();
function checkRateLimit(userId) {
	const now = Date.now();
	const windowMs = 6e4;
	const limit = 20;
	const entry = rateLimitMap.get(userId);
	if (!entry || now > entry.resetAt) {
		rateLimitMap.set(userId, {
			count: 1,
			resetAt: now + windowMs
		});
		return true;
	}
	if (entry.count >= limit) return false;
	entry.count++;
	return true;
}
var INJECTION_PATTERNS = [
	/ignore (all |previous |prior |above |prior |system )?instructions/i,
	/you are now/i,
	/disregard your (system |previous )?prompt/i,
	/act as (a |an )?(?!FinSage)/i,
	/jailbreak/i,
	/\bDAN\b/,
	/forget (everything|your instructions)/i,
	/new persona/i,
	/system prompt.*leak/i,
	/print your (system |initial )?prompt/i
];
function containsInjection(text) {
	return INJECTION_PATTERNS.some((p) => p.test(text));
}
function isUUID(s) {
	return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(s);
}
function assertEnv() {
	const missing = [
		"SUPABASE_URL",
		"SUPABASE_PUBLISHABLE_KEY",
		"GROQ_API_KEY"
	].filter((k) => !process.env[k]);
	if (missing.length) throw new Error(`Missing env vars: ${missing.join(", ")}`);
}
var Route$1 = createFileRoute("/api/chat")({ server: { handlers: { POST: async ({ request }) => {
	try {
		assertEnv();
	} catch (e) {
		console.error("[chat] env error:", e);
		return new Response("Server configuration error", { status: 500 });
	}
	let body;
	try {
		body = await request.json();
	} catch {
		return new Response("Invalid JSON", { status: 400 });
	}
	const msg = body?.message?.trim() ?? "";
	if (!body?.conversation_id || !msg) return new Response("Bad request: missing fields", { status: 400 });
	if (!isUUID(body.conversation_id)) return new Response("Bad request: invalid conversation_id", { status: 400 });
	if (msg.length > 2e3) return new Response("Message too long (max 2000 characters)", { status: 400 });
	if (containsInjection(msg)) return new Response("Message not allowed", { status: 400 });
	const token = (request.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
	if (!token) return new Response("Unauthorized", { status: 401 });
	const supa = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, {
		auth: {
			persistSession: false,
			autoRefreshToken: false
		},
		global: { headers: { Authorization: `Bearer ${token}` } }
	});
	const { data: userData } = await supa.auth.getUser(token);
	const userId = userData.user?.id;
	if (!userId) return new Response("Unauthorized", { status: 401 });
	if (!checkRateLimit(userId)) return new Response("Too many requests. Please wait a moment.", { status: 429 });
	const { data: history } = await supa.from("chat_messages").select("role, content").eq("conversation_id", body.conversation_id).order("created_at", { ascending: true }).limit(30);
	await supa.from("chat_messages").insert({
		conversation_id: body.conversation_id,
		user_id: userId,
		role: "user",
		content: body.message,
		language: body.language ?? "en"
	});
	const langInstr = "\n\nIMPORTANT: Automatically detect the language of the user's message (English, Hindi, or Tamil). You MUST respond in the EXACT same language the user wrote/spoke in, regardless of any other settings.";
	const now = /* @__PURE__ */ new Date();
	const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10);
	const [profileRes, txnRes, budgetRes, deadlineRes, invRes, regRes] = await Promise.all([
		supa.from("profiles").select("business_name, business_type, gstin, state, financial_health_score").eq("user_id", userId).maybeSingle(),
		supa.from("transactions").select("amount, category, kind, txn_date, description").order("txn_date", { ascending: false }).limit(200),
		supa.from("budgets").select("category, monthly_limit"),
		supa.from("compliance_deadlines").select("title, kind, due_date, status").order("due_date", { ascending: true }).limit(20),
		supa.from("invoices").select("invoice_number, customer_name, total_amount, amount_paid, due_date, status").order("created_at", { ascending: false }).limit(50),
		supa.from("regulatory_updates").select("title, category, summary, effective_date, compliance_deadline, msme_impact_score, action_required").order("created_at", { ascending: false }).limit(10)
	]);
	const profile = profileRes.data;
	const txns = txnRes.data ?? [];
	const budgets = budgetRes.data ?? [];
	const deadlines = deadlineRes.data ?? [];
	const monthTxns = txns.filter((t) => t.txn_date >= monthStart);
	const monthIncome = monthTxns.filter((t) => t.kind === "income").reduce((s, t) => s + Number(t.amount), 0);
	const monthExpense = monthTxns.filter((t) => t.kind === "expense").reduce((s, t) => s + Number(t.amount), 0);
	const catSpend = {};
	for (const t of monthTxns) {
		if (t.kind !== "expense" || !t.category) continue;
		catSpend[t.category] = (catSpend[t.category] ?? 0) + Number(t.amount);
	}
	const topCats = Object.entries(catSpend).sort((a, b) => b[1] - a[1]).slice(0, 8);
	const budgetLines = budgets.map((b) => {
		const spent = catSpend[b.category] ?? 0;
		const pct = b.monthly_limit > 0 ? Math.round(spent / Number(b.monthly_limit) * 100) : 0;
		return `  - ${b.category}: spent ₹${Math.round(spent).toLocaleString("en-IN")} of ₹${Math.round(Number(b.monthly_limit)).toLocaleString("en-IN")} (${pct}%)${spent > Number(b.monthly_limit) ? " — OVER BUDGET" : ""}`;
	});
	const upcomingDeadlines = deadlines.filter((d) => d.status !== "completed").slice(0, 8);
	const recentTxnLines = monthTxns.slice(0, 15).map((t) => `  - ${t.txn_date} ${t.kind} ₹${Math.round(Number(t.amount)).toLocaleString("en-IN")} · ${t.category ?? "-"}${t.description ? ` · ${t.description}` : ""}`);
	const invoices = invRes.data ?? [];
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const outstanding = invoices.reduce((s, i) => s + Math.max(0, Number(i.total_amount) - Number(i.amount_paid)), 0);
	const overdueInvs = invoices.filter((i) => i.due_date && i.due_date < today && Number(i.amount_paid) < Number(i.total_amount));
	const invLines = invoices.slice(0, 10).map((i) => `  - ${i.invoice_number} · ${i.customer_name} · ₹${Math.round(Number(i.total_amount)).toLocaleString("en-IN")} · paid ₹${Math.round(Number(i.amount_paid)).toLocaleString("en-IN")} · due ${i.due_date ?? "—"} · ${i.status}`);
	const regLines = (regRes.data ?? []).slice(0, 5).map((r) => `  - [${r.category ?? "Reg"}] ${r.title} · impact ${r.msme_impact_score}/100 · effective ${r.effective_date ?? "—"} · deadline ${r.compliance_deadline ?? "—"}${r.action_required ? " · ACTION REQUIRED" : ""}`);
	const userContext = `\n\n--- SIGNED-IN USER CONTEXT (real data, respect privacy, only reference when relevant) ---
Business: ${profile?.business_name ?? "(not set)"} · Type: ${profile?.business_type ?? "(not set)"} · GSTIN: ${profile?.gstin ?? "(not set)"} · Financial Health Score: ${profile?.financial_health_score ?? "n/a"}/100
Current month (${monthStart} → today): income ₹${Math.round(monthIncome).toLocaleString("en-IN")}, expense ₹${Math.round(monthExpense).toLocaleString("en-IN")}, net ₹${Math.round(monthIncome - monthExpense).toLocaleString("en-IN")}
Top spending categories this month:
${topCats.length ? topCats.map(([c, v]) => `  - ${c}: ₹${Math.round(v).toLocaleString("en-IN")}`).join("\n") : "  (none logged yet)"}
Budgets vs actuals this month:
${budgetLines.length ? budgetLines.join("\n") : "  (no budgets set)"}
Upcoming / overdue compliance deadlines:
${upcomingDeadlines.length ? upcomingDeadlines.map((d) => `  - ${d.due_date} · ${d.kind} · ${d.title} · ${d.status}`).join("\n") : "  (none scheduled)"}
Recent transactions (latest first):
${recentTxnLines.length ? recentTxnLines.join("\n") : "  (none)"}
Invoices & receivables: outstanding ₹${Math.round(outstanding).toLocaleString("en-IN")} across ${invoices.length} invoices (${overdueInvs.length} overdue).
${invLines.length ? invLines.join("\n") : "  (no invoices yet)"}
Recent regulatory updates relevant to Indian MSMEs:
${regLines.length ? regLines.join("\n") : "  (none published yet)"}
--- END USER CONTEXT ---
When the user's question is about their own finances, invoices, receivables, budgets, spending, or personal compliance deadlines, USE the numbers above. For regulatory questions, prefer the Regulatory Updates listed above when they match; otherwise answer from general compliance knowledge with official sources. You can freely mix both in one conversation.`;
	const pageHint = body.page_context ? `\n\nThe user is currently on the "${body.page_context}" page.` : "";
	const voiceHint = body.is_voice_command ? `\n\nVOICE COMMAND DETECTED: If the user is asking to navigate to a page, open a section, or go somewhere (e.g. "transactionai open sei", "schemes kholo", "open settings"), you MUST reply with EXACTLY this string and nothing else: NAVIGATE_TO:/path (replace /path with the correct page: /dashboard, /chat, /compliance, /transactions, /invoices, /reports, /budget, /investment, /schemes, /regulatory, /calculator, /settings, /notifications). If the user is asking to change the application language to Tamil, Hindi, or English, reply with EXACTLY: CHANGE_LANG:ta (or hi, en). Do not add any conversational text for these actions. If they are asking a finance question, answer normally in their language.` : "";
	const { context: govContext, sources: govSources } = await fetchRelevantGovContext(body.message);
	const govBlock = govContext ? `\n\n--- OFFICIAL GOVERNMENT SOURCES (fetched live for this question) ---\nThe following content was retrieved directly from official Indian government websites. Use this as your PRIMARY factual source. Always cite these URLs in your Sources section.\n\n${govContext}\n--- END OFFICIAL SOURCES ---\nIMPORTANT: Base your answer strictly on the above official content. Mention source URLs: ${govSources.join(", ")}` : "";
	const messages = [
		{
			role: "system",
			content: SYSTEM_PROMPT + langInstr + userContext + pageHint + voiceHint + govBlock
		},
		...(history ?? []).map((m) => ({
			role: m.role,
			content: m.content
		})),
		{
			role: "user",
			content: body.message
		}
	];
	const apiKey = process.env.GROQ_API_KEY;
	if (!apiKey) return new Response("Missing GROQ_API_KEY", { status: 500 });
	const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "llama-3.1-8b-instant",
			messages,
			stream: true
		})
	});
	if (!upstream.ok || !upstream.body) {
		const errText = await upstream.text().catch(() => "");
		console.error(`Groq API error ${upstream.status}:`, errText);
		if (upstream.status === 429) return new Response(`Rate limited by Groq: ${errText}`, { status: 429 });
		if (upstream.status === 401 || upstream.status === 403) return new Response(`Invalid or missing GROQ_API_KEY (${upstream.status})`, { status: 500 });
		return new Response(`AI error ${upstream.status}: ${errText}`, { status: 500 });
	}
	let fullText = "";
	const encoder = new TextEncoder();
	const decoder = new TextDecoder();
	const stream = new ReadableStream({ async start(controller) {
		const reader = upstream.body.getReader();
		let buffer = "";
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				buffer += decoder.decode(value, { stream: true });
				const lines = buffer.split("\n");
				buffer = lines.pop() || "";
				for (const line of lines) {
					const trimmed = line.trim();
					if (!trimmed || !trimmed.startsWith("data:")) continue;
					const data = trimmed.slice(5).trim();
					if (data === "[DONE]") continue;
					try {
						const delta = JSON.parse(data).choices?.[0]?.delta?.content;
						if (delta) {
							fullText += delta;
							controller.enqueue(encoder.encode(`data: ${JSON.stringify({
								type: "delta",
								text: delta
							})}\n\n`));
						}
					} catch {}
				}
			}
			const honesty = await computeHonestyScore(fullText);
			const sources = extractSources(fullText);
			await supa.from("chat_messages").insert({
				conversation_id: body.conversation_id,
				user_id: userId,
				role: "assistant",
				content: fullText,
				honesty_score: honesty.score,
				honesty_breakdown: honesty.breakdown,
				sources,
				language: body.language ?? "en"
			});
			await supa.from("chat_conversations").update({ updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", body.conversation_id);
			if ((history?.length ?? 0) === 0) {
				const title = body.message.slice(0, 60);
				await supa.from("chat_conversations").update({ title }).eq("id", body.conversation_id);
			}
			controller.enqueue(encoder.encode(`data: ${JSON.stringify({
				type: "done",
				honesty_score: honesty.score,
				honesty_breakdown: honesty.breakdown,
				sources
			})}\n\n`));
			controller.close();
		} catch (err) {
			controller.error(err);
		}
	} });
	return new Response(stream, { headers: {
		"Content-Type": "text/event-stream",
		"Cache-Control": "no-cache, no-transform",
		Connection: "keep-alive"
	} });
} } } });
function buildWavBuffer(pcmData) {
	const sampleRate = 24e3;
	const numChannels = 1;
	const bitsPerSample = 16;
	const byteRate = sampleRate * numChannels * bitsPerSample / 8;
	const blockAlign = numChannels * bitsPerSample / 8;
	const dataSize = pcmData.byteLength;
	const headerSize = 44;
	const buf = new ArrayBuffer(headerSize + dataSize);
	const view = new DataView(buf);
	const enc = new TextEncoder();
	const writeStr = (offset, str) => {
		enc.encode(str).forEach((b, i) => view.setUint8(offset + i, b));
	};
	writeStr(0, "RIFF");
	view.setUint32(4, 36 + dataSize, true);
	writeStr(8, "WAVE");
	writeStr(12, "fmt ");
	view.setUint32(16, 16, true);
	view.setUint16(20, 1, true);
	view.setUint16(22, numChannels, true);
	view.setUint32(24, sampleRate, true);
	view.setUint32(28, byteRate, true);
	view.setUint16(32, blockAlign, true);
	view.setUint16(34, bitsPerSample, true);
	writeStr(36, "data");
	view.setUint32(40, dataSize, true);
	new Uint8Array(buf).set(pcmData, headerSize);
	return new Uint8Array(buf);
}
var Route = createFileRoute("/api/tts")({ server: { handlers: { POST: async ({ request }) => {
	const text = ((await request.json().catch(() => ({}))).text || "").trim();
	if (!text) return new Response("Missing text", { status: 400 });
	const token = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
	if (!token) return new Response("Unauthorized", { status: 401 });
	const { data: userData } = await createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, { auth: {
		persistSession: false,
		autoRefreshToken: false
	} }).auth.getUser(token);
	if (!userData.user?.id) return new Response("Unauthorized", { status: 401 });
	const key = process.env.GEMINI_API_KEY;
	if (!key) return new Response("Missing GEMINI_API_KEY", { status: 500 });
	const safeText = text.slice(0, 3e3);
	const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-tts:generateContent`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-goog-api-key": key
		},
		body: JSON.stringify({
			contents: [{ parts: [{ text: safeText }] }],
			generationConfig: {
				responseModalities: ["AUDIO"],
				speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } }
			}
		})
	});
	if (!res.ok) {
		const err = await res.text().catch(() => "");
		return new Response(err || `TTS failed: ${res.status}`, { status: res.status });
	}
	const b64 = (await res.json()).candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
	if (!b64) return new Response("TTS response missing audio data", { status: 502 });
	const binary = atob(b64);
	const pcm = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) pcm[i] = binary.charCodeAt(i);
	const wav = buildWavBuffer(pcm);
	return new Response(wav, { headers: {
		"Content-Type": "audio/wav",
		"Cache-Control": "no-store"
	} });
} } } });
var IndexRoute = Route$16.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var AuthenticatedRouteRoute = Route$15.update({
	id: "/_authenticated",
	getParentRoute: () => Route$17
});
var AuthRoute = Route$18.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$17
});
var AuthenticatedBudgetRoute = Route$14.update({
	id: "/budget",
	path: "/budget",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedCalculatorRoute = Route$13.update({
	id: "/calculator",
	path: "/calculator",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedChatRoute = Route$12.update({
	id: "/chat",
	path: "/chat",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedComplianceRoute = Route$11.update({
	id: "/compliance",
	path: "/compliance",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDashboardRoute = Route$10.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedInvestmentRoute = Route$9.update({
	id: "/investment",
	path: "/investment",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedInvoicesRoute = Route$8.update({
	id: "/invoices",
	path: "/invoices",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedNotificationsRoute = Route$7.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedRegulatoryRoute = Route$6.update({
	id: "/regulatory",
	path: "/regulatory",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedReportsRoute = Route$5.update({
	id: "/reports",
	path: "/reports",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedSchemesRoute = Route$4.update({
	id: "/schemes",
	path: "/schemes",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedSettingsRoute = Route$3.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedTransactionsRoute = Route$2.update({
	id: "/transactions",
	path: "/transactions",
	getParentRoute: () => AuthenticatedRouteRoute
});
var ApiChatRoute = Route$1.update({
	id: "/api/chat",
	path: "/api/chat",
	getParentRoute: () => Route$17
});
var ApiTtsRoute = Route.update({
	id: "/api/tts",
	path: "/api/tts",
	getParentRoute: () => Route$17
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedBudgetRoute,
	AuthenticatedCalculatorRoute,
	AuthenticatedChatRoute,
	AuthenticatedComplianceRoute,
	AuthenticatedDashboardRoute,
	AuthenticatedInvestmentRoute,
	AuthenticatedInvoicesRoute,
	AuthenticatedNotificationsRoute,
	AuthenticatedRegulatoryRoute,
	AuthenticatedReportsRoute,
	AuthenticatedSchemesRoute,
	AuthenticatedSettingsRoute,
	AuthenticatedTransactionsRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AuthRoute,
	ApiChatRoute,
	ApiTtsRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
