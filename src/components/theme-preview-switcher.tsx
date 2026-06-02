"use client";

import { useEffect, useState } from "react";

type ThemeId = "sunrise-teal" | "navy-amber" | "steel-orange";

const themes: Array<{ id: ThemeId; label: string }> = [
  { id: "sunrise-teal", label: "Sunrise Teal" },
  { id: "navy-amber", label: "Navy Amber" },
  { id: "steel-orange", label: "Steel Orange" },
];

export default function ThemePreviewSwitcher() {
  const [theme, setTheme] = useState<ThemeId>("sunrise-teal");

  useEffect(() => {
    const saved = localStorage.getItem("tpm-theme") as ThemeId | null;
    const initial = saved && themes.some((t) => t.id === saved) ? saved : "sunrise-teal";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  function applyTheme(next: ThemeId) {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("tpm-theme", next);
    setTheme(next);
  }

  return (
    <div className="theme-switcher rounded-xl bg-white/90 px-3 py-2 shadow-lg">
      <div className="text-xs font-bold text-slate-700 mb-2">Theme Preview</div>
      <div className="flex flex-wrap gap-2">
        {themes.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => applyTheme(item.id)}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
              theme === item.id
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
