import React,{useEffect} from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import PalletDetails from "../component/PalletDetails";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { findPalet } from "../utils/functions";

const ColorPalletDetails = () => {
  const {id}=useParams()
  const [pallet, setPallet] = useState(findPalet(id));
  useEffect(() => {
    window.scrollTo(0, 0)
    setPallet(findPalet(id))
  }, [id])
  return (
    <div className="min-h-screen">
      <Header />
      <PalletDetails pallet={pallet} />
      <Footer />
    </div>
  );
};

export default ColorPalletDetails;
