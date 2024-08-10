import React from "react";
import FAQ_FirstToggleSection from "../Landing/FAQ_FirstToggleSection"
import FAQ_SecondToggleSection from "../Landing/FAQ_SecondToggleSection"

function FAQ_Main() {
  return (
    <div className="faq-container">
        <div className="faq-container_body">
          <ul className="faq-toggle row" id="faq-toggle">
            <FAQ_FirstToggleSection />
            <FAQ_SecondToggleSection />
          </ul>
        </div>
    </div>
  );
}

export default FAQ_Main;
