import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Mic, Loader2, Volume2, Square } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { supabase } from "@/integrations/supabase/client";
import { toggleDemoMode } from "@/lib/demo.functions";

type SpeechRecognitionResult = { isFinal: boolean; 0: { transcript: string } };
type SpeechRecognitionEvent = { resultIndex: number; results: ArrayLike<SpeechRecognitionResult> };
interface SpeechRecognitionInstance {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((e: SpeechRecognitionEvent) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: any) => void) | null;
  start: () => void;
  stop: () => void;
}
type SpeechRecognitionCtor = new () => SpeechRecognitionInstance;

const navRoutes = [
  { to: "/dashboard", word: "dashboard" },
  { to: "/chat", word: "chat" },
  { to: "/compliance", word: "compliance" },
  { to: "/transactions", word: "transactions" },
  { to: "/invoices", word: "invoices" },
  { to: "/reports", word: "reports" },
  { to: "/budget", word: "budget" },
  { to: "/investment", word: "investment" },
  { to: "/schemes", word: "schemes" },
  { to: "/regulatory", word: "regulatory" },
  { to: "/calculator", word: "calculator" },
  { to: "/settings", word: "settings" },
];

export function GlobalVoiceListener() {
  const { lang, t } = useI18n();
  const navigate = useNavigate();
  const toggleDemo = useServerFn(toggleDemoMode);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  const stopAudio = useCallback(() => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  const speak = useCallback(async (text: string) => {
    stopAudio();
    const clean = text.replace(/```[\s\S]*?```/g, "").replace(/[#>*_`\[\]()]/g, "").trim();
    if (!clean) return;
    const autoLang = /[\u0B80-\u0BFF]/.test(clean)
      ? "ta-IN" 
      : /[\u0900-\u097F]/.test(clean)
      ? "hi-IN"
      : "en-IN";
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = autoLang;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }, [stopAudio]);

  useEffect(() => () => stopAudio(), [stopAudio]);

  const processCommand = async (text: string) => {
    const lower = text.toLowerCase().trim();
    if (!lower) {
      speak("Sorry, I didn't catch that — try again.");
      return;
    }

    if (lower.includes("activate demo mode")) {
      speak("Demo mode activated");
      await toggleDemo({ data: { enable: true } });
      window.location.reload();
      return;
    }

    if (lower.includes("deactivate demo mode")) {
       speak("Demo mode deactivated");
       await toggleDemo({ data: { enable: false } });
       window.location.reload();
       return;
    }

    if (lower.includes("open ")) {
       for (const route of navRoutes) {
          if (lower.includes(route.word)) {
             speak(`Opening ${route.word}`);
             navigate({ to: route.to });
             return;
          }
       }
    }

    speak("Let me check that for you...");
    try {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) throw new Error("No user");
      
      const { data: convoList } = await supabase.from("chat_conversations")
        .select("id")
        .eq("user_id", u.user.id)
        .order("updated_at", { ascending: false })
        .limit(1);

      let cid = convoList?.[0]?.id;
      if (!cid) {
         const { data: newC } = await supabase.from("chat_conversations")
           .insert({ user_id: u.user.id, title: "Voice chat" })
           .select().single();
         cid = newC?.id;
      }

      const { data: sess } = await supabase.auth.getSession();
      const token = sess.session?.access_token;
      if (!token || !cid) throw new Error("Auth failed");

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ conversation_id: cid, message: text, language: lang }),
      });

      if (!res.ok) {
         speak("Sorry, I had trouble answering that.");
         return;
      }
      
      const reader = res.body?.getReader();
      if (!reader) return;
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const textChunk = decoder.decode(value, { stream: true });
        const parts = textChunk.split("\n\n");
        for (const p of parts) {
          const line = p.trim();
          if (line.startsWith("data:")) {
             try {
                const json = JSON.parse(line.slice(5).trim());
                if (json.type === "delta") {
                   acc += json.text;
                } else if (json.type === "done") {
                   speak(acc);
                   return;
                }
             } catch {}
          }
        }
      }
    } catch (e) {
      speak("Sorry, something went wrong.");
    }
  };

  const toggleVoice = useCallback(() => {
    const w = window as unknown as { SpeechRecognition?: SpeechRecognitionCtor; webkitSpeechRecognition?: SpeechRecognitionCtor };
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SR) { alert("Voice input not supported in this browser."); return; }
    
    if (listening) { 
       recognitionRef.current?.stop(); 
       return; 
    }
    
    const rec = new SR();
    rec.lang = lang === "hi" ? "hi-IN" : lang === "ta" ? "ta-IN" : "en-IN";
    rec.continuous = false;
    rec.interimResults = false;
    rec.onresult = (e: SpeechRecognitionEvent) => {
      let final = "";
      for (let i = e.resultIndex; i < e.results.length; i++) final += e.results[i][0].transcript;
      if (final.trim()) {
         processCommand(final);
      } else {
         speak("Sorry, I didn't catch that — try again.");
      }
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => {
      setListening(false);
      speak("Sorry, I didn't catch that — try again.");
    };
    recognitionRef.current = rec;
    
    // Play activation sound
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);
    osc.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
    
    rec.start();
    setListening(true);
  }, [listening, lang, processCommand, speak]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && !listening && !e.repeat) {
         if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
           e.preventDefault();
         }
         toggleVoice();
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
       if ((e.key === "Control" || e.key === "Alt") && listening) {
          recognitionRef.current?.stop();
       }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    window.addEventListener("keyup", handleKeyUp);
    return () => {
       window.removeEventListener("keydown", handleKeyDown, { capture: true });
       window.removeEventListener("keyup", handleKeyUp);
    };
  }, [listening, toggleVoice]);

  return (
    <div className="fixed bottom-4 left-4 z-50 md:bottom-6 md:left-6 flex flex-col items-center gap-2">
      {listening && (
         <div className="rounded-full bg-red-500 text-white px-3 py-1 text-xs font-medium animate-pulse shadow-lg">
            Listening...
         </div>
      )}
      <button
        onMouseDown={toggleVoice}
        onMouseUp={() => { if(listening) recognitionRef.current?.stop(); }}
        onTouchStart={toggleVoice}
        onTouchEnd={() => { if(listening) recognitionRef.current?.stop(); }}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleVoice(); }}
        onKeyUp={(e) => { if ((e.key === "Enter" || e.key === " ") && listening) recognitionRef.current?.stop(); }}
        aria-label="Hold to give a voice command"
        className={`grid h-14 w-14 place-items-center rounded-full shadow-lg transition-colors ${
          listening ? "bg-red-500 text-white hover:bg-red-600" : "bg-navy text-white hover:bg-navy/90"
        }`}
      >
        <Mic className="h-6 w-6" />
      </button>
    </div>
  );
}
