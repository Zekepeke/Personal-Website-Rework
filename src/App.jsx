import React from 'react'
import { Navbar, Hero, Projects, About, Contact } from './sections'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero /> {/* Hero section */}
      <About /> {/* About section */}
      <Projects /> {/* Project section */}
      <Contact /> {/* Contact section */}

    </main>
  )
}

export default App