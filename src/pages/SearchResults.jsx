import React from "react";
import ColorSwiper from "../component/ColorSwiper";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Landing2 from "../component/landing2/Landing2";
import SearchContent from "../component/SearchContent";
const SearchResults = () => {
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
