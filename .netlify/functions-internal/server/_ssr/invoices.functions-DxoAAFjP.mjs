import { i as stringType, n as numberType, r as objectType } from "../_libs/zod.mjs";
import { c as createServerFn } from "./createServerFn-BFFE07zL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BwdutfJC.mjs";
import { t as createServerRpc } from "./createServerRpc-MBa5GZ-L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invoices.functions-DxoAAFjP.js
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
var createInvoice_createServerFn_handler = createServerRpc({
	id: "bc92153048ecf7b200819d56325f17405f4032922d9b3ebc1bf5dac184447e53",
	name: "createInvoice",
	filename: "src/lib/invoices.functions.ts"
}, (opts) => createInvoice.__executeServer(opts));
var createInvoice = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => CreateInvoiceInput.parse(d)).handler(createInvoice_createServerFn_handler, async ({ data, context }) => {
	const total = data.taxable_amount + data.cgst_amount + data.sgst_amount + data.igst_amount;
	const { data: profile } = await context.supabase.from("profiles").select("business_name, gstin").eq("user_id", context.userId).maybeSingle();
	const { data: row, error } = await context.supabase.from("invoices").insert({
		...data,
		user_id: context.userId,
		total_amount: total,
		business_name: profile?.business_name ?? null,
		business_gstin: profile?.gstin ?? null,
		status: "sent"
	}).select("*").single();
	if (error) throw new Error(error.message);
	return row;
});
var listInvoices_createServerFn_handler = createServerRpc({
	id: "90311e0af602ce86c18303ae64b315392727e7737bdff673b7999f1e93d7b01b",
	name: "listInvoices",
	filename: "src/lib/invoices.functions.ts"
}, (opts) => listInvoices.__executeServer(opts));
var listInvoices = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(listInvoices_createServerFn_handler, async ({ context }) => {
	const { data, error } = await context.supabase.from("invoices").select("*").order("created_at", { ascending: false }).limit(200);
	if (error) throw new Error(error.message);
	return data ?? [];
});
var markInvoicePaid_createServerFn_handler = createServerRpc({
	id: "2e17ff0434716d6bb20a43b7fba1486f24910173febcfc60d23a1f4216d551b7",
	name: "markInvoicePaid",
	filename: "src/lib/invoices.functions.ts"
}, (opts) => markInvoicePaid.__executeServer(opts));
var markInvoicePaid = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	id: stringType().uuid(),
	amount: numberType().nonnegative()
}).parse(d)).handler(markInvoicePaid_createServerFn_handler, async ({ data, context }) => {
	const { data: inv } = await context.supabase.from("invoices").select("total_amount, amount_paid").eq("id", data.id).maybeSingle();
	if (!inv) throw new Error("Invoice not found");
	const newPaid = Number(inv.amount_paid) + data.amount;
	const status = newPaid >= Number(inv.total_amount) ? "paid" : "partially_paid";
	const { error } = await context.supabase.from("invoices").update({
		amount_paid: newPaid,
		status
	}).eq("id", data.id);
	if (error) throw new Error(error.message);
	return {
		ok: true,
		status
	};
});
var arSummary_createServerFn_handler = createServerRpc({
	id: "8eb2779d255067ec908e1388e25eda06f4883e7e2499e8a22771a98a5de1ee10",
	name: "arSummary",
	filename: "src/lib/invoices.functions.ts"
}, (opts) => arSummary.__executeServer(opts));
var arSummary = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(arSummary_createServerFn_handler, async ({ context }) => {
	const { data } = await context.supabase.from("invoices").select("total_amount, amount_paid, status, due_date, created_at");
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const rows = data ?? [];
	let outstanding = 0;
	let overdue = 0;
	let paid30 = 0;
	const cutoff = (/* @__PURE__ */ new Date(Date.now() - 30 * 864e5)).toISOString().slice(0, 10);
	let dsoSum = 0;
	let dsoCount = 0;
	for (const r of rows) {
		const rem = Number(r.total_amount) - Number(r.amount_paid);
		if (rem > 0) outstanding += rem;
		if (rem > 0 && r.due_date && r.due_date < today) overdue += rem;
		if (r.status === "paid" && r.created_at.slice(0, 10) >= cutoff) paid30 += Number(r.total_amount);
		if (r.status === "paid" && r.due_date) {
			const created = new Date(r.created_at).getTime();
			const days = Math.max(0, Math.round((Date.now() - created) / 864e5));
			dsoSum += days;
			dsoCount += 1;
		}
	}
	return {
		outstanding,
		overdue,
		paid30,
		dso: dsoCount > 0 ? Math.round(dsoSum / dsoCount) : 0,
		count: rows.length
	};
});
//#endregion
export { arSummary_createServerFn_handler, createInvoice_createServerFn_handler, listInvoices_createServerFn_handler, markInvoicePaid_createServerFn_handler };
