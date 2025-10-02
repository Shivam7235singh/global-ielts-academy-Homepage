import React from 'react'
import Hero from './Hero'
import About from './About'
import Courses from './Courses'
import Features  from './Features'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <main>
     <Hero />
     <Courses />
     <Features />
     <Testimonials />
     <About />
    </main>
  )
}
export default Home

