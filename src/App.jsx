import React from 'react'
import Hero from'./components/Hero.jsx'
import About from './components/About.jsx'
const App = () => {
  return (
    <div>
      <main className='relative min-h-screen w-screen overflow-hidden'>
        <Hero/>

        <About />
      </main>
    </div>
  )
}

export default App
