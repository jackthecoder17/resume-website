# Interactive Resume Website

A modern, interactive resume website built with Next.js, TypeScript, shadcn/ui, and Framer Motion. Features a dashboard-style layout with smooth animations, dark/light mode toggle, and PDF export functionality.

## 🚀 Features

- **Interactive Dashboard Layout**: Modern, responsive design with timeline and card-based sections
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **PDF Export**: Export your resume directly as a PDF from the website
- **Responsive Design**: Optimized for all device sizes
- **TypeScript**: Fully typed for better development experience
- **Modern UI Components**: Built with shadcn/ui for consistent design system

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PDF Export**: html2canvas + jsPDF
- **Theme Management**: next-themes

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd resume-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Edit the data objects in `src/app/page.tsx`:

- `aboutData`: Your personal information, bio, and highlights
- `experienceData`: Your work experience with descriptions and technologies
- `skillsData`: Your technical skills organized by categories
- `projectsData`: Your portfolio projects with links and technologies

### Styling
- Colors and themes: Modify `src/app/globals.css`
- Component styles: Each component in `src/components/` can be customized
- shadcn/ui theme: Update `components.json` for design system changes

### Images
Add your images to the `public/` folder:
- Profile avatar: `public/avatar.jpg`
- Project screenshots: `public/project-1.jpg`, etc.

## 📱 Components

- **Header**: Navigation with theme toggle and PDF export
- **About**: Personal introduction with avatar and highlights
- **Timeline**: Animated work experience timeline
- **Skills**: Interactive skills showcase with progress bars
- **Projects**: Portfolio grid with hover effects
- **PDF Export**: Utility for generating downloadable resume

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
1. Build: `npm run build`
2. Serve the generated files from any static hosting service

## 📄 PDF Export

The website includes a PDF export feature that captures the entire resume content. Click the "Export PDF" button in the header to download your resume as a PDF file.

## 🎯 Customization Tips

1. **Colors**: Update the color scheme in `tailwind.config.js` and `src/app/globals.css`
2. **Animations**: Modify Framer Motion animations in each component
3. **Layout**: Adjust the section order and spacing in `src/app/page.tsx`
4. **Content**: Replace sample data with your actual information
5. **Images**: Add high-quality images for better visual appeal

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons
