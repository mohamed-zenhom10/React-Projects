import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from './Home'
import Coffee from '../components/Coffee'
import Bakery from '../components/Bakery'
import Shop from '../components/Shop'
import About from '../components/About'
import Login from '../components/Login'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Pages = () => {
  return (
    <>
      <div style={{backgroundColor: "black"}}>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/bakery' element={<Bakery />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default Pages
