import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import { MotionReveal } from './components/MotionReveal.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import PaperBackdrop from './components/PaperBackdrop.jsx'

export default function App() {
  return (
    <div className="site-shell">
      <PaperBackdrop />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <MotionReveal><About /></MotionReveal>
      <MotionReveal><Skills /></MotionReveal>
      <MotionReveal><Experience /></MotionReveal>
      <MotionReveal><Education /></MotionReveal>
      <MotionReveal><Contact /></MotionReveal>
      <BackToTop />
    </div>
  )
}
