import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_authenticated/calculator")({
  component: CalculatorPage,
});

type Tab = "gst" | "emi" | "tds" | "profit" | "compound";

function fmt(n: number) {
  return n.toLocaleString("en-IN", { maximumFractionDigits: 2 });
}

function ResultRow({ label, value, highlight, big }: { label: string; value: string; highlight?: boolean; big?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <span style={{ fontSize: "0.875rem", color: big ? "#e2e8f0" : "#94a3b8", fontWeight: big ? 700 : 400 }}>{label}</span>
      <span style={{ fontSize: big ? "1.2rem" : "0.95rem", fontWeight: big ? 800 : 600, color: highlight || big ? "#14b8a6" : "#e2e8f0" }}>{value}</span>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.4rem" }}>{label}</label>
      {children}
    </div>
  );
}

function Res({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "rgba(20,184,166,0.08)", border: "1px solid rgba(20,184,166,0.25)", borderRadius: "1rem", padding: "1.25rem", marginTop: "0.5rem" }}>
      {children}
    </div>
  );
}

function GSTCalc() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");
  const [mode, setMode] = useState<"ex" | "in">("ex");
  const amt = parseFloat(amount) || 0;
  const r = parseFloat(rate) || 0;
  let base = 0, gst = 0, total = 0;
  if (mode === "ex") { base = amt; gst = amt * r / 100; total = amt + gst; }
  else { total = amt; base = amt * 100 / (100 + r); gst = total - base; }
  return (
    <div>
      <h3 style={{ color: "#f1f5f9", marginBottom: "0.25rem", fontSize: "1.3rem" }}>🧾 GST Calculator</h3>
      <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: 0, marginBottom: "1.5rem" }}>Calculate GST amount, CGST &amp; SGST split</p>
      <Field label="Amount (₹)"><input className="ci" type="number" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.target.value)} /></Field>
      <Field label="GST Rate">
        <select className="ci" value={rate} onChange={e => setRate(e.target.value)}>
          {["0", "0.1", "0.25", "3", "5", "12", "18", "28"].map(v => <option key={v} value={v}>{v}%</option>)}
        </select>
      </Field>
      <Field label="Mode">
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button className={mode === "ex" ? "tbtn active" : "tbtn"} onClick={() => setMode("ex")}>Add GST (Exclusive)</button>
          <button className={mode === "in" ? "tbtn active" : "tbtn"} onClick={() => setMode("in")}>Extract GST (Inclusive)</button>
        </div>
      </Field>
      {amt > 0 && <Res><ResultRow label="Base Amount" value={`₹${fmt(base)}`} /><ResultRow label="GST Amount" value={`₹${fmt(gst)}`} highlight /><ResultRow label="CGST (50%)" value={`₹${fmt(gst / 2)}`} /><ResultRow label="SGST (50%)" value={`₹${fmt(gst / 2)}`} /><ResultRow label="Total" value={`₹${fmt(total)}`} big /></Res>}
    </div>
  );
}

function EMICalc() {
  const [p, setP] = useState(""), [rate, setRate] = useState(""), [months, setMonths] = useState("");
  const P = parseFloat(p) || 0, r = parseFloat(rate) || 0, n = parseFloat(months) || 0;
  const mr = r / 12 / 100;
  const emi = P && r && n ? P * mr * Math.pow(1 + mr, n) / (Math.pow(1 + mr, n) - 1) : 0;
  const total = emi * n, interest = total - P;
  return (
    <div>
      <h3 style={{ color: "#f1f5f9", marginBottom: "0.25rem", fontSize: "1.3rem" }}>🏦 EMI Calculator</h3>
      <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: 0, marginBottom: "1.5rem" }}>MUDRA loans, business loans, term loans</p>
      <Field label="Loan Amount (₹)"><input className="ci" type="number" placeholder="e.g. 500000" value={p} onChange={e => setP(e.target.value)} /></Field>
      <Field label="Annual Interest Rate (%)"><input className="ci" type="number" placeholder="e.g. 10.5" value={rate} onChange={e => setRate(e.target.value)} /></Field>
      <Field label="Tenure (months)"><input className="ci" type="number" placeholder="e.g. 36" value={months} onChange={e => setMonths(e.target.value)} /></Field>
      {emi > 0 && <Res><ResultRow label="Monthly EMI" value={`₹${fmt(emi)}`} big /><ResultRow label="Total Interest" value={`₹${fmt(interest)}`} highlight /><ResultRow label="Total Payment" value={`₹${fmt(total)}`} /><ResultRow label="Principal" value={`₹${fmt(P)}`} /></Res>}
    </div>
  );
}

