import React from "react";
import arrowDown from "../../assets/icons/arrowDown.svg"

function NavItem( {nav} ) {
  return (
    <div>
      <li className="nav-item mb-3">
        <a className="nav-link d-flex justify-content-between px-1 py-1 rounded" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <span>{nav.name}</span>
          <img className="down-arrow" src={arrowDown} alt="" />
        </a>
      </li>
    </div>
  );
}

export default NavItem;
