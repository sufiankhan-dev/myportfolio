"use client";

import * as React from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Establece el tema del sistema como predeterminado al cargar
    setTheme(localStorage.theme || systemTheme);
    setMounted(true);
  }, [systemTheme, setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.theme = newTheme; // Guarda la preferencia en localStorage
  };

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="shadow-md rounded-xl dark:bg-black-100 dark:hover:bg-black-200 w-11 h-11"
      >
        {theme === "dark" ? (
          <MoonStar className="h-[1.4rem] w-[1.4rem]" />
        ) : (
          <Sun className="h-[1.4rem] w-[1.4rem] text-purple" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}