import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Pillars from './components/Pillars'
import Programs from './components/Programs'
import Partners from './components/Partners'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white antialiased relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <main>
        <About />
        <Stats />
        <Pillars />
        <Programs />
        <Partners />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  )
}

export default App
