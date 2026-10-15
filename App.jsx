import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import BeyondCode from './components/BeyondCode'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Certificates /><Achievements /><BeyondCode /><Contact />
      </main>
      <Footer />
    </>
  )
}
