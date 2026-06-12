import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.ceil(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

const stats = [
  { value: 3, label: "Years Experience", suffix: "+" },
  { value: 20, label: "Projects Completed", suffix: "+" },
  { value: 10, label: "Technologies", suffix: "+" },
  { value: 500, label: "GitHub Contributions", suffix: "+" },
];

function StatCard({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="flex-shrink-0 w-32 bg-primary/5 dark:bg-primary/10 rounded-2xl p-4 text-center border border-primary/10">
      <div className="text-2xl font-black text-primary">{count}{suffix}</div>
      <div className="text-xs font-medium text-muted-foreground mt-1 leading-tight">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="px-4 py-3">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
      >
        {/* Card header */}
        <div className="flex items-center gap-2 px-5 pt-5 pb-3 border-b border-border">
          <span className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-semibold">About</span>
          <span className="text-xs text-muted-foreground">Timileyin Adekunle</span>
        </div>

        <div className="px-5 py-4">
          <h2 className="text-base font-bold text-foreground mb-2">About Me</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I am a frontend developer focused on creating intuitive, responsive, and high-performance web applications. I enjoy transforming ideas into products that solve real-world problems through clean UI design and scalable engineering.
          </p>

          {/* Horizontal stats scroll */}
          <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
