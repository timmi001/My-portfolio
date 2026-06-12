import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, SiNodedotjs, SiExpress, SiFirebase, SiSupabase, SiGit, SiGithub, SiVercel, SiFigma, SiReplit } from "react-icons/si";

export function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
        { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
        { name: "CSS3", icon: null, color: "text-[#1572B6]" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Express", icon: SiExpress, color: "text-foreground" },
        { name: "REST APIs", icon: null, color: "text-primary" },
        { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
        { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
      ]
    },
    {
      title: "Tools & Workflows",
      skills: [
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "GitHub", icon: SiGithub, color: "text-foreground" },
        { name: "Vercel", icon: SiVercel, color: "text-foreground" },
        { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
        { name: "Replit", icon: SiReplit, color: "text-[#F26207]" },
        { name: "Cursor AI", icon: null, color: "text-accent" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I use to build scalable, production-ready applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-xl border border-transparent hover:border-border transition-colors cursor-default"
                  >
                    {skill.icon && <skill.icon className={`h-4 w-4 ${skill.color}`} />}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
