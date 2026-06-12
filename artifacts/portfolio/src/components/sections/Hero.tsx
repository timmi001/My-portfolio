import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const techPills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "Express", "PostgreSQL", "Firebase", "GitHub", "Vercel"
];

export function Hero() {
  return (
    <section id="hero" className="pt-28 pb-4 px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        {/* Profile card */}
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          {/* Gradient banner */}
          <div className="h-28 bg-gradient-to-br from-primary via-accent to-primary/60 relative">
            <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />
          </div>

          <div className="px-5 pb-5">
            {/* Avatar overlapping banner */}
            <div className="flex items-end justify-between -mt-8 mb-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent border-4 border-card flex items-center justify-center shadow-md">
                <span className="text-lg font-black text-white">TA</span>
              </div>
              {/* Availability badge */}
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-3 py-1.5 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Available
              </span>
            </div>

            {/* Name + role */}
            <h1 className="text-xl font-black text-foreground tracking-tight">Timileyin Adekunle</h1>
            <p className="text-sm font-semibold text-primary mt-0.5">Frontend Developer · UI Engineer · Full-Stack Enthusiast</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <MapPin className="h-3 w-3" />
              <span>Lagos, Nigeria</span>
            </div>

            {/* About line */}
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              I design and build fast, scalable, and user-focused web applications using modern technologies and AI-powered workflows.
            </p>

            {/* CTA buttons */}
            <div className="flex gap-3 mt-4">
              <Button size="sm" className="flex-1 h-9 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>
              <Button size="sm" variant="outline" className="flex-1 h-9 text-sm font-semibold" asChild>
                <a href="#contact">
                  <Mail className="mr-1.5 h-3.5 w-3.5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Tech pills card */}
        <div className="mt-3 bg-card rounded-2xl border border-border shadow-sm px-5 py-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tech Stack</p>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {techPills.map((tech) => (
              <span
                key={tech}
                className="flex-shrink-0 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-xs font-medium border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
