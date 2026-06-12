import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Timileyin brought a level of engineering rigor to our frontend that completely changed how fast we could ship. The codebase is clean, and the UX is flawless.",
      name: "— [Future Client]",
      role: "Engineering Manager",
    },
    {
      quote: "Working with Timileyin was a breeze. They understood our complex requirements and delivered a beautifully designed product ahead of schedule.",
      name: "— [Future Client]",
      role: "Product Owner",
    },
    {
      quote: "The attention to detail and animations in the UI elevated our brand. A true professional who cares about the craft.",
      name: "— [Future Client]",
      role: "Founder",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Kind Words</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What people say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border p-8 rounded-3xl relative hover:shadow-lg transition-all group"
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6 group-hover:text-primary/40 transition-colors" />
              <p className="text-foreground leading-relaxed mb-8 relative z-10 pt-4">
                "{test.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground font-bold">
                  FC
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{test.name}</h4>
                  <p className="text-sm text-muted-foreground">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
