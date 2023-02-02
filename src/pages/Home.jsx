import React from "react";
import Landing1 from "../component/landing page 1/Landing1";
import Header from "../component/Header";
import ColorPallet from "../component/ColorPallets";
import UiPattern from '../component/UiPatterns'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Landing1 />
      <ColorPallet/>
      <UiPattern />
      <Footer />

    </div>
  );
};

export default Home;
