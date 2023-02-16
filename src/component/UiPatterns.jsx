import React from "react";
import "../pages/ui patterns/ui-pattern-styles.css";
import uipatternpic from "../assets/uipattern1.png";
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
              onClick={() => downloadUiPattern(uipatternpic)}
            >
              <img
                src={uipatternpic}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Collectible Achievements</div>
          </div>
          <div className="item">
            <div
              className="pattern"
              onClick={() => downloadUiPattern(uipatternpic)}
            >
              <img
                src={uipatternpic}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Collectible Achievements</div>
          </div>
          <div className="item">
            <div
              className="pattern"
              onClick={() => downloadUiPattern(uipatternpic)}
            >
              <img
                src={uipatternpic}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Collectible Achievements</div>
          </div>
          <div className="item">
            <div
              className="pattern"
              onClick={() => downloadUiPattern(uipatternpic)}
            >
              <img
                src={uipatternpic}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Collectible Achievements</div>
          </div>
          <div className="item">
            <div
              className="pattern"
              onClick={() => downloadUiPattern(uipatternpic)}
            >
              <img
                src={uipatternpic}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Collectible Achievements</div>
          </div>
          <div className="item">
            <div
              className="pattern"
              onClick={() => downloadUiPattern(uipatternpic)}
            >
              <img
                src={uipatternpic}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Collectible Achievements</div>
          </div>
          <div className="item">
            <div
              className="pattern"
              onClick={() => downloadUiPattern(uipatternpic)}
            >
              <img
                src={uipatternpic}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Collectible Achievements</div>
          </div>
          <div className="item">
            <div
              className="pattern"
              onClick={() => downloadUiPattern(uipatternpic)}
            >
              <img
                src={uipatternpic}
                alt="No pict"
                className="w-full h-full object-cover transition-[0.5s] hover:scale-[1.1]"
              />
            </div>
            <div className="text">Collectible Achievements</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiPattern;
