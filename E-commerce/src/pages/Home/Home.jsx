import React, { useEffect, useState } from 'react'
import HeroSlider from '../../components/HeroSlider'
import SlideProducts from '../../components/Products/SlideProducts'
import "./styles.css"
import SlideProductLoading from '../../components/Products/SlideProductLoading'

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories"
]

const Home = () => {

  const [products , setProducts] = useState({});
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`)
            const data = await response.json();
            return {[category] : data.products}
          })
        )

        const productsData = Object.assign({} , ...results);
        setProducts(productsData);

      } catch(error) {
        console.log("error in get products: "+error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  } , []);

  return (
    <>
      <HeroSlider />

      {loading ? (
        categories.map((category) => (
          <SlideProductLoading key={category} />
        ))
      ) : (
        categories.map((category) => (
          <SlideProducts key={category} title={category.replace("-" , " ")} data={products[category]} />
        ))
      )}

    </>
  )
}

export default Home
