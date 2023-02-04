import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import html2canvas from "html2canvas";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import heart from "../assets/heart.png";
import ColorPallets from "./ColorPallet";
const pallets = [
  {
    colors: ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"],
  },
];
const ColorPallet = () => {
  const [like, setLike] = useState(0),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => {
      setToggleValue(!toggleValue);
    };
    return [toggleValue, toggler];
  };
  const [toggle, setToggle] = useToggle();
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
    <div className=" w-full  px-[10%] py-[3%]">
      <div className="flex flex-row w-full gap-x-24">
        <div className="basis-11/12  w-[77%] text-xl font-bold text-left">
          Trendy color palettes you may like..
        </div>
        <button className=" md:basis-3/12 w-[9%] lg:basis-1/12 text-xl font-semibold text-center transition-[0.5s] hover:text-[#0085F7]">
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
        className="mySwiper my-[5%] "
      >
        {pallets.map((pallet) => (
          <SwiperSlide className="w-[25%]  overflow-hidden ">
              <ColorPallets palletColors={pallet.colors} printRef={printRef} />
            <div className="interactives flex flex-row justify-end gap-2">
              <button
                className={"like-button " + (isLike ? "liked" : "")}
                onClick={onLikeButtonClick}
              >
                <style>{` 
                                .liked {
                                background-image:url('${heart}');
                                    width:100%;
                                    height:24px;
                                    background-repeat: no-repeat;
                                    margin-left:74.95%;
                                }
                                `}</style>
                <i
                  class=" fa fa-heart-o text-[#f66868] text-[24px]"
                  aria-hidden="true"
                ></i>
              </button>
              <span className="text-[#7D7C83] text-sm">{`${like}`}</span>
              <button onClick={setToggle}>
                <i class="fa fa-ellipsis-h text-[#000000] rounded-[50%] mr-2"></i>
              </button>
            </div>
            {toggle && (
              <div className="ml-[20%]  rounded-lg md:text-right md:-ml-12 md:text-xs">
                <button
                  className="download w-48  text-right mb-[5px]  "
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ColorPallet;
