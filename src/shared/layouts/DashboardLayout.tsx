import { ReactNode } from "react";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KeepItLogo } from "@/shared/components/KeepItLogo";
import { SearchBar } from "@/shared/components/SearchBar";
import { MobileBottomNav } from "@/features/home/ui/MobileBottomNav";

type DashboardLayoutProps = {
  children: ReactNode;
  onSearchChange?: (value: string) => void;
  searchQuery?: string;
};

export function DashboardLayout({
  children,
  onSearchChange,
  searchQuery,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <main className="mx-auto w-full min-w-0 max-w-[1500px] px-4 pb-32 pt-4 md:px-6 lg:px-7">
        <header className="mb-5 flex items-center justify-between gap-3 lg:justify-end">
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              className="size-10 rounded-xl border-white/10 bg-[#0f1115] text-[#2563ff] hover:bg-[#151922]"
              size="icon"
              variant="outline"
            >
              <span className="sr-only">Open profile</span>
              <User className="size-5" />
            </Button>
          </div>
<<<<<<< HEAD
          <KeepItLogo className="absolute left-1/2 top-5 -translate-x-1/2 text-3xl lg:hidden" />
          <div className="hidden w-full max-w-[380px] items-center gap-3 lg:flex">
            <SearchBar
              className="h-11 flex-1 rounded-[18px]"
              onChange={onSearchChange}
              value={searchQuery}
            />
=======
<div>
            <KeepItLogo className="absolute left-20 top-5 hidden lg:block -translate-x-1/2 text-3xl " />
          <KeepItLogo className="absolute left-1/2 top-5 -translate-x-1/2 text-3xl lg:hidden" />
          <div className="hidden w-full max-w-[380px] items-center gap-3 lg:flex">

>>>>>>> feat/micro-interactions
            <Button
              className="relative text-[#a1a1aa] hover:text-white"
              size="icon"
              variant="ghost"
            >
              <Bell className="size-5" />
              <span className="absolute right-1 top-1 size-2 rounded-full bg-[#2563ff]" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button className="size-9 rounded-full bg-[#2563ff] text-white shadow-[0_0_14px_rgba(37,99,255,0.24)] hover:bg-[#1d4ed8]" size="icon">
              <span className="font-bold">i</span>
              <span className="sr-only">Profile</span>
            </Button>
          </div>
<<<<<<< HEAD
=======
</div>
>>>>>>> feat/micro-interactions
          <Button className="relative text-[#2563ff] lg:hidden" size="icon" variant="ghost">
            <Bell className="size-5" />
            <span className="sr-only">Notifications</span>
          </Button>
        </header>
        {children}
      </main>
<<<<<<< HEAD
      <div className="fixed inset-x-5 bottom-24 z-30 md:hidden">
=======
      {/* <div className="fixed inset-x-5 bottom-24 z-30 md:hidden">
>>>>>>> feat/micro-interactions
        <SearchBar
          onChange={onSearchChange}
          showFilter
          value={searchQuery}
        />
<<<<<<< HEAD
      </div>
=======
      </div> */}
>>>>>>> feat/micro-interactions
      <MobileBottomNav />
    </div>
  );
}
