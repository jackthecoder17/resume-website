
export const aboutData = {
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

export const experienceData = [
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

export const skillsData = [
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

export const projectsData = [
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

export const testimonialsData = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content: "John is an exceptional developer who consistently delivers high-quality code. His ability to solve complex problems is impressive.",
    avatar: "/avatars/sarah.jpg"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    content: "Working with John was a pleasure. He communicates clearly and always keeps the user experience in mind.",
    avatar: "/avatars/michael.jpg"
  },
  {
    id: "3",
    name: "Emily Davis",
    role: "Senior Designer",
    content: "John has a great eye for detail and implementation. He brought our designs to life perfectly.",
    avatar: "/avatars/emily.jpg"
  }
]
