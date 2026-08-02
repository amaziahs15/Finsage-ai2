import { useEffect, useState } from "react";
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
  flowchart: { curve: "basis", padding: 20 },
  securityLevel: "loose",
});

let counter = 0;

export function MermaidChart({ code }: { code: string }) {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = `mc-${++counter}-${Date.now()}`;
    setSvg("");
    setError(null);
    mermaid
      .render(id, code.trim())
      .then(({ svg: out }) => {
        // Make SVG responsive
        const responsive = out
          .replace(/height="[^"]*"/, "")
          .replace(/<svg /, '<svg style="max-width:100%;height:auto;" ');
        setSvg(responsive);
      })
      .catch((err) => {
        setError(String(err?.message ?? err));
      });
  }, [code]);

  if (error) {
    return (
      <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "0.75rem", padding: "1rem", marginTop: "0.5rem" }}>
        <p style={{ color: "#f87171", fontSize: "0.75rem", margin: "0 0 0.5rem 0", fontWeight: 600 }}>⚠️ Diagram could not render. Showing source:</p>
        <pre style={{ color: "#94a3b8", fontSize: "0.75rem", overflowX: "auto", margin: 0, whiteSpace: "pre-wrap" }}>{code}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "1rem", color: "#64748b", fontSize: "0.8rem" }}>
        <span style={{ display: "inline-block", width: "0.75rem", height: "0.75rem", border: "2px solid #14b8a6", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        Rendering diagram...
        <style>{"@keyframes spin{to{transform:rotate(360deg)}}"}</style>
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
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
