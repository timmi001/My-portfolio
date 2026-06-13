import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "OPrice NG",
      description: "Marketplace platform helping users compare prices across sellers and discover the best deals.",
      features: ["Product comparison", "Marketplace listings", "Seller profiles", "Location-based search", "Mobile-first design"],
      tech: ["React", "TypeScript", "Tailwind", "Supabase"],
      gradient: "from-blue-600 to-purple-600",
      shadow: "hover:shadow-blue-500/20",
      liveUrl: "https://zero-price-ng.vercel.app",
      githubUrl: "https://github.com/timmi001",
    },
    {
      title: "Luna IQ",
      description: "AI-powered women's wellness and femtech platform.",
      features: ["Cycle tracking", "Wellness insights", "Personalized recommendations", "AI assistant"],
      tech: ["React", "Node.js", "PostgreSQL", "OpenAI"],
      gradient: "from-purple-600 to-pink-600",
      shadow: "hover:shadow-purple-500/20",
      liveUrl: "https://luna-iq.vercel.app",
      githubUrl: "https://github.com/timmi001",
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work. I build platforms that are fast, accessible, and user-friendly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group flex flex-col rounded-3xl border border-border bg-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.shadow}`}
            >
              {/* Graphic Banner */}
              <div className={`h-48 md:h-56 relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-3xl font-black text-white">{project.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>
                
                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-border">
                  <Button variant="default" className="w-full group/btn" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full group/btn" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                      <Github className="ml-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
