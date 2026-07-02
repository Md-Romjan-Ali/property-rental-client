"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="h-10 w-10 rounded-full border border-slate-300/70 bg-white/80 shadow-sm dark:border-slate-700 dark:bg-slate-800/80" />
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/60 bg-white/90 text-cyan-700 shadow-sm transition hover:scale-105 hover:bg-cyan-50 dark:border-cyan-500/40 dark:bg-slate-800/90 dark:text-cyan-200 dark:hover:bg-slate-700"
        >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
    );
}