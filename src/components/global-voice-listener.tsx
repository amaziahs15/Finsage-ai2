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

export function GlobalVoiceListener() {
  const { lang, setLang, t } = useI18n();
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

    // Language switching
    if (lower.includes("change language to english") || lower.includes("english")) {
      setLang("en");
      speak("Language changed to English");
      return;
    }
    if (lower.includes("change language to tamil") || lower.includes("தமிழ்") || lower.includes("tamil")) {
      setLang("ta");
      speak("மொழி தமிழுக்கு மாற்றப்பட்டது"); // Language changed to Tamil
      return;
    }
    if (lower.includes("change language to hindi") || lower.includes("hindi") || lower.includes("हिंदी")) {
      setLang("hi");
      speak("भाषा हिंदी में बदल दी गई है"); // Language changed to Hindi
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

    // Dynamic nav routes including localized strings and common transliterations
    // Dynamic nav routes including localized strings, common transliterations, and Tamil-script transliterations of English words
    const dynamicRoutes = [
      { to: "/dashboard", words: ["dashboard", "overview", "டேஷ்போர்டு", "கண்ணோட்டம்", "dash", t("app_dashboard").toLowerCase()] },
      { to: "/chat", words: ["chat", "assistant", "ai", "உதவியாளர்", "சாட்", "uraiyadal", t("app_chat").toLowerCase()] },
      { to: "/compliance", words: ["compliance", "deadline", "inakkam", "inakam", "anupalan", "இணக்கம்", "கம்ப்ளையன்ஸ்", t("app_compliance").toLowerCase()] },
      { to: "/transactions", words: ["transaction", "parivarthan", "parivartan", "lenden", "len-den", "பரிவர்த்தனை", "டிரான்சாக்ஷன்", t("app_transactions").toLowerCase()] },
      { to: "/invoices", words: ["invoice", "bill", "vilaippat", "vilaipat", "பட்டியல்", "இன்வாய்ஸ்", t("app_invoices").toLowerCase()] },
      { to: "/reports", words: ["report", "chart", "arikkai", "arikai", "அறிக்கை", "ரிப்போர்ட்", t("app_reports").toLowerCase()] },
      { to: "/budget", words: ["budget", "badjet", "பட்ஜெட்", t("app_budget").toLowerCase()] },
      { to: "/investment", words: ["investment", "mudhaleed", "muthaleed", "nivesh", "முதலீடு", "இன்வெஸ்ட்மென்ட்", t("app_investment").toLowerCase()] },
      { to: "/schemes", words: ["scheme", "government scheme", "thittang", "thitang", "thittam", "thitam", "yojana", "திட்டம்", "ஸ்கீம்", t("app_schemes").toLowerCase()] },
      { to: "/regulatory", words: ["regulatory", "regulation", "update", "ozhungumurai", "olungumurai", "niyamak", "ஒழுங்குமுறை", "ரெகுலேட்டரி", t("app_regulatory").toLowerCase()] },
      { to: "/calculator", words: ["calculator", "kanippori", "kanipori", "kanippan", "கணிப்பொறி", "கால்குலேட்டர்", t("app_calculator").toLowerCase()] },
      { to: "/settings", words: ["setting", "profile", "amaippu", "amaipu", "அமைப்பு", "செட்டிங்ஸ்", "புரொபைல்", t("app_settings").toLowerCase()] },
      { to: "/notifications", words: ["notification", "alert", "arivippu", "arivipu", "suchna", "அறிவிப்பு", "நோட்டிபிகேஷன்", t("app_notifications").toLowerCase()] },
    ];

    // Navigation keywords in multiple languages: open, go to, show, kholo, dikhao, thira, kaatu, etc.
    const navKeywords = ["open", "go to", "show", "kholo", "dikhao", "திற", "காட்டு", "செய்", "ஓபன்", "பண்ணு", "போ", "பார்", "thira", "kaatu", "pannu", "sei"];
    const isNavCommand = navKeywords.some(k => lower.includes(k));

    for (const route of dynamicRoutes) {
      if (route.words.some(w => lower.includes(w))) {
        if (isNavCommand || route.words.some(w => lower === w)) {
          speak(lang === "ta" ? "திறக்கிறேன்" : lang === "hi" ? "खोल रहा हूँ" : `Opening ${route.words[0]}`);
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

      const validCid = cid && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(cid) ? cid : crypto.randomUUID();
      
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ conversation_id: validCid, message: text, language: lang, is_voice_command: true }),
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
                   if (acc.includes("NAVIGATE_TO:")) {
                      // Only navigate when we have the full path, which we can safely get at "done"
                      // or we can wait for the stream to finish to avoid partial paths like "/"
                   }
                } else if (json.type === "done") {
                   if (acc.includes("NAVIGATE_TO:")) {
                      const match = acc.match(/NAVIGATE_TO:(\/[a-z0-9-]+)/i);
                      if (match && match[1]) {
                         const targetRoute = match[1];
                         speak(lang === "ta" ? "திறக்கிறேன்" : lang === "hi" ? "खोल रहा हूँ" : `Opening ${targetRoute.slice(1)}`);
                         navigate({ to: targetRoute });
                      } else {
                         speak("Sorry, I couldn't find that page.");
                      }
                   } else if (acc.includes("CHANGE_LANG:")) {
                      const match = acc.match(/CHANGE_LANG:(en|hi|ta)/i);
                      if (match && match[1]) {
                         const newLang = match[1] as "en" | "hi" | "ta";
                         setLang(newLang);
                         speak(newLang === "ta" ? "மொழி தமிழுக்கு மாற்றப்பட்டது" : newLang === "hi" ? "भाषा हिंदी में बदल दी गई है" : "Language changed to English");
                      }
                   } else {
                     speak(acc);
                   }
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
    
    stopAudio(); // Stop any currently playing AI response before listening
    
    const rec = new SR();
    rec.lang = lang === "hi" ? "hi-IN" : lang === "ta" ? "ta-IN" : "en-IN";
    rec.continuous = false;
    rec.interimResults = false;
    rec.onresult = (e: SpeechRecognitionEvent) => {
      let final = "";
      for (let i = e.resultIndex; i < e.results.length; i++) final += e.results[i][0].transcript;
      if (final.trim()) {
         processCommand(final);
      }
    };
    rec.onend = () => setListening(false);
    rec.onerror = (e: any) => {
      setListening(false);
      if (e.error === "aborted" || e.error === "no-speech") return;
      speak("Sorry, I didn't catch that.");
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
      if (e.key === "Escape" && speaking) {
         stopAudio();
      }
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
  }, [listening, speaking, toggleVoice, stopAudio]);

  return (
    <div className="fixed bottom-4 right-20 z-50 md:bottom-6 md:right-24 flex flex-col items-center gap-2">
      {speaking && (
        <button
          onClick={stopAudio}
          className="grid h-10 w-10 place-items-center rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 transition-colors"
          aria-label="Stop speaking"
        >
          <Square className="h-4 w-4 fill-current" />
        </button>
      )}
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
