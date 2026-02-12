"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce application with cart management, checkout flow, and payment integration using Stripe.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and comprehensive metrics tracking.",
    technologies: ["React", "Chart.js", "Redux", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media App",
    description: "Interactive social platform with real-time updates, user authentication, and profile management.",
    technologies: ["Next.js", "Firebase", "WebSocket", "shadcn/ui"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management Tool",
    description: "Collaborative task management application with drag-and-drop, team features, and productivity tracking.",
    technologies: ["React", "TypeScript", "Zustand", "DnD Kit"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Application",
    description: "Beautiful weather app with location detection, forecasts, and animated weather conditions.",
    technologies: ["Next.js", "OpenWeather API", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio CMS",
    description: "Content management system for portfolio websites with markdown support and image optimization.",
    technologies: ["Next.js", "MDX", "Contentlayer", "Tailwind"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="container py-24 md:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {/* A selection of recent work showcasing my skills and creativity */}
            Coming Soon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))} */}
        </div>
      </div>
    </section>
  )
}
