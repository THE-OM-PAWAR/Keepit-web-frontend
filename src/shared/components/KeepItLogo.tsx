import { cn } from "@/lib/utils";

type KeepItLogoProps = {
  className?: string;
};

export function KeepItLogo({ className }: KeepItLogoProps) {
  return (
    <span className={cn("text-3xl font-bold tracking-tight text-white", className)}>
      keep <span className="text-[#2563ff]">it</span>
    </span>
  );
}
