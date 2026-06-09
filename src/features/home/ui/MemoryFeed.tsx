import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MemoryCard } from "@/features/home/ui/MemoryCard";
import { DisplayMemory } from "@/features/home/types/homeTypes";

type MemoryFeedProps = {
  isLoading?: boolean;
  memories: DisplayMemory[];
};

export function MemoryFeed({
  isLoading = false,
  memories,
}: MemoryFeedProps) {
  return (
    <section>
 
      {isLoading ? (
        <p className="mb-4 text-sm text-[#a1a1aa]">Loading your memories...</p>
      ) : null}
      <div className="w-full max-w-full columns-2 gap-3 sm:columns-3 xl:columns-4">
        {memories.map((memory) => (
          <MemoryCard
            className="mb-3 break-inside-avoid"
            key={memory.title}
            memory={memory}
          />
        ))}
      </div>
    </section>
  );
}
