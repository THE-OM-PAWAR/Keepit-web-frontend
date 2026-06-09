"use client";

import { AnimatePresence, motion, px } from "framer-motion";
import { SearchBar } from "@/shared/components/SearchBar";

type SearchDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SearchDrawer({
  open,
  onOpenChange,
}: SearchDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
          />

          <motion.div
          className="
fixed
left-1/2
z-50
w-[calc(100vw-2rem)]
max-w-md
-translate-x-1/2
"
style={{
  bottom: "88px",
}}
initial={{
  opacity: 0,
  y: 12,
}}

animate={{
  opacity: 1,
  y: 0,
}}

exit={{
  opacity: 0,
  y: 12,
}}
            transition={{
  type: "spring",
  stiffness: 350,
  damping: 30,
}}
          >
            <SearchBar
              autoFocus
              className="
                h-12
                rounded-full
               
                bg-[#11151c]/90
border border-white/30
              "
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}