"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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
    </section>
  );
}
