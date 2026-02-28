"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Timeline } from "@/components/timeline"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { exportToPDF } from "@/lib/pdf-export"
import { Separator } from "@/components/ui/separator"
import { 
  aboutData, 
  experienceData, 
  skillsData, 
  projectsData, 
  testimonialsData 
} from "@/data/resume"

export default function Home() {
  const handleExportPDF = async () => {
    const success = await exportToPDF('resume-content', 'resume')
    if (success) {
      console.log('PDF exported successfully!')
    } else {
      console.error('Failed to export PDF')
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header onExportPDF={handleExportPDF} />
      
      <main id="resume-content" className="space-y-24 pb-24">
        {/* Hero Section */}
        <Hero 
          name={aboutData.name}
          title={aboutData.title}
          bio={aboutData.bio}
          location={aboutData.location}
        />

        <div className="container mx-auto px-4 space-y-24">
          {/* Experience Section */}
          <motion.section
            id="experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-mt-24"
          >
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  My professional journey and career highlights.
                </p>
              </motion.div>
              <Timeline experiences={experienceData} />
            </div>
          </motion.section>

          <Separator className="opacity-50" />

          {/* Skills Section */}
          <motion.section
            id="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-mt-24"
          >
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Technologies and tools I work with.
                </p>
              </motion.div>
              <Skills skillCategories={skillsData} />
            </div>
          </motion.section>

          <Separator className="opacity-50" />

          {/* Projects Section */}
          <motion.section
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-mt-24"
          >
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Some of my recent work and personal projects.
                </p>
              </motion.div>
              <Projects projects={projectsData} />
            </div>
          </motion.section>

          <Separator className="opacity-50" />

          {/* Testimonials Section */}
          <motion.section
            id="testimonials"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-mt-24"
          >
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  What people say about working with me.
                </p>
              </motion.div>
              <Testimonials testimonials={testimonialsData} />
            </div>
          </motion.section>

          <Separator className="opacity-50" />

          {/* Contact Section */}
          <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="scroll-mt-24"
          >
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind or want to say hello?
                </p>
              </motion.div>
              <ContactForm />
            </div>
          </motion.section>
        </div>
      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t">
        <p>© {new Date().getFullYear()} {aboutData.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}
