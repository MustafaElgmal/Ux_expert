import { useEffect, useState } from "react";
import { clickToClip } from "../utils/functions";
export default function ColorPallet({ palletColors, printRef }) {
  const [isCopieds, setIsCopieds] = useState([]);
  useEffect(() => {
    palletColors.forEach((color) =>
      isCopieds.push({ hex: color, isCopied: false })
    );
  }, []);
  return (
    <div className=" overflow-hidden rounded-[10px] w-full h-[80%]  flex flex-row  " ref={printRef}>
        {palletColors.map((color,index) => (
            <button onClick={() => clickToClip(color, isCopieds, setIsCopieds)} className=" btn-color w-[20%] h-[142px]   transition-[0.5s] linear delay-200 "style={{ background: `${color}` }}>
              <div className="color-content text-[#FFFFFFE5]  text-center ">
                {isCopieds.length>0?isCopieds[index].hex===color && isCopieds[index].isCopied?'Copied to clipboard!':color:color}
              </div>
            </button>
        ))}
    </div>
  );
}
