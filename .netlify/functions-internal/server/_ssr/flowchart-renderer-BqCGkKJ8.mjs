import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flowchart-renderer-BqCGkKJ8.js
var import_jsx_runtime = require_jsx_runtime();
var TYPE_STYLES = {
	start: {
		bg: "#14b8a6",
		border: "#0d9488",
		color: "#fff",
		defaultIcon: "🟢"
	},
	end: {
		bg: "#0f172a",
		border: "#14b8a6",
		color: "#14b8a6",
		defaultIcon: "✅"
	},
	process: {
		bg: "rgba(255,255,255,0.07)",
		border: "rgba(255,255,255,0.2)",
		color: "#f1f5f9",
		defaultIcon: "📋"
	},
	decision: {
		bg: "rgba(234,179,8,0.12)",
		border: "#ca8a04",
		color: "#fef08a",
		defaultIcon: "❓"
	},
	warning: {
		bg: "rgba(239,68,68,0.1)",
		border: "#ef4444",
		color: "#fca5a5",
		defaultIcon: "⚠️"
	},
	result: {
		bg: "rgba(34,197,94,0.1)",
		border: "#22c55e",
		color: "#86efac",
		defaultIcon: "💡"
	}
};
function Arrow({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: 0,
			margin: "2px 0"
		},
		children: [
			label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					fontSize: "0.7rem",
					color: "#64748b",
					background: "#1e293b",
					padding: "0 6px",
					borderRadius: 4,
					marginBottom: 2
				},
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				width: 2,
				height: 18,
				background: "#334155"
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				width: 0,
				height: 0,
				borderLeft: "6px solid transparent",
				borderRight: "6px solid transparent",
				borderTop: "8px solid #334155"
			} })
		]
	});
}
function ProcessBox({ step }) {
	const s = TYPE_STYLES[step.type];
	const icon = step.icon ?? s.defaultIcon;
	const isStart = step.type === "start";
	const isEnd = step.type === "end";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			alignItems: "center",
			gap: 10,
			padding: "10px 18px",
			background: s.bg,
			border: `1.5px solid ${s.border}`,
			borderRadius: isStart || isEnd ? 999 : 10,
			color: s.color,
			fontWeight: 600,
			fontSize: "0.875rem",
			maxWidth: 340,
			width: "100%",
			boxSizing: "border-box",
			boxShadow: isStart ? "0 0 12px rgba(20,184,166,0.3)" : "none"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: { fontSize: "1.1rem" },
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.text })]
	});
}
function DecisionBox({ step }) {
	const s = TYPE_STYLES.decision;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			width: "100%"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				position: "relative",
				width: 170,
				height: 170,
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				position: "absolute",
				width: 120,
				height: 120,
				background: s.bg,
				border: `2px solid ${s.border}`,
				transform: "rotate(45deg)",
				borderRadius: 8
			} }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				style: {
					position: "relative",
					color: s.color,
					fontWeight: 700,
					fontSize: "0.75rem",
					textAlign: "center",
					maxWidth: 100,
					lineHeight: 1.3,
					zIndex: 1,
					padding: "0 4px"
				},
				children: ["❓ ", step.text]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				display: "flex",
				alignItems: "flex-start",
				gap: 40,
				marginTop: -10
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 4
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 4
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							height: 2,
							width: 40,
							background: "#22c55e"
						} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: "0.7rem",
								color: "#22c55e",
								fontWeight: 700
							},
							children: "YES"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						width: 2,
						height: 16,
						background: "#334155"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						width: 0,
						height: 0,
						borderLeft: "6px solid transparent",
						borderRight: "6px solid transparent",
						borderTop: "8px solid #334155"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							padding: "8px 12px",
							background: "rgba(34,197,94,0.1)",
							border: "1.5px solid #22c55e",
							borderRadius: 8,
							color: "#86efac",
							fontSize: "0.8rem",
							fontWeight: 600,
							textAlign: "center",
							maxWidth: 130
						},
						children: ["✅ ", step.yes]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 4
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							gap: 4
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								fontSize: "0.7rem",
								color: "#f87171",
								fontWeight: 700
							},
							children: "NO"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
							height: 2,
							width: 40,
							background: "#ef4444"
						} })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						width: 2,
						height: 16,
						background: "#334155"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						width: 0,
						height: 0,
						borderLeft: "6px solid transparent",
						borderRight: "6px solid transparent",
						borderTop: "8px solid #334155"
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							padding: "8px 12px",
							background: "rgba(239,68,68,0.1)",
							border: "1.5px solid #ef4444",
							borderRadius: 8,
							color: "#fca5a5",
							fontSize: "0.8rem",
							fontWeight: 600,
							textAlign: "center",
							maxWidth: 130
						},
						children: ["❌ ", step.no]
					})
				]
			})]
		})]
	});
}
function FlowchartRenderer({ raw }) {
	let data;
	try {
		data = JSON.parse(raw);
		if (!Array.isArray(data.steps)) throw new Error("no steps");
	} catch {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: {
				background: "rgba(239,68,68,0.1)",
				border: "1px solid rgba(239,68,68,0.3)",
				borderRadius: "0.75rem",
				padding: "1rem"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					color: "#f87171",
					fontSize: "0.8rem",
					margin: 0
				},
				children: "⚠️ Flowchart parse error. Raw output:"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				style: {
					color: "#94a3b8",
					fontSize: "0.75rem",
					marginTop: 8,
					whiteSpace: "pre-wrap"
				},
				children: raw
			})]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "rgba(15,23,42,0.8)",
			border: "1px solid rgba(20,184,166,0.25)",
			borderRadius: "1rem",
			padding: "1.5rem 1rem",
			marginTop: "0.75rem",
			fontFamily: "Inter, sans-serif"
		},
		children: [data.title && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			style: {
				textAlign: "center",
				color: "#14b8a6",
				fontWeight: 700,
				fontSize: "0.9rem",
				marginBottom: "1rem",
				letterSpacing: "0.05em",
				textTransform: "uppercase"
			},
			children: ["🗂️ ", data.title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 0
			},
			children: data.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "100%"
				},
				children: [i > 0 && step.type !== "decision" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}), step.type === "decision" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionBox, { step })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessBox, { step })]
			}, i))
		})]
	});
}
//#endregion
export { FlowchartRenderer as t };
