"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = ["All","Frontend","Full Stack"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      title: "Aaraz",
      description:"A full-stack e-commerce platform with user authentication, product catalog, cart functionality, and payment integration.",
      image: "/aaraz.png?height=400&width=600",
      technologies: ["Next.js", "MongoDB", "Express", "Node.js"],
      category: "Full Stack",
      github: "https://github.com/Abarna-Selvanathan/Aaraz-Project",
      demo: "https://aarazorg.vercel.app/",
    },

    {
      title: "Coffee",
      description: "Streamlines coffee shop ordering with a user-friendly platform, enhancing customer experience and operational efficiency.",
      image: "/coffee.png?height=400&width=600",
      technologies: ["HTML", "CSS"],
      category: "Frontend",
      github: "https://github.com/Abarna-Selvanathan/coffee-website",
      demo: "https://coffee-orpin-mu.vercel.app/",
    },
    {
      title: "Plantex",
      description: "Plantselling online static platform.",
      image: "/plantex.png?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      github: "#",
      demo: "https://plantex-topaz.vercel.app/",
    },
    {
      title: "Calculator",
      description: "A simple and interactive calculator featuring a clean design and smooth functionality for quick calculations.",
      image: "/calculator.png?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      github: "https://github.com/Abarna-Selvanathan/mini-project-calculator-",
      demo: "https://calculator-kappa-rosy.vercel.app/",
    },
    {
      title: "Digital clock",
      description: "A stylish and functional digital clock displaying real-time hours, minutes, and seconds with a clean and modern design.",
      image: "/Digital clock.png?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      github: "https://github.com/Abarna-Selvanathan/mini-project-Digital-clock",
      demo: "https://clock-sigma-eight.vercel.app/",
    },
    {
      title: "Rock-paper-scissor game",
      description: "A fun and interactive Rock-Paper-Scissors game with smooth animations and real-time player feedback.",
      image: "/srock-paper-scissor game.png?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      github: "https://github.com/Abarna-Selvanathan/mini-projet-Srock-paper-scissor-game",
      demo: "https://srock-paper-scissor-game.vercel.app/",
    },
    // {
    //   title: "Image slider",
    //   description: "An interactive image slider with smooth transitions, allowing users to navigate through images effortlessly.",
    //   image: "/image slider.png?height=400&width=600",
    //   technologies: ["HTML", "CSS", "JavaScript"],
    //   category: "Frontend",
    //   github: "https://github.com/Abarna-Selvanathan/mini-project-Image-slider",
    //   demo: "https://image-slider-mu-teal.vercel.app/",
    // },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <MotionDiv
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 } }
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">My Projects</h2>
          <p className="section-subtitle">Explore my recent work and projects that showcase my skills and expertise</p>
        </MotionDiv>

        <div className="flex justify-center mb-12">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8 max-w-3xl w-full mx-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory}>
              <MotionDiv
                variants={container}
                initial="hidden"
                animate={"show"}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <MotionDiv
                    key={index}
                    variants={item}
                    className="bg-card rounded-lg shadow-md border border-border hover:border-primary/50 transition-all duration-300 min-h-[26rem]"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6 relative h-[calc(100%-12rem)]">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between gap-3 mt-4 absolute bottom-4 left-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </MotionDiv>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <a href="https://github.com/Abarna-Selvanathan" target="_blank" rel="noopener noreferrer">
              View More Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

