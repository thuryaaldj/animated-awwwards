
import Hero from'./components/Hero.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Features from './components/Features.jsx'
const App = () => {
  return (
    <div>
      <main className='relative min-h-screen w-screen overflow-hidden bg-white'>
        <Navbar/>
        <Hero/>
        <About />
        <Features/>
      </main>
    </div>
  )
}

export default App
