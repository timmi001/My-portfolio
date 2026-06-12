import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-6 mt-3">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-sm text-foreground">Timileyin Adekunle</p>
            <p className="text-xs text-muted-foreground">Frontend Developer & UI Engineer</p>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">
          © {new Date().getFullYear()} Timileyin Adekunle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
