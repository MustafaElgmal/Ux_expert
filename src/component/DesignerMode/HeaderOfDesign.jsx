import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  saveToFileHtml,
  saveToFileVue,
  saveToFileReact,
  MakePage,
} from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import DesignerModeModal from "../DesignerModeModal/DesignerModeModal";
import "./designer-mode.css";
import { useEffect } from "react";
import { getComponentsByCategoryId } from "../../utils/apis";
import { filterComponents } from "../../utils/functions";
const HeaderOfDesign = ({ categories, components, trendingComponents }) => {
  const [cateId, setCateId] = useState();
  const [componentsFilter, setComponentsFilter] = useState([]);
  const [FilterSearch, setFilterSearch] = useState([]);
  const [show, setShow] = useState();
  const [pageCodes,setPageCodes]=useState([])
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setData("text/plain", e.target.id);
  };
  const [selectedColor1, setSelectedColor1] = useState('#000000');

  const handleColorChange1 = (event) => {
    setSelectedColor1(event.target.value);
  };
  const [selectedColor2, setSelectedColor2] = useState('#000000');

  const handleColorChange2 = (event) => {
    setSelectedColor2(event.target.value);
  };
  const handleDragEnd = (e,codes) => {
    MakePage(pageCodes,setPageCodes,codes)
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    draggedElement.style.display = "block";
    e.target.appendChild(draggedElement);
   
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.style.border = "1px solid blue";
    setIsDragging(true);
    
  };

  const handleDragLeave = (e) => {
    e.target.style.border = "none";
    
    
  };

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }

  const getAllComponetsByCategoryId = async (cateId) => {
    await getComponentsByCategoryId(
      cateId,
      setComponentsFilter,
      setFilterSearch
    );
  };
  useEffect(() => {
    getAllComponetsByCategoryId(cateId);
  }, [cateId]);

  
  return (
    <div>
      <div className="relative">
        {show && <DesignerModeModal setShow={setShow} pageCodes={pageCodes} />}
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
          <aside className="bg-[#252627] min-h-screen w-[30%] px-[1%] py-[1%] relative">
            <div className="bg-[#FFFFFF]  py-[2%] flex flex-row rounded-sm ">
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
                className=" ml-[1%] block w-full outline-none px-2"
                type="text"
                name="name"
                onChange={(e) =>
                  filterComponents(
                    componentsFilter,
                    e.target.value,
                    setFilterSearch
                  )
                }
                placeholder="Search for components"
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
                {categories.map((category) => (
                  <SwiperSlide key={category.id}>
                    <button
                      className=" min-w-[20px] px-[5%] py-[5%] border-[1px] border-[#FFFFFFB2] opacity-70 text-[20px] text-center hover:opacity-100"
                      onClick={() => setCateId(category.id)}
                    >
                      {category.name}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {!cateId ? (
              <div className="my-[3%] box">
                <div className="text-[#FFFFFFE5] font-semibold text-left">
                  Recently used
                </div>
                {trendingComponents.map((component) => (
                  <div
                    className="p-[5%]"
                    id="drag-me"
                    draggable="true"
                    onDragStart={handleDragStart}
                    onDragEnd={(e)=>handleDragEnd(e,component.codes)}
                    style={{
                      opacity: isDragging ? 0.5 : 1,
                      cursor: "move",
                    }}
                  >
                    <div
                      key={component.id}
                      className=" px-[1%] text-left text-[#FFFFFFB2] my-[2%]"
                    >
                      <img src={`${component.imgUrl}`} />

                      <div className="mt-[1%]">{component.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="my-[3%] box">
                {FilterSearch.map((component) => (
                  <div
                  className="p-[5%]"
                  id="drag-me"
                  draggable="true"
                  onDragStart={handleDragStart}
                  onDragEnd={(e)=>handleDragEnd(e,component.codes)}
                  style={{
                    opacity: isDragging ? 0.5 : 1,
                    cursor: "move",
                  }}
                >
                    <div
                    key={component.id}
                    className=" px-[1%] text-left text-[#FFFFFFB2] my-[2%]"
                  >
                     <img src={`${component.imgUrl}`} />
                    <div className="mt-[1%]">{component.name}</div>
                  </div>
                 
                </div>
                
                ))}
              </div>
            )}
          </aside>
         
          <div
            className="bg-white w-full px-[5%]"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
          </div>
          <div className="bg-[#252627] min-h-screen w-[10%] text-left  text-white  p-[2%] relative">
         <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="50px" height="50px"><linearGradient id="0O0q6J4HBgQKyT39nvTa~a" x1="46.807" x2="46.807" y1="9.849" y2="24.215" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#0O0q6J4HBgQKyT39nvTa~a)" d="M49.482,24.392l-9.874-9.874l4.232-4.232c0.39-0.39,1.021-0.39,1.411,0l8.464,8.464 c0.39,0.39,0.39,1.021,0,1.411L49.482,24.392z"/><linearGradient id="0O0q6J4HBgQKyT39nvTa~b" x1="32" x2="32" y1="8.084" y2="55.83" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#0O0q6J4HBgQKyT39nvTa~b)" d="M50.697,25.999l4.428-4.428c1.167-1.167,1.167-3.065,0-4.232l-8.464-8.464 c-1.167-1.167-3.065-1.167-4.232,0l-4.428,4.428c-0.664-0.175-1.4-0.011-1.92,0.509l-1.411,1.411c-0.52,0.52-0.684,1.256-0.509,1.92 L11.198,40.106l-0.508,0.508l-0.2,0.2l-2.373,9.967c-0.343,1.442,0.078,2.928,1.126,3.976s2.534,1.469,3.976,1.125l9.967-2.373 l0.2-0.2l0.508-0.508l22.964-22.964c0.664,0.175,1.4,0.011,1.92-0.509l1.411-1.411C50.708,27.399,50.872,26.663,50.697,25.999z M47.367,27.92L36.081,16.634l1.411-1.411l11.285,11.285L47.367,27.92z M23.46,50.414c-0.28-1.063-0.682-2.077-1.198-3.034 l20.872-20.872l2.116,2.116L23.46,50.414z M14.916,53.428c-0.12-1.074-0.58-2.115-1.405-2.939c-0.825-0.825-1.865-1.285-2.939-1.405 l0.698-2.931c1.649,0.266,3.173,1.036,4.357,2.22c1.184,1.184,1.954,2.709,2.22,4.357L14.916,53.428z M17.038,46.962 c-1.447-1.447-3.301-2.396-5.306-2.75l0.463-1.943c2.382,0.441,4.533,1.562,6.254,3.282s2.841,3.872,3.282,6.254l-1.943,0.463 C19.433,50.263,18.485,48.409,17.038,46.962z M19.859,44.141c-0.477-0.477-0.987-0.907-1.517-1.304l20.561-20.561l2.821,2.821 L21.163,45.658C20.766,45.128,20.336,44.618,19.859,44.141z M16.62,41.738c-0.957-0.516-1.971-0.918-3.034-1.198l21.79-21.79 l2.116,2.116L16.62,41.738z M43.84,10.286c0.389-0.389,1.022-0.389,1.411,0l8.464,8.464c0.389,0.389,0.389,1.022,0,1.411 l-4.232,4.232l-9.874-9.874L43.84,10.286z"/></svg>
            <div className="ml-7"> edit your design</div>
            <div className="py-5">
              width :
              <input type="number" placeholder="px" className="rounded-md px-2 text-[#252627] w-[60%]"></input>
            </div>
            <div  className="py-5">
              height :
              <input type="number" placeholder="px" className="rounded-md px-2 text-[#252627] w-[60%]"></input>
            </div>
            <div className="py-4">
            
              <label className="block text-white font-bold mb-2" htmlFor="color-picker">
              text color :
      </label>
      <input
        className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="color-picker"
        type="color"
        value={selectedColor1}
        onChange={handleColorChange1}
      />
      <label className="block text-white font-bold mt-2">
         {selectedColor1.toUpperCase()}
      </label>
              
              
            </div> 
            <div className="py-3">
            <label className="block text-white font-bold mb-2" htmlFor="color-picker">
              Background 
      </label>
      <input
        className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="color-picker"
        type="color"
        value={selectedColor2}
        onChange={handleColorChange2}
      />
      <label className="block text-white font-bold mt-2">
         {selectedColor2.toUpperCase()}
      </label>
              
              
              
            </div> 
            <div className="py-2">
              borders
              <div class="relative inline-flex">
  <select class="bg-white border text-[#252627] border-gray-300 rounded-md shadow-sm px-4 py-2 pr-8 focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
    <option>sm</option>
    <option>md</option>
    <option>lg</option>
  </select>
  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
      <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
    </svg>
  </div>
</div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderOfDesign;
