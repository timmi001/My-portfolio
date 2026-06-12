import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const techPills = [
    { name: "React", top: "15%", left: "10%", delay: 0.1 },
    { name: "Next.js", top: "25%", right: "15%", delay: 0.2 },
    { name: "TypeScript", bottom: "30%", left: "15%", delay: 0.3 },
    { name: "Tailwind CSS", top: "45%", right: "5%", delay: 0.4 },
    { name: "Node.js", bottom: "15%", right: "20%", delay: 0.5 },
    { name: "PostgreSQL", top: "60%", left: "5%", delay: 0.6 },
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 dark:opacity-30 mix-blend-screen pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      {/* Floating Tech Pills */}
      {techPills.map((pill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: pill.delay },
            scale: { duration: 0.8, delay: pill.delay },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: pill.delay },
          }}
          className="absolute hidden lg:flex items-center px-4 py-2 bg-card/80 backdrop-blur-md border border-border rounded-full shadow-lg z-10"
          style={{ top: pill.top, left: pill.left, right: pill.right, bottom: pill.bottom }}
        >
          <span className="text-sm font-medium text-muted-foreground">{pill.name}</span>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
            Frontend Developer Building{" "}
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x bg-[length:200%_auto]">
              Modern Web Experiences
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I design and build fast, scalable, and user-focused web applications using modern technologies and AI-powered workflows.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.7)]" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-border bg-card/50 backdrop-blur-sm hover:bg-muted transition-all" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
