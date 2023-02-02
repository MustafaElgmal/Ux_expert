import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const DivColor = ({slidesPerView}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={8}
      navigation={true}
      Navigation={{
        clickable: true,
      }}
      modules={[Navigation]}      
    >
      <SwiperSlide>
        <div className="divColor bg-[#FF0000]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="divColor bg-[#FF0000]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="divColor bg-[#FF0000]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="divColor bg-[#FFA500]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="divColor bg-[#FFFF00]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="divColor bg-[#008000]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="divColor bg-[#0000FF]"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="divColor bg-[#800080]"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default DivColor;
