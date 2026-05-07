import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination} from 'swiper/modules';
import { Link } from 'react-router-dom';

import slider_1 from "../imgs/slider-1.png";
import slider_2 from "../imgs/slider-2.png";
import slider_3 from "../imgs/slider-3.png";

const HeroSlider = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            pagination={true} modules={[Autoplay, Pagination]} className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introducing The New</h4>
                <h3>Mobile</h3>
                <p>Ipone Max Pro</p>
                <Link to="/" className='btn'>Shop Now</Link>
              </div>
              <img src={slider_1} alt="slider 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing The New</h4>
                <h3>Handfree</h3>
                <p>Hand Free Pro</p>
                <Link to="/" className='btn'>Shop Now</Link>
              </div>
              <img src={slider_2} alt="slider 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing The New</h4>
                <h3>EarBods</h3>
                <p>EarBods Max</p>
                <Link to="/" className='btn'>Shop Now</Link>
              </div>
              <img src={slider_3} alt="slider 1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default HeroSlider
