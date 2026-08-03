import { c as createServerFn } from "./createServerFn-BFFE07zL.mjs";
import { t as createSsrRpc } from "./createSsrRpc-D9KmXbHC.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BwdutfJC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo.functions-ky4UaANg.js
var toggleDemoMode = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => input).handler(createSsrRpc("b11084c9da05e00875ec97c3f49a9d0c701c785632f95f36f2d6b0e801cf9aec"));
//#endregion
export { toggleDemoMode as t };
