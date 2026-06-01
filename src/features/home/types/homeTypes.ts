import { LucideIcon } from "lucide-react";

export type DisplayCollection = {
  title: string;
  count: string;
  icon: LucideIcon;
};

export type DisplayMemory = {
  title: string;
  meta: string;
  type: string;
  collection: string;
  image?: string;
  content?: string;
  size: string;
};

export type MemoryDraft = {
  title: string;
  content: string;
  category: string;
  priority: "low" | "medium" | "high";
  contentType: string;
  sourceUrl?: string;
  imageUrl?: string;
};
