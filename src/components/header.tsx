"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react"

interface HeaderProps {
  onExportPDF: () => void
}

export function Header({ onExportPDF }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm"
    >
      <div className="container flex h-14 sm:h-16 items-center justify-between gap-2 mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </motion.div>
          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-semibold truncate">John Doe</h1>
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center truncate max-sm:hidden">
              <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">San Francisco, CA</span>
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-shrink-0">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-0.5 sm:gap-2 flex-shrink-0">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9" asChild>
              <a href="mailto:john@example.com" aria-label="Email">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={onExportPDF} variant="default" size="sm" className="hidden md:flex h-8 text-xs sm:text-sm">
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Export PDF
            </Button>
          </motion.div>

          <ThemeToggle />
          <MobileMenu onExportPDF={onExportPDF} />
        </div>
      </div>
    </motion.header>
  )
}