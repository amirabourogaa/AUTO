import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import img1 from "../../src/assets/1.jpg"
import img2 from "../../src/assets/2.jpg"
import img3 from "../../src/assets/3.jpg"
import img4 from "../../src/assets/4.jpg"
import img5 from "../../src/assets/5.jpg"
import img6 from "../../src/assets/6.jpg"
import img7 from "../../src/assets/7.jpg"
import img8 from "../../src/assets/8.jpg"
import img9 from "../../src/assets/9.jpg"
import img10 from "../../src/assets/10.jpg"

export default function Promo() {
  return <div>
{/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  className="d-block w-100" src="https://www.saonediffusion.fr/ressources/images/2e600d7d950f.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.saonediffusion.fr/ressources/images/2e600d7d950f.jpg" alt="Second slide"/>
     
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.saonediffusion.fr/ressources/images/2e600d7d950f.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}

<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>      
          <img  src={img1} alt="Second slide"/>
</SwiperSlide>
        <SwiperSlide>
        <img  src={img2} alt="Second slide"/>
     
          </SwiperSlide>
        
        <SwiperSlide><img  src={img3} alt="Second slide"/></SwiperSlide>
          
        <SwiperSlide><img  src={img4} alt="Second slide"/></SwiperSlide>
          
        <SwiperSlide><img  src={img5} alt="Second slide"/></SwiperSlide>
          
        <SwiperSlide><img  src={img6} alt="Second slide"/></SwiperSlide>
          
        <SwiperSlide><img  src={img7} alt="Second slide"/></SwiperSlide>
          
        <SwiperSlide><img  src={img8} alt="Second slide"/></SwiperSlide>
          
        <SwiperSlide><img  src={img9} alt="Second slide"/></SwiperSlide>
          
        <SwiperSlide><img  src={img10} alt="Second slide"/></SwiperSlide>
      </Swiper>
  </div>;
}
