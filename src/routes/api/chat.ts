import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";

// Streaming chat endpoint with real-time government website RAG (Retrieval-Augmented Generation).
// For each finance question, fetches relevant official .gov.in pages and injects the content
// as grounded context into the AI prompt. Honesty score reflects citation of those sources.

// ---------------------------------------------------------------------------
// GOV SOURCE MAP: topic keywords -> official page URLs to fetch
// ---------------------------------------------------------------------------
const GOV_SOURCE_MAP: { keywords: string[]; urls: string[] }[] = [
  {
    keywords: ["gst", "gstin", "gstr", "e-invoice", "einvoice", "irn", "itc", "input tax", "composition", "qrmp", "cgst", "sgst", "igst", "hsn", "sac", "invoice"],
    urls: ["https://www.gst.gov.in/faqdetail"],
  },
  {
    keywords: ["tds", "194c", "194j", "194h", "194i", "194a", "form 26q", "form 24q", "tcs", "tan", "deduct", "withholding"],
    urls: ["https://incometaxindia.gov.in/Pages/tools/tds-rate-chart.aspx"],
  },
  {
    keywords: ["income tax", "itr", "44ad", "44ada", "advance tax", "presumptive", "tax slab", "deduction", "section 80"],
    urls: ["https://incometaxindia.gov.in/Pages/faqs.aspx"],
  },
  {
    keywords: ["msme", "udyam", "mudra", "pmegp", "cgtmse", "standup india", "msmed", "delayed payment", "43b", "small enterprise"],
    urls: ["https://msme.gov.in/faqs", "https://udyamregistration.gov.in/UdyamRegistration/StaticWebPages/faqs.aspx"],
  },
  {
    keywords: ["roc", "mca", "company", "pvt ltd", "opc", "mgt-7", "aoc-4", "annual return", "agm", "director", "incorporation"],
    urls: ["https://www.mca.gov.in/content/mca/global/en/data-and-reports/roc-filing.html"],
  },
  {
    keywords: ["mudra loan", "mudra", "shishu", "kishore", "tarun"],
    urls: ["https://www.mudra.org.in/Default"],
  },
];

// Fetch and strip HTML from a government page (4s timeout)
async function fetchGovPage(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(4000),
      headers: { "User-Agent": "Mozilla/5.0 FinSage-AI-Bot" },
    });
    if (!res.ok) return "";
    const html = await res.text();
    return html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<nav[\s\S]*?<\/nav>/gi, "")
      .replace(/<footer[\s\S]*?<\/footer>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim()
      .slice(0, 2500);
  } catch {
    return "";
  }
}

// Match question to relevant gov URLs and fetch their content
async function fetchRelevantGovContext(question: string): Promise<{ context: string; sources: string[] }> {
  const lower = question.toLowerCase();
  const matched: string[] = [];
  for (const entry of GOV_SOURCE_MAP) {
    if (entry.keywords.some((k) => lower.includes(k))) matched.push(...entry.urls);
  }
  const unique = [...new Set(matched)].slice(0, 3);
  if (!unique.length) return { context: "", sources: [] };
  const pages = await Promise.all(unique.map(fetchGovPage));
  const snippets = pages.map((t, i) => t ? `[Source: ${unique[i]}]\n${t}` : "").filter(Boolean);
  return { context: snippets.join("\n\n---\n\n"), sources: unique.filter((_, i) => pages[i]) };
}


type ChatBody = {
  conversation_id: string;
  message: string;
  language?: "en" | "hi" | "ta";
  page_context?: string; // optional hint about which page the widget was opened on
};