function TDSCalc() {
  const SECS = [
    { l: "194C – Contractor (Individual/HUF)", r: 1 }, { l: "194C – Contractor (Company)", r: 2 },
    { l: "194J – Professional/Technical", r: 10 }, { l: "194H – Commission/Brokerage", r: 5 },
    { l: "194I – Rent (Land/Building)", r: 10 }, { l: "194I – Rent (Plant/Machinery)", r: 2 },
    { l: "194A – Interest (Bank)", r: 10 }, { l: "194D – Insurance Commission", r: 5 },
  ];
  const [amt, setAmt] = useState(""), [si, setSi] = useState(0);
  const a = parseFloat(amt) || 0, rate = SECS[si].r, tds = a * rate / 100, net = a - tds;
  return (
    <div>
      <h3 style={{ color: "#f1f5f9", marginBottom: "0.25rem", fontSize: "1.3rem" }}>📋 TDS Calculator</h3>
      <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: 0, marginBottom: "1.5rem" }}>TDS deduction as per Income Tax Act sections</p>
      <Field label="Payment Amount (₹)"><input className="ci" type="number" placeholder="Gross payment" value={amt} onChange={e => setAmt(e.target.value)} /></Field>
      <Field label="TDS Section"><select className="ci" value={si} onChange={e => setSi(Number(e.target.value))}>{SECS.map((s, i) => <option key={i} value={i}>{s.l} — {s.r}%</option>)}</select></Field>
      {a > 0 && <Res><ResultRow label="Gross Amount" value={`₹${fmt(a)}`} /><ResultRow label={`TDS @ ${rate}%`} value={`₹${fmt(tds)}`} highlight /><ResultRow label="Net Payment to Payee" value={`₹${fmt(net)}`} big /></Res>}
    </div>
  );
}

function ProfitCalc() {
  const [rev, setRev] = useState(""), [cogs, setCogs] = useState(""), [exp, setExp] = useState(""), [tax, setTax] = useState("25");
  const R = parseFloat(rev) || 0, C = parseFloat(cogs) || 0, E = parseFloat(exp) || 0, T = parseFloat(tax) || 0;
  const gross = R - C, gm = R ? gross / R * 100 : 0, ebit = gross - E, taxAmt = ebit > 0 ? ebit * T / 100 : 0, net = ebit - taxAmt, nm = R ? net / R * 100 : 0;
  return (
    <div>
      <h3 style={{ color: "#f1f5f9", marginBottom: "0.25rem", fontSize: "1.3rem" }}>📈 Profit / Loss Calculator</h3>
      <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: 0, marginBottom: "1.5rem" }}>Gross profit, EBIT and net profit for your business</p>
      <Field label="Revenue / Sales (₹)"><input className="ci" type="number" placeholder="Total sales" value={rev} onChange={e => setRev(e.target.value)} /></Field>
      <Field label="Cost of Goods Sold (₹)"><input className="ci" type="number" placeholder="Direct costs" value={cogs} onChange={e => setCogs(e.target.value)} /></Field>
      <Field label="Operating Expenses (₹)"><input className="ci" type="number" placeholder="Rent, salaries, utilities" value={exp} onChange={e => setExp(e.target.value)} /></Field>
      <Field label="Tax Rate (%)"><input className="ci" type="number" placeholder="e.g. 25" value={tax} onChange={e => setTax(e.target.value)} /></Field>
      {R > 0 && <Res><ResultRow label="Gross Profit" value={`₹${fmt(gross)}`} /><ResultRow label="Gross Margin" value={`${gm.toFixed(1)}%`} /><ResultRow label="EBIT" value={`₹${fmt(ebit)}`} highlight /><ResultRow label="Tax Payable" value={`₹${fmt(taxAmt)}`} /><ResultRow label="Net Profit" value={`₹${fmt(net)}`} big /><ResultRow label="Net Margin" value={`${nm.toFixed(1)}%`} /></Res>}
    </div>
  );
}

