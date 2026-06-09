"use client";

import { useState } from "react";

import { mobileNavItems } from "@/features/home/constants/homeData";
import { SearchDrawer } from "@/components/ui/searchDrawer";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function MobileBottomNav() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="fixed inset-x-0 bottom-5 z-40 mx-auto flex w-fit max-w-[calc(100vw-2rem)] items-center gap-1 rounded-full border border-white/15 bg-white/[0.08] p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.38)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/[0.07]">
        {mobileNavItems.map((item) => (
          <Tooltip key={item.label}>
            <TooltipTrigger asChild>
              <Button
                onClick={() => {
                  if (item.label === "Search") {
                    setSearchOpen(true);
                  }
                }}
                className={`size-12 rounded-full p-0 ${
  item.label === "Search" && searchOpen
    ? "bg-[#2563ff] text-white hover:bg-[#1d4ed8] hover:text-white"
    : item.active
      ? "bg-[#2563ff] text-white hover:bg-[#1d4ed8] hover:text-white"
      : "bg-transparent text-white/72 hover:bg-[#2563ff]/12 hover:text-white"
}`}
                size="icon"
                variant="ghost"
              >
                <item.icon className="size-5" />
                <span className="sr-only">{item.label}</span>
              </Button>
            </TooltipTrigger>

            <TooltipContent
              className="border border-white/10 bg-[#11151c] text-white"
              side="top"
              sideOffset={10}
            >
              {item.label}
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>

      <SearchDrawer
        open={searchOpen}
        onOpenChange={setSearchOpen}
      />
    </>
  );
}