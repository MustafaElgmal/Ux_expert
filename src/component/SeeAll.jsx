import React from "react";
import html2canvas from "html2canvas";
import ColorPallet from "./ColorPallet";
import Interactives from "./Interactives";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { pagination } from "../utils/functions";
import { useEffect } from "react";
const SeeAll = () => {
  let [pageNum, setPageNumber] = useState(1);
  const [pallets, setPallets] = useState([]);
  const navigate = useNavigate();
  const refs = React.useRef([]);
  const handleDownloadImage = async (id) => {
    const element = refs.current[id-1];
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  useEffect(() => {
    setPallets([...pallets, ...pagination(pageNum, 4)]);
  }, [pageNum]);
  return (
    <div className="my-[2%] mx-[10%]">
      <div className="flex flex-row justify-between text-left">
        <div>
          <div className="text-left mb-[3%] font-bold text-3xl">
            Trending Color Palettes
          </div>
          <div className="font-medium">
            Get inspired by thousands of beautiful color
          </div>
          <div className="font-medium">schemes and make something cool!</div>
        </div>
        <button
          className="font-semibold hover:text-[#0085F7]"
          onClick={() => navigate("/colorPalletFromLogo")}
        >
          Want to Extract Color
          <br />
          Palette from Your Logo?
        </button>
      </div>

      <div className=" pallet-cont flex flex-row w-full  gap-[10px]  my-[5%] flex-wrap overflow-hidden">
        {pallets.map((pallet,index) => (
          <div className="w-[24%] ">
            <ColorPallet palletColors={pallet.colors} refs={refs} index={index} />
            <Interactives
              handleDownloadImage={handleDownloadImage}
              pallet={pallet}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => setPageNumber((pageNum += 1))}
        className="text-center text-[24px] font-normal border-2 rounded-[10px] bg-[#FFFFFF]  px-20 py-3 shadow-md hover:bg-[#0085F7] hover:text-white "
      >
        see more palettes
      </button>
    </div>
  );
};

export default SeeAll;
