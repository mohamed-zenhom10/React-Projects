import React from 'react'
import TopHeader from './components/Header/TopHeader'
import BottomHeader from './components/Header/BottomHeader'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/productDetails/ProductDetails'
import Cart from './pages/cart/Cart'
import { Toaster } from 'react-hot-toast'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import Search from './pages/search/Search'
import Favorite from './pages/Favorite/Favorite'
import About from './pages/About/About'
import Contact from './pages/contact/Contact'
import Blog from './pages/Blog/Blog'

const App = () => {

  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>

      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: "#e9e9e9",
          borderRadius: "8px",
          padding: "10px"
        }
      }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/category/:cat" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog" element={<Blog />}/>
      </Routes>

    </>
  )
}

export default App
