import React from "react";
import Navbar_Landing from "../components/shareable/Navbar_Landing";
import Home_Header from "../components/Landing/Home_Header"
import Home_Second from "../components/Landing/Home_Second";
import Home_Third from "../components/Landing/Home_Third"
import Home_Fourth from "../components/Landing/Home_Fourth";
import Footer from "../components/shareable/Footer_Landing";

import FAQ_Main from "../components/Landing/FAQ_Main";
// Images
import headerImg from "../assets/images/header.svg"

function HomePage() {
    return (
        <div className="page">
            <div className="container">
            <Navbar_Landing/>
            <div className="main">
                <Home_Header title="Listing items made easy" text="With ALLEER, your powerful management software for eBay" paragraph="Your powerful all-in-one platform for online selling on eBay. With our innovative tools and user-friendly interface, you can optimize your eBay business, automate processes, increase sales, and provide outstanding customer support – all from one central place." image={headerImg}/>
                <Home_Second/>
                <Home_Third/>
                <Home_Fourth/>
            </div>
      </div>
    <Footer/>
        </div>
    )
}

export default HomePage;