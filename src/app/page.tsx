"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Timeline } from "@/components/timeline"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { exportToPDF } from "@/lib/pdf-export"
import { Separator } from "@/components/ui/separator"

// Sample data - you can replace this with your actual data
const aboutData = {
  name: "John Doe",
  title: "Senior Full Stack Developer",
  location: "San Francisco, CA",
  yearsExperience: 6,
  bio: "Passionate full-stack developer with 6+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies. I love creating efficient, user-friendly solutions that make a real impact.",
  highlights: [
    "React Expert",
    "Node.js Specialist",
    "AWS Certified",
    "Team Leader",
    "Open Source Contributor",
    "Agile Methodology"
  ]
}

const experienceData = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    description: [
      "Led development of a microservices architecture serving 1M+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 5 junior developers and conducted code reviews",
      "Architected real-time features using WebSocket and Redis"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis"]
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "San Francisco, CA",
    period: "Mar 2020 - Dec 2021",
    description: [
      "Developed RESTful APIs handling 10K+ requests per minute",
      "Built responsive React applications with TypeScript",
      "Optimized database queries improving performance by 40%",
      "Collaborated with design team to implement pixel-perfect UIs"
    ],
    technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Jest"]
  },
  {
    id: "3",
    title: "Frontend Developer",
    company: "WebSolutions",
    location: "Remote",
    period: "Jun 2018 - Feb 2020",
    description: [
      "Created interactive web applications using modern JavaScript",
      "Integrated third-party APIs and payment systems",
      "Implemented responsive designs using CSS Grid and Flexbox",
      "Maintained cross-browser compatibility across all major browsers"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Vue.js", "Sass"]
  }
]

const skillsData = [
  {
    name: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "React", level: 95, category: "frontend" },
      { name: "TypeScript", level: 90, category: "frontend" },
      { name: "Next.js", level: 85, category: "frontend" },
      { name: "Vue.js", level: 80, category: "frontend" }
    ]
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90, category: "backend" },
      { name: "Express.js", level: 85, category: "backend" },
      { name: "Python", level: 75, category: "backend" },
      { name: "GraphQL", level: 70, category: "backend" }
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 85, category: "cloud" },
      { name: "Docker", level: 80, category: "devops" },
      { name: "Kubernetes", level: 70, category: "devops" },
      { name: "CI/CD", level: 85, category: "devops" }
    ]
  }
]

const projectsData = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/placeholder-project.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, file attachments, and team analytics.",
    image: "/placeholder-project.jpg",
    technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with geolocation, forecasts, and historical data visualization.",
    image: "/placeholder-project.jpg",
    technologies: ["React", "D3.js", "Weather API", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
]

export default function Home() {
  const handleExportPDF = async () => {
    const success = await exportToPDF('resume-content', 'john-doe-resume')
    if (success) {
      console.log('PDF exported successfully!')
    } else {
      console.error('Failed to export PDF')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onExportPDF={handleExportPDF} />
      
      <main id="resume-content" className="container mx-auto px-4 py-8 space-y-16">
        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="scroll-mt-20"
        >
          <About {...aboutData} />
        </motion.section>

        <Separator />

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-2">Experience</h2>
              <p className="text-muted-foreground text-center">My professional journey</p>
            </motion.div>
            <Timeline experiences={experienceData} />
          </div>
        </motion.section>

        <Separator />

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-2">Skills</h2>
              <p className="text-muted-foreground text-center">Technologies I work with</p>
            </motion.div>
            <Skills skillCategories={skillsData} />
          </div>
        </motion.section>

        <Separator />

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-2">Projects</h2>
              <p className="text-muted-foreground text-center">Some of my recent work</p>
            </motion.div>
            <Projects projects={projectsData} />
          </div>
        </motion.section>

        <Separator />

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="scroll-mt-20 text-center py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:john@example.com"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}
