import { Mail, Linkedin, Phone, Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg">Ankush Kumar</p>
          <p className="text-sm text-muted-foreground mt-1">Ruby on Rails Developer · Crafting reliable backends.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:rockkush7@gmail.com" aria-label="Email" className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/ankush-kumar-7855aab2/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/kush-dev14" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="tel:+918006701114" aria-label="Phone" className="p-2 rounded-md hover:bg-secondary text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-5 w-5" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ankush Kumar</p>
      </div>
    </footer>
  );
}
