import React from 'react'

const SlideProductLoading = () => {
  return (
    <div className="slide-product-loading">
      <div className="slide-products">
        <div className="container">
          <div className="top-slide">
            <h2 className='loading'></h2>
            <p className='loading'></p>
          </div>

          <div className="product-loading">
            <div className="product">
              <div className="product-img loading"></div>
              <h5 className="name loading"></h5>
              <p className="price loading"></p>
            </div>
            <div className="product">
              <div className="product-img loading"></div>
              <h5 className="name loading"></h5>
              <p className="price loading"></p>
            </div>
            <div className="product">
              <div className="product-img loading"></div>
              <h5 className="name loading"></h5>
              <p className="price loading"></p>
            </div>
            <div className="product">
              <div className="product-img loading"></div>
              <h5 className="name loading"></h5>
              <p className="price loading"></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SlideProductLoading
