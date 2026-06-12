import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Timileyin brought a level of engineering rigor to our frontend that completely changed how fast we could ship. The codebase is clean, and the UX is flawless.",
    name: "Future Client",
    role: "Engineering Manager",
    initials: "FC",
  },
  {
    quote: "Working with Timileyin was a breeze. They understood our complex requirements and delivered a beautifully designed product ahead of schedule.",
    name: "Future Client",
    role: "Product Owner",
    initials: "FC",
  },
  {
    quote: "The attention to detail and animations in the UI elevated our brand. A true professional who cares deeply about the craft.",
    name: "Future Client",
    role: "Founder",
    initials: "FC",
  },
];

export function Testimonials() {
  return (
    <section className="px-4 py-3">
      <div className="max-w-2xl mx-auto space-y-3">
        <div className="flex items-center gap-2 px-1">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Kind Words</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-border">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-400">Testimonial</span>
            </div>
            <div className="px-5 py-4">
              <Quote className="h-6 w-6 text-primary/20 mb-2" />
              <p className="text-sm text-foreground leading-relaxed mb-4">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground">
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">— {t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
