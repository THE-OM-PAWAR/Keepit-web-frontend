"use client";

import { useEffect, useRef } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Command, CommandInput } from "@/components/ui/command";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  className?: string;
  onChange?: (value: string) => void;
  showFilter?: boolean;
  value?: string;
  autoFocus?: boolean;
};

export function SearchBar({
  className,
  onChange,
  showFilter = false,
  value,
  autoFocus = false,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
  if (autoFocus) {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
  }
}, [autoFocus]);
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        const input = inputRef.current;
        const isVisible =
          input &&
          input.getClientRects().length > 0 &&
          window.getComputedStyle(input).visibility !== "hidden";

        if (!input || !isVisible) {
          return;
        }

        event.preventDefault();
        input.focus();
        input.select();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Command
      autoFocus={autoFocus}
      shouldFilter={false}
      className={cn(
        "group relative h-10 rounded-xl border border-white/10 bg-black p-0 text-white/70 shadow-none transition-colors focus-within:border-[#2563ff]/50 focus-within:bg-[#080808] focus-within:ring-3 focus-within:ring-[#2563ff]/10 [&_[data-slot=command-input-wrapper]]:h-full [&_[data-slot=command-input-wrapper]]:p-0 [&_[data-slot=input-group]]:flex [&_[data-slot=input-group]]:h-full! [&_[data-slot=input-group]]:items-center [&_[data-slot=input-group]]:rounded-xl! [&_[data-slot=input-group]]:border-0 [&_[data-slot=input-group]]:bg-transparent [&_[data-slot=input-group]]:px-2.5 [&_[data-slot=input-group]]:shadow-none! [&_[data-slot=command-input]]:h-full [&_[data-slot=command-input]]:self-center [&_[data-slot=command-input]]:font-medium [&_[data-slot=command-input]]:leading-none [&_[data-slot=command-input]]:text-white [&_[data-slot=command-input]]:placeholder:text-white/40 [&_[data-slot=input-group-addon]]:flex [&_[data-slot=input-group-addon]]:items-center [&_[data-slot=input-group-addon]]:text-white/45",
        showFilter &&
          "border-white/20 bg-white/[0.08] shadow-[0_18px_45px_rgba(0,0,0,0.38)] backdrop-blur-xl focus-within:bg-white/[0.1] [&_[data-slot=command-input]]:pr-8 [&_[data-slot=input-group-addon]]:hidden",
        className
      )}
    >
      <CommandInput
        aria-label="Search memories"
        onValueChange={onChange}
        placeholder="Search memories"
        ref={inputRef}
        value={value ?? ""}
      />
      {!showFilter ? (
        <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium leading-none text-white/45 transition-colors group-focus-within:border-[#2563ff]/30 group-focus-within:text-white/65 sm:block">
          Ctrl K
        </kbd>
      ) : null}
      {showFilter ? (
        <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#71717a]" />
      ) : null}
    </Command>
  );
}
