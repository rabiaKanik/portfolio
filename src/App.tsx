import Header from './components/Header'
import Hero from './components/Hero'
import { About, Contact, Experience, Footer, Skills, Work } from './components/Sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
