import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DisplayCollection } from "@/features/home/types/homeTypes";

type CollectionsSectionProps = {
  collections: DisplayCollection[];
};

export function CollectionsSection({ collections }: CollectionsSectionProps) {
  return (
    <section className="mb-5 lg:hidden">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Collections</h2>
        <Button
          className="text-white/70 hover:bg-white/[0.06] hover:text-white"
          variant="ghost"
        >
          View all
          <ChevronRight className="size-5 text-[#2563ff]" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
        {collections.map((collection) => (
         <Card
  className="group flex min-h-16 cursor-pointer items-center gap-2.5 rounded-xl border border-white/[0.08] bg-black p-2.5 text-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.02]"
            key={collection.title}
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-[#2563ff] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2563ff]/10">
              <collection.icon className="size-4" />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-white">
                {collection.title}
              </h3>
              <p className="mt-0.5 text-xs text-white/70">{collection.count}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
