import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { saveAs } from 'file-saver'
import exampleuipattern from '../assets/uipattern1.png';
const UiPattern = () => {
    return (
        <div className='ui-pattern-container'>
        <div className='title'>
            <div>
            Recent UI patterns
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
                        <div className="pattern">
                            <button onClick={()=>{saveAs(exampleuipattern,'image.png')}}><img src={exampleuipattern}/></button>
                        </div>
                        <div className='pattern-name'>Collectible Achievements</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pattern-empty"></div>
                        <div className='pattern-name'> UI Pattern B</div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div className="pattern-empty"></div>
                        <div className='pattern-name'>UI Pattern C</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pattern-empty"></div>
                        <div className='pattern-name'>UI Pattern D</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pattern-empty"></div>
                        <div className='pattern-name'>UI Pattern E</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pattern-empty"></div>
                        <div className='pattern-name'>UI Pattern F</div>
                    </SwiperSlide>
                </Swiper>           
        </div>
    </div>
    )
}


export default UiPattern