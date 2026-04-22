import About from './components/About'
import Achievements from './components/Achievements'
import BackgroundEffects from './components/BackgroundEffects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="relative text-slate-100">
      <Loader />
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}

export default App
