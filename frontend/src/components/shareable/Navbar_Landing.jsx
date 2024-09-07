import React from "react";
import { Link } from 'react-router-dom';

// Icons
import arrowRight from "../../assets/icons/arrowRight.svg" 

function Navbar_Landing() {
    return (
<nav className="navbar navbar-expand-lg d-sm-fixed-top">

      <nav className="navbar w-100 d-flex justify-content-between">
  <div className="container-fluid navbar_container">
    <Link className="navbar-brand logo" href="/">ALLEER</Link>
    <button className="navbar-toggler border-0 py-0 px-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <div className="gap mx-5 px-3 d-flex text-white">.</div>
        <ul className="navbar-nav align-items-center justify-content-center flex-grow-1 mb-5 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feature">Feature</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/integrations">Integrations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faq">FAQ</Link>
          </li>
        </ul>
        <div className="navbar_buttons d-flex align-items-center justify-content-center gap-3">
        <Link to="/signin" className="btn btn-outline-primary">Sign In</Link>
          <Link className="btn btn-primary" to="/signup">
            Get started
            <span>
              <img src={arrowRight} alt="..." />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
    </nav>
    )
}

export default Navbar_Landing;