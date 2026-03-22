import React from 'react'
import Hero from './Hero'
import Services from '../components/Services'
import Blog from '../components/Blog'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import FindDoctors from '../components/FindDoctors'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Blog />
      <Testimonials />
      <FindDoctors />
      <Contact />
    </>
  )
}

export default Home
