import React, { useState } from 'react';
import './CarouselPart.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../Assets/Images/carousel-1.png';
import img2 from '../../../Assets/Images/carousel-2.png';
import img3 from '../../../Assets/Images/carousel-3.png';
import img4 from '../../../Assets/Images/carousel-4.png';
import img5 from '../../../Assets/Images/carousel-5.png';

const CarouselPart = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <section className='carousel-part mt-5 mb-5'>
        <h4 className='fs-2 fw-semibold text-center' style={{color:"white"}}>Here are some of <span style={{color:"#7AB259"}}>our works</span></h4>
        <div className="container mt-5">
        <Slider {...settings}>
          <div className="carousel-slider">
            <img src={img1} alt="" width="350px" height="300px" />
          </div>
          <div className="carousel-slider">
          <img src={img2} alt="" width="350px" height="300px"  />
          </div>
          <div className="carousel-slider">
          <img src={img3} alt="" width="350px" height="300px"  />
          </div>
          <div className="carousel-slider">
          <img src={img4} alt="" width="350px" height="300px"  />
          </div>
          <div className="carousel-slider">
          <img src={img5} alt="" width="350px" height="300px"  />
          </div>
          <div className="carousel-slider">
          <img src={img4} alt="" width="350px" height="300px"  />
          </div>
        </Slider>
        </div>
        </section>
    );
};

export default CarouselPart;