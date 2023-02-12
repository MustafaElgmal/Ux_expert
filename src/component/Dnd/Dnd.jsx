import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "./dnd-styles.css";

const Dnd = () => {
  const [files, setFiles] = useState();
  const [extracted, setExtracted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [emptyMeassage, setEmptyMessage] = useState(false);
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
    setFiles(e.dataTransfer.files[0].name);
    setExtracted(false);
    setEmptyMessage(false);
  };

  const handleClick = () => {
    if (files) {
      setExtracted(true);
    } else {
      setEmptyMessage(true);
    }
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
        {files && <div className="uploaded">{files}</div>}
        {emptyMeassage && <div className="uploaded">No Files Uploaded</div>}
        <div className="button-container">
          <button className="extract-button" onClick={handleClick}>
            {" "}
            {!extracted ? (
              <p>Extract color palette</p>
            ) : (
              <span>
                Extracted Successfully{" "}
                <AiFillCheckCircle className="check-icon" />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dnd;
