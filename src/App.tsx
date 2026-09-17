import { useState } from 'react'
import SplashScreen from './components/SplashScreen'
import Nav from './components/Nav'
import Hud from './components/Hud'
import SignatureIndicator from './components/SignatureIndicator'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WorkSection from './components/WorkSection'
import ExpertiseSection from './components/ExpertiseSection'
import ProcessSection from './components/ProcessSection'
import AboutSection from './components/AboutSection'
import ExperimentsSection from './components/ExperimentsSection'
import ArchiveSection from './components/ArchiveSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      <Nav />
      <Hud />
      <SignatureIndicator />
      <Hero />
      <Marquee />
      <WorkSection />
      <ExpertiseSection />
      <ProcessSection />
      <AboutSection />
      <ExperimentsSection />
      <ArchiveSection />
      <ContactSection />
      <Footer />
      {showSplash && <SplashScreen onEnter={() => setShowSplash(false)} />}
    </>
  )
}

export default App
