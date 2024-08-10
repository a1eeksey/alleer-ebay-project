import React from "react";
import { Link } from 'react-router-dom';

// icons
import toggle from "../../assets/icons/toggle.svg"

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    return (
    <div className="d-flex align-items-center justify-content-between">
        <div className="h4 text-center mt-1 mb-0">
            <Link className="navbar-brand logo logo d-flex align-items-center" to="/">ALLEER</Link>
        </div>
        <div className="toggle-control d-flex align-items-center" onClick={handleToggleSideBar}>
            <img src={toggle} alt="..." className="bi bi-list toggle-sidebar-btn mx-3" />
            <p className="card-text">toggle sidebar</p>
        </div>
    </div>

    );
}

export default Logo;

/*
      <div className="h4 text-center mt-2 mb-0"><Link className="navbar-brand logo" to="/">ALLEER</Link></div>
*/