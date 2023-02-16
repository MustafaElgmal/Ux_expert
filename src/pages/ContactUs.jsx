import React,{useEffect} from "react";
import Header from "../component/Header";
import ContactUsCom from "../component/ContactUs";
import Footer from "../component/Footer";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-screen">
      <Header />
      <ContactUsCom />
      <Footer />
    </div>
  );
};

export default ContactUs;
