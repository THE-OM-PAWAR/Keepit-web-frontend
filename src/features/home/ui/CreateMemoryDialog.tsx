"use client";

import { FormEvent, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MemoryDraft } from "@/features/home/types/homeTypes";

type CreateMemoryDialogProps = {
  isCreating: boolean;
  onCreateMemory: (payload: MemoryDraft) => Promise<void>;
};

export function CreateMemoryDialog({
  isCreating,
  onCreateMemory,
}: CreateMemoryDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("personal");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [contentType, setContentType] = useState("note");
  const [sourceUrl, setSourceUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    try {
      await onCreateMemory({
        title,
        content,
        category,
        priority,
        contentType,
        sourceUrl: sourceUrl.trim() || undefined,
        imageUrl: imageUrl.trim() || undefined,
      });
      setTitle("");
      setContent("");
      setSourceUrl("");
      setImageUrl("");
      setOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create memory");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-10 rounded-xl bg-[#2563ff] px-4 text-sm hover:bg-[#1d4ed8]">
          <Plus className="size-4" />
          Create Memory
        </Button>
      </DialogTrigger>
      <DialogContent className="border border-white/10 bg-[#0f1115] text-white sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create memory</DialogTitle>
          <DialogDescription>
            Save a note, link, image, article, or reel to this UI preview.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-3" onSubmit={submit}>
          <Input
            className="h-10 rounded-xl border-white/10 bg-[#151922] text-white"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Memory title"
            required
            value={title}
          />
          <Textarea
            className="min-h-24 rounded-xl border-white/10 bg-[#151922] text-white"
            onChange={(event) => setContent(event.target.value)}
            placeholder="What do you want to remember?"
            required
            value={content}
          />
          <div className="grid gap-2 sm:grid-cols-3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-10 w-full rounded-xl border-white/10 bg-[#151922]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-[#0f1115] text-white">
                {["personal", "work", "travel", "family", "friends", "learning", "other"].map(
                  (item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            <Select
              value={priority}
              onValueChange={(value) =>
                setPriority(value as "low" | "medium" | "high")
              }
            >
              <SelectTrigger className="h-10 w-full rounded-xl border-white/10 bg-[#151922]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent className="bg-[#0f1115] text-white">
                {["low", "medium", "high"].map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={contentType} onValueChange={setContentType}>
              <SelectTrigger className="h-10 w-full rounded-xl border-white/10 bg-[#151922]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className="bg-[#0f1115] text-white">
                {["note", "image", "article", "reel", "website", "other"].map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Input
            className="h-10 rounded-xl border-white/10 bg-[#151922] text-white"
            onChange={(event) => setSourceUrl(event.target.value)}
            placeholder="Source URL, optional"
            type="url"
            value={sourceUrl}
          />
          <Input
            className="h-10 rounded-xl border-white/10 bg-[#151922] text-white"
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder="Image URL, optional"
            type="url"
            value={imageUrl}
          />
          {error ? <p className="text-sm text-red-200">{error}</p> : null}
          <Button
            className="h-10 w-full rounded-xl bg-[#2563ff] hover:bg-[#1d4ed8]"
            disabled={isCreating}
          >
            {isCreating ? "Saving..." : "Save memory"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
