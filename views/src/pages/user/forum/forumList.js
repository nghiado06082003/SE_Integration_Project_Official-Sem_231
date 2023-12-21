/**
 * Đồ họa giống dạng danh sách cái topic gồm chủ đề, lượt cmt, lượt like bên ngoài, tác giả đăng, thời gian đăng
 * 
 */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReviewList from '../../../component/Review';
import img1 from '../../../img/event1.png';
import img2 from '../../../img/event2.png';
import img3 from '../../../img/event3.png';
import reviews from './reviewdata';
const Forum = () => {
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
    <div className="flex-grow flex pl-20 pt-20 bg-blue-50">
      <div className="flex-grow overflow-y-auto">
        <ReviewList data={reviews} />
      </div>
    </div>
  );
};

export default Forum;
