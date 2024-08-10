import React from "react";
import arrowDown from "../../assets/icons/arrowDown.svg"

// ICONS 
import dashboard from "../../assets/icons/dashboard.svg"
import tasks from "../../assets/icons/tasks.svg"
import bag from "../../assets/icons/bag.svg"
import squares from "../../assets/icons/squares.svg"

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item mb-3">
          <a className="nav-link d-flex justify-content-between px-1 py-1 rounded" data-bs-target="#dashboard-nav" data-bs-toggle="collapse" href="#">
            <div>
              <img src={dashboard} alt="..." />
              <span className="mx-2">Dashboard</span>
            </div>
            <img className="down-arrow" src={arrowDown} alt="" />
          </a>

          <ul id="dashboard-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li className="mt-2">
              <a>
                <span>Overview</span>
              </a>
            </li>
            <li>
              <a>
                <span>Stock management</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item mb-3">
          <a className="nav-link d-flex justify-content-between px-1 py-1 rounded" data-bs-target="#ebay-nav" data-bs-toggle="collapse" href="#">
            <div>
              <img src={tasks} alt="..." />
              <span className="mx-2">Ebay</span>
            </div>
            <img className="down-arrow" src={arrowDown} alt="" />
          </a>

          <ul id="ebay-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li className="mt-2">
              <a>
                <span>Sell an item</span>
              </a>
            </li>
            <li>
              <a>
                <span>Active</span>
              </a>
            </li>
            <li>
              <a>
                <span>Sold</span>
              </a>
            </li>
            <li>
              <a>
                <span>Unsold</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item mb-3">
          <a className="nav-link d-flex justify-content-between px-1 py-1 rounded" data-bs-target="#orders-nav" data-bs-toggle="collapse" href="#">
            <div>
            <img src={bag} alt="..." />
            <span className="mx-2">Orders</span>
            </div>
            <img className="down-arrow" src={arrowDown} alt="" />
          </a>

          <ul id="orders-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li className="mt-2">
              <a>
                <span>Awaiting shipment</span>
              </a>
            </li>
            <li>
              <a>
                <span>Awaiting payment</span>
              </a>
            </li>
            <li>
              <a>
                <span>Paid and shipped</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item mb-3">

          <a className="nav-link d-flex justify-content-between px-1 py-1 rounded" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
            <div>
            <img src={squares} alt="..." />
            <span className="mx-2">Insights</span>
            </div>
            <img className="down-arrow" src={arrowDown} alt="" />
          </a>

          <ul id="tables-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li className="mt-2">
              <a>
                <span>My vehicles</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;

/*
        <div className="bottom-section fixed-bottom">
          <div className="divider">.</div>
          <span className="mx-2">Settings</span>
        </div>
*/

/* 
        {navList.map(nav => {
            <NavItem key={nav._id} nav={nav}/>
          })}
*/