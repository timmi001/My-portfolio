import { motion } from "framer-motion";
import { Github, Star, GitFork, BookOpen } from "lucide-react";

const repos = [
  { name: "oprice-ng", desc: "Price comparison marketplace for Nigeria", stars: 24, forks: 7, lang: "TypeScript", langColor: "#3178C6" },
  { name: "luna-iq", desc: "AI-powered femtech wellness platform", stars: 18, forks: 5, lang: "JavaScript", langColor: "#F7DF1E" },
  { name: "sports-tools", desc: "Sports statistics and comparison tools", stars: 12, forks: 3, lang: "TypeScript", langColor: "#3178C6" },
];

function generateHeatmap() {
  return Array.from({ length: 52 * 7 }, () => Math.random());
}

const heatData = generateHeatmap();

function heatColor(v: number) {
  if (v < 0.2) return "bg-border opacity-60";
  if (v < 0.4) return "bg-emerald-200 dark:bg-emerald-900";
  if (v < 0.6) return "bg-emerald-400 dark:bg-emerald-700";
  if (v < 0.8) return "bg-emerald-500 dark:bg-emerald-500";
  return "bg-emerald-600 dark:bg-emerald-400";
}

export function GithubStats() {
  return (
    <section id="github" className="px-4 py-3">
      <div className="max-w-2xl mx-auto space-y-3">
        <div className="flex items-center gap-2 px-1">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">GitHub</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Profile + heatmap card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-border">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">GitHub Activity</span>
            <span className="text-xs text-muted-foreground ml-auto">@timileyin-dev</span>
          </div>
          <div className="px-5 py-4">
            {/* Profile row */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Github className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">timileyin-dev</p>
                <p className="text-xs text-muted-foreground">500+ contributions in the last year</p>
              </div>
            </div>

            {/* Contribution heatmap */}
            <div className="overflow-x-auto scrollbar-hide">
              <div
                className="grid gap-[3px]"
                style={{ gridTemplateRows: "repeat(7, 10px)", gridTemplateColumns: `repeat(52, 10px)`, gridAutoFlow: "column" }}
              >
                {heatData.map((v, i) => (
                  <div key={i} className={`rounded-[2px] ${heatColor(v)}`} style={{ width: 10, height: 10 }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Repo cards */}
        {repos.map((repo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
            data-testid={`card-repo-${i}`}
          >
            <div className="flex items-start gap-3 p-5">
              <BookOpen className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-primary truncate">{repo.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5 mb-3">{repo.desc}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full inline-block" style={{ background: repo.langColor }} />
                    {repo.lang}
                  </span>
                  <span className="flex items-center gap-1"><Star className="h-3 w-3" />{repo.stars}</span>
                  <span className="flex items-center gap-1"><GitFork className="h-3 w-3" />{repo.forks}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
