import { motion } from "framer-motion";
import { Github, Star, GitFork, BookOpen } from "lucide-react";

export function GithubStats() {
  // Generate mock heatmap data
  const generateHeatmap = () => {
    const weeks = [];
    for (let i = 0; i < 52; i++) {
      const days = [];
      for (let j = 0; j < 7; j++) {
        // Random opacity to simulate activity level
        const level = Math.floor(Math.random() * 5); // 0-4
        days.push(level);
      }
      weeks.push(days);
    }
    return weeks;
  };

  const heatmap = generateHeatmap();

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return "bg-secondary"; // empty
      case 1: return "bg-primary/30"; // low
      case 2: return "bg-primary/50"; // medium
      case 3: return "bg-primary/70"; // high
      case 4: return "bg-primary"; // very high
      default: return "bg-secondary";
    }
  };

  const repos = [
    { name: "OPrice NG", desc: "Marketplace comparison platform", lang: "TypeScript", stars: 24, forks: 8 },
    { name: "Luna IQ", desc: "AI-powered wellness application", lang: "JavaScript", stars: 18, forks: 5 },
    { name: "Sports Tools", desc: "Sports statistics and insights", lang: "TypeScript", stars: 12, forks: 3 },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Open Source</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My contributions and statistics on GitHub.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile & Heatmap Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-card border border-border rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                TA
              </div>
              <div>
                <h3 className="text-xl font-bold">timileyin-dev</h3>
                <p className="text-muted-foreground text-sm flex items-center gap-1">
                  <Github className="h-4 w-4" /> GitHub Profile
                </p>
              </div>
              <div className="ml-auto text-right hidden sm:block">
                <div className="text-sm text-muted-foreground">Total Contributions</div>
                <div className="text-2xl font-bold text-foreground">500+</div>
              </div>
            </div>

            <div className="w-full overflow-x-auto pb-4">
              <div className="min-w-[700px]">
                <div className="flex gap-1 mb-2 text-xs text-muted-foreground">
                  <div className="w-8">Mon</div>
                  <div className="flex-1 flex justify-between">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="flex flex-col gap-1 text-xs text-muted-foreground w-8 justify-between pb-1">
                    <span></span><span>Wed</span><span></span><span>Fri</span><span></span>
                  </div>
                  {heatmap.map((week, i) => (
                    <div key={i} className="flex flex-col gap-1 flex-1">
                      {week.map((level, j) => (
                        <div key={j} className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`} title={`Activity level: ${level}`}></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Repos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {repos.map((repo, i) => (
              <div key={i} className="bg-card border border-border p-5 rounded-2xl hover:border-primary/50 transition-colors">
                <h4 className="font-bold flex items-center gap-2 mb-2 text-foreground">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  {repo.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{repo.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${repo.lang === "TypeScript" ? "bg-blue-500" : "bg-yellow-400"}`}></span>
                    {repo.lang}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" /> {repo.forks}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
