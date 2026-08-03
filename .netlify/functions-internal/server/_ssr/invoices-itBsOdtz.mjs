import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as stringType, n as numberType, r as objectType } from "../_libs/zod.mjs";
import { D as IndianRupee, O as FileText, j as Download } from "../_libs/lucide-react.mjs";
import { c as createServerFn } from "./createServerFn-BFFE07zL.mjs";
import { n as useServerFn, t as createSsrRpc } from "./createSsrRpc-D9KmXbHC.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BwdutfJC.mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as require_jspdf_node_min } from "../_libs/jspdf.mjs";
import { t as autoTable } from "../_libs/jspdf-autotable.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invoices-itBsOdtz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_jspdf_node_min = /* @__PURE__ */ __toESM(require_jspdf_node_min());
var CreateInvoiceInput = objectType({
	invoice_number: stringType().min(1).max(50),
	customer_name: stringType().min(1).max(200),
	customer_gstin: stringType().max(20).optional().nullable(),
	hsn_sac_code: stringType().max(20).optional().nullable(),
	description: stringType().max(1e3).optional().nullable(),
	taxable_amount: numberType().nonnegative(),
	cgst_amount: numberType().nonnegative().default(0),
	sgst_amount: numberType().nonnegative().default(0),
	igst_amount: numberType().nonnegative().default(0),
	due_date: stringType().optional().nullable(),
	payment_terms: stringType().max(100).optional().nullable()
});
var createInvoice = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => CreateInvoiceInput.parse(d)).handler(createSsrRpc("bc92153048ecf7b200819d56325f17405f4032922d9b3ebc1bf5dac184447e53"));
var listInvoices = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("90311e0af602ce86c18303ae64b315392727e7737bdff673b7999f1e93d7b01b"));
var markInvoicePaid = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	id: stringType().uuid(),
	amount: numberType().nonnegative()
}).parse(d)).handler(createSsrRpc("2e17ff0434716d6bb20a43b7fba1486f24910173febcfc60d23a1f4216d551b7"));
var arSummary = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("8eb2779d255067ec908e1388e25eda06f4883e7e2499e8a22771a98a5de1ee10"));
function inr(n) {
	return "Rs. " + Number(n).toLocaleString("en-IN", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}
function amountInWords(num) {
	const n = Math.round(Number(num) * 100) / 100;
	const rupees = Math.floor(n);
	const paise = Math.round((n - rupees) * 100);
	const a = [
		"",
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
		"Ten",
		"Eleven",
		"Twelve",
		"Thirteen",
		"Fourteen",
		"Fifteen",
		"Sixteen",
		"Seventeen",
		"Eighteen",
		"Nineteen"
	];
	const b = [
		"",
		"",
		"Twenty",
		"Thirty",
		"Forty",
		"Fifty",
		"Sixty",
		"Seventy",
		"Eighty",
		"Ninety"
	];
	const two = (x) => x < 20 ? a[x] : b[Math.floor(x / 10)] + (x % 10 ? " " + a[x % 10] : "");
	const three = (x) => {
		const h = Math.floor(x / 100);
		const r = x % 100;
		return (h ? a[h] + " Hundred" + (r ? " and " : "") : "") + (r ? two(r) : "");
	};
	const inWords = (x) => {
		if (x === 0) return "Zero";
		let s = "";
		const cr = Math.floor(x / 1e7);
		x %= 1e7;
		const lk = Math.floor(x / 1e5);
		x %= 1e5;
		const th = Math.floor(x / 1e3);
		x %= 1e3;
		if (cr) s += two(cr) + " Crore ";
		if (lk) s += two(lk) + " Lakh ";
		if (th) s += two(th) + " Thousand ";
		if (x) s += three(x);
		return s.trim();
	};
	let out = "Rupees " + inWords(rupees);
	if (paise) out += " and " + inWords(paise) + " Paise";
	return out + " Only";
}
function downloadInvoicePdf(inv) {
	const doc = new import_jspdf_node_min.default({
		unit: "mm",
		format: "a4"
	});
	const W = doc.internal.pageSize.getWidth();
	const M = 12;
	const isIntra = inv.cgst_amount > 0 || inv.sgst_amount > 0;
	const gstTotal = inv.cgst_amount + inv.sgst_amount + inv.igst_amount;
	doc.setLineWidth(.6);
	doc.rect(M, M, W - M * 2, 273);
	doc.setFillColor(15, 23, 42);
	doc.rect(M, M, W - M * 2, 12, "F");
	doc.setTextColor(255, 255, 255);
	doc.setFont("helvetica", "bold");
	doc.setFontSize(14);
	doc.text("TAX INVOICE", W / 2, 20, { align: "center" });
	doc.setFontSize(8);
	doc.setFont("helvetica", "normal");
	doc.text("(Original for Recipient)", W - M - 2, 20, { align: "right" });
	doc.text("Rule 46 of CGST Rules, 2017", 14, 20);
	let y = 24;
	doc.setDrawColor(0);
	doc.setTextColor(0, 0, 0);
	doc.rect(M, y, W - M * 2, 22);
	doc.setFont("helvetica", "bold");
	doc.setFontSize(12);
	doc.text(inv.business_name || "Your Business", 15, y + 6);
	doc.setFont("helvetica", "normal");
	doc.setFontSize(9);
	doc.text(`GSTIN: ${inv.business_gstin || "—"}`, 15, y + 12);
	doc.text("State: India", 15, y + 17);
	doc.text("Generated via FinSage AI", W - M - 3, y + 17, { align: "right" });
	y += 22;
	doc.rect(M, y, (W - M * 2) / 2, 16);
	doc.rect(M + (W - M * 2) / 2, y, (W - M * 2) / 2, 16);
	doc.setFont("helvetica", "bold");
	doc.setFontSize(9);
	doc.text("Invoice No.", 15, y + 6);
	doc.text("Invoice Date", M + (W - M * 2) / 2 + 3, y + 6);
	doc.setFont("helvetica", "normal");
	doc.text(inv.invoice_number, 15, y + 12);
	doc.text(new Date(inv.created_at).toLocaleDateString("en-IN"), M + (W - M * 2) / 2 + 3, y + 12);
	y += 16;
	doc.rect(M, y, W - M * 2, 24);
	doc.setFillColor(240, 240, 240);
	doc.rect(M, y, W - M * 2, 6, "F");
	doc.setFont("helvetica", "bold");
	doc.setFontSize(9);
	doc.text("BILL TO / DETAILS OF RECEIVER", 15, y + 4.2);
	doc.setFont("helvetica", "normal");
	doc.setFontSize(10);
	doc.text(inv.customer_name, 15, y + 12);
	doc.setFontSize(9);
	doc.text(`GSTIN: ${inv.customer_gstin || "Unregistered"}`, 15, y + 18);
	doc.text(`Due Date: ${inv.due_date || "—"}`, W - M - 3, y + 18, { align: "right" });
	y += 24;
	const head = isIntra ? [[
		"#",
		"Description",
		"HSN/SAC",
		"Taxable (Rs.)",
		"CGST",
		"SGST",
		"Total"
	]] : [[
		"#",
		"Description",
		"HSN/SAC",
		"Taxable (Rs.)",
		"IGST",
		"Total",
		""
	]];
	const rowTotal = inv.taxable_amount + gstTotal;
	const body = isIntra ? [[
		"1",
		inv.description || "Goods / Services supplied",
		inv.hsn_sac_code || "—",
		inr(inv.taxable_amount),
		inr(inv.cgst_amount),
		inr(inv.sgst_amount),
		inr(rowTotal)
	]] : [[
		"1",
		inv.description || "Goods / Services supplied",
		inv.hsn_sac_code || "—",
		inr(inv.taxable_amount),
		inr(inv.igst_amount),
		inr(rowTotal),
		""
	]];
	autoTable(doc, {
		startY: y,
		head,
		body,
		theme: "grid",
		margin: {
			left: M,
			right: M
		},
		headStyles: {
			fillColor: [
				15,
				23,
				42
			],
			textColor: 255,
			fontSize: 9,
			halign: "center"
		},
		bodyStyles: {
			fontSize: 9,
			valign: "top"
		},
		columnStyles: { 0: {
			halign: "center",
			cellWidth: 8
		} }
	});
	const afterY = doc.lastAutoTable.finalY + 2;
	const boxX = W - M - 80;
	const boxW = 80;
	const rows = [
		["Taxable Value", inr(inv.taxable_amount)],
		...isIntra ? [["CGST", inr(inv.cgst_amount)], ["SGST", inr(inv.sgst_amount)]] : [["IGST", inr(inv.igst_amount)]],
		["Grand Total", inr(inv.total_amount)],
		["Amount Paid", inr(inv.amount_paid)],
		["Balance Due", inr(Math.max(0, inv.total_amount - inv.amount_paid))]
	];
	let ty = afterY;
	rows.forEach(([k, v], i) => {
		const isTotal = k === "Grand Total";
		doc.setFillColor(isTotal ? 15 : 245, isTotal ? 23 : 245, isTotal ? 42 : 245);
		doc.rect(boxX, ty, boxW, 7, "F");
		doc.setTextColor(isTotal ? 255 : 0, isTotal ? 255 : 0, isTotal ? 255 : 0);
		doc.setFont("helvetica", isTotal ? "bold" : "normal");
		doc.setFontSize(9);
		doc.text(k, boxX + 2, ty + 5);
		doc.text(v, boxX + boxW - 2, ty + 5, { align: "right" });
		ty += 7;
	});
	doc.setTextColor(0, 0, 0);
	const wordsY = afterY;
	doc.setFont("helvetica", "bold");
	doc.setFontSize(9);
	doc.text("Amount Chargeable (in words):", M, wordsY + 5);
	doc.setFont("helvetica", "normal");
	const words = amountInWords(inv.total_amount);
	const wrap = doc.splitTextToSize(words, boxX - M - 4);
	doc.text(wrap, M, wordsY + 11);
	const footY = Math.max(ty, wordsY + 40) + 6;
	doc.rect(M, footY, W - M * 2, 34);
	doc.setFont("helvetica", "bold");
	doc.setFontSize(9);
	doc.text("Terms & Conditions", 15, footY + 5);
	doc.setFont("helvetica", "normal");
	const terms = [
		`1. Payment terms: ${inv.payment_terms || "Due on receipt"}.`,
		"2. Interest @18% p.a. will be charged on delayed payments.",
		"3. Subject to jurisdiction of local courts.",
		"4. E. & O.E."
	];
	doc.text(terms, 15, footY + 11);
	doc.setFont("helvetica", "bold");
	doc.text(`For ${inv.business_name || "Your Business"}`, W - M - 3, footY + 5, { align: "right" });
	doc.setFont("helvetica", "italic");
	doc.setFontSize(8);
	doc.text("(Authorised Signatory)", W - M - 3, footY + 30, { align: "right" });
	doc.setFont("helvetica", "normal");
	doc.setFontSize(7);
	doc.setTextColor(90, 90, 90);
	doc.text("This is a computer generated invoice as per Rule 46 of the CGST Rules, 2017. Signature not mandatory where digitally issued.", W / 2, 281, { align: "center" });
	doc.save(`Invoice-${inv.invoice_number}.pdf`);
}
var ErrorBoundary = class extends import_react.Component {
	state = {
		hasError: false,
		error: null
	};
	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error
		};
	}
	componentDidCatch(error, info) {
		console.error("ErrorBoundary caught:", error, info);
	}
	reset = () => this.setState({
		hasError: false,
		error: null
	});
	render() {
		if (this.state.hasError) {
			if (this.props.fallback) return this.props.fallback;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-red-300 bg-red-50 p-5 text-sm text-red-800",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Something went wrong loading this form — please refresh or contact support."
					}),
					this.state.error?.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs opacity-80",
						children: this.state.error.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: this.reset,
						className: "mt-3 rounded-md border border-red-300 bg-white px-3 py-1 text-xs font-medium hover:bg-red-100",
						children: "Try again"
					})
				]
			});
		}
		return this.props.children;
	}
};
var EXAMPLE_INVOICE = {
	invoice_number: "INV-2026-001",
	customer_name: "Acme Traders Pvt Ltd",
	customer_gstin: "27AABCU9603R1ZX",
	hsn: "998314",
	description: "Web development services - homepage redesign and backend integration",
	taxable: "50000",
	gstRate: "18",
	terms: "Net 30"
};
function fmt(n) {
	return "₹" + Math.round(n).toLocaleString("en-IN");
}
function InvoicesPage() {
	const { t } = useI18n();
	const router = useRouter();
	const list = useServerFn(listInvoices);
	const summary = useServerFn(arSummary);
	const create = useServerFn(createInvoice);
	const markPaid = useServerFn(markInvoicePaid);
	const invoices = useQuery({
		queryKey: ["invoices"],
		queryFn: () => list()
	});
	const ar = useQuery({
		queryKey: ["ar-summary"],
		queryFn: () => summary()
	});
	const [showForm, setShowForm] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [errMsg, setErrMsg] = (0, import_react.useState)(null);
	const [okMsg, setOkMsg] = (0, import_react.useState)(null);
	const formRef = (0, import_react.useRef)(null);
	async function onCreate(e) {
		e.preventDefault();
		const form = e.currentTarget;
		setBusy(true);
		setErrMsg(null);
		setOkMsg(null);
		try {
			const fd = new FormData(form);
			const taxable = Number(fd.get("taxable") || 0);
			const gstRate = Number(fd.get("gstRate") || 18);
			const gstAmount = Math.round(taxable * gstRate / 100 * 100) / 100;
			const intra = fd.get("intra") === "on";
			const invoiceNumber = String(fd.get("invoice_number") || "").trim();
			const customerName = String(fd.get("customer_name") || "").trim();
			if (!invoiceNumber || !customerName || !(taxable > 0)) throw new Error("Invoice #, customer name and taxable amount (> 0) are required.");
			await create({ data: {
				invoice_number: invoiceNumber,
				customer_name: customerName,
				customer_gstin: String(fd.get("customer_gstin") || "").trim() || null,
				hsn_sac_code: String(fd.get("hsn") || "").trim() || null,
				description: String(fd.get("description") || "").trim() || null,
				taxable_amount: taxable,
				cgst_amount: intra ? gstAmount / 2 : 0,
				sgst_amount: intra ? gstAmount / 2 : 0,
				igst_amount: intra ? 0 : gstAmount,
				due_date: String(fd.get("due_date") || "") || null,
				payment_terms: String(fd.get("terms") || "").trim() || null
			} });
			setOkMsg(`Invoice ${invoiceNumber} saved.`);
			form.reset();
			setShowForm(false);
			await Promise.all([invoices.refetch(), ar.refetch()]);
			router.invalidate();
		} catch (err) {
			console.error("createInvoice failed", err);
			let msg;
			if (err instanceof Error && err.message) msg = err.message;
			else if (typeof err === "string" && err) msg = err;
			else msg = "Failed to save invoice — please try again.";
			setErrMsg(msg);
		} finally {
			setBusy(false);
		}
	}
	function fillExample() {
		const form = formRef.current;
		if (!form) return;
		for (const [key, value] of Object.entries(EXAMPLE_INVOICE)) {
			const el = form.elements.namedItem(key);
			if (el) el.value = value;
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 md:px-8 py-8 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl md:text-3xl font-bold text-navy",
					children: t("invoices_title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground max-w-2xl",
					children: t("invoices_sub")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setShowForm((s) => !s),
					className: "rounded-lg bg-teal text-white px-4 py-2 text-sm font-medium hover:bg-teal/90",
					children: ["+ ", t("invoices_new")]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						label: t("invoices_outstanding"),
						value: fmt(ar.data?.outstanding ?? 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						label: t("invoices_overdue"),
						value: fmt(ar.data?.overdue ?? 0),
						highlight: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						label: t("invoices_paid_30d"),
						value: fmt(ar.data?.paid30 ?? 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCard, {
						label: t("invoices_dso"),
						value: String(ar.data?.dso ?? 0) + "d"
					})
				]
			}),
			okMsg && !showForm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-green-300 bg-green-50 px-4 py-2 text-sm text-green-800",
				children: okMsg
			}),
			showForm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				ref: formRef,
				onSubmit: onCreate,
				className: "rounded-2xl border border-border bg-card p-5 grid gap-3 md:grid-cols-2",
				children: [
					errMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-2 rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800",
						children: errMsg
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "invoice_number",
						label: "Invoice #",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "customer_name",
						label: "Customer name",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "customer_gstin",
						label: "Customer GSTIN (optional)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "hsn",
						label: "HSN/SAC code"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "description",
						label: "Description"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "taxable",
						label: "Taxable amount (₹)",
						type: "number",
						required: true,
						step: "0.01",
						min: "0.01"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "gstRate",
						label: "GST rate %",
						type: "number",
						defaultValue: "18",
						step: "0.01"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "due_date",
						label: "Due date",
						type: "date"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "terms",
						label: "Payment terms"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							name: "intra",
							defaultChecked: true
						}), "Intra-state (CGST + SGST). Uncheck for inter-state (IGST)."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2 flex justify-end gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: fillExample,
								className: "rounded-lg border px-4 py-2 text-sm",
								children: "Fill with example"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setShowForm(false);
									setErrMsg(null);
								},
								className: "rounded-lg border px-4 py-2 text-sm",
								children: "Cancel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: busy,
								className: "rounded-lg bg-teal text-white px-4 py-2 text-sm font-medium disabled:opacity-60",
								children: busy ? "Saving…" : "Save invoice"
							})
						]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "rounded-2xl border border-border bg-card",
				children: (invoices.data?.length ?? 0) === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 text-center text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mx-auto h-8 w-8 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: t("invoices_empty")
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "border-b bg-muted/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Invoice" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Customer" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Total" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Paid" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Due" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: "Status" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: " " })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: invoices.data?.map((inv) => {
						const remaining = Number(inv.total_amount) - Number(inv.amount_paid);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: inv.invoice_number }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: inv.customer_name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: fmt(Number(inv.total_amount)) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: fmt(Number(inv.amount_paid)) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: inv.due_date ?? "—" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${inv.status === "paid" ? "bg-green-100 text-green-800" : inv.status === "overdue" ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"}`,
									children: inv.status
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => downloadInvoicePdf(inv),
										className: "inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-muted",
										title: "Download PDF",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3 w-3" }), " PDF"]
									}), remaining > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: async () => {
											await markPaid({ data: {
												id: inv.id,
												amount: remaining
											} });
											invoices.refetch();
											ar.refetch();
										},
										className: "inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-3 w-3" }), " Mark paid"]
									})]
								}) })
							]
						}, inv.id);
					}) })]
				})
			})
		]
	});
}
function SummaryCard({ label, value, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-2xl border p-4 bg-card ${highlight ? "border-red-300" : "border-border"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `mt-1 text-xl font-bold ${highlight ? "text-red-700" : "text-navy"}`,
			children: value
		})]
	});
}
function Field({ label, name, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs font-medium text-muted-foreground mb-1",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			...rest,
			className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
		})]
	});
}
function Th({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
		className: "px-3 py-2 text-xs font-medium text-muted-foreground",
		children
	});
}
function Td({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		className: "px-3 py-2",
		children
	});
}
//#endregion
export { InvoicesPage as component };
