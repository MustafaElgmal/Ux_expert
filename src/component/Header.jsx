/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import UxPertLogo from '../assets/uxpertlogo.png';
const Header = () => {
  return (
    <div className="h-[20%]  flex flex-row w-full py-[3%] px-[10%]">
      <div className="md:basis-2/12 md:mr-[20%] md:mb-[3%] md:mt-[2%] lg:basis-3/12 lg:mr-[45%] ">
        <img src={UxPertLogo}/>
      </div> 

          <button className='design-bttn md:basis-6/12 md:w-[30%] transition-all delay-1000  lg:w-[25%]  lg:basis-3/12  bg-[#0085F7] text-[#FFFFFF] text-base font-normal text-center rounded-lg mr-[1%]'><i className=" first-i fa  fa-paint-brush mx-[2px] w-6 h-6" aria-hidden="true"></i>Create a design<i className=" last-i fa  fa-paint-brush mx-[2px] w-6 h-6" aria-hidden="true"></i></button>
        <button class=' md:w-[30%] md:basis-4/12 lg:w-[25%] lg:basis-3/12 pt-2 text-[#0085F7] font-normal bg-[#FFFFFF] rounded-lg border-[1px] border-[#0085F7] text-base text-center  '><i class="fa fa-user-circle mx-[5px] w-9 h-9" aria-hidden="true"></i>Login</button>

    </div>
  )
} 

export default Header