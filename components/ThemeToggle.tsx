"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
        <div className="opacity-0 w-4 h-4" />
      </div>
    );
  }

  const isDark = theme === "dark";

  const toggleTheme = (event: React.MouseEvent) => {
    // If the browser doesn't support view transitions, just toggle instantly
    if (!document.startViewTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    // Get the click position to start the circle animation from
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 800,
          easing: "cubic-bezier(0.8, 0, 0.2, 1)",
          pseudoElement: isDark
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02] transition-colors"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.04), transparent 72%)' }} />
      <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-0 dark:opacity-0 dark:group-hover:opacity-100" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent 72%)' }} />
      
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          <Sun className="h-[18px] w-[18px] text-black" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          <Moon className="h-[18px] w-[18px] text-primary" />
        </motion.div>
      </div>
    </button>
  );
}
