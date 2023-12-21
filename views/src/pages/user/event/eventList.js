import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogCard from '../../../component/BlogCard';
import data from './data';
import img1 from '../../../img/event1.png';
import img2 from '../../../img/event2.png';
import img3 from '../../../img/event3.png';

const Event = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };
  
  return (
    <div className="flex-grow flex pl-10 pt-8 bg-blue-50">
      <div className="w-1/10 overflow-hidden h-screen mt-4">
        <div className="sticky top-0 h-screen max-w-xs ">
          <Slider {...settings}>
            <img className="h-full border border-blue-500 rounded object-cover" src={img1} alt="Image 1" />
            <img className="h-full border border-blue-500 rounded object-cover" src={img2} alt="Image 2" />
            <img className="h-full border border-blue-500 rounded object-cover" src={img3} alt="Image 3" />
          </Slider>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        <BlogCard data={data} />
      </div>
    </div>
  );
};

export default Event;
