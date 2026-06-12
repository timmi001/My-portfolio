import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Various Tech Startups",
    period: "2023 — Present",
    description: "Building modern web applications and marketplace platforms. Focused on performance optimization, responsive design, and integrating complex APIs with seamless UIs.",
    chip: { label: "Current", color: "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400" },
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2021 — 2023",
    description: "Developing responsive websites and custom web applications for clients. Managed full project lifecycles from concept and design to deployment and maintenance.",
    chip: { label: "Freelance", color: "bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400" },
  },
  {
    role: "Personal Projects",
    company: "Independent Builder",
    period: "2020 — Present",
    description: "Building AI tools, marketplaces, sports platforms, and productivity applications. Constantly exploring new frameworks and architectural patterns.",
    chip: { label: "Projects", color: "bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400" },
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-4 py-3">
      <div className="max-w-2xl mx-auto space-y-3">
        <div className="flex items-center gap-2 px-1">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Experience</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
            data-testid={`card-experience-${index}`}
          >
            <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-border">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${exp.chip.color}`}>{exp.chip.label}</span>
              <span className="text-xs text-muted-foreground ml-auto">{exp.period}</span>
            </div>
            <div className="px-5 py-4">
              <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
              <p className="text-sm font-medium text-primary mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
