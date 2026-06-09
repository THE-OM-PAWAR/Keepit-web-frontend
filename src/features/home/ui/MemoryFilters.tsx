"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
=======
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"; // not needed now 
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
>>>>>>> feat/micro-interactions

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
<<<<<<< HEAD
=======
const categoryColors = {
  all: "#2563ff",
  personal: "#ec4899",
  work: "#3b82f6",
  travel: "#10b981",
  family: "#f97316",
  friends: "#06b6d4",
  learning: "#a855f7",
  other: "#64748b",
} as const;
>>>>>>> feat/micro-interactions

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
<<<<<<< HEAD
        <ToggleGroup
          className="flex w-max min-w-max flex-nowrap items-center justify-start gap-1.5 sm:w-fit sm:min-w-0 sm:flex-wrap"
          onValueChange={(value) => {
            if (value) onCategoryChange(value);
          }}
          type="single"
          value={activeCategory}
          variant="outline"
        >
          {categoryFilters.map((filter) => (
            <ToggleGroupItem
              className="h-7 shrink-0 rounded-full border-white/10 bg-transparent px-3 py-0 text-[13px] font-semibold text-white hover:bg-[#151922] hover:text-white data-[state=on]:border-[#2563ff] data-[state=on]:bg-[#2563ff] data-[state=on]:text-white sm:px-3.5"
              key={filter.value}
              value={filter.value}
            >
              {filter.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div className="mt-5 hidden items-center justify-between lg:flex">
        <h1 className="text-xl font-semibold">Memories</h1>
        <Button className="text-[#2563ff]" variant="ghost">
          Recent
          <ChevronDown className="size-4" />
        </Button>
      </div>
=======
       <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
  {categoryFilters.map((filter) => (
    <button
  key={filter.value}
  onClick={() => onCategoryChange(filter.value)}
  className={cn(
    "relative cursor-pointer shrink-0 pb-2 text-[1rem] font-medium transition-colors duration-300",
    activeCategory === filter.value
      ? "text-white"
      : "text-white/50 hover:text-white"
  )}
>
  {filter.label}

  {activeCategory === filter.value && (
    <motion.div
      layoutId="active-category"
      style={{
  backgroundColor:
    categoryColors[
      activeCategory as keyof typeof categoryColors
    ],
}}
className="absolute bottom-0 left-0 h-[2px] w-full rounded-full"
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
      }}
    />
  )}
</button>
  ))}
</div>
      </div>

>>>>>>> feat/micro-interactions
    </section>
  );
}
