/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import UxPertLogo from "../assets/uxpertlogo.svg";
const Header = () => {
  const navigate=useNavigate()
  return (
    <div className="h-[20%]  flex justify-between items-center w-full px-[10%] py-[1%] bg-[#FFFFFF]">
      <div className=" md:basis-2/12 md:mr-[20%] md:mb-[3%] md:mt-[2%] lg:basis-3/12 lg:mr-[45%] cursor-pointer" onClick={()=>navigate('/')} >
        <img src={UxPertLogo} className="w-[100%]" />
      </div>
      <div className="flex w-full">
        <button className="w-[100%] cursor-pointer  bg-[#0085F7] text-[#FFFFFF] text-base font-normal text-center rounded-lg mr-[1%]" onClick={()=>navigate('/createdesign')}>
          Create a design
        </button>
        <div className=" flex cursor-pointer justify-center items-center w-[100%]  text-[#0085F7] font-normal bg-[#FFFFFF] rounded-lg border-[1px] border-[#0085F7] text-base text-center " onClick={()=>navigate('/login')}>
          <i
            className="fa fa-user-circle-o mx-[3px] w-9 h-9 text-[24px] mt-3"
            aria-hidden="true"
          ></i>
          <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
