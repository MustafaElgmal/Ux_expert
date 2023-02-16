import React,{useEffect} from "react";
import Header from "../component/Header";
import Dnd from "../component/Dnd/Dnd";
import Footer from "../component/Footer";

const ColorPalletFromLogo = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-screen">
      <Header />
      <Dnd />
      <Footer />
    </div>
  );
};

export default ColorPalletFromLogo;
