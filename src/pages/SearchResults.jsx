import React, { useEffect } from "react";
import ColorSwiper from "../component/ColorSwiper";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Landing2 from "../component/landing2/Landing2";
import SearchContent from "../component/SearchContent";
const SearchResults = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
