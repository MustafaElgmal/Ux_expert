import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Pallet = ({handleDownloadImage,pallet}) => {
  const navigate=useNavigate()
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
  return (
    <div>
    <div className="interactives flex  justify-end gap-2 mt-1  overflow-hidden">
      <div onClick={() => onLikeButtonClick()} className="cursor-pointer">
        {isLike ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.33"
            height="20"
            viewBox="0 0 23.33 20"
          >
            <path
              id="heart"
              d="M11.665,20a.779.779,0,0,1-.573-.235L2.968,11.927a4.314,4.314,0,0,1-.358-.338q-.227-.234-.723-.853A11.5,11.5,0,0,1,1,9.466a7.914,7.914,0,0,1-.7-1.576A5.683,5.683,0,0,1,0,6.094,5.973,5.973,0,0,1,1.653,1.614,6.262,6.262,0,0,1,6.223,0,5.185,5.185,0,0,1,7.87.28a6.687,6.687,0,0,1,1.563.755q.723.475,1.243.892a12.268,12.268,0,0,1,.99.885,11.98,11.98,0,0,1,.99-.885q.521-.417,1.244-.892A6.671,6.671,0,0,1,15.461.28,5.187,5.187,0,0,1,17.107,0a6.262,6.262,0,0,1,4.57,1.614A5.973,5.973,0,0,1,23.33,6.094q0,2.878-2.981,5.859l-8.111,7.813a.779.779,0,0,1-.573.235Z"
              transform="translate(0)"
              fill="#d62828"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.332"
            height="19.999"
            viewBox="0 0 23.332 19.999"
          >
            <path
              id="heart-o"
              d="M21.666,6.094a5.676,5.676,0,0,0-.28-1.862,3.634,3.634,0,0,0-.716-1.283,3.437,3.437,0,0,0-1.062-.774,4.714,4.714,0,0,0-1.224-.4,7.427,7.427,0,0,0-1.276-.1A3.743,3.743,0,0,0,15.65,2a6.672,6.672,0,0,0-1.439.833q-.658.5-1.126.937a10.119,10.119,0,0,0-.781.8.853.853,0,0,1-1.275,0,9.968,9.968,0,0,0-.781-.8q-.469-.436-1.126-.937A6.651,6.651,0,0,0,7.682,2a3.746,3.746,0,0,0-1.458-.332,7.434,7.434,0,0,0-1.276.1,4.7,4.7,0,0,0-1.224.4,3.44,3.44,0,0,0-1.061.774,3.634,3.634,0,0,0-.716,1.283,5.687,5.687,0,0,0-.281,1.862q0,2.187,2.435,4.622l7.565,7.291,7.552-7.278Q21.666,8.281,21.666,6.094Zm1.666,0q0,2.878-2.981,5.859l-8.112,7.812a.817.817,0,0,1-1.146,0L2.968,11.927a4.314,4.314,0,0,1-.358-.338q-.227-.234-.723-.853A11.5,11.5,0,0,1,1,9.466a7.913,7.913,0,0,1-.7-1.576A5.682,5.682,0,0,1,0,6.094,5.972,5.972,0,0,1,1.653,1.614,6.263,6.263,0,0,1,6.224,0,5.185,5.185,0,0,1,7.871.28a6.688,6.688,0,0,1,1.563.755q.723.475,1.243.892a12.268,12.268,0,0,1,.99.885,11.98,11.98,0,0,1,.99-.885q.521-.417,1.244-.892A6.671,6.671,0,0,1,15.462.28,5.187,5.187,0,0,1,17.108,0a6.262,6.262,0,0,1,4.57,1.614,5.972,5.972,0,0,1,1.653,4.479Z"
              transform="translate(0)"
              fill="#7d7c83"
            />
          </svg>
        )}
      </div>
      <span className="text-[#7D7C83] text-sm">{`${like}`}</span>
      <button onClick={setToggle} >
        <i class="fa fa-ellipsis-h text-[#000000] rounded-[50%] mr-2"></i>
      </button>
      
    </div>
    {toggle && (
        <div className="ml-[20%]  rounded-lg md:text-right md:-ml-12 md:text-xs">
          <button
            className="download w-48  text-right mb-[5px]  "
            onClick={()=>handleDownloadImage(pallet.id)}
          >
            {" "}
            Download Palette <i class="fa fa-download" aria-hidden="true"></i>
          </button>
          <button className="details w-48  text-right" onClick={()=>navigate(`/colorPalletDetails/${pallet.id}`)}>
            {" "}
            Palette Details <i class="fa fa-info-circle" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Pallet;
