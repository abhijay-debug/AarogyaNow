import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import HowItWorks from './components/HowItsWorks'
import Features from './components/Features'
import Coaches from './components/Coaches'
import Comparison from './components/Comparison'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ManualCarousel from './components/Coaches'
import ManualMarquee from './components/WhyChooseUs'


const App = () => {
  return (
   <>
   

  
     <Navbar />
   <Hero />
   <ManualMarquee />
   <Mission />
   <HowItWorks />
   <Features />
   <Coaches />
   <Comparison />
   <Pricing />
   <Testimonial />
   <CTA />
   <Footer />
     
   </>
  )
}

export default App
