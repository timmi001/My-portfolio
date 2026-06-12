import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "OPrice NG",
    description: "Marketplace platform helping users compare prices across sellers and discover the best deals in Nigeria.",
    features: ["Product comparison", "Seller profiles", "Location-based search"],
    tech: ["React", "TypeScript", "Tailwind", "Supabase"],
    gradient: "from-blue-500 to-violet-600",
    chip: { label: "Marketplace", color: "bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400" },
    pattern: "grid",
  },
  {
    title: "Luna IQ",
    description: "AI-powered women's wellness and femtech platform with personalized cycle tracking and health insights.",
    features: ["Cycle tracking", "Wellness insights", "AI assistant"],
    tech: ["React", "Node.js", "PostgreSQL", "OpenAI"],
    gradient: "from-violet-500 to-pink-600",
    chip: { label: "AI · Health", color: "bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400" },
    pattern: "dots",
  },
  {
    title: "Sports Tools",
    description: "Collection of sports-related web tools and utilities for statistics, team comparison, and match insights.",
    features: ["Statistics", "Team comparison", "Match insights"],
    tech: ["Next.js", "React", "APIs"],
    gradient: "from-cyan-500 to-blue-600",
    chip: { label: "Sports · Tools", color: "bg-cyan-100 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400" },
    pattern: "lines",
  },
];

const patternStyles: Record<string, string> = {
  grid: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
  dots: "radial-gradient(circle, rgba(255,255,255,0.2) 1.5px, transparent 1.5px)",
  lines: "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 12px)",
};

export function Projects() {
  return (
    <section id="projects" className="px-4 py-3">
      <div className="max-w-2xl mx-auto space-y-3">
        {/* Section label */}
        <div className="flex items-center gap-2 px-1">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Featured Projects</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
            data-testid={`card-project-${index}`}
          >
            {/* Discover-style: image thumbnail on right, text on left */}
            <div className="flex">
              {/* Left: text content */}
              <div className="flex-1 p-5 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${project.chip.color}`}>
                    {project.chip.label}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-3">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" className="h-8 text-xs px-3 bg-primary text-primary-foreground hover:bg-primary/90">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 text-xs px-3">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Right: gradient thumbnail */}
              <div className={`w-28 sm:w-36 flex-shrink-0 bg-gradient-to-br ${project.gradient} relative`}>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: patternStyles[project.pattern],
                    backgroundSize: project.pattern === "grid" || project.pattern === "dots" ? "20px 20px" : undefined,
                  }}
                />
                {/* Feature list overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-2 pb-3">
                  {project.features.slice(0, 2).map((f) => (
                    <span key={f} className="text-[10px] text-white/80 font-medium leading-tight">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
