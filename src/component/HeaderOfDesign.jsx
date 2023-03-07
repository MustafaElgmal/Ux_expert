import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  saveToFileHtml,
  saveToFileVue,
  saveToFileReact,
} from "../utils/functions";
import UxPertLogo from "../assets/uxpertlogo.svg";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Login from "../assets/loginPage1.png";
import loginpage from "../pages/Login";
import { dragItem } from "../utils/draging";
import { useNavigate } from "react-router-dom";
const HeaderOfDesign = () => {
  const [show, setShow] = useState();
  const navigate = useNavigate();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }

  return (
    <div>
      <div className="relative">
        <header className="bg-[#0085F7] w-full flex flex-row justify-between px-[4%]  py-[1%]">
          <div className="text-[#FFFFFF] pt-[0.5%] flex flex-row gap-6 ">
            <button
              className="flex flex-row gap-4 font-semibold opacity-80 hover:opacity-100"
              onClick={() => navigate("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="20"
                viewBox="0 0 9.616 17.925"
              >
                <path
                  id="Vector"
                  d="M.067,1.325A1.348,1.348,0,0,1,2.335.362L8.7,6.69a3.169,3.169,0,0,1,0,4.459L2.335,17.5A1.348,1.348,0,1,1,.429,15.59L6.794,9.261a.456.456,0,0,0,0-.647L.429,2.268a1.348,1.348,0,0,1-.362-.943Z"
                  transform="translate(9.616 17.925) rotate(180)"
                  fill="#fff"
                />
              </svg>
              Home
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="104.847"
            height="33.784"
            viewBox="0 0 104.847 33.784"
          >
            <path
              id="Path_584"
              data-name="Path 584"
              d="M5.315-6.134a2.741,2.741,0,0,0,1.536.5,2.219,2.219,0,0,0,1.286-.392A5.623,5.623,0,0,0,9.529-7.578a11.724,11.724,0,0,0,.893-2.55L15.24-28.5h5.271L15.731-10.13a17.832,17.832,0,0,1-2.925,6.35A7.311,7.311,0,0,1,9.97-2.085a11.258,11.258,0,0,1-3.835.66,9.1,9.1,0,0,1-2.961-.464q-3.782-.892-3.782-5.1a8.8,8.8,0,0,1,.25-2.14L2.5-18.585,3.744-23.4a5.507,5.507,0,0,1-2.89.749,9.128,9.128,0,0,1-1.106-.07L.64-26.076h.891A3.814,3.814,0,0,0,5.061-28.5h5.276L7.786-18.581,5.029-8.953A7.735,7.735,0,0,0,4.886-7.6Q4.886-6.348,5.315-6.134ZM36.993.786a1.866,1.866,0,0,0,1.57-.678l1.07,3.211a6.335,6.335,0,0,1-4.7,1.926A4.128,4.128,0,0,1,31.727,3.96a8.271,8.271,0,0,1-1.46-2.749,30.284,30.284,0,0,1-.962-2.963L27.165-9.583,21.752-1.746h-6.27L25.338-16.13l-2.281-8.345a6.716,6.716,0,0,1-4.969,1.858,9.849,9.849,0,0,1-1.43-.1l.892-3.356h.892a3.747,3.747,0,0,0,3.5-2.426H27.5l1.786,6.608L33.817-28.5h6.27l-9,13.127L34.817-1.746Q35.245.644,36.993.786Zm3.318-24.152a5.722,5.722,0,0,1-2.89.713,8.28,8.28,0,0,1-1.07-.07l.892-3.355h.892a3.793,3.793,0,0,0,3.5-2.426H47.3a9.646,9.646,0,0,1,7.242,3.139,6.424,6.424,0,0,1,1.177,3.782,8.254,8.254,0,0,1-2.283,5.423,10.8,10.8,0,0,1-4.352,2.319,11.19,11.19,0,0,1-4.6.357l.785-3.246q4.495.392,5.494-4.245.036-.357.036-.713a2.777,2.777,0,0,0-1.535-2.64,4.492,4.492,0,0,0-2.284-.5,2.838,2.838,0,0,1-.643,0L40.318-1.746H34.638Zm26.9,8.419H60.9L58.431-5.457h8.993l-1.07,3.71h-14.2l5.637-21.619a5.528,5.528,0,0,1-2.855.713,9.128,9.128,0,0,1-1.106-.07l.892-3.355h.892A3.816,3.816,0,0,0,59.147-28.5H73.131l-1.072,3.674H63.445l-1.551,6.172H68.28Zm6.135-8.419a5.528,5.528,0,0,1-2.855.713,9.128,9.128,0,0,1-1.106-.07l.892-3.355h.892A3.816,3.816,0,0,0,74.7-28.5h5.672a9.646,9.646,0,0,1,7.242,3.139A6.466,6.466,0,0,1,88.9-21.439a7.578,7.578,0,0,1-2.39,5.28,7.443,7.443,0,0,1-4.388,2.319,9.439,9.439,0,0,1,1.463,5.066A23.107,23.107,0,0,1,83.3-5.688a23.388,23.388,0,0,0-.285,2.622,1.948,1.948,0,0,0,.357,1.32,9.044,9.044,0,0,0,.749.821,1.168,1.168,0,0,0,.856.357,4.621,4.621,0,0,0,1.534-.392l.678,3.817A10.239,10.239,0,0,1,82.121,4.39a5.16,5.16,0,0,1-2.89-.75,4.877,4.877,0,0,1-2.1-4.215,10.939,10.939,0,0,1,.321-2.339q.321-1.411.678-2.875a20.86,20.86,0,0,0,.535-4.251q0-2.536-1.142-3.464l.821-3.25a4.942,4.942,0,0,0,5.458-4.25,4.2,4.2,0,0,0,.071-.75A2.785,2.785,0,0,0,82.345-24.4a4.255,4.255,0,0,0-2.3-.5,1.52,1.52,0,0,1-.6.079L73.386-1.746H67.709Zm16.2-1.463a4.631,4.631,0,0,0-3.211,1.356l-1.106-3.211a6.7,6.7,0,0,1,4.816-1.855q3.282.036,14.2.036l-1.065,3.674H97.707L91.64-1.746H86.367L92.4-24.828Z"
              transform="translate(0.608 28.538)"
              fill="#fff"
            />
          </svg>
          <button
            onClick={toggleShow}
            className="export-design bg-[#FFFFFFF2]   rounded-lg flex flex-row gap-3 px-[3%] py-[0.5%] font-medium text-[16px]  hover:shadow-xl hover:border-x-1"
          >
            <svg
              className="bottom-1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-upload"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />{" "}
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />{" "}
            </svg>
            Export Project
          </button>
        </header>
        <div className="flex flex-row">
          <aside className="bg-[#252627] h-full w-[30%] px-[1%] py-[1%] relative">
            <div className="bg-[#FFFFFF] h-[30%] py-[2%] flex flex-row rounded-sm ">
              <svg
                className="pl-[1%]"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 22.2 21.88"
              >
                <path
                  id="Vector"
                  d="M14.985,16.4a9.217,9.217,0,1,1,1.7-1.782l5.161,5.161A1.23,1.23,0,0,1,20.1,21.517Zm-5.776.2A7.373,7.373,0,1,0,4,14.442,7.373,7.373,0,0,0,9.21,16.6Z"
                  fill="#0d1216"
                />
              </svg>

              <input
                className=" ml-[1%] block w-full"
                type="text"
                placeholder="Search for Patterns"
              />
            </div>
            <div className="my-[8%] text-[#FFFFFFB2]">
              <Swiper
                slidesPerView={3}
                spaceBetween={3}
                navigation={true}
                Navigation={{
                  clickable: true,
                }}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  <button className=" px-[5%] py-[5%] border-[1px] border-[#FFFFFFB2] opacity-70 text-[14px] text-center hover:opacity-100">
                    {" "}
                    login Screen
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className=" px-[5%] py-[5%] border-[1px] border-[#FFFFFFB2] opacity-70 text-[14px] text-center hover:opacity-100">
                    {" "}
                    login Screen
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className=" px-[5%] py-[5%] border-[1px] border-[#FFFFFFB2] opacity-70 text-[14px] text-center hover:opacity-100">
                    {" "}
                    login Screen
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className=" px-[5%] py-[5%] border-[1px] border-[#FFFFFFB2] opacity-70 text-[14px] text-center hover:opacity-100">
                    {" "}
                    login Screen
                  </button>
                </SwiperSlide>
                <SwiperSlide>
                  <button className=" px-[5%] py-[5%] border-[1px] border-[#FFFFFFB2] opacity-70 text-[14px] text-center hover:opacity-100">
                    {" "}
                    login Screen
                  </button>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="my-[3%] box">
              <div className="text-[#FFFFFFE5] font-semibold text-left">
                Recently used
              </div>

              <div
                className=" px-[1%] text-left text-[#FFFFFFB2] my-[2%]"
                id="item"
                draggable={true}
              >
                         <img src={Login} />
                <div className="mt-[1%]">Login Pattern #1</div>
              </div>
              <div
                className=" px-[1%] text-left text-[#FFFFFFB2] my-[2%]"
                id="item"
                draggable={true}
              >
                         <img src={Login} />
                <div className="mt-[1%]">Login Pattern #2</div>
              </div>
            </div>
          </aside>
          <section className="bg-green-400 w-full"></section>
        </div>

        {show && (
          <div className="w-[40%] z-50   absolute top-[40%] left-[30%]">
            <div className=" pb-[4%] pl-[40%] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="30"
                viewBox="0 0 173.682 55.986"
              >
                <path
                  id="Path_583"
                  data-name="Path 583"
                  d="M9.2,8.589a4.539,4.539,0,0,0,2.544.828,3.674,3.674,0,0,0,2.13-.65A9.316,9.316,0,0,0,16.184,6.2,19.434,19.434,0,0,0,17.664,1.97l7.981-30.449h8.732L26.458,1.968a29.556,29.556,0,0,1-4.846,10.523,12.109,12.109,0,0,1-4.7,2.808,18.642,18.642,0,0,1-6.353,1.094,15.06,15.06,0,0,1-4.9-.769Q-.608,14.146-.608,7.17A14.594,14.594,0,0,1-.194,3.623L4.532-12.044,6.6-20.025a9.12,9.12,0,0,1-4.787,1.242A15.116,15.116,0,0,1-.017-18.9l1.476-5.56H2.936q3.838,0,5.847-4.02h8.741L13.3-12.037,8.729,3.919a12.823,12.823,0,0,0-.236,2.247Q8.493,8.234,9.2,8.589ZM61.679,20.058a3.091,3.091,0,0,0,2.6-1.123l1.773,5.321q-2.6,2.956-7.787,3.192a6.836,6.836,0,0,1-5.309-2.13,13.707,13.707,0,0,1-2.418-4.555,50.2,50.2,0,0,1-1.593-4.911L45.4,2.875,36.431,15.861H26.044L42.372-7.976,38.594-21.8a11.123,11.123,0,0,1-8.231,3.08,16.309,16.309,0,0,1-2.368-.174l1.477-5.561h1.477q3.841,0,5.791-4.02h9.219l2.958,10.95,7.5-10.95H66.805L51.9-6.725l6.171,22.585Q58.783,19.822,61.679,20.058Zm5.5-40.024a9.475,9.475,0,0,1-4.787,1.182,13.712,13.712,0,0,1-1.773-.115l1.477-5.56H63.57q3.782,0,5.791-4.02h9.4a15.976,15.976,0,0,1,12,5.2A10.648,10.648,0,0,1,92.7-17.01q0,4.611-3.782,8.986a17.885,17.885,0,0,1-7.21,3.843,18.53,18.53,0,0,1-7.623.591l1.3-5.38q7.446.65,9.1-7.035.059-.591.059-1.182a4.6,4.6,0,0,0-2.543-4.375,7.438,7.438,0,0,0-3.784-.828,4.7,4.7,0,0,1-1.065,0L67.187,15.861H57.778ZM111.736-6.014H101.289l-4.1,15.726h14.9l-1.773,6.148H86.794l9.338-35.826A9.154,9.154,0,0,1,91.4-18.783a15.116,15.116,0,0,1-1.832-.115l1.477-5.56h1.477q3.841,0,5.85-4.02h23.165l-1.777,6.089H105.5l-2.57,10.228h10.578ZM121.9-19.966a9.154,9.154,0,0,1-4.729,1.182,15.116,15.116,0,0,1-1.832-.115l1.477-5.56h1.477q3.841,0,5.85-4.02h9.4a15.976,15.976,0,0,1,12,5.2,10.719,10.719,0,0,1,2.127,6.5q0,4.611-3.959,8.75a12.327,12.327,0,0,1-7.269,3.843,15.646,15.646,0,0,1,2.423,8.395,38.31,38.31,0,0,1-.473,5.114,38.767,38.767,0,0,0-.473,4.345,3.23,3.23,0,0,0,.591,2.187,14.987,14.987,0,0,0,1.241,1.36,1.934,1.934,0,0,0,1.418.591,7.652,7.652,0,0,0,2.541-.65l1.123,6.326a16.956,16.956,0,0,1-8.392,2.542,8.546,8.546,0,0,1-4.787-1.243,8.083,8.083,0,0,1-3.487-6.984,18.134,18.134,0,0,1,.532-3.877q.532-2.338,1.123-4.765a34.581,34.581,0,0,0,.886-7.044q0-4.2-1.891-5.741l1.359-5.386q7.387.177,9.042-7.044a6.968,6.968,0,0,0,.118-1.243,4.615,4.615,0,0,0-2.524-4.38,7.047,7.047,0,0,0-3.815-.829,2.517,2.517,0,0,1-1,.131L121.965,15.861h-9.4Zm26.829-2.424a7.669,7.669,0,0,0-5.32,2.247l-1.832-5.321q2.778-2.9,7.978-3.074,5.437.059,23.52.059l-1.765,6.089h-9.057L152.2,15.861h-8.735l9.988-38.25Z"
                  transform="translate(0.608 28.538)"
                  fill="#0085f7"
                />
              </svg>
            </div>
            <div className="rounded-lg text-[#0085F7] text-center text-2xl py-[5%]  bg-white font-medium">
              Great! Your Design <br /> is created successfully
            </div>
            <div className="bg-white flex flex-row justify-around text-center text-sm text-white px-[2%]">
              <button
                className="bg-[#0085F7] w-[20%] rounded-sm "
                onClick={saveToFileHtml}
              >
                <i class="fa fa-download" aria-hidden="true"></i> Html
              </button>
              <button
                className="bg-[#0085F7] w-[20%] rounded-sm"
                onClick={() => saveToFileReact(loginpage)}
              >
                <i class="fa fa-download" aria-hidden="true"></i> React
              </button>
              <button
                className="bg-[#0085F7] w-[20%] rounded-sm"
                onClick={saveToFileVue}
              >
                <i class="fa fa-download" aria-hidden="true"></i> Vue.js
              </button>
            </div>
            <div className="rounded-lg bg-white py-[5%]">
              <button className="hover:text-[#0085F7]">
                return back to home page
              </button>{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderOfDesign;
