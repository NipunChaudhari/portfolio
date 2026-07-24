import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Shared class-merging helper used by every component (and by shadcn/ui
// primitives once `npx shadcn@latest init` is run locally).
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
