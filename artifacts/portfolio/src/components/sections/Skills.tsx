import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, SiNodedotjs, SiExpress, SiFirebase, SiSupabase, SiGit, SiGithub, SiVercel, SiFigma, SiReplit } from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    chipColor: "bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: null, color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    chipColor: "bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "currentColor" },
      { name: "REST APIs", icon: null, color: "currentColor" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
  {
    title: "Tools",
    chipColor: "bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "currentColor" },
      { name: "Vercel", icon: SiVercel, color: "currentColor" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Replit", icon: SiReplit, color: "#F26207" },
      { name: "Cursor AI", icon: null, color: "currentColor" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-4 py-3">
      <div className="max-w-2xl mx-auto space-y-3">
        <div className="flex items-center gap-2 px-1">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Skills & Expertise</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-border">
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${cat.chipColor}`}>{cat.title}</span>
            </div>
            <div className="px-5 py-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.04 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border cursor-default"
                >
                  {skill.icon && <skill.icon style={{ color: skill.color === "currentColor" ? undefined : skill.color }} className="h-3 w-3 flex-shrink-0" />}
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
