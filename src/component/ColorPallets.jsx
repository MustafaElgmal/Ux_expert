import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import html2canvas from "html2canvas";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Interactives from "./Interactives"
import ColorPallets from "./ColorPallet";
import { useNavigate } from "react-router-dom";
import UIDPatterns from "./UIDPatterns";
const pallets = [
  {
    colors: ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"],
  },
];
const ColorPallet = () => {
  const navigate = useNavigate();
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
    <div className=" w-full  px-[10%] py-[1%]">
      <div className="flex justify-between w-full">
        <div className="basis-11/12  w-[77%] text-xl font-bold text-left">
          Trendy color palettes you may like..
        </div>
        <button
          className=" md:basis-3/12 w-[9%] lg:basis-1/12 text-xl font-[500] text-center transition-[0.5s] hover:text-[#0085F7] hover:font-semibold"
          onClick={() => navigate("/colorPallet")}
        >
          See all
        </button>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={8}
        navigation={true}
        Navigation={{
          clickable: true,
        }}
        modules={[Navigation]}
        className=" mt-[2%]  "
      >
        {pallets.map((pallet) => (
          <SwiperSlide className="w-[25%]  overflow-hidden   ">
<<<<<<< HEAD
            <ColorPallets palletColors={pallet.colors} printRef={printRef} />
           <Interactives handleDownloadImage={handleDownloadImage}/>
          </SwiperSlide>
        ))}
             {pallets.map((pallet) => (
          <SwiperSlide className="w-[25%]  overflow-hidden   ">
            <ColorPallets palletColors={pallet.colors} printRef={printRef} />
           <Interactives handleDownloadImage={handleDownloadImage}/>
          </SwiperSlide>
        ))}
             {pallets.map((pallet) => (
          <SwiperSlide className="w-[25%]  overflow-hidden   ">
            <ColorPallets palletColors={pallet.colors} printRef={printRef} />
           <Interactives handleDownloadImage={handleDownloadImage}/>
          </SwiperSlide>
        ))}
             {pallets.map((pallet) => (
          <SwiperSlide className="w-[25%]  overflow-hidden   ">
            <ColorPallets palletColors={pallet.colors} printRef={printRef} />
           <Interactives handleDownloadImage={handleDownloadImage}/>
          </SwiperSlide>
        ))}
             {pallets.map((pallet) => (
          <SwiperSlide className="w-[25%]  overflow-hidden   ">
            <ColorPallets palletColors={pallet.colors} printRef={printRef} />
           <Interactives handleDownloadImage={handleDownloadImage}/>
=======
              <ColorPallets palletColors={pallet.colors} printRef={printRef} />
            <div className="interactives flex flex-row justify-end gap-[9px] mt-2  ">
              <button
                className={isLike ? "liked" : "like-button"}
                onClick={onLikeButtonClick}
              >
                <style>{` 
                          .like-button {
                            background-image:url('${hearto}');
                            background-repeat:no-repeat;
                            width:100%;
                            height:24px;
                            margin-left:73%;
                          }
                                .liked {
                                background-image:url('${heart}');
                                background-repeat:no-repeat;
                                width:100%; 
                                height:24px;
                              
                                }
                            
                                  
                                }
                                
                                `}</style>
                
              </button>
              <span className="text-[#7D7C83] text-sm">{`${like}`}</span>
              <button onClick={setToggle}>
                <i class="fa fa-ellipsis-h text-[#000000] rounded-[50%] mr-2"></i>
              </button>
            </div>
            {toggle && (
              <div className="ml-[20%]  rounded-lg md:text-right md:-ml-12 md:text-xs">
                <button
                  className="download w-48  text-right mb-[2px]  "
                  onClick={handleDownloadImage}
                >
                  {" "}
                  Download Palette{" "}
                  <i class="fa fa-download" aria-hidden="true"></i>
                </button>
                <button className="details w-48  text-right">
                  {" "}
                  Palette Details{" "}
                  <i class="fa fa-info-circle" aria-hidden="true"></i>
                </button>
              </div>
            )}
>>>>>>> 2cfce7e8aee7fd94b1be68ff06f6111260d1cb5f
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default ColorPallet;
