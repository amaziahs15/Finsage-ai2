import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DUAAEZRw.js
var $$splitComponentImporter = () => import("./auth-BANa7o_l.mjs");
var searchSchema = objectType({ mode: enumType(["signin", "signup"]).optional().default("signin") });
var Route = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Sign in — FinSage AI" },
		{
			name: "description",
			content: "Sign in or create your FinSage AI account."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	validateSearch: searchSchema,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
