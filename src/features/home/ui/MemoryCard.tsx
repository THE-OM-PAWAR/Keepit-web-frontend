import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DisplayMemory } from "@/features/home/types/homeTypes";

type MemoryCardProps = {
  className?: string;
  memory: DisplayMemory;
};

const imageHeightClass: Record<string, string> = {
  small: "min-h-0 flex-1",
  medium: "min-h-0 flex-1",
  large: "min-h-0 flex-1",
  xl: "min-h-0 flex-1",
};

const cardHeightClass: Record<string, string> = {
  small: "h-[250px] sm:h-[270px]",
  medium: "h-[310px] sm:h-[340px]",
  large: "h-[390px] sm:h-[430px]",
  xl: "h-[470px] sm:h-[520px]",
};

export function MemoryCard({ className, memory }: MemoryCardProps) {
  return (
    <Card
     className={cn(
  "group relative flex cursor-pointer min-w-0 flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#10131a] p-0 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]",
  cardHeightClass[memory.size] ?? cardHeightClass.medium,
  className
)}
    >
      <div className={`relative ${imageHeightClass[memory.size] ?? imageHeightClass.medium}`}>
        {memory.image ? (
          <Image
            alt=""
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            src={memory.image}
            unoptimized
          />
        ) : (
          <div className="flex h-full items-start bg-[#10141b] p-4 text-sm leading-6 text-[#a1a1aa]">
            <p className="line-clamp-[10]">{memory.content}</p>
          </div>
        )}
      </div>
      <Button
        className="absolute right-2.5 top-2.5 size-8 rounded-xl border border-white/10 bg-[#08090d] text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-[#151922]"
        size="icon"
      >
        <MoreVertical className="size-4" />
        <span className="sr-only">More options</span>
      </Button>
      <CardContent className="border-t border-white/[0.08] bg-[#0d1016] p-4">
        <h3 className="font-semibold leading-snug text-white">{memory.title}</h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs text-[#a1a1aa]">
          <span>{memory.meta}</span>
          <Badge className="bg-white/10 text-white hover:bg-white/10">{memory.type}</Badge>
          <Badge className="bg-[#2563ff]/20 text-[#7aa2ff] hover:bg-[#2563ff]/20">
            {memory.collection}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
