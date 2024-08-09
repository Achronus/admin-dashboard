import { dark, light } from "@/theme/colors";
import { ThemeMode } from "@/types/core";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tokens = (mode: ThemeMode) => ({
  ...(mode === "dark" ? dark : light),
});
