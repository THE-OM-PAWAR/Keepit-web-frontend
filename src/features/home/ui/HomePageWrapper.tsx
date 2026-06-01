"use client";

import { DashboardLayout } from "@/shared/layouts/DashboardLayout";
import { CollectionsSection } from "@/features/home/ui/CollectionsSection";
import { MemoryFeed } from "@/features/home/ui/MemoryFeed";
import { MemoryFilters } from "@/features/home/ui/MemoryFilters";
import { useDashboardMemories } from "@/features/memories/hooks/useDashboardMemories";

export function HomePageWrapper() {
  const {
    activeCategory,
    collections,
    isLoading,
    memories,
    searchQuery,
    setActiveCategory,
    setSearchQuery,
  } = useDashboardMemories();

  return (
    <DashboardLayout onSearchChange={setSearchQuery} searchQuery={searchQuery}>
      <div className="mb-4 flex flex-col gap-3">
        <MemoryFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
      <CollectionsSection collections={collections} />
      <MemoryFeed
        isLoading={isLoading}
        memories={memories}
      />
    </DashboardLayout>
  );
}
