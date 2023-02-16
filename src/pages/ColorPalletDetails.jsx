import React,{useEffect} from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import PalletDetails from "../component/PalletDetails";

const ColorPalletDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-screen">
      <Header />
      <PalletDetails />
      <Footer />
    </div>
  );
};

export default ColorPalletDetails;
