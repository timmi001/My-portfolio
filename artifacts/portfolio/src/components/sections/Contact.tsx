import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Twitter, Mail, MapPin, Download } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const handleDownload = () => {
    toast({ title: "Coming Soon", description: "My updated resume will be available shortly." });
  };

  return (
    <section id="contact" className="px-4 py-3 pb-24 md:pb-6">
      <div className="max-w-2xl mx-auto space-y-3">
        <div className="flex items-center gap-2 px-1">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Contact</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Contact info card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-border">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400">Let's Connect</span>
          </div>
          <div className="px-5 py-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              I'm currently based in Lagos, open to remote opportunities globally.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="font-medium text-foreground">hello@timileyin.dev</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="font-medium text-foreground">Lagos, Nigeria</span>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-2 pt-1">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <Button key={i} variant="outline" size="icon" className="rounded-full w-9 h-9 hover:border-primary hover:text-primary">
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
              <Button onClick={handleDownload} variant="outline" size="sm" className="ml-auto h-9 text-xs">
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Resume
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
        >
          <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-border">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400">Send a Message</span>
          </div>
          <div className="px-5 py-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Name</label>
                <Input required placeholder="Your full name" className="h-10 text-sm" data-testid="input-name" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Email</label>
                <Input required type="email" placeholder="you@example.com" className="h-10 text-sm" data-testid="input-email" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Message</label>
                <Textarea required placeholder="How can I help you?" className="text-sm min-h-[120px] resize-none" data-testid="input-message" />
              </div>
              <Button
                disabled={isSubmitting}
                className="w-full h-10 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-send"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
