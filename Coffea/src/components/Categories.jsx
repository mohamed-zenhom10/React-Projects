import React from 'react'

import { categories } from '../data/data'

const Categories = () => {
  return (
    <section className="bg-[#E2D9C8] py-20">
      <div className="container mx-auto px-5 md:px-0 flex justify-around items-center gap-5 md:gap-0 flex-wrap flex-col md:flex-row">
        {categories.map((item , index) => (
          <div key={index} className="flex justify-center items-center flex-col gap-2.5"> 
            <img src={item.img} alt={item.title} />
            <p className="text-2xl text-[#544A3E]">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
