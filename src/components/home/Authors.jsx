import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewArrivals.css";


export const Authors = () => {
    const settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 1000,
     
      infinite: true,
      speed: 500,
     
      slidesToShow: 5,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div className='container contain2'>
        <h2 className='newHead'>Our Authors</h2>
        <br />
        <br />
        <Slider {...settings}>
        <tr>
        <td><img className='newItemsRound' src="images1/1.jpg" alt="" /></td>
        <td><h2 className='tdAuthor'>Sonu Kumar Keshri</h2></td>
      </tr>
      <tr>
        <td><img className='newItemsRound' src="images1/2.jpg" alt="" /></td>
        <td><h2 className='tdAuthor'>A K Poddar</h2></td>
      </tr>
      <tr>
        <td><img className='newItemsRound' src="images1/3.jpg" alt="" /></td>
        <td><h2 className='tdAuthor'>J K Rowling</h2></td>
      </tr>
      <tr>
        <td><img className='newItemsRound' src="images1/4.jpg" alt="" /></td>
        <td><h2 className='tdAuthor'>Anand Yadav</h2></td>
      </tr>
      <tr>
        <td><img className='newItemsRound' src="images1/5.jpg" alt="" /></td>
        <td><h2 className='tdAuthor'>Srila Prabhupad</h2></td>
      </tr>
      <tr>
        <td><img className='newItemsRound' src="images1/6.jpg" alt="" /></td>
        <td><h2 className='tdAuthor'>Rudyard Kipling</h2></td>
      </tr>
        </Slider>
      </div>
    );
}
