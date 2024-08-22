"use client";

import * as React from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null; // or return a placeholder if desired
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
