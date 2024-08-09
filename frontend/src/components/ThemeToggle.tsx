"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = ({ size }: { size: number }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "dark" ? <Moon size={size} /> : <Sun size={size} />}
    </button>
  );
};

export default ThemeToggle;
