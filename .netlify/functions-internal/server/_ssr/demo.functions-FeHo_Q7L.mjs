import { c as createServerFn } from "./createServerFn-BFFE07zL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BwdutfJC.mjs";
import { t as createServerRpc } from "./createServerRpc-MBa5GZ-L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo.functions-FeHo_Q7L.js
var toggleDemoMode_createServerFn_handler = createServerRpc({
	id: "b11084c9da05e00875ec97c3f49a9d0c701c785632f95f36f2d6b0e801cf9aec",
	name: "toggleDemoMode",
	filename: "src/lib/demo.functions.ts"
}, (opts) => toggleDemoMode.__executeServer(opts));
var toggleDemoMode = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => input).handler(toggleDemoMode_createServerFn_handler, async ({ data, context }) => {
	const { supabase, userId } = context;
	if (!data.enable) {
		await supabase.from("transactions").delete().eq("user_id", userId).eq("is_demo", true);
		await supabase.from("compliance_deadlines").delete().eq("user_id", userId).eq("is_demo", true);
		await supabase.from("budgets").delete().eq("user_id", userId).eq("is_demo", true);
		await supabase.from("invoices").delete().eq("user_id", userId).eq("is_demo", true);
		await supabase.from("profiles").update({
			demo_mode: false,
			financial_health_score: null
		}).eq("user_id", userId);
		return {
			ok: true,
			enabled: false
		};
	}
	await supabase.from("transactions").delete().eq("user_id", userId).eq("is_demo", true);
	await supabase.from("compliance_deadlines").delete().eq("user_id", userId).eq("is_demo", true);
	await supabase.from("budgets").delete().eq("user_id", userId).eq("is_demo", true);
	await supabase.from("invoices").delete().eq("user_id", userId).eq("is_demo", true);
	const today = /* @__PURE__ */ new Date();
	const day = (offset) => {
		const d = new Date(today);
		d.setDate(d.getDate() + offset);
		return d.toISOString().slice(0, 10);
	};
	const txns = [
		{
			kind: "income",
			amount: 145e3,
			category: "Sales",
			description: "Retail sales — week 4",
			txn_date: day(-2)
		},
		{
			kind: "income",
			amount: 62e3,
			category: "Sales",
			description: "Wholesale order — Kirti Traders",
			txn_date: day(-5)
		},
		{
			kind: "expense",
			amount: 28e3,
			category: "Rent",
			description: "Shop rent",
			txn_date: day(-6)
		},
		{
			kind: "expense",
			amount: 12500,
			category: "Utilities",
			description: "Electricity bill",
			txn_date: day(-9)
		},
		{
			kind: "expense",
			amount: 34e3,
			category: "Inventory",
			description: "Restock — cotton fabric",
			txn_date: day(-12)
		},
		{
			kind: "income",
			amount: 88e3,
			category: "Sales",
			description: "Retail sales — week 3",
			txn_date: day(-14)
		},
		{
			kind: "expense",
			amount: 8500,
			category: "Salary",
			description: "Assistant wages",
			txn_date: day(-16)
		},
		{
			kind: "expense",
			amount: 5400,
			category: "Transport",
			description: "Delivery fuel",
			txn_date: day(-20)
		},
		{
			kind: "income",
			amount: 96e3,
			category: "Sales",
			description: "Retail sales — week 2",
			txn_date: day(-22)
		},
		{
			kind: "expense",
			amount: 15e3,
			category: "GST paid",
			description: "GSTR-3B payment",
			txn_date: day(-25)
		}
	].map((t) => ({
		...t,
		user_id: userId,
		is_demo: true
	}));
	const deadlines = [
		{
			kind: "GST",
			title: "GSTR-3B filing",
			description: "Monthly GST return",
			due_date: day(7),
			status: "upcoming"
		},
		{
			kind: "TDS",
			title: "TDS payment (194J)",
			description: "Quarterly TDS on professional fees",
			due_date: day(14),
			status: "upcoming"
		},
		{
			kind: "GST",
			title: "GSTR-1 filing",
			description: "Outward supplies",
			due_date: day(21),
			status: "upcoming"
		},
		{
			kind: "ROC",
			title: "MGT-7 Annual Return",
			description: "Annual return to Registrar of Companies",
			due_date: day(45),
			status: "upcoming"
		},
		{
			kind: "GST",
			title: "GSTR-3B (prev month)",
			description: "Missed filing",
			due_date: day(-3),
			status: "overdue"
		}
	].map((d) => ({
		...d,
		user_id: userId,
		is_demo: true
	}));
	const budgets = [
		{
			category: "Rent",
			monthly_limit: 25e3
		},
		{
			category: "Utilities",
			monthly_limit: 15e3
		},
		{
			category: "Inventory",
			monthly_limit: 4e4
		},
		{
			category: "Salary",
			monthly_limit: 1e4
		},
		{
			category: "Transport",
			monthly_limit: 8e3
		}
	].map((b) => ({
		...b,
		user_id: userId,
		is_demo: true
	}));
	const invoices = [
		{
			invoice_number: "INV-001",
			customer_name: "Acme Corp",
			taxable_amount: 145e3,
			total_amount: 145e3,
			amount_paid: 145e3,
			status: "paid",
			due_date: day(-10)
		},
		{
			invoice_number: "INV-002",
			customer_name: "Kirti Traders",
			taxable_amount: 1e5,
			total_amount: 1e5,
			amount_paid: 62e3,
			status: "partially_paid",
			due_date: day(5)
		},
		{
			invoice_number: "INV-003",
			customer_name: "Global Tech",
			taxable_amount: 45e3,
			total_amount: 45e3,
			amount_paid: 0,
			status: "overdue",
			due_date: day(-5)
		}
	].map((i) => ({
		...i,
		user_id: userId,
		is_demo: true
	}));
	await supabase.from("transactions").insert(txns);
	await supabase.from("compliance_deadlines").insert(deadlines);
	await supabase.from("budgets").insert(budgets);
	await supabase.from("invoices").insert(invoices);
	await supabase.from("profiles").update({
		demo_mode: true,
		financial_health_score: 78,
		business_type: "Private Limited Company",
		employee_count: "10-50",
		state: "Maharashtra"
	}).eq("user_id", userId);
	return {
		ok: true,
		enabled: true
	};
});
//#endregion
export { toggleDemoMode_createServerFn_handler };
