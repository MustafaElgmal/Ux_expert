import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ColorSwiper from "../component/ColorSwiper";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Landing2 from "../component/landing2/Landing2";
import SearchContent from "../component/SearchContent";
const SearchResults = () => {
  const [type,setType]=useState(useParams().type)
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(type)
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <Landing2 />
      <SearchContent />
      <ColorSwiper />
      <Footer />
    </div>
  );
};

export default SearchResults;
