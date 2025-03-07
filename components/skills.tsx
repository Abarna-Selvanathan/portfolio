"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Code, Database, Server, Layout, Figma, GitBranch, Cloud, FileCode, Terminal } from "lucide-react"

// Placeholder for motion div
const MotionDiv = ({ children, ...props }: any) => <div {...props}>{children}</div>

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [Motion, setMotion] = useState(() => MotionDiv)

  useEffect(() => {
    import("framer-motion").then((mod) => {
      setMotion(() => mod.motion.div)
    })
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["Next.js", "React.js", "HTML 5", "CSS 3", "Bootstrap", "JavaScript", "TypeScript"],
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["MongoDB"],
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      skills: ["AWS", "Cloudinary", "Docker"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub"],
    },
    {
      title: "Design Tools",
      icon: <Figma className="h-8 w-8 text-primary" />,
      skills: ["Figma", "Canva"],
    },
    {
      title: "API Testing",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["Thunder Client", "Postman"],
    },
  ]

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
    <section id="skills" className="section-padding">
      <div className="container">
        <Motion
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">My Skills</h2>
          <p className="section-subtitle">A comprehensive overview of my technical expertise and proficiencies</p>
        </Motion>

        <Motion
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {skillCategories.map((category, index) => (
            <Motion
              key={index}
              variants={item}
              className="bg-card rounded-lg p-6 shadow-md border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </Motion>
          ))}
        </Motion>

        <Motion
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">My Development Process</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { icon: <FileCode />, label: "Planning" },
              { icon: <Figma />, label: "Design" },
              { icon: <Code />, label: "Development" },
              { icon: <Terminal />, label: "Testing" },
              { icon: <Cloud />, label: "Deployment" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  {step.icon}
                </div>
                <span className="text-sm">{step.label}</span>
              </div>
            ))}
          </div>
        </Motion>
      </div>
    </section>
  )
}

