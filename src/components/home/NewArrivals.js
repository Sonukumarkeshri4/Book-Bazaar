import React from 'react'
import "./NewArrivals.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NewArrivals = () => {
  
  var settings = {
    dots: true,
    autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      slidesToScroll: 3,
      initialSlide: 0,
      
    };
  return (
    <div className='container'>
    <h2 className='newHead'>Our Best sellers</h2>
    <Slider {...settings}>
      <div>
        <img className='newItems' src="images1/1.jpg" alt="" />
      </div>
      <div >
      <img className='newItems' src="images1/2.jpg" alt="" />
      
      </div>
      <div >
      <img className='newItems' src="images1/3.jpg" alt="" />
     
      </div>
      <div >
      <img className='newItems' src="images1/4.jpg" alt="" />
     
      </div>
      <div >
      <img className='newItems' src="images1/5.jpg" alt="" />
      
      </div>
      <div >
      <img className='newItems' src="images1/6.jpg" alt="" />
      
      </div>
    </Slider>
    </div>
  )
}

export default NewArrivals