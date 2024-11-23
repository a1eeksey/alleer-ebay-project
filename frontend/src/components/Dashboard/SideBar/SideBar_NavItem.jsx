import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import SideBar_NavContentItem from "./SideBar_NavContentItem";

// Icons
import arrowDown from "../../../assets/icons/arrowDown.svg";
import dashboard from "../../../assets/icons/dashboard.svg";
import tasks from "../../../assets/icons/tasks.svg";
import bag from "../../../assets/icons/bag.svg";
import squares from "../../../assets/icons/squares.svg";
import email from "../../../assets/icons/email.svg";
import calendar from "../../../assets/icons/calendar.svg";

function SideBar_NavItem({ title, navItemTitles, activeId, toggleItem }) {
  const navContentMap = {
    Dashboard: ["Stock management", "Add item"],
    Email: ["Inbox", "Compose"],
  };

  const iconMap = {
    Dashboard: dashboard,
    Email: email,
    Calendar: calendar,
    Ebay: tasks,
    Amazon: bag,
  };

  return (
    <div className="pb-4">
      <p className="nav-item_header mx-1">{title}</p>
      {navItemTitles.map((item) => (
        <li className="nav-item mb-2" key={item}>
          <div className="nav-link-container" onClick={() => toggleItem(item)}>
            <Link
              to={
                item === "Dashboard"
                  ? "/dashboard"
                  : `/dashboard/${title.toLowerCase()}/${item.toLowerCase().replace(' ', '-')}`
              }
              className="nav-link d-flex justify-content-between px-1 py-1 rounded"
            >
              <div className="d-flex align-items-center">
                <img className="nav-icon" src={iconMap[item]} alt="..." />
                <span className="mx-2">{item}</span>
              </div>
              {navContentMap[item] ? (
                <img className="down-arrow" src={arrowDown} alt="" />
              ) : (
                <div></div>
              )}
            </Link>
          </div>

          <SideBar_NavContentItem
            itemTitle={item}
            navContentItemTitles={navContentMap[item] || []}
            isActive={activeId === item}
          />
        </li>
      ))}
    </div>
  );
}

export default SideBar_NavItem;
