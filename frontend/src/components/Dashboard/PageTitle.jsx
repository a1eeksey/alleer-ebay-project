import React from "react";
import home from "../../assets/icons/home.svg"

function PageTitle({page}) {
  return (
    <div className="pagetitle">
      <h1>{page}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">
              <img src={home} alt="..." />
            </a>
          </li>
          <li className="breadcrumb-item active">{page}</li>
        </ol>
      </nav>
    </div>
  );
}

export default PageTitle;
