export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  type: string
  tech: string[]
  features: string[]
  accent: string
  accentSecondary: string
  icon: string
  github?: string
  live?: string
  screenshots?: string[]
  visual: 'mobile' | 'map' | 'chart' | 'notebook' | 'beer' | 'retail' | 'todo'
}

export const projects: Project[] = [
  {
    id: 'studyvault',
    title: 'StudyVault',
    tagline: 'Your second brain for learning',
    description:
      'A full-featured SaaS study platform inspired by Notion & Obsidian. Workspace-based note-taking with a block editor, flashcard decks with spaced repetition, AI-powered study tools, and Google Calendar sync.',
    type: 'Web App (SaaS)',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Supabase', 'Tiptap', 'OpenAI', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Notion-style block editor with unlimited page nesting',
      'Spaced repetition flashcard system',
      'AI study tools — quiz generation, page summaries',
      'Google Calendar OAuth integration',
      'PDF upload & parsing',
      'Row-level security with Supabase',
    ],
    accent: '#7c3aed',
    accentSecondary: '#4f46e5',
    icon: '📚',
    screenshots: [
      'screenshots/studyvault_1.png',
      'screenshots/studyvault_2.png',
      'screenshots/studyvault_3.png',
    ],
    visual: 'notebook',
  },
  {
    id: 'easyfit',
    title: 'EasyFit',
    tagline: 'Your smart wardrobe, in your pocket',
    description:
      'A mobile app that lets you photograph, organize, and manage your wardrobe. Snap clothing items, categorize your outfits, and plan what to wear — built with React Native and Expo for iOS & Android.',
    type: 'Mobile App (iOS & Android)',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'NativeWind', 'Zustand', 'Expo Router'],
    features: [
      'Camera integration for clothing photography',
      'Outfit organization & categorization',
      'Local & cloud storage with Supabase',
      'Tab-based navigation with Expo Router',
      'iOS & Android native support',
    ],
    accent: '#0ea5e9',
    accentSecondary: '#6366f1',
    icon: '👕',
    screenshots: [
      'screenshots/easyfit_login.png',
      'screenshots/easyfit_closet.png',
      'screenshots/easyfit_onboarding.png',
    ],
    visual: 'mobile',
  },
  {
    id: 'utmark',
    title: 'Utmark',
    tagline: 'Turn the outdoors into a game',
    description:
      'A mobile orienteering app that generates routes through green areas using the Overpass API, lets users find GPS checkpoints in the forest, earn badges, and challenge friends. Backend is a microservice architecture hosted across two VMs.',
    type: 'React Native (Expo) + Microservices',
    tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'MongoDB', 'Google Maps', 'JWT', 'Express'],
    features: [
      'AI-generated orienteering routes through real green areas',
      'Google Maps with live orienteering tile overlay (VM tile server)',
      'GPS checkpoint detection in the field',
      'Badges & achievement system',
      'Challenge friends on saved routes',
      'Microservice backend on 2 VMs (API gateway + 4 services)',
    ],
    accent: '#16a34a',
    accentSecondary: '#0d9488',
    icon: '🗺️',
    screenshots: [
      'screenshots/utmark_home.png',
      'screenshots/utmark_map.png',
      'screenshots/utmark_completed.png',
    ],
    visual: 'map',
  },
  {
    id: 'analystbuddy',
    title: 'AnalystBuddy',
    tagline: 'Financial analysis, simplified',
    description:
      'A web application for financial and business analysis. Built as a monorepo with a clean React frontend, it helps analysts and researchers crunch numbers and visualize data with an intuitive UI.',
    type: 'Web App',
    tech: ['React 18', 'TypeScript', 'Vite', 'React Router v6', 'Tailwind CSS', 'Turbo', 'Lucide React'],
    features: [
      'Modular analysis components',
      'Data visualization dashboards',
      'Monorepo architecture with Turbo',
      'Responsive design with Tailwind',
      '18+ reusable UI components',
    ],
    accent: '#0284c7',
    accentSecondary: '#0891b2',
    icon: '📊',
    screenshots: [
      'screenshots/analyst_1.png',
      'screenshots/analyst_2.png',
      'screenshots/analyst_3.png',
    ],
    visual: 'chart',
  },
  {
    id: 'beerproject',
    title: 'Stockholm Bars',
    tagline: 'Find your perfect bar in Södermalm',
    description:
      'An interactive map of 50+ bars in Stockholm\'s Södermalm district. AI-powered bar recommendations via OpenAI GPT-4o — just describe what you\'re looking for and get matched to the right venue.',
    type: 'Web App (PWA)',
    tech: ['Node.js', 'Vanilla JS', 'Leaflet.js', 'OpenAI GPT-4o-mini', 'Service Worker', 'PWA'],
    features: [
      'Interactive Leaflet map with 50+ bar pins',
      'AI-powered natural language bar search',
      'Bar details: vibes, prices, hours, dance floor',
      'Favourites system',
      'Offline support via Service Worker',
      'Progressive Web App installable',
    ],
    accent: '#d97706',
    accentSecondary: '#b45309',
    icon: '🍺',
    github: 'https://github.com/VincentAndren2003/stockholm-bars',
    screenshots: [
      'screenshots/beer_1.png',
      'screenshots/beer_2.png',
    ],
    visual: 'beer',
  },
  {
    id: 'spikprojekt',
    title: 'SpikProjekt',
    tagline: 'Retail data, beautifully mapped',
    description:
      'A Next.js web application for ingesting and visualising retailer catalogue data, with interactive map views and multi-language support. Designed with real-time data refreshes and Redis caching.',
    type: 'Web App',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'Tailwind CSS v4', 'Leaflet', 'Redis', 'Framer Motion'],
    features: [
      'Retailer catalogue ingestion pipeline',
      'Interactive map visualization',
      'Multi-language routing ([locale])',
      'Redis caching layer',
      'Framer Motion page animations',
      'Prisma ORM with migrations',
    ],
    accent: '#dc2626',
    accentSecondary: '#ea580c',
    icon: '🛒',
    screenshots: [
      'screenshots/spik_1.png',
      'screenshots/spik_2.png',
      'screenshots/spik_3.png',
    ],
    visual: 'retail',
  },
  {
    id: 'todo',
    title: 'Todo App',
    tagline: 'Stay on top of your day',
    description:
      'A clean, fully-featured todo app with Firebase real-time sync, Google & email auth, and dynamic Unsplash backgrounds. Tasks persist across devices instantly — add, check off, and undo deletions with smooth Framer Motion animations.',
    type: 'Web App (PWA)',
    tech: ['React 19', 'Vite', 'Firebase', 'Firestore', 'MUI', 'Framer Motion', 'Unsplash API'],
    features: [
      'Real-time sync via Firebase Firestore',
      'Google OAuth & email/password authentication',
      'Progress bar tracking completed tasks',
      'Undo delete with snackbar notification',
      'Dynamic Unsplash photo backgrounds',
      'Deployed live on GitHub Pages',
    ],
    accent: '#3b82f6',
    accentSecondary: '#6366f1',
    icon: '✅',
    live: 'https://VincentAndren2003.github.io/to-do-react/',
    screenshots: [
      'screenshots/todo_1.png',
      'screenshots/todo_2.png',
      'screenshots/todo_3.png',
    ],
    visual: 'todo',
  },
]
