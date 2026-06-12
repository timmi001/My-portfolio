import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
            TA
          </span>
          <p className="text-muted-foreground text-sm text-center md:text-left">
            Timileyin Adekunle — Frontend Developer & UI Engineer
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/timmi001" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/in/timi-adekunle-b43170385" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
          <a href="#" className="hover:text-foreground transition-colors"><Twitter className="h-5 w-5" /></a>
          <a href="mailto:adekunlete@gmail.com" className="hover:text-foreground transition-colors"><Mail className="h-5 w-5" /></a>
        </div>
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Timileyin Adekunle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
