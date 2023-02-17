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
const ProfileCom = () => {
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
    <div className="mx-[10%] my-[3%] text-left">
      <div className="flex flex-row gap-3 font-medium text-4xl">
        <button className="inline-flex gap-2 hover:text-[#0085F7]" onClick={()=>navigate('/')}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
          </svg>
          <span className="">Home </span>
        </button>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"></path>
        </svg>
        <span className=""> Profile </span>
      </div>
      <div className="my-[5%] ">
        <div className="text-[#212529] font-bold text-[28px]">Your account</div>
      </div>
      <div className="border-b-2  px-[1%] ">
        <div className="text-[#212529] font-medium text-2xl ">Username</div>
        <div className="my-[2%] py-[2%] w-[40%]  font-medium flex flex-row justify-between">
          <input
            type="text"
            value="Username"
            disabled
            className="p-[2%] w-[70%] h-[20%]  bg-white"
          />
          <button className="bg-white w-[20%] p-[2%] border-2  hover:border-[#0085F7] hover:text-[#0085F7]">
            Edit
          </button>
        </div>
      </div>

      <div className="border-b-2   px-[1%] ">
        <div className="text-[#212529] font-medium text-2xl ">
          Email Address
        </div>
        <div className="my-[2%] py-[2%] w-[40%]  font-medium flex flex-row justify-between">
          <input
            type="email"
            value="Username@mail.com"
            disabled
            className="p-[2%] w-[70%] h-[20%] bg-white"
          />
        </div>
      </div>
      <div className="my-[5%] ">
        <div className="text-[#212529] font-bold text-[28px]">
          Your Favorites Color Pallettes
        </div>
      </div>
      <div className=" pallet-cont flex flex-row w-full  gap-[10px]  my-[5%] flex-wrap overflow-hidden">
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
      <div className="flex justify-center items-center">
        <button
          // onClick={(e) => {
          //   document.querySelector(".pallet-cont").style.overflow = "visible";
          //   document.querySelector(".pallet-cont").style.maxHeight = "100%";
          // }}
          className="text-center text-[24px] font-normal border-2 rounded-[10px] bg-[#FFFFFF]  px-20 py-3 shadow-md hover:bg-[#0085F7] hover:text-white mt-[100px]"
        >
          see more liked palettes
        </button>
      </div>
    </div>
  );
};

export default ProfileCom;
