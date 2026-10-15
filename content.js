export const profile = {
  name: 'Falak Naz',
  headline: 'Full Stack Developer | Digital Marketing Enthusiast',
  location: 'Karachi, Pakistan',
  email: 'falaknazz332@gmail.com',
  linkedin: 'https://www.linkedin.com/in/falak-naz-006009386',
  github: 'https://github.com/falaknazz332-ai',
  instagram: 'https://www.instagram.com/falak_nazzz3',
  // Put your real PDF at public/Falak-Naz-Resume.pdf — the button activates automatically.
  resume: '/Falak-Naz-Resume.pdf',
}

export const nav = [
  ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'],
  ['Credentials', 'certificates'], ['Achievements', 'achievements'], ['Contact', 'contact'],
]

export const skills = [
  { group: 'Front-end', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'] },
  { group: 'Tools & workflow', items: ['Git', 'GitHub', 'Figma', 'VS Code'] },
  { group: 'Web concepts', items: ['APIs', 'Local Storage', 'Basic SEO'] },
  { group: 'Marketing', items: ['Social Media Marketing'] },
]

export const projects = [
  { title: 'SafeHer Pakistan', url: 'https://safeherpakistan-three.vercel.app/',
    desc: 'A women’s safety awareness website built as a portfolio project, focused on clear information and a calm, trustworthy design.' },
  { title: 'QuickServe', tag: 'Hackathon Project', url: 'https://final-hackathon-bice-one.vercel.app/',
    desc: 'A service marketplace concept built during a hackathon, connecting people with local services.', tech: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Weather App', url: 'https://falaknazz332-ai.github.io/weather-app/',
    desc: 'A simple weather application for checking conditions by location.' },
  { title: 'FFLUXE', tag: 'Skincare Website', url: 'https://falaknazz332-ai.github.io/Demo-Skincare-Website/',
    desc: 'A demo skincare brand website exploring product presentation and a clean, elegant layout.' },
  { title: 'Gen-Z’s World', url: 'https://falaknazz332-ai.github.io/GenzsWorld/',
    desc: 'A multi-section website about Gen Z life, culture and perspectives.' },
  { title: 'Law Case', tag: 'University Presentation Project', url: 'https://falaknazz332-ai.github.io/law-case/',
    desc: 'A website created to present a law case study for a university presentation.' },
]

export const certificates = [
  { title: 'FemHack-2026 Hackathon', kind: 'Certificate of Participation', issuer: 'Saylani IT Training Programme',
    meta: '8-hour hackathon', src: '/certificates/femhack-2026.jpeg', w: 1284, h: 901 },
  { title: 'German Language, Level A1', kind: 'IGL Zertifikat', issuer: 'IGL – Institute of German Language',
    meta: '29 September 2025', src: '/certificates/igl-german-a1.jpeg', w: 898, h: 1280 },
  { title: 'English, Pre-Intermediate (Grade A)', kind: 'Course Completion', issuer: 'Domino English Learning Centre',
    meta: 'Sept – Dec 2023', src: '/certificates/domino-english.jpeg', w: 1089, h: 1280 },
  { title: 'Shopify', kind: 'Certificate of Completion', issuer: 'The H University',
    meta: 'Completed 15 October 2024', src: '/certificates/shopify-h-university.png', pdf: '/certificates/shopify-h-university.pdf', w: 1837, h: 1295 },
]

export const achievements = [
  { title: 'First Prize — Freelancing Profile Presentation', body: 'Won first prize at SMIT for presenting a freelancing profile.' },
  { title: 'Hackathon Participation', body: 'Took part in FemHack-2026, an 8-hour hackathon, and built QuickServe as a team-ready service marketplace concept.' },
  { title: 'Presentation Experience', body: 'Presented project work in a university setting, including the Law Case website.' },
]
