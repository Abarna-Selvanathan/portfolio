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

  const categories = ["All", "Web App", "Frontend", "Backend", "Full Stack"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "MongoDB", "Express", "Node.js"],
      category: "Full Stack",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management Dashboard",
      description:
        "A responsive task management application with drag-and-drop functionality, user roles, and real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "TypeScript", "Node.js", "MongoDB"],
      category: "Web App",
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with dark/light mode, animations, and contact form integration.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Tailwind CSS", "EmailJS"],
      category: "Frontend",
      github: "#",
      demo: "#",
    },
    {
      title: "RESTful API Service",
      description: "A comprehensive RESTful API service with authentication, rate limiting, and data validation.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "Backend",
      github: "#",
      demo: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "A social media analytics dashboard with data visualization and reporting features.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React.js", "Chart.js", "Node.js", "Express"],
      category: "Web App",
      github: "#",
      demo: "#",
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with content management, user authentication, and commenting system.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "MongoDB", "Express", "Node.js"],
      category: "Full Stack",
      github: "#",
      demo: "#",
    },
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
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 max-w-3xl w-full mx-auto">
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

