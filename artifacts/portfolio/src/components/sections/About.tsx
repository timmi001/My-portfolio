import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="p-6 md:p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl font-black text-foreground mb-2 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
          {count}+
        </div>
        <div className="text-sm md:text-base font-medium text-muted-foreground">
          {label}
        </div>
      </div>
    </div>
  );
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I am a frontend developer focused on creating intuitive, responsive, and high-performance web applications. I enjoy transforming ideas into products that solve real-world problems through clean UI design and scalable engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Counter value={3} label="Years Experience" />
          <Counter value={10} label="Projects Completed" />
          <Counter value={10} label="Technologies Mastered" />
          <Counter value={50} label="GitHub Contributions" />
        </motion.div>
      </div>
    </section>
  );
}
