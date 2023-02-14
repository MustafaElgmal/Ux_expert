import React from "react";
import html2canvas from "html2canvas";
import ColorPallet from "./ColorPallet";
import Interactives from "./Interactives";
import { useNavigate } from "react-router-dom";
const pallets = [
  {
    colors: ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"],
  },
];
const SeeAll = () => {
  const navigate=useNavigate()
  const printRef = React.useRef();
  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

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
        <button className="font-semibold hover:text-[#0085F7]" onClick={()=>navigate('/colorPalletFromLogo')}>
          Want to Extract Color
          <br />
          Palette from Your Logo?
        </button>
      </div>

      <div className=" pallet-cont flex flex-row w-full max-h-[350px] gap-[10px]  my-[5%] flex-wrap overflow-hidden">
        {pallets.map((pallet) => (
          <div className="w-[24%] ">
            <ColorPallet palletColors={pallet.colors} printRef={printRef} />
            <Interactives handleDownloadImage={handleDownloadImage} />
          </div>
        ))}
        {pallets.map((pallet) => (
          <div className="w-[24%] ">
            <ColorPallet palletColors={pallet.colors} printRef={printRef} />
            <Interactives handleDownloadImage={handleDownloadImage} />
          </div>
        ))}
        {pallets.map((pallet) => (
          <div className="w-[24%] ">
            <ColorPallet palletColors={pallet.colors} printRef={printRef} />
            <Interactives handleDownloadImage={handleDownloadImage} />
          </div>
        ))}
        {pallets.map((pallet) => (
          <div className="w-[24%] ">
            <ColorPallet palletColors={pallet.colors} printRef={printRef} />
            <Interactives handleDownloadImage={handleDownloadImage} />
          </div>
        ))}
        {pallets.map((pallet) => (
          <div className="w-[24%] ">
            <ColorPallet palletColors={pallet.colors} printRef={printRef} />
            <Interactives handleDownloadImage={handleDownloadImage} />
          </div>
        ))}
        {pallets.map((pallet) => (
          <div className="w-[24%] ">
            <ColorPallet palletColors={pallet.colors} printRef={printRef} />
            <Interactives handleDownloadImage={handleDownloadImage} />
          </div>
        ))}
        {pallets.map((pallet) => (
          <div className="w-[24%] ">
            <ColorPallet palletColors={pallet.colors} printRef={printRef} />
            <Interactives handleDownloadImage={handleDownloadImage} />
          </div>
        ))}
        {pallets.map((pallet) => (
          <div className="w-[24%] ">
            <ColorPallet palletColors={pallet.colors} printRef={printRef} />
            <Interactives handleDownloadImage={handleDownloadImage} />
          </div>
        ))}
      </div>
      <button
        onClick={(e) => {
          document.querySelector(".pallet-cont").style.overflow = "visible";
          document.querySelector(".pallet-cont").style.maxHeight = "100%";
        }}
        className="text-center text-[24px] font-normal border-2 rounded-[10px] bg-[#FFFFFF]  px-20 py-3 shadow-md hover:bg-[#0085F7] hover:text-white mt-[100px]"
      >
        see more palettes
      </button>
    </div>
  );
};

export default SeeAll;
