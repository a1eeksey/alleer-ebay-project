import React, { useState } from "react";
import SideBar_NavItem from "./SideBar_NavItem";

function SideBar() {
  const [activeId, setActiveId] = useState(null);

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <SideBar_NavItem
          title="HOME"
          navItemTitles={["Dashboard"]}
          activeId={activeId}
          toggleItem={toggleItem}
        />
        <SideBar_NavItem
          title="APPS"
          navItemTitles={["Email", "Calendar"]}
          activeId={activeId}
          toggleItem={toggleItem}
        />
        <SideBar_NavItem
          title="E-COMMERCE"
          navItemTitles={["Ebay", "Amazon"]}
          activeId={activeId}
          toggleItem={toggleItem}
        />
      </ul>
    </aside>
  );
}

export default SideBar;
