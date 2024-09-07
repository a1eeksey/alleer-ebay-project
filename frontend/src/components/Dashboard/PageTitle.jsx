import React from "react";
import { Link } from 'react-router-dom';

// Icons
import home from "../../assets/icons/home.svg"

function PageTitle({pageTitle}) {
  return (
    <div className="pagetitle">
      <h1>{pageTitle}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/dashboard">
              <img src={home} alt="..." />
            </Link>
          </li>
          <li className="breadcrumb-item active">{pageTitle}</li>
        </ol>
      </nav>
    </div>
  );
}

export default PageTitle;
