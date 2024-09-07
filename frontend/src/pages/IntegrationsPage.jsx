import React from "react";
import Navbar_Landing from "../components/shareable/Navbar_Landing";
import Home_Header from "../components/Landing/Home_Header"

import IntegrationsImg from "../assets/images/integration.svg"

function Integrations() {
  return (
    <div className="page">
      <div className="container">
          <Navbar_Landing />
          <div className="main">
            <Home_Header title="Integrations" text="Test all system integrations and functions free!" paragraph="Welcome to our About Page, where we collate and respond to the most frequently asked questions about ALLEER and our services, aiming to provide you with quick and easy access to information." image={IntegrationsImg}/>
          </div>
      </div>
    </div>
  );
}

export default Integrations;
