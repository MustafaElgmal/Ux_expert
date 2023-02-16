import React,{useEffect} from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import  SeeAll from "../component/SeeAll";

const ColorPallet = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-screen">
      <Header />
      <SeeAll />
      <Footer />
    </div>
  );
};

export default ColorPallet;
