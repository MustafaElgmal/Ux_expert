import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import img from '../../assets/uipattern1.png'
import './designer-nav.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Designernav = () => {
    const imgArr=[img,img,img,img,img,img,img]
    const categories=["test","test","test","test","test","test","test","test","test","test","test","test","test","test",]
  return (
    <div className='w-[30%]'>
        <div className="flex flex-col gap-7 bg-[#252627] px-[5%]">
            <div className="flex mt-4 items-center">
                <button className='bg-white p-2 rounded-tl-md rounded-bl-md'><AiOutlineSearch className=' text-2xl'/></button>
                <input type="text" placeholder='Search For Pattern' className='p-2 rounded-tr-md rounded-br-md outline-none w-full' />
            </div>
            <div className="swiper-div">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    className="text-white select-none"
                    >
                    {categories.map((item,index)=><SwiperSlide key={Math.random()} className='swiper-item'>{item+index}</SwiperSlide>)}

                </Swiper>
            </div>
            <div className="container">
                {
                    imgArr.map((item)=>{
                        return(
                            <div key={Math.random()} className='design-pattern-container flex  flex-col gap-2 mb-[10%] cursor-grab text-white' onDrag={(e)=>console.log(e.target)}>
                                <div className='rounded-md border-solid border-[2px] border-white border-spacing-x-3 flex justify-center px-10 py-5'>
                                    <img src={item} alt="" className=''/>
                                </div>
                                <p className=' flex justify-start'>Test</p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default Designernav