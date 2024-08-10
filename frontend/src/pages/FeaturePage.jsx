import React from "react";
import Navbar_Landing from "../components/shareable/Navbar_Landing";
import Home_Header from "../components/Landing/Home_Header"
import Feature_Main from "../components/Landing/Feature_Main";
import Footer from "../components/shareable/Footer_Landing";

import feature from "../assets/images/feature.svg"

function Feature() {
  return (
    <div>
          <div className="container">
        <Navbar_Landing />
        <div className="main">
          <Home_Header title="Feature" text="An overview of our versatile, intuitive, and optimized tools" paragraph="Detailed insights into the diversity of dewabit: Here, you will discover the multifaceted features of our platform - from efficient item management, streamlined order processing, intelligent analysis tools, to customizable templates and notifications - all carefully designed to simplify, automate, and ultimately optimize your eBay business." image={feature}/>
          <Feature_Main />
        </div>
    </div>
    <Footer />
    </div>
  );
}

export default Feature;
