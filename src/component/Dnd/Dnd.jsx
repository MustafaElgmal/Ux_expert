import React, { useRef, useState } from "react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import "./dnd-styles.css";

const Dnd = () => {
  const [files, setFiles] = useState();
  const [extracted, setExtracted] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [closeToast, setCloseToast] = useState(true);
  const inputFile=useRef(null)
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    setAnimate(true);
    setFiles(false);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
    e.preventDefault();
    setFiles(e.dataTransfer.files[0]);
    console.log(e.dataTransfer.files[0]);
    setExtracted([]);
    setEmptyMessage(false);
  };
  const handleBrowse = (e) => {
    setAnimate(true);
    setFiles(false);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
    e.preventDefault();
    setFiles(e.target.files[0]);
    setExtracted([]);
    setEmptyMessage(false);
  };

  const handleClick = () => {
    if (files) {
      setAnimate(true);
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const colors = {};
          for (let i = 0; i < imageData.data.length; i += 4) {
            const [r, g, b] = [
              imageData.data[i],
              imageData.data[i + 1],
              imageData.data[i + 2],
            ];
            const hexCode = rgbToHex(r, g, b);
            if (colors[hexCode]) {
              colors[hexCode]++;
            } else {
              colors[hexCode] = 1;
            }
          }
          const sortedColors = Object.entries(colors).sort(
            (a, b) => b[1] - a[1]
          );
          const topColors = sortedColors.slice(0, 8);
          setExtracted(topColors);
          setAnimate(false);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(files);
    } else {
      setEmptyMessage(true);
    }
  };

  const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  return (
    <div className=" mt-14 mb-5">
      <div
        className={`fixed w-full ${
          closeToast ? "hidden" : "block"
        } top-0  z-[20] pt-4 pb-2 animate-bounce border-b-4 border-[#4585f7] bg-gray-50 flex items-center justify-center`}
      >
        <AiFillCheckCircle className="check-icon mr-2  ml-auto" />
        copied to the clipboard!{" "}
        <p className=" ml-auto mr-5">
          <AiOutlineClose
            onClick={() => setCloseToast(true)}
            className=" cursor-pointer text-xl"
          />
        </p>
      </div>
      <div className="dnd-container lg:mx-40">
        {animate && (
          <div className="load">
            <div className="load-animation"></div>
            <p>Uploading</p>
          </div>
        )}
        <div
          className="dnd w-[80%] xl:w-[60%]"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e)}
        >
          <p className=" capitalize">Please Drag and drop your logo or <input type="file" className="hidden" ref={inputFile} onChange={handleBrowse} /> <span onClick={()=>inputFile.current.click()} className="text-blue-800 cursor-pointer hover:underline active:text-red-700">Browse</span></p>
        </div>
        {files && (
          <div className="uploaded">
            {files.name}
            <p>
              <div className="flex justify-center mt-3">
                <div className=" h-[12.5em] w-[12.5em] ring-4 ring-[#4585f7] shadow-2xl rounded-md object-contain">
                  <img
                    src={URL.createObjectURL(files)}
                    className="h-[100%] w-[100%] rounded-md "
                    alt=""
                  />
                </div>
              </div>
            </p>
          </div>
        )}
        {emptyMessage && <div className="uploaded">No Files Uploaded</div>}
        <div className="button-container">
          <button className="extract-button " onClick={handleClick}>
            {" "}
            {!extracted.length ? (
              <p>Extract logo colors</p>
            ) : (
              <div>
                Extracted Successfully
                <AiFillCheckCircle className="check-icon" />
              </div>
            )}
          </button>
        </div>
        {extracted.length > 0 && (
          <div className="bg-white p-5 mt-[1px] rounded-md">
            {extracted.map(([color, frequency]) => (
              <div className="inline-block mx-3" key={color}>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(color);
                    setCloseToast(false)
                    setTimeout(() => setCloseToast(true), 3000);
                  }}
                  className={` color-container relative w-[10rem] shadow-xl  h-[10%] overflow-hidden my-5 p-3 cursor-pointer  rounded-md  `}
                  style={{ backgroundColor: color }}
                >
                  <div className="color-shadow absolute translate-x-[-10rem] z-[1] bg-slate-400 opacity-50 top-0 left-0 w-full h-full hover:translate-x-[20px] "></div>
                  <p className=" color-text relative z-[5] uppercase ">
                    {color}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dnd;
