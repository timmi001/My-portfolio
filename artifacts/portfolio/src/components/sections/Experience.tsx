import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Various Tech Startups",
      period: "2023 - Present",
      description: "Building modern web applications and marketplace platforms. Focused on performance optimization, responsive design, and integrating complex APIs with seamless UIs.",
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      period: "2021 - 2023",
      description: "Developing responsive websites and custom web applications for clients. Managed full project lifecycles from concept and design to deployment and maintenance.",
    },
    {
      role: "Personal Projects",
      company: "Independent Builder",
      period: "2020 - Present",
      description: "Building AI tools, marketplaces, sports platforms, and productivity applications. Constantly exploring new frameworks and architectural patterns.",
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Experience</h2>
          <p className="text-muted-foreground text-lg">My professional journey so far.</p>
        </motion.div>

        <div className="relative border-l border-primary/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none">
          {/* Desktop timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute left-1/2 top-0 w-px bg-primary/30 -translate-x-1/2"
          ></motion.div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 md:mb-24 relative w-full flex md:justify-between items-center group">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                className="absolute left-[-41px] md:left-1/2 w-5 h-5 rounded-full bg-background border-4 border-primary z-10 md:-translate-x-1/2 group-hover:scale-125 transition-transform"
              ></motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:ml-auto md:pl-12"}`}
              >
                <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm font-semibold text-primary mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-bold mb-1 text-foreground">{exp.role}</h3>
                  <h4 className="text-base font-medium text-muted-foreground mb-4">{exp.company}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
