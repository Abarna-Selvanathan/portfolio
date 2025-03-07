"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"
import Image from "next/image"

// Placeholder for motion div
const MotionDiv = ({ children, ...props }: any) => <div {...props}>{children}</div>

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full-Stack Web Developer"
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prevText) => prevText + fullText[textIndex])
        setTextIndex((prevIndex) => prevIndex + 1)
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [textIndex, fullText])

  return (
    <section id="home" className="xl:min-h-screen flex items-center pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-950/30 dark:via-transparent dark:to-transparent"></div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse justify-between gap-40 items-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="order-2 md:order-1 text-center lg:text-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Abarna Selvanathan</span>
            </h1>
            <div className="h-12 mb-6">
              <p className="text-xl md:text-2xl font-medium typing-container">{typedText}</p>
            </div>
            <p className="text-foreground/80 text-lg mb-8 max-w-lg">
              I build modern, responsive web applications with cutting-edge technologies. Let's bring your ideas to life!
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="border-primary text-primary hover:bg-primary/10"
              >
                View My Work
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-4">
              <a
                href="https://github.com/Abarna-Selvanathan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abarna-selvanathan-21952b348/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full xl:w-1/2 mt-28 lg:mt-0 h-[25rem] xl:h-[35rem] flex items-center justify-center z-10 mx-auto"
        >
          <div className="absolute inset-0 h-full w-[19rem] xl:w-[26rem] mx-auto rounded-full bg-gradient-to-r from-blue-400 to-blue-600 blur-3xl"></div>
          <div className="absolute inset-0 h-full w-[19rem] xl:w-[26rem] mx-auto rounded-xl xl:rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 rotate-12"></div>
          <div className="absolute inset-0 h-full w-[19rem] xl:w-[26rem] mx-auto rounded-xl xl:rounded-3xl overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Abinaya"
              fill
              className="object-cover"
            />
          </div>
        </MotionDiv>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden xl:block">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary" />
        </a>
      </div>
    </section>
  )
}