function CompoundCalc() {
  const [p, setP] = useState(""), [r, setR] = useState(""), [t, setT] = useState(""), [n, setN] = useState("12");
  const P = parseFloat(p) || 0, rate = parseFloat(r) || 0, yrs = parseFloat(t) || 0, freq = parseFloat(n) || 12;
  const A = P && rate && yrs ? P * Math.pow(1 + rate / (freq * 100), freq * yrs) : 0;
  const interest = A - P;
  return (
    <div>
      <h3 style={{ color: "#f1f5f9", marginBottom: "0.25rem", fontSize: "1.3rem" }}>💹 Compound Interest</h3>
      <p style={{ color: "#64748b", fontSize: "0.85rem", marginTop: 0, marginBottom: "1.5rem" }}>Savings, FD, MSME investment returns</p>
      <Field label="Principal (₹)"><input className="ci" type="number" placeholder="Initial investment" value={p} onChange={e => setP(e.target.value)} /></Field>
      <Field label="Annual Rate (%)"><input className="ci" type="number" placeholder="e.g. 7.5" value={r} onChange={e => setR(e.target.value)} /></Field>
      <Field label="Duration (years)"><input className="ci" type="number" placeholder="e.g. 5" value={t} onChange={e => setT(e.target.value)} /></Field>
      <Field label="Compounding">
        <select className="ci" value={n} onChange={e => setN(e.target.value)}>
          <option value="1">Annually</option><option value="2">Semi-annually</option>
          <option value="4">Quarterly</option><option value="12">Monthly</option><option value="365">Daily</option>
        </select>
      </Field>
      {A > 0 && <Res><ResultRow label="Principal" value={`₹${fmt(P)}`} /><ResultRow label="Interest Earned" value={`₹${fmt(interest)}`} highlight /><ResultRow label="Total Amount" value={`₹${fmt(A)}`} big /></Res>}
    </div>
  );
}

const TABS: { id: Tab; label: string; emoji: string }[] = [
  { id: "gst", label: "GST", emoji: "🧾" },
  { id: "emi", label: "EMI / Loan", emoji: "🏦" },
  { id: "tds", label: "TDS", emoji: "📋" },
  { id: "profit", label: "Profit / Loss", emoji: "📈" },
  { id: "compound", label: "Compound Interest", emoji: "💹" },
];

function CalculatorPage() {
  const [tab, setTab] = useState<Tab>("gst");
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0f172a 0%,#1e293b 60%,#0f172a 100%)", padding: "2rem 1rem", fontFamily: "Inter,sans-serif" }}>
      <style>{`
        .ci{width:100%;padding:0.65rem 1rem;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:0.75rem;color:#f1f5f9;font-size:1rem;outline:none;box-sizing:border-box;transition:border-color 0.2s;}
        .ci:focus{border-color:#14b8a6;}
        .ci option{background:#1e293b;}
        .tbtn{flex:1;padding:0.45rem 0.75rem;border-radius:0.5rem;border:1px solid rgba(255,255,255,0.15);background:transparent;color:#94a3b8;font-size:0.8rem;cursor:pointer;transition:all 0.2s;}
        .tbtn.active,.tbtn:hover{background:#14b8a6;color:#fff;border-color:#14b8a6;}
      `}</style>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#f1f5f9", margin: 0 }}>🧮 Finance Calculator</h1>
        <p style={{ color: "#94a3b8", marginTop: "0.5rem" }}>GST · EMI · TDS · Profit/Loss · Compound Interest</p>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1.1rem", borderRadius: "9999px", border: `1px solid ${tab === t.id ? "#14b8a6" : "rgba(255,255,255,0.1)"}`, background: tab === t.id ? "#14b8a6" : "rgba(255,255,255,0.05)", color: tab === t.id ? "#fff" : "#94a3b8", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", transition: "all 0.2s" }}>
            <span>{t.emoji}</span>{t.label}
          </button>
        ))}
      </div>
      <div style={{ maxWidth: "600px", margin: "0 auto", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1.5rem", backdropFilter: "blur(12px)", padding: "2rem" }}>
        {tab === "gst" && <GSTCalc />}
        {tab === "emi" && <EMICalc />}
        {tab === "tds" && <TDSCalc />}
        {tab === "profit" && <ProfitCalc />}
        {tab === "compound" && <CompoundCalc />}
      </div>
    </div>
  );
}
