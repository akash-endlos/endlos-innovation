"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsArrowRightCircle } from "react-icons/bs";
import "./swiper-carousel.css";
const SwiperCarousel = ({ data }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const slideTexts = [
        "Recycling Machines",
        "Solid Waste Management",
        "Vending Machines",
        "Hospitality Case Goods",
      ];
      return '<span class="' + className + '">' + slideTexts[index] + "</span>";
    },
  };
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide>
            <video
              src={item.src}
              className="video-container"
              autoPlay
              loop
              muted
            />
            <div className="swiper-content">
              <h5 className="fs-2 text-color">{item.title}</h5>
              <BsArrowRightCircle className="text-color" size={45} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCarousel;
