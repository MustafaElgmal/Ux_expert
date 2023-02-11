import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import exampleuipattern from "../assets/uipattern1.png";
import { downloadUiPattern } from "../utils/functions";
import { useNavigate } from "react-router-dom";
const pattern = [
  {
    title: 'Collectible Achievements',
    imgPath:exampleuipattern,
  },
];
const UiPattern = () => {
  const navigate=useNavigate()
  return (
    
    <div className="w-full  px-[10%] py-[1%]">
      <div className="flex flex-row w-full gap-x-24">
        <div className="basis-11/12  w-[77%] text-xl font-bold text-left">
          Recent UI patterns
        </div>
        <button className=" md:basis-3/12 w-[9%] lg:basis-1/12 text-xl font-[500] text-center transition-[0.5s] hover:text-[#0085F7] hover:font-semibold" onClick={()=>navigate('/uiPattern')}>See all</button>
      </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={8}
          navigation={true}
          Navigation={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper my-[1.5%]"
        >
          {pattern.map((pattern) => (

              <SwiperSlide className="w-[25%]  overflow-hidden">
              <div className="overflow-hidden rounded-[10px] w-full h-[80%]  flex flex-row">
                <button
                  onClick={() => {
                    downloadUiPattern(pattern.imgPath)
                  }}
                >
                  <img src={pattern.imgPath}  className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"/>
                </button>
              </div>
              <div className="text-center text-lg font-normal">{pattern.title}</div>
              </SwiperSlide>

          ))}
        </Swiper>
      </div>
  );
};

export default UiPattern;
