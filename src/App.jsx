import About from './components/About'
import Achievements from './components/Achievements'
import BackgroundEffects from './components/BackgroundEffects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Insights from './components/Insights'
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
        <hr className="section-divider" />
        <Insights />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Achievements />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
