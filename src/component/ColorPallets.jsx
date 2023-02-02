import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { saveAs } from 'file-saver';
import "swiper/css";
import "swiper/css/navigation";
import examplecolorpallet from '../assets/colorpallet1.png';
const ColorPallet = () => {
    return (
        <div className='color-pallet-container h-[20%]'>
            <div className='title'>
                <div>
                    Trendy color palettes you may like..
                </div>
                <button className='see-all'>See all</button>
            </div>
            <div className='swip-part'>
                        <Swiper
                        slidesPerView={4}
                        spaceBetween={2}
                        navigation={true}
                        Navigation={{
                            clickable: true,
                        }}
                        
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='swiper-side'>
                            <div className="pallete">
                                <button onClick={()=>{saveAs(examplecolorpallet,'image.png')}}><img src={examplecolorpallet}/></button>
                            </div>
                            <div className='pallete-name'>color pallette #1</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pallete-empty"></div>
                            <div className='pallete-name'>color pallette #2</div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className="pallete-empty"></div>
                            <div className='pallete-name'>color pallette #3</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pallete-empty"></div>
                            <div className='pallete-name'>color pallette #4</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pallete-empty"></div>
                            <div className='pallete-name'>color pallette #5</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pallete-empty"></div>
                            <div className='pallete-name'>color pallette #6</div>
                        </SwiperSlide>           
                </Swiper>
            </div>
        </div>
    )
}


export default ColorPallet