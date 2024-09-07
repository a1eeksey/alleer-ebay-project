import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

function SideBar_NavContentItem({ itemTitle, navContentItemTitles, isActive }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isActive]);

  return (
    <div className="mb-1">
      <ul
        id={`${itemTitle}-nav`}
        className="sidebarNav nav-content"
        ref={contentRef}
        style={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {navContentItemTitles.map((item, index) => (
          <li className="mt-1" key={index}>
            <Link to={`/dashboard/${itemTitle.toLowerCase().replace(' ', '-')}/${item.toLowerCase().replace(' ', '-')}`}>
              <span>{item}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar_NavContentItem;
