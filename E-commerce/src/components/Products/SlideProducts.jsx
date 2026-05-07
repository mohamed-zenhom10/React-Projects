import React from "react";
import Products from "./Products";
import "./products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const SlideProducts = ({ title, data }) => {
  return (
    <div className="slide-products">
      <div className="container">
        <div className="top-slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi
            asperiores eos, mollitia sint quasi?
          </p>
        </div>
        <div className="products">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide>
                  <Products item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SlideProducts;
