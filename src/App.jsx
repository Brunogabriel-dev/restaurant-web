import Dishes from './components/Dishes'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className="overflow-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
    </main>
  )
}

export default App