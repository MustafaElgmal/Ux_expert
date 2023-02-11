import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import html2canvas from "html2canvas";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import heart from "../assets/heart.svg";
import hearto from "../assets/heart-o.svg";
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
  const[isclicked,setIsClicked]=useState(false);
  return (
    <div className=" w-full  px-[10%] py-[1%]">
      <div className="flex flex-row w-full gap-x-24">
        <div className="basis-11/12  w-[77%] text-xl font-bold text-left">
          Trendy color palettes you may like..
        </div>
        <button className=" md:basis-3/12 w-[9%] lg:basis-1/12 text-xl font-[500] text-center transition-[0.5s] hover:text-[#0085F7] hover:font-semibold">
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
        className="mySwiper mt-[2%] mb-[5px] "
      >
        {pallets.map((pallet) => (
          <SwiperSlide className="w-[25%]  overflow-hidden   ">
              <ColorPallets palletColors={pallet.colors} printRef={printRef} />
            <div className="interactives flex flex-row justify-end gap-[9px] mt-2 md:gap-[1px] md:flex md:flex-row-reverse md:justify-end md:w-full ">
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
                                @media screen and (min-width:768px){
                                  .like-button{
                                    margin-left:2%;
                                  }
                                  .liked {
                                    margin-left:-100px;
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ColorPallet;
