"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const categoryFilters = [
  { label: "All", value: "all" },
  { label: "Personal", value: "personal" },
  { label: "Work", value: "work" },
  { label: "Travel", value: "travel" },
  { label: "Family", value: "family" },
  { label: "Friends", value: "friends" },
  { label: "Learning", value: "learning" },
  { label: "Other", value: "other" },
];

type MemoryFiltersProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export function MemoryFilters({
  activeCategory,
  onCategoryChange,
}: MemoryFiltersProps) {
  return (
    <section className="min-w-0 flex-1">
      <div className="no-scrollbar -mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
       <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
  {categoryFilters.map((filter) => (
    <button
      key={filter.value}
      onClick={() => onCategoryChange(filter.value)}
      className={cn(
        "relative shrink-0 cursor-pointer pb-2 text-sm font-medium transition-colors duration-300",
        activeCategory === filter.value
          ? "text-white"
          : "text-white/50 hover:text-white/80"
      )}
    >
      {filter.label}

      <span
  className={cn(
    `
      absolute
      bottom-0
      left-0
      h-[2px]
      w-full
      rounded-full
      bg-[#2563ff]
      transition-all
      duration-300
    `,
    activeCategory === filter.value
      ? "scale-x-100 opacity-100"
      : "scale-x-0 opacity-0"
  )}
/>
    </button>
  ))}
</div>
      </div>
      <div className="mt-5 hidden items-center justify-between lg:flex">
        <h1 className="text-xl font-semibold">Memories</h1>
        <Button className="text-[#2563ff]" variant="ghost">
          Recent
          <ChevronDown className="size-4" />
        </Button>
      </div>
    </section>
  );
}
