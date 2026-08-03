import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calculator-luG-_i5X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function fmt(n) {
	return n.toLocaleString("en-IN", { maximumFractionDigits: 2 });
}
function ResultRow({ label, value, highlight, big }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			padding: "0.5rem 0",
			borderBottom: "1px solid rgba(255,255,255,0.05)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				fontSize: "0.875rem",
				color: big ? "#e2e8f0" : "#94a3b8",
				fontWeight: big ? 700 : 400
			},
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				fontSize: big ? "1.2rem" : "0.95rem",
				fontWeight: big ? 800 : 600,
				color: highlight || big ? "#14b8a6" : "#e2e8f0"
			},
			children: value
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { marginBottom: "1rem" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			style: {
				display: "block",
				fontSize: "0.75rem",
				fontWeight: 600,
				color: "#94a3b8",
				textTransform: "uppercase",
				letterSpacing: "0.05em",
				marginBottom: "0.4rem"
			},
			children: label
		}), children]
	});
}
function Res({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			background: "rgba(20,184,166,0.08)",
			border: "1px solid rgba(20,184,166,0.25)",
			borderRadius: "1rem",
			padding: "1.25rem",
			marginTop: "0.5rem"
		},
		children
	});
}
function GSTCalc() {
	const [amount, setAmount] = (0, import_react.useState)("10000");
	const [rate, setRate] = (0, import_react.useState)("18");
	const [mode, setMode] = (0, import_react.useState)("ex");
	const amt = parseFloat(amount) || 0;
	const r = parseFloat(rate) || 0;
	let base = 0, gst = 0, total = 0;
	if (mode === "ex") {
		base = amt;
		gst = amt * r / 100;
		total = amt + gst;
	} else {
		total = amt;
		base = amt * 100 / (100 + r);
		gst = total - base;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			style: {
				color: "#f1f5f9",
				marginBottom: "0.25rem",
				fontSize: "1.3rem"
			},
			children: "🧾 GST Calculator"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			style: {
				color: "#64748b",
				fontSize: "0.85rem",
				marginTop: 0,
				marginBottom: "1.5rem"
			},
			children: "Calculate GST amount, CGST & SGST split"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Amount (₹)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "Enter amount",
				value: amount,
				onChange: (e) => setAmount(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "GST Rate",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "ci",
				value: rate,
				onChange: (e) => setRate(e.target.value),
				children: [
					"0",
					"0.1",
					"0.25",
					"3",
					"5",
					"12",
					"18",
					"28"
				].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
					value: v,
					children: [v, "%"]
				}, v))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Mode",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					gap: "0.5rem"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: mode === "ex" ? "tbtn active" : "tbtn",
					onClick: () => setMode("ex"),
					children: "Add GST (Exclusive)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: mode === "in" ? "tbtn active" : "tbtn",
					onClick: () => setMode("in"),
					children: "Extract GST (Inclusive)"
				})]
			})
		}),
		amt > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Res, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Base Amount",
				value: `₹${fmt(base)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "GST Amount",
				value: `₹${fmt(gst)}`,
				highlight: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "CGST (50%)",
				value: `₹${fmt(gst / 2)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "SGST (50%)",
				value: `₹${fmt(gst / 2)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Total",
				value: `₹${fmt(total)}`,
				big: true
			})
		] })
	] });
}
function EMICalc() {
	const [p, setP] = (0, import_react.useState)("500000"), [rate, setRate] = (0, import_react.useState)("10.5"), [months, setMonths] = (0, import_react.useState)("36");
	const P = parseFloat(p) || 0, r = parseFloat(rate) || 0, n = parseFloat(months) || 0;
	const mr = r / 12 / 100;
	const emi = P && r && n ? P * mr * Math.pow(1 + mr, n) / (Math.pow(1 + mr, n) - 1) : 0;
	const total = emi * n, interest = total - P;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			style: {
				color: "#f1f5f9",
				marginBottom: "0.25rem",
				fontSize: "1.3rem"
			},
			children: "🏦 EMI Calculator"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			style: {
				color: "#64748b",
				fontSize: "0.85rem",
				marginTop: 0,
				marginBottom: "1.5rem"
			},
			children: "MUDRA loans, business loans, term loans"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Loan Amount (₹)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "e.g. 500000",
				value: p,
				onChange: (e) => setP(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Annual Interest Rate (%)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "e.g. 10.5",
				value: rate,
				onChange: (e) => setRate(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Tenure (months)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "e.g. 36",
				value: months,
				onChange: (e) => setMonths(e.target.value)
			})
		}),
		emi > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Res, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Monthly EMI",
				value: `₹${fmt(emi)}`,
				big: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Total Interest",
				value: `₹${fmt(interest)}`,
				highlight: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Total Payment",
				value: `₹${fmt(total)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Principal",
				value: `₹${fmt(P)}`
			})
		] })
	] });
}
function TDSCalc() {
	const SECS = [
		{
			l: "194C – Contractor (Individual/HUF)",
			r: 1
		},
		{
			l: "194C – Contractor (Company)",
			r: 2
		},
		{
			l: "194J – Professional/Technical",
			r: 10
		},
		{
			l: "194H – Commission/Brokerage",
			r: 5
		},
		{
			l: "194I – Rent (Land/Building)",
			r: 10
		},
		{
			l: "194I – Rent (Plant/Machinery)",
			r: 2
		},
		{
			l: "194A – Interest (Bank)",
			r: 10
		},
		{
			l: "194D – Insurance Commission",
			r: 5
		}
	];
	const [amt, setAmt] = (0, import_react.useState)("50000"), [si, setSi] = (0, import_react.useState)(0);
	const a = parseFloat(amt) || 0, rate = SECS[si].r, tds = a * rate / 100, net = a - tds;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			style: {
				color: "#f1f5f9",
				marginBottom: "0.25rem",
				fontSize: "1.3rem"
			},
			children: "📋 TDS Calculator"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			style: {
				color: "#64748b",
				fontSize: "0.85rem",
				marginTop: 0,
				marginBottom: "1.5rem"
			},
			children: "TDS deduction as per Income Tax Act sections"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Payment Amount (₹)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "Gross payment",
				value: amt,
				onChange: (e) => setAmt(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "TDS Section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "ci",
				value: si,
				onChange: (e) => setSi(Number(e.target.value)),
				children: SECS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
					value: i,
					children: [
						s.l,
						" — ",
						s.r,
						"%"
					]
				}, i))
			})
		}),
		a > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Res, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Gross Amount",
				value: `₹${fmt(a)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: `TDS @ ${rate}%`,
				value: `₹${fmt(tds)}`,
				highlight: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Net Payment to Payee",
				value: `₹${fmt(net)}`,
				big: true
			})
		] })
	] });
}
function ProfitCalc() {
	const [rev, setRev] = (0, import_react.useState)("1000000"), [cogs, setCogs] = (0, import_react.useState)("400000"), [exp, setExp] = (0, import_react.useState)("200000"), [tax, setTax] = (0, import_react.useState)("25");
	const R = parseFloat(rev) || 0, C = parseFloat(cogs) || 0, E = parseFloat(exp) || 0, T = parseFloat(tax) || 0;
	const gross = R - C, gm = R ? gross / R * 100 : 0, ebit = gross - E, taxAmt = ebit > 0 ? ebit * T / 100 : 0, net = ebit - taxAmt, nm = R ? net / R * 100 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			style: {
				color: "#f1f5f9",
				marginBottom: "0.25rem",
				fontSize: "1.3rem"
			},
			children: "📈 Profit / Loss Calculator"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			style: {
				color: "#64748b",
				fontSize: "0.85rem",
				marginTop: 0,
				marginBottom: "1.5rem"
			},
			children: "Gross profit, EBIT and net profit for your business"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Revenue / Sales (₹)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "Total sales",
				value: rev,
				onChange: (e) => setRev(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Cost of Goods Sold (₹)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "Direct costs",
				value: cogs,
				onChange: (e) => setCogs(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Operating Expenses (₹)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "Rent, salaries, utilities",
				value: exp,
				onChange: (e) => setExp(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Tax Rate (%)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "e.g. 25",
				value: tax,
				onChange: (e) => setTax(e.target.value)
			})
		}),
		R > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Res, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Gross Profit",
				value: `₹${fmt(gross)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Gross Margin",
				value: `${gm.toFixed(1)}%`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "EBIT",
				value: `₹${fmt(ebit)}`,
				highlight: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Tax Payable",
				value: `₹${fmt(taxAmt)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Net Profit",
				value: `₹${fmt(net)}`,
				big: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Net Margin",
				value: `${nm.toFixed(1)}%`
			})
		] })
	] });
}
function CompoundCalc() {
	const [p, setP] = (0, import_react.useState)("100000"), [r, setR] = (0, import_react.useState)("7.5"), [t, setT] = (0, import_react.useState)("5"), [n, setN] = (0, import_react.useState)("12");
	const P = parseFloat(p) || 0, rate = parseFloat(r) || 0, yrs = parseFloat(t) || 0, freq = parseFloat(n) || 12;
	const A = P && rate && yrs ? P * Math.pow(1 + rate / (freq * 100), freq * yrs) : 0;
	const interest = A - P;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			style: {
				color: "#f1f5f9",
				marginBottom: "0.25rem",
				fontSize: "1.3rem"
			},
			children: "💹 Compound Interest"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			style: {
				color: "#64748b",
				fontSize: "0.85rem",
				marginTop: 0,
				marginBottom: "1.5rem"
			},
			children: "Savings, FD, MSME investment returns"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Principal (₹)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "Initial investment",
				value: p,
				onChange: (e) => setP(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Annual Rate (%)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "e.g. 7.5",
				value: r,
				onChange: (e) => setR(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Duration (years)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "ci",
				type: "number",
				placeholder: "e.g. 5",
				value: t,
				onChange: (e) => setT(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Compounding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "ci",
				value: n,
				onChange: (e) => setN(e.target.value),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "1",
						children: "Annually"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "2",
						children: "Semi-annually"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "4",
						children: "Quarterly"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "12",
						children: "Monthly"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "365",
						children: "Daily"
					})
				]
			})
		}),
		A > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Res, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Principal",
				value: `₹${fmt(P)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Interest Earned",
				value: `₹${fmt(interest)}`,
				highlight: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultRow, {
				label: "Total Amount",
				value: `₹${fmt(A)}`,
				big: true
			})
		] })
	] });
}
var TABS = [
	{
		id: "gst",
		label: "GST",
		emoji: "🧾"
	},
	{
		id: "emi",
		label: "EMI / Loan",
		emoji: "🏦"
	},
	{
		id: "tds",
		label: "TDS",
		emoji: "📋"
	},
	{
		id: "profit",
		label: "Profit / Loss",
		emoji: "📈"
	},
	{
		id: "compound",
		label: "Compound Interest",
		emoji: "💹"
	}
];
function CalculatorPage() {
	const [tab, setTab] = (0, import_react.useState)("gst");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			minHeight: "100vh",
			background: "linear-gradient(135deg,#0f172a 0%,#1e293b 60%,#0f172a 100%)",
			padding: "2rem 1rem",
			fontFamily: "Inter,sans-serif"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .ci{width:100%;padding:0.65rem 1rem;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:0.75rem;color:#f1f5f9;font-size:1rem;outline:none;box-sizing:border-box;transition:border-color 0.2s;}
        .ci:focus{border-color:#14b8a6;}
        .ci option{background:#1e293b;}
        .tbtn{flex:1;padding:0.45rem 0.75rem;border-radius:0.5rem;border:1px solid rgba(255,255,255,0.15);background:transparent;color:#94a3b8;font-size:0.8rem;cursor:pointer;transition:all 0.2s;}
        .tbtn.active,.tbtn:hover{background:#14b8a6;color:#fff;border-color:#14b8a6;}
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					textAlign: "center",
					marginBottom: "2rem"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					style: {
						fontSize: "2rem",
						fontWeight: 800,
						color: "#f1f5f9",
						margin: 0
					},
					children: "🧮 Finance Calculator"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						color: "#94a3b8",
						marginTop: "0.5rem"
					},
					children: "GST · EMI · TDS · Profit/Loss · Compound Interest"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					display: "flex",
					gap: "0.5rem",
					justifyContent: "center",
					flexWrap: "wrap",
					marginBottom: "2rem"
				},
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setTab(t.id),
					style: {
						display: "flex",
						alignItems: "center",
						gap: "0.4rem",
						padding: "0.5rem 1.1rem",
						borderRadius: "9999px",
						border: `1px solid ${tab === t.id ? "#14b8a6" : "rgba(255,255,255,0.1)"}`,
						background: tab === t.id ? "#14b8a6" : "rgba(255,255,255,0.05)",
						color: tab === t.id ? "#fff" : "#94a3b8",
						fontSize: "0.85rem",
						fontWeight: 500,
						cursor: "pointer",
						transition: "all 0.2s"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.emoji }), t.label]
				}, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					maxWidth: "600px",
					margin: "0 auto",
					background: "rgba(255,255,255,0.05)",
					border: "1px solid rgba(255,255,255,0.1)",
					borderRadius: "1.5rem",
					backdropFilter: "blur(12px)",
					padding: "2rem"
				},
				children: [
					tab === "gst" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GSTCalc, {}),
					tab === "emi" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EMICalc, {}),
					tab === "tds" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TDSCalc, {}),
					tab === "profit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfitCalc, {}),
					tab === "compound" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompoundCalc, {})
				]
			})
		]
	});
}
//#endregion
export { CalculatorPage as component };
