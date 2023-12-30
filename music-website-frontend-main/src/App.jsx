import './App.css'
import Canvas from './components/Canvas'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Intro from './components/Intro'
import ServicesGrid from './components/ServicesGrid'
import SponsorSection from './components/SponsorSection'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <>
      <Canvas />
      <Navbar />
      <Intro />
      <SponsorSection />
      <ServicesGrid />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
