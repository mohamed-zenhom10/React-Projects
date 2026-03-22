import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Services from '../components/Services'
import About from '../components/About'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import FindDoctors from '../components/FindDoctors'
import Contact from '../components/Contact'

const Page = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />}/>
        <Route path="/find-doctor" element={<FindDoctors />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default Page
