import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Faq from './components/Faq'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Gallery/>
        <Services />
        <Faq />
        <Footer />
    </div>
  )
}

export default Home