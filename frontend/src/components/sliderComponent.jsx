import React, { Component } from "react";
import Slider from "react-slick";


function LazyLoad() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <div className="slider-container h-full overflow-hidden w-full ">
  <Slider {...settings}>
    <div className="h-80 overflow-hidden">
      <img
        className="w-full h-full object-cover object-center"
        src="https://th.bing.com/th/id/OIP.HdVQoiinEb0LO7xsTs7JkQHaD4?w=1200&h=630&rs=1&pid=ImgDetMain"
        alt="Slide 1"
      />
    </div>
    <div className="h-80 overflow-hidden">
      <img
        className="w-full h-full object-cover object-center"
        src="https://wallpaperaccess.com/full/4180903.jpg"
        alt="Slide 2"
      />
    </div>
    <div className="h-80 overflow-hidden">
      <img
        className="w-full h-full object-cover object-center"
        src="https://wallpaperaccess.com/full/1621490.jpg"
        alt="Slide 3"
      />
    </div>
    <div className="h-80 overflow-hidden">
      <img
        className="w-full h-full object-cover object-center"
        src="https://www.projectmanager.com/wp-content/uploads/2019/06/190610_Blog_Feature_Logistics.jpg"
        alt="Slide 4"
      />
    </div>
  </Slider>
</div>

  );
}

export default LazyLoad;