const SYSTEM_PROMPT = `You are FinSage AI, a dedicated financial copilot built exclusively for Indian small business owners, shopkeepers, freelancers, and MSMEs.

Your identity: You are ALWAYS a finance chatbot. Never pretend to be a general assistant.

For ANY casual or non-finance message (greetings, compliments, small talk like "hi", "i like you", "how are you", "tell me a joke"), you MUST respond in this exact format:
1. A short warm acknowledgement (1-2 sentences max)
2. Then say: "As your FinSage AI copilot, I am always here to support you with:"
3. Then list your capabilities as bullet points:
   - GST & E-Invoicing rules and returns
   - TDS rates and compliance
   - Income Tax & Section 43B(h) queries for MSMEs
   - MSME Loans & Schemes (MUDRA, PMEGP, CGTMSE)
   - Bookkeeping & Cash Flow basics
4. End with: "Is there any specific compliance deadline, tax calculation, or invoice question you would like help with today?"

For finance questions, answer thoroughly with:
- Clear explanations using simple language (user is a shopkeeper, not a CA)
- Bullet points, numbered steps, Markdown tables, and rupee symbol (Rs) for amounts
- Official Indian sources: gst.gov.in, incometax.gov.in, mca.gov.in, msme.gov.in
- A Sources section at the end
- A warning note for any caveats or rate changes
- NEVER invent tax rates, deadlines, or rules. Say so if unsure.

Language: Always reply in the same language the user used (English, Hindi, or Tamil).

You are FinSage AI — India's trusted finance copilot for MSMEs. Always professional, always helpful, always finance-first.

DIAGRAM / FLOWCHART CAPABILITY:
When the user asks for a flowchart, diagram, process flow, visual explanation, or step-by-step visual, generate a Mermaid diagram in a mermaid code block.

Rules for diagrams:
- Use: flowchart TD (top-down) for processes, flowchart LR (left-right) for comparisons
- Keep node labels short (max 5 words). Quote labels with special chars: A["GST @ 18%"]
- Decision nodes: B{Turnover > 40L?} with |Yes| and |No| branches
- Max 15 nodes for readability
- After the diagram, add a brief text explanation
- Triggers: "flowchart", "diagram", "draw", "explain visually", "show as flow", "step by step visually"`;


async function computeHonestyScore(answer: string): Promise<{ score: number; breakdown: Record<string, number> }> {
  // Honesty Score (0-100) based on official Indian government source citations.
  // [40pts] Official .gov.in portal citations
  // [20pts] Specific Section/Circular/Notification referenced
  // [15pts] Financial Year specificity (not stale)
  // [15pts] Multiple source corroboration (2+ distinct portals)
  // [10pts] Appropriate hedging ("verify", "consult CA" etc.)
  // Penalty: no .gov.in source caps score at 45

  const TRUSTED_PORTALS = [
    "gst.gov.in", "incometax.gov.in", "mca.gov.in", "msme.gov.in",
    "mudra.org.in", "einvoice1.gst.gov.in", "udyamregistration.gov.in",
    "samadhaan.msme.gov.in", "cbic.gov.in", "sebi.gov.in",
    "rbi.org.in", "kviconline.gov.in", "cgtmse.in", "standupmitra.in"
  ];

  const govMatches = (answer.match(/[a-z0-9.-]+\.(?:gov\.in|org\.in)/gi) || [])
    .map((s) => s.toLowerCase().replace(/[.,;:)]+$/, ""));
  const uniqueGov = new Set(govMatches.filter((g) => TRUSTED_PORTALS.some((p) => g.includes(p))));
  const trustedCount = uniqueGov.size;

  // 40pts: 20 for first source, +10 per additional up to 40
  const sourceScore = trustedCount === 0 ? 0 : Math.min(40, 20 + (trustedCount - 1) * 10);

  // 20pts: specific legal section, circular, notification, or form referenced
  const hasLegalRef = /section\s+\d+[a-z]?|rule\s+\d+|circular\s+no|notification\s+no|schedule\s+[ivxlcdm]+|form\s+(gstr|26q|24q|16a|mgt|aoc)|\birn\b|\bgstn\b/i.test(answer);
  const legalScore = hasLegalRef ? 20 : 0;

  // 15pts: mentions current financial or assessment year
  const hasFY = /(fy|ay|financial year|assessment year)\s*20\d\d|20(2[3-9]|3\d)/i.test(answer);
  const recencyScore = hasFY ? 15 : 5;

  // 15pts: 2+ distinct trusted sources = cross-verified
  const crossScore = trustedCount >= 2 ? 15 : trustedCount === 1 ? 7 : 0;

  // 10pts: appropriate epistemic hedging
  const hasHedge = /(verify|consult.*ca|check.*latest|as of|subject to|may vary|rates? may|please confirm|recommend consulting)/i.test(answer);
  const hedgeScore = hasHedge ? 10 : 3;

  let raw = sourceScore + legalScore + recencyScore + crossScore + hedgeScore;
  // Cap at 45 if no official gov source cited at all
  if (trustedCount === 0) raw = Math.min(raw, 45);

  return {
    score: Math.max(0, Math.min(100, raw)),
    breakdown: {
      official_sources: sourceScore,
      legal_references: legalScore,
      recency: recencyScore,
      cross_verified: crossScore,
      appropriate_hedging: hedgeScore,
    },
  };
}

