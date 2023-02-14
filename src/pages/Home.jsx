import React, { useState } from "react";
import Landing1 from "../component/landing page 1/Landing1";
import Header from "../component/Header";
import ColorPallet from "../component/ColorPallets";
import UiPattern from "../component/UiPatterns";
import Footer from "../component/Footer";
import Dnd from "../component/Dnd/Dnd";


const Home = () => {
  const [isActive, setisActive] = useState(1);
  return isActive === 1 ? (
    <div className="min-h-screen">
      <Header />
      <Landing1 isActive={isActive} setisActive={setisActive} />
      <ColorPallet />
      <UiPattern />
      <Footer />
    </div>
  ) : (
    <div className="min-h-screen">
      <Header />
      <Landing1 isActive={isActive} setisActive={setisActive} />
      {isActive === 2 ? (
        <UiPattern />
      ) : isActive === 3 ? (
        <ColorPallet />
      ) : (
        <Dnd />
      )}
      <Footer />
    </div>
  );
};

export default Home;
