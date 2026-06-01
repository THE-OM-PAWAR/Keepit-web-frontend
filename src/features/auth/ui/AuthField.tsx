import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AuthFieldProps = {
  icon: LucideIcon;
  label: string;
  name?: string;
  onChange?: (value: string) => void;
  onTrailingClick?: () => void;
  placeholder: string;
  required?: boolean;
  trailingLabel?: string;
  type?: string;
  trailingIcon?: LucideIcon;
  value?: string;
};

export function AuthField({
  icon: Icon,
  label,
  name,
  onChange,
  onTrailingClick,
  placeholder,
  required = true,
  trailingLabel,
  trailingIcon: TrailingIcon,
  type = "text",
  value,
}: AuthFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#a1a1aa]">{label}</span>
      <span className="flex h-11 items-center gap-3 rounded-xl border border-white/10 bg-[#0f1115] px-3 text-[#a1a1aa] transition-colors focus-within:border-[#2563ff] focus-within:ring-4 focus-within:ring-[#2563ff]/10">
        <Icon className="size-4 shrink-0" />
        <Input
          className="h-full border-0 bg-transparent px-0 text-sm text-white shadow-none ring-0 placeholder:text-[#71717a] focus-visible:ring-0 dark:bg-transparent"
          name={name}
          onChange={(event) => onChange?.(event.target.value)}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
        />
        {TrailingIcon ? (
          <Button
            aria-label={trailingLabel}
            className="shrink-0 text-[#a1a1aa] hover:text-white"
            onClick={onTrailingClick}
            size="icon"
            type="button"
            variant="ghost"
          >
            <TrailingIcon className="size-4" />
          </Button>
        ) : null}
      </span>
    </label>
  );
}
