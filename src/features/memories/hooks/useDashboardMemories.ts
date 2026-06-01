"use client";

import { useMemo, useState } from "react";
import { Bookmark, FileText, Heart, ImageIcon, LinkIcon, NotebookPen, Video } from "lucide-react";
import { memories as sampleMemories } from "@/features/home/constants/homeData";
import {
  DisplayCollection,
  DisplayMemory,
  MemoryDraft,
} from "@/features/home/types/homeTypes";

function getMemorySize(index: number) {
  return ["large", "medium", "small", "small", "medium"][index % 5];
}

function countBy(memories: DisplayMemory[], predicate: (memory: DisplayMemory) => boolean) {
  return memories.filter(predicate).length;
}

function buildCollections(memories: DisplayMemory[]): DisplayCollection[] {
  return [
    { title: "All Memories", count: `${memories.length} items`, icon: Bookmark },
    {
      title: "Reels",
      count: `${countBy(memories, (memory) => memory.type.toLowerCase() === "reel")} items`,
      icon: Video,
    },
    {
      title: "Articles",
      count: `${countBy(memories, (memory) => memory.type.toLowerCase() === "article")} items`,
      icon: FileText,
    },
    {
      title: "Links",
      count: `${countBy(memories, (memory) => memory.type.toLowerCase() === "website")} items`,
      icon: LinkIcon,
    },
    {
      title: "Notes",
      count: `${countBy(memories, (memory) => memory.type.toLowerCase() === "note")} items`,
      icon: NotebookPen,
    },
    {
      title: "Images",
      count: `${countBy(memories, (memory) => memory.type.toLowerCase() === "image")} items`,
      icon: ImageIcon,
    },
    { title: "Liked", count: "56 items", icon: Heart },
  ];
}

export function useDashboardMemories() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [localMemories, setLocalMemories] = useState<DisplayMemory[]>(sampleMemories);
  const [isCreating, setIsCreating] = useState(false);

  async function createNewMemory(payload: MemoryDraft) {
    setIsCreating(true);
    setLocalMemories((current) => [
      {
        title: payload.title,
        meta: "Just now",
        type: payload.contentType,
        collection: payload.category,
        content: payload.content,
        image: payload.imageUrl,
        size: getMemorySize(current.length),
      },
      ...current,
    ]);
    setIsCreating(false);
  }

  const memories = useMemo<DisplayMemory[]>(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return localMemories.filter((memory) => {
      const matchesCategory =
        activeCategory === "all" ||
        memory.collection.toLowerCase() === activeCategory ||
        memory.type.toLowerCase() === activeCategory;
      const matchesSearch =
        !normalizedSearch ||
        [memory.title, memory.content, memory.collection, memory.type]
          .filter(Boolean)
          .some((value) => value?.toLowerCase().includes(normalizedSearch));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, localMemories, searchQuery]);

  const collections = useMemo<DisplayCollection[]>(() => {
    return buildCollections(localMemories);
  }, [localMemories]);

  return {
    activeCategory,
    collections,
    createNewMemory,
    isCreating,
    isLoading: false,
    isUsingSampleData: false,
    memories,
    searchQuery,
    setActiveCategory,
    setSearchQuery,
  };
}
