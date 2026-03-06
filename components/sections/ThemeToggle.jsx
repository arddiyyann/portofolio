
"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;

        if (dark) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDark(false);
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-sm border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
            {dark ? "Light Mode" : "Dark Mode"}
        </button>
    );
}
