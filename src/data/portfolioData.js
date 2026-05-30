export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'insights', label: 'Insights' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const heroRoles = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'Data Science Enthusiast',
]

export const heroStats = [
  { label: 'Projects Built', value: '5+' },
  { label: 'ML Use Cases', value: '12+' },
  { label: 'Certifications', value: '4' },
]

export const aboutCards = [
  {
    title: 'Data to Decision',
    icon: 'globe',
    number: '01',
    description:
      'Transforms noisy datasets into actionable insights through clean pipelines and clear modeling strategy.',
  },
  {
    title: 'Applied AI Engineering',
    icon: 'brain',
    number: '02',
    description:
      'Builds practical AI features with NLP and deep learning that solve product-level user problems.',
  },
  {
    title: 'Product-Centered Builder',
    icon: 'spark',
    number: '03',
    description:
      'Combines engineering quality with thoughtful UX to deliver systems recruiters can evaluate quickly.',
  },
]

export const insightCards = [
  {
    label: 'Model Iteration Speed',
    value: '2.4x',
    note: 'Faster prototyping with reusable training workflows',
  },
  {
    label: 'API Latency Target',
    value: '< 180ms',
    note: 'Inference-focused endpoints tuned for responsiveness',
  },
  {
    label: 'Dashboard Clarity',
    value: 'High',
    note: 'Visual-first metrics for technical and non-technical users',
  },
]

export const pipelineSteps = [
  'Data ingestion and cleaning',
  'Feature engineering and evaluation',
  'Model training and validation',
  'Deployment with monitoring loop',
]

export const skillGroups = [
  {
    category: 'Programming',
    icon: 'code',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'Java', level: 84 },
      { name: 'C/C++', level: 80 },
      { name: 'JavaScript', level: 89 },
      { name: 'Swift', level: 72 },
    ],
  },
  {
    category: 'Frameworks',
    icon: 'layers',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Django', level: 82 },
      { name: 'FastAPI', level: 87 },
      { name: 'Streamlit', level: 84 },
      { name: 'SwiftUI', level: 70 },
    ],
  },
  {
    category: 'Data Science',
    icon: 'chart',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'BERT', level: 79 },
    ],
  },
  {
    category: 'Databases',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 86 },
      { name: 'MongoDB', level: 83 },
      { name: 'ElasticSearch', level: 74 },
      { name: 'Supabase', level: 78 },
    ],
  },
]

export const projects = [
  {
    title: 'AI PDF Chatbot',
    tag: 'AI',
    internship: 'NPCIL Internship',
    color: 'from-cyan-500/20 to-blue-600/20',
    accentColor: '#22d3ee',
    stack: ['BERT', 'FastAPI', 'React', 'Python'],
    description:
      'Offline-capable assistant for secure PDF querying with contextual responses and fast retrieval.',
    impact: 'Enabled private document Q&A without cloud dependency.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Sereno',
    tag: 'AI',
    color: 'from-violet-500/20 to-purple-600/20',
    accentColor: '#a855f7',
    stack: ['React', 'Node.js', 'AI APIs', 'Tailwind'],
    description:
      'AI-powered digital well-being platform focused on mindful usage patterns and personalized insights.',
    impact: 'Turned user text patterns into personalized wellness recommendations.',
    github: '#',
    demo: '#',
  },
  {
    title: 'QuantVault',
    tag: 'Data Science',
    color: 'from-emerald-500/20 to-teal-600/20',
    accentColor: '#34d399',
    stack: ['Python', 'PyTorch', 'Pandas', 'Streamlit'],
    description:
      'Finance prediction and analytics suite with machine learning models and interactive performance dashboards.',
    impact: 'Consolidated market indicators into one actionable analytics interface.',
    github: '#',
    demo: '#',
  },
  {
    title: 'HealthConnect Platform',
    tag: 'Web',
    color: 'from-pink-500/20 to-rose-600/20',
    accentColor: '#ec4899',
    stack: ['React', 'Django', 'MySQL', 'REST API'],
    description:
      'Healthcare collaboration platform that streamlines patient, provider, and records workflows.',
    impact: 'Reduced workflow friction by centralizing communication and records.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learn Able',
    tag: 'Web',
    color: 'from-amber-500/20 to-orange-600/20',
    accentColor: '#f59e0b',
    stack: ['React', 'Accessibility', 'Speech API', 'JavaScript'],
    description:
      'Inclusive learning app designed to improve accessibility with assistive interactions and adaptive UI.',
    impact: 'Improved accessibility with speech-enabled and adaptive learning interactions.',
    github: '#',
    demo: '#',
  },
]

export const experiences = [
  {
    role: 'AI Chatbot Intern',
    company: 'NPCIL (Nuclear Power Corporation of India)',
    duration: 'Summer 2025',
    description:
      'Worked on a secure internal AI system designed for intelligent document interaction.',
    bullets: [
      'Built offline AI chatbot using BERT for privacy-focused internal usage',
      'Designed secure PDF querying system with robust document handling',
      'Developed full-stack interface for smooth interaction and search accuracy',
    ],
    tech: ['BERT', 'FastAPI', 'React', 'Python', 'NLP'],
  },
]

export const certifications = [
  {
    title: 'Oracle Cloud Data Science Certification',
    issuer: 'Oracle',
    icon: 'award',
  },
  {
    title: 'Deloitte Data Analytics Simulation',
    issuer: 'Deloitte',
    icon: 'chart',
  },
  {
    title: 'JPMorgan Quant Research Simulation',
    issuer: 'JPMorgan Chase',
    icon: 'trending',
  },
  {
    title: 'Cisco Networking Basics',
    issuer: 'Cisco',
    icon: 'network',
  },
]
