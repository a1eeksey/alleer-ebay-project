import React, { useRef, useEffect } from "react";
import arrowDown from "../../assets/icons/arrowDown.svg";

function FAQToggleItem({ id, title, text, isActive, onClick }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isActive]);

  return (
    <li className={`faq-toggle_item ${isActive ? "active" : ""}`}>
      <span
        className="faq-toggle_title d-flex justify-content-between py-1 rounded"
        onClick={onClick}
      >
        <div>
          <h6 className="mb-0">{title}</h6>
        </div>
        <img className="down-arrow" src={arrowDown} alt="Toggle Arrow" />
      </span>

      <ul
        id={id}
        className="nav-content"
        ref={contentRef}
        style={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <li className="mt-2">
          <p className="faq-toggle_text">{text}</p>
        </li>
      </ul>
    </li>
  );
}

export default FAQToggleItem;
