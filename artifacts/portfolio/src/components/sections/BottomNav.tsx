import { Home, FolderOpen, Code2, Mail } from "lucide-react";

const tabs = [
  { label: "Home", icon: Home, href: "#hero" },
  { label: "Projects", icon: FolderOpen, href: "#projects" },
  { label: "Skills", icon: Code2, href: "#skills" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border">
      <div className="flex">
        {tabs.map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            data-testid={`bottom-nav-${tab.label.toLowerCase()}`}
            className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <tab.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
