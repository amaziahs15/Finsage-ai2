import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    background: "#1e293b",
    primaryColor: "#14b8a6",
    primaryTextColor: "#f1f5f9",
    primaryBorderColor: "#14b8a6",
    lineColor: "#94a3b8",
    secondaryColor: "#0f172a",
    tertiaryColor: "#334155",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
  },
  flowchart: { curve: "basis", padding: 16 },
  securityLevel: "loose",
});

let idCounter = 0;

export function MermaidChart({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [rendered, setRendered] = useState(false);
  const chartId = useRef(`mermaid-${++idCounter}`);

  useEffect(() => {
    if (!ref.current || !code.trim()) return;
    setError(null);
    setRendered(false);
    mermaid
      .render(chartId.current, code.trim())
      .then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
          const svgEl = ref.current.querySelector("svg");
          if (svgEl) {
            svgEl.removeAttribute("height");
            svgEl.style.maxWidth = "100%";
            svgEl.style.height = "auto";
          }
          setRendered(true);
        }
      })
      .catch((err) => setError(String(err?.message ?? err)));
  }, [code]);

  if (error) {
    return (
      <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "0.75rem", padding: "1rem", marginTop: "0.5rem" }}>
        <p style={{ color: "#f87171", fontSize: "0.75rem", margin: "0 0 0.5rem" }}>⚠️ Diagram error — raw code below:</p>
        <pre style={{ color: "#94a3b8", fontSize: "0.75rem", overflowX: "auto", margin: 0 }}>{code}</pre>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "rgba(20,184,166,0.05)",
        border: "1px solid rgba(20,184,166,0.2)",
        borderRadius: "1rem",
        padding: "1.25rem",
        marginTop: "0.75rem",
        overflowX: "auto",
        minHeight: rendered ? undefined : "80px",
        display: "flex",
        alignItems: rendered ? undefined : "center",
        justifyContent: rendered ? undefined : "center",
      }}
    >
      {!rendered && <span style={{ color: "#64748b", fontSize: "0.8rem" }}>⏳ Rendering diagram...</span>}
      <div ref={ref} style={{ width: "100%" }} />
    </div>
  );
}
