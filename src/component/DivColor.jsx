import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const DivColor = ({ slidesPerView,type }) => {
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
      {type==='medical'? <SwiperSlide>
        <div className="divColor bg-[#0000FF]"></div>
        <span>Blue: #0000FF</span>
      </SwiperSlide>:type==='food'? <SwiperSlide>
        <div className="divColor bg-[#FF0000]"></div>
        <span>Red: #FF0000
        </span>
      </SwiperSlide>: <SwiperSlide>
        <div className="divColor bg-[#89cff0]"></div>
        <span>Baby Blue: #89cff0
        </span>
      </SwiperSlide>}
      <SwiperSlide>
        <div className="divColor bg-[#FFA500]"></div>
        <span>Orange: #FFA500</span>
      </SwiperSlide>
      <SwiperSlide>
        <div className="divColor bg-[#FFFF00]"></div>
        <span>Yellow: #FFFF00</span>
      </SwiperSlide>
      <SwiperSlide>
        <div className="divColor bg-[#008000]"></div>
        <spn>Green: #008000</spn>
      </SwiperSlide>
      <SwiperSlide>
        <div className="divColor bg-[#800080]"></div>
        <span>Purple: #800080</span>
      </SwiperSlide>
    </Swiper>
  );
};

export default DivColor;
