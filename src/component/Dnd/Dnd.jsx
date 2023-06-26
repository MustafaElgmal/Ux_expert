import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "./dnd-styles.css";

const Dnd = () => {
  const [files, setFiles] = useState();
  const [extracted, setExtracted] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [col,setCol]=useState("");
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
          <p>Please Drag and drop your logo or upload from your device</p>
        </div>
        {files && <div className="uploaded">{files.name}</div>}
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
                <div  className="inline-block mx-3" key={color}>
                  <div className={` h-[10%] text-transparent my-5 p-3 rounded-md hover:text-white `}  style={{ backgroundColor: color }}>
                  {color}
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
