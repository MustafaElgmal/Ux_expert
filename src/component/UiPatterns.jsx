import React from "react";
import "../pages/ui patterns/ui-pattern-styles.css";
import uipatternpic1 from "../assets/ui1.jpeg";
import uipatternpic2 from "../assets/ui2.jpeg";
import uipatternpic3 from "../assets/ui5.jpg";
import uipatternpic4 from "../assets/u4.jpg";

import { downloadUiPattern } from "../utils/functions";
import { useNavigate } from "react-router-dom";
const UiPattern = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  px-[10%] py-[1%]">
      <div className="flex justify-between">
        <div className="basis-11/12  w-[77%] text-xl font-bold text-left">
          Trending UI Patterns
        </div>
        <button
          className=" md:basis-3/12 w-[9%] lg:basis-1/12 text-xl font-[500] text-center transition-[0.5s] hover:text-[#0085F7] hover:font-semibold"
          onClick={() => navigate("/uiPattern")}
        >
          See all
        </button>
      </div>
      <div className="mt-[2%]">
        <div className="container-body">
        <div className="item">
            <div
              className="pattern"
              onClick={() => downloadUiPattern(uipatternpic2)}
            >
              <img
                src={uipatternpic2}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Expandable Input</div>
          </div>
          <div className="item">
            <div
              className="pattern"
              onClick={() => downloadUiPattern(uipatternpic3)}
            >
              <img
                src={uipatternpic3}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Structured Format</div>
          </div>
          <div className="item">
            <div
              className="pattern"
              onClick={() => downloadUiPattern(uipatternpic1)}
            >
              <img
                src={uipatternpic1}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Password Strength Meter</div>
          </div>
          
          <div className="item">
            <div
              className="pattern "
              onClick={() => downloadUiPattern(uipatternpic4)}
            >
              <img
                src={uipatternpic4}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Rule Builder</div>
          </div>
          
        
        
        </div>
      </div>
    </div>
  );
};

export default UiPattern;
