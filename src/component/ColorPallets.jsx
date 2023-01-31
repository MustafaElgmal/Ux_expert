import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { saveAs } from 'file-saver';
import "swiper/css";
import "swiper/css/navigation";
import examplecolorpallet from '../assets/colorpallet1.png';
const ColorPallets = () => {
    return (
        <div className='color-pallet-container'>
            <div className='title'>
                <div>
                    Trendy color palettes you may like..
                </div>
                <button className='see-all'>See all</button>
            </div>
            <div className='swip-part'>
                <Swiper            
                    navigation={true}
                    Navigation={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Swiper
                        slidesPerView={6}
                        spaceBetween={16}
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
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}


export default ColorPallets