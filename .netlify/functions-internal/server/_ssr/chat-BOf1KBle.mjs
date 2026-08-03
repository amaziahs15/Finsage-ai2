import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BcfEZ10o.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useI18n } from "./i18n-1E1dHM5R.mjs";
import { A as EllipsisVertical, C as LoaderCircle, I as ChevronRight, L as Check, M as Copy, N as Circle, b as Mic, c as Square, f as Send, g as Plus, k as ExternalLink, l as Sparkles, r as Volume2, s as Trash2, u as ShieldCheck, v as Pen, y as Paperclip } from "../_libs/lucide-react.mjs";
import { t as FlowchartRenderer } from "./flowchart-renderer-BqCGkKJ8.mjs";
import { t as Markdown } from "../_libs/react-markdown+[...].mjs";
import { t as remarkGfm } from "../_libs/remark-gfm.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-BOf1KBle.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function ChatPage() {
	const { t, lang } = useI18n();
	const [convos, setConvos] = (0, import_react.useState)([]);
	const [activeId, setActiveId] = (0, import_react.useState)(null);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [sending, setSending] = (0, import_react.useState)(false);
	const [listening, setListening] = (0, import_react.useState)(false);
	const scrollRef = (0, import_react.useRef)(null);
	const recognitionRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	const [speakingId, setSpeakingId] = (0, import_react.useState)(null);
	const [loadingAudioId, setLoadingAudioId] = (0, import_react.useState)(null);
	(0, import_react.useRef)(null);
	const stopAudio = (0, import_react.useCallback)(() => {
		window.speechSynthesis.cancel();
		setSpeakingId(null);
		setLoadingAudioId(null);
	}, []);
	const speak = (0, import_react.useCallback)(async (id, text) => {
		if (speakingId === id) {
			stopAudio();
			return;
		}
		stopAudio();
		const clean = text.replace(/```[\s\S]*?```/g, "").replace(/[#>*_`\[\]()]/g, "").trim();
		if (!clean) return;
		const autoLang = /[\u0B80-\u0BFF]/.test(clean) ? "ta-IN" : /[\u0900-\u097F]/.test(clean) ? "hi-IN" : "en-IN";
		const utterance = new SpeechSynthesisUtterance(clean);
		utterance.lang = autoLang;
		utterance.onend = () => setSpeakingId(null);
		utterance.onerror = () => setSpeakingId(null);
		setSpeakingId(id);
		window.speechSynthesis.speak(utterance);
	}, [
		speakingId,
		stopAudio,
		lang
	]);
	(0, import_react.useEffect)(() => () => stopAudio(), [stopAudio]);
	const loadConvos = (0, import_react.useCallback)(async () => {
		const { data } = await supabase.from("chat_conversations").select("id, title, updated_at").order("updated_at", { ascending: false }).limit(50);
		setConvos(data ?? []);
		return data ?? [];
	}, []);
	const loadMessages = (0, import_react.useCallback)(async (id) => {
		const { data } = await supabase.from("chat_messages").select("*").eq("conversation_id", id).order("created_at", { ascending: true });
		setMessages((data ?? []).filter((m) => m.role === "user" || m.role === "assistant"));
	}, []);
	(0, import_react.useEffect)(() => {
		(async () => {
			const list = await loadConvos();
			if (list[0]) {
				setActiveId(list[0].id);
				await loadMessages(list[0].id);
			}
		})();
	}, [loadConvos, loadMessages]);
	(0, import_react.useEffect)(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages]);
	(0, import_react.useEffect)(() => {
		inputRef.current?.focus();
	}, [activeId]);
	async function newChat() {
		const { data: u } = await supabase.auth.getUser();
		if (!u.user) return;
		const { data } = await supabase.from("chat_conversations").insert({
			user_id: u.user.id,
			title: "New chat"
		}).select().single();
		if (data) {
			setActiveId(data.id);
			setMessages([]);
			await loadConvos();
		}
	}
	async function deleteChat(id, e) {
		e.stopPropagation();
		if (!confirm(t("Are you sure you want to delete this chat?"))) return;
		await supabase.from("chat_conversations").delete().eq("id", id);
		if (activeId === id) {
			setActiveId(null);
			setMessages([]);
		}
		await loadConvos();
	}
	async function renameChat(id, current, e) {
		e.stopPropagation();
		const newTitle = prompt(t("Enter new title:"), current);
		if (!newTitle || newTitle === current) return;
		await supabase.from("chat_conversations").update({ title: newTitle }).eq("id", id);
		await loadConvos();
	}
	async function ensureConvo() {
		if (activeId) return activeId;
		const { data: u } = await supabase.auth.getUser();
		if (!u.user) return null;
		const { data } = await supabase.from("chat_conversations").insert({
			user_id: u.user.id,
			title: "New chat"
		}).select().single();
		if (!data) return null;
		setActiveId(data.id);
		loadConvos();
		return data.id;
	}
	async function send(text) {
		const msg = (text ?? input).trim();
		if (!msg || sending) return;
		setSending(true);
		setInput("");
		const cid = await ensureConvo();
		if (!cid) {
			setSending(false);
			return;
		}
		const userMsg = {
			id: crypto.randomUUID(),
			role: "user",
			content: msg
		};
		const assistantMsg = {
			id: crypto.randomUUID(),
			role: "assistant",
			content: "",
			streaming: true
		};
		setMessages((m) => [
			...m,
			userMsg,
			assistantMsg
		]);
		const { data: sess } = await supabase.auth.getSession();
		const token = sess.session?.access_token;
		if (!token) {
			setSending(false);
			return;
		}
		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				},
				body: JSON.stringify({
					conversation_id: cid,
					message: msg,
					language: lang
				})
			});
			if (!res.ok || !res.body) {
				const errText = await res.text().catch(() => "");
				setMessages((m) => m.map((x) => x.id === assistantMsg.id ? {
					...x,
					content: `⚠️ ${res.status === 429 ? "Rate limited — please retry in a moment." : res.status === 402 ? "AI credits exhausted. Please upgrade your workspace plan." : errText || "Something went wrong."}`,
					streaming: false
				} : x));
				return;
			}
			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let buffer = "";
			let acc = "";
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				buffer += decoder.decode(value, { stream: true });
				const parts = buffer.split("\n\n");
				buffer = parts.pop() || "";
				for (const p of parts) {
					const line = p.trim();
					if (!line.startsWith("data:")) continue;
					try {
						const json = JSON.parse(line.slice(5).trim());
						if (json.type === "delta") {
							acc += json.text;
							setMessages((m) => m.map((x) => x.id === assistantMsg.id ? {
								...x,
								content: acc
							} : x));
						} else if (json.type === "done") {
							setMessages((m) => m.map((x) => x.id === assistantMsg.id ? {
								...x,
								streaming: false,
								honesty_score: json.honesty_score,
								honesty_breakdown: json.honesty_breakdown,
								sources: json.sources
							} : x));
							loadConvos();
						}
					} catch {}
				}
			}
		} finally {
			setSending(false);
			inputRef.current?.focus();
		}
	}
	function handleEditMessage(m) {
		setInput(m.content);
		inputRef.current?.focus();
	}
	function toggleVoice() {
		const w = window;
		const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
		if (!SR) {
			alert("Voice input not supported in this browser.");
			return;
		}
		if (listening) {
			recognitionRef.current?.stop();
			return;
		}
		const rec = new SR();
		rec.lang = lang === "hi" ? "hi-IN" : lang === "ta" ? "ta-IN" : "en-IN";
		rec.continuous = false;
		rec.interimResults = true;
		rec.onresult = (e) => {
			let interim = "";
			for (let i = e.resultIndex; i < e.results.length; i++) interim += e.results[i][0].transcript;
			setInput(interim);
		};
		rec.onend = () => setListening(false);
		recognitionRef.current = rec;
		rec.start();
		setListening(true);
	}
	async function onAttach(e) {
		const file = e.target.files?.[0];
		e.target.value = "";
		if (!file) return;
		if (file.type.startsWith("text/") || file.name.match(/\.(csv|txt|md)$/i)) {
			const text = await file.text();
			send(`I've uploaded a file named "${file.name}". Contents:\n\n\`\`\`\n${text.slice(0, 4e3)}\n\`\`\`\n\nPlease analyze this.`);
		} else send(`I've uploaded a file "${file.name}" (${(file.size / 1024).toFixed(0)} KB, type: ${file.type}). Please note file parsing (OCR/PDF) is coming soon — describe what I should look for in this type of document.`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-[calc(100vh-0px)] md:h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden lg:flex lg:w-64 flex-col border-r border-border bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: newChat,
					className: "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-navy text-white py-2.5 text-sm font-semibold hover:bg-navy/90 transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
						" ",
						t("chat_new")
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
					children: t("chat_history")
				}), convos.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative flex items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setActiveId(c.id);
							loadMessages(c.id);
						},
						className: `flex-1 text-left rounded-lg px-3 py-2 text-sm truncate transition-colors pr-8 ${activeId === c.id ? "bg-teal/10 text-navy font-medium" : "text-muted-foreground hover:bg-muted"}`,
						children: c.title || "New chat"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "p-1.5 text-slate-500 hover:text-navy hover:bg-slate-200 rounded-md transition-colors",
								title: "Options",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "h-5 w-5" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-32",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onClick: (e) => renameChat(c.id, c.title, e),
								className: "cursor-pointer flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3.5 w-3.5" }), " Rename"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onClick: (e) => deleteChat(c.id, e),
								className: "cursor-pointer text-red-600 focus:text-red-600 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Delete"]
							})]
						})] })
					})]
				}, c.id))]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 flex flex-col min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "border-b border-border bg-card px-4 md:px-8 py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-lg md:text-xl font-bold text-navy flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-teal" }),
							" ",
							t("chat_title")
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scrollRef,
					className: "flex-1 overflow-y-auto px-4 md:px-8 py-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-3xl space-y-6",
						children: [messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center py-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-grid h-16 w-16 place-items-center rounded-2xl bg-navy-gradient text-white mb-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-7 w-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-bold text-navy",
									children: t("chat_empty_title")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: t("chat_empty_sub")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl mx-auto",
									children: [
										"chat_suggest_1",
										"chat_suggest_2",
										"chat_suggest_3",
										"chat_suggest_4"
									].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => send(t(k)),
										className: "text-left rounded-xl border border-border bg-card px-4 py-3 text-sm hover:border-teal transition-colors",
										children: t(k)
									}, k))
								})
							]
						}), messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, {
							m,
							speakingId,
							loadingAudioId,
							onSpeak: speak,
							onEdit: handleEditMessage
						}, m.id))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border bg-card px-4 md:px-8 py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background p-3 focus-within:border-teal transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								ref: inputRef,
								value: input,
								onChange: (e) => setInput(e.target.value),
								onKeyDown: (e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										send();
									}
								},
								placeholder: t("chat_placeholder"),
								rows: 2,
								className: "w-full resize-none bg-transparent outline-none text-sm placeholder:text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: toggleVoice,
										title: t("chat_voice"),
										className: `p-2 rounded-lg transition-colors ${listening ? "bg-red-500 text-white" : "hover:bg-muted text-muted-foreground"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "p-2 rounded-lg cursor-pointer hover:bg-muted text-muted-foreground",
										title: t("chat_attach"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											className: "hidden",
											onChange: onAttach,
											accept: ".txt,.csv,.md,image/*,.pdf"
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => send(),
									disabled: sending || !input.trim(),
									className: "inline-flex items-center gap-1.5 rounded-lg bg-teal text-white px-4 py-2 text-sm font-semibold disabled:opacity-50 hover:bg-teal/90 transition-colors",
									children: sending ? t("chat_thinking") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }),
										" ",
										t("chat_send")
									] })
								})]
							})]
						})
					})
				})
			]
		})]
	});
}
function MessageBubble({ m, speakingId, loadingAudioId, onSpeak, onEdit }) {
	const { t } = useI18n();
	const isUser = m.role === "user";
	const isSpeaking = speakingId === m.id;
	const isLoadingAudio = loadingAudioId === m.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex ${isUser ? "justify-end" : "justify-start"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `max-w-[85%] ${isUser ? "bg-navy text-white rounded-2xl rounded-br-md px-4 py-3 group relative" : ""}`,
			children: isUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "whitespace-pre-wrap text-sm",
				children: m.content
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-full top-0 mr-2 flex flex-col md:flex-row items-center gap-1 bg-card rounded-md shadow-sm border border-border p-0.5 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigator.clipboard.writeText(m.content),
					className: "p-1.5 text-muted-foreground hover:text-navy hover:bg-muted rounded",
					title: "Copy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onEdit(m),
					className: "p-1.5 text-muted-foreground hover:text-teal hover:bg-muted rounded",
					title: "Edit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3.5 w-3.5" })
				})]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "prose prose-sm dark:prose-invert max-w-none text-foreground prose-pre:bg-muted prose-pre:text-foreground prose-code:text-teal prose-a:text-teal prose-table:text-sm prose-th:bg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
						remarkPlugins: [remarkGfm],
						components: { code({ className, children }) {
							if (/language-(\w+)/.exec(className || "")?.[1] === "flowchart") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowchartRenderer, { raw: String(children).trim() });
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className,
								children
							});
						} },
						children: m.content || ""
					}), m.streaming && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-2 h-4 bg-teal ml-1 animate-pulse align-middle" })]
				}),
				!m.streaming && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap items-center gap-2",
					children: [
						typeof m.honesty_score === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HonestyCard, {
							score: m.honesty_score,
							breakdown: m.honesty_breakdown ?? void 0
						}),
						m.content && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => navigator.clipboard.writeText(m.content),
							className: "inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:bg-muted",
							title: "Copy reply",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" }), " Copy"]
						}),
						m.content && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSpeak(m.id, m.content),
							className: "inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:bg-muted",
							"aria-label": isSpeaking ? t("chat_stop_audio") : t("chat_listen"),
							title: isSpeaking ? t("chat_stop_audio") : t("chat_listen"),
							children: isLoadingAudio ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }),
								" ",
								t("chat_loading_audio")
							] }) : isSpeaking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "h-3 w-3" }),
								" ",
								t("chat_stop_audio")
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-3 w-3" }),
								" ",
								t("chat_listen")
							] })
						})
					]
				}),
				!m.streaming && m.sources && m.sources.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5",
						children: t("chat_sources")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: m.sources.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: s.startsWith("http") ? s : `https://${s}`,
							target: "_blank",
							rel: "noreferrer",
							className: "text-xs text-teal hover:underline inline-flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" }),
								" ",
								s
							]
						}) }, i))
					})]
				})
			] })
		})
	});
}
function HonestyCard({ score, breakdown }) {
	const { t } = useI18n();
	const color = score >= 75 ? "text-teal" : score >= 50 ? "text-yellow-600" : "text-red-500";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		className: `mt-3 rounded-xl border ${score >= 75 ? "bg-teal/10 border-teal/30" : score >= 50 ? "bg-yellow-50 border-yellow-200" : "bg-red-50 border-red-200"} p-3 glass`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
			className: "cursor-pointer flex items-center justify-between text-sm font-semibold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: `h-4 w-4 ${color}` }), t("chat_honesty_score")]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `text-lg font-bold ${color}`,
				children: [score, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "/100"
				})]
			})]
		}), breakdown && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-1.5 text-xs",
			children: Object.entries(breakdown).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground capitalize",
					children: k.replace(/_/g, " ")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: v
				})]
			}, k))
		})]
	});
}
//#endregion
export { ChatPage as component };
