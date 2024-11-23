import React from "react";

function UserDropdown({handleClick, userName, userPicture, userEmail}) {
    return (
        <div className="dropDownProfile flex flex-col">
            <div className="user-profile-img_container w-100">
                <img className="mx-3" src={userPicture} alt="" />
            </div>
            <h5 className="username-dropdown text-center">{userName}</h5>
            <h6 className="mb-4 text-center">{userEmail}</h6>
            <ul className="flex flex-col mb-0">
                <div className="mt-5 divider">.</div>
                <li onClick={handleClick} className="log-out_item py-1" >Log out</li>
            </ul>
        </div>
    );
}

export default UserDropdown;