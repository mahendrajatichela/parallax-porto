"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("porche_theme") as Theme | null;
      if (saved === "light" || saved === "dark") {
        applyTheme(saved);
        setThemeState(saved);
        return;
      }
    } catch {}

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = prefersDark ? "dark" : "light";
    applyTheme(initial);
    setThemeState(initial);
  }, []);

  const applyTheme = (t: Theme) => {
    if (t === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    applyTheme(t);
    try {
      localStorage.setItem("porche_theme", t);
    } catch {}
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