function extractSources(text: string): string[] {
  const urls = text.match(/https?:\/\/[^\s)\]]+|[a-z0-9-]+\.gov\.in[^\s)\]]*/gi) || [];
  return Array.from(new Set(urls.map((u) => u.replace(/[.,;:]$/, ""))));
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as ChatBody;
        if (!body?.conversation_id || !body?.message?.trim()) {
          return new Response("Bad request", { status: 400 });
        }

        // Authenticate via bearer token
        const authHeader = request.headers.get("authorization") || "";
        const token = authHeader.replace(/^Bearer\s+/i, "");
        if (!token) return new Response("Unauthorized", { status: 401 });

        const supa = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
          auth: { persistSession: false, autoRefreshToken: false },
          global: { headers: { Authorization: `Bearer ${token}` } },
        });
        const { data: userData } = await supa.auth.getUser(token);
        const userId = userData.user?.id;
        if (!userId) return new Response("Unauthorized", { status: 401 });

        // Load prior messages
        const { data: history } = await supa
          .from("chat_messages")
          .select("role, content")
          .eq("conversation_id", body.conversation_id)
          .order("created_at", { ascending: true })
          .limit(30);

        // Persist user message
        await supa.from("chat_messages").insert({
          conversation_id: body.conversation_id,
          user_id: userId,
          role: "user",
          content: body.message,
          language: body.language ?? "en",
        });

        const langInstr =
          body.language === "hi"
            ? "\n\nRespond in हिन्दी (Hindi)."
            : body.language === "ta"
            ? "\n\nRespond in தமிழ் (Tamil)."
            : "\n\nRespond in English.";

        // ---- Ground the model in the signed-in user's real data ----
        // Fetch a compact summary of their finances so the model can answer
        // personal questions ("how much did I spend on rent this month?",
        // "am I over budget?", "when is my next GST deadline?") with real
        // numbers instead of guessing. All queries respect RLS via `supa`.
        const now = new Date();
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10);
        const [profileRes, txnRes, budgetRes, deadlineRes, invRes, regRes] = await Promise.all([
          supa.from("profiles").select("business_name, business_type, gstin, state, financial_health_score").eq("user_id", userId).maybeSingle(),
          supa.from("transactions").select("amount, category, kind, txn_date, description").order("txn_date", { ascending: false }).limit(200),
          supa.from("budgets").select("category, monthly_limit"),
          supa.from("compliance_deadlines").select("title, kind, due_date, status").order("due_date", { ascending: true }).limit(20),
          supa.from("invoices").select("invoice_number, customer_name, total_amount, amount_paid, due_date, status").order("created_at", { ascending: false }).limit(50),
          supa.from("regulatory_updates").select("title, category, summary, effective_date, compliance_deadline, msme_impact_score, action_required").order("created_at", { ascending: false }).limit(10),
        ]);
        const profile = profileRes.data as { business_name?: string | null; business_type?: string | null; gstin?: string | null; financial_health_score?: number | null } | null;
        const txns = (txnRes.data ?? []) as { amount: number; category: string | null; kind: "income" | "expense"; txn_date: string; description: string | null }[];
        const budgets = (budgetRes.data ?? []) as { category: string; monthly_limit: number }[];
        const deadlines = (deadlineRes.data ?? []) as { title: string; kind: string; due_date: string; status: string }[];

        const monthTxns = txns.filter((t) => t.txn_date >= monthStart);
        const monthIncome = monthTxns.filter((t) => t.kind === "income").reduce((s, t) => s + Number(t.amount), 0);
        const monthExpense = monthTxns.filter((t) => t.kind === "expense").reduce((s, t) => s + Number(t.amount), 0);
        const catSpend: Record<string, number> = {};
        for (const t of monthTxns) {
          if (t.kind !== "expense" || !t.category) continue;
          catSpend[t.category] = (catSpend[t.category] ?? 0) + Number(t.amount);
        }
        const topCats = Object.entries(catSpend).sort((a, b) => b[1] - a[1]).slice(0, 8);
        const budgetLines = budgets.map((b) => {
          const spent = catSpend[b.category] ?? 0;
          const pct = b.monthly_limit > 0 ? Math.round((spent / Number(b.monthly_limit)) * 100) : 0;
          return `  - ${b.category}: spent ₹${Math.round(spent).toLocaleString("en-IN")} of ₹${Math.round(Number(b.monthly_limit)).toLocaleString("en-IN")} (${pct}%)${spent > Number(b.monthly_limit) ? " — OVER BUDGET" : ""}`;
        });
        const upcomingDeadlines = deadlines.filter((d) => d.status !== "completed").slice(0, 8);
        const recentTxnLines = monthTxns.slice(0, 15).map((t) => `  - ${t.txn_date} ${t.kind} ₹${Math.round(Number(t.amount)).toLocaleString("en-IN")} · ${t.category ?? "-"}${t.description ? ` · ${t.description}` : ""}`);

        const invoices = (invRes.data ?? []) as { invoice_number: string; customer_name: string; total_amount: number; amount_paid: number; due_date: string | null; status: string }[];
        const today = new Date().toISOString().slice(0, 10);
        const outstanding = invoices.reduce((s, i) => s + Math.max(0, Number(i.total_amount) - Number(i.amount_paid)), 0);
        const overdueInvs = invoices.filter((i) => i.due_date && i.due_date < today && Number(i.amount_paid) < Number(i.total_amount));
        const invLines = invoices.slice(0, 10).map((i) => `  - ${i.invoice_number} · ${i.customer_name} · ₹${Math.round(Number(i.total_amount)).toLocaleString("en-IN")} · paid ₹${Math.round(Number(i.amount_paid)).toLocaleString("en-IN")} · due ${i.due_date ?? "—"} · ${i.status}`);
        const regUpdates = (regRes.data ?? []) as { title: string; category: string | null; summary: string | null; effective_date: string | null; compliance_deadline: string | null; msme_impact_score: number; action_required: boolean }[];
        const regLines = regUpdates.slice(0, 5).map((r) => `  - [${r.category ?? "Reg"}] ${r.title} · impact ${r.msme_impact_score}/100 · effective ${r.effective_date ?? "—"} · deadline ${r.compliance_deadline ?? "—"}${r.action_required ? " · ACTION REQUIRED" : ""}`);

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

        // Fetch real-time official government website content (RAG)
        const { context: govContext, sources: govSources } = await fetchRelevantGovContext(body.message);
        const govBlock = govContext
          ? `\n\n--- OFFICIAL GOVERNMENT SOURCES (fetched live for this question) ---\nThe following content was retrieved directly from official Indian government websites. Use this as your PRIMARY factual source. Always cite these URLs in your Sources section.\n\n${govContext}\n--- END OFFICIAL SOURCES ---\nIMPORTANT: Base your answer strictly on the above official content. Mention source URLs: ${govSources.join(", ")}`
          : "";

        const messages = [
          { role: "system", content: SYSTEM_PROMPT + langInstr + userContext + pageHint + govBlock },
          ...((history ?? []) as { role: string; content: string }[]).map((m) => ({ role: m.role, content: m.content })),
          { role: "user", content: body.message },
        ];

        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) return new Response("Missing GROQ_API_KEY", { status: 500 });

        const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages,
            stream: true,
          }),
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

        const stream = new ReadableStream({
          async start(controller) {
            const reader = upstream.body!.getReader();
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
                    const json = JSON.parse(data);
                    const delta = json.choices?.[0]?.delta?.content;
                    if (delta) {
                      fullText += delta;
                      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "delta", text: delta })}\n\n`));
                    }
                  } catch { /* ignore */ }
                }
              }

              // Compute honesty + sources; persist assistant msg
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
                language: body.language ?? "en",
              });
              // Bump conversation updated_at + set title from first user msg if default
              await supa.from("chat_conversations").update({ updated_at: new Date().toISOString() }).eq("id", body.conversation_id);
              if ((history?.length ?? 0) === 0) {
                const title = body.message.slice(0, 60);
                await supa.from("chat_conversations").update({ title }).eq("id", body.conversation_id);
              }

              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "done", honesty_score: honesty.score, honesty_breakdown: honesty.breakdown, sources })}\n\n`));
              controller.close();
            } catch (err) {
              controller.error(err);
            }
          },
        });

        return new Response(stream, {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive",
          },
        });
      },
    },
  },
});
