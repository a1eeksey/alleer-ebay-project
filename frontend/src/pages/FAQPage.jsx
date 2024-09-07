import React from "react";
import Navbar_Landing from "../components/shareable/Navbar_Landing";
import Home_Header from "../components/Landing/Home_Header"
import FAQ_Main from "../components/Landing/FAQ_Main";
import Footer from "../components/shareable/Footer_Landing";

import FAQImg from "../assets/images/FAQ.svg"

function FAQ() {
  return (
    <div className="page">
      <div className="container">
        <Navbar_Landing />
        <div className="main">
          <Home_Header title="FAQ" text="Frequently Asked Questions" paragraph="Welcome to our FAQ, where we collate and respond to the most frequently asked questions about ALLEER and our services, aiming to provide you with quick and easy access to information." image={FAQImg}/>
          <FAQ_Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
