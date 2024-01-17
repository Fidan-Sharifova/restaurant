import React from "react";
import "./Testimonials.scss";
import { LuIceCream2 } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="middleArea">
        <LuIceCream2 className="middleAreaIcon" style={{}} />
        <div className="middleTextArea">
          <div className="hr"></div>
          <h1 className="middleAreaText" style={{ color: "white" }}>
            {" "}
            Testimonials{" "}
          </h1>
          <div className="hr"></div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide">
            <p style={{ color: "white",fontSize:"16px" }}>
           Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. 
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <p style={{ color: "white", fontSize:"16px" }}>
           Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. 
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <p style={{ color: "white", fontSize:"16px" }}>
           Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. 
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
