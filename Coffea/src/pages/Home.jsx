import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Coffee from '../components/Coffee'
import Bakery from '../components/Bakery'
import Shop from '../components/Shop'
import About from '../components/About'
import Login from '../components/Login'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Coffee />
      <Bakery />
      <Shop />
      <About />
      <Login />
      <Footer />
    </>
  )
}

export default Home
