import React from "react";

function Feature_Item({image, title, text}) {
  return (
    <div className="mycard col-lg-3 mb-5 py-2">
        <div className="d-inline-flex align-items-center p-2 feature mb-3">
            <img src={image} alt="" />
            <h2 className="h6 px-2">{title}</h2>
        </div>
                        
        <p className="card-text">{text}</p>
    </div>
  );
}

export default Feature_Item;
