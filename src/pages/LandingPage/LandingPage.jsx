import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Testimonial from '../../components/Testimonial'
import Projects from '../../components/Projects'
import HappyClient from '../../components/HappyClient'
import HappyClient_Mobile from '../../components/HappyClient_Mobile'
import ClientsMentions from '../../components/ClientsMentions'
import Inspiration from '../../components/Inspirations'
import Feedback from '../../components/Feedback'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen">
        <Navbar />
    <div className="w-full max-w-7xl mx-auto px-0 md:px-4 lg:px-0">
        <Hero />
        <Testimonial />
        <Projects />
        <HappyClient />
        <ClientsMentions />
        <Inspiration />
        <HappyClient_Mobile/>
        <Feedback />
        <FAQ />
    </div>
        <Footer />
    </div>
  )
}

export default LandingPage