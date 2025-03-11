import Link from "next/link"
import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold gradient-text">
              Abarna Selvanathan
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              Full-Stack Web Developer specializing in creating responsive and user-friendly web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Abarna-Selvanathan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abarna-selvanathan-21952b348/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:abarnaselvanathan7@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://drive.google.com/file/d/14BbJeAul9TmEtqQSqASfj_pz5FXmADHz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <FileText className="h-6 w-6" />
                <span className="sr-only">CV</span>
              </a>
            </div>

            <a
              href="#home"
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              Back to top <ArrowUp size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Abarna Selvanathan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

