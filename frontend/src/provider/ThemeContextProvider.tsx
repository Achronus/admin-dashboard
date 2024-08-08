"use client";

import { ThemeMode } from "@/types/core";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useState } from "react";

type ThemeContextProviderProps = {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextProviderProps | null>(null);

type ThemeContextProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextProviderProps => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }

  return context;
};
