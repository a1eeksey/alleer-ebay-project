import React from "react";
import arrowDown from "../../assets/icons/arrowDown.svg"

function FAQToggleItem({id, title, text}) {
  return (
    <li className="faq-toggle_item">
          <span className="faq-toggle_title d-flex justify-content-between py-1 rounded" data-bs-target={`#${id}`} data-bs-toggle="collapse" href="#">
            <div>
              <h6 className="mb-0">{title}</h6>
            </div>
            <img className="down-arrow" src={arrowDown} alt="" />
          </span>

          <ul id={id} className="nav-content collapse" data-bs-parent="#faq-toggle">
            <li className="mt-2">
                <p className="faq-toggle_text c">{text}</p>
            </li>
          </ul>
        </li>
  );
}

export default FAQToggleItem;
