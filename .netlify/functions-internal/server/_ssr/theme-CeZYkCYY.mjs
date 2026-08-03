import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-CeZYkCYY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Ctx = (0, import_react.createContext)(null);
var KEY = "finsage.theme";
function apply(t) {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	if (t === "dark") root.classList.add("dark");
	else root.classList.remove("dark");
}
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	const manuallySet = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		let initial = "light";
		try {
			const saved = localStorage.getItem(KEY);
			if (saved === "dark" || saved === "light") initial = saved;
		} catch {}
		setThemeState(initial);
		apply(initial);
		(async () => {
			const { data } = await supabase.auth.getUser();
			if (!data.user) return;
			const { data: p } = await supabase.from("profiles").select("theme").eq("user_id", data.user.id).maybeSingle();
			const pt = p?.theme;
			if ((pt === "dark" || pt === "light") && !manuallySet.current) {
				setThemeState(pt);
				apply(pt);
				try {
					localStorage.setItem(KEY, pt);
				} catch {}
			}
		})();
	}, []);
	const setTheme = (0, import_react.useCallback)((t) => {
		manuallySet.current = true;
		setThemeState(t);
		apply(t);
		try {
			localStorage.setItem(KEY, t);
		} catch {}
		supabase.auth.getUser().then(({ data }) => {
			if (data.user) supabase.from("profiles").update({ theme: t }).eq("user_id", data.user.id);
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			theme,
			setTheme
		},
		children
	});
}
function useTheme() {
	const c = (0, import_react.useContext)(Ctx);
	if (!c) throw new Error("useTheme must be used inside ThemeProvider");
	return c;
}
//#endregion
export { useTheme as n, ThemeProvider as t };
