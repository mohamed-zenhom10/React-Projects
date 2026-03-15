import React from 'react'

const SearchProduct = ({search , setSearch , searchCategory , setSearchCategory}) => {
  return (
    <div className="container">
      <div className="product-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="category">
            <span>Search by: </span>
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="category">Category</option>
            </select>
          </div>
          <div className="search-input">
            <input 
              type="text" placeholder="Search..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SearchProduct
