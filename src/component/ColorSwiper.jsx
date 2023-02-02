import React from "react";
import DivColor from "./DivColor";
const members = [{}, {}, {}, {}, {}, {}, {}, {}];
const ColorSwiper = () => {
  return (
    <div>
      <div className=" mx-[9%] h-[400px]  pl-5 justify-center items-center 3xl:flex hidden">
        <DivColor slidesPerView={members.length < 6 ? members.length : 6} />
      </div>
      <div className=" mx-[9%] h-[400px]  pl-5 justify-center items-center 2xl:flex 3xl:hidden hidden">
        <DivColor slidesPerView={members.length < 5 ? members.length : 5} />
      </div>
      <div className=" mx-[9%] h-[400px]  pl-5 justify-center items-center xl:flex 2xl:hidden 3xl:hidden hidden">
        <DivColor slidesPerView={members.length < 4 ? members.length : 4} />
      </div>
      <div className="mx-[8%] h-[400px] pl-5  justify-center items-center xl:hidden 2xl:hidden 3xl:hidden lg:flex hidden">
        <DivColor slidesPerView={members.length < 3 ? members.length : 3} />
      </div>
      <div className=" mx-[9%]  h-[400px] justify-center items-center xl:hidden 2xl:hidden 3xl:hidden lg:hidden  sm:flex hidden ">
        <DivColor slidesPerView={members.length < 2 ? members.length : 2} />
      </div>
      <div className=" mx-[9%] h-[400px] justify-center items-center xl:hidden lg:hidden 2xl:hidden 3xl:hidden sm:hidden flex ">
        <DivColor slidesPerView={1} />
      </div>
    </div>
  );
};

export default ColorSwiper;
