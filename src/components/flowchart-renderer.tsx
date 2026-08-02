type StepType = "start" | "end" | "process" | "decision" | "warning" | "result";

type FlowStep =
  | { type: "start" | "end" | "process" | "warning" | "result"; text: string; icon?: string }
  | { type: "decision"; text: string; yes: string; no: string };

type FlowchartData = { title?: string; steps: FlowStep[] };

const TYPE_STYLES: Record<StepType, { bg: string; border: string; color: string; defaultIcon: string }> = {
  start:    { bg: "#14b8a6",         border: "#0d9488",  color: "#fff",    defaultIcon: "🟢" },
  end:      { bg: "#0f172a",         border: "#14b8a6",  color: "#14b8a6", defaultIcon: "✅" },
  process:  { bg: "rgba(255,255,255,0.07)", border: "rgba(255,255,255,0.2)", color: "#f1f5f9", defaultIcon: "📋" },
  decision: { bg: "rgba(234,179,8,0.12)",  border: "#ca8a04",  color: "#fef08a", defaultIcon: "❓" },
  warning:  { bg: "rgba(239,68,68,0.1)",   border: "#ef4444",  color: "#fca5a5", defaultIcon: "⚠️" },
  result:   { bg: "rgba(34,197,94,0.1)",   border: "#22c55e",  color: "#86efac", defaultIcon: "💡" },
};

function Arrow({ label }: { label?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, margin: "2px 0" }}>
      {label && <span style={{ fontSize: "0.7rem", color: "#64748b", background: "#1e293b", padding: "0 6px", borderRadius: 4, marginBottom: 2 }}>{label}</span>}
      <div style={{ width: 2, height: 18, background: "#334155" }} />
      <div style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "8px solid #334155" }} />
    </div>
  );
}

function ProcessBox({ step }: { step: Extract<FlowStep, { type: "start" | "end" | "process" | "warning" | "result" }> }) {
  const s = TYPE_STYLES[step.type];
  const icon = step.icon ?? s.defaultIcon;
  const isStart = step.type === "start";
  const isEnd = step.type === "end";
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      padding: "10px 18px",
      background: s.bg,
      border: `1.5px solid ${s.border}`,
      borderRadius: isStart || isEnd ? 999 : 10,
      color: s.color,
      fontWeight: 600,
      fontSize: "0.875rem",
      maxWidth: 340,
      width: "100%",
      boxSizing: "border-box" as const,
      boxShadow: isStart ? "0 0 12px rgba(20,184,166,0.3)" : "none",
    }}>
      <span style={{ fontSize: "1.1rem" }}>{icon}</span>
      <span>{step.text}</span>
    </div>
  );
}

function DecisionBox({ step }: { step: Extract<FlowStep, { type: "decision" }> }) {
  const s = TYPE_STYLES.decision;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      {/* Diamond shape via rotated square */}
      <div style={{
        position: "relative",
        width: 170, height: 170,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute",
          width: 120, height: 120,
          background: s.bg,
          border: `2px solid ${s.border}`,
          transform: "rotate(45deg)",
          borderRadius: 8,
        }} />
        <span style={{
          position: "relative",
          color: s.color,
          fontWeight: 700,
          fontSize: "0.75rem",
          textAlign: "center",
          maxWidth: 100,
          lineHeight: 1.3,
          zIndex: 1,
          padding: "0 4px",
        }}>❓ {step.text}</span>
      </div>
      {/* YES / NO branches */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 40, marginTop: -10 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ height: 2, width: 40, background: "#22c55e" }} />
            <span style={{ fontSize: "0.7rem", color: "#22c55e", fontWeight: 700 }}>YES</span>
          </div>
          <div style={{ width: 2, height: 16, background: "#334155" }} />
          <div style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "8px solid #334155" }} />
          <div style={{
            padding: "8px 12px", background: "rgba(34,197,94,0.1)",
            border: "1.5px solid #22c55e", borderRadius: 8,
            color: "#86efac", fontSize: "0.8rem", fontWeight: 600,
            textAlign: "center", maxWidth: 130,
          }}>✅ {step.yes}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: "0.7rem", color: "#f87171", fontWeight: 700 }}>NO</span>
            <div style={{ height: 2, width: 40, background: "#ef4444" }} />
          </div>
          <div style={{ width: 2, height: 16, background: "#334155" }} />
          <div style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderTop: "8px solid #334155" }} />
          <div style={{
            padding: "8px 12px", background: "rgba(239,68,68,0.1)",
            border: "1.5px solid #ef4444", borderRadius: 8,
            color: "#fca5a5", fontSize: "0.8rem", fontWeight: 600,
            textAlign: "center", maxWidth: 130,
          }}>❌ {step.no}</div>
        </div>
      </div>
    </div>
  );
}

export function FlowchartRenderer({ raw }: { raw: string }) {
  let data: FlowchartData;
  try {
    data = JSON.parse(raw);
    if (!Array.isArray(data.steps)) throw new Error("no steps");
  } catch {
    return (
      <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "0.75rem", padding: "1rem" }}>
        <p style={{ color: "#f87171", fontSize: "0.8rem", margin: 0 }}>⚠️ Flowchart parse error. Raw output:</p>
        <pre style={{ color: "#94a3b8", fontSize: "0.75rem", marginTop: 8, whiteSpace: "pre-wrap" }}>{raw}</pre>
      </div>
    );
  }

  return (
    <div style={{
      background: "rgba(15,23,42,0.8)",
      border: "1px solid rgba(20,184,166,0.25)",
      borderRadius: "1rem",
      padding: "1.5rem 1rem",
      marginTop: "0.75rem",
      fontFamily: "Inter, sans-serif",
    }}>
      {data.title && (
        <p style={{ textAlign: "center", color: "#14b8a6", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          🗂️ {data.title}
        </p>
      )}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        {data.steps.map((step, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            {i > 0 && step.type !== "decision" && <Arrow />}
            {step.type === "decision" ? (
              <><Arrow /><DecisionBox step={step} /></>
            ) : (
              <ProcessBox step={step as Extract<FlowStep, { type: "start" | "end" | "process" | "warning" | "result" }>} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

