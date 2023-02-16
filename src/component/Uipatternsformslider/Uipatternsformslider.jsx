import React from "react";
import "./ui-patterns-form-sliderstyle.css";
import pic from "../../assets/passwordStrength.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
const Uipatternsformslider = () => {
  let arr = [pic, pic, pic];
  let x = "hello world";
  return (
    <div>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={2}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {arr.map((img) => (
          <SwiperSlide key={Math.random()}>
            <img src={img} alt="no pic" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Uipatternsformslider;
