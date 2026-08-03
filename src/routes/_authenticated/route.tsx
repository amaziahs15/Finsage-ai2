import { createFileRoute, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { AppSidebar, MobileTopBar } from "@/components/app-sidebar";
import { ChatWidget } from "@/components/chat-widget";
import { GlobalVoiceListener } from "@/components/global-voice-listener";
import { LogOut } from "lucide-react";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth", search: { mode: "signin" } });
    return { user: data.user };
  },
  component: Layout,
});

function Layout() {
  const navigate = useNavigate();
  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/", replace: true });
  }

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <MobileTopBar />
      <div className="md:pl-64">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-20 flex h-14 items-center justify-end px-4 border-b border-border bg-background/80 backdrop-blur-md">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700 shadow-sm"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </header>
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
      <ChatWidget />
      <GlobalVoiceListener />
    </div>
  );
}

