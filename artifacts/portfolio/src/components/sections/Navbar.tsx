import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState("for-you");

  const chips = [
    { id: "for-you", label: "For You", href: "#" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "github", label: "GitHub", href: "#github" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 h-14">
        {/* Left: avatar + wordmark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-black text-white">TA</span>
          </div>
          <span className="font-semibold text-sm text-foreground hidden sm:block">Timileyin Adekunle</span>
        </div>

        {/* Right: theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-9 h-9"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          data-testid="button-theme-toggle"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Topic chips row */}
      <div className="flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-hide">
        {chips.map((chip) => (
          <a
            key={chip.id}
            href={chip.href}
            onClick={() => setActive(chip.id)}
            data-testid={`chip-${chip.id}`}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              active === chip.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            {chip.label}
          </a>
        ))}
      </div>
    </header>
  );
}
