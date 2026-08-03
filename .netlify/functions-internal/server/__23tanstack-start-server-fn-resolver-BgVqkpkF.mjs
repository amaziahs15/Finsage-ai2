//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BgVqkpkF.js
var manifest = {
	"2419642054c266459611a4774468c955dfb08a69d9a82d56eb5265e2ad11dc62": {
		functionName: "listRegulatoryUpdates_createServerFn_handler",
		importer: () => import("./_ssr/regulatory.functions-Czi-sm3_.mjs")
	},
	"2e17ff0434716d6bb20a43b7fba1486f24910173febcfc60d23a1f4216d551b7": {
		functionName: "markInvoicePaid_createServerFn_handler",
		importer: () => import("./_ssr/invoices.functions-DxoAAFjP.mjs")
	},
	"37334f936acf3780337b86536f954cd1705d36a028f1cf8359c1044e64bb1b97": {
		functionName: "analyzeRegulatoryUpdate_createServerFn_handler",
		importer: () => import("./_ssr/regulatory.functions-Czi-sm3_.mjs")
	},
	"6f64dfdecddc0c7437d3b389f826190cdc5ee1d39d1987312b86dd46b2f2d3e3": {
		functionName: "listRegulatoryForMe_createServerFn_handler",
		importer: () => import("./_ssr/regulatory.functions-Czi-sm3_.mjs")
	},
	"8eb2779d255067ec908e1388e25eda06f4883e7e2499e8a22771a98a5de1ee10": {
		functionName: "arSummary_createServerFn_handler",
		importer: () => import("./_ssr/invoices.functions-DxoAAFjP.mjs")
	},
	"90311e0af602ce86c18303ae64b315392727e7737bdff673b7999f1e93d7b01b": {
		functionName: "listInvoices_createServerFn_handler",
		importer: () => import("./_ssr/invoices.functions-DxoAAFjP.mjs")
	},
	"b11084c9da05e00875ec97c3f49a9d0c701c785632f95f36f2d6b0e801cf9aec": {
		functionName: "toggleDemoMode_createServerFn_handler",
		importer: () => import("./_ssr/demo.functions-FeHo_Q7L.mjs")
	},
	"bc92153048ecf7b200819d56325f17405f4032922d9b3ebc1bf5dac184447e53": {
		functionName: "createInvoice_createServerFn_handler",
		importer: () => import("./_ssr/invoices.functions-DxoAAFjP.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
