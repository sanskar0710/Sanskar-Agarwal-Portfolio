import './globals.css'

export const metadata = {
  title: 'Sanskar Agrawal | AI/ML Engineer Portfolio',
  description:
    'Premium interactive portfolio of Sanskar Agrawal — AI/ML Engineer, Full Stack Developer, and Data Scientist building intelligent systems and data-driven products.',
  keywords: [
    'Sanskar Agrawal',
    'AI engineer',
    'ML engineer',
    'full stack developer',
    'data science',
    'portfolio',
    'React',
    'Python',
    'machine learning',
  ],
  authors: [{ name: 'Sanskar Agrawal' }],
  openGraph: {
    type: 'website',
    title: 'Sanskar Agrawal | AI/ML Engineer Portfolio',
    description:
      'AI/ML Engineer and Full Stack Developer building intelligent systems and premium web products.',
    images: ['/profile.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
