# Biowess — Personal Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animations-0055FF?logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/React_Router_DOM-6.22.3-CA4245?logo=reactrouter&logoColor=white" alt="React Router DOM" />
</p>

A modern **React + Vite** personal portfolio for **Mohammed W. Hammami**, built to present research, projects, writing, photography, certificates, and professional contact details in a clean, editorial-style interface.

* **Live demo:** [View Portfolio](https://biowess.github.io/portfolio-v2)  
* **Repository:** [GitHub Repo](https://github.com/biowess/portfolio-v2)

## What this portfolio showcases

This site highlights work at the intersection of **medicine, computer science, and bioinformatics**. It includes:

* a research archive with selected preprints and work-in-progress topics
* a projects page with featured technical and educational tools
* a photography gallery
* a certificates and credentials section
* an about page with background and focus areas
* a contact page for collaborations and inquiries

## Tech stack

* **React** `18.3.1`
* **Vite** `6.2.0`
* **TypeScript** `~5.8.2`
* **Tailwind CSS** `3.4.1`
* **React Router DOM** `6.22.3`
* **Framer Motion** for animations
* **react-helmet-async** for metadata
* **lucide-react** for icons
* **clsx** and **tailwind-merge** for class handling

## Features

* responsive navigation with mobile menu support
* dark mode toggle
* animated page transitions and section reveals
* SEO-friendly page metadata
* research archive with publication cards and status labels
* projects gallery with filtering and external repository links
* photography grid with category filtering and image modal view
* certificates page with verification links
* contact page with email, GitHub, LinkedIn, ORCID, and a working form submission flow

## Folder structure

```text
.
├── index.html
├── metadata.json
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
├── README.md
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   │   ├── AnimatedBackground.tsx
│   │   ├── GlassPanel.tsx
│   │   ├── Layout.tsx
│   │   ├── MotionButton.tsx
│   │   ├── PageTransition.tsx
│   │   ├── PaperPanel.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SEO.tsx
│   │   ├── ShareButton.tsx
│   │   ├── SplashScreen.tsx
│   │   ├── StackCard.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Toast.tsx
│   │   └── WritingCard.tsx
│   ├── data
│   │   ├── certificates.ts
│   │   ├── contact.ts
│   │   ├── navigation.ts
│   │   ├── projects.ts
│   │   ├── research.ts
│   │   ├── stack.ts
│   │   └── writing.ts
│   ├── index.css
│   ├── lib
│   │   ├── cn.ts
│   │   ├── motion.ts
│   │   └── theme.tsx
│   ├── main.tsx
│   ├── pages
│   │   ├── About.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Photography.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   └── Writing.tsx
│   ├── types
│   │   └── assets.d.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## License

**Proprietary / All Rights Reserved.**
No permission is granted to copy, modify, or redistribute this project or its assets without explicit permission from the author.

---

Built to present work with clarity, restraint, and a polished professional feel.
