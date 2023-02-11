import React, { useState } from "react";
import html2canvas from "html2canvas";
import heart from "../assets/heart.svg";
import ColorPallet from "./ColorPallet";
const pallets = [
  {
    colors: ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"],
  },
];
const SimilarPallets = () => {
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
    <div className="my-[3%] ">
      <div className="font-bold text-left text-5xl ">Similar palettes</div>
          <div className=" pallet-cont flex flex-row w-full max-h-[350px] gap-[10px]  my-[5%] flex-wrap overflow-hidden">
          {pallets.map((pallet) => (
          <div className="w-[24%] ">
            <ColorPallet palletColors={pallet.colors} printRef={printRef} />
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
          </div>
        ))}
    
            
          </div> 
          <button onClick={(e)=>{document.querySelector('.pallet-cont').style.overflow="visible";
                                  document.querySelector('.pallet-cont').style.maxHeight="700px";
        }} className="text-center text-[24px] font-normal border-2 rounded-[10px] bg-[#FFFFFF] w-[40%] h-full  shadow-md hover:bg-[#0085F7] hover:text-white mt-[100px]" >
              see more palettes
          </button>
    </div>
  );
};

export default SimilarPallets;
