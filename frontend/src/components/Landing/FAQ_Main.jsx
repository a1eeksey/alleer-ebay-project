import React, {useState} from "react";
import FAQ_FirstToggleSection from "../Landing/FAQ_FirstToggleSection"
import FAQ_SecondToggleSection from "../Landing/FAQ_SecondToggleSection"

function FAQ_Main() {
  // Active id = opened item text
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-container">
        <div className="faq-container_body">
          <ul className="faq-toggle row" id="faq-toggle">
            <FAQ_FirstToggleSection activeId={activeId} toggleItem={toggleItem} />
            <FAQ_SecondToggleSection activeId={activeId} toggleItem={toggleItem} />
          </ul>
        </div>
    </section>
  );
}

export default FAQ_Main;
