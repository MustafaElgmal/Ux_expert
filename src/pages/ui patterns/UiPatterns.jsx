import React,{useEffect} from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import UIDPatterns from "../../component/UIDPatterns";

const UiPatterns = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header />
      <UIDPatterns />
      <Footer />
    </div>
  );
};

export default UiPatterns;
