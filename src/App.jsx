import React from 'react'
import { Navbar, Hero, Projects, About, Work, Footer } from './sections'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero /> {/* Hero section */}
      <About /> {/* About section */}
      <Work /> {/* Work section */}
      <Projects /> {/* Project section */}
      <Footer /> {/* Footer section */}
    </main>
  )
}

export default App
